// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAttributeResponseBodyInstanceAttributePorts extends $dara.Model {
  /**
   * @remarks
   * The custom port.
   * > Only SSH and RDP ports can be modified. If no custom O&M port is specified for the Bastionhost instance, the standard port is returned.
   * 
   * @example
   * 600xx
   */
  customPort?: number;
  /**
   * @remarks
   * The standard port of the Bastionhost instance. Valid values:
   * - **SSH**: 60022
   * - **RDP**: 63389
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
   * The IP address whitelist to be configured. You can configure up to 50 IP addresses. Separate multiple IP addresses with commas (,).
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
   * The AI credit status (Available/Exhausted).
   * 
   * @example
   * Available
   */
  aiCreditStatus?: string;
  /**
   * @remarks
   * The total number of AI credits in the package.
   * 
   * @example
   * 1
   */
  aiCreditsTotal?: number;
  /**
   * @remarks
   * The number of used AI credits in the package.
   * 
   * @example
   * 1
   */
  aiCreditsUs?: number;
  /**
   * @remarks
   * The AI O&M audit status.
   * 
   * @example
   * Disabled
   */
  aiOpsAuditStatus?: string;
  /**
   * @remarks
   * The switch status of the intelligent O&M module (Enable/Disable).
   * 
   * @example
   * Enable
   */
  aiOpsModule?: string;
  /**
   * @remarks
   * The application O&M module. Valid values: Enable and Disable.
   * 
   * @example
   * Enable
   */
  appOperationModule?: string;
  /**
   * @remarks
   * The list of authorized security group IDs.
   */
  authorizedSecurityGroups?: string[];
  /**
   * @remarks
   * The total bandwidth of the Bastionhost instance.
   * 
   * @example
   * 30
   */
  bandwidth?: string;
  /**
   * @remarks
   * The extended bandwidth plan of the Bastionhost instance.
   * 
   * @example
   * 5
   */
  bandwidthPackage?: string;
  /**
   * @remarks
   * The database O&M status. Valid values:
   * - **Enable**: Database O&M is supported.
   * - **Disable**: Database O&M is not supported.
   * 
   * @example
   * Disable
   */
  dbOperationModule?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Test API
   */
  description?: string;
  /**
   * @remarks
   * The ID of the elastic network interface controller (NIC).
   * 
   * @example
   * eni-bp1455jrzwm7moaxxxxx
   */
  eniInstanceId?: string;
  /**
   * @remarks
   * The expiration timestamp of the Bastionhost instance. Unit: milliseconds.
   * 
   * @example
   * 1578326400000
   */
  expireTime?: number;
  /**
   * @remarks
   * The status of the HSM hardware encryption module. Indicates whether the Bastionhost instance is integrated with an HSM.
   */
  HSMModule?: string;
  /**
   * @remarks
   * The IDaaS integration module. Valid values: Enable and Disable.
   * 
   * @example
   * Enable
   */
  IDaaSModule?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * bastionhost-cn-78v1ghxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * - **PENDING**: Uninitialized.
   * - **CREATING**: Creating.
   * - **RUNNING**: Running.
   * - **EXPIRED**: Expired.
   * - **CREATE_FAILED**: Creation failed.
   * - **UPGRADING**: Upgrading or downgrading.
   * - **UPGRADE_FAILED**: Upgrade or downgrade failed.
   * 
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The public domain name.
   * 
   * @example
   * ******lwb-public.bastionhost.aliyuncs.com
   */
  internetEndpoint?: string;
  /**
   * @remarks
   * The internal domain name.
   * 
   * @example
   * ******xalwb.bastionhost.aliyuncs.com
   */
  intranetEndpoint?: string;
  /**
   * @remarks
   * The KMS Secrets Manager integration module. Valid values: Enable and Disable.
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
   * The status of the password change task feature. Valid values:
   * - **Enable**: Enabled.
   * - **Disable**: Disabled.
   * 
   * @example
   * Enable
   */
  modifyPasswordModule?: string;
  /**
   * @remarks
   * The network domain proxy status. Valid values:
   * - **Enable**: The network domain proxy mode is supported.
   * - **Disable**: The network domain proxy mode is not supported.
   * 
   * @example
   * Enable
   */
  networkProxyModule?: string;
  /**
   * @remarks
   * The O&M ports of the Bastionhost instance.
   */
  ports?: DescribeInstanceAttributeResponseBodyInstanceAttributePorts[];
  /**
   * @remarks
   * The list of internal outbound IP addresses of the Bastionhost instance.
   */
  privateExportIps?: string[];
  /**
   * @remarks
   * The list of IP addresses in the internal network whitelist.
   */
  privateWhiteList?: string[];
  /**
   * @remarks
   * The list of public outbound IP addresses of the Bastionhost instance.
   */
  publicExportIps?: string[];
  /**
   * @remarks
   * The list of public IP addresses of the Bastionhost instance.
   */
  publicIps?: string[];
  /**
   * @remarks
   * Indicates whether the Bastionhost instance can be accessed over the Internet. Valid values:
   * - **true**: The Bastionhost instance can be accessed over the Internet.
   * - **false**: The Bastionhost instance cannot be accessed over the Internet.
   * 
   * @example
   * true
   */
  publicNetworkAccess?: boolean;
  /**
   * @remarks
   * The list of IP addresses in the public network whitelist of the Bastionhost instance.
   */
  publicWhiteList?: string[];
  /**
   * @remarks
   * The multi-account module. Valid values: Enable and Disable.
   * 
   * @example
   * Enable
   */
  RDModule?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-aekzc427db******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of rules for the Bastionhost instance.
   */
  routerRules?: string[];
  /**
   * @remarks
   * The script O&M module. Valid values: Enable and Disable.
   * 
   * @example
   * Enable
   */
  scriptDeliverModule?: string;
  /**
   * @remarks
   * The list of security group IDs to which the instance belongs.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The ID of the secondary vSwitch bound to the Bastionhost instance.
   * 
   * @example
   * vsw-uf6cmnae7hu5****
   */
  slaveVswitchId?: string;
  /**
   * @remarks
   * The timestamp when the Bastionhost instance was purchased or renewed. Unit: milliseconds.
   * 
   * @example
   * 1577681345000
   */
  startTime?: number;
  /**
   * @remarks
   * The total purchased storage capacity of the Bastionhost instance. Unit: bytes.
   * 
   * @example
   * 2199023255552
   */
  storage?: number;
  /**
   * @remarks
   * The ID of the VPC to which the instance is connected.
   * 
   * @example
   * vpc-bp1c85tzgqu1bf5bxxxxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the instance is connected.
   * 
   * @example
   * vsw-bp1xfwzzfti0kjbfxxxxx
   */
  vswitchId?: string;
  /**
   * @remarks
   * The Web Terminal status. Valid values:
   * - **Enable**: Web remote connection is supported.
   * - **Disable**: Web remote connection is not supported.
   * 
   * @example
   * Enable
   */
  webTerminalModule?: string;
  /**
   * @remarks
   * The IP address whitelist to be configured.
   */
  whiteListPolicies?: DescribeInstanceAttributeResponseBodyInstanceAttributeWhiteListPolicies[];
  static names(): { [key: string]: string } {
    return {
      aiCreditStatus: 'AiCreditStatus',
      aiCreditsTotal: 'AiCreditsTotal',
      aiCreditsUs: 'AiCreditsUs',
      aiOpsAuditStatus: 'AiOpsAuditStatus',
      aiOpsModule: 'AiOpsModule',
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
      aiCreditStatus: 'string',
      aiCreditsTotal: 'number',
      aiCreditsUs: 'number',
      aiOpsAuditStatus: 'string',
      aiOpsModule: 'string',
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
   * The instance attribute information.
   */
  instanceAttribute?: DescribeInstanceAttributeResponseBodyInstanceAttribute;
  /**
   * @remarks
   * The request ID.
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

