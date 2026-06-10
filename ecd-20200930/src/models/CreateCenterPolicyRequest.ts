// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCenterPolicyRequestAuthorizeAccessPolicyRule extends $dara.Model {
  /**
   * @remarks
   * Client access IP address range. IPv4 CIDR block.
   * 
   * @example
   * 47.100.XX.XX/16
   */
  cidrIp?: string;
  /**
   * @remarks
   * Description of the client IP address whitelist.
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

export class CreateCenterPolicyRequestAuthorizeSecurityPolicyRule extends $dara.Model {
  /**
   * @remarks
   * Object of the security group control rule. IPv4 CIDR block.
   * 
   * @example
   * 10.0.XX.XX/8
   */
  cidrIp?: string;
  /**
   * @remarks
   * Description of the security group control rule.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Protocol type of the security group control rule.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * Authorization policy of the security group control rule.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * Port range of the security group control rule. The port range depends on the protocol (IpProtocol):
   * 
   * - TCP or UDP: Port range is 1 to 65535. Separate the start and end ports with a forward slash (/). Example: 1/200.
   * 
   * - ICMP: Port is -1/-1.
   * 
   * - GRE: Port is -1/-1.
   * 
   * - IpProtocol is all: Port is -1/-1.
   * 
   * For common ports used by typical applications, see [Common ports](https://help.aliyun.com/document_detail/40724.html).
   * 
   * @example
   * 22/22
   */
  portRange?: string;
  /**
   * @remarks
   * Priority of the security group control rule. A smaller number indicates a higher priority.<br>
   * Valid values: 1 to 60.<br>
   * Default value: 1.<br><br>
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * Direction of the security group control rule.
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

export class CreateCenterPolicyRequestClientType extends $dara.Model {
  /**
   * @remarks
   * Logon method control. Specify the client type.
   * 
   * @example
   * windows
   */
  clientType?: string;
  /**
   * @remarks
   * Logon method control. Specify whether to allow users to log on to cloud desktops using a specific type of client.
   * 
   * > If you do not configure parameters related to `ClientType`, all types of clients are allowed to log on to cloud desktops by default.
   * 
   * @example
   * off
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

export class CreateCenterPolicyRequestClipboardGraineds extends $dara.Model {
  clipboardSize?: number;
  clipboardSizeUnit?: string;
  clipboardType?: string;
  grainedType?: string;
  inClipboardSize?: number;
  inClipboardSizeUnit?: string;
  outClipboardSize?: number;
  outClipboardSizeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      clipboardSize: 'ClipboardSize',
      clipboardSizeUnit: 'ClipboardSizeUnit',
      clipboardType: 'ClipboardType',
      grainedType: 'GrainedType',
      inClipboardSize: 'InClipboardSize',
      inClipboardSizeUnit: 'InClipboardSizeUnit',
      outClipboardSize: 'OutClipboardSize',
      outClipboardSizeUnit: 'OutClipboardSizeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipboardSize: 'number',
      clipboardSizeUnit: 'string',
      clipboardType: 'string',
      grainedType: 'string',
      inClipboardSize: 'number',
      inClipboardSizeUnit: 'string',
      outClipboardSize: 'number',
      outClipboardSizeUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenterPolicyRequestDeviceRedirects extends $dara.Model {
  /**
   * @remarks
   * Device type
   * 
   * @example
   * camera
   */
  deviceType?: string;
  /**
   * @remarks
   * Redirection type.
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

export class CreateCenterPolicyRequestDeviceRules extends $dara.Model {
  /**
   * @remarks
   * Device name.
   * 
   * @example
   * sandisk
   */
  deviceName?: string;
  /**
   * @remarks
   * Product ID.
   * 
   * @example
   * 0x55b1
   */
  devicePid?: string;
  /**
   * @remarks
   * Peripheral type.
   * 
   * @example
   * storage
   */
  deviceType?: string;
  /**
   * @remarks
   * Vendor ID. For more information, see [Valid USB Vendor IDs (VIDs)](https://www.usb.org/sites/default/files/vendor_ids032322.pdf_1.pdf).
   * 
   * @example
   * 0x0781
   */
  deviceVid?: string;
  /**
   * @remarks
   * Link optimization command.
   * 
   * @example
   * 2:0
   */
  optCommand?: string;
  platforms?: string;
  /**
   * @remarks
   * Redirection type.
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

export class CreateCenterPolicyRequestDomainResolveRule extends $dara.Model {
  /**
   * @remarks
   * Policy description.
   * 
   * @example
   * 测试规则
   */
  description?: string;
  /**
   * @remarks
   * Domain name.
   * 
   * @example
   * *.example.com
   */
  domain?: string;
  /**
   * @remarks
   * Resolution policy.
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

export class CreateCenterPolicyRequestNetRedirectRule extends $dara.Model {
  /**
   * @remarks
   * Domain name.
   * 
   * @example
   * *.example.com
   */
  domain?: string;
  /**
   * @remarks
   * Redirection policy.
   * 
   * @example
   * allow
   */
  policy?: string;
  /**
   * @remarks
   * Rule type.
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

export class CreateCenterPolicyRequestRecordEventLevels extends $dara.Model {
  /**
   * @remarks
   * Event level
   * 
   * @example
   * HIGH
   */
  eventLevel?: string;
  /**
   * @remarks
   * Event type
   * 
   * @example
   * StartApplication
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

export class CreateCenterPolicyRequestUsbSupplyRedirectRule extends $dara.Model {
  /**
   * @remarks
   * Rule description.
   * 
   * @example
   * 测试规则
   */
  description?: string;
  /**
   * @remarks
   * Product ID.
   * 
   * @example
   * 08**
   */
  productId?: string;
  /**
   * @remarks
   * USB redirection type.
   * 
   * @example
   * 1
   */
  usbRedirectType?: string;
  /**
   * @remarks
   * USB redirection rule type.
   * 
   * @example
   * 2
   */
  usbRuleType?: string;
  /**
   * @remarks
   * Vendor ID. For more information, see [Valid USB Vendor IDs (VIDs)](https://www.usb.org/sites/default/files/vendor_ids032322.pdf_1.pdf).
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
      usbRedirectType: 'string',
      usbRuleType: 'string',
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

export class CreateCenterPolicyRequest extends $dara.Model {
  academicProxy?: string;
  /**
   * @remarks
   * Whether users have administrative permission after logging on to cloud desktops.
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
   * Enable screenshot prevention.
   * 
   * @example
   * off
   */
  appContentProtection?: string;
  /**
   * @remarks
   * Client IP address whitelist. After this parameter is configured, only IP addresses within the specified CIDR blocks can access cloud desktops.
   */
  authorizeAccessPolicyRule?: CreateCenterPolicyRequestAuthorizeAccessPolicyRule[];
  /**
   * @remarks
   * List of security group control rules.
   */
  authorizeSecurityPolicyRule?: CreateCenterPolicyRequestAuthorizeSecurityPolicyRule[];
  /**
   * @remarks
   * Client auto-reconnect switch
   * 
   * @example
   * off
   */
  autoReconnect?: string;
  businessChannel?: string;
  /**
   * @remarks
   * Business type.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  businessType?: number;
  /**
   * @remarks
   * Local camera redirection. This parameter takes effect only when no local camera redirection policy is configured in DeviceRedirects.
   * 
   * @example
   * off
   */
  cameraRedirect?: string;
  clientControlMenu?: string;
  clientCreateSnapshot?: string;
  /**
   * @remarks
   * List of logon method control rules. These rules control which clients can access cloud desktops.
   */
  clientType?: CreateCenterPolicyRequestClientType[];
  /**
   * @remarks
   * Clipboard permission.
   * 
   * @example
   * off
   */
  clipboard?: string;
  /**
   * @remarks
   * Fine-grained clipboard control configuration
   */
  clipboardGraineds?: CreateCenterPolicyRequestClipboardGraineds[];
  /**
   * @remarks
   * Clipboard scope
   * 
   * @example
   * GLOBAL
   */
  clipboardScope?: string;
  /**
   * @remarks
   * Enable color enhancement for design and 3D application scenarios.
   * 
   * @example
   * off
   */
  colorEnhancement?: string;
  cpdDriveClipboard?: string;
  /**
   * @remarks
   * CPU downclocking duration. Valid values: 30 to 120. Unit: seconds.
   * 
   * @example
   * 30
   */
  cpuDownGradeDuration?: number;
  cpuOverload?: string;
  /**
   * @remarks
   * The name of the process.
   */
  cpuProcessors?: string[];
  /**
   * @remarks
   * CPU protection mode switch.
   * 
   * @example
   * off
   */
  cpuProtectedMode?: string;
  /**
   * @remarks
   * CPU overall usage percentage. Valid values: 70 to 90.
   * 
   * @example
   * 70
   */
  cpuRateLimit?: number;
  /**
   * @remarks
   * CPU overall sampling duration. Valid values: 10 to 60. Unit: seconds.
   * 
   * @example
   * 60
   */
  cpuSampleDuration?: number;
  /**
   * @remarks
   * CPU single-core usage percentage. Valid values: 70 to 100.
   * 
   * @example
   * 70
   */
  cpuSingleRateLimit?: number;
  description?: string;
  /**
   * @remarks
   * Peripheral connection hint control.
   * 
   * @example
   * off
   */
  deviceConnectHint?: string;
  /**
   * @remarks
   * List of device redirection rules.
   */
  deviceRedirects?: CreateCenterPolicyRequestDeviceRedirects[];
  /**
   * @remarks
   * List of custom peripheral rules.
   */
  deviceRules?: CreateCenterPolicyRequestDeviceRules[];
  /**
   * @remarks
   * Session retention after disconnection.
   * 
   * > This parameter applies only to cloud application policies.
   * 
   * @example
   * customTime
   */
  disconnectKeepSession?: string;
  /**
   * @remarks
   * Session retention duration after disconnection. Valid values: 30 to 7200. Unit: seconds.
   * 
   * > This parameter applies only to cloud application policies.
   * 
   * @example
   * 30
   */
  disconnectKeepSessionTime?: number;
  diskOverload?: string;
  /**
   * @remarks
   * Display mode.
   * 
   * @example
   * clientCustom
   */
  displayMode?: string;
  /**
   * @remarks
   * Domain name resolution policy.
   */
  domainResolveRule?: CreateCenterPolicyRequestDomainResolveRule[];
  /**
   * @remarks
   * Domain name resolution policy type.
   * 
   * @example
   * off
   */
  domainResolveRuleType?: string;
  /**
   * @remarks
   * Session bandwidth throttling.
   * 
   * @example
   * off
   */
  enableSessionRateLimiting?: string;
  /**
   * @remarks
   * User requests administrator assistance.
   * 
   * @example
   * off
   */
  endUserApplyAdminCoordinate?: string;
  /**
   * @remarks
   * Users in the same office network share cloud desktops.
   * 
   * @example
   * off
   */
  endUserGroupCoordinate?: string;
  externalDrive?: string;
  /**
   * @remarks
   * File migration.
   * 
   * @example
   * off
   */
  fileMigrate?: string;
  fileTransferAddress?: string;
  fileTransferSpeed?: string;
  fileTransferSpeedLocation?: string;
  /**
   * @remarks
   * Enable image quality policy for graphics-intensive cloud desktops. Enable this policy if you require high performance and user experience, such as in professional design scenarios.
   * 
   * @example
   * off
   */
  gpuAcceleration?: string;
  hoverConfigMsg?: string;
  /**
   * @remarks
   * Web client file transfer policy.
   * 
   * @example
   * off
   */
  html5FileTransfer?: string;
  /**
   * @remarks
   * Network communication protocol.
   * 
   * @example
   * both
   */
  internetCommunicationProtocol?: string;
  internetPrinter?: string;
  keyboardControl?: string;
  /**
   * @remarks
   * Local disk mapping permission.
   * 
   * @example
   * off
   */
  localDrive?: string;
  /**
   * @remarks
   * Maximum reconnection retry time when a cloud desktop disconnects due to objective reasons. Valid values: 30 to 7200. Unit: seconds.
   * 
   * @example
   * 120
   */
  maxReconnectTime?: number;
  /**
   * @remarks
   * Memory downclocking duration per worker. Valid values: 30 to 120. Unit: seconds.
   * 
   * @example
   * 40
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
   * Memory overall usage percentage. Valid values: 70 to 90.
   * 
   * @example
   * 70
   */
  memoryRateLimit?: number;
  /**
   * @remarks
   * Memory overall sampling duration. Valid values: 30 to 60. Unit: seconds.
   * 
   * @example
   * 40
   */
  memorySampleDuration?: number;
  /**
   * @remarks
   * Memory usage percentage per worker. Valid values: 30 to 60.
   * 
   * @example
   * 40
   */
  memorySingleRateLimit?: number;
  /**
   * @remarks
   * Provide a restart button in the floating ball on the cloud desktop when connecting through mobile clients (Android and iOS clients).
   * 
   * > This feature applies only to mobile clients V7.4 or later.
   * 
   * @example
   * off
   */
  mobileRestart?: string;
  /**
   * @remarks
   * Mobile Windows security control switch
   * 
   * @example
   * off
   */
  mobileSafeMenu?: string;
  /**
   * @remarks
   * Provide a shutdown button in the floating ball on the cloud desktop when connecting through mobile clients (Android and iOS clients).
   * 
   * > This feature applies only to mobile clients V7.4 or later.
   * 
   * @example
   * off
   */
  mobileShutdown?: string;
  /**
   * @remarks
   * Mobile Wuying Keeper switch
   * 
   * @example
   * off
   */
  mobileWuyingKeeper?: string;
  /**
   * @remarks
   * Mobile Xiao Ying switch
   * 
   * @example
   * off
   */
  mobileWyAssistant?: string;
  modelLibrary?: string;
  multiScreen?: string;
  /**
   * @remarks
   * Policy name.
   * 
   * This parameter is required.
   * 
   * @example
   * testPolicyGroupName
   */
  name?: string;
  /**
   * @remarks
   * Enable network redirection.
   * 
   * > This feature is in invitational preview and is not publicly available.
   * 
   * @example
   * off
   */
  netRedirect?: string;
  /**
   * @remarks
   * Network redirection policy details.
   * 
   * > This feature is in invitational preview and is not publicly available.
   */
  netRedirectRule?: CreateCenterPolicyRequestNetRedirectRule[];
  /**
   * @remarks
   * Disconnect on inactivity.
   * 
   * > This parameter applies only to cloud application policies.
   * 
   * @example
   * off
   */
  noOperationDisconnect?: string;
  /**
   * @remarks
   * Inactivity disconnect duration. Valid values: 120 to 7200. Unit: seconds.
   * 
   * > This parameter applies only to cloud application policies.
   * 
   * @example
   * 120
   */
  noOperationDisconnectTime?: number;
  portProxy?: string;
  /**
   * @remarks
   * Printer redirection policy. This parameter takes effect only when no printer redirection policy is configured in DeviceRedirects.
   * 
   * @example
   * off
   */
  printerRedirect?: string;
  /**
   * @remarks
   * Enable image quality enhancement for design and 3D application scenarios.
   * 
   * @example
   * off
   */
  qualityEnhancement?: string;
  /**
   * @remarks
   * Duration of screen recording after an event is detected in screen recording audit. Unit: minutes. Valid values: 10 to 60.
   * 
   * @example
   * 10
   */
  recordEventDuration?: number;
  /**
   * @remarks
   * File name extensions for screen recording events
   */
  recordEventFileExts?: string[];
  /**
   * @remarks
   * Absolute paths of files to monitor in screen recording audit.
   */
  recordEventFilePaths?: string[];
  /**
   * @remarks
   * Levels of screen recording events
   */
  recordEventLevels?: CreateCenterPolicyRequestRecordEventLevels[];
  /**
   * @remarks
   * Absolute paths of registry keys to monitor in screen recording audit.
   * 
   * @example
   * Computer\\HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\USBSTOR
   */
  recordEventRegisters?: string[];
  /**
   * @remarks
   * List of screen recording events.
   */
  recordEvents?: string[];
  /**
   * @remarks
   * Enable screen recording.
   * 
   * @example
   * off
   */
  recording?: string;
  /**
   * @remarks
   * Options for recording cloud desktop audio.
   * 
   * @example
   * on
   */
  recordingAudio?: string;
  /**
   * @remarks
   * Duration for viewing recorded files. Unit: minutes. Recorded files are automatically split and uploaded to the bucket based on the specified duration. When a file reaches 300 MB, it is rolled over for updates. Valid values: 10 to 60.
   * 
   * @example
   * 10
   */
  recordingDuration?: number;
  /**
   * @remarks
   * Screen recording end time. Format: HH:MM:SS. This parameter takes effect only when `Recording` is set to `PERIOD`.
   * 
   * @example
   * 08:59:00
   */
  recordingEndTime?: string;
  /**
   * @remarks
   * Retention period for recorded files. Valid values: 1 to 180 days.
   * 
   * @example
   * 15
   */
  recordingExpires?: number;
  /**
   * @remarks
   * Screen recording frame rate. Unit: FPS.
   * 
   * @example
   * 2
   */
  recordingFps?: string;
  /**
   * @remarks
   * Screen recording start time. Format: HH:MM:SS. This parameter takes effect only when `Recording` is set to `PERIOD`.
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
   * Message to notify end users that screen recording is enabled.
   * 
   * @example
   * Screen recording is enabled.
   */
  recordingUserNotifyMessage?: string;
  /**
   * @remarks
   * Region ID. This feature is region-independent. Set this parameter to cn-shanghai.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Mouse and keyboard control permissions during remote assistance.
   * 
   * @example
   * fullControl
   */
  remoteCoordinate?: string;
  /**
   * @remarks
   * Reset cloud desktop.
   * 
   * @example
   * off
   */
  resetDesktop?: string;
  resolutionDpi?: number;
  /**
   * @remarks
   * Resolution height. Unit: pixels. Valid values for cloud applications: 500 to 50000. Valid values for cloud desktops: 480 to 4096.
   * 
   * @example
   * 1280
   */
  resolutionHeight?: number;
  /**
   * @remarks
   * Resolution type.
   * 
   * @example
   * adaptive
   */
  resolutionModel?: string;
  /**
   * @remarks
   * Resolution width. Unit: pixels. Valid values for cloud applications: 500 to 50000. Valid values for cloud desktops: 640 to 4096.
   * 
   * @example
   * 720
   */
  resolutionWidth?: number;
  /**
   * @remarks
   * Resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * desktop
   */
  resourceType?: string;
  safeMenu?: string;
  /**
   * @remarks
   * Policy scope.
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
   * Maximum session bandwidth throttling rate. Unit: Kbps. Valid values: 2000 to 100000.
   * 
   * @example
   * 2000
   */
  sessionMaxRateKbps?: number;
  /**
   * @remarks
   * Enable smoothness enhancement for daily office scenarios.
   * 
   * @example
   * off
   */
  smoothEnhancement?: string;
  /**
   * @remarks
   * Provide an entry point for status monitoring in the floating ball on the cloud desktop.
   * 
   * @example
   * off
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
   * Target frame rate. Valid values: 10 to 60.
   * 
   * @example
   * 30
   */
  targetFps?: number;
  /**
   * @remarks
   * Application taskbar.
   * 
   * > This parameter applies only to cloud application policies.
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
  usbSupplyRedirectRule?: CreateCenterPolicyRequestUsbSupplyRedirectRule[];
  useTime?: string;
  /**
   * @remarks
   * Average video encoding bitrate. Unit: Kbps. Valid values: 1000 to 50000.
   * 
   * @example
   * 2000
   */
  videoEncAvgKbps?: number;
  /**
   * @remarks
   * Maximum QP for video encoding, representing the lowest image quality. Valid values: 0 to 51.
   * 
   * @example
   * 30
   */
  videoEncMaxQP?: number;
  /**
   * @remarks
   * Minimum QP for video encoding, representing the highest quality. Valid values: 0 to 51.
   * 
   * @example
   * 30
   */
  videoEncMinQP?: number;
  /**
   * @remarks
   * Peak video encoding bitrate. Unit: Kbps. Valid values: 1000 to 50000.
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
   * on
   */
  videoRedirect?: string;
  /**
   * @remarks
   * Image display quality policy.
   * 
   * @example
   * low
   */
  visualQuality?: string;
  /**
   * @remarks
   * Watermark.
   * 
   * @example
   * off
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
   * Watermark font color. Valid values: 0 to 16777215.
   * 
   * @example
   * 0
   */
  watermarkColor?: number;
  /**
   * @remarks
   * Number of watermark columns. Valid values: 3 to 10.
   * 
   * @example
   * 3
   */
  watermarkColumnAmount?: number;
  /**
   * @remarks
   * If you set the `WatermarkType` parameter to `custom`, you must also specify custom text using the `WatermarkCustomText` parameter.
   * 
   * @example
   * test
   */
  watermarkCustomText?: string;
  /**
   * @remarks
   * Watermark tilt angle. Valid values: -10 to -30.
   * 
   * @example
   * -10
   */
  watermarkDegree?: number;
  /**
   * @remarks
   * Watermark font size. Valid values: 10 to 20.
   * 
   * @example
   * 10
   */
  watermarkFontSize?: number;
  /**
   * @remarks
   * Watermark font style.
   * 
   * @example
   * plain
   */
  watermarkFontStyle?: string;
  /**
   * @remarks
   * Blind watermark enhancement feature.
   * 
   * @example
   * medium
   */
  watermarkPower?: string;
  /**
   * @remarks
   * Number of watermark rows. Valid values: 3 to 10.
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
   * Watermark opacity. A higher value indicates lower transparency. Valid values: 10 to 100.
   * 
   * @example
   * 10
   */
  watermarkTransparencyValue?: number;
  /**
   * @remarks
   * Watermark type. You can select up to three types, separated by commas.
   * 
   * > If you set this parameter to `custom`, you must also specify custom text using the `WatermarkCustomText` parameter.
   * 
   * @example
   * EndUserId,HostName,ClientTime
   */
  watermarkType?: string;
  /**
   * @remarks
   * Wuying Keeper switch.
   * 
   * @example
   * off
   */
  wuyingKeeper?: string;
  /**
   * @remarks
   * Provide an entry point for Wuying AI Assistant in the floating ball on the cloud desktop when connecting through desktop clients (including Windows and macOS clients).
   * 
   * > This feature applies only to desktop clients V7.7 or later.
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
      authorizeAccessPolicyRule: 'AuthorizeAccessPolicyRule',
      authorizeSecurityPolicyRule: 'AuthorizeSecurityPolicyRule',
      autoReconnect: 'AutoReconnect',
      businessChannel: 'BusinessChannel',
      businessType: 'BusinessType',
      cameraRedirect: 'CameraRedirect',
      clientControlMenu: 'ClientControlMenu',
      clientCreateSnapshot: 'ClientCreateSnapshot',
      clientType: 'ClientType',
      clipboard: 'Clipboard',
      clipboardGraineds: 'ClipboardGraineds',
      clipboardScope: 'ClipboardScope',
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
      deviceConnectHint: 'DeviceConnectHint',
      deviceRedirects: 'DeviceRedirects',
      deviceRules: 'DeviceRules',
      disconnectKeepSession: 'DisconnectKeepSession',
      disconnectKeepSessionTime: 'DisconnectKeepSessionTime',
      diskOverload: 'DiskOverload',
      displayMode: 'DisplayMode',
      domainResolveRule: 'DomainResolveRule',
      domainResolveRuleType: 'DomainResolveRuleType',
      enableSessionRateLimiting: 'EnableSessionRateLimiting',
      endUserApplyAdminCoordinate: 'EndUserApplyAdminCoordinate',
      endUserGroupCoordinate: 'EndUserGroupCoordinate',
      externalDrive: 'ExternalDrive',
      fileMigrate: 'FileMigrate',
      fileTransferAddress: 'FileTransferAddress',
      fileTransferSpeed: 'FileTransferSpeed',
      fileTransferSpeedLocation: 'FileTransferSpeedLocation',
      gpuAcceleration: 'GpuAcceleration',
      hoverConfigMsg: 'HoverConfigMsg',
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
      noOperationDisconnect: 'NoOperationDisconnect',
      noOperationDisconnectTime: 'NoOperationDisconnectTime',
      portProxy: 'PortProxy',
      printerRedirect: 'PrinterRedirect',
      qualityEnhancement: 'QualityEnhancement',
      recordEventDuration: 'RecordEventDuration',
      recordEventFileExts: 'RecordEventFileExts',
      recordEventFilePaths: 'RecordEventFilePaths',
      recordEventLevels: 'RecordEventLevels',
      recordEventRegisters: 'RecordEventRegisters',
      recordEvents: 'RecordEvents',
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
      resetDesktop: 'ResetDesktop',
      resolutionDpi: 'ResolutionDpi',
      resolutionHeight: 'ResolutionHeight',
      resolutionModel: 'ResolutionModel',
      resolutionWidth: 'ResolutionWidth',
      resourceType: 'ResourceType',
      safeMenu: 'SafeMenu',
      scope: 'Scope',
      scopeValue: 'ScopeValue',
      screenDisplayMode: 'ScreenDisplayMode',
      sessionMaxRateKbps: 'SessionMaxRateKbps',
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
      watermarkColumnAmount: 'WatermarkColumnAmount',
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
      authorizeAccessPolicyRule: { 'type': 'array', 'itemType': CreateCenterPolicyRequestAuthorizeAccessPolicyRule },
      authorizeSecurityPolicyRule: { 'type': 'array', 'itemType': CreateCenterPolicyRequestAuthorizeSecurityPolicyRule },
      autoReconnect: 'string',
      businessChannel: 'string',
      businessType: 'number',
      cameraRedirect: 'string',
      clientControlMenu: 'string',
      clientCreateSnapshot: 'string',
      clientType: { 'type': 'array', 'itemType': CreateCenterPolicyRequestClientType },
      clipboard: 'string',
      clipboardGraineds: { 'type': 'array', 'itemType': CreateCenterPolicyRequestClipboardGraineds },
      clipboardScope: 'string',
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
      deviceConnectHint: 'string',
      deviceRedirects: { 'type': 'array', 'itemType': CreateCenterPolicyRequestDeviceRedirects },
      deviceRules: { 'type': 'array', 'itemType': CreateCenterPolicyRequestDeviceRules },
      disconnectKeepSession: 'string',
      disconnectKeepSessionTime: 'number',
      diskOverload: 'string',
      displayMode: 'string',
      domainResolveRule: { 'type': 'array', 'itemType': CreateCenterPolicyRequestDomainResolveRule },
      domainResolveRuleType: 'string',
      enableSessionRateLimiting: 'string',
      endUserApplyAdminCoordinate: 'string',
      endUserGroupCoordinate: 'string',
      externalDrive: 'string',
      fileMigrate: 'string',
      fileTransferAddress: 'string',
      fileTransferSpeed: 'string',
      fileTransferSpeedLocation: 'string',
      gpuAcceleration: 'string',
      hoverConfigMsg: 'string',
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
      netRedirectRule: { 'type': 'array', 'itemType': CreateCenterPolicyRequestNetRedirectRule },
      noOperationDisconnect: 'string',
      noOperationDisconnectTime: 'number',
      portProxy: 'string',
      printerRedirect: 'string',
      qualityEnhancement: 'string',
      recordEventDuration: 'number',
      recordEventFileExts: { 'type': 'array', 'itemType': 'string' },
      recordEventFilePaths: { 'type': 'array', 'itemType': 'string' },
      recordEventLevels: { 'type': 'array', 'itemType': CreateCenterPolicyRequestRecordEventLevels },
      recordEventRegisters: { 'type': 'array', 'itemType': 'string' },
      recordEvents: { 'type': 'array', 'itemType': 'string' },
      recording: 'string',
      recordingAudio: 'string',
      recordingDuration: 'number',
      recordingEndTime: 'string',
      recordingExpires: 'number',
      recordingFps: 'string',
      recordingStartTime: 'string',
      recordingUserNotify: 'string',
      recordingUserNotifyMessage: 'string',
      regionId: 'string',
      remoteCoordinate: 'string',
      resetDesktop: 'string',
      resolutionDpi: 'number',
      resolutionHeight: 'number',
      resolutionModel: 'string',
      resolutionWidth: 'number',
      resourceType: 'string',
      safeMenu: 'string',
      scope: 'string',
      scopeValue: { 'type': 'array', 'itemType': 'string' },
      screenDisplayMode: 'string',
      sessionMaxRateKbps: 'number',
      smoothEnhancement: 'string',
      statusMonitor: 'string',
      streamingMode: 'string',
      targetFps: 'number',
      taskbar: 'string',
      usbRedirect: 'string',
      usbSupplyRedirectRule: { 'type': 'array', 'itemType': CreateCenterPolicyRequestUsbSupplyRedirectRule },
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
      watermarkColumnAmount: 'number',
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
      wuyingKeeper: 'string',
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
    if(Array.isArray(this.clipboardGraineds)) {
      $dara.Model.validateArray(this.clipboardGraineds);
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
    if(Array.isArray(this.recordEvents)) {
      $dara.Model.validateArray(this.recordEvents);
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

