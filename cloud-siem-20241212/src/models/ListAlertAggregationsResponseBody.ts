// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertAggregationsResponseBodyAlertAggregationsDefenseActionCounts extends $dara.Model {
  /**
   * @example
   * accesstoken
   */
  name?: string;
  /**
   * @example
   * 测试-前途系统AI
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
   * @example
   * http://domain.com/
   */
  name?: string;
  /**
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
  accountDisplayValues?: string[];
  accountIds?: string[];
  /**
   * @example
   * vendor_product:alibaba_cloud:sas
   */
  aggregationKey?: string;
  /**
   * @example
   * 5m-avg
   */
  aggregationType?: string;
  /**
   * @example
   * 25
   */
  alertCount?: number;
  attackStages?: string[];
  defenseActionCounts?: ListAlertAggregationsResponseBodyAlertAggregationsDefenseActionCounts[];
  /**
   * @example
   * 1785290308
   */
  firstTime?: number;
  /**
   * @example
   * 1785293908000
   */
  latestTime?: number;
  /**
   * @example
   * Test incident
   */
  primaryDisplayValue?: string;
  /**
   * @example
   * alibaba_cloud
   */
  primaryValue?: string;
  /**
   * @example
   * sas
   */
  secondaryValue?: string;
  sourceCodes?: string[];
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
  alertAggregations?: ListAlertAggregationsResponseBodyAlertAggregations[];
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
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

