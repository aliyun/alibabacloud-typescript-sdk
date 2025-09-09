// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstances extends $dara.Model {
  bandWidth?: number;
  /**
   * @remarks
   * The remarks of the bastion host.
   * 
   * @example
   * Test API
   */
  description?: string;
  /**
   * @remarks
   * The timestamp when the bastion host expires. Unit: milliseconds.
   * 
   * @example
   * 1578326400000
   */
  expireTime?: number;
  /**
   * @remarks
   * The image version of the bastion host.
   * 
   * @example
   * 3.0.0
   */
  imageVersion?: string;
  /**
   * @remarks
   * The bastion host ID.
   * 
   * @example
   * bastionhost-cn-78v1gh****
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the bastion host. Valid values:
   * 
   * *   **PENDING**: The bastion host is not initialized.
   * *   **CREATING**: The bastion host is being created.
   * *   **RUNNING**: The bastion host is running.
   * *   **EXPIRED**: The bastion host expired.
   * *   **CREATE_FAILED**: The bastion host fails to be created.
   * *   **UPGRADING**: The configurations of the bastion host are being changed.
   * *   **UPGRADE_FAILED**: The configurations of the bastion host fail to be changed.
   * 
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The public O\\&M address of the bastion host.
   * 
   * @example
   * drawvxalwb-public.bastionhost.aliyuncs.com
   */
  internetEndpoint?: string;
  /**
   * @remarks
   * The private O\\&M address of the bastion host.
   * 
   * @example
   * drawvxalwb.bastionhost.aliyuncs.com
   */
  intranetEndpoint?: string;
  /**
   * @remarks
   * Indicates whether the bastion host runs an earlier version. Valid values:
   * 
   * *   **true**: The bastion host runs V2 or V3.1.
   * *   **false**: The bastion host runs V3.2.
   * 
   * @example
   * false
   */
  legacy?: boolean;
  /**
   * @remarks
   * The license code of the bastion host.
   * 
   * @example
   * bhah_ent_50_asset
   */
  licenseCode?: string;
  /**
   * @remarks
   * The edition of the bastion host. Valid values:
   * 
   * *   **cloudbastion**: Basic Edition.
   * *   **cloudbastion_ha**: Enterprise Edition.
   * 
   * @example
   * cloudbastion_ha
   */
  planCode?: string;
  /**
   * @remarks
   * Indicates whether the bastion host can be accessed from the Internet. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  publicNetworkAccess?: boolean;
  /**
   * @remarks
   * The region ID of the bastion host.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the bastion host belongs.
   * 
   * @example
   * g-acfm26ougi****
   */
  resourceGroupId?: string;
  slaveVswitchId?: string;
  /**
   * @remarks
   * The timestamp when the bastion host is purchased or renewed. Unit: milliseconds.
   * 
   * @example
   * 1577681345000
   */
  startTime?: number;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the bastion host belongs.
   * 
   * @example
   * vpc-bp1c85tzgqu1bf5b****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the bastion host belongs.
   * 
   * @example
   * vsw-bp1xfwzzfti0kjbf****
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
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
   * An array that consists of the bastion hosts returned.
   */
  instances?: DescribeInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 61D36C55-AAFC-4678-8FAD-34FEF9E7182E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of bastion hosts that are queried.
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

