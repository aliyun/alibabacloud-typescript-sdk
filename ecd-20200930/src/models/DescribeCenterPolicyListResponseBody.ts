// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules extends $dara.Model {
  /**
   * @remarks
   * The client access IP CIDR block, in IPv4 CIDR notation.
   * 
   * @example
   * 47.100.XX.XX/16
   */
  cidrIp?: string;
  /**
   * @remarks
   * The description of the client access IP CIDR block.
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

export class DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules extends $dara.Model {
  /**
   * @remarks
   * The object of the security group rule, which is an IPv4 CIDR block.
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
   * Indicates whether a specific type of client is allowed to log on to the cloud desktop.
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
   * The peripheral device type.
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
   * The peripheral device type.
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

export class DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDomainResolveRule extends $dara.Model {
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
   * Indicates whether the user has administrator permissions after connecting to the cloud desktop.
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
   * Specifies whether to enable administrator monitoring. Valid values:
   * - 1: Enabled.
   * - 0: Disabled.
   * 
   * @example
   * 0
   */
  adminMonitor?: number;
  /**
   * @remarks
   * Indicates whether the screenshot prevention feature is enabled.
   * 
   * @example
   * off
   */
  appContentProtection?: string;
  /**
   * @remarks
   * The client access IP whitelist.
   */
  authorizeAccessPolicyRules?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules[];
  /**
   * @remarks
   * The list of security group rules.
   */
  authorizeSecurityPolicyRules?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules[];
  /**
   * @remarks
   * Specifies whether to enable automatic reconnection on the client.
   * 
   * @example
   * off
   */
  autoReconnect?: string;
  /**
   * @remarks
   * Indicates whether local camera redirection is enabled.
   * 
   * @example
   * on
   */
  cameraRedirect?: string;
  /**
   * @remarks
   * The client control menu display switch. Valid values:
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
   * Specifies whether to enable the hibernate option in the client menu. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  clientHibernate?: string;
  /**
   * @remarks
   * Specifies whether to enable the restart option in the client menu. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  clientRestart?: string;
  /**
   * @remarks
   * Specifies whether to enable the shutdown option in the client menu. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  clientShutdown?: string;
  /**
   * @remarks
   * The logon method control rules.
   */
  clientTypes?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsClientTypes[];
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
   * Specifies whether color enhancement is enabled for design and 3D common scenarios.
   * 
   * @example
   * off
   */
  colorEnhancement?: string;
  /**
   * @remarks
   * The local drive clipboard feature switch. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  cpdDriveClipboard?: string;
  /**
   * @remarks
   * The CPU downgrade duration. Valid values: 30 to 120. Unit: seconds.
   * 
   * @example
   * 30
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
   * The CPU spike protection mode switch.
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
   * The number of cloud desktops associated with the policy.
   * 
   * @example
   * 1
   */
  desktopCount?: number;
  /**
   * @remarks
   * The number of cloud desktop pools associated with the policy.
   * 
   * @example
   * 1
   */
  desktopGroupCount?: number;
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
   * The device redirection rules.
   */
  deviceRedirects?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDeviceRedirects[];
  /**
   * @remarks
   * The custom peripheral device rules.
   */
  deviceRules?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDeviceRules[];
  /**
   * @remarks
   * Specifies whether to retain the session after disconnection.
   * > This applies only to cloud application policies.
   * 
   * @example
   * persistent
   */
  disconnectKeepSession?: string;
  /**
   * @remarks
   * The session retention duration after disconnection. Unit: seconds.
   * > This applies only to cloud application policies.
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
   * adminCustom
   */
  displayMode?: string;
  /**
   * @remarks
   * The domain name resolution effective field.
   * 
   * @example
   * example.com
   */
  domainRegisterValue?: string;
  /**
   * @remarks
   * The details of the domain name resolution policy.
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
   * Indicates whether end users can request administrator assistance.
   * 
   * @example
   * off
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
   * Indicates whether users within the same office network can share cloud desktops.
   * 
   * @example
   * off
   */
  endUserGroupCoordinate?: string;
  /**
   * @remarks
   * Specifies whether to enable the use of external storage devices. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  externalDrive?: string;
  /**
   * @remarks
   * The file migration setting.
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
   * The file size limit for a single transfer to the cloud desktop. This parameter must be used together with the inbound unit parameter.
   * 
   * @example
   * 100
   */
  fileTransferInSize?: string;
  /**
   * @remarks
   * The unit for the file size limit of a single transfer to the cloud desktop.
   * 
   * @example
   * MB
   */
  fileTransferInUnit?: string;
  /**
   * @remarks
   * The file size limit for a single transfer from the cloud desktop. This parameter must be used together with the outbound unit parameter.
   * 
   * @example
   * 100
   */
  fileTransferOutSize?: string;
  /**
   * @remarks
   * The unit for the file size limit of a single transfer from the cloud desktop.
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
   * Indicates whether the image quality policy is enabled for GPU-accelerated cloud desktops. Enable this policy when high performance and user experience are required, such as in professional design scenarios.
   * 
   * @example
   * off
   */
  gpuAcceleration?: string;
  /**
   * @remarks
   * Specifies whether to enable the configuration message notification on the floating ball. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  hoverConfigMsg?: string;
  /**
   * @remarks
   * Specifies whether to enable the hibernate button on the floating ball. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  hoverHibernate?: string;
  /**
   * @remarks
   * Specifies whether to enable the restart button on the floating ball. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  hoverRestart?: string;
  /**
   * @remarks
   * Specifies whether to enable the shutdown button on the floating ball. Valid values:
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
   * tcp
   */
  internetCommunicationProtocol?: string;
  /**
   * @remarks
   * The network printer feature switch. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  internetPrinter?: string;
  /**
   * @remarks
   * Specifies whether to enable keyboard control on the floating ball. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  keyboardControl?: string;
  /**
   * @remarks
   * Specifies whether to enable the KMS server. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  kmsServer?: string;
  /**
   * @remarks
   * The KMS server configuration in the format of address:port.
   * 
   * @example
   * kms.example.com:1688
   */
  kmsServerConfig?: string;
  /**
   * @remarks
   * The local disk mapping permission.
   * 
   * @example
   * readwrite
   */
  localDrive?: string;
  /**
   * @remarks
   * The maximum reconnection retry time when the cloud desktop is disconnected due to external reasons. Valid values: 30 to 7200. Unit: seconds.
   * 
   * @example
   * 120
   */
  maxReconnectTime?: number;
  /**
   * @remarks
   * The memory downgrade duration of a single process. Valid values: 30 to 120. Unit: seconds.
   * 
   * @example
   * 30
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
   * The memory protection mode switch.
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
   * The memory usage percentage of a single process. Valid values: 30 to 60.
   * 
   * @example
   * 30
   */
  memorySingleRateLimit?: number;
  /**
   * @remarks
   * Specifies whether the restart button is provided in the cloud desktop floating ball when connecting to the cloud desktop from a mobile client (Android client<props="china"> and iOS client).
   * 
   * > This applies only to mobile clients of V7.4 or later.
   * 
   * @example
   * off
   */
  mobileRestart?: string;
  /**
   * @remarks
   * Specifies whether to enable the Windows security control on mobile clients.
   * 
   * @example
   * off
   */
  mobileSafeMenu?: string;
  /**
   * @remarks
   * Specifies whether the shutdown button is provided in the cloud desktop floating ball when connecting to the cloud desktop from a mobile client (Android client<props="china"> and iOS client).
   * 
   * > This applies only to mobile clients of V7.4 or later.
   * 
   * @example
   * off
   */
  mobileShutdown?: string;
  /**
   * @remarks
   * Specifies whether to enable WUYING Keeper on mobile clients.
   * 
   * @example
   * off
   */
  mobileWuyingKeeper?: string;
  /**
   * @remarks
   * Specifies whether to enable the WUYING Assistant on mobile clients.
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
   * The network redirection setting.
   * 
   * > This feature is in invitational preview and is not publicly available.
   * 
   * @example
   * off
   */
  netRedirect?: string;
  /**
   * @remarks
   * The details of the network redirection policy.
   * 
   * > This feature is in invitational preview and is not publicly available.
   * >
   */
  netRedirectRule?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsNetRedirectRule[];
  /**
   * @remarks
   * The network printer feature switch. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  networkPrinter?: string;
  /**
   * @remarks
   * Specifies whether to disconnect the session when no operation is performed.
   * > This applies only to cloud application policies.
   * 
   * @example
   * off
   */
  noOperationDisconnect?: string;
  /**
   * @remarks
   * The idle disconnection duration. Unit: seconds.
   * > This applies only to cloud application policies.
   * 
   * @example
   * 120
   */
  noOperationDisconnectTime?: number;
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
   * The printer alert dialog setting. Valid values:
   * - default: Default.
   * - off: Disabled.
   * - custom: Custom.
   * 
   * @example
   * off
   */
  printerAlert?: string;
  /**
   * @remarks
   * The content of the printer alert dialog.
   * 
   * @example
   * Print Content.
   */
  printerAlertContent?: string;
  /**
   * @remarks
   * The title of the printer alert dialog.
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
   * off
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
   * Indicates whether custom screen recording is enabled.
   * 
   * @example
   * off
   */
  recordContent?: string;
  /**
   * @remarks
   * The expiration period of custom screen recording files. Default value: 30. Unit: days.
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
   * The option for recording cloud desktop audio.
   * 
   * @example
   * on
   */
  recordingAudio?: string;
  /**
   * @remarks
   * The duration of screen recording files, in minutes. Recording files are automatically split and uploaded to the storage space based on the specified duration. Files are rolled over when they reach 300 MB.
   * 
   * @example
   * 10
   */
  recordingDuration?: number;
  /**
   * @remarks
   * The end time of screen recording, in the format of HH:MM:SS. This response value is meaningful only when Recording is set to period.
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
   * 5
   */
  recordingFps?: number;
  /**
   * @remarks
   * The start time of screen recording, in the format of HH:MM:SS. This response value is meaningful only when Recording is set to period.
   * 
   * @example
   * 08:00:00
   */
  recordingStartTime?: string;
  /**
   * @remarks
   * Indicates whether end users are notified that screen recording is enabled.
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
   * The keyboard and mouse control permission for remote assistance.
   * 
   * @example
   * fullControl
   */
  remoteCoordinate?: string;
  /**
   * @remarks
   * The setting for resetting the cloud desktop.
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
   * The resolution height. Unit: pixels.
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
   * The resolution width. Unit: pixels.
   * 
   * @example
   * 1920
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
   * The security center shortcut key switch. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  safeMenu?: string;
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
   * The CIDR block that the policy applies to.
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
   * Specifies whether smoothness enhancement is enabled for daily office scenarios.
   * 
   * @example
   * off
   */
  smoothEnhancement?: string;
  /**
   * @remarks
   * Specifies whether the status monitoring entry is provided in the cloud desktop floating ball.
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
   * The application taskbar.
   * > This applies only to cloud application policies.
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
  usbSupplyRedirectRule?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsUsbSupplyRedirectRule[];
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
   * The average bitrate for video encoding. Unit: Kbps. Valid values: 1000 to 50000.
   * 
   * @example
   * 1000
   */
  videoEncAvgKbps?: number;
  /**
   * @remarks
   * The maximum QP for video encoding, which represents the lowest quality. Valid values: 0 to 51.
   * 
   * @example
   * 20
   */
  videoEncMaxQP?: number;
  /**
   * @remarks
   * The minimum QP for video encoding, which represents the highest quality. Valid values: 0 to 51.
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
   * The invisible watermark anti-camera capture feature.
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
   * If the `WatermarkType` parameter is set to `custom`, you must also specify the custom text content by using the `WatermarkCustomText` parameter.
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
   * The invisible watermark enhancement feature.
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
   * The invisible watermark security-first rule.
   * 
   * @example
   * on
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
   * Specifies whether to enable WUYING Keeper.
   * 
   * @example
   * off
   */
  wuyingKeeper?: string;
  /**
   * @remarks
   * Specifies whether the WUYING AI Assistant entry is provided in the cloud desktop floating ball.
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
      desktopCount: 'DesktopCount',
      desktopGroupCount: 'DesktopGroupCount',
      deviceConnectHint: 'DeviceConnectHint',
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
      printerAlert: 'PrinterAlert',
      printerAlertContent: 'PrinterAlertContent',
      printerAlertTitle: 'PrinterAlertTitle',
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
      resetDesktop: 'ResetDesktop',
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
      adminMonitor: 'number',
      appContentProtection: 'string',
      authorizeAccessPolicyRules: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules },
      authorizeSecurityPolicyRules: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules },
      autoReconnect: 'string',
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
      deviceConnectHint: 'string',
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
      printerAlert: 'string',
      printerAlertContent: 'string',
      printerAlertTitle: 'string',
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
      resetDesktop: 'string',
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
      threeScreen: 'string',
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
   * The details of the cloud desktop policies.
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

