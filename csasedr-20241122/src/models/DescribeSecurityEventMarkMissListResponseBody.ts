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
   * The ID of the Endpoint Detection and Response (EDR) asset scope associated with the alert rule. You can call the DescribeAssetScope operation to query the corresponding scope.
   * 
   * @example
   * 1932
   */
  assetScopeId?: number;
  /**
   * @remarks
   * The disposal method of the rule. The current operation does not assign a value to this field. Valid values:
   * 
   * - **auto_add_white**: Automatic whitelisting.
   * - **defense_not_notification**: Defense only without notification.
   * 
   * @example
   * auto_add_white
   */
  disposalWay?: string;
  /**
   * @remarks
   * The display text of the alert name.
   * 
   * @example
   * Untrusted process startup
   */
  eventName?: string;
  /**
   * @remarks
   * The original identifier of the alert name.
   * 
   * @example
   * SASE non-whitelist startup interception_PC
   */
  eventNameOriginal?: string;
  /**
   * @remarks
   * The display name of the alerting type.
   * 
   * @example
   * Precise defense
   */
  eventType?: string;
  /**
   * @remarks
   * The original identifier of the alerting type.
   * 
   * @example
   * Precise defense
   */
  eventTypeOriginal?: string;
  /**
   * @remarks
   * The name of the rule matching field. The field used when creating a rule is subject to the corresponding FiledName returned by DescribeSecurityEventOperations.
   * 
   * @example
   * cmd
   */
  field?: string;
  /**
   * @remarks
   * The rule matching value, which defines the matching condition together with Field and Operate.
   * 
   * @example
   * C:\\Windows\\System32\\RuntimeBroker.exe -Embedding
   */
  fieldValue?: string;
  /**
   * @remarks
   * The alias of the whitelisting field.
   * 
   * @example
   * Command line
   */
  filedAliasName?: string;
  /**
   * @remarks
   * **[Deprecated]** This field is deprecated.
   * 
   * @example
   * 1775095792000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * **[Deprecated]** This field is deprecated.
   * 
   * @example
   * 1780539705000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The number of hits for the alert whitelist rule.
   * 
   * @example
   * 10
   */
  hitCount?: number;
  /**
   * @remarks
   * The ID of the alert whitelist rule.
   * 
   * @example
   * 104037
   */
  id?: number;
  /**
   * @remarks
   * The instance identity of the terminal or asset.
   * 
   * @example
   * c208107c-3b39-4fc1-bbdb-************
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name of the asset.
   * 
   * @example
   * iZ0rqjt4wqw****
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the terminal or asset.
   * 
   * @example
   * 8.210.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the terminal or asset.
   * 
   * @example
   * 172.25.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The rule matching operator. The available operators for a specific field are subject to the corresponding SupportedMisTypes field returned by DescribeSecurityEventOperations. The following shared operators are available, but not all fields support all values:
   * 
   * - **contains**: Contains.
   * - **notContains**: Does not contain.
   * - **strEqual**: Equal to.
   * - **strNotEqual**: Not equal to.
   * - **regex**: Regular expression match.
   * 
   * @example
   * strEqual
   */
  operate?: string;
  /**
   * @remarks
   * The UUID of the asset instance. For rules associated with an asset scope, the effective scope is identified by AssetScopeId, and the UUID of the target asset is not returned.
   * 
   * @example
   * inet-pc-c6641e3e-2646-4688-ac38-************
   */
  uuid?: string;
  /**
   * @remarks
   * The list of UUIDs of associated assets. Multiple values are separated by commas (,). The current operation does not assign a value to this field.
   * 
   * @example
   * inet-pc-c6641e3e-2646-4688-ac38-************
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      assetScopeId: 'AssetScopeId',
      disposalWay: 'DisposalWay',
      eventName: 'EventName',
      eventNameOriginal: 'EventNameOriginal',
      eventType: 'EventType',
      eventTypeOriginal: 'EventTypeOriginal',
      field: 'Field',
      fieldValue: 'FieldValue',
      filedAliasName: 'FiledAliasName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hitCount: 'HitCount',
      id: 'Id',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      operate: 'Operate',
      uuid: 'Uuid',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      assetScopeId: 'number',
      disposalWay: 'string',
      eventName: 'string',
      eventNameOriginal: 'string',
      eventType: 'string',
      eventTypeOriginal: 'string',
      field: 'string',
      fieldValue: 'string',
      filedAliasName: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      hitCount: 'number',
      id: 'number',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      operate: 'string',
      uuid: 'string',
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

export class DescribeSecurityEventMarkMissListResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of whitelist rules on the current page.
   * 
   * @example
   * 9
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of whitelist rules to return on each page in a paging query. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of queried whitelist rules.
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
   * The list of whitelist rules.
   */
  list?: DescribeSecurityEventMarkMissListResponseBodyList[];
  /**
   * @remarks
   * The maximum number of records to return in a single query. This field is reserved for compatibility. The backend currently uses CurrentPage and PageSize for pagination.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * N6hiD08qrLdwJ9Fh0qdsJD61D5V7sa12H194Q1******
   */
  nextToken?: string;
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeSecurityEventMarkMissListResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request. It is a unique identifier generated by Alibaba Cloud for the request and can be used for troubleshooting.
   * 
   * @example
   * 24A20733-10A0-4AF6-BE6B-E3322413BB68
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeSecurityEventMarkMissListResponseBodyList },
      maxResults: 'number',
      nextToken: 'string',
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

