// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCenterPolicyRequestAuthorizeAccessPolicyRule extends $dara.Model {
  /**
   * @remarks
   * The client IP address range. The value is an IPv4 CIDR block.
   * 
   * @example
   * 47.100.XX.XX/16
   */
  cidrIp?: string;
  /**
   * @remarks
   * The description of the client IP whitelist entry.
   * 
   * @example
   * Corporate office network segment
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
   * The object of the security group control rule. An IPv4 CIDR block in CIDR notation.
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
   * TCP
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
   * The port range of the security group control rule. The port range is determined by the value of the protocol (IpProtocol):
   * 
   * - TCP or UDP: Valid values: 1 to 65535. Separate the start port and end port with a forward slash (/). Example: 1/200.
   * - ICMP: -1/-1.
   * - GRE: -1/-1.
   * - If IpProtocol is set to all: -1/-1.
   * 
   * For common ports of typical applications, see [Common ports](https://help.aliyun.com/document_detail/40724.html).
   * 
   * @example
   * 22/22
   */
  portRange?: string;
  /**
   * @remarks
   * The priority of the security group control rule. A smaller value indicates a higher priority. Valid values: 1 to 60. Default value: 1.
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

export class ModifyCenterPolicyRequestClientType extends $dara.Model {
  /**
   * @remarks
   * The client type for logon method control.
   * 
   * @example
   * android
   */
  clientType?: string;
  /**
   * @remarks
   * Specifies whether to allow a specific type of client to log on to cloud computers.
   * 
   * > If you do not set the `ClientType` parameters, all client types are allowed to log on to cloud computers by default.
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
  /**
   * @remarks
   * The maximum size of a single clipboard transfer. Use this parameter together with the size unit parameter.
   * 
   * @example
   * 10
   */
  clipboardSize?: number;
  /**
   * @remarks
   * The unit of the maximum size of a single clipboard transfer.
   * 
   * @example
   * MB
   */
  clipboardSizeUnit?: string;
  /**
   * @remarks
   * The fine-grained clipboard control type. Valid values:
   * - off: Clipboard usage is disabled.
   * - read: Read-only.
   * - write: Write-only.
   * - readwrite: Read and write.
   * 
   * @example
   * readwrite
   */
  clipboardType?: string;
  /**
   * @remarks
   * The content type for fine-grained clipboard control. Valid values:
   * - text: Text.
   * - richtext: Rich text.
   * - file: File.
   * - picture: Image.
   * 
   * @example
   * text
   */
  grainedType?: string;
  /**
   * @remarks
   * The maximum size of a single clipboard transfer to the cloud desktop. Use this parameter together with the inbound size unit parameter.
   * 
   * @example
   * 10
   */
  inClipboardSize?: number;
  /**
   * @remarks
   * The unit of the maximum size of a single clipboard transfer to the cloud desktop.
   * 
   * @example
   * MB
   */
  inClipboardSizeUnit?: string;
  /**
   * @remarks
   * The maximum size of a single clipboard transfer from the cloud desktop. Use this parameter together with the outbound size unit parameter.
   * 
   * @example
   * 10
   */
  outClipboardSize?: number;
  /**
   * @remarks
   * The unit of the maximum size of a single clipboard transfer from the cloud desktop.
   * 
   * @example
   * MB
   */
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

export class ModifyCenterPolicyRequestDeviceRules extends $dara.Model {
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

export class ModifyCenterPolicyRequestDomainResolveRule extends $dara.Model {
  /**
   * @remarks
   * The policy description.
   * 
   * @example
   * Policy description
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

export class ModifyCenterPolicyRequestNetRedirectRule extends $dara.Model {
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
   * The redirect policy.
   * 
   * @example
   * Allow
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

export class ModifyCenterPolicyRequestRecordEventLevels extends $dara.Model {
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

export class ModifyCenterPolicyRequestRevokeAccessPolicyRule extends $dara.Model {
  /**
   * @remarks
   * The client IP address range to delete. The value is an IPv4 CIDR block.
   * 
   * @example
   * 47.100.XX.XX/16
   */
  cidrIp?: string;
  /**
   * @remarks
   * The description of the client IP whitelist entry to delete.
   * 
   * @example
   * Corporate office network segment
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
   * The target of the security group rule to delete. The value is an IPv4 CIDR block.
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
   * Allow access to the internal R&D environment
   */
  description?: string;
  /**
   * @remarks
   * The protocol type of the security group rule to delete.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The authorization policy of the security group rule to delete.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The port range of the security group rule to delete. The port range is determined by the value of IpProtocol:
   * 
   * - TCP or UDP: The port range is 1 to 65535. Separate the start port and end port with a forward slash (/). Example: 1/200.
   * - ICMP: -1/-1.
   * - GRE: -1/-1.
   * - If IpProtocol is set to all: -1/-1.
   * 
   * For more information about common ports of typical applications, see [Common ports](https://help.aliyun.com/document_detail/40724.html).
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

export class ModifyCenterPolicyRequestUsbSupplyRedirectRule extends $dara.Model {
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
  usbRedirectType?: string;
  /**
   * @remarks
   * The USB redirection rule type.
   * 
   * @example
   * 1
   */
  usbRuleType?: string;
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
   * Specifies whether the user has administrator permissions after logging on to the cloud desktop.
   * 
   * > This feature is in invitational preview and is not publicly available.
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
   * Specifies whether to enable administrator keyboard control within the Windows system. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  adminKeyboardOnWindows?: string;
  /**
   * @remarks
   * Specifies whether to enable the screenshot prevention feature.
   * 
   * @example
   * on
   */
  appContentProtection?: string;
  /**
   * @remarks
   * The list of client IP whitelist entries to add.
   */
  authorizeAccessPolicyRule?: ModifyCenterPolicyRequestAuthorizeAccessPolicyRule[];
  /**
   * @remarks
   * The list of security group control rules to add.
   */
  authorizeSecurityPolicyRule?: ModifyCenterPolicyRequestAuthorizeSecurityPolicyRule[];
  /**
   * @remarks
   * Specifies whether to automatically reconnect after disconnection.
   * 
   * @example
   * off
   */
  autoReconnect?: string;
  /**
   * @remarks
   * The business channel. Valid values:
   * - Enterprise: Enterprise Edition.
   * - Business: Business Edition.
   * 
   * @example
   * Enterprise
   */
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
   * The local camera redirection policy. This parameter takes effect only when no local camera redirection policy is specified in DeviceRedirects.
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
   * Specifies whether to enable the custom snapshot creation feature on the client. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  clientCreateSnapshot?: string;
  /**
   * @remarks
   * The list of logon method control rules. Specifies which client types can be used to access cloud computers.
   */
  clientType?: ModifyCenterPolicyRequestClientType[];
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
   * The fine-grained clipboard control configurations.
   */
  clipboardGraineds?: ModifyCenterPolicyRequestClipboardGraineds[];
  /**
   * @remarks
   * The effective scope of the clipboard.
   * 
   * @example
   * GLOBAL
   */
  clipboardScope?: string;
  /**
   * @remarks
   * Indicates whether color enhancement is enabled for the design and 3D application common scenarios.
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
   * The CPU throttling duration. Valid values: 30 to 120. Unit: seconds.
   * 
   * @example
   * 50
   */
  cpuDownGradeDuration?: number;
  /**
   * @remarks
   * Specifies whether to enable CPU overload protection. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  cpuOverload?: string;
  /**
   * @remarks
   * The process name.
   */
  cpuProcessors?: string[];
  /**
   * @remarks
   * Specifies whether to enable CPU protection mode.
   * 
   * @example
   * off
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
   * 30
   */
  cpuSampleDuration?: number;
  /**
   * @remarks
   * The single-core CPU usage percentage. Valid values: 70 to 100.
   * 
   * @example
   * 80
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
   * The peripheral connection notification control.
   * 
   * @example
   * off
   */
  deviceConnectHint?: string;
  /**
   * @remarks
   * The list of device redirection rules.
   */
  deviceRedirects?: ModifyCenterPolicyRequestDeviceRedirects[];
  /**
   * @remarks
   * The list of custom peripheral rules.
   */
  deviceRules?: ModifyCenterPolicyRequestDeviceRules[];
  /**
   * @remarks
   * The session retention policy after disconnection.
   * > This parameter applies only to cloud application policies.
   * 
   * @example
   * customTime
   */
  disconnectKeepSession?: string;
  /**
   * @remarks
   * The session retention period after disconnection. Valid values: 30 to 7200. Unit: seconds.
   * > This parameter applies only to cloud application policies.
   * 
   * @example
   * 120
   */
  disconnectKeepSessionTime?: number;
  /**
   * @remarks
   * Specifies whether to enable disk overload protection. Valid values:
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
   * clientCustom
   */
  displayMode?: string;
  /**
   * @remarks
   * The domain name resolution policy.
   */
  domainResolveRule?: ModifyCenterPolicyRequestDomainResolveRule[];
  /**
   * @remarks
   * The domain name resolution policy type.
   * 
   * @example
   * off
   */
  domainResolveRuleType?: string;
  /**
   * @remarks
   * Specifies whether to enable session bandwidth throttling.
   * 
   * @example
   * off
   */
  enableSessionRateLimiting?: string;
  /**
   * @remarks
   * Specifies whether users can request assistance from administrators.
   * 
   * @example
   * off
   */
  endUserApplyAdminCoordinate?: string;
  /**
   * @remarks
   * Specifies whether users in the same office network can share cloud desktops.
   * 
   * @example
   * off
   */
  endUserGroupCoordinate?: string;
  /**
   * @remarks
   * Specifies whether to enable external storage devices. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  externalDrive?: string;
  /**
   * @remarks
   * Specifies whether to enable file migration.
   * 
   * @example
   * off
   */
  fileMigrate?: string;
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
   * The maximum file size for a single transfer to the cloud desktop. This parameter must be used together with the transfer-in unit parameter.
   * 
   * @example
   * 100
   */
  fileTransferInSize?: string;
  /**
   * @remarks
   * The unit of the maximum file size for a single transfer to the cloud desktop.
   * 
   * @example
   * MB
   */
  fileTransferInUnit?: string;
  /**
   * @remarks
   * The maximum file size for a single transfer from the cloud desktop. This parameter must be used together with the transfer-out unit parameter.
   * 
   * @example
   * 100
   */
  fileTransferOutSize?: string;
  /**
   * @remarks
   * The unit of the maximum file size for a single transfer from the cloud desktop.
   * 
   * @example
   * MB
   */
  fileTransferOutUnit?: string;
  /**
   * @remarks
   * Specifies whether to enable the file transfer size limit. Valid values:
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
   * The location where the file transfer speed configured on the client takes effect.
   * 
   * @example
   * client
   */
  fileTransferSpeedLocation?: string;
  /**
   * @remarks
   * Specifies whether to enable the image quality policy for GPU-accelerated cloud desktops. Enable this policy when high cloud desktop performance and user experience are required, such as in professional design scenarios.
   * 
   * @example
   * off
   */
  gpuAcceleration?: string;
  /**
   * @remarks
   * Specifies whether to enable the floating ball configuration message prompt. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  hoverConfigMsg?: string;
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
   * both
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
   * The local disk mapping permission.
   * 
   * @example
   * off
   */
  localDrive?: string;
  /**
   * @remarks
   * The maximum connection retry time when a cloud computer is disconnected due to objective reasons. Valid values: 30 to 7200. Unit: seconds.
   * 
   * @example
   * 120
   */
  maxReconnectTime?: number;
  /**
   * @remarks
   * The memory throttling duration of a single process. Valid values: 30 to 120. Unit: seconds.
   * 
   * @example
   * 40
   */
  memoryDownGradeDuration?: number;
  /**
   * @remarks
   * Specifies whether to enable memory overload protection. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  memoryOverload?: string;
  /**
   * @remarks
   * The process name.
   */
  memoryProcessors?: string[];
  /**
   * @remarks
   * Specifies whether to enable memory protection mode.
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
   * 40
   */
  memorySampleDuration?: number;
  /**
   * @remarks
   * The memory usage percentage of a single process. Valid values: 30 to 60.
   * 
   * @example
   * 40
   */
  memorySingleRateLimit?: number;
  /**
   * @remarks
   * Specifies whether to provide the restart button in the cloud desktop floating ball when connecting to the cloud desktop from a mobile client (Android client<props="china"> and iOS client).
   * 
   * > This parameter applies only to mobile clients of V7.4 or later.
   * 
   * @example
   * off
   */
  mobileRestart?: string;
  /**
   * @remarks
   * Specifies whether to enable the security button for Windows on the mobile client.
   * 
   * @example
   * off
   */
  mobileSafeMenu?: string;
  /**
   * @remarks
   * Specifies whether to provide the shutdown button in the cloud desktop floating ball when connecting to the cloud desktop from a mobile client (Android client<props="china"> and iOS client).
   * 
   * > This parameter applies only to mobile clients of V7.4 or later.
   * 
   * @example
   * off
   */
  mobileShutdown?: string;
  /**
   * @remarks
   * Specifies whether to enable WUYING Keeper on the mobile client.
   * 
   * @example
   * off
   */
  mobileWuyingKeeper?: string;
  /**
   * @remarks
   * Specifies whether to enable WUYING Assistant on the mobile client.
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
   * > This feature is in invitational preview and is not publicly available.
   * 
   * @example
   * on
   */
  netRedirect?: string;
  /**
   * @remarks
   * The details of the network redirect policy.
   * 
   * > This feature is in invitational preview and is not publicly available.
   * >
   */
  netRedirectRule?: ModifyCenterPolicyRequestNetRedirectRule[];
  /**
   * @remarks
   * Specifies whether to disconnect the session when no operation is performed.
   * > This parameter applies only to cloud application policies.
   * 
   * @example
   * off
   */
  noOperationDisconnect?: string;
  /**
   * @remarks
   * The idle disconnection period. Valid values: 120 to 7200. Unit: seconds.
   * > This parameter applies only to cloud application policies.
   * 
   * @example
   * 120
   */
  noOperationDisconnectTime?: number;
  /**
   * @remarks
   * The ID of the cloud desktop policy.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-53iyi2aar0nd6****
   */
  policyGroupId?: string;
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
   * Print Content.
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
   * The printer redirection policy. This parameter takes effect only when no printer redirection policy is specified in DeviceRedirects.
   * 
   * @example
   * off
   */
  printerRedirect?: string;
  /**
   * @remarks
   * Indicates whether image quality enhancement is enabled for the design and 3D application common scenarios.
   * 
   * @example
   * off
   */
  qualityEnhancement?: string;
  /**
   * @remarks
   * The duration of screen recording after an event is detected in screen recording audits. Unit: minutes. Valid values: 10 to 60.
   * 
   * @example
   * 10
   */
  recordEventDuration?: number;
  /**
   * @remarks
   * The file extensions of recording events.
   */
  recordEventFileExts?: string[];
  /**
   * @remarks
   * The absolute paths for file monitoring in screen recording audits.
   */
  recordEventFilePaths?: string[];
  /**
   * @remarks
   * The levels of recording events.
   */
  recordEventLevels?: ModifyCenterPolicyRequestRecordEventLevels[];
  /**
   * @remarks
   * The absolute paths for registry monitoring in screen recording audits.
   */
  recordEventRegisters?: string[];
  /**
   * @remarks
   * The list of screen recording events.
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
   * The audio recording option for cloud desktops.
   * 
   * @example
   * on
   */
  recordingAudio?: string;
  /**
   * @remarks
   * The duration of each screen recording file, in minutes. Recording files are automatically split and uploaded to the storage space based on the specified duration. Files are rolled over when they reach 300 MB. Valid values: 10 to 60.
   * 
   * @example
   * 10
   */
  recordingDuration?: number;
  /**
   * @remarks
   * The end time of screen recording. Format: HH:MM:SS. This response value is meaningful only when `Recording` is set to `PERIOD`.
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
   * The screen recording frame rate. Unit: FPS (frames per second).
   * 
   * @example
   * 5
   */
  recordingFps?: string;
  /**
   * @remarks
   * The start time of screen recording. Format: HH:MM:SS. This response value is meaningful only when `Recording` is set to `PERIOD`.
   * 
   * @example
   * 08:00:00
   */
  recordingStartTime?: string;
  /**
   * @remarks
   * Specifies whether to notify end users that screen recording is enabled.
   * 
   * @example
   * off
   */
  recordingUserNotify?: string;
  /**
   * @remarks
   * The notification message displayed to end users when screen recording is enabled.
   * 
   * @example
   * Screen recording is enabled
   */
  recordingUserNotifyMessage?: string;
  /**
   * @remarks
   * The region ID. This feature is region-independent. Set this parameter to `cn-shanghai`.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The keyboard and mouse control permission for remote assistance.
   * 
   * @example
   * fullControl
   */
  remoteCoordinate?: string;
  /**
   * @remarks
   * Specifies whether to allow resetting the cloud desktop.
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
   * The width of the resolution. Unit: pixels. Valid values for cloud applications: 500 to 50000. Valid values for cloud desktops: 480 to 4096.
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
   * The list of client IP whitelist entries to delete.
   */
  revokeAccessPolicyRule?: ModifyCenterPolicyRequestRevokeAccessPolicyRule[];
  /**
   * @remarks
   * The list of security group rules to delete.
   */
  revokeSecurityPolicyRule?: ModifyCenterPolicyRequestRevokeSecurityPolicyRule[];
  /**
   * @remarks
   * Specifies whether to enable the Security Center shortcut key. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  safeMenu?: string;
  /**
   * @remarks
   * The scope in which the policy takes effect.
   * 
   * @example
   * GLOBAL
   */
  scope?: string;
  /**
   * @remarks
   * The value to specify when `Scope` is set to `IP`. This parameter takes effect only when `Scope` is set to `IP`.
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
   * The maximum value of session bandwidth throttling. Unit: Kbps. Valid values: 2000 to 100000.
   * 
   * @example
   * 2000
   */
  sessionMaxRateKbps?: number;
  /**
   * @remarks
   * Specifies whether to enable smoothness enhancement for the daily office scenario.
   * 
   * @example
   * off
   */
  smoothEnhancement?: string;
  /**
   * @remarks
   * Specifies whether to provide the status monitoring entry in the cloud desktop floating ball.
   * 
   * @example
   * off
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
   * The application taskbar.
   * > This parameter applies only to cloud application policies.
   * 
   * @example
   * off
   */
  taskbar?: string;
  /**
   * @remarks
   * Specifies whether to enable the three-screen feature. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  threeScreen?: string;
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
   * The USB redirection rule.
   */
  usbSupplyRedirectRule?: ModifyCenterPolicyRequestUsbSupplyRedirectRule[];
  /**
   * @remarks
   * Specifies whether to display the usage duration in the floating ball. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  useTime?: string;
  /**
   * @remarks
   * The average bitrate for video encoding. Unit: Kbps. Valid values: 1000 to 50000.
   * 
   * @example
   * 2000
   */
  videoEncAvgKbps?: number;
  /**
   * @remarks
   * The maximum QP for video encoding, which represents the lowest quality. Valid values: 0 to 51.
   * 
   * @example
   * 30
   */
  videoEncMaxQP?: number;
  /**
   * @remarks
   * The minimum QP for video encoding, which represents the highest quality. Valid values: 0 to 51.
   * 
   * @example
   * 30
   */
  videoEncMinQP?: number;
  /**
   * @remarks
   * The peak video encoding bitrate. Unit: Kbps. Valid values: 1000 to 50000.
   * 
   * @example
   * 2000
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
   * The multimedia redirection policy.
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
   * The watermark policy.
   * 
   * @example
   * off
   */
  watermark?: string;
  /**
   * @remarks
   * The invisible watermark anti-photography feature.
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
   * The number of watermark columns. Valid values: 3 to 10.
   * 
   * @example
   * 3
   */
  watermarkColumnAmount?: number;
  /**
   * @remarks
   * If the `WatermarkType` parameter is set to `custom`, you must also specify the custom text content by using the `WatermarkCustomText` parameter.
   * 
   * @example
   * Internal Document
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
   * The invisible watermark enhancement feature.
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
   * 5
   */
  watermarkRowAmount?: number;
  /**
   * @remarks
   * The security priority rule for invisible watermarks.
   * 
   * @example
   * off
   */
  watermarkSecurity?: string;
  /**
   * @remarks
   * Specifies whether to enable the watermark shadow effect. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  watermarkShadow?: string;
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
   * > If you set this parameter to `custom`, you must also specify the custom text content by using the `WatermarkCustomText` parameter.
   * 
   * @example
   * EndUserId
   */
  watermarkType?: string;
  /**
   * @remarks
   * Specifies whether to enable WUYING Keeper.
   * 
   * @example
   * off
   */
  wuyingKeeper?: string;
  /**
   * @remarks
   * Specifies whether to provide the WUYING AI Assistant entry in the floating ball when connecting to a cloud computer through a desktop client (including Windows client and macOS client).
   * 
   * > This feature applies only to desktop clients of V7.7 or later.
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
      fileTransferInSize: 'FileTransferInSize',
      fileTransferInUnit: 'FileTransferInUnit',
      fileTransferOutSize: 'FileTransferOutSize',
      fileTransferOutUnit: 'FileTransferOutUnit',
      fileTransferSizeLimit: 'FileTransferSizeLimit',
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
      printerAlert: 'PrinterAlert',
      printerAlertContent: 'PrinterAlertContent',
      printerAlertTitle: 'PrinterAlertTitle',
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
      fileTransferInSize: 'string',
      fileTransferInUnit: 'string',
      fileTransferOutSize: 'string',
      fileTransferOutUnit: 'string',
      fileTransferSizeLimit: 'string',
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
      printerAlert: 'string',
      printerAlertContent: 'string',
      printerAlertTitle: 'string',
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
      threeScreen: 'string',
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

