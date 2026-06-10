// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules extends $dara.Model {
  /**
   * @remarks
   * The client-accessible IP address segment. The value is an IPv4 CIDR block.
   * 
   * @example
   * 47.100.XX.XX/16
   */
  cidrIp?: string;
  /**
   * @remarks
   * The remarks for the client-accessible CIDR block.
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

export class DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules extends $dara.Model {
  /**
   * @remarks
   * The target of the security group control rule. The value is an IPv4 CIDR block.
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
   * The rule direction of the security group control rule.
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

export class DescribePolicyGroupsResponseBodyDescribePolicyGroupsClientTypes extends $dara.Model {
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
   * Whether a specific client type is allowed to connect to the cloud computer.
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

export class DescribePolicyGroupsResponseBodyDescribePolicyGroupsDeviceRedirects extends $dara.Model {
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
   * - usbRedirect: USB redirection.
   * 
   * - deviceRedirect: Device redirection.
   * 
   * - off: Disabled.
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

export class DescribePolicyGroupsResponseBodyDescribePolicyGroupsDeviceRules extends $dara.Model {
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

export class DescribePolicyGroupsResponseBodyDescribePolicyGroupsDomainResolveRule extends $dara.Model {
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

export class DescribePolicyGroupsResponseBodyDescribePolicyGroupsNetRedirectRule extends $dara.Model {
  /**
   * @remarks
   * The policy content.
   * 
   * @example
   * *.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * allow
   */
  policy?: string;
  /**
   * @remarks
   * The policy type.
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

export class DescribePolicyGroupsResponseBodyDescribePolicyGroupsRecordEventLevels extends $dara.Model {
  /**
   * @remarks
   * The event severity.
   */
  eventLevel?: string;
  /**
   * @remarks
   * The event type.
   */
  eventType?: string;
  static names(): { [key: string]: string } {
    return {
      eventLevel: 'EventLevel',
      eventType: 'EventType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventLevel: 'string',
      eventType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGroupsResponseBodyDescribePolicyGroupsUsbSupplyRedirectRule extends $dara.Model {
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

export class DescribePolicyGroupsResponseBodyDescribePolicyGroups extends $dara.Model {
  academicProxy?: string;
  /**
   * @remarks
   * Whether end users have administrative permission after connecting to the cloud computer.
   * 
   * > This feature is in invitational preview and is not publicly available.
   * 
   * @example
   * deny
   */
  adminAccess?: string;
  adminKeyboardOnFullScreen?: string;
  adminKeyboardOnWindows?: string;
  /**
   * @remarks
   * Whether to enable the anti-screenshot feature.
   * 
   * @example
   * off
   */
  appContentProtection?: string;
  /**
   * @remarks
   * The client IP address whitelist. Only IP addresses within the whitelisted CIDR blocks can access the cloud computer.
   */
  authorizeAccessPolicyRules?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules[];
  /**
   * @remarks
   * The security group control rules.
   */
  authorizeSecurityPolicyRules?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules[];
  /**
   * @remarks
   * The automatic client reconnection configuration.
   * 
   * @example
   * off
   */
  autoReconnect?: string;
  /**
   * @remarks
   * Whether to enable local camera redirection.
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
   * The logon method control list. Controls which clients can access the cloud computer.
   */
  clientTypes?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsClientTypes[];
  /**
   * @remarks
   * The clipboard permissions.
   * 
   * @example
   * off
   */
  clipboard?: string;
  /**
   * @remarks
   * Whether to enable color enhancement for design and 3D application scenarios.
   * 
   * @example
   * off
   */
  colorEnhancement?: string;
  cpdDriveClipboard?: string;
  /**
   * @remarks
   * The CPU downclocking duration in seconds. Valid values: 30 to 120.
   * 
   * @example
   * 30
   */
  cpuDownGradeDuration?: number;
  cpuOverload?: string;
  /**
   * @remarks
   * The process whitelist exempt from CPU usage limits.
   */
  cpuProcessors?: string[];
  /**
   * @remarks
   * The CPU protection mode switch.
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
   * The overall CPU sampling duration in seconds. Valid values: 10 to 60.
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
  description?: string;
  /**
   * @remarks
   * The number of cloud computers associated with this policy.
   * 
   * @example
   * 1
   */
  desktopCount?: number;
  /**
   * @remarks
   * The number of cloud computer pools associated with this policy.
   * 
   * @example
   * 1
   */
  desktopGroupCount?: number;
  deviceConnectHint?: string;
  /**
   * @remarks
   * The device redirection rule list.
   */
  deviceRedirects?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsDeviceRedirects[];
  /**
   * @remarks
   * The custom peripheral rule list.
   */
  deviceRules?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsDeviceRules[];
  diskOverload?: string;
  /**
   * @remarks
   * The display mode.
   * 
   * @example
   * adminCustom
   */
  displayMode?: string;
  /**
   * @remarks
   * The access control for domain names. Wildcards (\\*) are supported. Separate multiple domain names with commas (,).
   * 
   * @example
   * off
   */
  domainList?: string;
  /**
   * @remarks
   * The domain name resolution policy list.
   */
  domainResolveRule?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsDomainResolveRule[];
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
   * The total number of cloud computers and cloud computer pools associated with this policy. This value is returned only for custom policies.
   * 
   * @example
   * 2
   */
  edsCount?: number;
  /**
   * @remarks
   * The switch for users to request administrator assistance.
   * 
   * @example
   * on
   */
  endUserApplyAdminCoordinate?: string;
  endUserCount?: string;
  /**
   * @remarks
   * The switch for stream collaboration between users.
   * 
   * @example
   * on
   */
  endUserGroupCoordinate?: string;
  externalDrive?: string;
  fileMigrate?: string;
  /**
   * @remarks
   * File transfer.
   * 
   * @example
   * null
   */
  fileTransfer?: string;
  fileTransferAddress?: string;
  fileTransferSpeed?: string;
  fileTransferSpeedLocation?: string;
  /**
   * @remarks
   * Whether to enable the image quality policy for graphics-specification cloud computers. Enable this policy if you have high requirements for cloud computer performance and user experience, such as in professional design scenarios.
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
   * The file transfer policy for the web client.
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
  internetPrinter?: string;
  keyboardControl?: string;
  /**
   * @remarks
   * The local disk mapping permissions.
   * 
   * @example
   * readwrite
   */
  localDrive?: string;
  /**
   * @remarks
   * The maximum retry time for reconnecting to the cloud computer after a disconnection caused by objective reasons. Valid values: 30 to 7200 seconds.
   * 
   * @example
   * 120
   */
  maxReconnectTime?: number;
  /**
   * @remarks
   * The memory downclocking duration per process in seconds. Valid values: 30 to 120.
   * 
   * @example
   * 30
   */
  memoryDownGradeDuration?: number;
  memoryOverload?: string;
  /**
   * @remarks
   * The process whitelist exempt from memory usage limits.
   */
  memoryProcessors?: string[];
  /**
   * @remarks
   * The memory protection mode switch.
   * 
   * @example
   * on
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
   * The overall memory sampling duration in seconds. Valid values: 30 to 60.
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
   * Whether to display the restart button in the floating ball when accessing the cloud computer from mobile clients (including Android and iOS clients).
   * 
   * > Applies only to mobile clients of V7.4 or later.
   * 
   * @example
   * off
   */
  mobileRestart?: string;
  /**
   * @remarks
   * The Windows security control switch for mobile clients.
   * 
   * @example
   * off
   */
  mobileSafeMenu?: string;
  /**
   * @remarks
   * Whether to display the shutdown button in the floating ball when accessing the cloud computer from mobile clients (including Android and iOS clients).
   * 
   * > Applies only to mobile clients of V7.4 or later.
   * 
   * @example
   * off
   */
  mobileShutdown?: string;
  /**
   * @remarks
   * The WUYING Keeper switch for mobile clients.
   * 
   * @example
   * off
   */
  mobileWuyingKeeper?: string;
  /**
   * @remarks
   * The Xiaoying AI Assistant switch for mobile clients.
   * 
   * @example
   * off
   */
  mobileWyAssistant?: string;
  modelLibrary?: string;
  multiScreen?: string;
  /**
   * @remarks
   * The cloud computer policy name.
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
   * The network redirection policy list.
   * 
   * > This feature is in invitational preview and is not publicly available.
   */
  netRedirectRule?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsNetRedirectRule[];
  networkPrinter?: string;
  organizationCount?: string;
  /**
   * @remarks
   * The cloud computer policy ID.
   * 
   * @example
   * pg-gx2x1dhsmthe9****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The cloud computer policy type.
   * 
   * @example
   * SYSTEM
   */
  policyGroupType?: string;
  /**
   * @remarks
   * The status of the cloud computer policy.
   * 
   * @example
   * AVAILABLE
   */
  policyStatus?: string;
  portProxy?: string;
  /**
   * @remarks
   * The cloud computer preemption policy.
   * 
   * > To ensure user experience and data security for end users currently using a cloud computer, mutual preemption between multiple users is not allowed. This parameter defaults to `off` and cannot be modified.
   * 
   * @example
   * off
   */
  preemptLogin?: string;
  /**
   * @remarks
   * The usernames of users who can preempt the cloud computer.
   */
  preemptLoginUsers?: string[];
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
   * Whether to enable image quality enhancement for design and 3D application scenarios.
   * 
   * @example
   * off
   */
  qualityEnhancement?: string;
  /**
   * @remarks
   * Whether to enable custom screen recording.
   * 
   * @example
   * off
   */
  recordContent?: string;
  /**
   * @remarks
   * The expiration time for custom screen recording files. Default value: 30 days.
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
   * The screen recording event suffix.
   */
  recordEventFileExts?: string[];
  /**
   * @remarks
   * The list of absolute paths for file monitoring in screen recording audit.
   */
  recordEventFilePaths?: string[];
  /**
   * @remarks
   * The screen recording event severity switch.
   */
  recordEventLevels?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsRecordEventLevels[];
  /**
   * @remarks
   * The list of absolute paths for registry monitoring in screen recording audit.
   * 
   * @example
   * Computer\\HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\USBSTOR
   */
  recordEventRegisters?: string[];
  /**
   * @remarks
   * Whether to enable screen recording.
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
   * The screen recording file viewing duration in minutes. Recording files are automatically split based on this duration and uploaded to the bucket. When a file reaches 300 MB, it is preferentially rolled over.
   * 
   * @example
   * 10
   */
  recordingDuration?: number;
  /**
   * @remarks
   * The screen recording end time in HH:MM:SS format. This parameter takes effect only when Recording is set to PERIOD.
   * 
   * @example
   * 08:59:00
   */
  recordingEndTime?: string;
  /**
   * @remarks
   * The retention period for screen recording files. Valid values: 1 to 180 days.
   * 
   * @example
   * 15
   */
  recordingExpires?: number;
  /**
   * @remarks
   * The screen recording frame rate. Unit: FPS (frames per second).
   * 
   * @example
   * 5
   */
  recordingFps?: number;
  /**
   * @remarks
   * The screen recording start time in HH:MM:SS format. This parameter takes effect only when Recording is set to PERIOD.
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
   * The screen recording client notification message. Leave empty by default.
   * 
   * @example
   * Your cloud desktop is being recorded.
   */
  recordingUserNotifyMessage?: string;
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
   * Resets the cloud computer.
   * 
   * @example
   * null
   */
  resetDesktop?: string;
  resolutionDpi?: number;
  resolutionHeight?: number;
  resolutionModel?: string;
  resolutionWidth?: number;
  /**
   * @remarks
   * The number of resource groups associated with this policy.
   * 
   * @example
   * 1
   */
  resourceGroupCount?: number;
  /**
   * @remarks
   * The region to which the cloud computer policy belongs.
   * 
   * > For region-less policies, this value is `center`.
   * 
   * @example
   * center
   */
  resourceRegionId?: string;
  safeMenu?: string;
  /**
   * @remarks
   * The effective scope of the policy.
   * 
   * @example
   * GLOBAL
   */
  scope?: string;
  /**
   * @remarks
   * Specify this parameter when `Scope` is set to `IP`. This parameter takes effect only when `Scope` is set to `IP`.
   */
  scopeValue?: string[];
  screenDisplayMode?: string;
  /**
   * @remarks
   * Whether to enable smoothness enhancement for daily office scenarios.
   * 
   * @example
   * off
   */
  smoothEnhancement?: string;
  /**
   * @remarks
   * Whether to provide the status monitoring feature in the floating ball when accessing the cloud computer.
   * 
   * @example
   * on
   */
  statusMonitor?: string;
  /**
   * @remarks
   * The streaming mode adaptation scenario.
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
   * USB redirection.
   * 
   * @example
   * on
   */
  usbRedirect?: string;
  /**
   * @remarks
   * The USB redirection rule.
   */
  usbSupplyRedirectRule?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsUsbSupplyRedirectRule[];
  useTime?: string;
  /**
   * @remarks
   * The average bitrate for video encoding. Valid values: 1000 to 50000.
   * 
   * @example
   * 1000
   */
  videoEncAvgKbps?: number;
  /**
   * @remarks
   * The maximum quantization parameter (QP) for video encoding, representing the lowest quality. Valid values: 0 to 51.
   * 
   * @example
   * 20
   */
  videoEncMaxQP?: number;
  /**
   * @remarks
   * The minimum quantization parameter (QP) for video encoding, representing the highest quality. Valid values: 0 to 51.
   * 
   * @example
   * 20
   */
  videoEncMinQP?: number;
  /**
   * @remarks
   * The peak bitrate for video encoding. Valid values: 1000 to 50000.
   * 
   * @example
   * 1000
   */
  videoEncPeakKbps?: number;
  /**
   * @remarks
   * The video encoding policy.
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
   * The blind watermark anti-photo feature.
   * 
   * @example
   * off
   */
  watermarkAntiCam?: string;
  /**
   * @remarks
   * The watermark font color in RGB format. Valid values: 0 to 16777215.
   * 
   * @example
   * 0
   */
  watermarkColor?: number;
  /**
   * @remarks
   * If you set `WatermarkType` to `custom`, you must also specify `WatermarkCustomText`.
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
   * The blind watermark enhancement feature.
   * 
   * @example
   * medium
   */
  watermarkPower?: string;
  /**
   * @remarks
   * The number of watermark rows.
   * 
   * > This parameter is not publicly available.
   * 
   * @example
   * 5
   */
  watermarkRowAmount?: number;
  /**
   * @remarks
   * The blind watermark security priority rule.
   * 
   * @example
   * on
   */
  watermarkSecurity?: string;
  watermarkShadow?: string;
  /**
   * @remarks
   * The watermark transparency level.
   * 
   * @example
   * LIGHT
   */
  watermarkTransparency?: string;
  /**
   * @remarks
   * The watermark transparency. A higher value means lower transparency. Valid values: 10 to 100.
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
  wuyingKeeper?: string;
  /**
   * @remarks
   * Whether to provide the WUYING AI Assistant feature in the floating ball when accessing the cloud computer.
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
      appContentProtection: 'AppContentProtection',
      authorizeAccessPolicyRules: 'AuthorizeAccessPolicyRules',
      authorizeSecurityPolicyRules: 'AuthorizeSecurityPolicyRules',
      autoReconnect: 'AutoReconnect',
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
      description: 'Description',
      desktopCount: 'DesktopCount',
      desktopGroupCount: 'DesktopGroupCount',
      deviceConnectHint: 'DeviceConnectHint',
      deviceRedirects: 'DeviceRedirects',
      deviceRules: 'DeviceRules',
      diskOverload: 'DiskOverload',
      displayMode: 'DisplayMode',
      domainList: 'DomainList',
      domainResolveRule: 'DomainResolveRule',
      domainResolveRuleType: 'DomainResolveRuleType',
      edsCount: 'EdsCount',
      endUserApplyAdminCoordinate: 'EndUserApplyAdminCoordinate',
      endUserCount: 'EndUserCount',
      endUserGroupCoordinate: 'EndUserGroupCoordinate',
      externalDrive: 'ExternalDrive',
      fileMigrate: 'FileMigrate',
      fileTransfer: 'FileTransfer',
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
      organizationCount: 'OrganizationCount',
      policyGroupId: 'PolicyGroupId',
      policyGroupType: 'PolicyGroupType',
      policyStatus: 'PolicyStatus',
      portProxy: 'PortProxy',
      preemptLogin: 'PreemptLogin',
      preemptLoginUsers: 'PreemptLoginUsers',
      printerRedirection: 'PrinterRedirection',
      qualityEnhancement: 'QualityEnhancement',
      recordContent: 'RecordContent',
      recordContentExpires: 'RecordContentExpires',
      recordEventDuration: 'RecordEventDuration',
      recordEventFileExts: 'RecordEventFileExts',
      recordEventFilePaths: 'RecordEventFilePaths',
      recordEventLevels: 'RecordEventLevels',
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
      resetDesktop: 'ResetDesktop',
      resolutionDpi: 'ResolutionDpi',
      resolutionHeight: 'ResolutionHeight',
      resolutionModel: 'ResolutionModel',
      resolutionWidth: 'ResolutionWidth',
      resourceGroupCount: 'ResourceGroupCount',
      resourceRegionId: 'ResourceRegionId',
      safeMenu: 'SafeMenu',
      scope: 'Scope',
      scopeValue: 'ScopeValue',
      screenDisplayMode: 'ScreenDisplayMode',
      smoothEnhancement: 'SmoothEnhancement',
      statusMonitor: 'StatusMonitor',
      streamingMode: 'StreamingMode',
      targetFps: 'TargetFps',
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
      watermarkTransparency: 'WatermarkTransparency',
      watermarkTransparencyValue: 'WatermarkTransparencyValue',
      watermarkType: 'WatermarkType',
      wuyingKeeper: 'WuyingKeeper',
      wyAssistant: 'WyAssistant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      academicProxy: 'string',
      adminAccess: 'string',
      adminKeyboardOnFullScreen: 'string',
      adminKeyboardOnWindows: 'string',
      appContentProtection: 'string',
      authorizeAccessPolicyRules: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules },
      authorizeSecurityPolicyRules: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules },
      autoReconnect: 'string',
      cameraRedirect: 'string',
      clientControlMenu: 'string',
      clientCreateSnapshot: 'string',
      clientHibernate: 'string',
      clientRestart: 'string',
      clientShutdown: 'string',
      clientTypes: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsClientTypes },
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
      description: 'string',
      desktopCount: 'number',
      desktopGroupCount: 'number',
      deviceConnectHint: 'string',
      deviceRedirects: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsDeviceRedirects },
      deviceRules: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsDeviceRules },
      diskOverload: 'string',
      displayMode: 'string',
      domainList: 'string',
      domainResolveRule: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsDomainResolveRule },
      domainResolveRuleType: 'string',
      edsCount: 'number',
      endUserApplyAdminCoordinate: 'string',
      endUserCount: 'string',
      endUserGroupCoordinate: 'string',
      externalDrive: 'string',
      fileMigrate: 'string',
      fileTransfer: 'string',
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
      netRedirectRule: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsNetRedirectRule },
      networkPrinter: 'string',
      organizationCount: 'string',
      policyGroupId: 'string',
      policyGroupType: 'string',
      policyStatus: 'string',
      portProxy: 'string',
      preemptLogin: 'string',
      preemptLoginUsers: { 'type': 'array', 'itemType': 'string' },
      printerRedirection: 'string',
      qualityEnhancement: 'string',
      recordContent: 'string',
      recordContentExpires: 'number',
      recordEventDuration: 'number',
      recordEventFileExts: { 'type': 'array', 'itemType': 'string' },
      recordEventFilePaths: { 'type': 'array', 'itemType': 'string' },
      recordEventLevels: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsRecordEventLevels },
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
      resetDesktop: 'string',
      resolutionDpi: 'number',
      resolutionHeight: 'number',
      resolutionModel: 'string',
      resolutionWidth: 'number',
      resourceGroupCount: 'number',
      resourceRegionId: 'string',
      safeMenu: 'string',
      scope: 'string',
      scopeValue: { 'type': 'array', 'itemType': 'string' },
      screenDisplayMode: 'string',
      smoothEnhancement: 'string',
      statusMonitor: 'string',
      streamingMode: 'string',
      targetFps: 'number',
      usbRedirect: 'string',
      usbSupplyRedirectRule: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsUsbSupplyRedirectRule },
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
      watermarkTransparency: 'string',
      watermarkTransparencyValue: 'number',
      watermarkType: 'string',
      wuyingKeeper: 'string',
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
    if(Array.isArray(this.preemptLoginUsers)) {
      $dara.Model.validateArray(this.preemptLoginUsers);
    }
    if(Array.isArray(this.recordEventFileExts)) {
      $dara.Model.validateArray(this.recordEventFileExts);
    }
    if(Array.isArray(this.recordEventFilePaths)) {
      $dara.Model.validateArray(this.recordEventFilePaths);
    }
    if(Array.isArray(this.recordEventLevels)) {
      $dara.Model.validateArray(this.recordEventLevels);
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

export class DescribePolicyGroupsResponseBody extends $dara.Model {
  count?: number;
  /**
   * @remarks
   * The detailed information about the cloud computer policies.
   */
  describePolicyGroups?: DescribePolicyGroupsResponseBodyDescribePolicyGroups[];
  /**
   * @remarks
   * The pagination token for the next query. If NextToken is empty, no further pages exist.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      describePolicyGroups: 'DescribePolicyGroups',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      describePolicyGroups: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroups },
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
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

