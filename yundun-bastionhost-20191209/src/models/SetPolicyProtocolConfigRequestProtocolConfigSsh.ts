// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPolicyProtocolConfigRequestProtocolConfigSSH extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable remote command execution. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * > If you do not specify this parameter, the default value Disable is used.
   * 
   * @example
   * Enable
   */
  execCommand?: string;
  /**
   * @remarks
   * Specifies whether to enable SFTP channels. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * > 
   * 
   * *   If you do not specify this parameter, the default value Disable is used.
   * 
   * *   You must set at least one of the following parameters to Enable: SSHChannel and SFTPChannel.
   * 
   * *   If you select Enable Only SFTP Permission for a host account, do not set SSHChannel and SFTPChannel to Disable for the account. Otherwise, users of the bastion host cannot use the account to access the host.
   * 
   * @example
   * Enable
   */
  SFTPChannel?: string;
  /**
   * @remarks
   * Specifies whether to enable file downloading during SFTP-based O\\&M. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * > If you do not specify this parameter, the default value Disable is used.
   * 
   * @example
   * Enable
   */
  SFTPDownloadFile?: string;
  /**
   * @remarks
   * Specifies whether to enable folder creation during SFTP-based O\\&M. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * > If you do not specify this parameter, the default value Disable is used.
   * 
   * @example
   * Enable
   */
  SFTPMkdir?: string;
  /**
   * @remarks
   * Specifies whether to enable file deletion during SFTP-based O\\&M. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * > If you do not specify this parameter, the default value Disable is used.
   * 
   * @example
   * Enable
   */
  SFTPRemoveFile?: string;
  /**
   * @remarks
   * Specifies whether to enable file renaming during SFTP-based O\\&M. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * > If you do not specify this parameter, the default value Disable is used.
   * 
   * @example
   * Enable
   */
  SFTPRenameFile?: string;
  /**
   * @remarks
   * Specifies whether to enable folder deletion during SFTP-based O\\&M. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * > If you do not specify this parameter, the default value Disable is used.
   * 
   * @example
   * Enable
   */
  SFTPRmdir?: string;
  /**
   * @remarks
   * Specifies whether to enable file uploading during SFTP-based O\\&M. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * > If you do not specify this parameter, the default value Disable is used.
   * 
   * @example
   * Enable
   */
  SFTPUploadFile?: string;
  /**
   * @remarks
   * Specifies whether to enable SSH channels. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * > 
   * 
   * *   If you do not specify this parameter, the default value Disable is used.
   * 
   * *   You must set at least one of the following parameters to Enable: SSHChannel and SFTPChannel. If you set SSHChannel to Disable, SSH-based logon is disabled for the asset account. Proceed with caution.
   * 
   * *   If you select Enable Only SFTP Permission for a host account, do not set SSHChannel and SFTPChannel to Disable for the account. Otherwise, users of the bastion host cannot use the account to access the host.
   * 
   * @example
   * Enable
   */
  SSHChannel?: string;
  /**
   * @remarks
   * Specifies whether to enable X11 forwarding. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * > If you do not specify this parameter, the default value Disable is used.
   * 
   * @example
   * Enable
   */
  x11Forwarding?: string;
  static names(): { [key: string]: string } {
    return {
      execCommand: 'ExecCommand',
      SFTPChannel: 'SFTPChannel',
      SFTPDownloadFile: 'SFTPDownloadFile',
      SFTPMkdir: 'SFTPMkdir',
      SFTPRemoveFile: 'SFTPRemoveFile',
      SFTPRenameFile: 'SFTPRenameFile',
      SFTPRmdir: 'SFTPRmdir',
      SFTPUploadFile: 'SFTPUploadFile',
      SSHChannel: 'SSHChannel',
      x11Forwarding: 'X11Forwarding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execCommand: 'string',
      SFTPChannel: 'string',
      SFTPDownloadFile: 'string',
      SFTPMkdir: 'string',
      SFTPRemoveFile: 'string',
      SFTPRenameFile: 'string',
      SFTPRmdir: 'string',
      SFTPUploadFile: 'string',
      SSHChannel: 'string',
      x11Forwarding: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

