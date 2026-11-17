// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecSensitiveDomainStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * > This parameter applies only to hybrid cloud scenarios. You can call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to obtain hybrid cloud cluster information.
   * 
   * @example
   * 428
   */
  clusterId?: string;
  /**
   * @remarks
   * The end time in the UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1686895256
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The sorting order of the list. Valid values:
   * 
   * - asc: ascending order.
   * 
   * - desc: descending order.
   * 
   * @example
   * desc
   */
  orderWay?: string;
  /**
   * @remarks
   * The page number. Default value: **1**, which indicates that the first page is returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page. Default value: **5**, which indicates that each page contains 5 entries.
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
   * The start time in the UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1668496310
   */
  startTime?: number;
  /**
   * @remarks
   * The type of sensitive data. Valid values:
   * 
   * - request: sensitive data in requests.
   * 
   * - response: sensitive data in responses.
   * 
   * @example
   * request
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      orderWay: 'OrderWay',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      endTime: 'number',
      instanceId: 'string',
      orderWay: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      startTime: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

