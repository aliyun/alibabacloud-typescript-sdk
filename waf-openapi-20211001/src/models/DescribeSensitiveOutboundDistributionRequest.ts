// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveOutboundDistributionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * > This parameter applies only to hybrid cloud scenarios. You can call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to obtain hybrid cloud cluster information.
   * 
   * @example
   * 443
   */
  clusterId?: string;
  /**
   * @remarks
   * The end time of the query. The time is in the UNIX timestamp format (UTC). Unit: seconds.
   * 
   * > Compliance audit currently supports querying data for the last 1 month, last 3 months, last 6 months, last 12 months, and from January 1 of the previous year to the present. The query time range must fall within the supported intervals. **StartTime** must not be earlier than the start time of the corresponding interval. If the time range exceeds the supported range, the query fails.
   * > This parameter is optional. The default value is the current time.
   * 
   * @example
   * 1725966000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-tl32ast****
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
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The start time of the query. The time is in the UNIX timestamp format (UTC). Unit: seconds.
   * 
   * > Compliance audit currently supports querying data for the last 1 month, last 3 months, last 6 months, last 12 months, and from January 1 of the previous year to the present. The query time range must fall within the supported intervals. **StartTime** must not be earlier than the start time of the corresponding interval. If the time range exceeds the supported range, the query fails.
   * > This parameter is optional. The default value is one month before the current time.
   * 
   * @example
   * 1672502400
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTime: 'StartTime',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

