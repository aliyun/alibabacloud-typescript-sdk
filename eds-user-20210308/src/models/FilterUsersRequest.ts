// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FilterUsersRequestOrderParam extends $dara.Model {
  /**
   * @remarks
   * The field by which to sort.
   * 
   * @example
   * id
   */
  orderField?: string;
  /**
   * @remarks
   * The sort order, which can be ascending or descending.
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
   * The ID of the attribute.
   * 
   * @example
   * 328
   */
  propertyId?: number;
  /**
   * @remarks
   * The IDs of the attribute values.
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
   * The name of the attribute.
   * 
   * @example
   * job
   */
  propertyKey?: string;
  /**
   * @remarks
   * The values of the attribute.
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
   * The list of usernames (EndUserIds) to exclude by exact match.
   */
  excludeEndUserIds?: string[];
  /**
   * @remarks
   * The fuzzy search string. This parameter supports matching the username (EndUserId) and email address (Email). Wildcards (*) are supported. For example, if you set this parameter to a*m, all results where the username or email address starts with a and ends with m are returned.
   * 
   * @example
   * a*m
   */
  filter?: string;
  /**
   * @remarks
   * The fuzzy match condition mapping for user information. This parameter supports fields such as the username, remarks, phone number, email address, nickname, and employee ID.
   */
  filterMap?: { [key: string]: string };
  /**
   * @remarks
   * Specifies whether to return the number of cloud computers assigned to the user.
   * 
   * @example
   * true
   */
  includeDesktopCount?: boolean;
  /**
   * @remarks
   * Specifies whether to return the number of cloud computer pools assigned to the user.
   * 
   * @example
   * false
   */
  includeDesktopGroupCount?: boolean;
  /**
   * @remarks
   * The list of convenience account usernames to include in the query results.
   */
  includeEndUserIds?: string[];
  /**
   * @remarks
   * Specifies whether to include organization information.
   */
  includeOrgInfo?: boolean;
  /**
   * @remarks
   * Specifies whether to include the supported logon types.
   */
  includeSupportIdps?: boolean;
  /**
   * @remarks
   * Specifies whether to query all sub-organizations.
   */
  isQueryAllSubOrgs?: boolean;
  /**
   * @remarks
   * The number of entries per page in a paged query. If the value exceeds 100, it is automatically reset to 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. You do not need to specify this parameter when you call this operation for the first time. If the response does not contain all results, a non-empty NextToken is returned. You can use the returned NextToken in subsequent queries to obtain the remaining results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The supported sorting parameters.
   */
  orderParam?: FilterUsersRequestOrderParam;
  /**
   * @remarks
   * The ID of the enterprise organization.
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
   * The list of user attributes for fuzzy queries.
   */
  propertyFilterParam?: FilterUsersRequestPropertyFilterParam[];
  /**
   * @remarks
   * The list of attribute names and attribute values.
   */
  propertyKeyValueFilterParam?: FilterUsersRequestPropertyKeyValueFilterParam[];
  /**
   * @remarks
   * The switch mapping for additional response information. This parameter controls whether to include desktop policy information.
   */
  showExtras?: { [key: string]: string };
  /**
   * @remarks
   * The user status used to filter results.
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

