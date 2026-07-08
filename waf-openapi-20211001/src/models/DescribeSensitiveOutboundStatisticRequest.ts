// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveOutboundStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * 
   * > This parameter is available only for hybrid cloud scenarios. Call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to query information about hybrid cloud clusters.
   * 
   * @example
   * 428
   */
  clusterId?: string;
  /**
   * @remarks
   * The assessment result. Valid values:
   * 
   * - **report**: a data outbound transfer threat exists.
   * 
   * - **none**: no data outbound transfer threat exists.
   * 
   * @example
   * report
   */
  detectionResult?: string;
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp that is in UTC. Unit: seconds.
   * 
   * > The compliance assessment feature supports querying data from the last month, the last 3 months, the last 6 months, the last 12 months, and from January 1 of the previous year to the present. Make sure that the time range is valid.
   * 
   * @example
   * 1725966000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-0xldbqt****
   */
  instanceId?: string;
  /**
   * @remarks
   * The field to use for sorting. Valid values:
   * 
   * - **total_count**: sorts by the total number of personal information data entries. This is the default value.
   * 
   * - **outbound_count**: sorts by the total number of outbound transfer data entries.
   * 
   * @example
   * total_count
   */
  orderKey?: string;
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * - **desc**: descending order. This is the default value.
   * 
   * - **asc**: ascending order.
   * 
   * @example
   * desc
   */
  orderWay?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * The type of sensitive data. Separate multiple types with commas (,).
   * 
   * > Call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to obtain the supported sensitive data types. This parameter supports only built-in sensitive data types.
   * 
   * @example
   * 1000,1001
   */
  sensitiveCode?: string;
  /**
   * @remarks
   * The sensitivity level. Valid values:
   * 
   * - **high**: high.
   * 
   * - **medium**: medium.
   * 
   * - **low**: low.
   * 
   * @example
   * high
   */
  sensitiveLevel?: string;
  /**
   * @remarks
   * The type of information to query. Valid values:
   * 
   * - **info**: all personal information. This is the default value.
   * 
   * - **sensitive**: only sensitive personal information.
   * 
   * @example
   * info
   */
  sensitiveType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. This value is a UNIX timestamp that is in UTC. Unit: seconds.
   * 
   * > The compliance assessment feature supports querying data from the last month, the last 3 months, the last 6 months, the last 12 months, and from January 1 of the previous year to the present. Make sure that the time range is valid.
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

