// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAiEngineEventsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * api.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * EVT-20261025109
   */
  eventId?: string;
  /**
   * @remarks
   * The number of nodes included in the event.
   * 
   * @example
   * 10
   */
  eventNodeCount?: number;
  /**
   * @remarks
   * The event handling status.
   * 
   * @example
   * unhandled
   */
  handleStatus?: string;
  /**
   * @remarks
   * The protected object.
   * 
   * @example
   * resource-api-example
   */
  resource?: string;
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The source account of the attack.
   * 
   * @example
   * account-demo-***
   */
  sourceAccount?: string;
  /**
   * @remarks
   * The source fingerprint of the attack.
   * 
   * @example
   * fingerprint-demo-***
   */
  sourceFingerprint?: string;
  /**
   * @remarks
   * The source IP address of the attack.
   * 
   * @example
   * 203.0.113.109
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      eventId: 'eventId',
      eventNodeCount: 'eventNodeCount',
      handleStatus: 'handleStatus',
      resource: 'resource',
      riskLevel: 'riskLevel',
      sourceAccount: 'sourceAccount',
      sourceFingerprint: 'sourceFingerprint',
      sourceIp: 'sourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      eventId: 'string',
      eventNodeCount: 'number',
      handleStatus: 'string',
      resource: 'string',
      riskLevel: 'string',
      sourceAccount: 'string',
      sourceFingerprint: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAiEngineEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. The time is in the UNIX timestamp format (UTC time) and accurate to seconds. Events are filtered based on the most recent discovery time. The end time must be later than the start time.
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
  filter?: DescribeAiEngineEventsRequestFilter;
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
   * The response language.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The maximum number of entries to return per page during paging in a paged query. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. The value is the **NextToken** parameter value returned by the previous API call. You do not need to specify this parameter for the first query.
   * 
   * @example
   * AAAAAGBgV9tolsLfijC4wam2htS*****D/46H3X2wIS
   */
  nextToken?: string;
  /**
   * @remarks
   * The region where the WAF instance resides.
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
   * The search value, used in conjunction with SearchKey. Maximum length: 256 characters.
   * 
   * @example
   * testKey
   */
  seachValue?: string;
  /**
   * @remarks
   * The search field, used in conjunction with SeachValue.
   * 
   * @example
   * eventName
   */
  searchKey?: string;
  /**
   * @remarks
   * The sort field.
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
   * The start time. The time is in the UNIX timestamp format (UTC time) and accurate to seconds. Events are filtered based on the most recent discovery time. You can query data from the last 30 days.
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
      filter: 'Filter',
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
      filter: DescribeAiEngineEventsRequestFilter,
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
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

