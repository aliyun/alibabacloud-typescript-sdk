// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPolicyProtocolConfigRequestProtocolConfigRDP extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable downloading from the clipboard. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * > If you do not specify this parameter, the default value Disable is used.
   * 
   * @example
   * Enable
   */
  clipboardDownload?: string;
  /**
   * @remarks
   * Specifies whether to enable uploading from the clipboard. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * > If you do not specify this parameter, the default value Disable is used.
   * 
   * @example
   * Enable
   */
  clipboardUpload?: string;
  /**
   * @remarks
   * Specifies whether to enable driver mapping. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * > If you do not specify this parameter, the default value Disable is used.
   * 
   * @example
   * Enable
   */
  diskRedirection?: string;
  /**
   * @example
   * Enable
   */
  diskRedirectionDownload?: string;
  /**
   * @example
   * Enable
   */
  diskRedirectionUpload?: string;
  /**
   * @remarks
   * Specifies whether to enable keyboard operation recording. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * > If you do not specify this parameter, the default value Disable is used.
   * 
   * @example
   * Enable
   */
  recordKeyboard?: string;
  static names(): { [key: string]: string } {
    return {
      clipboardDownload: 'ClipboardDownload',
      clipboardUpload: 'ClipboardUpload',
      diskRedirection: 'DiskRedirection',
      diskRedirectionDownload: 'DiskRedirectionDownload',
      diskRedirectionUpload: 'DiskRedirectionUpload',
      recordKeyboard: 'RecordKeyboard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipboardDownload: 'string',
      clipboardUpload: 'string',
      diskRedirection: 'string',
      diskRedirectionDownload: 'string',
      diskRedirectionUpload: 'string',
      recordKeyboard: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyProtocolConfigRequestProtocolConfigSSH extends $dara.Model {
  /**
   * @example
   * Enable
   */
  allowDirectTcp?: string;
  /**
   * @example
   * Enable
   */
  allowTcpForwarding?: string;
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
      allowDirectTcp: 'AllowDirectTcp',
      allowTcpForwarding: 'AllowTcpForwarding',
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
      allowDirectTcp: 'string',
      allowTcpForwarding: 'string',
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

export class SetPolicyProtocolConfigRequestProtocolConfig extends $dara.Model {
  /**
   * @remarks
   * The settings of the Remote Desktop Protocol (RDP) options.
   */
  RDP?: SetPolicyProtocolConfigRequestProtocolConfigRDP;
  /**
   * @remarks
   * The settings of the SSH and SSH Fine Transfer Protocol (SFTP) options.
   */
  SSH?: SetPolicyProtocolConfigRequestProtocolConfigSSH;
  static names(): { [key: string]: string } {
    return {
      RDP: 'RDP',
      SSH: 'SSH',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RDP: SetPolicyProtocolConfigRequestProtocolConfigRDP,
      SSH: SetPolicyProtocolConfigRequestProtocolConfigSSH,
    };
  }

  validate() {
    if(this.RDP && typeof (this.RDP as any).validate === 'function') {
      (this.RDP as any).validate();
    }
    if(this.SSH && typeof (this.SSH as any).validate === 'function') {
      (this.SSH as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyProtocolConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The bastion host ID.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the bastion host ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the control policy that you want to modify.
   * 
   * > You can call the [ListPolicies](https://help.aliyun.com/document_detail/2758876.html) operation to query the control policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 61
   */
  policyId?: string;
  /**
   * @remarks
   * The protocol control settings.
   * 
   * This parameter is required.
   */
  protocolConfig?: SetPolicyProtocolConfigRequestProtocolConfig;
  /**
   * @remarks
   * The region ID of the bastion host.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      protocolConfig: 'ProtocolConfig',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      policyId: 'string',
      protocolConfig: SetPolicyProtocolConfigRequestProtocolConfig,
      regionId: 'string',
    };
  }

  validate() {
    if(this.protocolConfig && typeof (this.protocolConfig as any).validate === 'function') {
      (this.protocolConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

