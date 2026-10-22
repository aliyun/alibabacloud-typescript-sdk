// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPolicyProtocolConfigRequestProtocolConfigRDP extends $dara.Model {
  /**
   * @remarks
   * The clipboard download configuration. Valid values:
   * 
   * - Enable: Enabled.
   * - Disable: Disabled.
   * 
   * > If this parameter is not specified, the default value is Disable.
   * 
   * @example
   * Enable
   */
  clipboardDownload?: string;
  /**
   * @remarks
   * The clipboard upload configuration. Valid values:
   * 
   * - Enable: Enabled.
   * - Disable: Disabled.
   * > If this parameter is not specified, the default value is Disable.
   * 
   * @example
   * Enable
   */
  clipboardUpload?: string;
  /**
   * @remarks
   * The drive/printer mapping configuration. Valid values:
   * 
   * - Enable: Enabled.
   * - Disable: Disabled.
   * > If this parameter is not specified, the default value is Disable.
   * 
   * @example
   * Enable
   */
  diskRedirection?: string;
  /**
   * @remarks
   * Specifies whether to allow disk download.
   * 
   * @example
   * Enable
   */
  diskRedirectionDownload?: string;
  /**
   * @remarks
   * Specifies whether to allow disk upload.
   * 
   * @example
   * Enable
   */
  diskRedirectionUpload?: string;
  /**
   * @remarks
   * The keyboard recording configuration. Valid values:
   * 
   * - Enable: Enabled.
   * - Disable: Disabled.
   * > If this parameter is not specified, the default value is Disable.
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
   * @remarks
   * Specifies whether to allow direct TCP connection.
   * 
   * @example
   * Enable
   */
  allowDirectTcp?: string;
  /**
   * @remarks
   * Specifies whether to allow TCP forwarding.
   * 
   * @example
   * Enable
   */
  allowTcpForwarding?: string;
  /**
   * @remarks
   * The remote command execution configuration. Valid values:
   * 
   * - Enable: Enabled.
   * - Disable: Disabled.
   * > If this parameter is not specified, the default value is Disable.
   * 
   * @example
   * Enable
   */
  execCommand?: string;
  /**
   * @remarks
   * The SFTP channel configuration. Valid values:
   * 
   * - Enable: Enabled.
   * - Disable: Disabled.
   * 
   * > - If this parameter is not specified, the default value is Disable.
   * > - At least one of the SSH channel and SFTP channel must be set to Enable.
   * > - If you enable the SFTP-only permission for a host account, do not disable both the SSH channel and SFTP channel for that account in the control policy. Otherwise, you cannot use the host account to access the target server through the bastion host.
   * 
   * @example
   * Enable
   */
  SFTPChannel?: string;
  /**
   * @remarks
   * The SFTP file download configuration. Valid values:
   * 
   * - Enable: Enabled.
   * - Disable: Disabled.
   * > If this parameter is not specified, the default value is Disable.
   * 
   * @example
   * Enable
   */
  SFTPDownloadFile?: string;
  /**
   * @remarks
   * The SFTP folder creation configuration. Valid values:
   * 
   * - Enable: Enabled.
   * - Disable: Disabled.
   * > If this parameter is not specified, the default value is Disable.
   * 
   * @example
   * Enable
   */
  SFTPMkdir?: string;
  /**
   * @remarks
   * The SFTP file deletion configuration. Valid values:
   * 
   * - Enable: Enabled.
   * - Disable: Disabled.
   * > If this parameter is not specified, the default value is Disable.
   * 
   * @example
   * Enable
   */
  SFTPRemoveFile?: string;
  /**
   * @remarks
   * The SFTP file rename configuration. Valid values:
   * 
   * - Enable: Enabled.
   * - Disable: Disabled.
   * > If this parameter is not specified, the default value is Disable.
   * 
   * @example
   * Enable
   */
  SFTPRenameFile?: string;
  /**
   * @remarks
   * The SFTP folder deletion configuration. Valid values:
   * 
   * - Enable: Enabled.
   * - Disable: Disabled.
   * > If this parameter is not specified, the default value is Disable.
   * 
   * @example
   * Enable
   */
  SFTPRmdir?: string;
  /**
   * @remarks
   * The SFTP file upload configuration. Valid values:
   * 
   * - Enable: Enabled.
   * - Disable: Disabled.
   * > If this parameter is not specified, the default value is Disable.
   * 
   * @example
   * Enable
   */
  SFTPUploadFile?: string;
  /**
   * @remarks
   * The SSH channel configuration. Valid values:
   * 
   * - Enable: Enabled.
   * - Disable: Disabled.
   * 
   * > - If this parameter is not specified, the default value is Disable.
   * > - At least one of the SSH channel and SFTP channel must be set to Enable. If the SSH channel is set to Disable, you cannot log on to asset accounts by using SSH permissions. Proceed with caution.
   * > - If you enable the SFTP-only permission for a host account, do not disable both the SSH channel and SFTP channel for that account in the control policy. Otherwise, you cannot use the host account to access the target server through the bastion host.
   * 
   * @example
   * Enable
   */
  SSHChannel?: string;
  /**
   * @remarks
   * Specifies whether to allow TCP forwarding.
   * 
   * @example
   * Enable
   */
  tcpForwarding?: string;
  /**
   * @remarks
   * The X11 forwarding configuration. Valid values:
   * 
   * - Enable: Enabled.
   * - Disable: Disabled.
   * > If this parameter is not specified, the default value is Disable.
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
   * The RDP option configuration details.
   */
  RDP?: SetPolicyProtocolConfigRequestProtocolConfigRDP;
  /**
   * @remarks
   * The SSH and SFTP option configuration details.
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
   * The instance ID of the bastion host.
   * > You can invoke [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the control policy to modify.
   * 
   * > You can call [ListPolicies](https://help.aliyun.com/document_detail/2758876.html) to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 61
   */
  policyId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
   */
  projectId?: number;
  /**
   * @remarks
   * The protocol control configuration.
   * 
   * This parameter is required.
   */
  protocolConfig?: SetPolicyProtocolConfigRequestProtocolConfig;
  /**
   * @remarks
   * The region ID of the bastion host.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      projectId: 'ProjectId',
      protocolConfig: 'ProtocolConfig',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      policyId: 'string',
      projectId: 'number',
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

