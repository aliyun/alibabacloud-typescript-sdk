// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPolicyGroupRequestAuthorizeAccessPolicyRule extends $dara.Model {
  /**
   * @remarks
   * The client IP address range. Specify the value in CIDR notation.
   * 
   * This parameter is required.
   * 
   * @example
   * 47.100.XX.XX/16
   */
  cidrIp?: string;
  /**
   * @remarks
   * The description of the client IP address whitelist.
   * 
   * @example
   * test
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      cidrIp: 'CidrIp',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIp: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequestAuthorizeSecurityPolicyRule extends $dara.Model {
  /**
   * @remarks
   * The destination IPv4 address range. Specify the value in CIDR notation.
   * 
   * @example
   * 10.0.XX.XX/8
   */
  cidrIp?: string;
  /**
   * @remarks
   * The description of the security group rule.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The protocol type of the security group rule.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The policy of the security group rule.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The port range of the security group rule. The value of this parameter depends on the \\`IpProtocol\\` parameter:
   * 
   * - If the protocol is TCP or UDP, the port range is 1 to 65535. Use a forward slash (/) to separate the start and end port numbers. For example: 1/200.
   * 
   * - If the protocol is ICMP, the port range is -1/-1.
   * 
   * - If the protocol is GRE, the port range is -1/-1.
   * 
   * - If IpProtocol is set to all, the port range is -1/-1.
   * 
   * For more information about common ports, see [Common ports](https://help.aliyun.com/document_detail/40724.html).
   * 
   * @example
   * 22/22
   */
  portRange?: string;
  /**
   * @remarks
   * The priority of the security group rule. A smaller value indicates a higher priority. Valid values: 1 to 60. Default value: 1.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * The direction of the security group rule.
   * 
   * @example
   * inflow
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cidrIp: 'CidrIp',
      description: 'Description',
      ipProtocol: 'IpProtocol',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIp: 'string',
      description: 'string',
      ipProtocol: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequestClientType extends $dara.Model {
  /**
   * @remarks
   * The type of client.
   * 
   * > If you do not specify this parameter, logons from all client types are allowed by default.
   * 
   * @example
   * windows
   */
  clientType?: string;
  /**
   * @remarks
   * Specifies whether to allow logons from this client type.
   * 
   * > If you do not specify this parameter, logons from all client types are allowed by default.
   * 
   * @example
   * ON
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clientType: 'ClientType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequestDeviceRedirects extends $dara.Model {
  /**
   * @remarks
   * The type of peripheral device.
   * 
   * @example
   * camera
   */
  deviceType?: string;
  /**
   * @remarks
   * The redirection type.
   * 
   * @example
   * usbRedirect
   */
  redirectType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceType: 'DeviceType',
      redirectType: 'RedirectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceType: 'string',
      redirectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequestDeviceRules extends $dara.Model {
  /**
   * @remarks
   * The name of the device.
   * 
   * @example
   * sandisk
   */
  deviceName?: string;
  /**
   * @remarks
   * The product ID (PID).
   * 
   * @example
   * 0x0781
   */
  devicePid?: string;
  /**
   * @remarks
   * The type of peripheral device.
   * 
   * @example
   * storage
   */
  deviceType?: string;
  /**
   * @remarks
   * The vendor ID (VID). For more information, see [Valid USB Vendor IDs](https://www.usb.org/sites/default/files/vendor_ids032322.pdf_1.pdf).
   * 
   * @example
   * 0x55b1
   */
  deviceVid?: string;
  /**
   * @remarks
   * The link optimization command.
   * 
   * @example
   * 2:0
   */
  optCommand?: string;
  platforms?: string;
  /**
   * @remarks
   * The redirection type.
   * 
   * @example
   * usbRedirect
   */
  redirectType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      devicePid: 'DevicePid',
      deviceType: 'DeviceType',
      deviceVid: 'DeviceVid',
      optCommand: 'OptCommand',
      platforms: 'Platforms',
      redirectType: 'RedirectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      devicePid: 'string',
      deviceType: 'string',
      deviceVid: 'string',
      optCommand: 'string',
      platforms: 'string',
      redirectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequestDomainResolveRule extends $dara.Model {
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * Policy description.
   */
  description?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * *.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The resolution policy.
   * 
   * @example
   * allow
   */
  policy?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      domain: 'Domain',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      domain: 'string',
      policy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequestRevokeAccessPolicyRule extends $dara.Model {
  /**
   * @remarks
   * The client IP address range to delete. Specify the value in CIDR notation.
   * 
   * @example
   * 47.100.XX.XX/16
   */
  cidrIp?: string;
  /**
   * @remarks
   * The description of the client IP address whitelist to delete.
   * 
   * @example
   * test
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      cidrIp: 'CidrIp',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIp: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequestRevokeSecurityPolicyRule extends $dara.Model {
  /**
   * @remarks
   * The destination IPv4 address range to delete. Specify the value in CIDR notation.
   * 
   * @example
   * 47.100.XX.XX/16
   */
  cidrIp?: string;
  /**
   * @remarks
   * The description of the security group rule to delete.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The protocol type of the security group rule to delete.
   * 
   * @example
   * tcp
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The policy of the security group rule to delete.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The port range of the security group rule to delete. The value of this parameter depends on the \\`IpProtocol\\` parameter:
   * 
   * - If the protocol is TCP or UDP, the port range is 1 to 65535. Use a forward slash (/) to separate the start and end port numbers. For example: 1/200.
   * 
   * - If the protocol is ICMP, the port range is -1/-1.
   * 
   * - If the protocol is GRE, the port range is -1/-1.
   * 
   * - If IpProtocol is set to all, the port range is -1/-1.
   * 
   * For more information about common ports, see [Common ports](https://help.aliyun.com/document_detail/40724.html).
   * 
   * @example
   * 22/22
   */
  portRange?: string;
  /**
   * @remarks
   * The priority of the security group rule to delete. A smaller value indicates a higher priority. Valid values: 1 to 60. Default value: 1.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * The direction of the security group rule to delete.
   * 
   * @example
   * outflow
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cidrIp: 'CidrIp',
      description: 'Description',
      ipProtocol: 'IpProtocol',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIp: 'string',
      description: 'string',
      ipProtocol: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequestUsbSupplyRedirectRule extends $dara.Model {
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * Test rule
   */
  description?: string;
  /**
   * @remarks
   * The device class. This parameter is required when \\`UsbRuleType\\` is set to 1. For more information, see [Defined Class Codes](https://www.usb.org/defined-class-codes).
   * 
   * @example
   * 0Eh
   */
  deviceClass?: string;
  /**
   * @remarks
   * The device subclass. This parameter is required when \\`UsbRuleType\\` is set to 1. For more information, see [Defined Class Codes](https://www.usb.org/defined-class-codes).
   * 
   * @example
   * xxh
   */
  deviceSubclass?: string;
  /**
   * @remarks
   * The product ID (PID).
   * 
   * @example
   * 08**
   */
  productId?: string;
  /**
   * @remarks
   * The USB redirection type.
   * 
   * @example
   * 1
   */
  usbRedirectType?: number;
  /**
   * @remarks
   * The type of USB redirection rule.
   * 
   * @example
   * 1
   */
  usbRuleType?: number;
  /**
   * @remarks
   * The vendor ID (VID). For more information, see [Valid USB Vendor IDs](https://www.usb.org/sites/default/files/vendor_ids032322.pdf_1.pdf).
   * 
   * @example
   * 04**
   */
  vendorId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      deviceClass: 'DeviceClass',
      deviceSubclass: 'DeviceSubclass',
      productId: 'ProductId',
      usbRedirectType: 'UsbRedirectType',
      usbRuleType: 'UsbRuleType',
      vendorId: 'VendorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      deviceClass: 'string',
      deviceSubclass: 'string',
      productId: 'string',
      usbRedirectType: 'number',
      usbRuleType: 'number',
      vendorId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether a user has administrative permissions after logging on to the cloud computer.
   * 
   * > This feature is available only for invitational preview. It is not publicly available.
   * 
   * @example
   * deny
   */
  adminAccess?: string;
  /**
   * @remarks
   * Specifies whether to enable screen capture prevention.
   * 
   * @example
   * on
   */
  appContentProtection?: string;
  /**
   * @remarks
   * The client IP address whitelist.
   */
  authorizeAccessPolicyRule?: ModifyPolicyGroupRequestAuthorizeAccessPolicyRule[];
  /**
   * @remarks
   * A list of security group rules.
   */
  authorizeSecurityPolicyRule?: ModifyPolicyGroupRequestAuthorizeSecurityPolicyRule[];
  /**
   * @remarks
   * Specifies whether to enable local camera redirection.
   * 
   * @example
   * on
   */
  cameraRedirect?: string;
  /**
   * @remarks
   * A list of logon method control rules.
   */
  clientType?: ModifyPolicyGroupRequestClientType[];
  /**
   * @remarks
   * The clipboard redirection policy.
   * 
   * @example
   * off
   */
  clipboard?: string;
  /**
   * @remarks
   * The device redirection rules.
   */
  deviceRedirects?: ModifyPolicyGroupRequestDeviceRedirects[];
  /**
   * @remarks
   * The custom peripheral device rules.
   * 
   * **if can be null:**
   * false
   */
  deviceRules?: ModifyPolicyGroupRequestDeviceRules[];
  /**
   * @remarks
   * The domain names that can be accessed. Wildcard characters (\\*) are supported. Separate multiple domain names with commas.
   * 
   * @example
   * on
   */
  domainList?: string;
  /**
   * @remarks
   * The details of the domain name resolution policy.
   */
  domainResolveRule?: ModifyPolicyGroupRequestDomainResolveRule[];
  /**
   * @remarks
   * The type of domain name resolution policy.
   * 
   * @example
   * OFF
   */
  domainResolveRuleType?: string;
  /**
   * @remarks
   * Specifies whether to allow users to request assistance from the administrator.
   * 
   * @example
   * on
   */
  endUserApplyAdminCoordinate?: string;
  /**
   * @remarks
   * Specifies whether to enable stream collaboration between users.
   * 
   * @example
   * on
   */
  endUserGroupCoordinate?: string;
  /**
   * @remarks
   * Specifies whether to enable the image quality policy for graphics cloud desktops. Enabling this policy improves performance and user experience in professional design scenarios.
   * 
   * @example
   * off
   */
  gpuAcceleration?: string;
  /**
   * @remarks
   * The policy for access from web clients.
   * 
   * > Use the `ClientType` parameter to manage logon methods.
   * 
   * @example
   * off
   */
  html5Access?: string;
  /**
   * @remarks
   * The policy for file transfers from web clients.
   * 
   * @example
   * off
   */
  html5FileTransfer?: string;
  /**
   * @remarks
   * The network communication protocol.
   * 
   * @example
   * BOTH
   */
  internetCommunicationProtocol?: string;
  /**
   * @remarks
   * The local disk mapping policy.
   * 
   * @example
   * off
   */
  localDrive?: string;
  /**
   * @remarks
   * The maximum amount of time that the client can attempt to reconnect to the cloud computer after an unexpected disconnection. Valid values: 30 to 7200. Unit: seconds.
   * 
   * @example
   * 120
   */
  maxReconnectTime?: number;
  /**
   * @remarks
   * The name of the cloud computer policy.
   * 
   * @example
   * testPolicyGroupName
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to enable network redirection.
   * 
   * > This feature is available only for invitational preview. It is not publicly available.
   * 
   * @example
   * on
   */
  netRedirect?: string;
  /**
   * @remarks
   * The ID of the cloud computer policy.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-gx2x1dhsmthe9****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The policy for preemptible logon.
   * 
   * > To ensure the user experience and data security of the current user, other users cannot preempt the cloud computer. This parameter is set to `off` by default and cannot be changed.
   * 
   * @example
   * off
   */
  preemptLogin?: string;
  /**
   * @remarks
   * The usernames of users who can preempt the logon of a cloud computer. You can specify up to five usernames.
   * 
   * > To ensure the user experience and data security of the current user, other users cannot preempt the cloud computer.
   */
  preemptLoginUser?: string[];
  /**
   * @remarks
   * The printer redirection policy.
   * 
   * @example
   * off
   */
  printerRedirection?: string;
  /**
   * @remarks
   * Specifies whether to enable custom screen recording.
   * 
   * @example
   * OFF
   */
  recordContent?: string;
  /**
   * @remarks
   * The expiration time of custom screen recording files. The default value is 30. Unit: days.
   * 
   * @example
   * 30
   */
  recordContentExpires?: number;
  /**
   * @remarks
   * Specifies whether to enable screen recording.
   * 
   * @example
   * OFF
   */
  recording?: string;
  /**
   * @remarks
   * Specifies whether to record audio from the cloud computer.
   * 
   * @example
   * on
   */
  recordingAudio?: string;
  /**
   * @remarks
   * The duration for viewing a screen recording file. Unit: minutes. The recorded files are automatically split into chunks and uploaded to a bucket based on the specified duration. When a file reaches 300 MB, it is overwritten on a rolling basis.
   * 
   * @example
   * 10
   */
  recordingDuration?: number;
  /**
   * @remarks
   * The end time of the screen recording. The time is in the HH:MM:SS format. This parameter is valid only when \\`Recording\\` is set to \\`PERIOD\\`.
   * 
   * @example
   * 08:59:00
   */
  recordingEndTime?: string;
  /**
   * @remarks
   * The retention period of screen recording files. Valid values: 1 to 180. Unit: days.
   * 
   * @example
   * 15
   */
  recordingExpires?: number;
  /**
   * @remarks
   * The frame rate for screen recording. Unit: frames per second (fps).
   * 
   * @example
   * 5
   */
  recordingFps?: number;
  /**
   * @remarks
   * The start time of the screen recording. The time is in the HH:MM:SS format. This parameter is valid only when \\`Recording\\` is set to \\`PERIOD\\`.
   * 
   * @example
   * 08:00:00
   */
  recordingStartTime?: string;
  /**
   * @remarks
   * Specifies whether to send a notification to the client when a screen recording starts.
   * 
   * @example
   * off
   */
  recordingUserNotify?: string;
  /**
   * @remarks
   * The content of the screen recording notification. This parameter is optional.
   * 
   * @example
   * Your cloud desktop is being recorded.
   */
  recordingUserNotifyMessage?: string;
  /**
   * @remarks
   * The ID of the region. Call [DescribeRegions](~~DescribeRegions~~) to query the regions that WUYING Workspace supports.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remote assistance policy for keyboard and mouse control.
   * 
   * @example
   * fullControl
   */
  remoteCoordinate?: string;
  /**
   * @remarks
   * The client IP address whitelist to delete.
   */
  revokeAccessPolicyRule?: ModifyPolicyGroupRequestRevokeAccessPolicyRule[];
  /**
   * @remarks
   * The security group rules to delete.
   */
  revokeSecurityPolicyRule?: ModifyPolicyGroupRequestRevokeSecurityPolicyRule[];
  /**
   * @remarks
   * The scope of the policy.
   * 
   * @example
   * GLOBAL
   */
  scope?: string;
  /**
   * @remarks
   * The value of the scope. This parameter is valid only when \\`Scope\\` is set to \\`IP\\`.
   */
  scopeValue?: string[];
  /**
   * @remarks
   * The USB redirection policy.
   * 
   * @example
   * off
   */
  usbRedirect?: string;
  /**
   * @remarks
   * The USB redirection rules.
   */
  usbSupplyRedirectRule?: ModifyPolicyGroupRequestUsbSupplyRedirectRule[];
  /**
   * @remarks
   * Specifies whether to enable multimedia redirection.
   * 
   * @example
   * on
   */
  videoRedirect?: string;
  /**
   * @remarks
   * The image display quality.
   * 
   * @example
   * low
   */
  visualQuality?: string;
  /**
   * @remarks
   * The watermark policy.
   * 
   * @example
   * off
   */
  watermark?: string;
  /**
   * @remarks
   * Specifies whether to enable the screen capture prevention watermark feature.
   * 
   * @example
   * off
   */
  watermarkAntiCam?: string;
  /**
   * @remarks
   * The font color of the watermark. Valid values: 0 to 16777215.
   * 
   * @example
   * 0
   */
  watermarkColor?: number;
  /**
   * @remarks
   * The angle of the watermark. Valid values: -10 to -30.
   * 
   * @example
   * -10
   */
  watermarkDegree?: number;
  /**
   * @remarks
   * The font size of the watermark. Valid values: 10 to 20.
   * 
   * @example
   * 10
   */
  watermarkFontSize?: number;
  /**
   * @remarks
   * The font style of the watermark.
   * 
   * @example
   * plain
   */
  watermarkFontStyle?: string;
  /**
   * @remarks
   * The strength of the blind watermark.
   * 
   * @example
   * medium
   */
  watermarkPower?: string;
  /**
   * @remarks
   * The number of watermark rows.
   * 
   * > This parameter is not yet available.
   * 
   * @example
   * 3
   */
  watermarkRowAmount?: number;
  /**
   * @remarks
   * The security priority rule for watermarks.
   * 
   * @example
   * off
   */
  watermarkSecurity?: string;
  /**
   * @remarks
   * The transparency of the watermark.
   * 
   * @example
   * LIGHT
   */
  watermarkTransparency?: string;
  /**
   * @remarks
   * The transparency of the watermark. A larger value indicates lower transparency. Valid values: 10 to 100.
   * 
   * @example
   * 10
   */
  watermarkTransparencyValue?: number;
  /**
   * @remarks
   * The type of watermark. You can specify up to three types. Separate them with commas.
   * 
   * > If you set this parameter to `Custom`, you must also specify the custom text in the `WatermarkCustomText` parameter.
   * 
   * @example
   * EndUserId
   */
  watermarkType?: string;
  /**
   * @remarks
   * Specifies whether to display the entry for Alibaba Cloud AI Assistant in the floating bar of the cloud computer.
   * 
   * @example
   * on
   */
  wyAssistant?: string;
  static names(): { [key: string]: string } {
    return {
      adminAccess: 'AdminAccess',
      appContentProtection: 'AppContentProtection',
      authorizeAccessPolicyRule: 'AuthorizeAccessPolicyRule',
      authorizeSecurityPolicyRule: 'AuthorizeSecurityPolicyRule',
      cameraRedirect: 'CameraRedirect',
      clientType: 'ClientType',
      clipboard: 'Clipboard',
      deviceRedirects: 'DeviceRedirects',
      deviceRules: 'DeviceRules',
      domainList: 'DomainList',
      domainResolveRule: 'DomainResolveRule',
      domainResolveRuleType: 'DomainResolveRuleType',
      endUserApplyAdminCoordinate: 'EndUserApplyAdminCoordinate',
      endUserGroupCoordinate: 'EndUserGroupCoordinate',
      gpuAcceleration: 'GpuAcceleration',
      html5Access: 'Html5Access',
      html5FileTransfer: 'Html5FileTransfer',
      internetCommunicationProtocol: 'InternetCommunicationProtocol',
      localDrive: 'LocalDrive',
      maxReconnectTime: 'MaxReconnectTime',
      name: 'Name',
      netRedirect: 'NetRedirect',
      policyGroupId: 'PolicyGroupId',
      preemptLogin: 'PreemptLogin',
      preemptLoginUser: 'PreemptLoginUser',
      printerRedirection: 'PrinterRedirection',
      recordContent: 'RecordContent',
      recordContentExpires: 'RecordContentExpires',
      recording: 'Recording',
      recordingAudio: 'RecordingAudio',
      recordingDuration: 'RecordingDuration',
      recordingEndTime: 'RecordingEndTime',
      recordingExpires: 'RecordingExpires',
      recordingFps: 'RecordingFps',
      recordingStartTime: 'RecordingStartTime',
      recordingUserNotify: 'RecordingUserNotify',
      recordingUserNotifyMessage: 'RecordingUserNotifyMessage',
      regionId: 'RegionId',
      remoteCoordinate: 'RemoteCoordinate',
      revokeAccessPolicyRule: 'RevokeAccessPolicyRule',
      revokeSecurityPolicyRule: 'RevokeSecurityPolicyRule',
      scope: 'Scope',
      scopeValue: 'ScopeValue',
      usbRedirect: 'UsbRedirect',
      usbSupplyRedirectRule: 'UsbSupplyRedirectRule',
      videoRedirect: 'VideoRedirect',
      visualQuality: 'VisualQuality',
      watermark: 'Watermark',
      watermarkAntiCam: 'WatermarkAntiCam',
      watermarkColor: 'WatermarkColor',
      watermarkDegree: 'WatermarkDegree',
      watermarkFontSize: 'WatermarkFontSize',
      watermarkFontStyle: 'WatermarkFontStyle',
      watermarkPower: 'WatermarkPower',
      watermarkRowAmount: 'WatermarkRowAmount',
      watermarkSecurity: 'WatermarkSecurity',
      watermarkTransparency: 'WatermarkTransparency',
      watermarkTransparencyValue: 'WatermarkTransparencyValue',
      watermarkType: 'WatermarkType',
      wyAssistant: 'WyAssistant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminAccess: 'string',
      appContentProtection: 'string',
      authorizeAccessPolicyRule: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestAuthorizeAccessPolicyRule },
      authorizeSecurityPolicyRule: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestAuthorizeSecurityPolicyRule },
      cameraRedirect: 'string',
      clientType: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestClientType },
      clipboard: 'string',
      deviceRedirects: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestDeviceRedirects },
      deviceRules: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestDeviceRules },
      domainList: 'string',
      domainResolveRule: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestDomainResolveRule },
      domainResolveRuleType: 'string',
      endUserApplyAdminCoordinate: 'string',
      endUserGroupCoordinate: 'string',
      gpuAcceleration: 'string',
      html5Access: 'string',
      html5FileTransfer: 'string',
      internetCommunicationProtocol: 'string',
      localDrive: 'string',
      maxReconnectTime: 'number',
      name: 'string',
      netRedirect: 'string',
      policyGroupId: 'string',
      preemptLogin: 'string',
      preemptLoginUser: { 'type': 'array', 'itemType': 'string' },
      printerRedirection: 'string',
      recordContent: 'string',
      recordContentExpires: 'number',
      recording: 'string',
      recordingAudio: 'string',
      recordingDuration: 'number',
      recordingEndTime: 'string',
      recordingExpires: 'number',
      recordingFps: 'number',
      recordingStartTime: 'string',
      recordingUserNotify: 'string',
      recordingUserNotifyMessage: 'string',
      regionId: 'string',
      remoteCoordinate: 'string',
      revokeAccessPolicyRule: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestRevokeAccessPolicyRule },
      revokeSecurityPolicyRule: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestRevokeSecurityPolicyRule },
      scope: 'string',
      scopeValue: { 'type': 'array', 'itemType': 'string' },
      usbRedirect: 'string',
      usbSupplyRedirectRule: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestUsbSupplyRedirectRule },
      videoRedirect: 'string',
      visualQuality: 'string',
      watermark: 'string',
      watermarkAntiCam: 'string',
      watermarkColor: 'number',
      watermarkDegree: 'number',
      watermarkFontSize: 'number',
      watermarkFontStyle: 'string',
      watermarkPower: 'string',
      watermarkRowAmount: 'number',
      watermarkSecurity: 'string',
      watermarkTransparency: 'string',
      watermarkTransparencyValue: 'number',
      watermarkType: 'string',
      wyAssistant: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authorizeAccessPolicyRule)) {
      $dara.Model.validateArray(this.authorizeAccessPolicyRule);
    }
    if(Array.isArray(this.authorizeSecurityPolicyRule)) {
      $dara.Model.validateArray(this.authorizeSecurityPolicyRule);
    }
    if(Array.isArray(this.clientType)) {
      $dara.Model.validateArray(this.clientType);
    }
    if(Array.isArray(this.deviceRedirects)) {
      $dara.Model.validateArray(this.deviceRedirects);
    }
    if(Array.isArray(this.deviceRules)) {
      $dara.Model.validateArray(this.deviceRules);
    }
    if(Array.isArray(this.domainResolveRule)) {
      $dara.Model.validateArray(this.domainResolveRule);
    }
    if(Array.isArray(this.preemptLoginUser)) {
      $dara.Model.validateArray(this.preemptLoginUser);
    }
    if(Array.isArray(this.revokeAccessPolicyRule)) {
      $dara.Model.validateArray(this.revokeAccessPolicyRule);
    }
    if(Array.isArray(this.revokeSecurityPolicyRule)) {
      $dara.Model.validateArray(this.revokeSecurityPolicyRule);
    }
    if(Array.isArray(this.scopeValue)) {
      $dara.Model.validateArray(this.scopeValue);
    }
    if(Array.isArray(this.usbSupplyRedirectRule)) {
      $dara.Model.validateArray(this.usbSupplyRedirectRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

