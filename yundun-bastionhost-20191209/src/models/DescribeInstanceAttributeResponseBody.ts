// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAttributeResponseBodyInstanceAttributePorts extends $dara.Model {
  /**
   * @remarks
   * The custom port.
   * 
   * > Only the SSH and RDP ports can be changed. If no custom O\\&M port is specified for the bastion host, the value of StandardPort is returned.
   * 
   * @example
   * 600xx
   */
  customPort?: number;
  /**
   * @remarks
   * The standard port of the bastion host. Valid values:
   * 
   * *   **SSH**: 60022.
   * *   **RDP**: 63389.
   * *   **HTTPS**: 443.
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
  description?: string;
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
  appOperationModule?: string;
  /**
   * @remarks
   * The IDs of authorized security groups.
   */
  authorizedSecurityGroups?: string[];
  /**
   * @remarks
   * The total bandwidth of the bastion host.
   * 
   * @example
   * 30
   */
  bandwidth?: string;
  /**
   * @remarks
   * The bandwidth plan ID.
   * 
   * @example
   * 5
   */
  bandwidthPackage?: string;
  /**
   * @remarks
   * The status of the database O&M feature.
   * 
   * @example
   * Disable
   */
  dbOperationModule?: string;
  /**
   * @remarks
   * The description of the instance.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the Elastic Network Interface (ENI).
   * 
   * @example
   * eni-bp1455jrzwm7moaxxxxx
   */
  eniInstanceId?: string;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * @example
   * 1578326400000
   */
  expireTime?: number;
  HSMModule?: string;
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
   * *   PENDING: The instance is not initialized.
   * *   CREATING: The instance is being created.
   * *   RUNNING: The instance is running.
   * *   EXPIRED: The instance expired.
   * *   CREATE_FAILED: The instance fails to be created.
   * *   UPGRADING: The configurations of the instance are being changed.
   * *   UPGRADE_FAILED: The configurations of the instance fail to be changed.
   * 
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The public endpoint.
   * 
   * @example
   * drawvxalwb-public.bastionhost.aliyuncs.com
   */
  internetEndpoint?: string;
  /**
   * @remarks
   * The private endpoint.
   * 
   * @example
   * drawvxalwb.bastionhost.aliyuncs.com
   */
  intranetEndpoint?: string;
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
   * The status of the automatic password change feature.
   * 
   * - **Enable**
   * - **Disable**
   * 
   * @example
   * Enable
   */
  modifyPasswordModule?: string;
  /**
   * @remarks
   * The status of the network domain feature.
   * 
   * - **Enable**
   * - **Disable**
   * 
   * @example
   * Enable
   */
  networkProxyModule?: string;
  /**
   * @remarks
   * An array that consists of the O&M ports of the bastion host.
   */
  ports?: DescribeInstanceAttributeResponseBodyInstanceAttributePorts[];
  /**
   * @remarks
   * An array that consists of the egress private IP addresses of the bastion host.
   */
  privateExportIps?: string[];
  /**
   * @remarks
   * The private IP addresses that are allowed to access the instance.
   */
  privateWhiteList?: string[];
  /**
   * @remarks
   * An array that consists of the egress public IP addresses of the bastion host.
   */
  publicExportIps?: string[];
  /**
   * @remarks
   * The public IP address.
   */
  publicIps?: string[];
  /**
   * @remarks
   * Indicates whether the Bastionhost instance can be accessed over the Internet.
   * 
   * @example
   * true
   */
  publicNetworkAccess?: boolean;
  /**
   * @remarks
   * The public IP addresses that are allowed to access the instance.
   */
  publicWhiteList?: string[];
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
   * rg-aekzc427dbl2shy
   */
  resourceGroupId?: string;
  routerRules?: string[];
  scriptDeliverModule?: string;
  /**
   * @remarks
   * The IDs of the security groups to which the instance belongs.
   */
  securityGroupIds?: string[];
  slaveVswitchId?: string;
  /**
   * @remarks
   * The time when the instance started.
   * 
   * @example
   * 1577681345000
   */
  startTime?: number;
  /**
   * @remarks
   * The storage capacity of the bastion host. Unit: bytes.
   * 
   * @example
   * 2199023255552
   */
  storage?: number;
  /**
   * @remarks
   * The ID of the VPC to which the instance belongs.
   * 
   * @example
   * vpc-bp1c85tzgqu1bf5bxxxxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the instance connects.
   * 
   * @example
   * vsw-bp1xfwzzfti0kjbfxxxxx
   */
  vswitchId?: string;
  /**
   * @remarks
   * The status of the web terminal.
   * 
   * - **Enable**
   * - **Disable**
   * 
   * @example
   * Enable
   */
  webTerminalModule?: string;
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
   * The attribute information about the bastion host.
   */
  instanceAttribute?: DescribeInstanceAttributeResponseBodyInstanceAttribute;
  /**
   * @remarks
   * The ID of the request.
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

