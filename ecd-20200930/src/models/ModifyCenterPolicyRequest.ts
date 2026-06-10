// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCenterPolicyRequestAuthorizeAccessPolicyRule extends $dara.Model {
  /**
   * @remarks
   * Client access IP address range. Specify an IPv4 CIDr block.
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

export class ModifyCenterPolicyRequestAuthorizeSecurityPolicyRule extends $dara.Model {
  /**
   * @remarks
   * Target of the security group control rule. Specify an IPv4 CIDR block.
   * 
   * @example
   * 47.100.XX.XX/16
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
   * Protocol type for the security group control rule.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * Authorization policy for the security group control rule.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * Port range for the security group control rule. The port range depends on the protocol (IpProtocol):
   * 
   * - For TCP or UDP protocols: Port range is 1 to 65535. Separate the start and end ports with a forward slash (/). Example: 1/200.
   * 
   * - For ICMP protocol: Set to -1/-1.
   * 
   * - For GRE protocol: Set to -1/-1.
   * 
   * - When IpProtocol is set to all: Set to -1/-1.
   * 
   * For more information about common ports for typical applications, see [Common ports](https://help.aliyun.com/document_detail/40724.html).
   * 
   * @example
   * 22/22
   */
  portRange?: string;
  /**
   * @remarks
   * Priority of the security group control rule. A smaller number indicates a higher priority. Valid values: 1 to 60. Default value: 1.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * Rule direction for the security group control rule.
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

export class ModifyCenterPolicyRequestClientType extends $dara.Model {
  /**
   * @remarks
   * Client login control. Specifies the client type.
   * 
   * @example
   * android
   */
  clientType?: string;
  /**
   * @remarks
   * Client login control. Specifies whether to allow using a specific client type to log on to cloud computers.
   * 
   * > If you don\\"t configure `ClientType` parameters, all client types are allowed by default.
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

export class ModifyCenterPolicyRequestClipboardGraineds extends $dara.Model {
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

export class ModifyCenterPolicyRequestDeviceRedirects extends $dara.Model {
  /**
   * @remarks
   * Peripheral type.
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

export class ModifyCenterPolicyRequestDeviceRules extends $dara.Model {
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

export class ModifyCenterPolicyRequestDomainResolveRule extends $dara.Model {
  /**
   * @remarks
   * Policy description.
   * 
   * @example
   * Policy description.
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

export class ModifyCenterPolicyRequestNetRedirectRule extends $dara.Model {
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
   * Allow
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

export class ModifyCenterPolicyRequestRecordEventLevels extends $dara.Model {
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

export class ModifyCenterPolicyRequestRevokeAccessPolicyRule extends $dara.Model {
  /**
   * @remarks
   * Client access IP address range to delete. Specify an IPv4 CIDR block.
   * 
   * @example
   * 47.100.XX.XX/16
   */
  cidrIp?: string;
  /**
   * @remarks
   * Description of the client IP address whitelist to delete.
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

export class ModifyCenterPolicyRequestRevokeSecurityPolicyRule extends $dara.Model {
  /**
   * @remarks
   * Target of the security group control rule to delete. Specify an IPv4 CIDR block.
   * 
   * @example
   * 47.100.XX.XX/16
   */
  cidrIp?: string;
  /**
   * @remarks
   * Description of the security group control rule to delete.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Protocol type for the security group control rule to delete.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * Authorization policy for the security group control rule to delete.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * Port range for the security group control rule to delete. The port range depends on the protocol (IpProtocol):
   * 
   * - For TCP or UDP protocols: Port range is 1 to 65535. Separate the start and end ports with a forward slash (/). Example: 1/200.
   * 
   * - For ICMP protocol: Set to -1/-1.
   * 
   * - For GRE protocol: Set to -1/-1.
   * 
   * - When IpProtocol is set to all: Set to -1/-1.
   * 
   * For more information about common ports for typical applications, see [Common ports](https://help.aliyun.com/document_detail/40724.html).
   * 
   * @example
   * 22/22
   */
  portRange?: string;
  /**
   * @remarks
   * Priority of the security group control rule to delete. A smaller number indicates a higher priority. Valid values: 1 to 60. Default value: 1.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * Rule direction for the security group control rule to delete.
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

export class ModifyCenterPolicyRequestUsbSupplyRedirectRule extends $dara.Model {
  /**
   * @remarks
   * Rule description.
   * 
   * @example
   * Test rule
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
   * 1
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

export class ModifyCenterPolicyRequest extends $dara.Model {
  academicProxy?: string;
  /**
   * @remarks
   * Specifies whether users have administrator permissions after logging on to cloud computers.
   * 
   * > This feature is in invitational preview and not available to the public.
   * 
   * @example
   * deny
   */
  adminAccess?: string;
  adminKeyboardOnFullScreen?: string;
  adminKeyboardOnWindows?: string;
  /**
   * @remarks
   * Specifies whether to enable anti-screenshot protection.
   * 
   * @example
   * on
   */
  appContentProtection?: string;
  /**
   * @remarks
   * List of new client IP address whitelists.
   */
  authorizeAccessPolicyRule?: ModifyCenterPolicyRequestAuthorizeAccessPolicyRule[];
  /**
   * @remarks
   * List of new security group control rules.
   */
  authorizeSecurityPolicyRule?: ModifyCenterPolicyRequestAuthorizeSecurityPolicyRule[];
  /**
   * @remarks
   * Automatically reconnect after disconnection
   * 
   * @example
   * off
   */
  autoReconnect?: string;
  businessChannel?: string;
  /**
   * @remarks
   * The business type.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  businessType?: number;
  /**
   * @remarks
   * Local camera redirection. This parameter takes effect only if DeviceRedirects does not include a local camera redirection policy.
   * 
   * @example
   * on
   */
  cameraRedirect?: string;
  /**
   * @remarks
   * Event level for screen recording
   */
  clientControlMenu?: string;
  clientCreateSnapshot?: string;
  /**
   * @remarks
   * List of client login control rules. Controls which clients can access cloud computers.
   */
  clientType?: ModifyCenterPolicyRequestClientType[];
  /**
   * @remarks
   * The clipboard permissions.
   * 
   * @example
   * off
   */
  clipboard?: string;
  clipboardGraineds?: ModifyCenterPolicyRequestClipboardGraineds[];
  clipboardScope?: string;
  /**
   * @remarks
   * Specifies whether to enable color enhancement for design and 3D applications.
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
   * 50
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
   * Overall CPU usage percentage. Valid values: 70 to 90.
   * 
   * @example
   * 70
   */
  cpuRateLimit?: number;
  /**
   * @remarks
   * Overall CPU sampling duration. Valid values: 10 to 60. Unit: seconds.
   * 
   * @example
   * 30
   */
  cpuSampleDuration?: number;
  /**
   * @remarks
   * Single-core CPU usage percentage. Valid values: 70 to 100.
   * 
   * @example
   * 80
   */
  cpuSingleRateLimit?: number;
  description?: string;
  /**
   * @remarks
   * Peripheral connection prompt control.
   * 
   * @example
   * off
   */
  deviceConnectHint?: string;
  /**
   * @remarks
   * Device redirection rules.
   */
  deviceRedirects?: ModifyCenterPolicyRequestDeviceRedirects[];
  /**
   * @remarks
   * Custom peripheral rules.
   */
  deviceRules?: ModifyCenterPolicyRequestDeviceRules[];
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
   * 120
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
   * Domain name resolution policies.
   */
  domainResolveRule?: ModifyCenterPolicyRequestDomainResolveRule[];
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
   * Users on the same office network share cloud computers.
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
  /**
   * @remarks
   * Screen recording event suffix
   */
  fileTransferSpeedLocation?: string;
  /**
   * @remarks
   * Specifies whether to enable the image quality policy for graphics-intensive cloud computers. Enable this policy for scenarios such as professional design where high performance and user experience are required.
   * 
   * @example
   * off
   */
  gpuAcceleration?: string;
  hoverConfigMsg?: string;
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
   * Network communication protocol.
   * 
   * @example
   * both
   */
  internetCommunicationProtocol?: string;
  /**
   * @remarks
   * Wuying Keeper toggle for mobile devices
   * 
   * @example
   * off
   */
  internetPrinter?: string;
  /**
   * @remarks
   * The local disk mapping permissions.
   * 
   * @example
   * off
   */
  localDrive?: string;
  /**
   * @remarks
   * Maximum reconnection retry time after an unexpected disconnection. Valid values: 30 to 7200. Unit: seconds.
   * 
   * @example
   * 120
   */
  maxReconnectTime?: number;
  /**
   * @remarks
   * Memory downclocking duration per process. Valid values: 30 to 120. Unit: seconds.
   * 
   * @example
   * 40
   */
  memoryDownGradeDuration?: number;
  memoryOverload?: string;
  /**
   * @remarks
   * The name of the process.
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
   * Overall memory usage percentage. Valid values: 70 to 90.
   * 
   * @example
   * 70
   */
  memoryRateLimit?: number;
  /**
   * @remarks
   * Overall memory sampling duration. Valid values: 30 to 60. Unit: seconds.
   * 
   * @example
   * 40
   */
  memorySampleDuration?: number;
  /**
   * @remarks
   * Memory usage per process percentage. Valid values: 30 to 60.
   * 
   * @example
   * 40
   */
  memorySingleRateLimit?: number;
  /**
   * @remarks
   * Specifies whether to provide the Restart button in the cloud computer floating ball when connecting via mobile clients (Android and iOS clients).
   * 
   * > This feature applies only to mobile clients of version 7.4 or later.
   * 
   * @example
   * off
   */
  mobileRestart?: string;
  /**
   * @remarks
   * The security button toggle for Windows systems on mobile devices
   * 
   * @example
   * off
   */
  mobileSafeMenu?: string;
  /**
   * @remarks
   * Specifies whether to provide the Shutdown button in the cloud computer floating ball when connecting via mobile clients (Android and iOS clients).
   * 
   * > This feature applies only to mobile clients of version 7.4 or later.
   * 
   * @example
   * off
   */
  mobileShutdown?: string;
  /**
   * @remarks
   * Wuying Keeper toggle for mobile devices
   * 
   * @example
   * off
   */
  mobileWuyingKeeper?: string;
  /**
   * @remarks
   * Mobile Wy Assistant Toggle
   * 
   * @example
   * off
   */
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
   * Specifies whether to enable network redirection.
   * 
   * > This feature is in invitational preview and not available to the public.
   * 
   * @example
   * on
   */
  netRedirect?: string;
  /**
   * @remarks
   * Network redirection policy details.
   * 
   * > This feature is in invitational preview and not available to the public.
   */
  netRedirectRule?: ModifyCenterPolicyRequestNetRedirectRule[];
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
  /**
   * @remarks
   * The cloud computer policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-53iyi2aar0nd6****
   */
  policyGroupId?: string;
  portProxy?: string;
  /**
   * @remarks
   * The printer redirection policy. This parameter takes effect only if DeviceRedirects does not include a printer redirection policy.
   * 
   * @example
   * off
   */
  printerRedirect?: string;
  /**
   * @remarks
   * Specifies whether to enable image quality enhancement for design and 3D applications.
   * 
   * @example
   * off
   */
  qualityEnhancement?: string;
  /**
   * @remarks
   * Screen recording duration after an event is detected in audit. Unit: minutes. Valid values: 10 to 60.
   * 
   * @example
   * 10
   */
  recordEventDuration?: number;
  /**
   * @remarks
   * File extensions for screen recording events
   */
  recordEventFileExts?: string[];
  /**
   * @remarks
   * Absolute paths for file monitoring in screen recording audit.
   */
  recordEventFilePaths?: string[];
  /**
   * @remarks
   * Levels of screen recording events
   */
  recordEventLevels?: ModifyCenterPolicyRequestRecordEventLevels[];
  /**
   * @remarks
   * Absolute paths for registry monitoring in screen recording audit.
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
   * Specifies whether to enable screen recording.
   * 
   * @example
   * off
   */
  recording?: string;
  /**
   * @remarks
   * Cloud computer audio recording option.
   * 
   * @example
   * on
   */
  recordingAudio?: string;
  /**
   * @remarks
   * Screen recording file viewing duration in minutes. Recording files are automatically split based on the specified duration and uploaded to the storage bucket. When a file reaches 300 MB, it is prioritized for rolling updates. Valid values: 10 to 60.
   * 
   * @example
   * 10
   */
  recordingDuration?: number;
  /**
   * @remarks
   * Screen recording end time in HH:MM:SS format. This parameter is meaningful only when `Recording` is set to `PERIOD`.
   * 
   * @example
   * 08:59:00
   */
  recordingEndTime?: string;
  /**
   * @remarks
   * Retention period of screen recording files. Valid values: 1 to 180 days.
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
   * 5
   */
  recordingFps?: string;
  /**
   * @remarks
   * Screen recording start time in HH:MM:SS format. This parameter is meaningful only when `Recording` is set to `PERIOD`.
   * 
   * @example
   * 08:00:00
   */
  recordingStartTime?: string;
  /**
   * @remarks
   * Notify end users when screen recording is enabled.
   * 
   * @example
   * off
   */
  recordingUserNotify?: string;
  /**
   * @remarks
   * Message to notify end users when screen recording is enabled.
   * 
   * @example
   * Screen recording is enabled.
   */
  recordingUserNotifyMessage?: string;
  /**
   * @remarks
   * The region ID. Set the value to `cn-shanghai`.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Keyboard and mouse control permissions for remote assistance.
   * 
   * @example
   * fullControl
   */
  remoteCoordinate?: string;
  /**
   * @remarks
   * Reset cloud computer.
   * 
   * @example
   * off
   */
  resetDesktop?: string;
  resolutionDpi?: number;
  /**
   * @remarks
   * Resolution height. Unit: pixels. Valid values for cloud applications: 500 to 50000. Valid values for cloud computers: 480 to 4096.
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
   * Resolution width. Unit: pixels. Valid values for cloud applications: 500 to 50000. Valid values for cloud computers: 480 to 4096.
   * 
   * @example
   * 720
   */
  resolutionWidth?: number;
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * desktop
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of client IP address whitelists to delete.
   */
  revokeAccessPolicyRule?: ModifyCenterPolicyRequestRevokeAccessPolicyRule[];
  /**
   * @remarks
   * List of security group control rules to delete.
   */
  revokeSecurityPolicyRule?: ModifyCenterPolicyRequestRevokeSecurityPolicyRule[];
  /**
   * @remarks
   * Security button toggle for Windows systems on mobile devices
   * 
   * @example
   * off
   */
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
   * Specify when `Scope` is set to `IP`. Takes effect only when `Scope` is `IP`.
   */
  scopeValue?: string[];
  /**
   * @remarks
   * Xiao Ying toggle for mobile devices
   * 
   * @example
   * off
   */
  screenDisplayMode?: string;
  /**
   * @remarks
   * Maximum session bandwidth throttling value. Unit: Kbps. Valid values: 2000 to 100000.
   * 
   * @example
   * 2000
   */
  sessionMaxRateKbps?: number;
  /**
   * @remarks
   * Specifies whether to enable smoothness enhancement for daily office scenarios.
   * 
   * @example
   * off
   */
  smoothEnhancement?: string;
  /**
   * @remarks
   * Specifies whether to provide the status monitoring entry in the cloud computer floating ball.
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
  usbSupplyRedirectRule?: ModifyCenterPolicyRequestUsbSupplyRedirectRule[];
  useTime?: string;
  /**
   * @remarks
   * Average bitrate for video encoding. Unit: Kbps. Valid values: 1000 to 50000.
   * 
   * @example
   * 2000
   */
  videoEncAvgKbps?: number;
  /**
   * @remarks
   * Maximum QP for video encoding, representing lowest quality. Valid values: 0 to 51.
   * 
   * @example
   * 30
   */
  videoEncMaxQP?: number;
  /**
   * @remarks
   * Minimum QP for video encoding, representing highest quality. Valid values: 0 to 51.
   * 
   * @example
   * 30
   */
  videoEncMinQP?: number;
  /**
   * @remarks
   * Peak bitrate for video encoding. Unit: Kbps. Valid values: 1000 to 50000.
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
   * The image display quality policy.
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
   * If you set `WatermarkType` to `custom`, you must also specify custom text using the `WatermarkCustomText` parameter.
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
   * 5
   */
  watermarkRowAmount?: number;
  /**
   * @remarks
   * Blind watermark security priority rule.
   * 
   * @example
   * off
   */
  watermarkSecurity?: string;
  watermarkShadow?: string;
  /**
   * @remarks
   * Watermark opacity. A higher value means lower transparency. Valid values: 10 to 100.
   * 
   * @example
   * 10
   */
  watermarkTransparencyValue?: number;
  /**
   * @remarks
   * The watermark type. You can select up to three types, separated by commas.
   * 
   * > If you set this parameter to `custom`, you must also specify custom text using the `WatermarkCustomText` parameter.
   * 
   * @example
   * EndUserId
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
   * Specifies whether to provide the Wuying AI Assistant entry in the cloud computer floating ball when connecting via desktop clients (including Windows and macOS clients).
   * 
   * > This feature applies only to desktop clients of version 7.7 or later.
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
      policyGroupId: 'PolicyGroupId',
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
      revokeAccessPolicyRule: 'RevokeAccessPolicyRule',
      revokeSecurityPolicyRule: 'RevokeSecurityPolicyRule',
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
      authorizeAccessPolicyRule: { 'type': 'array', 'itemType': ModifyCenterPolicyRequestAuthorizeAccessPolicyRule },
      authorizeSecurityPolicyRule: { 'type': 'array', 'itemType': ModifyCenterPolicyRequestAuthorizeSecurityPolicyRule },
      autoReconnect: 'string',
      businessChannel: 'string',
      businessType: 'number',
      cameraRedirect: 'string',
      clientControlMenu: 'string',
      clientCreateSnapshot: 'string',
      clientType: { 'type': 'array', 'itemType': ModifyCenterPolicyRequestClientType },
      clipboard: 'string',
      clipboardGraineds: { 'type': 'array', 'itemType': ModifyCenterPolicyRequestClipboardGraineds },
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
      deviceRedirects: { 'type': 'array', 'itemType': ModifyCenterPolicyRequestDeviceRedirects },
      deviceRules: { 'type': 'array', 'itemType': ModifyCenterPolicyRequestDeviceRules },
      disconnectKeepSession: 'string',
      disconnectKeepSessionTime: 'number',
      diskOverload: 'string',
      displayMode: 'string',
      domainResolveRule: { 'type': 'array', 'itemType': ModifyCenterPolicyRequestDomainResolveRule },
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
      netRedirectRule: { 'type': 'array', 'itemType': ModifyCenterPolicyRequestNetRedirectRule },
      noOperationDisconnect: 'string',
      noOperationDisconnectTime: 'number',
      policyGroupId: 'string',
      portProxy: 'string',
      printerRedirect: 'string',
      qualityEnhancement: 'string',
      recordEventDuration: 'number',
      recordEventFileExts: { 'type': 'array', 'itemType': 'string' },
      recordEventFilePaths: { 'type': 'array', 'itemType': 'string' },
      recordEventLevels: { 'type': 'array', 'itemType': ModifyCenterPolicyRequestRecordEventLevels },
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
      revokeAccessPolicyRule: { 'type': 'array', 'itemType': ModifyCenterPolicyRequestRevokeAccessPolicyRule },
      revokeSecurityPolicyRule: { 'type': 'array', 'itemType': ModifyCenterPolicyRequestRevokeSecurityPolicyRule },
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
      usbSupplyRedirectRule: { 'type': 'array', 'itemType': ModifyCenterPolicyRequestUsbSupplyRedirectRule },
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

