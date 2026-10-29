// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolicyGroupsResponseBodyDescribePolicyGroupsAppScreenshotBuckets extends $dara.Model {
  /**
   * @remarks
   * The bucket name.
   * 
   * @example
   * my-bucket
   */
  bucketName?: string;
  /**
   * @remarks
   * The region where the user\\"s OSS bucket is located. It must match the actual region of the bucket.
   * 
   * @example
   * cn-hangzhou
   */
  bucketRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      bucketRegionId: 'BucketRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      bucketRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules extends $dara.Model {
  /**
   * @remarks
   * The client access IP address CIDR block. The value must be an IPv4 CIDR block.
   * 
   * @example
   * 47.100.XX.XX/16
   */
  cidrIp?: string;
  /**
   * @remarks
   * The description of the client access IP address CIDR block.
   * 
   * @example
   * Corporate office network
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
   * The target of the security group control rule. The value must be an IPv4 CIDR block.
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
   * Allow access to the internal R&D environment
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
   * The priority of the security group control rule. A smaller value indicates a higher priority.
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
   * Specifies whether to allow a specific type of client to connect to the cloud computer.
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
   * The redirection type. Valid values:
   * 
   * - usbRedirect: USB redirection.
   * - deviceRedirect: Device redirection.
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

export class DescribePolicyGroupsResponseBodyDescribePolicyGroupsDomainResolveRule extends $dara.Model {
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
   * The event level.
   * 
   * @example
   * HIGH
   */
  eventLevel?: string;
  /**
   * @remarks
   * The event type.
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
   * The type of the USB redirection rule.
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
  /**
   * @remarks
   * Specifies whether to enable the academic proxy feature. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  academicProxy?: string;
  /**
   * @remarks
   * Specifies whether users have administrator permissions after connecting to a cloud computer.
   * 
   * > This feature is in closed beta and is not publicly available.
   * 
   * @example
   * deny
   */
  adminAccess?: string;
  /**
   * @remarks
   * Specifies whether to enable administrator keyboard control in full-screen mode. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  adminKeyboardOnFullScreen?: string;
  /**
   * @remarks
   * Specifies whether to enable administrator keyboard control in Windows. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  adminKeyboardOnWindows?: string;
  /**
   * @remarks
   * Specifies whether to enable the screen capture prevention feature.
   * 
   * @example
   * off
   */
  appContentProtection?: string;
  /**
   * @remarks
   * The list of custom Object Storage Service (OSS) buckets for mobile screenshots with screen capture prevention.
   */
  appScreenshotBuckets?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsAppScreenshotBuckets[];
  /**
   * @remarks
   * The list of client IP address whitelists. Only IP addresses in the whitelisted CIDR blocks can access the cloud computer.
   */
  authorizeAccessPolicyRules?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules[];
  /**
   * @remarks
   * The list of security group control rules.
   */
  authorizeSecurityPolicyRules?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules[];
  /**
   * @remarks
   * The client auto-reconnect configuration.
   * 
   * @example
   * off
   */
  autoReconnect?: string;
  /**
   * @remarks
   * Specifies whether to automatically save mobile screenshots. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  autoSaveAppScreenshot?: string;
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
   * Specifies whether to display the client control menu. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  clientControlMenu?: string;
  /**
   * @remarks
   * Specifies whether to enable the feature that allows clients to create custom snapshots. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  clientCreateSnapshot?: string;
  /**
   * @remarks
   * Specifies whether to display the hibernate option in the client menu. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  clientHibernate?: string;
  /**
   * @remarks
   * Specifies whether to display the restart option in the client menu. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  clientRestart?: string;
  /**
   * @remarks
   * Specifies whether to display the shutdown option in the client menu. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  clientShutdown?: string;
  /**
   * @remarks
   * The list of logon method control rules. This parameter specifies which clients can be used to access the cloud computer.
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
   * Specifies whether color enhancement is enabled for design and 3D common scenarios.
   * 
   * @example
   * off
   */
  colorEnhancement?: string;
  /**
   * @remarks
   * Specifies whether to enable the local drive clipboard feature. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  cpdDriveClipboard?: string;
  /**
   * @remarks
   * The CPU downclocking duration. Valid values: 30 to 120. Unit: seconds.
   * 
   * @example
   * 30
   */
  cpuDownGradeDuration?: number;
  /**
   * @remarks
   * Specifies whether to enable CPU load protection. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  cpuOverload?: string;
  /**
   * @remarks
   * The whitelist of processes that are not restricted by the CPU usage limit.
   */
  cpuProcessors?: string[];
  /**
   * @remarks
   * Specifies whether to enable CPU protection mode.
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
   * The description of the NAS file system.
   * 
   * @example
   * newDescription
   */
  description?: string;
  /**
   * @remarks
   * The number of cloud computers associated with the policy.
   * 
   * @example
   * 1
   */
  desktopCount?: number;
  /**
   * @remarks
   * The number of cloud computer pools associated with the policy.
   * 
   * @example
   * 1
   */
  desktopGroupCount?: number;
  /**
   * @remarks
   * The peripheral connection prompt settings.
   * 
   * @example
   * off
   */
  deviceConnectHint?: string;
  /**
   * @remarks
   * The list of device redirection rules.
   */
  deviceRedirects?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsDeviceRedirects[];
  /**
   * @remarks
   * The list of custom peripheral rules.
   */
  deviceRules?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsDeviceRules[];
  /**
   * @remarks
   * The disk overload protection switch. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
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
   * The access control for domain names. Domain names support wildcards (\\*). Separate multiple domain names with commas (,).
   * 
   * @example
   * off
   */
  domainList?: string;
  /**
   * @remarks
   * The list of domain name resolution policies.
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
   * The total number of cloud computers and cloud computer pools associated with the policy. This parameter is returned only for custom policies.
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
  /**
   * @remarks
   * The number of associated end users.
   * 
   * @example
   * 3
   */
  endUserCount?: string;
  /**
   * @remarks
   * The switch for stream collaboration between users.
   * 
   * @example
   * on
   */
  endUserGroupCoordinate?: string;
  /**
   * @remarks
   * The switch for using external storage devices. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  externalDrive?: string;
  /**
   * @remarks
   * The file migration settings.
   * 
   * @example
   * off
   */
  fileMigrate?: string;
  /**
   * @remarks
   * The file transfer settings.
   * 
   * @example
   * off
   */
  fileTransfer?: string;
  /**
   * @remarks
   * The service address for the file transfer feature.
   * 
   * @example
   * filetransfer.example.com
   */
  fileTransferAddress?: string;
  /**
   * @remarks
   * The file size limit for a single transfer to the cloud computer. This parameter must be used together with the transfer-in unit parameter.
   * 
   * @example
   * 100
   */
  fileTransferInSize?: number;
  /**
   * @remarks
   * The unit for the file size limit of a single transfer to the cloud computer.
   * 
   * @example
   * MB
   */
  fileTransferInUnit?: string;
  /**
   * @remarks
   * The file size limit for a single transfer from the cloud computer. This parameter must be used together with the transfer-out unit parameter.
   * 
   * @example
   * 100
   */
  fileTransferOutSize?: number;
  /**
   * @remarks
   * The unit for the file size limit of a single transfer from the cloud computer.
   * 
   * @example
   * MB
   */
  fileTransferOutUnit?: string;
  /**
   * @remarks
   * The switch for the file transfer size limit. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  fileTransferSizeLimit?: string;
  /**
   * @remarks
   * The file transfer speed level.
   * 
   * @example
   * default
   */
  fileTransferSpeed?: string;
  /**
   * @remarks
   * The effective location of the file transfer speed configured on the client.
   * 
   * @example
   * client
   */
  fileTransferSpeedLocation?: string;
  /**
   * @remarks
   * The file synchronization switch. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  folderSync?: string;
  /**
   * @remarks
   * Specifies whether to enable the image quality policy for cloud computers with graphics-optimized specifications. Enable this policy when high performance and user experience are required, such as in professional design scenarios.
   * 
   * @example
   * off
   */
  gpuAcceleration?: string;
  /**
   * @remarks
   * The switch for the floating ball configuration message prompt. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  hoverConfigMsg?: string;
  /**
   * @remarks
   * The switch for the hibernate button on the floating ball. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  hoverHibernate?: string;
  /**
   * @remarks
   * The switch for the restart button on the floating ball. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  hoverRestart?: string;
  /**
   * @remarks
   * The switch for the shutdown button on the floating ball. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
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
   * BOTH
   */
  internetCommunicationProtocol?: string;
  /**
   * @remarks
   * Specifies whether to enable the network printer feature. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  internetPrinter?: string;
  /**
   * @remarks
   * Specifies whether to enable the floating menu keyboard control. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  keyboardControl?: string;
  /**
   * @remarks
   * The local drive mapping permissions.
   * 
   * @example
   * readwrite
   */
  localDrive?: string;
  /**
   * @remarks
   * The maximum retry time for reconnecting a cloud desktop that is disconnected due to objective reasons. Valid values: 30 to 7200. Unit: seconds.
   * 
   * @example
   * 120
   */
  maxReconnectTime?: number;
  /**
   * @remarks
   * Specifies whether to enable the MCP service. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  mcpService?: string;
  /**
   * @remarks
   * The memory downgrade duration for a single process. Valid values: 30 to 120. Unit: seconds.
   * 
   * @example
   * 30
   */
  memoryDownGradeDuration?: number;
  /**
   * @remarks
   * Specifies whether to enable memory load protection. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  memoryOverload?: string;
  /**
   * @remarks
   * The whitelist of processes that are not restricted by the memory usage limit.
   */
  memoryProcessors?: string[];
  /**
   * @remarks
   * Specifies whether to enable the memory protection mode.
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
   * The overall memory sampling duration. Valid values: 30 to 60. Unit: seconds.
   * 
   * @example
   * 30
   */
  memorySampleDuration?: number;
  /**
   * @remarks
   * The memory usage percentage for a single process. Valid values: 30 to 60.
   * 
   * @example
   * 30
   */
  memorySingleRateLimit?: number;
  /**
   * @remarks
   * Specifies whether to provide a restart button in the floating menu of the cloud desktop when you connect to the cloud desktop from a mobile client, including Android and iOS clients.
   * 
   * > This feature is only applicable to mobile clients of V7.4 or later.
   * 
   * @example
   * off
   */
  mobileRestart?: string;
  /**
   * @remarks
   * Specifies whether to enable the Windows security control for mobile clients.
   * 
   * @example
   * off
   */
  mobileSafeMenu?: string;
  /**
   * @remarks
   * Specifies whether to provide a shutdown button in the floating menu of the cloud desktop when you connect to the cloud desktop from a mobile client, including Android and iOS clients.
   * 
   * > This feature is only applicable to mobile clients of V7.4 or later.
   * 
   * @example
   * off
   */
  mobileShutdown?: string;
  /**
   * @remarks
   * Specifies whether to enable Wuying Keeper for mobile clients.
   * 
   * @example
   * off
   */
  mobileWuyingKeeper?: string;
  /**
   * @remarks
   * Specifies whether to enable Wuying Assistant for mobile clients.
   * 
   * @example
   * off
   */
  mobileWyAssistant?: string;
  /**
   * @remarks
   * Specifies whether to enable the model library feature. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  modelLibrary?: string;
  /**
   * @remarks
   * Specifies whether to enable the multi-screen display feature. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  multiScreen?: string;
  /**
   * @remarks
   * The policy name of the cloud desktop.
   * 
   * @example
   * testPolicyGroupName
   */
  name?: string;
  /**
   * @remarks
   * The network redirection feature.
   * 
   * > This feature is in targeted invitation-only beta testing and is not available to the public.
   * 
   * @example
   * off
   */
  netRedirect?: string;
  /**
   * @remarks
   * The list of network redirection policies.
   * 
   * > This feature is in targeted invitation-only beta testing and is not available to the public.
   */
  netRedirectRule?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsNetRedirectRule[];
  /**
   * @remarks
   * Specifies whether to enable the network printer feature. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  networkPrinter?: string;
  /**
   * @remarks
   * The number of associated organizations.
   * 
   * @example
   * 2
   */
  organizationCount?: string;
  /**
   * @remarks
   * The ID of the cloud desktop policy.
   * 
   * @example
   * pg-gx2x1dhsmthe9****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The type of the cloud desktop policy.
   * 
   * @example
   * SYSTEM
   */
  policyGroupType?: string;
  /**
   * @remarks
   * The status of the cloud desktop policy.
   * 
   * @example
   * AVAILABLE
   */
  policyStatus?: string;
  /**
   * @remarks
   * Specifies whether to enable the port proxy feature. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  portProxy?: string;
  /**
   * @remarks
   * The cloud desktop preemption policy.
   * 
   * > To ensure the user experience and data security of end users who are using the cloud desktop, mutual preemption among multiple users is not allowed. Therefore, this configuration defaults to `off` and cannot be modified.
   * 
   * @example
   * off
   */
  preemptLogin?: string;
  /**
   * @remarks
   * The usernames of the users who can preempt the cloud desktop.
   */
  preemptLoginUsers?: string[];
  /**
   * @remarks
   * The printer pop-up prompt. Valid values:
   * - default: Default value.
   * - off: Disabled.
   * - custom: Custom.
   * 
   * @example
   * off
   */
  printerAlert?: string;
  /**
   * @remarks
   * The content of the printer pop-up prompt.
   * 
   * @example
   * Print Content
   */
  printerAlertContent?: string;
  /**
   * @remarks
   * The title of the printer pop-up prompt.
   * 
   * @example
   * Print Title
   */
  printerAlertTitle?: string;
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
   * Specifies whether image quality enhancement is enabled for design and 3D common scenarios.
   * 
   * @example
   * off
   */
  qualityEnhancement?: string;
  /**
   * @remarks
   * Specifies whether to enable custom screen recording.
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
   * The duration of screen recording after an event is detected in screen recording audit. Unit: minutes. Valid values: 10 to 60.
   * 
   * @example
   * 10
   */
  recordEventDuration?: number;
  /**
   * @remarks
   * The screen recording event file extension.
   */
  recordEventFileExts?: string[];
  /**
   * @remarks
   * The list of absolute paths for file monitoring in screen recording audit.
   */
  recordEventFilePaths?: string[];
  /**
   * @remarks
   * The screen recording event level switch.
   */
  recordEventLevels?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsRecordEventLevels[];
  /**
   * @remarks
   * The list of absolute paths for registry monitoring in screen recording audit.
   */
  recordEventRegisters?: string[];
  /**
   * @remarks
   * Specifies whether screen recording is enabled.
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
   * The playback duration of screen recording files. Unit: minutes. Recorded files are automatically split and uploaded to the storage space based on the specified duration. When a file reaches 300 MB, it is overwritten on a rolling basis.
   * 
   * @example
   * 10
   */
  recordingDuration?: number;
  /**
   * @remarks
   * The end time of screen recording. Format: HH:MM:SS. This value is valid only when Recording is set to PERIOD.
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
   * The start time of screen recording. Format: HH:MM:SS. This value is valid only when Recording is set to PERIOD.
   * 
   * @example
   * 08:00:00
   */
  recordingStartTime?: string;
  /**
   * @remarks
   * The screen recording notification feature on the client.
   * 
   * @example
   * off
   */
  recordingUserNotify?: string;
  /**
   * @remarks
   * The screen recording notification content on the client. By default, you do not need to specify this parameter.
   * 
   * @example
   * Your cloud desktop is being recorded
   */
  recordingUserNotifyMessage?: string;
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
   * The cloud desktop reset configuration.
   * 
   * @example
   * off
   */
  resetDesktop?: string;
  /**
   * @remarks
   * The DPI value of the screen resolution.
   * 
   * @example
   * 96
   */
  resolutionDpi?: number;
  /**
   * @remarks
   * The height of the resolution. Unit: pixels. Valid values for cloud applications: 500 to 50000. Valid values for cloud desktops: 480 to 4096.
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
   * The width of the resolution. Unit: pixels. Valid values for cloud applications: 500 to 50000. Valid values for cloud desktops: 640 to 4096.
   * 
   * @example
   * 720
   */
  resolutionWidth?: number;
  /**
   * @remarks
   * The number of resource groups associated with the policy.
   * 
   * @example
   * 1
   */
  resourceGroupCount?: number;
  /**
   * @remarks
   * The region to which the cloud desktop policy belongs.
   * 
   * > If the policy is region-independent, this value is `center`.
   * 
   * @example
   * center
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The shortcut key switch for Security Center. Valid values:
   * - on: Enabled.
   * - off: Disabled.
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
   * Specify this parameter when `Scope` is set to `IP`. This parameter takes effect only when `Scope` is set to `IP`.
   */
  scopeValue?: string[];
  /**
   * @remarks
   * The screen display mode.
   * 
   * @example
   * auto
   */
  screenDisplayMode?: string;
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
   * Specifies whether to provide the status monitoring feature entry in the floating ball of the cloud desktop.
   * 
   * @example
   * on
   */
  statusMonitor?: string;
  /**
   * @remarks
   * The applicable scenario for the streaming mode.
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
   * The triple-screen switch. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  threeScreen?: string;
  /**
   * @remarks
   * The USB redirection setting.
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
  /**
   * @remarks
   * Specifies whether to display the usage duration on the floating ball. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  useTime?: string;
  /**
   * @remarks
   * The average video encoding bitrate. Valid values: 1000 to 50000.
   * 
   * @example
   * 1000
   */
  videoEncAvgKbps?: number;
  /**
   * @remarks
   * The maximum quantization parameter (QP) for video encoding, which corresponds to the lowest image quality. Valid values: 0 to 51.
   * 
   * @example
   * 20
   */
  videoEncMaxQP?: number;
  /**
   * @remarks
   * The minimum quantization parameter (QP) for video encoding, which corresponds to the highest image quality. Valid values: 0 to 51.
   * 
   * @example
   * 20
   */
  videoEncMinQP?: number;
  /**
   * @remarks
   * The peak video encoding bitrate. Valid values: 1000 to 50000.
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
   * The multimedia redirection setting.
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
   * The watermark setting.
   * 
   * @example
   * on
   */
  watermark?: string;
  /**
   * @remarks
   * The anti-camera capture feature for blind watermarks.
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
   * If the WatermarkType parameter is set to custom, you must specify the custom text by using the WatermarkCustomText parameter.
   * 
   * @example
   * custom-watermark
   */
  watermarkCustomText?: string;
  /**
   * @remarks
   * The tilt angle of the watermark. Valid values: -10 to -30.
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
   * > This parameter is not yet available.
   * 
   * @example
   * 5
   */
  watermarkRowAmount?: number;
  /**
   * @remarks
   * The security priority rule for blind watermarks.
   * 
   * @example
   * on
   */
  watermarkSecurity?: string;
  /**
   * @remarks
   * Specifies whether to enable the shadow effect for the watermark. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  watermarkShadow?: string;
  /**
   * @remarks
   * The display depth of the watermark.
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
   * The watermark type.
   * 
   * @example
   * EndUserId
   */
  watermarkType?: string;
  /**
   * @remarks
   * Specifies whether to enable Wuying Keeper.
   * 
   * @example
   * off
   */
  wuyingKeeper?: string;
  /**
   * @remarks
   * Specifies whether to display the Wuying AI Assistant entry point in the floating ball of the cloud computer.
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
      appScreenshotBuckets: 'AppScreenshotBuckets',
      authorizeAccessPolicyRules: 'AuthorizeAccessPolicyRules',
      authorizeSecurityPolicyRules: 'AuthorizeSecurityPolicyRules',
      autoReconnect: 'AutoReconnect',
      autoSaveAppScreenshot: 'AutoSaveAppScreenshot',
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
      fileTransferInSize: 'FileTransferInSize',
      fileTransferInUnit: 'FileTransferInUnit',
      fileTransferOutSize: 'FileTransferOutSize',
      fileTransferOutUnit: 'FileTransferOutUnit',
      fileTransferSizeLimit: 'FileTransferSizeLimit',
      fileTransferSpeed: 'FileTransferSpeed',
      fileTransferSpeedLocation: 'FileTransferSpeedLocation',
      folderSync: 'FolderSync',
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
      mcpService: 'McpService',
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
      printerAlert: 'PrinterAlert',
      printerAlertContent: 'PrinterAlertContent',
      printerAlertTitle: 'PrinterAlertTitle',
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
      threeScreen: 'ThreeScreen',
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
      appScreenshotBuckets: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsAppScreenshotBuckets },
      authorizeAccessPolicyRules: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules },
      authorizeSecurityPolicyRules: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules },
      autoReconnect: 'string',
      autoSaveAppScreenshot: 'string',
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
      fileTransferInSize: 'number',
      fileTransferInUnit: 'string',
      fileTransferOutSize: 'number',
      fileTransferOutUnit: 'string',
      fileTransferSizeLimit: 'string',
      fileTransferSpeed: 'string',
      fileTransferSpeedLocation: 'string',
      folderSync: 'string',
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
      mcpService: 'string',
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
      printerAlert: 'string',
      printerAlertContent: 'string',
      printerAlertTitle: 'string',
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
      threeScreen: 'string',
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
    if(Array.isArray(this.appScreenshotBuckets)) {
      $dara.Model.validateArray(this.appScreenshotBuckets);
    }
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
  /**
   * @remarks
   * The count.
   * 
   * @example
   * 40
   */
  count?: number;
  /**
   * @remarks
   * The details of the cloud computer policies.
   */
  describePolicyGroups?: DescribePolicyGroupsResponseBodyDescribePolicyGroups[];
  /**
   * @remarks
   * The token for the next query. An empty NextToken indicates that no more results are available.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paging query.
   * Default value: 20.
   * 
   * @example
   * 20
   */
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

