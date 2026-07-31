// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePostpayBillsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. The value is a UNIX timestamp (UTC). Unit: seconds.
   * 
   * @example
   * 1779195599
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
   * waf-cn-zz11sr5****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries per page for a paged query.
   * 
   * @example
   * 24
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. If a next page exists, this field has a return value.
   * 
   * > If this parameter has a return value, a next page exists. Use the returned **NextToken** as a request parameter to obtain the next page of data. Repeat until no value is returned, which indicates that all data has been retrieved.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The statistical period type for billing.
   * 
   * @example
   * hour
   */
  periodType?: string;
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
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The start time. The value is a UNIX timestamp (UTC). Unit: seconds.
   * 
   * @example
   * 1779120000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      periodType: 'PeriodType',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      periodType: 'string',
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

