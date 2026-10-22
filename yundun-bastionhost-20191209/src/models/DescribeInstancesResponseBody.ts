// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The total amount of AI credits.
   * 
   * @example
   * 1
   */
  aiCreditsTotal?: number;
  /**
   * @remarks
   * The used amount of AI credits.
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
   * The default bandwidth of the instance. Unit: MB/s.
   * 
   * @example
   * 60M
   */
  bandWidth?: number;
  /**
   * @remarks
   * The description of the Bastionhost instance.
   * 
   * @example
   * Test API
   */
  description?: string;
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
   * The image version of the Bastionhost instance.
   * 
   * @example
   * 3.2.41
   */
  imageVersion?: string;
  /**
   * @remarks
   * The instance ID of the Bastionhost.
   * 
   * @example
   * bastionhost-cn-78v1gh****
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the Bastionhost instance. Valid values:
   * 
   * - **PENDING**: Uninitialized
   * 
   * - **CREATING**: Creating 
   * 
   * - **RUNNING**: Running 
   * 
   * - **EXPIRED**: Expired 
   * 
   * - **CREATE_FAILED**: Creation failed
   * 
   * - **UPGRADING**: Upgrading
   * 
   * - **UPGRADE_FAILED**: Upgrade failed
   * 
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The public domain name of the Bastionhost instance.
   * 
   * @example
   * ******lwb-public.bastionhost.aliyuncs.com
   */
  internetEndpoint?: string;
  /**
   * @remarks
   * The private domain name of the Bastionhost instance.
   * 
   * @example
   * ******lwb.bastionhost.aliyuncs.com
   */
  intranetEndpoint?: string;
  /**
   * @remarks
   * Specifies whether the Bastionhost instance is a legacy instance. Valid values:
   * 
   * - **true**: The instance is a V2 or V3.1 series Bastionhost instance.
   * 
   * - **false**: The instance is a V3.2 series Bastionhost instance.
   * 
   * @example
   * false
   */
  legacy?: boolean;
  /**
   * @remarks
   * The license code of the Bastionhost instance.
   * 
   * @example
   * bhah_ent_50_asset
   */
  licenseCode?: string;
  /**
   * @remarks
   * The edition of the Bastionhost instance. Valid values:
   * 
   * - **cloudbastion**: Basic Edition
   * - **cloudbastion_ha**: Enterprise Dual-engine Edition
   * 
   * @example
   * cloudbastion_ha
   */
  planCode?: string;
  /**
   * @remarks
   * Specifies whether the Bastionhost instance can be accessed over the Internet. Valid values:
   * 
   * - **true**: The instance can be accessed over the Internet.
   * - **false**: The instance cannot be accessed over the Internet.
   * 
   * @example
   * true
   */
  publicNetworkAccess?: boolean;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Bastionhost instance belongs.
   * 
   * @example
   * g-acfm26ougi****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the secondary vSwitch associated with the Bastionhost instance.
   * 
   * @example
   * vsw-uf6j0u49poi8qr****
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
   * The ID of the VPC associated with the Bastionhost instance.
   * 
   * @example
   * vpc-bp1c85tzgqu1bf5b****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch associated with the Bastionhost instance.
   * 
   * @example
   * vsw-bp1xfwzzfti0kjbf****
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      aiCreditsTotal: 'AiCreditsTotal',
      aiCreditsUs: 'AiCreditsUs',
      aiOpsAuditStatus: 'AiOpsAuditStatus',
      bandWidth: 'BandWidth',
      description: 'Description',
      expireTime: 'ExpireTime',
      imageVersion: 'ImageVersion',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      internetEndpoint: 'InternetEndpoint',
      intranetEndpoint: 'IntranetEndpoint',
      legacy: 'Legacy',
      licenseCode: 'LicenseCode',
      planCode: 'PlanCode',
      publicNetworkAccess: 'PublicNetworkAccess',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      slaveVswitchId: 'SlaveVswitchId',
      startTime: 'StartTime',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiCreditsTotal: 'number',
      aiCreditsUs: 'number',
      aiOpsAuditStatus: 'string',
      bandWidth: 'number',
      description: 'string',
      expireTime: 'number',
      imageVersion: 'string',
      instanceId: 'string',
      instanceStatus: 'string',
      internetEndpoint: 'string',
      intranetEndpoint: 'string',
      legacy: 'boolean',
      licenseCode: 'string',
      planCode: 'string',
      publicNetworkAccess: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      slaveVswitchId: 'string',
      startTime: 'number',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of Bastionhost instances.
   */
  instances?: DescribeInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The ID of the request. The ID is a unique identifier generated by Alibaba Cloud for the request and can be used for troubleshooting.
   * 
   * @example
   * 61D36C55-AAFC-4678-8FAD-34FEF9E7182E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of Bastionhost instances returned.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstances },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

