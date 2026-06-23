// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolicyResponseBodyPolicyAccessTimeRangeConfigEffectiveTime extends $dara.Model {
  /**
   * @remarks
   * The days of the week when access is allowed.
   */
  days?: string[];
  /**
   * @remarks
   * The hours of the day when access is allowed.
   */
  hours?: string[];
  static names(): { [key: string]: string } {
    return {
      days: 'Days',
      hours: 'Hours',
    };
  }

  static types(): { [key: string]: any } {
    return {
      days: { 'type': 'array', 'itemType': 'string' },
      hours: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.days)) {
      $dara.Model.validateArray(this.days);
    }
    if(Array.isArray(this.hours)) {
      $dara.Model.validateArray(this.hours);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBodyPolicyAccessTimeRangeConfig extends $dara.Model {
  /**
   * @remarks
   * The allowed access time slots.
   */
  effectiveTime?: GetPolicyResponseBodyPolicyAccessTimeRangeConfigEffectiveTime[];
  static names(): { [key: string]: string } {
    return {
      effectiveTime: 'EffectiveTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveTime: { 'type': 'array', 'itemType': GetPolicyResponseBodyPolicyAccessTimeRangeConfigEffectiveTime },
    };
  }

  validate() {
    if(Array.isArray(this.effectiveTime)) {
      $dara.Model.validateArray(this.effectiveTime);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBodyPolicyApprovalConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether O\\&M approval is enabled. Valid values:
   * 
   * - **On**: O\\&M approval is enabled.
   * 
   * - **Off**: O\\&M approval is disabled.
   * 
   * @example
   * Off
   */
  switchStatus?: string;
  static names(): { [key: string]: string } {
    return {
      switchStatus: 'SwitchStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBodyPolicyCommandConfigApproval extends $dara.Model {
  /**
   * @remarks
   * The commands that require approval.
   */
  commands?: string[];
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.commands)) {
      $dara.Model.validateArray(this.commands);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBodyPolicyCommandConfigDeny extends $dara.Model {
  /**
   * @remarks
   * The command control mode. Valid values:
   * 
   * - `white`: allowlist.
   * 
   * - `black`: denylist.
   * 
   * @example
   * black
   */
  aclType?: string;
  /**
   * @remarks
   * The commands in the list.
   */
  commands?: string[];
  static names(): { [key: string]: string } {
    return {
      aclType: 'AclType',
      commands: 'Commands',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      commands: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.commands)) {
      $dara.Model.validateArray(this.commands);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBodyPolicyCommandConfig extends $dara.Model {
  /**
   * @remarks
   * The command approval settings.
   */
  approval?: GetPolicyResponseBodyPolicyCommandConfigApproval;
  /**
   * @remarks
   * The command control settings.
   */
  deny?: GetPolicyResponseBodyPolicyCommandConfigDeny;
  static names(): { [key: string]: string } {
    return {
      approval: 'Approval',
      deny: 'Deny',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approval: GetPolicyResponseBodyPolicyCommandConfigApproval,
      deny: GetPolicyResponseBodyPolicyCommandConfigDeny,
    };
  }

  validate() {
    if(this.approval && typeof (this.approval as any).validate === 'function') {
      (this.approval as any).validate();
    }
    if(this.deny && typeof (this.deny as any).validate === 'function') {
      (this.deny as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBodyPolicyIPAclConfig extends $dara.Model {
  /**
   * @remarks
   * The source IP address-based access control mode. Valid values:
   * 
   * - `white`: allowlist.
   * 
   * - `black`: denylist.
   * 
   * @example
   * black
   */
  aclType?: string;
  /**
   * @remarks
   * The IP addresses in the ACL.
   */
  IPs?: string[];
  static names(): { [key: string]: string } {
    return {
      aclType: 'AclType',
      IPs: 'IPs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      IPs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.IPs)) {
      $dara.Model.validateArray(this.IPs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBodyPolicyProtocolConfigRDP extends $dara.Model {
  /**
   * @remarks
   * Indicates whether clipboard download is enabled. Valid values:
   * 
   * - `Enable`
   * 
   * - `Disable`
   * 
   * @example
   * Enable
   */
  clipboardDownload?: string;
  /**
   * @remarks
   * Indicates whether clipboard upload is enabled. Valid values:
   * 
   * - `Enable`
   * 
   * - `Disable`
   * 
   * @example
   * Enable
   */
  clipboardUpload?: string;
  /**
   * @remarks
   * Indicates whether drive redirection and printer mapping are enabled. Valid values:
   * 
   * - `Enable`
   * 
   * - `Disable`
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
   * Indicates whether keyboard recording is enabled. Valid values:
   * 
   * - `Enable`
   * 
   * - `Disable`
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

export class GetPolicyResponseBodyPolicyProtocolConfigSSH extends $dara.Model {
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
   * Indicates whether remote command execution is enabled. Valid values:
   * 
   * - `Enable`
   * 
   * - `Disable`
   * 
   * @example
   * Enable
   */
  execCommand?: string;
  /**
   * @remarks
   * Indicates whether the SFTP channel is enabled. Valid values:
   * 
   * - `Enable`
   * 
   * - `Disable`
   * 
   * @example
   * Enable
   */
  SFTPChannel?: string;
  /**
   * @remarks
   * Indicates whether file downloads over SFTP are enabled. Valid values:
   * 
   * - `Enable`
   * 
   * - `Disable`
   * 
   * @example
   * Enable
   */
  SFTPDownloadFile?: string;
  /**
   * @remarks
   * Indicates whether directory creation over SFTP is enabled. Valid values:
   * 
   * - `Enable`
   * 
   * - `Disable`
   * 
   * @example
   * Enable
   */
  SFTPMkdir?: string;
  /**
   * @remarks
   * Indicates whether file deletion over SFTP is enabled. Valid values:
   * 
   * - `Enable`
   * 
   * - `Disable`
   * 
   * @example
   * Enable
   */
  SFTPRemoveFile?: string;
  /**
   * @remarks
   * Indicates whether file renaming over SFTP is enabled. Valid values:
   * 
   * - `Enable`
   * 
   * - `Disable`
   * 
   * @example
   * Enable
   */
  SFTPRenameFile?: string;
  /**
   * @remarks
   * Indicates whether directory deletion over SFTP is enabled. Valid values:
   * 
   * - `Enable`
   * 
   * - `Disable`
   * 
   * @example
   * Enable
   */
  SFTPRmdir?: string;
  /**
   * @remarks
   * Indicates whether file uploads over SFTP are enabled. Valid values:
   * 
   * - `Enable`
   * 
   * - `Disable`
   * 
   * @example
   * Enable
   */
  SFTPUploadFile?: string;
  /**
   * @remarks
   * Indicates whether the SSH channel is enabled. Valid values:
   * 
   * - `Enable`
   * 
   * - `Disable`
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
   * Indicates whether X11 forwarding is enabled. Valid values:
   * 
   * - `Enable`
   * 
   * - `Disable`
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

export class GetPolicyResponseBodyPolicyProtocolConfig extends $dara.Model {
  /**
   * @remarks
   * The RDP security settings.
   */
  RDP?: GetPolicyResponseBodyPolicyProtocolConfigRDP;
  /**
   * @remarks
   * The SSH and SFTP security settings.
   */
  SSH?: GetPolicyResponseBodyPolicyProtocolConfigSSH;
  static names(): { [key: string]: string } {
    return {
      RDP: 'RDP',
      SSH: 'SSH',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RDP: GetPolicyResponseBodyPolicyProtocolConfigRDP,
      SSH: GetPolicyResponseBodyPolicyProtocolConfigSSH,
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

export class GetPolicyResponseBodyPolicy extends $dara.Model {
  /**
   * @remarks
   * The time-based access control settings.
   */
  accessTimeRangeConfig?: GetPolicyResponseBodyPolicyAccessTimeRangeConfig;
  /**
   * @remarks
   * The O\\&M approval settings.
   */
  approvalConfig?: GetPolicyResponseBodyPolicyApprovalConfig;
  /**
   * @remarks
   * The command control policy.
   */
  commandConfig?: GetPolicyResponseBodyPolicyCommandConfig;
  /**
   * @remarks
   * The remarks on the policy.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The source IP address-based access control settings.
   */
  IPAclConfig?: GetPolicyResponseBodyPolicyIPAclConfig;
  /**
   * @remarks
   * The ID of the control policy.
   * 
   * @example
   * 3
   */
  policyId?: string;
  /**
   * @remarks
   * The name of the control policy.
   * 
   * @example
   * test
   */
  policyName?: string;
  /**
   * @remarks
   * The priority of the control policy. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The protocol control settings.
   */
  protocolConfig?: GetPolicyResponseBodyPolicyProtocolConfig;
  static names(): { [key: string]: string } {
    return {
      accessTimeRangeConfig: 'AccessTimeRangeConfig',
      approvalConfig: 'ApprovalConfig',
      commandConfig: 'CommandConfig',
      comment: 'Comment',
      IPAclConfig: 'IPAclConfig',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      priority: 'Priority',
      protocolConfig: 'ProtocolConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTimeRangeConfig: GetPolicyResponseBodyPolicyAccessTimeRangeConfig,
      approvalConfig: GetPolicyResponseBodyPolicyApprovalConfig,
      commandConfig: GetPolicyResponseBodyPolicyCommandConfig,
      comment: 'string',
      IPAclConfig: GetPolicyResponseBodyPolicyIPAclConfig,
      policyId: 'string',
      policyName: 'string',
      priority: 'number',
      protocolConfig: GetPolicyResponseBodyPolicyProtocolConfig,
    };
  }

  validate() {
    if(this.accessTimeRangeConfig && typeof (this.accessTimeRangeConfig as any).validate === 'function') {
      (this.accessTimeRangeConfig as any).validate();
    }
    if(this.approvalConfig && typeof (this.approvalConfig as any).validate === 'function') {
      (this.approvalConfig as any).validate();
    }
    if(this.commandConfig && typeof (this.commandConfig as any).validate === 'function') {
      (this.commandConfig as any).validate();
    }
    if(this.IPAclConfig && typeof (this.IPAclConfig as any).validate === 'function') {
      (this.IPAclConfig as any).validate();
    }
    if(this.protocolConfig && typeof (this.protocolConfig as any).validate === 'function') {
      (this.protocolConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the control policy.
   */
  policy?: GetPolicyResponseBodyPolicy;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0D29F2C0-8B4B-5861-9474-F3F23D25594B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: GetPolicyResponseBodyPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

