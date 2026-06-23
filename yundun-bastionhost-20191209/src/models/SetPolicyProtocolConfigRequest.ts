// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPolicyProtocolConfigRequestProtocolConfigRDP extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow clipboard content to be downloaded. Valid values:
   * 
   * - Enable
   * 
   * - Disable
   * 
   * > The default value is Disable.
   * 
   * @example
   * Enable
   */
  clipboardDownload?: string;
  /**
   * @remarks
   * Specifies whether to allow clipboard content to be uploaded. Valid values:
   * 
   * - Enable
   * 
   * - Disable
   * 
   * > The default value is Disable.
   * 
   * @example
   * Enable
   */
  clipboardUpload?: string;
  /**
   * @remarks
   * Specifies whether to enable drive and printer mapping. Valid values:
   * 
   * - Enable
   * 
   * - Disable
   * 
   * > The default value is Disable.
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
   * Specifies whether to record keyboard input. Valid values:
   * 
   * - Enable
   * 
   * - Disable
   * 
   * > The default value is Disable.
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
   * Specifies whether to allow remote command execution. Valid values:
   * 
   * - Enable
   * 
   * - Disable
   * 
   * > The default value is Disable.
   * 
   * @example
   * Enable
   */
  execCommand?: string;
  /**
   * @remarks
   * Specifies whether to enable the SFTP channel. Valid values:
   * 
   * - Enable
   * 
   * - Disable
   * 
   * > * The default value is Disable.
   * >
   * > * At least one of the SSH channel and the SFTP channel must be enabled.
   * >
   * > * If you grant only SFTP permissions to a host account, do not disable the SSH and SFTP channels for that account in the control policy. Otherwise, you cannot use the host account to access the target server through Bastionhost.
   * 
   * @example
   * Enable
   */
  SFTPChannel?: string;
  /**
   * @remarks
   * Specifies whether to allow file downloads over SFTP. Valid values:
   * 
   * - Enable
   * 
   * - Disable
   * 
   * > The default value is Disable.
   * 
   * @example
   * Enable
   */
  SFTPDownloadFile?: string;
  /**
   * @remarks
   * Specifies whether to allow folder creation over SFTP. Valid values:
   * 
   * - Enable
   * 
   * - Disable
   * 
   * > The default value is Disable.
   * 
   * @example
   * Enable
   */
  SFTPMkdir?: string;
  /**
   * @remarks
   * Specifies whether to allow file deletions over SFTP. Valid values:
   * 
   * - Enable
   * 
   * - Disable
   * 
   * > The default value is Disable.
   * 
   * @example
   * Enable
   */
  SFTPRemoveFile?: string;
  /**
   * @remarks
   * Specifies whether to allow file renames over SFTP. Valid values:
   * 
   * - Enable
   * 
   * - Disable
   * 
   * > The default value is Disable.
   * 
   * @example
   * Enable
   */
  SFTPRenameFile?: string;
  /**
   * @remarks
   * Specifies whether to allow folder deletion over SFTP. Valid values:
   * 
   * - Enable
   * 
   * - Disable
   * 
   * > The default value is Disable.
   * 
   * @example
   * Enable
   */
  SFTPRmdir?: string;
  /**
   * @remarks
   * Specifies whether to allow file uploads over SFTP. Valid values:
   * 
   * - Enable
   * 
   * - Disable
   * 
   * > The default value is Disable.
   * 
   * @example
   * Enable
   */
  SFTPUploadFile?: string;
  /**
   * @remarks
   * Specifies whether to enable the SSH channel. Valid values:
   * 
   * - Enable
   * 
   * - Disable
   * 
   * > * The default value is Disable.
   * >
   * > * At least one of the SSH channel and the SFTP channel must be enabled. If you disable the SSH channel, you cannot use SSH permissions to log on to the asset account. Configure this parameter with caution.
   * >
   * > * If you grant only SFTP permissions to a host account, do not disable the SSH and SFTP channels for that account in the control policy. Otherwise, you cannot use the host account to access the target server through Bastionhost.
   * 
   * @example
   * Enable
   */
  SSHChannel?: string;
  /**
   * @example
   * Enable
   */
  tcpForwarding?: string;
  /**
   * @remarks
   * Specifies whether to enable X11 forwarding. Valid values:
   * 
   * - Enable
   * 
   * - Disable
   * 
   * > The default value is Disable.
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
      tcpForwarding: 'TcpForwarding',
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
      tcpForwarding: 'string',
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
   * The RDP options.
   */
  RDP?: SetPolicyProtocolConfigRequestProtocolConfigRDP;
  /**
   * @remarks
   * The SSH and SFTP options.
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
   * The ID of the Bastionhost instance.
   * 
   * > Call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain the instance ID.
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
   * > Call the [ListPolicies](https://help.aliyun.com/document_detail/2758876.html) operation to obtain the policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 61
   */
  policyId?: string;
  /**
   * @remarks
   * The protocol control configuration.
   * 
   * This parameter is required.
   */
  protocolConfig?: SetPolicyProtocolConfigRequestProtocolConfig;
  /**
   * @remarks
   * The ID of the region where the Bastionhost instance resides.
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

