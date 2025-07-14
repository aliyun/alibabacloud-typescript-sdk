// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCenterPolicyRequestAuthorizeAccessPolicyRule extends $dara.Model {
  /**
   * @remarks
   * The client CIDR block from which end users can connect to cloud computers. Specify an IPv4 CIDR block.
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

export class CreateCenterPolicyRequestAuthorizeSecurityPolicyRule extends $dara.Model {
  /**
   * @remarks
   * The object of the security group rule. Specify an IPv4 CIDR block.
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
   * Valid values:
   * 
   * *   TCP: the Transmission Control Protocol (TCP) protocol.
   * *   UDP: the User Datagram Protocol (UDP) protocol.
   * *   ALL: any type of protocol.
   * *   GRE: the Generic Routing Encapsulation (GRE) protocol.
   * *   ICMP: the Internet Control Message Protocol (ICMP) for (IPv4).
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The authorization policy of the security group rule.
   * 
   * Valid values:
   * 
   * *   drop: denies all access requests. If no \\"\\"access denied\\"\\" messages are returned, the requests either timed out or failed.
   * *   accept (default): accepts all requests.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The port range of the security group rule. The value range of this parameter varies based on the value of IpProtocol.
   * 
   * *   If IpProtocol is set to TCP or UDP, the port range is 1 to 65535. Separate the start port number and the end port number with a forward slash (/). Example: 1/200.
   * *   If IpProtocol is set to ICMP, set the value to -1/-1.
   * *   If IpProtocol is set to GRE, set the value to -1/-1.
   * *   If IpProtocol is set to ALL, set the value to -1/-1.
   * 
   * For more information about the common ports, see [Common ports](https://help.aliyun.com/document_detail/40724.html).
   * 
   * @example
   * 22/22
   */
  portRange?: string;
  /**
   * @remarks
   * The priority of the security group rule. A smaller value specifies a higher priority.\\
   * Valid values: 1 to 60.\\
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
   * Valid values:
   * 
   * *   outflow: outbound.
   * *   inflow: inbound.
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
   * The type of the Alibaba Cloud Workspace client that end users can use to connect to cloud computers.
   * 
   * Valid values:
   * 
   * *   html5: the web client.
   * *   android: the Android client.
   * *   ios: the iOS client.
   * *   windows: the Windows client.
   * *   macos: the macOS client.
   * 
   * @example
   * windows
   */
  clientType?: string;
  /**
   * @remarks
   * Specifies whether end users can use the specified type of Alibaba Cloud Workspace client to connect to cloud computers.
   * 
   * >  If you don\\"t specify `ClientType`, any client can be used to connect to cloud computers.
   * 
   * Valid values:
   * 
   * *   off: End users cannot use the specified type of Alibaba Cloud Workspace client to connect to cloud computers.
   * *   on: End users can use the specified type of Alibaba Cloud Workspace client to connect to cloud computers.
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

export class CreateCenterPolicyRequestDeviceRedirects extends $dara.Model {
  /**
   * @remarks
   * The peripheral type.
   * 
   * Valid values:
   * 
   * *   printer
   * *   scanner
   * *   serialport
   * *   camera
   * *   adb
   * 
   * @example
   * camera
   */
  deviceType?: string;
  /**
   * @remarks
   * The redirection type.
   * 
   * Valid values:
   * 
   * *   deviceRedirect: enables device redirection.
   * *   usbRedirect: enables USB redirection.
   * *   off: disables any type of redirection.
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
   * *   usbKey: UKeys.
   * *   other: other peripheral devices.
   * *   graphicsTablet: graphics tablets.
   * *   cardReader: card readers.
   * *   printer: printers.
   * *   scanner: scanners.
   * *   storage: storage devices.
   * *   camera: cameras.
   * *   networkInterfaceCard: NIC devices.
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
   * *   deviceRedirect: device redirection.
   * *   usbRedirect: USB redirection.
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

export class CreateCenterPolicyRequestDomainResolveRule extends $dara.Model {
  /**
   * @remarks
   * The policy description.
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
   * Specifies whether to allow the domain resolution policy to take effect.
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

export class CreateCenterPolicyRequestNetRedirectRule extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * *.taobao.com
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
   * Valid values:
   * 
   * *   prc: process.
   * *   domain: domain name.
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

export class CreateCenterPolicyRequestUsbSupplyRedirectRule extends $dara.Model {
  /**
   * @remarks
   * The rule description.
   */
  description?: string;
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
   * Specifies whether to allow USB redirection.
   * 
   * Valid values:
   * 
   * *   1: allows USB redirection.
   * *   2: forbids USB redirection.
   * 
   * @example
   * 1
   */
  usbRedirectType?: string;
  /**
   * @remarks
   * The type of the USB redirection rule.
   * 
   * Valid values:
   * 
   * *   2: enables USB redirection based on products.
   * 
   * @example
   * 2
   */
  usbRuleType?: string;
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
  /**
   * @remarks
   * Specifies whether to grant the admin permissions to end users.
   * 
   * >  This parameter is in private preview and only available to specific users.
   * 
   * Valid values:
   * 
   * *   allow: forcibly grants admin permissions.
   * *   deny: forcibly rejects granting admin permissions.
   * *   inherited: inherits the admin permissions from the user dimension.
   * 
   * @example
   * deny
   */
  adminAccess?: string;
  /**
   * @remarks
   * The anti-screenshot policy.
   * 
   * Valid values:
   * 
   * *   off (default): disables anti-screenshot.
   * *   on: enables anti-screenshot.
   * 
   * @example
   * off
   */
  appContentProtection?: string;
  /**
   * @remarks
   * The client IP address whitelists that you want to add. Once an IP address whitelist is configured, end users can only access cloud computers from the IP addresses listed in it.
   */
  authorizeAccessPolicyRule?: CreateCenterPolicyRequestAuthorizeAccessPolicyRule[];
  /**
   * @remarks
   * The security group rule.
   */
  authorizeSecurityPolicyRule?: CreateCenterPolicyRequestAuthorizeSecurityPolicyRule[];
  /**
   * @remarks
   * The business type.
   * 
   * Valid values:
   * 
   * *   1: public cloud
   * *   8: commercial edition.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  businessType?: number;
  /**
   * @remarks
   * The on-premises camera redirection policy. This parameter only applies if DeviceRedirects does not include an on-premises camera redirection policy.
   * 
   * Valid values:
   * 
   * *   deviceRedirect: enables device redirection.
   * *   off: disables device redirection.
   * 
   * @example
   * off
   */
  cameraRedirect?: string;
  clientControlMenu?: string;
  /**
   * @remarks
   * The types of Alibaba Cloud Workspace clients that end users can use to connect to cloud computers.
   */
  clientType?: CreateCenterPolicyRequestClientType[];
  /**
   * @remarks
   * The read/write permissions on the clipboard.
   * 
   * Valid values:
   * 
   * *   read: specifies one-way transfer You can copy files only from on-premises devices to cloud computers.
   * *   readwrite: specifies two-way transfer. You can copy files between on-premises devices and cloud computers.
   * *   write: specifies one-way transfer. You can only copy files from cloud computers to on-premises devices.
   * *   off (default): disables all transfers, both one-way and two-way. Files cannot be copied directly between on-premises devices and cloud computers.
   * 
   * @example
   * off
   */
  clipboard?: string;
  /**
   * @remarks
   * Specifies whether to enable color enhancement for design and 3D applications.
   * 
   * Valid values:
   * 
   * *   off: doesn\\"t enable color enhancement for design and 3D applications.
   * *   on: enables color enhancement for design and 3D applications.
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
  /**
   * @remarks
   * The CPU processors.
   */
  cpuProcessors?: string[];
  /**
   * @remarks
   * The CPU spike protection policy.
   * 
   * Valid values:
   * 
   * *   off: disables CPU spike protection.
   * *   on: enables CPU spike protection.
   * 
   * @example
   * off
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
   * 60
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
   * Specifies whether to display the peripheral connection prompt.
   * 
   * @example
   * off
   */
  deviceConnectHint?: string;
  /**
   * @remarks
   * The device redirection rules.
   */
  deviceRedirects?: CreateCenterPolicyRequestDeviceRedirects[];
  /**
   * @remarks
   * The custom peripheral rules.
   */
  deviceRules?: CreateCenterPolicyRequestDeviceRules[];
  /**
   * @remarks
   * Specifies whether to retain the session upon disconnection.
   * 
   * >  This parameter applies only to cloud application policies.
   * 
   * Valid values:
   * 
   * *   customTime: retains the session for a specified time period.
   * *   persistent: retains the session permanently.
   * 
   * @example
   * customTime
   */
  disconnectKeepSession?: string;
  /**
   * @remarks
   * The retention period of the session after disconnection. Valid values: 30 to 7200. Unit: seconds.
   * 
   * >  This parameter applies only to cloud application policies.
   * 
   * @example
   * 30
   */
  disconnectKeepSessionTime?: number;
  /**
   * @remarks
   * The display mode.
   * 
   * Valid values:
   * 
   * *   clientCustom: suitable for user-defined scenarios.
   * *   adminOffice: suitable for daily office scenarios.
   * *   adminDesign: suitable for design and 3D application scenarios.
   * *   adminCustom: suitable for admin-customized scenarios.
   * 
   * @example
   * clientCustom
   */
  displayMode?: string;
  /**
   * @remarks
   * The domain resolution policies.
   */
  domainResolveRule?: CreateCenterPolicyRequestDomainResolveRule[];
  /**
   * @remarks
   * Specifies whether to enforce the domain resolution policy.
   * 
   * Valid values:
   * 
   * *   off: disables the domain resolution policy.
   * *   on: enables the domain resolution policy.
   * 
   * @example
   * off
   */
  domainResolveRuleType?: string;
  /**
   * @remarks
   * Specifies whether to enforce the peak bandwidth limit for sessions.
   * 
   * Valid values:
   * 
   * *   off: doesn\\"t enforce the peak bandwidth limit for sessions.
   * *   on: enforces the peak bandwidth limit for sessions.
   * 
   * @example
   * off
   */
  enableSessionRateLimiting?: string;
  /**
   * @remarks
   * Specifies whether to enable end users to request administrator help.
   * 
   * Valid values:
   * 
   * *   off: disables end users to request administrator help.
   * *   on: enables end users to request administrator help.
   * 
   * @example
   * off
   */
  endUserApplyAdminCoordinate?: string;
  /**
   * @remarks
   * Specifies whether to allow end users in the same office network to share cloud computers.
   * 
   * Valid values:
   * 
   * *   off: doesn\\"t allow end users in the same office network to share cloud computers.
   * *   on: allows end users in the same office network to share cloud computers.
   * 
   * @example
   * off
   */
  endUserGroupCoordinate?: string;
  /**
   * @remarks
   * Specifies whether to enable file transfer.
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
   * Specifies whether to enable image quality control. This feature is highly recommended for professional design scenarios where computer performance and user experience are critical.
   * 
   * Valid values:
   * 
   * *   off: doesn\\"t enable image quality control.
   * *   on: enables image quality control.
   * 
   * @example
   * off
   */
  gpuAcceleration?: string;
  /**
   * @remarks
   * The file transfer feature on the web client.
   * 
   * Valid values:
   * 
   * *   all: File upload and download are supported.
   * *   download: Only file download is supported.
   * *   upload: Only file upload is supported.
   * *   off (default): File upload and download are not supported.
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
   * *   tcp: TCP is used when UDP/AST is restricted.
   * *   rtc: AST is used for high-frequency audio and video streaming.
   * *   auto: UTO is used to enable automatic switch between AST and UDP modes based on desktop content.
   * *   both: UDP is used for office and HD graphic design use.
   * 
   * @example
   * both
   */
  internetCommunicationProtocol?: string;
  internetPrinter?: string;
  /**
   * @remarks
   * The read/write permissions on the on-premises drive.
   * 
   * Valid values:
   * 
   * *   read: read-only. Cloud computers support on-premises disk mapping, but only for reading (copying) files—not modifying them.
   * *   readwrite: read and write. Cloud computers support on-premises disk mapping, allowing you to read (copy) and write (modify) on-premises files.
   * *   off (default): none. Cloud computers don\\"t support on-premises disk mapping.
   * 
   * @example
   * off
   */
  localDrive?: string;
  /**
   * @remarks
   * The maximum duration to retry reconnecting to cloud computers after an unexpected disconnection (non-human causes). Valid values: 30 to 7200. Unit: seconds.
   * 
   * @example
   * 120
   */
  maxReconnectTime?: number;
  /**
   * @remarks
   * The memory underclocking duration per process. Valid values: 30 to 120. Unit: seconds.
   * 
   * @example
   * 40
   */
  memoryDownGradeDuration?: number;
  /**
   * @remarks
   * The memory processors.
   */
  memoryProcessors?: string[];
  /**
   * @remarks
   * The memory spike protection policy.
   * 
   * Valid values:
   * 
   * *   off: disables memory spike protection.
   * *   on: enables memory spike protection.
   * 
   * @example
   * off
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
   * 40
   */
  memorySampleDuration?: number;
  /**
   * @remarks
   * The memory usage per process. Valid values: 30 to 60. Unit: %.
   * 
   * @example
   * 40
   */
  memorySingleRateLimit?: number;
  /**
   * @remarks
   * Specifies whether to display the Restart button in the DesktopAssistant menu when end users connect to cloud computers from Android clients.
   * 
   * >  This feature applies to only mobile clients of version 7.4.0 or later.
   * 
   * Valid values:
   * 
   * *   off: doesn\\"t display the Restart button in the DesktopAssistant menu.
   * *   on: displays the Restart button in the DesktopAssistant menu.
   * 
   * @example
   * off
   */
  mobileRestart?: string;
  /**
   * @remarks
   * Specifies whether to display the Stop button in the DesktopAssistant menu when end users connect to cloud computers from Android clients.
   * 
   * >  This feature applies to only mobile clients of version 7.4.0 or later.
   * 
   * Valid values:
   * 
   * *   off: doesn\\"t display the Stop button in the DesktopAssistant menu.
   * *   on: displays the Stop button in the DesktopAssistant menu.
   * 
   * @example
   * off
   */
  mobileShutdown?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * This parameter is required.
   * 
   * @example
   * testPolicyGroupName
   */
  name?: string;
  /**
   * @remarks
   * The network redirection policy.
   * 
   * >  This parameter is in private preview and only available to specific users.
   * 
   * Valid values:
   * 
   * *   all: enables network redirection globally.
   * *   off (default): disables network redirection.
   * *   on: enables the whitelist mode.
   * 
   * @example
   * off
   */
  netRedirect?: string;
  /**
   * @remarks
   * The network redirection policy.
   * 
   * >  This parameter is in private preview and only available to specific users.
   */
  netRedirectRule?: CreateCenterPolicyRequestNetRedirectRule[];
  /**
   * @remarks
   * Specifies whether to enforce a disconnection upon inactivity.
   * 
   * >  This parameter applies only to cloud application policies.
   * 
   * Valid values:
   * 
   * *   off: doesn\\"t enforce a disconnection upon inactivity.
   * *   on: enforces a disconnection upon inactivity.
   * 
   * @example
   * off
   */
  noOperationDisconnect?: string;
  /**
   * @remarks
   * The duration of disconnection after inactivity. Valid values: 120 to 7200. Unit: seconds.
   * 
   * >  This parameter applies only to cloud application policies.
   * 
   * @example
   * 120
   */
  noOperationDisconnectTime?: number;
  /**
   * @remarks
   * The printer redirection policy. This parameter only applies if DeviceRedirects does not include a printer redirection policy.
   * 
   * Valid values:
   * 
   * *   deviceRedirect (default):enables device redirection.
   * *   usbRedirect: enables USB redirection.
   * *   off: disables any type of redirection.
   * 
   * @example
   * off
   */
  printerRedirect?: string;
  /**
   * @remarks
   * Specifies whether to enable image quality enhancement for design and 3D applications.
   * 
   * Valid values:
   * 
   * *   off: doesn\\"t enable image quality enhancement for design and 3D applications.
   * *   on: enables image quality enhancement for design and 3D applications.
   * 
   * @example
   * off
   */
  qualityEnhancement?: string;
  /**
   * @remarks
   * The duration of screen recording after the specified event is detected. Unit: minutes. Valid values: 10 to 60.
   * 
   * @example
   * 10
   */
  recordEventDuration?: number;
  /**
   * @remarks
   * The absolute paths to screen recording files.
   */
  recordEventFilePaths?: string[];
  /**
   * @remarks
   * The absolute paths to screen recording registries.
   */
  recordEventRegisters?: string[];
  /**
   * @remarks
   * The events that trigger screen recording.
   */
  recordEvents?: string[];
  /**
   * @remarks
   * The screen recording policy.
   * 
   * Valid values:
   * 
   * *   period: Screen recording occurs at set intervals.
   * *   session: Screen recording is limited to sessions only.
   * *   off: Screen recording is disabled.
   * *   alltime: Screen recording is always enabled.
   * 
   * @example
   * off
   */
  recording?: string;
  /**
   * @remarks
   * Specifies whether to record audio files generated on cloud computers.
   * 
   * Valid values:
   * 
   * *   off: doesn\\"t record audio files generated on cloud computers.
   * *   on: records audio files generated on cloud computers.
   * 
   * @example
   * on
   */
  recordingAudio?: string;
  /**
   * @remarks
   * The frame rate of screen recording. Screen recordings are split based on the specified duration and uploaded to Object Storage Service (OSS) buckets. If a file reaches 300 MB, the system prioritizes rolling updates for that file. Valid values: 10 to 60
   * 
   * @example
   * 10
   */
  recordingDuration?: number;
  /**
   * @remarks
   * The screen recording\\"s end time in HH:MM:SS format. The value is meaningful only if `Recording` is set to `PERIOD`.
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
   * @example
   * 2
   */
  recordingFps?: string;
  /**
   * @remarks
   * The screen recording\\"s start time in HH:MM:SS format. The value is meaningful only if `Recording` is set to `PERIOD`.
   * 
   * @example
   * 08:00:00
   */
  recordingStartTime?: string;
  /**
   * @remarks
   * Specifies whether to notify end users when screen recording is enabled.
   * 
   * Valid values:
   * 
   * *   off: doesn\\"t notify end users when screen recording is enabled.
   * *   on: notifies end users when screen recording is enabled.
   * 
   * @example
   * off
   */
  recordingUserNotify?: string;
  /**
   * @remarks
   * The notification sent to end users when screen recording is enabled.
   */
  recordingUserNotifyMessage?: string;
  /**
   * @remarks
   * The region ID. Set the value to cn-shanghai.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The keyboard and mouse control permissions during remote assistance.
   * 
   * Valid values:
   * 
   * *   optionalControl: By default, keyboard and mouse control is disabled during remote assistance. You can request permissions as needed.
   * *   fullControl: Keyboard and mouse control is enabled during remote assistance.
   * *   disableControl: Keyboard and mouse control is disabled during remote assistance.
   * 
   * @example
   * fullControl
   */
  remoteCoordinate?: string;
  /**
   * @remarks
   * The computer reset setting.
   * 
   * @example
   * off
   */
  resetDesktop?: string;
  /**
   * @remarks
   * The resolution height. Unit: pixel. Valid values for cloud applications: 500 to 50000. Valid values for cloud computers: 480 to 4096.
   * 
   * @example
   * 1280
   */
  resolutionHeight?: number;
  /**
   * @remarks
   * The resolution type.
   * 
   * Valid values:
   * 
   * *   adaptive: adaptive resolution.
   * *   customer: fixed resolution.
   * 
   * @example
   * adaptive
   */
  resolutionModel?: string;
  /**
   * @remarks
   * The resolution width. Unit: pixel. Valid values for cloud applications: 500 to 50000. Valid values for cloud computers: 480 to 4096.
   * 
   * @example
   * 720
   */
  resolutionWidth?: number;
  /**
   * @remarks
   * The resource type.
   * 
   * Valid values:
   * 
   * *   app: cloud applications.
   * *   desktop: cloud computers.
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
   * The effective scope of the policy.
   * 
   * Valid values:
   * 
   * *   IP: The policy applies to specific IP addresses.
   * *   GLOBAL: The policy applies globally.
   * 
   * @example
   * GLOBAL
   */
  scope?: string;
  /**
   * @remarks
   * The effective scopes. This parameter is required when `Scope` is set to `IP`. If `Scope` is set to `IP`, this parameter doesn\\"t take effect.
   */
  scopeValue?: string[];
  screenDisplayMode?: string;
  /**
   * @remarks
   * The bandwidth peak allowed for sessions. Unit: Kbit/s. Valid values: 2000 to 100000.
   * 
   * @example
   * 2000
   */
  sessionMaxRateKbps?: number;
  /**
   * @remarks
   * Specifies whether to enable smoothness enhancement for daily office use.
   * 
   * Valid values:
   * 
   * *   off: doesn\\"t enable smoothness enhancement for daily office use.
   * *   on: enables smoothness enhancement for daily office use.
   * 
   * @example
   * off
   */
  smoothEnhancement?: string;
  /**
   * @remarks
   * Specifies whether to display the metric status entry in the DesktopAssistant menu.
   * 
   * Valid values:
   * 
   * *   off: doesn\\"t display the metric status entry in the DesktopAssistant menu.
   * *   on: displays the metric status entry in the DesktopAssistant menu.
   * 
   * @example
   * off
   */
  statusMonitor?: string;
  /**
   * @remarks
   * The streaming mode.
   * 
   * Valid values:
   * 
   * *   intelligent
   * *   smooth
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
   * Specifies whether to display the application taskbar.
   * 
   * >  This parameter applies only to cloud application policies.
   * 
   * Valid values:
   * 
   * *   off: doesn\\"t display the application taskbar.
   * *   on: displays the application taskbar.
   * 
   * @example
   * off
   */
  taskbar?: string;
  /**
   * @remarks
   * Specifies whether to enable USB redirection.
   * 
   * Valid values:
   * 
   * *   off (default): doesn\\"t enable USB redirection.
   * *   on: enables USB redirection.
   * 
   * @example
   * off
   */
  usbRedirect?: string;
  /**
   * @remarks
   * The USB redirection rules.
   */
  usbSupplyRedirectRule?: CreateCenterPolicyRequestUsbSupplyRedirectRule[];
  useTime?: string;
  /**
   * @remarks
   * The average bitrate for video encoding. Unit: Kbit/s. Valid values: 1000 to 50000.
   * 
   * @example
   * 2000
   */
  videoEncAvgKbps?: number;
  /**
   * @remarks
   * The maximum QP for video files. Higher QP values result in lower video quality. Valid values: 0 to 51.
   * 
   * @example
   * 30
   */
  videoEncMaxQP?: number;
  /**
   * @remarks
   * The minimum quantizer parameter (QP) for video files. A lower QP means better video quality. Valid values: 0 to 51.
   * 
   * @example
   * 30
   */
  videoEncMinQP?: number;
  /**
   * @remarks
   * The peak bitrate for video encoding. Unit: Kbit/s. Valid values: 1000 to 50000.
   * 
   * @example
   * 2000
   */
  videoEncPeakKbps?: number;
  /**
   * @remarks
   * The video encoding policy.
   * 
   * Valid values:
   * 
   * *   qualityFirst: prioritizes image quality.
   * *   bandwidthFirst: prioritizes bandwidth.
   * 
   * @example
   * qualityFirst
   */
  videoEncPolicy?: string;
  /**
   * @remarks
   * The multimedia redirection policy.
   * 
   * Valid values:
   * 
   * *   off: disables multimedia redirection.
   * *   on: enables multimedia redirection.
   * 
   * @example
   * on
   */
  videoRedirect?: string;
  /**
   * @remarks
   * The image display quality.
   * 
   * Valid values:
   * 
   * *   high: high-definition (HD).
   * *   low: smoothness.
   * *   lossless: no quality loss.
   * *   medium (default): scenario-specific adaptation.
   * 
   * @example
   * low
   */
  visualQuality?: string;
  /**
   * @remarks
   * The watermark policy.
   * 
   * Valid values:
   * 
   * *   blind: displays invisible watermarks.
   * *   off (default): displays no watermark.
   * *   on: displays visible watermarks.
   * 
   * @example
   * off
   */
  watermark?: string;
  /**
   * @remarks
   * Specifies whether to enable anti-screen capture for invisible watermarks.
   * 
   * Valid values:
   * 
   * *   off: disables anti-screen capture for invisible watermarks.
   * *   on: enables anti-screen capture for invisible watermarks.
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
   * The number of watermark columns. Valid values: 3 to 10.
   * 
   * @example
   * 3
   */
  watermarkColumnAmount?: number;
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
   * The watermark rotation. Valid values: -10 to -30.
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
   * The enhancement level for invisible watermarks.
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
   * The number of watermark rows. Valid values: 3 to 10.
   * 
   * @example
   * 3
   */
  watermarkRowAmount?: number;
  /**
   * @remarks
   * Specifies whether to enable security priority for invisible watermarks.
   * 
   * Valid values:
   * 
   * *   off: disables security priority for invisible watermarks.
   * *   on: enables security priority for invisible watermarks.
   * 
   * @example
   * on
   */
  watermarkSecurity?: string;
  /**
   * @remarks
   * The watermark opacity. A higher value makes the watermark more opaque. Valid values: 10 to 100.
   * 
   * @example
   * 10
   */
  watermarkTransparencyValue?: number;
  /**
   * @remarks
   * The watermark type. You can specify up to three types. Separate multiple values with commas (,).
   * 
   * >  If you provide `custom` as the value for this parameter, you must configure `WatermarkCustomText` to specify custom text.
   * 
   * Valid values:
   * 
   * *   EndUserId: the username.
   * *   Custom: the custom text.
   * *   DesktopIp: the IP address of the cloud computer.
   * *   ClientIp: the IP address of the client.
   * *   HostName: the rightmost 15 digits of the cloud computer ID.
   * *   ClientTime: the current time displayed on the cloud computer.
   * 
   * @example
   * EndUserId,HostName,ClientTime
   */
  watermarkType?: string;
  /**
   * @remarks
   * Specifies whether to enable Cloud Computer Manager.
   * 
   * @example
   * off
   */
  wuyingKeeper?: string;
  /**
   * @remarks
   * Specifies whether to display the Xiaoying AI Assistant option in the DesktopAssistant menu when end users connect to cloud computers via desktop clients (Windows and macOS).
   * 
   * >  This feature applies to only desktop clients of version 7.7.0 or later.
   * 
   * Valid values:
   * 
   * *   off: doesn\\"t display the Xiaoying AI Assistant option in the DesktopAssistant menu.
   * *   on: displays the Xiaoying AI Assistant option in the DesktopAssistant menu.
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
      businessType: 'BusinessType',
      cameraRedirect: 'CameraRedirect',
      clientControlMenu: 'ClientControlMenu',
      clientType: 'ClientType',
      clipboard: 'Clipboard',
      colorEnhancement: 'ColorEnhancement',
      cpdDriveClipboard: 'CpdDriveClipboard',
      cpuDownGradeDuration: 'CpuDownGradeDuration',
      cpuProcessors: 'CpuProcessors',
      cpuProtectedMode: 'CpuProtectedMode',
      cpuRateLimit: 'CpuRateLimit',
      cpuSampleDuration: 'CpuSampleDuration',
      cpuSingleRateLimit: 'CpuSingleRateLimit',
      deviceConnectHint: 'DeviceConnectHint',
      deviceRedirects: 'DeviceRedirects',
      deviceRules: 'DeviceRules',
      disconnectKeepSession: 'DisconnectKeepSession',
      disconnectKeepSessionTime: 'DisconnectKeepSessionTime',
      displayMode: 'DisplayMode',
      domainResolveRule: 'DomainResolveRule',
      domainResolveRuleType: 'DomainResolveRuleType',
      enableSessionRateLimiting: 'EnableSessionRateLimiting',
      endUserApplyAdminCoordinate: 'EndUserApplyAdminCoordinate',
      endUserGroupCoordinate: 'EndUserGroupCoordinate',
      fileMigrate: 'FileMigrate',
      fileTransferAddress: 'FileTransferAddress',
      fileTransferSpeed: 'FileTransferSpeed',
      fileTransferSpeedLocation: 'FileTransferSpeedLocation',
      gpuAcceleration: 'GpuAcceleration',
      html5FileTransfer: 'Html5FileTransfer',
      internetCommunicationProtocol: 'InternetCommunicationProtocol',
      internetPrinter: 'InternetPrinter',
      localDrive: 'LocalDrive',
      maxReconnectTime: 'MaxReconnectTime',
      memoryDownGradeDuration: 'MemoryDownGradeDuration',
      memoryProcessors: 'MemoryProcessors',
      memoryProtectedMode: 'MemoryProtectedMode',
      memoryRateLimit: 'MemoryRateLimit',
      memorySampleDuration: 'MemorySampleDuration',
      memorySingleRateLimit: 'MemorySingleRateLimit',
      mobileRestart: 'MobileRestart',
      mobileShutdown: 'MobileShutdown',
      name: 'Name',
      netRedirect: 'NetRedirect',
      netRedirectRule: 'NetRedirectRule',
      noOperationDisconnect: 'NoOperationDisconnect',
      noOperationDisconnectTime: 'NoOperationDisconnectTime',
      printerRedirect: 'PrinterRedirect',
      qualityEnhancement: 'QualityEnhancement',
      recordEventDuration: 'RecordEventDuration',
      recordEventFilePaths: 'RecordEventFilePaths',
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
      watermarkTransparencyValue: 'WatermarkTransparencyValue',
      watermarkType: 'WatermarkType',
      wuyingKeeper: 'WuyingKeeper',
      wyAssistant: 'WyAssistant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminAccess: 'string',
      appContentProtection: 'string',
      authorizeAccessPolicyRule: { 'type': 'array', 'itemType': CreateCenterPolicyRequestAuthorizeAccessPolicyRule },
      authorizeSecurityPolicyRule: { 'type': 'array', 'itemType': CreateCenterPolicyRequestAuthorizeSecurityPolicyRule },
      businessType: 'number',
      cameraRedirect: 'string',
      clientControlMenu: 'string',
      clientType: { 'type': 'array', 'itemType': CreateCenterPolicyRequestClientType },
      clipboard: 'string',
      colorEnhancement: 'string',
      cpdDriveClipboard: 'string',
      cpuDownGradeDuration: 'number',
      cpuProcessors: { 'type': 'array', 'itemType': 'string' },
      cpuProtectedMode: 'string',
      cpuRateLimit: 'number',
      cpuSampleDuration: 'number',
      cpuSingleRateLimit: 'number',
      deviceConnectHint: 'string',
      deviceRedirects: { 'type': 'array', 'itemType': CreateCenterPolicyRequestDeviceRedirects },
      deviceRules: { 'type': 'array', 'itemType': CreateCenterPolicyRequestDeviceRules },
      disconnectKeepSession: 'string',
      disconnectKeepSessionTime: 'number',
      displayMode: 'string',
      domainResolveRule: { 'type': 'array', 'itemType': CreateCenterPolicyRequestDomainResolveRule },
      domainResolveRuleType: 'string',
      enableSessionRateLimiting: 'string',
      endUserApplyAdminCoordinate: 'string',
      endUserGroupCoordinate: 'string',
      fileMigrate: 'string',
      fileTransferAddress: 'string',
      fileTransferSpeed: 'string',
      fileTransferSpeedLocation: 'string',
      gpuAcceleration: 'string',
      html5FileTransfer: 'string',
      internetCommunicationProtocol: 'string',
      internetPrinter: 'string',
      localDrive: 'string',
      maxReconnectTime: 'number',
      memoryDownGradeDuration: 'number',
      memoryProcessors: { 'type': 'array', 'itemType': 'string' },
      memoryProtectedMode: 'string',
      memoryRateLimit: 'number',
      memorySampleDuration: 'number',
      memorySingleRateLimit: 'number',
      mobileRestart: 'string',
      mobileShutdown: 'string',
      name: 'string',
      netRedirect: 'string',
      netRedirectRule: { 'type': 'array', 'itemType': CreateCenterPolicyRequestNetRedirectRule },
      noOperationDisconnect: 'string',
      noOperationDisconnectTime: 'number',
      printerRedirect: 'string',
      qualityEnhancement: 'string',
      recordEventDuration: 'number',
      recordEventFilePaths: { 'type': 'array', 'itemType': 'string' },
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

