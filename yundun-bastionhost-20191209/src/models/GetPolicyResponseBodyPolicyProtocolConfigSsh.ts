// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolicyResponseBodyPolicyProtocolConfigSSH extends $dara.Model {
  /**
   * @remarks
   * Indicates whether remote command execution is enabled. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * @example
   * Enable
   */
  execCommand?: string;
  /**
   * @remarks
   * Indicates whether the SFTP channel option is enabled. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * @example
   * Enable
   */
  SFTPChannel?: string;
  /**
   * @remarks
   * Indicates whether file downloading is enabled in SFTP-based O\\&M. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * @example
   * Enable
   */
  SFTPDownloadFile?: string;
  /**
   * @remarks
   * Indicates whether folder creation is enabled in SFTP-based O\\&M. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * @example
   * Enable
   */
  SFTPMkdir?: string;
  /**
   * @remarks
   * Indicates whether file deletion is enabled in SFTP-based O\\&M. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * @example
   * Enable
   */
  SFTPRemoveFile?: string;
  /**
   * @remarks
   * Indicates whether file renaming is enabled in SFTP-based O\\&M. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * @example
   * Enable
   */
  SFTPRenameFile?: string;
  /**
   * @remarks
   * Indicates whether folder deletion is enabled in SFTP-based O\\&M. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * @example
   * Enable
   */
  SFTPRmdir?: string;
  /**
   * @remarks
   * Indicates whether file uploading is enabled in SFTP-based O\\&M. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * @example
   * Enable
   */
  SFTPUploadFile?: string;
  /**
   * @remarks
   * Indicates whether the SSH channel option is enabled. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * @example
   * Enable
   */
  SSHChannel?: string;
  /**
   * @remarks
   * Indicates whether X11 forwarding is enabled. Valid values:
   * 
   * *   Enable
   * *   Disable
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

