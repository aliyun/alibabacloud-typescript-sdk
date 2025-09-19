// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityEventMarkMissListResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 176618589410****
   */
  aliUid?: number;
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
   * login_common_location
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
   * The ID of the rule.
   * 
   * @example
   * 104037
   */
  id?: number;
  /**
   * @remarks
   * The instance ID of the server.
   * 
   * @example
   * rm-bp1e8t4q15sr3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name of the asset.
   * 
   * @example
   * sql-test-001
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 8.210.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server.
   * 
   * @example
   * 172.25.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The operator. Valid values:
   * 
   * - **contains**: contains
   * - **notContains**: does not contain
   * - **strEqual**: equals
   * - **strNotEqual**: does not equal
   * - **regex**: regular expression
   * 
   * @example
   * contains
   */
  operate?: string;
  /**
   * @remarks
   * The UUID of the asset.
   * 
   * @example
   * 49e25e0f-bb51-4a5a-a1b3-13a4ddaa****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      eventName: 'EventName',
      eventNameOriginal: 'EventNameOriginal',
      eventType: 'EventType',
      eventTypeOriginal: 'EventTypeOriginal',
      field: 'Field',
      fieldValue: 'FieldValue',
      filedAliasName: 'FiledAliasName',
      id: 'Id',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      operate: 'Operate',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      eventName: 'string',
      eventNameOriginal: 'string',
      eventType: 'string',
      eventTypeOriginal: 'string',
      field: 'string',
      fieldValue: 'string',
      filedAliasName: 'string',
      id: 'number',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      operate: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventMarkMissListResponseBodyPageInfo extends $dara.Model {
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
   * The number of entries per page. Default value: **20**.
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
   * 200
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

export class DescribeSecurityEventMarkMissListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the rule.
   */
  list?: DescribeSecurityEventMarkMissListResponseBodyList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeSecurityEventMarkMissListResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 24A20733-10A0-4AF6-BE6B-E3322413BB68
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeSecurityEventMarkMissListResponseBodyList },
      pageInfo: DescribeSecurityEventMarkMissListResponseBodyPageInfo,
      requestId: 'string',
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

