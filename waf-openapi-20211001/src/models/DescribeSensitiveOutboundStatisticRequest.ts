// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveOutboundStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * > This parameter is only applicable to hybrid cloud scenarios. You can call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to query the information about hybrid cloud clusters.
   * 
   * @example
   * 428
   */
  clusterId?: string;
  /**
   * @remarks
   * The assessment result. Valid values:
   * - **report**: Outbound data risks exist.
   * - **none**: No outbound data risks exist.
   * 
   * @example
   * report
   */
  detectionResult?: string;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in UTC. Unit: seconds.
   * > Compliance audit currently supports querying data for the last 1 month, last 3 months, last 6 months, last 12 months, and from January 1 of the previous year to the present. Make sure that the specified time range is valid.
   * 
   * @example
   * 1725966000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the WAF instance.
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-0xldbqt****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the field used for sorting. Valid values:
   * - **total_count**: the total number of data records (default)
   * - **outbound_count**: the total number of outbound data records
   * 
   * @example
   * total_count
   */
  orderKey?: string;
  /**
   * @remarks
   * The sorting method. Valid values:
   * - **desc**: descending order (default)
   * - **asc**: ascending order
   * 
   * @example
   * desc
   */
  orderWay?: string;
  /**
   * @remarks
   * The number of the page to return in a paging query. Default value: **1**, which indicates the first page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page in a paging query. Default value: **10**, which indicates 10 entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * - **cn-hangzhou**: the Chinese mainland
   * - **ap-southeast-1**: outside the Chinese mainland
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
   * The sensitive data types. Separate multiple sensitive data types with commas (,).
   * > You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported sensitive data types. This parameter only supports built-in sensitive data types.
   * 
   * @example
   * 1000,1001
   */
  sensitiveCode?: string;
  /**
   * @remarks
   * The sensitivity level. Valid values: 
   * - **high**: high sensitivity
   * - **medium**: medium sensitivity
   * - **low**: low sensitivity
   * 
   * @example
   * high
   */
  sensitiveLevel?: string;
  /**
   * @remarks
   * The type of information to query. Valid values: 
   * - **info**: all personal information (default)
   * - **sensitive**: only sensitive personal information
   * 
   * @example
   * info
   */
  sensitiveType?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in UTC. Unit: seconds.
   * > Compliance audit currently supports querying data for the last 1 month, last 3 months, last 6 months, last 12 months, and from January 1 of the previous year to the present. Make sure that the specified time range is valid.
   * 
   * @example
   * 1672502400
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      detectionResult: 'DetectionResult',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      orderKey: 'OrderKey',
      orderWay: 'OrderWay',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      sensitiveCode: 'SensitiveCode',
      sensitiveLevel: 'SensitiveLevel',
      sensitiveType: 'SensitiveType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      detectionResult: 'string',
      endTime: 'number',
      instanceId: 'string',
      orderKey: 'string',
      orderWay: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      sensitiveCode: 'string',
      sensitiveLevel: 'string',
      sensitiveType: 'string',
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

