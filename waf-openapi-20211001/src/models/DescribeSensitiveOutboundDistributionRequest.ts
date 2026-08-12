// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveOutboundDistributionRequest extends $dara.Model {
  /**
   * @remarks
   * The hybrid cloud cluster ID.
   * > This parameter applies only to hybrid cloud scenarios. You can call [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) to obtain hybrid cloud cluster information.
   * 
   * @example
   * 443
   */
  clusterId?: string;
  /**
   * @remarks
   * The end time of the query. Specify the value as a UNIX timestamp (UTC). Unit: seconds.
   * 
   * > Compliance audit currently supports querying data only for the last 1 month, last 3 months, last 6 months, last 12 months, or from January 1 of the previous year to the present. The query time range must fall within one of these supported intervals. **StartTime** must not be earlier than the start time of the corresponding interval. The query fails if the time range exceeds the supported scope.
   * > This parameter is optional. Default value: the current time.
   * 
   * @example
   * 1725966000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-tl32ast****
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
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The start time of the query. Specify the value as a UNIX timestamp (UTC). Unit: seconds.
   * 
   * > Compliance audit currently supports querying data only for the last 1 month, last 3 months, last 6 months, last 12 months, or from January 1 of the previous year to the present. The query time range must fall within one of these supported intervals. **StartTime** must not be earlier than the start time of the corresponding interval. The query fails if the time range exceeds the supported scope.
   * > This parameter is optional. Default value: 1 month before the current time.
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

