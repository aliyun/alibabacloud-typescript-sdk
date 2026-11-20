// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveRequestsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * > This parameter is applicable only to hybrid cloud scenarios. You can call [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) to obtain the hybrid cloud cluster information.
   * 
   * @example
   * 269
   */
  clusterId?: string;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in UTC. Unit: seconds.
   * 
   * @example
   * 1725966000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the WAF instance.
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-0xldbqt****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number to return for a paged query. Default value: **1**, which indicates that the first page of paging is returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page for a paged query. Default value: 10, which indicates that 10 entries are returned on each page of paging.
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
   * rg-aekzwwkpn****5i
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The type of sensitive data.
   * > You can call [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) to obtain the supported sensitive data types.
   * 
   * @example
   * 1001
   */
  sensitiveCode?: number;
  /**
   * @remarks
   * The sensitive data.
   * 
   * @example
   * card
   */
  sensitiveData?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in UTC. Unit: seconds.
   * 
   * @example
   * 1723392000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      sensitiveCode: 'SensitiveCode',
      sensitiveData: 'SensitiveData',
      startTime: 'StartTime',
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
      sensitiveCode: 'number',
      sensitiveData: 'string',
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

