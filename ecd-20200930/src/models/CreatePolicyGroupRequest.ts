// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyGroupRequestAuthorizeAccessPolicyRule extends $dara.Model {
  /**
   * @remarks
   * The client IP address CIDR block. The value is an IPv4 CIDR block.
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
   * North China Branch
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

export class CreatePolicyGroupRequestAuthorizeSecurityPolicyRule extends $dara.Model {
  /**
   * @remarks
   * The object of the security group rule. The value is an IPv4 CIDR block.
   * 
   * @example
   * 47.100.XX.XX/16
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
   * tcp
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The authorization policy of the security group rule.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The port range of the security group rule. The value of this parameter depends on the value of the \\`IpProtocol\\` parameter.
   * 
   * - If \\`IpProtocol\\` is set to TCP or UDP, the port range is 1 to 65535. Use a forward slash (/) to separate the start port and the end port. For example: 1/200.
   * 
   * - If \\`IpProtocol\\` is set to ICMP, the port range is -1/-1.
   * 
   * - If \\`IpProtocol\\` is set to GRE, the port range is -1/-1.
   * 
   * - If \\`IpProtocol\\` is set to all, the port range is -1/-1.
   * 
   * For more information about common ports, see [Common ports](https://help.aliyun.com/document_detail/40724.html).
   * 
   * @example
   * 22/22
   */
  portRange?: string;
  /**
   * @remarks
   * The priority of the security group rule. A smaller value indicates a higher priority.<br>
   * Valid values: 1 to 60.<br>
   * Default value: 1.<br><br>
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

export class CreatePolicyGroupRequestClientType extends $dara.Model {
  /**
   * @remarks
   * Logon method control. Specifies the client type.
   * 
   * > If you do not configure the `ClientType` parameters, all types of clients are allowed to log on to the cloud computer by default.
   * 
   * @example
   * windows
   */
  clientType?: string;
  /**
   * @remarks
   * Logon method control. Specifies whether to allow a specific type of client to log on to the cloud computer.
   * 
   * > If you do not configure the `ClientType` parameters, all types of clients are allowed to log on to the cloud computer by default.
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

export class CreatePolicyGroupRequestDeviceRedirects extends $dara.Model {
  /**
   * @remarks
   * The peripheral type.
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
   * deviceRedirect
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

export class CreatePolicyGroupRequestDeviceRules extends $dara.Model {
  /**
   * @remarks
   * The device name.
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
   * 0x55b1
   */
  devicePid?: string;
  /**
   * @remarks
   * The peripheral type.
   * 
   * @example
   * storage
   */
  deviceType?: string;
  /**
   * @remarks
   * The vendor ID (VID). For more information, see [Valid USB Vendor IDs (VIDs)](https://www.usb.org/sites/default/files/vendor_ids032322.pdf_1.pdf).
   * 
   * @example
   * 0x0781
   */
  deviceVid?: string;
  /**
   * @remarks
   * The link optimization instruction.
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

export class CreatePolicyGroupRequestDomainResolveRule extends $dara.Model {
  /**
   * @remarks
   * The policy description.
   * 
   * @example
   * 测试规则
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

export class CreatePolicyGroupRequestUsbSupplyRedirectRule extends $dara.Model {
  /**
   * @remarks
   * The rule description.
   * 
   * @example
   * 测试规则
   */
  description?: string;
  /**
   * @remarks
   * The device class. This parameter is required when `usbRuleType` is set to 1. For more information, see [Defined Class Codes](https://www.usb.org/defined-class-codes).
   * 
   * @example
   * 0Eh
   */
  deviceClass?: string;
  /**
   * @remarks
   * The device subclass. This parameter is required when `usbRuleType` is set to 1. For more information, see [Defined Class Codes](https://www.usb.org/defined-class-codes).
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
   * The USB redirection rule type.
   * 
   * @example
   * 1
   */
  usbRuleType?: number;
  /**
   * @remarks
   * The vendor ID (VID). For more information, see [Valid USB Vendor IDs (VIDs)](https://www.usb.org/sites/default/files/vendor_ids032322.pdf_1.pdf).
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

export class CreatePolicyGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether a user has administrative permissions after logging on to the cloud computer.
   * 
   * > This feature is in invitational preview and is not available to the public.
   * 
   * @example
   * deny
   */
  adminAccess?: string;
  /**
   * @remarks
   * Specifies whether to enable the anti-screenshot feature.
   * 
   * @example
   * off
   */
  appContentProtection?: string;
  /**
   * @remarks
   * The client IP address whitelist. After you configure this parameter, only IP addresses in the whitelist can access the cloud computer.
   */
  authorizeAccessPolicyRule?: CreatePolicyGroupRequestAuthorizeAccessPolicyRule[];
  /**
   * @remarks
   * The list of security group rules.
   */
  authorizeSecurityPolicyRule?: CreatePolicyGroupRequestAuthorizeSecurityPolicyRule[];
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
   * The list of logon method control rules. These rules control which clients can be used to access the cloud computer.
   */
  clientType?: CreatePolicyGroupRequestClientType[];
  /**
   * @remarks
   * The clipboard permission.
   * 
   * @example
   * off
   */
  clipboard?: string;
  /**
   * @remarks
   * The list of device redirection rules.
   */
  deviceRedirects?: CreatePolicyGroupRequestDeviceRedirects[];
  /**
   * @remarks
   * The list of custom peripheral rules.
   */
  deviceRules?: CreatePolicyGroupRequestDeviceRules[];
  /**
   * @remarks
   * The policy for controlling access to domain names. You can use a wildcard character (\\*). Separate multiple domain names with commas (,).
   * 
   * @example
   * off
   */
  domainList?: string;
  /**
   * @remarks
   * The details of the domain name resolution policy.
   */
  domainResolveRule?: CreatePolicyGroupRequestDomainResolveRule[];
  /**
   * @remarks
   * The type of the domain name resolution policy.
   * 
   * @example
   * OFF
   */
  domainResolveRuleType?: string;
  /**
   * @remarks
   * Specifies whether to allow end users to request assistance from administrators.
   * 
   * @example
   * ON
   */
  endUserApplyAdminCoordinate?: string;
  /**
   * @remarks
   * Specifies whether to enable stream collaboration between users.
   * 
   * @example
   * ON
   */
  endUserGroupCoordinate?: string;
  /**
   * @remarks
   * Specifies whether to enable the image quality policy for graphics cloud computers. Enable this policy for scenarios that require high performance and user experience, such as professional design.
   * 
   * @example
   * off
   */
  gpuAcceleration?: string;
  /**
   * @remarks
   * The policy for access from web clients.
   * 
   * > Use the `ClientType` parameters to manage logon methods.
   * 
   * @example
   * off
   */
  html5Access?: string;
  /**
   * @remarks
   * The file transfer policy for web clients.
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
   * both
   */
  internetCommunicationProtocol?: string;
  /**
   * @remarks
   * The local disk mapping permission.
   * 
   * @example
   * off
   */
  localDrive?: string;
  /**
   * @remarks
   * The maximum amount of time to retry the connection if the cloud computer is disconnected due to an unexpected event. Valid values: 30 to 7200. Unit: seconds.
   * 
   * @example
   * 120
   */
  maxReconnectTime?: number;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * testPolicyGroupName
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to enable network redirection.
   * 
   * > This feature is in invitational preview and is not available to the public.
   * 
   * @example
   * off
   */
  netRedirect?: string;
  /**
   * @remarks
   * The preemption policy.
   * 
   * > To ensure the user experience and data security of the end users who are using cloud computers, mutual preemption among multiple users is not allowed. This parameter is set to `off` by default and cannot be changed.
   * 
   * @example
   * off
   */
  preemptLogin?: string;
  /**
   * @remarks
   * The usernames of the users that are allowed to preempt the cloud computer. You can specify up to five usernames.
   * 
   * > To ensure the user experience and data security of the end users who are using cloud computers, mutual preemption among multiple users is not allowed.
   * 
   * @example
   * Alice
   */
  preemptLoginUser?: string[];
  /**
   * @remarks
   * The printer redirection policy.
   * 
   * @example
   * on
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
   * The expiration time of custom recording files. The default value is 30. Unit: days.
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
   * The option to record audio from the cloud computer.
   * 
   * @example
   * on
   */
  recordingAudio?: string;
  /**
   * @remarks
   * The duration for viewing the recording file. Unit: minutes. The recording file is automatically split based on the specified duration and uploaded to a bucket. If a file reaches 300 MB, it is rolled over first.
   * 
   * @example
   * 10
   */
  recordingDuration?: number;
  /**
   * @remarks
   * The time when screen recording ends. The value is in the HH:MM:SS format. This parameter is valid only when \\`Recording\\` is set to \\`PERIOD\\`.
   * 
   * @example
   * 08:59:00
   */
  recordingEndTime?: string;
  /**
   * @remarks
   * The retention period of the recording file. Valid values: 1 to 180. Unit: days.
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
   * 2
   */
  recordingFps?: number;
  /**
   * @remarks
   * The time when screen recording starts. The value is in the HH:MM:SS format. This parameter is valid only when \\`Recording\\` is set to \\`PERIOD\\`.
   * 
   * @example
   * 08:00:00
   */
  recordingStartTime?: string;
  /**
   * @remarks
   * The feature that sends notifications to the client when screen recording is in progress.
   * 
   * @example
   * off
   */
  recordingUserNotify?: string;
  /**
   * @remarks
   * The content of the notification that is sent to the client when screen recording is in progress. You do not need to specify this parameter.
   * 
   * @example
   * Your cloud desktop is being recorded.
   */
  recordingUserNotifyMessage?: string;
  /**
   * @remarks
   * The region ID. Call the [DescribeRegions](~~DescribeRegions~~) operation to obtain the list of regions that support WUYING Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The keyboard and mouse control permissions for remote assistance.
   * 
   * @example
   * fullControl
   */
  remoteCoordinate?: string;
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
   * This parameter is required when `Scope` is set to `IP`. It takes effect only when `Scope` is set to `IP`.
   */
  scopeValue?: string[];
  /**
   * @remarks
   * USB redirection.
   * 
   * @example
   * off
   */
  usbRedirect?: string;
  /**
   * @remarks
   * The USB redirection rules.
   */
  usbSupplyRedirectRule?: CreatePolicyGroupRequestUsbSupplyRedirectRule[];
  /**
   * @remarks
   * Multimedia redirection.
   * 
   * @example
   * on
   */
  videoRedirect?: string;
  /**
   * @remarks
   * The image display quality policy.
   * 
   * @example
   * medium
   */
  visualQuality?: string;
  /**
   * @remarks
   * The watermark feature.
   * 
   * @example
   * off
   */
  watermark?: string;
  /**
   * @remarks
   * The anti-screen-recording feature for invisible watermarks.
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
   * The rotation angle of the watermark. Valid values: -10 to -30.
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
   * The enhanced feature for invisible watermarks.
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
   * 5
   */
  watermarkRowAmount?: number;
  /**
   * @remarks
   * The security priority rule for invisible watermarks.
   * 
   * @example
   * on
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
   * The opacity of the watermark. A larger value indicates lower transparency. Valid values: 10 to 100.
   * 
   * @example
   * 10
   */
  watermarkTransparencyValue?: number;
  /**
   * @remarks
   * The type of watermark. You can specify up to three types. Separate multiple types with commas (,).
   * 
   * > If you set this parameter to `custom`, you must also specify the `WatermarkCustomText` parameter.
   * 
   * @example
   * EndUserId
   */
  watermarkType?: string;
  /**
   * @remarks
   * When you connect to a cloud computer from a desktop client (including a Windows client and a macOS client), specifies whether to display the entry for the WUYING AI assistant in the floating ball on the cloud computer.
   * 
   * > This feature is available only for desktop clients of V7.7 or later.
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
      authorizeAccessPolicyRule: { 'type': 'array', 'itemType': CreatePolicyGroupRequestAuthorizeAccessPolicyRule },
      authorizeSecurityPolicyRule: { 'type': 'array', 'itemType': CreatePolicyGroupRequestAuthorizeSecurityPolicyRule },
      cameraRedirect: 'string',
      clientType: { 'type': 'array', 'itemType': CreatePolicyGroupRequestClientType },
      clipboard: 'string',
      deviceRedirects: { 'type': 'array', 'itemType': CreatePolicyGroupRequestDeviceRedirects },
      deviceRules: { 'type': 'array', 'itemType': CreatePolicyGroupRequestDeviceRules },
      domainList: 'string',
      domainResolveRule: { 'type': 'array', 'itemType': CreatePolicyGroupRequestDomainResolveRule },
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
      scope: 'string',
      scopeValue: { 'type': 'array', 'itemType': 'string' },
      usbRedirect: 'string',
      usbSupplyRedirectRule: { 'type': 'array', 'itemType': CreatePolicyGroupRequestUsbSupplyRedirectRule },
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

