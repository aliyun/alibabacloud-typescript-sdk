// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FilterUsersRequestOrderParam extends $dara.Model {
  /**
   * @remarks
   * The field by which to sort the results.
   * 
   * @example
   * id
   */
  orderField?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * DESC
   */
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      orderField: 'OrderField',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderField: 'string',
      orderType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersRequestPropertyFilterParam extends $dara.Model {
  /**
   * @remarks
   * The property ID.
   * 
   * @example
   * 328
   */
  propertyId?: number;
  /**
   * @remarks
   * The property value ID.
   * 
   * @example
   * 1255
   */
  propertyValueIds?: string;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyValueIds: 'PropertyValueIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyValueIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersRequestPropertyKeyValueFilterParam extends $dara.Model {
  /**
   * @remarks
   * The property key.
   * 
   * @example
   * job
   */
  propertyKey?: string;
  /**
   * @remarks
   * The property value.
   * 
   * @example
   * dev
   */
  propertyValues?: string;
  static names(): { [key: string]: string } {
    return {
      propertyKey: 'PropertyKey',
      propertyValues: 'PropertyValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyKey: 'string',
      propertyValues: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The channel.
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * The usernames (`EndUserId`) to exclude by exact match.
   */
  excludeEndUserIds?: string[];
  /**
   * @remarks
   * The string for a fuzzy search on the username (`EndUserId`) and email address (`Email`). The wildcard character (`*`) is supported. For example, if you set this parameter to `a*m`, the query returns all results where the username or email address starts with `a` and ends with `m`.
   * 
   * @example
   * a*m
   */
  filter?: string;
  filterMap?: { [key: string]: string };
  /**
   * @remarks
   * Specifies whether to return the number of cloud desktops that are assigned to the user.
   * 
   * @example
   * true
   */
  includeDesktopCount?: boolean;
  /**
   * @remarks
   * Specifies whether to return the number of desktop groups that are assigned to the user.
   * 
   * @example
   * false
   */
  includeDesktopGroupCount?: boolean;
  includeEndUserIds?: string[];
  /**
   * @remarks
   * Specifies whether to include organization information in the response.
   */
  includeOrgInfo?: boolean;
  /**
   * @remarks
   * Specifies whether to include the supported logon types in the response.
   */
  includeSupportIdps?: boolean;
  /**
   * @remarks
   * Specifies whether to query all sub-organizations.
   */
  isQueryAllSubOrgs?: boolean;
  /**
   * @remarks
   * The number of entries per page. If you specify a value greater than 100, the system automatically sets this parameter to 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. If the number of results exceeds the value of the `MaxResults` parameter, a `NextToken` is returned. You can use the `NextToken` to query the next page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The sorting parameters.
   */
  orderParam?: FilterUsersRequestOrderParam;
  /**
   * @remarks
   * The organization ID.
   * 
   * @example
   * org-aliyun-wy-org-id
   */
  orgId?: string;
  /**
   * @remarks
   * The account activation type.
   * 
   * @example
   * Normal
   */
  ownerType?: string;
  /**
   * @remarks
   * The user properties for a fuzzy search.
   */
  propertyFilterParam?: FilterUsersRequestPropertyFilterParam[];
  /**
   * @remarks
   * The information about property keys and property values.
   */
  propertyKeyValueFilterParam?: FilterUsersRequestPropertyKeyValueFilterParam[];
  showExtras?: { [key: string]: string };
  /**
   * @remarks
   * The user status by which to filter the results.
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      excludeEndUserIds: 'ExcludeEndUserIds',
      filter: 'Filter',
      filterMap: 'FilterMap',
      includeDesktopCount: 'IncludeDesktopCount',
      includeDesktopGroupCount: 'IncludeDesktopGroupCount',
      includeEndUserIds: 'IncludeEndUserIds',
      includeOrgInfo: 'IncludeOrgInfo',
      includeSupportIdps: 'IncludeSupportIdps',
      isQueryAllSubOrgs: 'IsQueryAllSubOrgs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderParam: 'OrderParam',
      orgId: 'OrgId',
      ownerType: 'OwnerType',
      propertyFilterParam: 'PropertyFilterParam',
      propertyKeyValueFilterParam: 'PropertyKeyValueFilterParam',
      showExtras: 'ShowExtras',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
      excludeEndUserIds: { 'type': 'array', 'itemType': 'string' },
      filter: 'string',
      filterMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      includeDesktopCount: 'boolean',
      includeDesktopGroupCount: 'boolean',
      includeEndUserIds: { 'type': 'array', 'itemType': 'string' },
      includeOrgInfo: 'boolean',
      includeSupportIdps: 'boolean',
      isQueryAllSubOrgs: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      orderParam: FilterUsersRequestOrderParam,
      orgId: 'string',
      ownerType: 'string',
      propertyFilterParam: { 'type': 'array', 'itemType': FilterUsersRequestPropertyFilterParam },
      propertyKeyValueFilterParam: { 'type': 'array', 'itemType': FilterUsersRequestPropertyKeyValueFilterParam },
      showExtras: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.excludeEndUserIds)) {
      $dara.Model.validateArray(this.excludeEndUserIds);
    }
    if(this.filterMap) {
      $dara.Model.validateMap(this.filterMap);
    }
    if(Array.isArray(this.includeEndUserIds)) {
      $dara.Model.validateArray(this.includeEndUserIds);
    }
    if(this.orderParam && typeof (this.orderParam as any).validate === 'function') {
      (this.orderParam as any).validate();
    }
    if(Array.isArray(this.propertyFilterParam)) {
      $dara.Model.validateArray(this.propertyFilterParam);
    }
    if(Array.isArray(this.propertyKeyValueFilterParam)) {
      $dara.Model.validateArray(this.propertyKeyValueFilterParam);
    }
    if(this.showExtras) {
      $dara.Model.validateMap(this.showExtras);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

