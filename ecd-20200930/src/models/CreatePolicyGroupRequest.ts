// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyGroupRequestAuthorizeAccessPolicyRule extends $dara.Model {
  /**
   * @remarks
   * The client access IP CIDR block. The value is an IPv4 CIDR block in CIDR notation.
   * 
   * @example
   * 47.100.XX.XX/16
   */
  cidrIp?: string;
  /**
   * @remarks
   * The description of the client IP whitelist rule.
   * 
   * @example
   * North China branch office
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
   * The object of the security group rule. The value is an IPv4 CIDR block in CIDR notation.
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
   * Allow access to the internal R&D environment
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
   * The port range of the security group rule. The valid values of this parameter are determined by the value of IpProtocol:
   * 
   * - TCP or UDP: Valid values are 1 to 65535. Separate the start port and the end port with a forward slash (/). Example: 1/200.
   * - ICMP: -1/-1.
   * - GRE: -1/-1.
   * - If IpProtocol is set to all: -1/-1.
   * 
   * For more information about the common ports of typical applications, see [Common ports](https://help.aliyun.com/document_detail/40724.html).
   * 
   * @example
   * 22/22
   */
  portRange?: string;
  /**
   * @remarks
   * The priority of the security group access control rule. A smaller value indicates a higher priority.
   * 
   * Valid values: 1 to 60.
   * 
   * Default value: 1.
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
   * The client type for logon method control.
   * 
   * @example
   * windows
   */
  clientType?: string;
  /**
   * @remarks
   * Specifies whether to allow users to log on to cloud desktops by using a specific type of client.
   * 
   * > If you do not set `ClientType`-related parameters, all types of clients are allowed to log on to cloud desktops by default.
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
   * The product ID.
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
   * The vendor ID. See [Valid USB Vendor IDs (VIDs)](https://www.usb.org/sites/default/files/vendor_ids032322.pdf_1.pdf).
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
  /**
   * @remarks
   * The platform types to which the device rule applies.
   * 
   * @example
   * Windows
   */
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
   * Test rule
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
   * Test rule
   */
  description?: string;
  /**
   * @remarks
   * The device class. This parameter is required when `usbRuleType` is set to 1. See [Defined Class Codes](https://www.usb.org/defined-class-codes).
   * 
   * @example
   * 0Eh
   */
  deviceClass?: string;
  /**
   * @remarks
   * The device subclass. This parameter is required when `usbRuleType` is set to 1. See [Defined Class Codes](https://www.usb.org/defined-class-codes).
   * 
   * @example
   * xxh
   */
  deviceSubclass?: string;
  /**
   * @remarks
   * The product ID.
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
   * The vendor ID. See [Valid USB Vendor IDs (VIDs)](https://www.usb.org/sites/default/files/vendor_ids032322.pdf_1.pdf).
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
   * Specifies whether users have administrator permissions after logging on to the cloud desktop.
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
   * The list of client IP whitelist rules. After you configure this parameter, only IP addresses within the whitelisted CIDR blocks can access the cloud computer.
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
   * The list of logon method control rules. Specifies which client types are allowed to access cloud desktops.
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
   * The domain name access control setting. Domain names support wildcards (\\*). Separate multiple domain names with commas (,).
   * 
   * @example
   * off
   */
  domainList?: string;
  /**
   * @remarks
   * The domain name resolution policy details.
   */
  domainResolveRule?: CreatePolicyGroupRequestDomainResolveRule[];
  /**
   * @remarks
   * The domain name resolution policy type.
   * 
   * @example
   * OFF
   */
  domainResolveRuleType?: string;
  /**
   * @remarks
   * Specifies whether to enable the feature that allows users to request administrator assistance.
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
   * Specifies whether to enable the image quality policy for graphics-type cloud desktops. Enable this policy when high performance and user experience are required, such as in professional design scenarios.
   * 
   * @example
   * off
   */
  gpuAcceleration?: string;
  /**
   * @remarks
   * The web client access policy.
   * 
   * @example
   * off
   */
  html5Access?: string;
  /**
   * @remarks
   * The web client file transfer policy.
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
   * The maximum reconnection retry time when the cloud desktop is disconnected due to objective reasons. Valid values: 30 to 7200. Unit: seconds.
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
   * @example
   * off
   */
  netRedirect?: string;
  /**
   * @remarks
   * The preemption policy for the cloud desktop.
   * 
   * > To ensure the user experience and data security of end users who are using the cloud desktop, preemption between multiple users is not allowed. This parameter is set to `off` by default and cannot be modified.
   * 
   * @example
   * off
   */
  preemptLogin?: string;
  /**
   * @remarks
   * The usernames of users who are allowed to preempt the cloud desktop. You can specify up to 5 usernames.
   * > To ensure the user experience and data security of end users who are using the cloud desktop, mutual preemption among multiple users is not supported.
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
   * The expiration time of custom screen recording files. Default value: 30 days.
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
   * The option for recording cloud desktop audio.
   * 
   * @example
   * on
   */
  recordingAudio?: string;
  /**
   * @remarks
   * The duration of each screen recording file segment. Unit: minutes. Recording files are automatically split and uploaded to the storage space based on the specified duration. Files are rolled over when they reach 300 MB.
   * 
   * @example
   * 10
   */
  recordingDuration?: number;
  /**
   * @remarks
   * The end time of screen recording in the format of HH:MM:SS. This parameter takes effect only when `Recording` is set to `PERIOD`.
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
   * The frame rate of screen recording. Unit: FPS (frames per second).
   * 
   * @example
   * 2
   */
  recordingFps?: number;
  /**
   * @remarks
   * The start time of screen recording in the format of HH:MM:SS. This parameter takes effect only when `Recording` is set to `PERIOD`.
   * 
   * @example
   * 08:00:00
   */
  recordingStartTime?: string;
  /**
   * @remarks
   * The screen recording client notification feature.
   * 
   * @example
   * off
   */
  recordingUserNotify?: string;
  /**
   * @remarks
   * The notification content for the screen recording client. Leave this parameter empty by default.
   * 
   * @example
   * Your cloud desktop is being recorded
   */
  recordingUserNotifyMessage?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the list of regions supported by WUYING Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The keyboard and mouse control permissions during remote assistance.
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
   * The scope value. This parameter is required when `Scope` is set to `IP`. This parameter takes effect only when `Scope` is set to `IP`.
   */
  scopeValue?: string[];
  /**
   * @remarks
   * The USB redirection setting.
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
   * The watermark setting.
   * 
   * @example
   * off
   */
  watermark?: string;
  /**
   * @remarks
   * The anti-camera capture feature for invisible watermarks.
   * 
   * @example
   * off
   */
  watermarkAntiCam?: string;
  /**
   * @remarks
   * The watermark font color. Valid values: 0 to 16777215.
   * 
   * @example
   * 0
   */
  watermarkColor?: number;
  /**
   * @remarks
   * The watermark tilt angle. Valid values: -10 to -30.
   * 
   * @example
   * -10
   */
  watermarkDegree?: number;
  /**
   * @remarks
   * The watermark font size. Valid values: 10 to 20.
   * 
   * @example
   * 10
   */
  watermarkFontSize?: number;
  /**
   * @remarks
   * The watermark font style.
   * 
   * @example
   * plain
   */
  watermarkFontStyle?: string;
  /**
   * @remarks
   * The enhancement level for invisible watermarks.
   * 
   * @example
   * medium
   */
  watermarkPower?: string;
  /**
   * @remarks
   * The number of watermark rows.
   * 
   * @example
   * 5
   */
  watermarkRowAmount?: number;
  /**
   * @remarks
   * The security-first rule for invisible watermarks.
   * 
   * @example
   * on
   */
  watermarkSecurity?: string;
  /**
   * @remarks
   * The transparency level of the watermark.
   * 
   * @example
   * LIGHT
   */
  watermarkTransparency?: string;
  /**
   * @remarks
   * The watermark opacity. A larger value indicates lower transparency. Valid values: 10 to 100.
   * 
   * @example
   * 10
   */
  watermarkTransparencyValue?: number;
  /**
   * @remarks
   * The watermark type. You can select up to three types, separated by commas (,).
   * 
   * @example
   * EndUserId
   */
  watermarkType?: string;
  /**
   * @remarks
   * Specifies whether to provide the WUYING AI Assistant entry in the floating ball when connecting to a cloud computer through a desktop client (including Windows and macOS clients).
   * 
   * > Applicable only to desktop clients of V7.7 or later.
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

