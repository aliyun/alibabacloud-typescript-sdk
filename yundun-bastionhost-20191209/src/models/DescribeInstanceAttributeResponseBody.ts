// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAttributeResponseBodyInstanceAttributePorts extends $dara.Model {
  /**
   * @remarks
   * The custom port defined by the user.
   * 
   * > Only SSH and RDP ports can be modified. If no custom O&M port is configured for the bastion host, the value is the same as the standard port.
   * 
   * @example
   * 600xx
   */
  customPort?: number;
  /**
   * @remarks
   * The standard port of the bastion host. Valid values:
   * 
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
   * The IP address whitelist to configure. A maximum of 50 IP addresses are supported. Separate multiple IP addresses with commas (,).
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
  aiCreditStatus?: string;
  aiOpsModule?: string;
  /**
   * @remarks
   * The application O&M module. Valid values: Enable (enabled) and Disable (disabled).
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
   * The total bandwidth of the bastion host instance.
   * 
   * @example
   * 30
   */
  bandwidth?: string;
  /**
   * @remarks
   * The extended bandwidth package of the bastion host.
   * 
   * @example
   * 5
   */
  bandwidthPackage?: string;
  /**
   * @remarks
   * The status of the database O&M feature.
   * - **Enable**: Database O&M is supported.
   * - **Disable**: Database O&M is not supported.
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
   * The ID of the elastic network interface (ENI). An ENI is a virtual network interface controller (NIC) that can be attached to the bastion host instance.
   * 
   * @example
   * eni-bp1455jrzwm7moaxxxxx
   */
  eniInstanceId?: string;
  /**
   * @remarks
   * The timestamp when the bastion host instance expires. Unit: milliseconds.
   * 
   * @example
   * 1578326400000
   */
  expireTime?: number;
  /**
   * @remarks
   * The status of the HSM hardware encryption module. Indicates whether the bastion host is integrated with HSM.
   */
  HSMModule?: string;
  /**
   * @remarks
   * The IDaaS integration module. Valid values: Enable (enabled) and Disable (disabled).
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
   * 
   * - **PENDING**: Not initialized.
   * - **CREATING**: Being created. 
   * - **RUNNING**: Running. 
   * - **EXPIRED**: Expired. 
   * - **CREATE_FAILED**: Creation failed.
   * - **UPGRADING**: Being upgraded.
   * - **UPGRADE_FAILED**: Upgrade failed.
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
   * The KMS Secrets Manager integration module. Valid values: Enable (enabled) and Disable (disabled).
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
   * The status of the password change task feature.
   * 
   * - **Enable**: Enabled.
   * - **Disable**: Disabled.
   * 
   * @example
   * Enable
   */
  modifyPasswordModule?: string;
  /**
   * @remarks
   * The status of the network domain proxy feature.
   * - **Enable**: The network domain proxy mode is supported.
   * - **Disable**: The network domain proxy mode is not supported.
   * 
   * @example
   * Enable
   */
  networkProxyModule?: string;
  /**
   * @remarks
   * The O&M ports of the bastion host.
   */
  ports?: DescribeInstanceAttributeResponseBodyInstanceAttributePorts[];
  /**
   * @remarks
   * The list of internal egress IP addresses of the bastion host.
   */
  privateExportIps?: string[];
  /**
   * @remarks
   * The list of IP addresses in the internal whitelist.
   */
  privateWhiteList?: string[];
  /**
   * @remarks
   * The list of public egress IP addresses of the bastion host.
   */
  publicExportIps?: string[];
  /**
   * @remarks
   * The list of public IP addresses of the bastion host.
   */
  publicIps?: string[];
  /**
   * @remarks
   * Indicates whether the bastion host instance is accessible over the Internet. Valid values:
   * 
   * - **true**: The bastion host is accessible over the Internet.
   * - **false**: The bastion host is not accessible over the Internet.
   * 
   * @example
   * true
   */
  publicNetworkAccess?: boolean;
  /**
   * @remarks
   * The public whitelist of the bastion host.
   */
  publicWhiteList?: string[];
  /**
   * @remarks
   * The multi-account module. Valid values: Enable (enabled) and Disable (disabled).
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
   * The list of rules for the bastion host instance.
   */
  routerRules?: string[];
  /**
   * @remarks
   * The script O&M module. Valid values: Enable (enabled) and Disable (disabled).
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
   * The ID of the secondary vSwitch associated with the bastion host instance.
   * 
   * @example
   * vsw-uf6cmnae7hu5****
   */
  slaveVswitchId?: string;
  /**
   * @remarks
   * The timestamp when the bastion host instance was purchased or renewed. Unit: milliseconds.
   * 
   * @example
   * 1577681345000
   */
  startTime?: number;
  /**
   * @remarks
   * The total storage capacity of the purchased bastion host. Unit: bytes.
   * 
   * @example
   * 2199023255552
   */
  storage?: number;
  /**
   * @remarks
   * The VPC ID associated with the instance.
   * 
   * @example
   * vpc-bp1c85tzgqu1bf5bxxxxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The vSwitch ID associated with the instance.
   * 
   * @example
   * vsw-bp1xfwzzfti0kjbfxxxxx
   */
  vswitchId?: string;
  /**
   * @remarks
   * The status of the Web Terminal feature.
   * - **Enable**: Web remote connection is supported.
   * - **Disable**: Web remote connection is not supported.
   * 
   * @example
   * Enable
   */
  webTerminalModule?: string;
  /**
   * @remarks
   * The IP address whitelist to configure.
   */
  whiteListPolicies?: DescribeInstanceAttributeResponseBodyInstanceAttributeWhiteListPolicies[];
  static names(): { [key: string]: string } {
    return {
      aiCreditStatus: 'AiCreditStatus',
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
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use this ID to troubleshoot issues.
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

