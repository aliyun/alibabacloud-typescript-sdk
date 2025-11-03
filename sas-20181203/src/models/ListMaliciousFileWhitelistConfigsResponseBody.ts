// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMaliciousFileWhitelistConfigsResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The number of the assets on which the rule takes effect.
   * 
   * >  The value of this parameter is returned only if the value of TargetType is SELECTION_KEY.
   * 
   * @example
   * ALL
   */
  count?: string;
  /**
   * @remarks
   * The name of the alert.
   * 
   * *   The value is fixed as ALL, which indicates all alert types.
   * 
   * @example
   * ALL
   */
  eventName?: string;
  /**
   * @remarks
   * The field that is used in the whitelist rule.
   * 
   * @example
   * fileMd5
   */
  field?: string;
  /**
   * @remarks
   * The value of the field that is used in the whitelist rule.
   * 
   * @example
   * b2cf9747ee49d8d9b105cf16e078cc16
   */
  fieldValue?: string;
  /**
   * @remarks
   * The time when the rule was created.
   * 
   * @example
   * 1691719662000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the rule was modified.
   * 
   * @example
   * 1691719662000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The logical operator of the whitelist rule.
   * 
   * *   The value is fixed as strEqual, which indicates the equality operator (=).
   * 
   * @example
   * strEqual
   */
  operator?: string;
  remark?: string;
  /**
   * @remarks
   * The feature to which this operation belongs.
   * 
   * *   The value is fixed as agentless, which indicates the agentless detection feature.
   * 
   * @example
   * agentless
   */
  source?: string;
  /**
   * @remarks
   * The type of the assets on which the rule takes effect. Valid values:
   * 
   * *   ALL: all assets
   * *   SELECTION_KEY: selected assets
   * 
   * @example
   * ALL
   */
  targetType?: string;
  /**
   * @remarks
   * The assets on which the rule takes effect. Valid values:
   * 
   * *   ALL: all assets
   * *   Others: selected assets
   * 
   * @example
   * ALL
   */
  targetValue?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      eventName: 'EventName',
      field: 'Field',
      fieldValue: 'FieldValue',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      operator: 'Operator',
      remark: 'Remark',
      source: 'Source',
      targetType: 'TargetType',
      targetValue: 'TargetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      eventName: 'string',
      field: 'string',
      fieldValue: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      operator: 'string',
      remark: 'string',
      source: 'string',
      targetType: 'string',
      targetValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMaliciousFileWhitelistConfigsResponseBodyPageInfo extends $dara.Model {
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
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
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
   * 29
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
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

export class ListMaliciousFileWhitelistConfigsResponseBody extends $dara.Model {
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
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The alert whitelist rules of sensitive files that are detected by using the agentless detection feature.
   */
  list?: ListMaliciousFileWhitelistConfigsResponseBodyList[];
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
  pageInfo?: ListMaliciousFileWhitelistConfigsResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F5CF78A7-30AA-59DB-847F-13EE3AE7****
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
      list: { 'type': 'array', 'itemType': ListMaliciousFileWhitelistConfigsResponseBodyList },
      message: 'string',
      pageInfo: ListMaliciousFileWhitelistConfigsResponseBodyPageInfo,
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

