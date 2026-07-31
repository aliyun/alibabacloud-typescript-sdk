// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserEventTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * > This parameter applies only to hybrid cloud scenarios. You can call [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) to obtain hybrid cloud cluster information.
   * 
   * @example
   * 976
   */
  clusterId?: string;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp (UTC) in seconds.
   * 
   * @example
   * 1726113600
   */
  endTime?: number;
  /**
   * @remarks
   * The dimension of the security event.
   * 
   * @example
   * ip
   */
  eventScope?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-5y***h0t
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance is deployed. Valid values:
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
   * The Alibaba Cloud resource group ID.
   * 
   * @example
   * rg-aek***ktt3y
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp (UTC) in seconds.
   * 
   * @example
   * 1723435200
   */
  startTime?: number;
  /**
   * @remarks
   * The list of statuses for security event statistics.
   * >By default, security event data in the **toBeConfirmed**, **confirmed**, and **actioned** statuses is included in the statistics.
   */
  userStatusList?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      eventScope: 'EventScope',
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
      eventScope: 'string',
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

