// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules extends $dara.Model {
  /**
   * @remarks
   * The client access IP address range, specified as an IPv4 CIDR block.
   * 
   * @example
   * 47.100.XX.XX/16
   */
  cidrIp?: string;
  /**
   * @remarks
   * The description of the client access IP address range.
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

export class DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules extends $dara.Model {
  /**
   * @remarks
   * The target of the security group control rule, specified as an IPv4 CIDR block.
   * 
   * @example
   * 47.100.XX.XX/16
   */
  cidrIp?: string;
  /**
   * @remarks
   * The description of the security group control rule.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The protocol type of the security group control rule.
   * 
   * @example
   * tcp
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The authorization policy of the security group control rule.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The port range of the security group control rule.
   * 
   * @example
   * 22/22
   */
  portRange?: string;
  /**
   * @remarks
   * The priority of the security group control rule. A smaller number indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * The direction of the security group control rule.
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

export class DescribeCenterPolicyListResponseBodyDescribePolicyGroupsClientTypes extends $dara.Model {
  /**
   * @remarks
   * The client type.
   * 
   * @example
   * windows
   */
  clientType?: string;
  /**
   * @remarks
   * Indicates whether clients of a specific type can log on to Cloud Desktop.
   * 
   * @example
   * on
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

export class DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDeviceRedirects extends $dara.Model {
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

export class DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDeviceRules extends $dara.Model {
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
   * The vendor ID. For more information, see [Valid USB Vendor IDs (VIDs)](https://www.usb.org/sites/default/files/vendor_ids032322.pdf_1.pdf).
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

export class DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDomainResolveRule extends $dara.Model {
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

export class DescribeCenterPolicyListResponseBodyDescribePolicyGroupsNetRedirectRule extends $dara.Model {
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
   * The redirection policy.
   * 
   * @example
   * allow
   */
  policy?: string;
  /**
   * @remarks
   * The rule type.
   * 
   * @example
   * domain
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      policy: 'Policy',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      policy: 'string',
      ruleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenterPolicyListResponseBodyDescribePolicyGroupsUsbSupplyRedirectRule extends $dara.Model {
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
   * The vendor ID. For more information, see [Valid USB Vendor IDs (VIDs)](https://www.usb.org/sites/default/files/vendor_ids032322.pdf_1.pdf).
   * 
   * @example
   * 04**
   */
  vendorId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      productId: 'ProductId',
      usbRedirectType: 'UsbRedirectType',
      usbRuleType: 'UsbRuleType',
      vendorId: 'VendorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

export class DescribeCenterPolicyListResponseBodyDescribePolicyGroups extends $dara.Model {
  academicProxy?: string;
  /**
   * @remarks
   * Indicates whether users have administrative permission after connecting to Cloud Desktop.
   * 
   * > This feature is in invitational preview and is not publicly available.
   * 
   * @example
   * deny
   */
  adminAccess?: string;
  adminKeyboardOnFullScreen?: string;
  adminKeyboardOnWindows?: string;
  adminMonitor?: number;
  /**
   * @remarks
   * Indicates whether screenshot prevention is enabled.
   * 
   * @example
   * off
   */
  appContentProtection?: string;
  /**
   * @remarks
   * The client access IP address whitelist.
   */
  authorizeAccessPolicyRules?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules[];
  /**
   * @remarks
   * The list of security group control rules.
   */
  authorizeSecurityPolicyRules?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules[];
  /**
   * @remarks
   * Indicates whether local camera redirection is enabled.
   * 
   * @example
   * on
   */
  cameraRedirect?: string;
  clientControlMenu?: string;
  clientCreateSnapshot?: string;
  clientHibernate?: string;
  clientRestart?: string;
  clientShutdown?: string;
  /**
   * @remarks
   * The logon method control rules.
   */
  clientTypes?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsClientTypes[];
  /**
   * @remarks
   * Clipboard permissions.
   * 
   * @example
   * off
   */
  clipboard?: string;
  /**
   * @remarks
   * Indicates whether to enable color enhancement for design and 3D application scenarios.
   * 
   * @example
   * off
   */
  colorEnhancement?: string;
  cpdDriveClipboard?: string;
  /**
   * @remarks
   * The CPU frequency reduction duration. Valid values: 30 to 120. Unit: seconds.
   * 
   * @example
   * 30
   */
  cpuDownGradeDuration?: number;
  cpuOverload?: string;
  /**
   * @remarks
   * Process names.
   */
  cpuProcessors?: string[];
  /**
   * @remarks
   * CPU protection mode switch.
   * 
   * @example
   * on
   */
  cpuProtectedMode?: string;
  /**
   * @remarks
   * The overall CPU usage percentage. Valid values: 70 to 90.
   * 
   * @example
   * 70
   */
  cpuRateLimit?: number;
  /**
   * @remarks
   * The overall CPU sampling duration. Valid values: 10 to 60. Unit: seconds.
   * 
   * @example
   * 10
   */
  cpuSampleDuration?: number;
  /**
   * @remarks
   * The single-core CPU usage percentage. Valid values: 70 to 100.
   * 
   * @example
   * 70
   */
  cpuSingleRateLimit?: number;
  /**
   * @remarks
   * The number of Cloud Desktop instances associated with this policy.
   * 
   * @example
   * 1
   */
  desktopCount?: number;
  /**
   * @remarks
   * The number of Cloud Desktop pools associated with this policy.
   * 
   * @example
   * 1
   */
  desktopGroupCount?: number;
  /**
   * @remarks
   * Device redirection rules.
   */
  deviceRedirects?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDeviceRedirects[];
  /**
   * @remarks
   * Custom peripheral rules.
   */
  deviceRules?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDeviceRules[];
  /**
   * @remarks
   * Retain session after disconnection.
   * 
   * > This parameter applies only to Cloud Application policies.
   * 
   * @example
   * persistent
   */
  disconnectKeepSession?: string;
  /**
   * @remarks
   * The duration to retain the session after disconnection. Unit: seconds.
   * 
   * > This parameter applies only to Cloud Application policies.
   * 
   * @example
   * 120
   */
  disconnectKeepSessionTime?: number;
  diskOverload?: string;
  /**
   * @remarks
   * Display mode.
   * 
   * @example
   * adminCustom
   */
  displayMode?: string;
  /**
   * @remarks
   * The field that takes effect for domain name resolution.
   * 
   * @example
   * xxxx
   */
  domainRegisterValue?: string;
  /**
   * @remarks
   * Details of the domain name resolution policy.
   */
  domainResolveRule?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDomainResolveRule[];
  /**
   * @remarks
   * The domain name resolution policy switch.
   * 
   * @example
   * on
   */
  domainResolveRuleType?: string;
  /**
   * @remarks
   * User requests administrator assistance.
   * 
   * @example
   * off
   */
  endUserApplyAdminCoordinate?: string;
  endUserCount?: string;
  /**
   * @remarks
   * Users on the same office network share Cloud Desktop.
   * 
   * @example
   * off
   */
  endUserGroupCoordinate?: string;
  externalDrive?: string;
  fileTransferAddress?: string;
  fileTransferSpeed?: string;
  fileTransferSpeedLocation?: string;
  /**
   * @remarks
   * Indicates whether to enable visual quality policies for graphics-intensive Cloud Desktop instances. Enable this policy if you have high performance and user experience requirements, such as in professional design scenarios.
   * 
   * @example
   * off
   */
  gpuAcceleration?: string;
  hoverConfigMsg?: string;
  hoverHibernate?: string;
  hoverRestart?: string;
  hoverShutdown?: string;
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
   * tcp
   */
  internetCommunicationProtocol?: string;
  internetPrinter?: string;
  keyboardControl?: string;
  kmsServer?: string;
  kmsServerConfig?: string;
  /**
   * @remarks
   * Local disk mapping permissions.
   * 
   * @example
   * readwrite
   */
  localDrive?: string;
  /**
   * @remarks
   * The maximum retry time for reconnection if the Cloud Desktop disconnects due to objective reasons. Valid values: 30 to 7200. Unit: seconds.
   * 
   * @example
   * 120
   */
  maxReconnectTime?: number;
  /**
   * @remarks
   * The memory frequency reduction duration per worker. Valid values: 30 to 120. Unit: seconds.
   * 
   * @example
   * 30
   */
  memoryDownGradeDuration?: number;
  memoryOverload?: string;
  /**
   * @remarks
   * Process names.
   */
  memoryProcessors?: string[];
  /**
   * @remarks
   * Memory protection mode switch.
   * 
   * @example
   * off
   */
  memoryProtectedMode?: string;
  /**
   * @remarks
   * The overall memory usage percentage. Valid values: 70 to 90.
   * 
   * @example
   * 70
   */
  memoryRateLimit?: number;
  /**
   * @remarks
   * The overall memory sampling duration. Valid values: 30 to 60. Unit: seconds.
   * 
   * @example
   * 30
   */
  memorySampleDuration?: number;
  /**
   * @remarks
   * The memory usage percentage per worker. Valid values: 30 to 60.
   * 
   * @example
   * 30
   */
  memorySingleRateLimit?: number;
  /**
   * @remarks
   * Indicates whether to provide a restart button in the Cloud Desktop floating ball when connecting to Cloud Desktop from a mobile client (Android client<props="china"> and iOS client).
   * 
   * > This feature applies only to mobile clients of V7.4 or later.
   * 
   * @example
   * off
   */
  mobileRestart?: string;
  mobileSafeMenu?: string;
  /**
   * @remarks
   * Indicates whether to provide a shutdown button in the Cloud Desktop floating ball when connecting to Cloud Desktop from a mobile client (Android client<props="china"> and iOS client).
   * 
   * > This feature applies only to mobile clients of V7.4 or later.
   * 
   * @example
   * off
   */
  mobileShutdown?: string;
  mobileWuyingKeeper?: string;
  mobileWyAssistant?: string;
  modelLibrary?: string;
  multiScreen?: string;
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
   * Network redirection.
   * 
   * > This feature is in invitational preview and is not publicly available.
   * 
   * @example
   * off
   */
  netRedirect?: string;
  /**
   * @remarks
   * Details of the network redirection policy.
   * 
   * > This feature is in invitational preview and is not publicly available.
   */
  netRedirectRule?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsNetRedirectRule[];
  networkPrinter?: string;
  /**
   * @remarks
   * Disconnect on no operation.
   * 
   * > This parameter applies only to Cloud Application policies.
   * 
   * @example
   * off
   */
  noOperationDisconnect?: string;
  /**
   * @remarks
   * The duration before disconnecting due to no operation. Unit: seconds.
   * 
   * > This parameter applies only to Cloud Application policies.
   * 
   * @example
   * 120
   */
  noOperationDisconnectTime?: number;
  organizationCount?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * pg-gx2x1dhsmthe9****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * SYSTEM
   */
  policyGroupType?: string;
  /**
   * @remarks
   * The status of the Cloud Desktop policy.
   * 
   * @example
   * AVAILABLE
   */
  policyStatus?: string;
  portProxy?: string;
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
   * Indicates whether to enable visual quality enhancement for design and 3D application scenarios.
   * 
   * @example
   * off
   */
  qualityEnhancement?: string;
  /**
   * @remarks
   * Indicates whether custom screen recording is enabled.
   * 
   * @example
   * off
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
   * The screen recording duration after an event is detected in screen recording audit. Unit: minutes. Valid values: 10 to 60.
   * 
   * @example
   * 10
   */
  recordEventDuration?: number;
  /**
   * @remarks
   * The absolute paths for file monitoring in screen recording audit.
   */
  recordEventFilePaths?: string[];
  /**
   * @remarks
   * The absolute paths for registry monitoring in screen recording audit.
   * 
   * @example
   * Computer\\HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\USBSTOR
   */
  recordEventRegisters?: string[];
  /**
   * @remarks
   * Indicates whether screen recording is enabled.
   * 
   * @example
   * off
   */
  recording?: string;
  /**
   * @remarks
   * The option for recording Cloud Desktop audio.
   * 
   * @example
   * on
   */
  recordingAudio?: string;
  /**
   * @remarks
   * The viewing duration of screen recording files. Unit: minutes. The recorded files are automatically split based on the duration you set and uploaded to the bucket. Files are rolled over when they reach 300 MB.
   * 
   * @example
   * 10
   */
  recordingDuration?: number;
  /**
   * @remarks
   * The end time of screen recording, in HH:MM:SS format. This parameter is valid only when Recording is set to period.
   * 
   * @example
   * 08:59:00
   */
  recordingEndTime?: string;
  /**
   * @remarks
   * The retention period of screen recording files. Valid values: 1 to 180 days.
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
   * 5
   */
  recordingFps?: number;
  /**
   * @remarks
   * The start time of screen recording, in HH:MM:SS format. This parameter is valid only when Recording is set to period.
   * 
   * @example
   * 08:00:00
   */
  recordingStartTime?: string;
  /**
   * @remarks
   * Notify end users that screen recording is enabled.
   * 
   * @example
   * off
   */
  recordingUserNotify?: string;
  /**
   * @remarks
   * The message to notify end users that screen recording is enabled.
   * 
   * @example
   * Screen recording is enabled.
   */
  recordingUserNotifyMessage?: string;
  /**
   * @remarks
   * Remote assistance keyboard and mouse control permissions.
   * 
   * @example
   * fullControl
   */
  remoteCoordinate?: string;
  resolutionDpi?: number;
  /**
   * @remarks
   * The height of the resolution. Unit: pixels.
   * 
   * @example
   * 1280
   */
  resolutionHeight?: number;
  /**
   * @remarks
   * The resolution type.
   * 
   * @example
   * adaptive
   */
  resolutionModel?: string;
  /**
   * @remarks
   * The width of the resolution. Unit: pixels.
   * 
   * @example
   * 1920
   */
  resolutionWidth?: number;
  /**
   * @remarks
   * The number of resource groups associated with this policy.
   * 
   * @example
   * 1
   */
  resourceGroupCount?: number;
  safeMenu?: string;
  /**
   * @remarks
   * The scope where the policy takes effect.
   * 
   * @example
   * GLOBAL
   */
  scope?: string;
  /**
   * @remarks
   * The effective CIDR blocks.
   */
  scopeValue?: string[];
  screenDisplayMode?: string;
  /**
   * @remarks
   * Indicates whether to enable smoothness enhancement for daily office scenarios.
   * 
   * @example
   * off
   */
  smoothEnhancement?: string;
  /**
   * @remarks
   * Indicates whether to provide an entry point for status monitoring in the Cloud Desktop floating ball.
   * 
   * @example
   * on
   */
  statusMonitor?: string;
  /**
   * @remarks
   * Streaming mode adaptation scenario.
   * 
   * @example
   * smooth
   */
  streamingMode?: string;
  /**
   * @remarks
   * The target frame rate. Valid values: 10 to 60.
   * 
   * @example
   * 30
   */
  targetFps?: number;
  /**
   * @remarks
   * Application taskbar.
   * 
   * > This parameter applies only to Cloud Application policies.
   * 
   * @example
   * off
   */
  taskbar?: string;
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
   * USB redirection rules.
   */
  usbSupplyRedirectRule?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsUsbSupplyRedirectRule[];
  useTime?: string;
  /**
   * @remarks
   * The average bitrate for video encoding. Unit: Kbps. Valid values: 1000 to 50000.
   * 
   * @example
   * 1000
   */
  videoEncAvgKbps?: number;
  /**
   * @remarks
   * The maximum QP for video encoding, representing the lowest quality. Valid values: 0 to 51.
   * 
   * @example
   * 20
   */
  videoEncMaxQP?: number;
  /**
   * @remarks
   * The minimum QP for video encoding, representing the highest quality. Valid values: 0 to 51.
   * 
   * @example
   * 20
   */
  videoEncMinQP?: number;
  /**
   * @remarks
   * The peak bitrate for video encoding. Unit: Kbps. Valid values: 1000 to 50000.
   * 
   * @example
   * 2000
   */
  videoEncPeakKbps?: number;
  /**
   * @remarks
   * Video encoding policy.
   * 
   * @example
   * qualityFirst
   */
  videoEncPolicy?: string;
  /**
   * @remarks
   * Multimedia redirection.
   * 
   * @example
   * off
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
   * Watermark.
   * 
   * @example
   * on
   */
  watermark?: string;
  /**
   * @remarks
   * Blind watermark anti-photo feature.
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
   * If you set the `WatermarkType` parameter to `custom`, you must also specify the custom text using the `WatermarkCustomText` parameter.
   * 
   * @example
   * custom-watermark
   */
  watermarkCustomText?: string;
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
   * Enhanced blind watermark feature.
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
   * 3
   */
  watermarkRowAmount?: number;
  /**
   * @remarks
   * Blind watermark security priority rule.
   * 
   * @example
   * on
   */
  watermarkSecurity?: string;
  watermarkShadow?: string;
  /**
   * @remarks
   * The watermark transparency. A larger value indicates lower transparency. Valid values: 10 to 100.
   * 
   * @example
   * 10
   */
  watermarkTransparencyValue?: number;
  /**
   * @remarks
   * The watermark type.
   * 
   * @example
   * EndUserId
   */
  watermarkType?: string;
  /**
   * @remarks
   * Indicates whether to provide an entry point for Wuying AI Assistant in the Cloud Desktop floating ball.
   * 
   * @example
   * on
   */
  wyAssistant?: string;
  static names(): { [key: string]: string } {
    return {
      academicProxy: 'AcademicProxy',
      adminAccess: 'AdminAccess',
      adminKeyboardOnFullScreen: 'AdminKeyboardOnFullScreen',
      adminKeyboardOnWindows: 'AdminKeyboardOnWindows',
      adminMonitor: 'AdminMonitor',
      appContentProtection: 'AppContentProtection',
      authorizeAccessPolicyRules: 'AuthorizeAccessPolicyRules',
      authorizeSecurityPolicyRules: 'AuthorizeSecurityPolicyRules',
      cameraRedirect: 'CameraRedirect',
      clientControlMenu: 'ClientControlMenu',
      clientCreateSnapshot: 'ClientCreateSnapshot',
      clientHibernate: 'ClientHibernate',
      clientRestart: 'ClientRestart',
      clientShutdown: 'ClientShutdown',
      clientTypes: 'ClientTypes',
      clipboard: 'Clipboard',
      colorEnhancement: 'ColorEnhancement',
      cpdDriveClipboard: 'CpdDriveClipboard',
      cpuDownGradeDuration: 'CpuDownGradeDuration',
      cpuOverload: 'CpuOverload',
      cpuProcessors: 'CpuProcessors',
      cpuProtectedMode: 'CpuProtectedMode',
      cpuRateLimit: 'CpuRateLimit',
      cpuSampleDuration: 'CpuSampleDuration',
      cpuSingleRateLimit: 'CpuSingleRateLimit',
      desktopCount: 'DesktopCount',
      desktopGroupCount: 'DesktopGroupCount',
      deviceRedirects: 'DeviceRedirects',
      deviceRules: 'DeviceRules',
      disconnectKeepSession: 'DisconnectKeepSession',
      disconnectKeepSessionTime: 'DisconnectKeepSessionTime',
      diskOverload: 'DiskOverload',
      displayMode: 'DisplayMode',
      domainRegisterValue: 'DomainRegisterValue',
      domainResolveRule: 'DomainResolveRule',
      domainResolveRuleType: 'DomainResolveRuleType',
      endUserApplyAdminCoordinate: 'EndUserApplyAdminCoordinate',
      endUserCount: 'EndUserCount',
      endUserGroupCoordinate: 'EndUserGroupCoordinate',
      externalDrive: 'ExternalDrive',
      fileTransferAddress: 'FileTransferAddress',
      fileTransferSpeed: 'FileTransferSpeed',
      fileTransferSpeedLocation: 'FileTransferSpeedLocation',
      gpuAcceleration: 'GpuAcceleration',
      hoverConfigMsg: 'HoverConfigMsg',
      hoverHibernate: 'HoverHibernate',
      hoverRestart: 'HoverRestart',
      hoverShutdown: 'HoverShutdown',
      html5Access: 'Html5Access',
      html5FileTransfer: 'Html5FileTransfer',
      internetCommunicationProtocol: 'InternetCommunicationProtocol',
      internetPrinter: 'InternetPrinter',
      keyboardControl: 'KeyboardControl',
      kmsServer: 'KmsServer',
      kmsServerConfig: 'KmsServerConfig',
      localDrive: 'LocalDrive',
      maxReconnectTime: 'MaxReconnectTime',
      memoryDownGradeDuration: 'MemoryDownGradeDuration',
      memoryOverload: 'MemoryOverload',
      memoryProcessors: 'MemoryProcessors',
      memoryProtectedMode: 'MemoryProtectedMode',
      memoryRateLimit: 'MemoryRateLimit',
      memorySampleDuration: 'MemorySampleDuration',
      memorySingleRateLimit: 'MemorySingleRateLimit',
      mobileRestart: 'MobileRestart',
      mobileSafeMenu: 'MobileSafeMenu',
      mobileShutdown: 'MobileShutdown',
      mobileWuyingKeeper: 'MobileWuyingKeeper',
      mobileWyAssistant: 'MobileWyAssistant',
      modelLibrary: 'ModelLibrary',
      multiScreen: 'MultiScreen',
      name: 'Name',
      netRedirect: 'NetRedirect',
      netRedirectRule: 'NetRedirectRule',
      networkPrinter: 'NetworkPrinter',
      noOperationDisconnect: 'NoOperationDisconnect',
      noOperationDisconnectTime: 'NoOperationDisconnectTime',
      organizationCount: 'OrganizationCount',
      policyGroupId: 'PolicyGroupId',
      policyGroupType: 'PolicyGroupType',
      policyStatus: 'PolicyStatus',
      portProxy: 'PortProxy',
      printerRedirection: 'PrinterRedirection',
      qualityEnhancement: 'QualityEnhancement',
      recordContent: 'RecordContent',
      recordContentExpires: 'RecordContentExpires',
      recordEventDuration: 'RecordEventDuration',
      recordEventFilePaths: 'RecordEventFilePaths',
      recordEventRegisters: 'RecordEventRegisters',
      recording: 'Recording',
      recordingAudio: 'RecordingAudio',
      recordingDuration: 'RecordingDuration',
      recordingEndTime: 'RecordingEndTime',
      recordingExpires: 'RecordingExpires',
      recordingFps: 'RecordingFps',
      recordingStartTime: 'RecordingStartTime',
      recordingUserNotify: 'RecordingUserNotify',
      recordingUserNotifyMessage: 'RecordingUserNotifyMessage',
      remoteCoordinate: 'RemoteCoordinate',
      resolutionDpi: 'ResolutionDpi',
      resolutionHeight: 'ResolutionHeight',
      resolutionModel: 'ResolutionModel',
      resolutionWidth: 'ResolutionWidth',
      resourceGroupCount: 'ResourceGroupCount',
      safeMenu: 'SafeMenu',
      scope: 'Scope',
      scopeValue: 'ScopeValue',
      screenDisplayMode: 'ScreenDisplayMode',
      smoothEnhancement: 'SmoothEnhancement',
      statusMonitor: 'StatusMonitor',
      streamingMode: 'StreamingMode',
      targetFps: 'TargetFps',
      taskbar: 'Taskbar',
      usbRedirect: 'UsbRedirect',
      usbSupplyRedirectRule: 'UsbSupplyRedirectRule',
      useTime: 'UseTime',
      videoEncAvgKbps: 'VideoEncAvgKbps',
      videoEncMaxQP: 'VideoEncMaxQP',
      videoEncMinQP: 'VideoEncMinQP',
      videoEncPeakKbps: 'VideoEncPeakKbps',
      videoEncPolicy: 'VideoEncPolicy',
      videoRedirect: 'VideoRedirect',
      visualQuality: 'VisualQuality',
      watermark: 'Watermark',
      watermarkAntiCam: 'WatermarkAntiCam',
      watermarkColor: 'WatermarkColor',
      watermarkCustomText: 'WatermarkCustomText',
      watermarkDegree: 'WatermarkDegree',
      watermarkFontSize: 'WatermarkFontSize',
      watermarkFontStyle: 'WatermarkFontStyle',
      watermarkPower: 'WatermarkPower',
      watermarkRowAmount: 'WatermarkRowAmount',
      watermarkSecurity: 'WatermarkSecurity',
      watermarkShadow: 'WatermarkShadow',
      watermarkTransparencyValue: 'WatermarkTransparencyValue',
      watermarkType: 'WatermarkType',
      wyAssistant: 'WyAssistant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      academicProxy: 'string',
      adminAccess: 'string',
      adminKeyboardOnFullScreen: 'string',
      adminKeyboardOnWindows: 'string',
      adminMonitor: 'number',
      appContentProtection: 'string',
      authorizeAccessPolicyRules: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules },
      authorizeSecurityPolicyRules: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules },
      cameraRedirect: 'string',
      clientControlMenu: 'string',
      clientCreateSnapshot: 'string',
      clientHibernate: 'string',
      clientRestart: 'string',
      clientShutdown: 'string',
      clientTypes: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroupsClientTypes },
      clipboard: 'string',
      colorEnhancement: 'string',
      cpdDriveClipboard: 'string',
      cpuDownGradeDuration: 'number',
      cpuOverload: 'string',
      cpuProcessors: { 'type': 'array', 'itemType': 'string' },
      cpuProtectedMode: 'string',
      cpuRateLimit: 'number',
      cpuSampleDuration: 'number',
      cpuSingleRateLimit: 'number',
      desktopCount: 'number',
      desktopGroupCount: 'number',
      deviceRedirects: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDeviceRedirects },
      deviceRules: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDeviceRules },
      disconnectKeepSession: 'string',
      disconnectKeepSessionTime: 'number',
      diskOverload: 'string',
      displayMode: 'string',
      domainRegisterValue: 'string',
      domainResolveRule: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDomainResolveRule },
      domainResolveRuleType: 'string',
      endUserApplyAdminCoordinate: 'string',
      endUserCount: 'string',
      endUserGroupCoordinate: 'string',
      externalDrive: 'string',
      fileTransferAddress: 'string',
      fileTransferSpeed: 'string',
      fileTransferSpeedLocation: 'string',
      gpuAcceleration: 'string',
      hoverConfigMsg: 'string',
      hoverHibernate: 'string',
      hoverRestart: 'string',
      hoverShutdown: 'string',
      html5Access: 'string',
      html5FileTransfer: 'string',
      internetCommunicationProtocol: 'string',
      internetPrinter: 'string',
      keyboardControl: 'string',
      kmsServer: 'string',
      kmsServerConfig: 'string',
      localDrive: 'string',
      maxReconnectTime: 'number',
      memoryDownGradeDuration: 'number',
      memoryOverload: 'string',
      memoryProcessors: { 'type': 'array', 'itemType': 'string' },
      memoryProtectedMode: 'string',
      memoryRateLimit: 'number',
      memorySampleDuration: 'number',
      memorySingleRateLimit: 'number',
      mobileRestart: 'string',
      mobileSafeMenu: 'string',
      mobileShutdown: 'string',
      mobileWuyingKeeper: 'string',
      mobileWyAssistant: 'string',
      modelLibrary: 'string',
      multiScreen: 'string',
      name: 'string',
      netRedirect: 'string',
      netRedirectRule: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroupsNetRedirectRule },
      networkPrinter: 'string',
      noOperationDisconnect: 'string',
      noOperationDisconnectTime: 'number',
      organizationCount: 'string',
      policyGroupId: 'string',
      policyGroupType: 'string',
      policyStatus: 'string',
      portProxy: 'string',
      printerRedirection: 'string',
      qualityEnhancement: 'string',
      recordContent: 'string',
      recordContentExpires: 'number',
      recordEventDuration: 'number',
      recordEventFilePaths: { 'type': 'array', 'itemType': 'string' },
      recordEventRegisters: { 'type': 'array', 'itemType': 'string' },
      recording: 'string',
      recordingAudio: 'string',
      recordingDuration: 'number',
      recordingEndTime: 'string',
      recordingExpires: 'number',
      recordingFps: 'number',
      recordingStartTime: 'string',
      recordingUserNotify: 'string',
      recordingUserNotifyMessage: 'string',
      remoteCoordinate: 'string',
      resolutionDpi: 'number',
      resolutionHeight: 'number',
      resolutionModel: 'string',
      resolutionWidth: 'number',
      resourceGroupCount: 'number',
      safeMenu: 'string',
      scope: 'string',
      scopeValue: { 'type': 'array', 'itemType': 'string' },
      screenDisplayMode: 'string',
      smoothEnhancement: 'string',
      statusMonitor: 'string',
      streamingMode: 'string',
      targetFps: 'number',
      taskbar: 'string',
      usbRedirect: 'string',
      usbSupplyRedirectRule: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroupsUsbSupplyRedirectRule },
      useTime: 'string',
      videoEncAvgKbps: 'number',
      videoEncMaxQP: 'number',
      videoEncMinQP: 'number',
      videoEncPeakKbps: 'number',
      videoEncPolicy: 'string',
      videoRedirect: 'string',
      visualQuality: 'string',
      watermark: 'string',
      watermarkAntiCam: 'string',
      watermarkColor: 'number',
      watermarkCustomText: 'string',
      watermarkDegree: 'number',
      watermarkFontSize: 'number',
      watermarkFontStyle: 'string',
      watermarkPower: 'string',
      watermarkRowAmount: 'number',
      watermarkSecurity: 'string',
      watermarkShadow: 'string',
      watermarkTransparencyValue: 'number',
      watermarkType: 'string',
      wyAssistant: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authorizeAccessPolicyRules)) {
      $dara.Model.validateArray(this.authorizeAccessPolicyRules);
    }
    if(Array.isArray(this.authorizeSecurityPolicyRules)) {
      $dara.Model.validateArray(this.authorizeSecurityPolicyRules);
    }
    if(Array.isArray(this.clientTypes)) {
      $dara.Model.validateArray(this.clientTypes);
    }
    if(Array.isArray(this.cpuProcessors)) {
      $dara.Model.validateArray(this.cpuProcessors);
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
    if(Array.isArray(this.memoryProcessors)) {
      $dara.Model.validateArray(this.memoryProcessors);
    }
    if(Array.isArray(this.netRedirectRule)) {
      $dara.Model.validateArray(this.netRedirectRule);
    }
    if(Array.isArray(this.recordEventFilePaths)) {
      $dara.Model.validateArray(this.recordEventFilePaths);
    }
    if(Array.isArray(this.recordEventRegisters)) {
      $dara.Model.validateArray(this.recordEventRegisters);
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

export class DescribeCenterPolicyListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of Cloud Desktop policies.
   */
  describePolicyGroups?: DescribeCenterPolicyListResponseBodyDescribePolicyGroups[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of query results.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      describePolicyGroups: 'DescribePolicyGroups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describePolicyGroups: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.describePolicyGroups)) {
      $dara.Model.validateArray(this.describePolicyGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

