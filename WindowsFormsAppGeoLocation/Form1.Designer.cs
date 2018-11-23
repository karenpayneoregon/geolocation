namespace WindowsFormsAppGeoLocation
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.reply = new System.Windows.Forms.TextBox();
            this.cmdGet = new System.Windows.Forms.Button();
            this.cmdStop = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // reply
            // 
            this.reply.Location = new System.Drawing.Point(32, 21);
            this.reply.Multiline = true;
            this.reply.Name = "reply";
            this.reply.Size = new System.Drawing.Size(522, 49);
            this.reply.TabIndex = 0;
            // 
            // cmdGet
            // 
            this.cmdGet.Location = new System.Drawing.Point(35, 76);
            this.cmdGet.Name = "cmdGet";
            this.cmdGet.Size = new System.Drawing.Size(75, 23);
            this.cmdGet.TabIndex = 1;
            this.cmdGet.Text = "Get";
            this.cmdGet.UseVisualStyleBackColor = true;
            this.cmdGet.Click += new System.EventHandler(this.cmdGet_Click);
            // 
            // cmdStop
            // 
            this.cmdStop.Location = new System.Drawing.Point(116, 76);
            this.cmdStop.Name = "cmdStop";
            this.cmdStop.Size = new System.Drawing.Size(75, 23);
            this.cmdStop.TabIndex = 2;
            this.cmdStop.Text = "Stop";
            this.cmdStop.UseVisualStyleBackColor = true;
            this.cmdStop.Click += new System.EventHandler(this.cmdStop_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(576, 119);
            this.Controls.Add(this.cmdStop);
            this.Controls.Add(this.cmdGet);
            this.Controls.Add(this.reply);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedToolWindow;
            this.Name = "Form1";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Code sample";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox reply;
        private System.Windows.Forms.Button cmdGet;
        private System.Windows.Forms.Button cmdStop;
    }
}

