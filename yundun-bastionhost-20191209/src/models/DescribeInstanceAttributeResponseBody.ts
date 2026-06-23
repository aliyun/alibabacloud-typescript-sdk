// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAttributeResponseBodyInstanceAttributePorts extends $dara.Model {
  /**
   * @remarks
   * The custom O\\&M port.
   * 
   * > Only SSH and RDP ports can be customized. If no custom port is set, this parameter returns the value of the `StandardPort` parameter.
   * 
   * @example
   * 600xx
   */
  customPort?: number;
  /**
   * @remarks
   * The standard O\\&M port number. The following are the default standard ports for specific protocols:
   * 
   * - **SSH**: 60022
   * 
   * - **RDP**: 63389
   * 
   * - **HTTPS**: 443
   * 
   * @example
   * 60022
   */
  standardPort?: number;
  static names(): { [key: string]: string } {
    return {
      customPort: 'CustomPort',
      standardPort: 'StandardPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPort: 'number',
      standardPort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBodyInstanceAttributeWhiteListPolicies extends $dara.Model {
  /**
   * @remarks
   * The description of the whitelist rule.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * An IP address or CIDR block in the whitelist.
   * 
   * @example
   * 94.74.xx.xx/32
   */
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      entry: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBodyInstanceAttribute extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the application O\\&M module is enabled. Valid values are `Enable` and `Disable`.
   * 
   * @example
   * Enable
   */
  appOperationModule?: string;
  /**
   * @remarks
   * A list of authorized security group IDs.
   */
  authorizedSecurityGroups?: string[];
  /**
   * @remarks
   * The total bandwidth of the Bastionhost instance, in Mbit/s.
   * 
   * @example
   * 30
   */
  bandwidth?: string;
  /**
   * @remarks
   * The extra bandwidth package of the Bastionhost instance, in Mbit/s.
   * 
   * @example
   * 5
   */
  bandwidthPackage?: string;
  /**
   * @remarks
   * The status of the database O\\&M feature.
   * 
   * - **Enable**: The database O\\&M feature is enabled.
   * 
   * - **Disable**: The database O\\&M feature is disabled.
   * 
   * @example
   * Disable
   */
  dbOperationModule?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * Test API
   */
  description?: string;
  /**
   * @remarks
   * The ID of the elastic network interface (ENI).
   * 
   * @example
   * eni-bp1455jrzwm7moaxxxxx
   */
  eniInstanceId?: string;
  /**
   * @remarks
   * The expiration timestamp, in milliseconds, of the Bastionhost instance.
   * 
   * @example
   * 1578326400000
   */
  expireTime?: number;
  /**
   * @remarks
   * Indicates whether the Bastionhost instance is integrated with a Hardware Security Module (HSM).
   */
  HSMModule?: string;
  /**
   * @remarks
   * Indicates whether the IDaaS integration module is enabled. Valid values are `Enable` and `Disable`.
   * 
   * @example
   * Enable
   */
  IDaaSModule?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * bastionhost-cn-78v1ghxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * - **PENDING**: The instance is being initialized.
   * 
   * - **CREATING**: The instance is being created.
   * 
   * - **RUNNING**: The instance is running.
   * 
   * - **EXPIRED**: The instance has expired.
   * 
   * - **CREATE_FAILED**: Instance creation failed.
   * 
   * - **UPGRADING**: The instance is being upgraded.
   * 
   * - **UPGRADE_FAILED**: Instance upgrade failed.
   * 
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The public domain name of the instance.
   * 
   * @example
   * ******lwb-public.bastionhost.aliyuncs.com
   */
  internetEndpoint?: string;
  /**
   * @remarks
   * The internal endpoint of the instance.
   * 
   * @example
   * ******xalwb.bastionhost.aliyuncs.com
   */
  intranetEndpoint?: string;
  /**
   * @remarks
   * Indicates whether the instance is integrated with Key Management Service (KMS) and Secrets Manager. Valid values are `Enable` and `Disable`.
   * 
   * @example
   * Enable
   */
  kmsSecretModule?: string;
  /**
   * @remarks
   * The license code.
   * 
   * @example
   * bhah_ent_50_asset
   */
  licenseCode?: string;
  /**
   * @remarks
   * The status of the password change feature.
   * 
   * - **Enable**: The feature is enabled.
   * 
   * - **Disable**: The feature is disabled.
   * 
   * @example
   * Enable
   */
  modifyPasswordModule?: string;
  /**
   * @remarks
   * The status of the network domain proxy feature.
   * 
   * - **Enable**: The network domain proxy feature is enabled.
   * 
   * - **Disable**: The network domain proxy feature is disabled.
   * 
   * @example
   * Enable
   */
  networkProxyModule?: string;
  /**
   * @remarks
   * The O\\&M ports of the Bastionhost instance.
   */
  ports?: DescribeInstanceAttributeResponseBodyInstanceAttributePorts[];
  /**
   * @remarks
   * A list of private egress IP addresses of the Bastionhost instance.
   */
  privateExportIps?: string[];
  /**
   * @remarks
   * The private whitelist of the instance.
   */
  privateWhiteList?: string[];
  /**
   * @remarks
   * A list of public egress IP addresses of the Bastionhost instance.
   */
  publicExportIps?: string[];
  /**
   * @remarks
   * A list of public IP addresses of the Bastionhost instance.
   */
  publicIps?: string[];
  /**
   * @remarks
   * Indicates whether the Bastionhost instance is accessible over the public network. Valid values:
   * 
   * - **true**: The Bastionhost instance is accessible over the public network.
   * 
   * - **false**: The Bastionhost instance is not accessible over the public network.
   * 
   * @example
   * true
   */
  publicNetworkAccess?: boolean;
  /**
   * @remarks
   * The public whitelist of the Bastionhost instance.
   */
  publicWhiteList?: string[];
  /**
   * @remarks
   * Indicates whether the multi-account module is enabled. Valid values are `Enable` and `Disable`.
   * 
   * @example
   * Enable
   */
  RDModule?: string;
  /**
   * @remarks
   * The ID of the region where the Bastionhost instance is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the instance\\"s resource group.
   * 
   * @example
   * rg-aekzc427db******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * A list of routing rules for the Bastionhost instance.
   */
  routerRules?: string[];
  /**
   * @remarks
   * Indicates whether the script-based O\\&M module is enabled. Valid values are `Enable` and `Disable`.
   * 
   * @example
   * Enable
   */
  scriptDeliverModule?: string;
  /**
   * @remarks
   * A list of the instance\\"s security group IDs.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The ID of the standby VSwitch for the Bastionhost instance.
   * 
   * @example
   * vsw-uf6cmnae7hu5****
   */
  slaveVswitchId?: string;
  /**
   * @remarks
   * The timestamp, in milliseconds, when the Bastionhost instance was purchased or renewed.
   * 
   * @example
   * 1577681345000
   */
  startTime?: number;
  /**
   * @remarks
   * The total storage capacity of the Bastionhost instance, in bytes.
   * 
   * @example
   * 2199023255552
   */
  storage?: number;
  /**
   * @remarks
   * The ID of the instance\\"s Virtual Private Cloud (VPC).
   * 
   * @example
   * vpc-bp1c85tzgqu1bf5bxxxxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the instance\\"s VSwitch.
   * 
   * @example
   * vsw-bp1xfwzzfti0kjbfxxxxx
   */
  vswitchId?: string;
  /**
   * @remarks
   * The status of the web terminal.
   * 
   * - **Enable**: Supports web-based remote connections.
   * 
   * - **Disable**: Does not support web-based remote connections.
   * 
   * @example
   * Enable
   */
  webTerminalModule?: string;
  /**
   * @remarks
   * The configured IP address whitelist policies.
   */
  whiteListPolicies?: DescribeInstanceAttributeResponseBodyInstanceAttributeWhiteListPolicies[];
  static names(): { [key: string]: string } {
    return {
      appOperationModule: 'AppOperationModule',
      authorizedSecurityGroups: 'AuthorizedSecurityGroups',
      bandwidth: 'Bandwidth',
      bandwidthPackage: 'BandwidthPackage',
      dbOperationModule: 'DbOperationModule',
      description: 'Description',
      eniInstanceId: 'EniInstanceId',
      expireTime: 'ExpireTime',
      HSMModule: 'HSMModule',
      IDaaSModule: 'IDaaSModule',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      internetEndpoint: 'InternetEndpoint',
      intranetEndpoint: 'IntranetEndpoint',
      kmsSecretModule: 'KmsSecretModule',
      licenseCode: 'LicenseCode',
      modifyPasswordModule: 'ModifyPasswordModule',
      networkProxyModule: 'NetworkProxyModule',
      ports: 'Ports',
      privateExportIps: 'PrivateExportIps',
      privateWhiteList: 'PrivateWhiteList',
      publicExportIps: 'PublicExportIps',
      publicIps: 'PublicIps',
      publicNetworkAccess: 'PublicNetworkAccess',
      publicWhiteList: 'PublicWhiteList',
      RDModule: 'RDModule',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      routerRules: 'RouterRules',
      scriptDeliverModule: 'ScriptDeliverModule',
      securityGroupIds: 'SecurityGroupIds',
      slaveVswitchId: 'SlaveVswitchId',
      startTime: 'StartTime',
      storage: 'Storage',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      webTerminalModule: 'WebTerminalModule',
      whiteListPolicies: 'WhiteListPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appOperationModule: 'string',
      authorizedSecurityGroups: { 'type': 'array', 'itemType': 'string' },
      bandwidth: 'string',
      bandwidthPackage: 'string',
      dbOperationModule: 'string',
      description: 'string',
      eniInstanceId: 'string',
      expireTime: 'number',
      HSMModule: 'string',
      IDaaSModule: 'string',
      instanceId: 'string',
      instanceStatus: 'string',
      internetEndpoint: 'string',
      intranetEndpoint: 'string',
      kmsSecretModule: 'string',
      licenseCode: 'string',
      modifyPasswordModule: 'string',
      networkProxyModule: 'string',
      ports: { 'type': 'array', 'itemType': DescribeInstanceAttributeResponseBodyInstanceAttributePorts },
      privateExportIps: { 'type': 'array', 'itemType': 'string' },
      privateWhiteList: { 'type': 'array', 'itemType': 'string' },
      publicExportIps: { 'type': 'array', 'itemType': 'string' },
      publicIps: { 'type': 'array', 'itemType': 'string' },
      publicNetworkAccess: 'boolean',
      publicWhiteList: { 'type': 'array', 'itemType': 'string' },
      RDModule: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      routerRules: { 'type': 'array', 'itemType': 'string' },
      scriptDeliverModule: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      slaveVswitchId: 'string',
      startTime: 'number',
      storage: 'number',
      vpcId: 'string',
      vswitchId: 'string',
      webTerminalModule: 'string',
      whiteListPolicies: { 'type': 'array', 'itemType': DescribeInstanceAttributeResponseBodyInstanceAttributeWhiteListPolicies },
    };
  }

  validate() {
    if(Array.isArray(this.authorizedSecurityGroups)) {
      $dara.Model.validateArray(this.authorizedSecurityGroups);
    }
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
    }
    if(Array.isArray(this.privateExportIps)) {
      $dara.Model.validateArray(this.privateExportIps);
    }
    if(Array.isArray(this.privateWhiteList)) {
      $dara.Model.validateArray(this.privateWhiteList);
    }
    if(Array.isArray(this.publicExportIps)) {
      $dara.Model.validateArray(this.publicExportIps);
    }
    if(Array.isArray(this.publicIps)) {
      $dara.Model.validateArray(this.publicIps);
    }
    if(Array.isArray(this.publicWhiteList)) {
      $dara.Model.validateArray(this.publicWhiteList);
    }
    if(Array.isArray(this.routerRules)) {
      $dara.Model.validateArray(this.routerRules);
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    if(Array.isArray(this.whiteListPolicies)) {
      $dara.Model.validateArray(this.whiteListPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The attributes of the instance.
   */
  instanceAttribute?: DescribeInstanceAttributeResponseBodyInstanceAttribute;
  /**
   * @remarks
   * The unique ID of the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 082FAB35-6AB9-4FD5-8750-D36673548E76
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceAttribute: 'InstanceAttribute',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceAttribute: DescribeInstanceAttributeResponseBodyInstanceAttribute,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceAttribute && typeof (this.instanceAttribute as any).validate === 'function') {
      (this.instanceAttribute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

