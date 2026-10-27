// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryGroupedSecurityEventMarkMissListResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 31412647
   */
  aliUid?: number;
  /**
   * @remarks
   * The handling method. Valid values:
   * 
   * *   **auto_add_white**: Automatically Added to Whitelist
   * *   **defense_not_notification**: Defense Without Notification
   * 
   * @example
   * auto_add_white
   */
  disposalWay?: string;
  /**
   * @remarks
   * The name of the alert event. The value indicates a subtype.
   * 
   * @example
   * Login with unusual location
   */
  eventName?: string;
  /**
   * @remarks
   * The name of the alert event. The value indicates a type.
   * 
   * @example
   * login_common_location
   */
  eventNameOriginal?: string;
  /**
   * @remarks
   * The subtype of the alert event.
   * 
   * @example
   * Unusual Logon
   */
  eventType?: string;
  /**
   * @remarks
   * The type of the alert event.
   * 
   * @example
   * Unusual logon
   */
  eventTypeOriginal?: string;
  /**
   * @remarks
   * The field that is used in the whitelist rule.
   * 
   * @example
   * type
   */
  field?: string;
  /**
   * @remarks
   * The value of the field.
   * 
   * @example
   * root
   */
  fieldValue?: string;
  /**
   * @remarks
   * The alias of the field.
   * 
   * @example
   * Logon Time
   */
  filedAliasName?: string;
  /**
   * @remarks
   * The operator. Valid values:
   * 
   * *   **contains**: contains
   * *   **notContains**: does not contain
   * *   **strEqual**: equals
   * *   **strNotEqual**: does not equal
   * *   **regex**: regular expression
   * 
   * @example
   * contains
   */
  operate?: string;
  /**
   * @remarks
   * The UUIDs of assets. Multiple UUIDs are separated by commas (,).
   * 
   * @example
   * 6985b88c-eb19-4d27-98ad-e4a42312****,5721d503-9b04-4243-89ca-1fb8ca5e****,db2678c3-10e3-4a20-92f1-265f6****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      disposalWay: 'DisposalWay',
      eventName: 'EventName',
      eventNameOriginal: 'EventNameOriginal',
      eventType: 'EventType',
      eventTypeOriginal: 'EventTypeOriginal',
      field: 'Field',
      fieldValue: 'FieldValue',
      filedAliasName: 'FiledAliasName',
      operate: 'Operate',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      disposalWay: 'string',
      eventName: 'string',
      eventNameOriginal: 'string',
      eventType: 'string',
      eventTypeOriginal: 'string',
      field: 'string',
      fieldValue: 'string',
      filedAliasName: 'string',
      operate: 'string',
      uuids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGroupedSecurityEventMarkMissListResponseBodyPageInfo extends $dara.Model {
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
   * The number of entries returned per page. Default value: **20**.
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
   * 69
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

export class QueryGroupedSecurityEventMarkMissListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned. The status code **200** indicates that the request is successful. Other status codes indicate that the request fails. You can identify the cause of the failure based on the status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * An array that consists of the whitelist rules.
   */
  list?: QueryGroupedSecurityEventMarkMissListResponseBodyList[];
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * There was an error with your request.
   */
  message?: string;
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: QueryGroupedSecurityEventMarkMissListResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 965F9282-D403-4FA2-B1B9-10F62DC719BF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
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
      list: { 'type': 'array', 'itemType': QueryGroupedSecurityEventMarkMissListResponseBodyList },
      message: 'string',
      pageInfo: QueryGroupedSecurityEventMarkMissListResponseBodyPageInfo,
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

