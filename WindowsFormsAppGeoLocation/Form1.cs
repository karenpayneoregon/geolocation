using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Device.Location;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsAppGeoLocation
{
    public partial class Form1 : Form
    {
        private readonly GeoCoordinateWatcher _geoWatcher;
        public Form1()
        {
            InitializeComponent();

            _geoWatcher = new GeoCoordinateWatcher();
            _geoWatcher.StatusChanged += GeoWatcherOnStatusChanged;

        }

        private void GeoWatcherOnStatusChanged(object sender, GeoPositionStatusChangedEventArgs e)
        {

            if (e.Status != GeoPositionStatus.Ready) return;

            GeoPositionPermission allowed = _geoWatcher.Permission;


            GeoPosition<GeoCoordinate> coordinate = _geoWatcher.Position;

            GeoCoordinate deviceLocation = coordinate.Location;
            DateTimeOffset fetchedAt = coordinate.Timestamp;
            reply.Text = $"Lat: {deviceLocation.Latitude}, Long: {deviceLocation.Longitude}, fetched at: {fetchedAt.DateTime.ToShortTimeString()}";

        }

        private void cmdGet_Click(object sender, EventArgs e)
        {

            _geoWatcher.Start();

            cmdGet.Enabled = false;
        }

        private void cmdStop_Click(object sender, EventArgs e)
        {
            _geoWatcher.Stop();
            cmdGet.Enabled = true;
        }
    }
}
