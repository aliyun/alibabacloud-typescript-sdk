// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContainerDefenseRuleResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The total number of clusters.
   * 
   * @example
   * 1
   */
  clusterCount?: number;
  /**
   * @remarks
   * The clusters specified in the rule.
   * 
   * @example
   * cfb41a8**8a106
   */
  clusterIdList?: string;
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * defense rule.
   */
  description?: string;
  /**
   * @remarks
   * The action specified in the rule. Valid values:
   * 
   * *   **1**: alert
   * *   **2**: block
   * 
   * @example
   * 1
   */
  ruleAction?: number;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 181
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * test-rule-01
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * *   **1**: enabled
   * *   **0**: disabled
   * 
   * @example
   * 0
   */
  ruleSwitch?: number;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   **1**: system rule
   * *   **2**: custom rule
   * 
   * @example
   * 1
   */
  ruleType?: number;
  static names(): { [key: string]: string } {
    return {
      clusterCount: 'ClusterCount',
      clusterIdList: 'ClusterIdList',
      description: 'Description',
      ruleAction: 'RuleAction',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleSwitch: 'RuleSwitch',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterCount: 'number',
      clusterIdList: 'string',
      description: 'string',
      ruleAction: 'number',
      ruleId: 'number',
      ruleName: 'string',
      ruleSwitch: 'number',
      ruleType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerDefenseRuleResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 9
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The key of the last data entry.
   * 
   * @example
   * CAESGgo***jE2NDc4NjE=
   */
  lastRowKey?: string;
  /**
   * @remarks
   * The query credential.
   * 
   * @example
   * B60***
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 45
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      lastRowKey: 'LastRowKey',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      lastRowKey: 'string',
      nextToken: 'string',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerDefenseRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The rules.
   */
  list?: ListContainerDefenseRuleResponseBodyList[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListContainerDefenseRuleResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5E3A63BA-***843
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      list: 'List',
      message: 'Message',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      list: { 'type': 'array', 'itemType': ListContainerDefenseRuleResponseBodyList },
      message: 'string',
      pageInfo: ListContainerDefenseRuleResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

