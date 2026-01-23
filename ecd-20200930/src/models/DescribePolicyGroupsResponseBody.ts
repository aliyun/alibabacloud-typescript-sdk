// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules extends $dara.Model {
  /**
   * @remarks
   * The CIDR block that is allowed to access the client. The value is an IPv4 CIDR block.
   * 
   * @example
   * 47.100.XX.XX/16
   */
  cidrIp?: string;
  /**
   * @remarks
   * The remarks on the CIDR block that is allowed to access the client.
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
   * The object to which the security group rule applies. The value is an IPv4 CIDR block.
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
   * Valid values:
   * 
   * *   tcp: Transmission Control Protocol (TCP)
   * *   udp: User Datagram Protocol (UDP)
   * *   all: all protocols
   * *   gre: Generic Routing Encapsulation (GRE)
   * *   icmp: Internet Control Message Protocol (ICMP) for IPv4
   * 
   * @example
   * tcp
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The authorization of the security group rule.
   * 
   * Valid values:
   * 
   * *   drop: denies all access requests.
   * *   accept: accepts all requests.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The port range of the security group rule.
   * 
   * @example
   * 22/22
   */
  portRange?: string;
  /**
   * @remarks
   * The priority of the security group rule. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * The direction of the security group rule.
   * 
   * Valid values:
   * 
   * *   outflow: outbound
   * *   inflow: inbound
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
   * Valid values:
   * 
   * *   html5: web client
   * *   android: Android client
   * *   windows: Windows client
   * *   ios: iOS client
   * *   macos: macOS client
   * 
   * @example
   * windows
   */
  clientType?: string;
  /**
   * @remarks
   * Indicates whether end users are allowed to use a specific type of the client to connect to cloud computers.
   * 
   * Valid values:
   * 
   * *   OFF
   * *   ON
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
   * Valid values:
   * 
   * *   printer
   * *   scanner
   * *   camera
   * *   adb: the Android Debug Bridge (ADB) device.
   * 
   * @example
   * camera
   */
  deviceType?: string;
  /**
   * @remarks
   * The redirection type. Valid values:
   * 
   * *   usbRedirect
   * *   deviceRedirect
   * *   off: direction disabled.
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
   * Valid values:
   * 
   * *   usbKey
   * *   other
   * *   graphicsTablet
   * *   printer
   * *   cardReader
   * *   scanner
   * *   storage
   * *   camera
   * *   adb
   * *   networkInterfaceCard: the NIC device.
   * 
   * @example
   * storage
   */
  deviceType?: string;
  /**
   * @remarks
   * The vendor ID (VID). For more information, see [Valid USB VIDs](https://www.usb.org/sites/default/files/vendor_ids032322.pdf_1.pdf).
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
   * Valid values:
   * 
   * *   deviceRedirect
   * *   usbRedirect
   * *   off: redirection disabled.
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
   * The rule description.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The destination domain name.
   * 
   * @example
   * *.com
   */
  domain?: string;
  /**
   * @remarks
   * Indicates whether the domain name resolution rule is allowed.
   * 
   * Valid values:
   * 
   * *   allow
   * *   block
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
   * The rule content.
   * 
   * @example
   * *.com
   */
  domain?: string;
  /**
   * @remarks
   * Indicates whether the rule is allowed.
   * 
   * Valid values:
   * 
   * *   allow
   * *   block
   * 
   * @example
   * allow
   */
  policy?: string;
  /**
   * @remarks
   * The rule type.
   * 
   * Valid values:
   * 
   * *   prc: process
   * *   domain: domain name
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
   * Test
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
   * The subclass of the device. This parameter is required when `usbRuleType` is set to 1. For more information, see [Defined Class Codes](https://www.usb.org/defined-class-codes).
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
   * Indicates whether USB redirection is allowed.
   * 
   * Valid values:
   * 
   * *   1: allowed
   * *   2: not allowed
   * 
   * @example
   * 1
   */
  usbRedirectType?: number;
  /**
   * @remarks
   * The type of the USB redirection rule.
   * 
   * Valid values:
   * 
   * *   1: by device class
   * *   2: by device vendor
   * 
   * @example
   * 1
   */
  usbRuleType?: number;
  /**
   * @remarks
   * The vendor ID (VID). For more information, see [Valid USB VIDs](https://www.usb.org/sites/default/files/vendor_ids032322.pdf_1.pdf).
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
   * Indicates whether end users are granted the administrator permissions.
   * 
   * >  This parameter is in invitational preview for specific users and not available to the public.
   * 
   * @example
   * deny
   */
  adminAccess?: string;
  /**
   * @remarks
   * Indicates whether the anti-screenshot feature is enabled.
   * 
   * Valid values:
   * 
   * *   off (default)
   * *   on
   * 
   * @example
   * off
   */
  appContentProtection?: string;
  /**
   * @remarks
   * The client IP address whitelist. End users can access cloud computers only from the IP addresses in the whitelist.
   */
  authorizeAccessPolicyRules?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules[];
  /**
   * @remarks
   * The security group rules.
   */
  authorizeSecurityPolicyRules?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules[];
  /**
   * @remarks
   * The automatic client connection recovery configurations.
   * 
   * @example
   * off
   */
  autoReconnect?: string;
  /**
   * @remarks
   * Indicates whether the webcam redirection feature is enabled.
   * 
   * Valid values:
   * 
   * *   off
   * *   on (default)
   * 
   * @example
   * on
   */
  cameraRedirect?: string;
  clientControlMenu?: string;
  clientCreateSnapshot?: string;
  /**
   * @remarks
   * The logon method control rules to limit the type of the Alibaba Cloud Workspace client used by end users to connect to cloud computers.
   */
  clientTypes?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsClientTypes[];
  /**
   * @remarks
   * The permissions on the clipboard.
   * 
   * Valid values:
   * 
   * *   read: specifies one-way transfer. You can copy files only from local devices to cloud computers.
   * *   readwrite: specifies two-way transfer. You can copy files between local devices and cloud computers.
   * *   write: specifies one-way transfer. You can only copy files from cloud computers to local devices.
   * *   off: disables both one-way and two-way transfer. Files cannot be copied between local devices and cloud computers.
   * 
   * @example
   * readwrite
   */
  clipboard?: string;
  /**
   * @remarks
   * Indicates whether the Color Enhancement switch is turned on in design and 3D scenarios.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  colorEnhancement?: string;
  cpdDriveClipboard?: string;
  /**
   * @remarks
   * The CPU underclocking duration. Valid values: 30 to 120. Unit: seconds.
   * 
   * @example
   * 30
   */
  cpuDownGradeDuration?: number;
  cpuOverload?: string;
  /**
   * @remarks
   * The process whitelist that is not restricted by the CPU usage limit.
   */
  cpuProcessors?: string[];
  /**
   * @remarks
   * Indicates whether the CPU spike protection switch is turned on.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * on
   */
  cpuProtectedMode?: string;
  /**
   * @remarks
   * The overall CPU usage. Valid values: 70 to 90. Unit: percentage (%).
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
   * The single-CPU usage. Valid values: 70 to 100. Unit: %.
   * 
   * @example
   * 70
   */
  cpuSingleRateLimit?: number;
  /**
   * @remarks
   * The number of cloud computers bound with this policy.
   * 
   * @example
   * 1
   */
  desktopCount?: number;
  /**
   * @remarks
   * The number of shared cloud computers bound with this policy.
   * 
   * @example
   * 1
   */
  desktopGroupCount?: number;
  deviceConnectHint?: string;
  /**
   * @remarks
   * The device redirection rules.
   */
  deviceRedirects?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsDeviceRedirects[];
  /**
   * @remarks
   * The custom peripheral rules.
   */
  deviceRules?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsDeviceRules[];
  diskOverload?: string;
  /**
   * @remarks
   * The display mode.
   * 
   * Valid values:
   * 
   * *   clientCustom: suitable for user-defined scenarios.
   * *   adminOffice: suitable for daily office scenarios.
   * *   adminDesign: suitable for 3D application scenarios.
   * *   adminCustom: administrator-customized scenarios
   * 
   * @example
   * adminCustom
   */
  displayMode?: string;
  /**
   * @remarks
   * Specifies whether to enable the access control for domain names. Domain names support wildcards (\\*). Separate multiple domain names with commas (,).
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  domainList?: string;
  /**
   * @remarks
   * The domain name resolution rules.
   */
  domainResolveRule?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsDomainResolveRule[];
  /**
   * @remarks
   * Indicates whether the switch for domain name resolution is turned on.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * on
   */
  domainResolveRuleType?: string;
  /**
   * @remarks
   * The number of cloud computers that are associated with the policy. The number of cloud computers that are associated only with custom policies is returned.
   * 
   * @example
   * 1
   */
  edsCount?: number;
  /**
   * @remarks
   * Indicates whether the Contact Administrator for Help switch is turned on.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * on
   */
  endUserApplyAdminCoordinate?: string;
  /**
   * @remarks
   * Indicates whether the User Stream Collaboration switch is turned on.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * on
   */
  endUserGroupCoordinate?: string;
  externalDrive?: string;
  fileMigrate?: string;
  /**
   * @remarks
   * Transfers files.
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
   * Indicates whether the Image Quality Control feature is enabled. If you have high requirements on the performance and user experience in scenarios such as professional design, we recommend that you enable this feature.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  gpuAcceleration?: string;
  hoverConfigMsg?: string;
  /**
   * @remarks
   * Specifies whether to allow web client access.
   * 
   * Valid values:
   * 
   * *   off (default)
   * *   on
   * 
   * @example
   * off
   */
  html5Access?: string;
  /**
   * @remarks
   * The file transfer feature on the web client.
   * 
   * Valid values:
   * 
   * *   all: Files can be uploaded and downloaded between local computers and the web client.
   * *   download: Files on the web client can be downloaded to local computers.
   * *   upload: Files on local computers can be uploaded to the web client.
   * *   off (default): Files cannot be transferred between the web client and local computers.
   * 
   * @example
   * off
   */
  html5FileTransfer?: string;
  /**
   * @remarks
   * The protocol for network communication.
   * 
   * Valid values:
   * 
   * *   TCP (default): TCP.
   * *   BOTH: TCP and UDP.
   * 
   * @example
   * BOTH
   */
  internetCommunicationProtocol?: string;
  internetPrinter?: string;
  /**
   * @remarks
   * The permissions on local disk mapping.
   * 
   * Valid values:
   * 
   * *   read: read-only. Local disk mapping is available on cloud computers. However, you can only read (copy) local files but cannot modify the files.
   * *   readwrite: read and write. Local disk mapping is available on cloud computers. You can read (copy) and write (modify) local files.
   * *   off (default): none.
   * 
   * @example
   * readwrite
   */
  localDrive?: string;
  /**
   * @remarks
   * The maximum retry period for reconnecting to cloud computers when the cloud computers are disconnected due to none-human reasons. Valid values: 30 to 7200. Unit: seconds.
   * 
   * @example
   * 120
   */
  maxReconnectTime?: number;
  /**
   * @remarks
   * The memory underclocking duration for a single process. Valid values: 30 to 120. Unit: seconds.
   * 
   * @example
   * 30
   */
  memoryDownGradeDuration?: number;
  memoryOverload?: string;
  /**
   * @remarks
   * The whitelist of processes that are not restricted by the memory usage limit.
   */
  memoryProcessors?: string[];
  /**
   * @remarks
   * Indicates whether the memory spike protection switch is turned on.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * on
   */
  memoryProtectedMode?: string;
  /**
   * @remarks
   * The overall memory usage. Valid values: 70 to 90. Unit: %.
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
   * The memory usage of a single process. Valid values: 30 to 60. Unit: %.
   * 
   * @example
   * 30
   */
  memorySingleRateLimit?: number;
  /**
   * @remarks
   * Specifies whether to display the restart button in the DesktopAssistant when the cloud computer is accessed from the Alibaba Cloud Workspace mobile clients (including the Android client and the iOS client).
   * 
   * > Mobile clients of V7.4 and higher versions required.
   * 
   * Valid values:
   * 
   * - off: not provided.
   * - on: provided.
   * 
   * @example
   * off
   */
  mobileRestart?: string;
  /**
   * @remarks
   * Indicates whether the Windows security control is enabled for mobile clients.
   * 
   * @example
   * off
   */
  mobileSafeMenu?: string;
  /**
   * @remarks
   * Specifies whether to display the shut down button in the DesktopAssistant when the cloud computer is accessed from the Alibaba Cloud Workspace mobile clients (including the Android client and the iOS client).
   * 
   * > Mobile clients of V7.4 and higher versions required.
   * 
   * Valid values:
   * 
   * - off: not provided.
   * - on: provided.
   * 
   * @example
   * off
   */
  mobileShutdown?: string;
  /**
   * @remarks
   * Indicates whether the Cloud Computer Manager is enabled for mobile clients.
   * 
   * @example
   * off
   */
  mobileWuyingKeeper?: string;
  /**
   * @remarks
   * Indicates whether the Xiaoying AI Assistant is enabled for mobile clients.
   * 
   * @example
   * off
   */
  mobileWyAssistant?: string;
  modelLibrary?: string;
  multiScreen?: string;
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
   * Indicates whether the network redirection feature is enabled.
   * 
   * >  This parameter is in invitational preview for specific users and not available to the public.
   * 
   * Valid values:
   * 
   * *   off (default)
   * *   on
   * 
   * @example
   * off
   */
  netRedirect?: string;
  /**
   * @remarks
   * The network redirection rule.
   * 
   * >  This parameter is in invitational preview for specific users and not available to the public.
   */
  netRedirectRule?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsNetRedirectRule[];
  /**
   * @remarks
   * The ID of the cloud computer policy.
   * 
   * @example
   * pg-gx2x1dhsmthe9****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The type of the cloud computer policy.
   * 
   * Valid values:
   * 
   * *   SYSTEM
   * *   CUSTOM
   * 
   * @example
   * SYSTEM
   */
  policyGroupType?: string;
  /**
   * @remarks
   * The status of the cloud computer policy.
   * 
   * Valid values:
   * 
   * *   AVAILABLE
   * *   CREATING
   * 
   * @example
   * AVAILABLE
   */
  policyStatus?: string;
  portProxy?: string;
  /**
   * @remarks
   * The cloud computer preemption feature.
   * 
   * >  To ensure user experience and data security, when a cloud computer is used by an end user, other end users cannot connect to the cloud computer. By default, this parameter is set to `off`, which cannot be modified.
   * 
   * Valid values:
   * 
   * *   off: Preemption is not allowed.
   * 
   * @example
   * off
   */
  preemptLogin?: string;
  /**
   * @remarks
   * The usernames that can preempt to connect to the cloud computer.
   */
  preemptLoginUsers?: string[];
  /**
   * @remarks
   * Indicates whether the printer redirection feature is enabled.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * on
   */
  printerRedirection?: string;
  /**
   * @remarks
   * Indicates whether the Image Quality Enhancement switch is turned on for design and 3D scenarios.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  qualityEnhancement?: string;
  /**
   * @remarks
   * Indicates whether the custom screen recording feature is enabled.
   * 
   * Valid values:
   * 
   * *   off (default)
   * *   on
   * 
   * @example
   * off
   */
  recordContent?: string;
  /**
   * @remarks
   * The period when the custom screen recording can be retained before expiration. Default value: 30 days.
   * 
   * @example
   * 30
   */
  recordContentExpires?: number;
  /**
   * @remarks
   * The recording duration since a target event is detected by the screen recording audit policy. Unit: Minute. Valid values: 10-60.
   * 
   * @example
   * 10
   */
  recordEventDuration?: number;
  /**
   * @remarks
   * The screen recording file suffix.
   */
  recordEventFileExts?: string[];
  /**
   * @remarks
   * The array of absolute paths of the monitored files in the screen recording audit policy.
   */
  recordEventFilePaths?: string[];
  /**
   * @remarks
   * Indicates whether the screen recording event severity is enabled.
   */
  recordEventLevels?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsRecordEventLevels[];
  /**
   * @remarks
   * The array of absolute paths of the monitored registry entries in the screen recording audit policy.
   */
  recordEventRegisters?: string[];
  /**
   * @remarks
   * Indicates whether the screen recording feature is enabled.
   * 
   * Valid values:
   * 
   * *   byaction_cmd_ft: enables the operation-triggered screen recording upon command execution and file transfer.
   * *   ALLTIME: enables the whole-process screen recording. That is, the recording starts when cloud computers are connected and ends when the cloud computers are disconnected.
   * *   PERIOD: enables the interval-based screen recording. You must specify an interval between the start time and end time of this type of recording.
   * *   byaction_commands: enables the operation-triggered screen recording upon command execution.
   * *   OFF: disables the screen recording feature.
   * *   byaction_file_transfer: enables the operation-triggered screen recording upon file transfer.
   * 
   * @example
   * OFF
   */
  recording?: string;
  /**
   * @remarks
   * Indicates whether audio files generated from cloud computers are recorded.
   * 
   * Valid values:
   * 
   * *   off (default): records only video files.
   * *   on: records video and audio files.
   * 
   * @example
   * on
   */
  recordingAudio?: string;
  /**
   * @remarks
   * The file length of the screen recording. Unit: minutes. Screen recording files are split based on the specified file length and uploaded to Object Storage Service (OSS) buckets. When a screen recording file reaches 300 MB in size, the system preferentially performs rolling update for the file.
   * 
   * Valid values:
   * 
   * *   10
   * *   20
   * *   30
   * *   60
   * 
   * @example
   * 10
   */
  recordingDuration?: number;
  /**
   * @remarks
   * The time when the screen recording ended. The value is in the HH:MM:SS format. The value takes effect only when Recording is set to PERIOD.
   * 
   * @example
   * 08:59:00
   */
  recordingEndTime?: string;
  /**
   * @remarks
   * The retention period of the screen recording file. Valid values: 1 to 180. Unit: days.
   * 
   * @example
   * 15
   */
  recordingExpires?: number;
  /**
   * @remarks
   * The frame rate of screen recording. Unit: fps.
   * 
   * Valid values:
   * 
   * *   2
   * *   5
   * *   10
   * *   15
   * 
   * @example
   * 5
   */
  recordingFps?: number;
  /**
   * @remarks
   * The time when the screen recording was started. The value is in the HH:MM:SS format. The value takes effect only when Recording is set to PERIOD.
   * 
   * @example
   * 08:00:00
   */
  recordingStartTime?: string;
  /**
   * @remarks
   * Indicates whether the screen recording notification feature is enabled after end users log on to the Alibaba Cloud Workspace client.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  recordingUserNotify?: string;
  /**
   * @remarks
   * The notification content of screen recording. By default, this parameter is left empty.
   * 
   * @example
   * Your desktop is being recorded
   */
  recordingUserNotifyMessage?: string;
  /**
   * @remarks
   * The permissions on keyboard and mouse control during remote assistance.
   * 
   * Valid values:
   * 
   * *   optionalControl: By default, you are not granted the permissions. You can apply for the permissions.
   * *   fullControl: You are granted the full permissions.
   * *   disableControl: You are not granted the permissions.
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
   * The number of resource groups bound with this policy.
   * 
   * @example
   * 1
   */
  resourceGroupCount?: number;
  /**
   * @remarks
   * The region of the cloud computer policy.
   * 
   * > The value of a region-less policy is `center`.
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
   * Valid values:
   * 
   * *   IP: The policy takes effect based on the IP address.
   * *   GLOBAL: The policy takes effect globally.
   * 
   * @example
   * GLOBAL
   */
  scope?: string;
  /**
   * @remarks
   * This parameter is required when the `Scope` parameter is set to `IP`.````
   */
  scopeValue?: string[];
  screenDisplayMode?: string;
  /**
   * @remarks
   * Indicates whether the Smooth Enhancement switch is turned on.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  smoothEnhancement?: string;
  /**
   * @remarks
   * Specifies whether to provide the Metrics function in the DesktopAssistant. Valid values:
   * 
   * - off: not provided.
   * - on: provided.
   * 
   * @example
   * on
   */
  statusMonitor?: string;
  /**
   * @remarks
   * The streaming mode.
   * 
   * Valid values:
   * 
   * *   intelligent: suitable for daily office scenarios (Intelligent Mode).
   * *   smooth: suitable for design and 3D application scenarios (Smooth Mode).
   * 
   * @example
   * smooth
   */
  streamingMode?: string;
  /**
   * @remarks
   * The destination frame rate. Valid values: 10 to 60. Unit: fps.
   * 
   * @example
   * 30
   */
  targetFps?: number;
  /**
   * @remarks
   * Indicates whether the USB redirection feature is enabled.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
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
   * The maximum quantizer parameter (QP) of video files. A larger QP value indicates worse video quality. Valid values: 0 to 51.
   * 
   * @example
   * 20
   */
  videoEncMaxQP?: number;
  /**
   * @remarks
   * The minimum quantizer parameter (QP) of video files. A smaller QP value indicates higher video quality. Valid values: 0 to 51.
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
   * The video encoding feature.
   * 
   * Valid values:
   * 
   * *   qualityFirst: The priority given to the image quality.
   * *   bandwidthFirst: The priority given to the bitrate.
   * 
   * @example
   * qualityFirst
   */
  videoEncPolicy?: string;
  /**
   * @remarks
   * Indicates whether the multimedia redirection feature is enabled.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  videoRedirect?: string;
  /**
   * @remarks
   * The image display quality.
   * 
   * Valid values:
   * 
   * *   high: high-definition (HD)
   * *   low: fluent
   * *   medium (default): adaptive
   * *   lossless: no quality loss
   * 
   * @example
   * medium
   */
  visualQuality?: string;
  /**
   * @remarks
   * The watermarking feature.
   * 
   * Valid values:
   * 
   * *   blind: Invisible watermarks are applied.
   * *   off: The watermarking feature is disabled.
   * *   on: Visible watermarks are applied.
   * 
   * @example
   * on
   */
  watermark?: string;
  /**
   * @remarks
   * Indicates whether the anti-screen photo feature is enabled for invisible watermarks.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  watermarkAntiCam?: string;
  /**
   * @remarks
   * The font color in red, green, and blue (RGB) of the watermark. Valid values: 0 to 16777215.
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
   * test
   */
  watermarkCustomText?: string;
  /**
   * @remarks
   * The slope of the watermark. Valid values: -10 to -30.
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
   * The watermark font style.
   * 
   * Valid values:
   * 
   * *   plain
   * *   bold
   * 
   * @example
   * plain
   */
  watermarkFontStyle?: string;
  /**
   * @remarks
   * The watermark enhancement feature.
   * 
   * Valid values:
   * 
   * *   high
   * *   low
   * *   medium
   * 
   * @example
   * medium
   */
  watermarkPower?: string;
  /**
   * @remarks
   * The number of watermark rows.
   * 
   * >  This parameter is not available for public use.
   * 
   * @example
   * 5
   */
  watermarkRowAmount?: number;
  /**
   * @remarks
   * Indicates whether the security priority feature is enabled for invisible watermarks.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * on
   */
  watermarkSecurity?: string;
  watermarkShadow?: string;
  /**
   * @remarks
   * The watermark transparency.
   * 
   * Valid values:
   * 
   * *   LIGHT
   * *   DARK
   * *   MIDDLE
   * 
   * @example
   * LIGHT
   */
  watermarkTransparency?: string;
  /**
   * @remarks
   * The watermark transparency. A greater value indicates that the watermark is less transparent. Valid values: 10 to 100.
   * 
   * @example
   * 10
   */
  watermarkTransparencyValue?: number;
  /**
   * @remarks
   * The watermark content.
   * 
   * Valid values:
   * 
   * *   EndUserId: the username.
   * *   Custom
   * *   DesktopIp: the IP address of the cloud computer.
   * *   ClientIp: the IP address of the Alibaba Cloud Workspace client.
   * *   HostName: the rightmost 15 digits of the cloud computer ID.
   * *   ClientTime: the current time displayed on the cloud computer.
   * 
   * @example
   * EndUserId
   */
  watermarkType?: string;
  wuyingKeeper?: string;
  /**
   * @remarks
   * Specifies whether to provide the AI Assistant function in the DesktopAssistant when the cloud computer is accessed from the Alibaba Cloud Workspace desktop clients (including the Windows client and the macOS client).
   * 
   * > Desktop clients of V7.7 and higher versions required.
   * 
   * Valid values:
   * 
   * - off: the AI Aisstant function is not provided.
   * - on: the AI Aisstant function is provided.
   * 
   * @example
   * on
   */
  wyAssistant?: string;
  static names(): { [key: string]: string } {
    return {
      academicProxy: 'AcademicProxy',
      adminAccess: 'AdminAccess',
      appContentProtection: 'AppContentProtection',
      authorizeAccessPolicyRules: 'AuthorizeAccessPolicyRules',
      authorizeSecurityPolicyRules: 'AuthorizeSecurityPolicyRules',
      autoReconnect: 'AutoReconnect',
      cameraRedirect: 'CameraRedirect',
      clientControlMenu: 'ClientControlMenu',
      clientCreateSnapshot: 'ClientCreateSnapshot',
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
      endUserGroupCoordinate: 'EndUserGroupCoordinate',
      externalDrive: 'ExternalDrive',
      fileMigrate: 'FileMigrate',
      fileTransfer: 'FileTransfer',
      fileTransferAddress: 'FileTransferAddress',
      fileTransferSpeed: 'FileTransferSpeed',
      fileTransferSpeedLocation: 'FileTransferSpeedLocation',
      gpuAcceleration: 'GpuAcceleration',
      hoverConfigMsg: 'HoverConfigMsg',
      html5Access: 'Html5Access',
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
      appContentProtection: 'string',
      authorizeAccessPolicyRules: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules },
      authorizeSecurityPolicyRules: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules },
      autoReconnect: 'string',
      cameraRedirect: 'string',
      clientControlMenu: 'string',
      clientCreateSnapshot: 'string',
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
      endUserGroupCoordinate: 'string',
      externalDrive: 'string',
      fileMigrate: 'string',
      fileTransfer: 'string',
      fileTransferAddress: 'string',
      fileTransferSpeed: 'string',
      fileTransferSpeedLocation: 'string',
      gpuAcceleration: 'string',
      hoverConfigMsg: 'string',
      html5Access: 'string',
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
      netRedirectRule: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsNetRedirectRule },
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
   * The details of the cloud computer policies.
   */
  describePolicyGroups?: DescribePolicyGroupsResponseBodyDescribePolicyGroups[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
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

