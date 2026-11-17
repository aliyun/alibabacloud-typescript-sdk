// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAiEngineEventOperationsRequest extends $dara.Model {
  /**
   * @remarks
   * The event ID.
   * 
   * This parameter is required.
   * 
   * @example
   * EVT-20241025***109
   */
  eventId?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_dddsdf3*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries to return on each page during paging in a paged query. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for querying the next page. The value is the **NextToken** parameter value returned by the previous API call. You do not need to specify this parameter for the first query.
   * 
   * @example
   * AAAAAGBgV9tolsLfijC4wam2htS*****D/46H3X2wIS
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the WAF instance.
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
   * rg-de****
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

