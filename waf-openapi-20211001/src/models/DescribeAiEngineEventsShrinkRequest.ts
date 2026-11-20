// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAiEngineEventsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. The time is a UNIX timestamp in UTC. Unit: seconds. The data is filtered based on the time when the event was last detected. The end time must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1793059200
   */
  endTime?: number;
  /**
   * @remarks
   * The filter conditions. Exact match is used, and multiple conditions are connected by the AND logical operator.
   * 
   * @example
   * {"riskLevel":"high","resource":"resource-api-example"}
   */
  filterShrink?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_dddsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the response.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The number of entries to return on each page in a paging query. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. The value is the **NextToken** parameter value returned by the previous API call. You do not need to specify this parameter for the first query.
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
   * rg-****mo
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The search value. This parameter is used together with SearchKey. Maximum length: 256 characters.
   * 
   * @example
   * testKey
   */
  seachValue?: string;
  /**
   * @remarks
   * The search field. This parameter is used together with SeachValue.
   * 
   * @example
   * eventName
   */
  searchKey?: string;
  /**
   * @remarks
   * The field by which to sort the results.
   * 
   * @example
   * last_seen
   */
  sortBy?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * desc
   */
  sortOrder?: string;
  /**
   * @remarks
   * The start time. The time is a UNIX timestamp in UTC. Unit: seconds. The data is filtered based on the time when the event was last detected. You can query data within the last 30 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 1792972800
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      filterShrink: 'Filter',
      instanceId: 'InstanceId',
      language: 'Language',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      seachValue: 'SeachValue',
      searchKey: 'SearchKey',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      filterShrink: 'string',
      instanceId: 'string',
      language: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      seachValue: 'string',
      searchKey: 'string',
      sortBy: 'string',
      sortOrder: 'string',
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

