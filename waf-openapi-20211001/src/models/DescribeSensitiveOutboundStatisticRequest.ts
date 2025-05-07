// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveOutboundStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * >For hybrid cloud scenarios only, you can call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to query the hybrid cloud clusters.
   * 
   * @example
   * 428
   */
  clusterId?: string;
  /**
   * @remarks
   * The evaluation result. Valid values:
   * 
   * *   **report**: Risks exist in cross-border data transfer.
   * *   **none**: No risks exist in cross-border data transfer.
   * 
   * @example
   * report
   */
  detectionResult?: string;
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp displayed in UTC. Unit: seconds.
   * 
   * >  You can query only data of the previous month, previous 3 months, previous 6 months, previous 12 months, and data generated since January 1 of last year for compliance check. You must specify a valid time range.
   * 
   * @example
   * 1725966000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-0xldbqt****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the sorting field. Valid values:
   * 
   * *   **total_count** (default): total number of data entries
   * *   **outbound_count**: total number of data entries that are transferred across borders
   * 
   * @example
   * total_count
   */
  orderKey?: string;
  /**
   * @remarks
   * The sorting method. Valid values:
   * 
   * *   **desc** (default): in descending order
   * *   **asc**: in ascending order
   * 
   * @example
   * desc
   */
  orderWay?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the Web Application Firewall (WAF) instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland
   * *   **ap-southeast-1**: outside the Chinese mainland
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
   * The type of the sensitive data. Separate multiple types with commas (,).
   * 
   * >  You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported types of sensitive data. Only built-in types of sensitive data are supported for this operation.
   * 
   * @example
   * 1000,1001
   */
  sensitiveCode?: string;
  /**
   * @remarks
   * The sensitivity level. Valid values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
   * 
   * @example
   * high
   */
  sensitiveLevel?: string;
  /**
   * @remarks
   * The type of the information. Valid values:
   * 
   * *   **info** (default): full personal information
   * *   **sensitive**: sensitive personal information
   * 
   * @example
   * info
   */
  sensitiveType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp displayed in UTC. Unit: seconds.
   * 
   * >  You can query only data of the previous month, previous 3 months, previous 6 months, previous 12 months, and data generated since January 1 of last year for compliance check. You must specify a valid time range.
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

