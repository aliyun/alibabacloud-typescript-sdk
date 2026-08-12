// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * The hybrid cloud cluster ID.
   * > This parameter applies only to hybrid cloud scenarios. You can call [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) to obtain hybrid cloud cluster information.
   * 
   * @example
   * 428
   */
  clusterId?: string;
  /**
   * @remarks
   * The end of the time range to query, in UNIX timestamp (UTC) format. Unit: seconds.
   * 
   * > Only data within the last month can be queried. **StartTime** cannot be earlier than one month before the current time. The query fails if the value is out of the supported range.
   * > This parameter is optional. Default value: the current time.
   * 
   * @example
   * 1725966000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the WAF instance.
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0xldbq****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number to return in a paged query. Default value: **1**, which indicates the first page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Default value: **10**, which indicates 10 entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The beginning of the time range to query, in UNIX timestamp (UTC) format. Unit: seconds.
   * 
   * > Only data within the last month can be queried. **StartTime** cannot be earlier than one month before the current time. The query fails if the value is out of the supported range.
   * > This parameter is optional. Default value: one month before the current time.
   * 
   * @example
   * 1672502400
   */
  startTime?: number;
  /**
   * @remarks
   * The type of data statistics. Valid values:
   * - **ip**: IP address statistics.
   * - **host**: domain name statistics.
   * - **sensitive_code**: sensitive data type statistics.
   * - **api**: sensitive data API statistics.
   * 
   * @example
   * ip
   */
  statisticType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTime: 'StartTime',
      statisticType: 'StatisticType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      endTime: 'number',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      startTime: 'number',
      statisticType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

