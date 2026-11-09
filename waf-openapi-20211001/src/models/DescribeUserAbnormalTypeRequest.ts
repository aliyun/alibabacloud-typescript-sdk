// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserAbnormalTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the hybrid cloud cluster. 
   * > This parameter applies only to hybrid cloud scenarios. You can call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to obtain the hybrid cloud cluster information.
   * 
   * @example
   * 993
   */
  clusterId?: string;
  /**
   * @remarks
   * The end time of the query, in UNIX timestamp format (UTC). Unit: seconds.
   * 
   * @example
   * 1726113600
   */
  endTime?: number;
  /**
   * @remarks
   * Instance ID of the WAF instance. 
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query instance ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-g4***201
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-ac***lani
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The start time of the query, in UNIX timestamp format (UTC). Unit: seconds.
   * 
   * @example
   * 1723435200
   */
  startTime?: number;
  /**
   * @remarks
   * The list of statuses for risk statistics.
   * 
   * > By default, risk data in the **toBeConfirmed**, **toBeFixed**, **toBeVerified**, and **notFixed** states is collected.
   */
  userStatusList?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTime: 'StartTime',
      userStatusList: 'UserStatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      endTime: 'number',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      startTime: 'number',
      userStatusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userStatusList)) {
      $dara.Model.validateArray(this.userStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

