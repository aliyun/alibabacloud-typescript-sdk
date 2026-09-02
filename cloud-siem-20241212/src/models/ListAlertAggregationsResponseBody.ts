// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertAggregationsResponseBodyAlertAggregationsDefenseActionCounts extends $dara.Model {
  /**
   * @remarks
   * The display name of the entity attribute field that can be added to the whitelist.
   * 
   * @example
   * accesstoken
   */
  name?: string;
  /**
   * @remarks
   * The default right-hand value displayed for the whitelist rule.
   * 
   * @example
   * Test-FutureSystemAI
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertAggregationsResponseBodyAlertAggregationsStatusCounts extends $dara.Model {
  /**
   * @remarks
   * The display name of the entity attribute field that can be added to the whitelist.
   * 
   * @example
   * http://domain.com/
   */
  name?: string;
  /**
   * @remarks
   * The right-hand value.
   * 
   * @example
   * 123.123.123.123
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertAggregationsResponseBodyAlertAggregations extends $dara.Model {
  /**
   * @remarks
   * The list of account display values associated with the aggregation group, in one-to-one correspondence with AccountIds. When the username is valid and differs from the account ID, the format is "username/account ID". Otherwise, only the account ID is returned.
   */
  accountDisplayValues?: string[];
  /**
   * @remarks
   * The list of member accounts IDs for which the report is generated. You need to specify this parameter only when you generate a multi-account report and want to limit the report to specific member accounts.
   */
  accountIds?: string[];
  /**
   * @remarks
   * The unique identifier of the aggregation group, which is a concatenation of AggregationType, PrimaryValue, and SecondaryValue joined by colons (:). The last segment is empty if no secondary aggregation value exists.
   * 
   * @example
   * vendor_product:alibaba_cloud:sas
   */
  aggregationKey?: string;
  /**
   * @remarks
   * The aggregation method.
   * 
   * @example
   * 5m-avg
   */
  aggregationType?: string;
  /**
   * @remarks
   * The number of consecutive failures. This parameter is optional.
   * 
   * @example
   * 25
   */
  alertCount?: number;
  /**
   * @remarks
   * The collection of MITRE ATT&CK attack techniques associated with alerts in the aggregation group. Each element is a JSON array string.
   */
  attackStages?: string[];
  /**
   * @remarks
   * The quantity distribution by defense action within the aggregation group. Name is the action field value, and Value is the corresponding alert count.
   */
  defenseActionCounts?: ListAlertAggregationsResponseBodyAlertAggregationsDefenseActionCounts[];
  /**
   * @remarks
   * The time of the first access, represented as a UNIX timestamp in seconds.
   * 
   * @example
   * 1785290308
   */
  firstTime?: number;
  /**
   * @remarks
   * The most recent time when the attack event occurred.
   * 
   * @example
   * 1785293908000
   */
  latestTime?: number;
  /**
   * @remarks
   * The display text of the primary aggregation value. For account aggregation, the format is "username/account ID". If no valid username exists, only the account ID is returned. For event summaries, the event name is returned based on the Lang parameter. If the name is missing, the event UUID is returned.
   * 
   * @example
   * Test incident
   */
  primaryDisplayValue?: string;
  /**
   * @remarks
   * The value corresponding to the primary query condition.
   * 
   * @example
   * alibaba_cloud
   */
  primaryValue?: string;
  /**
   * @remarks
   * The value corresponding to the secondary query condition.
   * 
   * @example
   * sas
   */
  secondaryValue?: string;
  /**
   * @remarks
   * The collection of event source codes.
   * 
   * > Example: [\\\\\\"MRM\\\\\\"]
   */
  sourceCodes?: string[];
  /**
   * @remarks
   * The quantity distribution by alert status within the aggregation group. Name is the alert status value, and Value is the corresponding alert count.
   */
  statusCounts?: ListAlertAggregationsResponseBodyAlertAggregationsStatusCounts[];
  static names(): { [key: string]: string } {
    return {
      accountDisplayValues: 'AccountDisplayValues',
      accountIds: 'AccountIds',
      aggregationKey: 'AggregationKey',
      aggregationType: 'AggregationType',
      alertCount: 'AlertCount',
      attackStages: 'AttackStages',
      defenseActionCounts: 'DefenseActionCounts',
      firstTime: 'FirstTime',
      latestTime: 'LatestTime',
      primaryDisplayValue: 'PrimaryDisplayValue',
      primaryValue: 'PrimaryValue',
      secondaryValue: 'SecondaryValue',
      sourceCodes: 'SourceCodes',
      statusCounts: 'StatusCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDisplayValues: { 'type': 'array', 'itemType': 'string' },
      accountIds: { 'type': 'array', 'itemType': 'string' },
      aggregationKey: 'string',
      aggregationType: 'string',
      alertCount: 'number',
      attackStages: { 'type': 'array', 'itemType': 'string' },
      defenseActionCounts: { 'type': 'array', 'itemType': ListAlertAggregationsResponseBodyAlertAggregationsDefenseActionCounts },
      firstTime: 'number',
      latestTime: 'number',
      primaryDisplayValue: 'string',
      primaryValue: 'string',
      secondaryValue: 'string',
      sourceCodes: { 'type': 'array', 'itemType': 'string' },
      statusCounts: { 'type': 'array', 'itemType': ListAlertAggregationsResponseBodyAlertAggregationsStatusCounts },
    };
  }

  validate() {
    if(Array.isArray(this.accountDisplayValues)) {
      $dara.Model.validateArray(this.accountDisplayValues);
    }
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    if(Array.isArray(this.attackStages)) {
      $dara.Model.validateArray(this.attackStages);
    }
    if(Array.isArray(this.defenseActionCounts)) {
      $dara.Model.validateArray(this.defenseActionCounts);
    }
    if(Array.isArray(this.sourceCodes)) {
      $dara.Model.validateArray(this.sourceCodes);
    }
    if(Array.isArray(this.statusCounts)) {
      $dara.Model.validateArray(this.statusCounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertAggregationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of alert groups returned based on the specified aggregation method, sorted by alert count in descending order.
   */
  alertAggregations?: ListAlertAggregationsResponseBodyAlertAggregations[];
  /**
   * @remarks
   * The maximum number of entries returned in this request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 57
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      alertAggregations: 'AlertAggregations',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertAggregations: { 'type': 'array', 'itemType': ListAlertAggregationsResponseBodyAlertAggregations },
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alertAggregations)) {
      $dara.Model.validateArray(this.alertAggregations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

