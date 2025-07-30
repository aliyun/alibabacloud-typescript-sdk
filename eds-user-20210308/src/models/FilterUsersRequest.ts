// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FilterUsersRequestOrderParam extends $dara.Model {
  /**
   * @remarks
   * The field that you want to sort by.
   * 
   * Valid values:
   * 
   * *   EndUserId: the username.
   * *   id: the ID of the primary key.
   * *   gmt_created: the creation time.
   * 
   * @example
   * id
   */
  orderField?: string;
  /**
   * @remarks
   * The direction of the sort.
   * 
   * Valid values:
   * 
   * *   ASC: the ascending order.
   * *   DESC (default): the descending order.
   * 
   * @example
   * ASC
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
   * The ID of the property.
   * 
   * @example
   * 123
   */
  propertyId?: number;
  /**
   * @remarks
   * The IDs of the property values.
   * 
   * @example
   * test
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
   * The property name.
   * 
   * @example
   * job
   */
  propertyKey?: string;
  /**
   * @remarks
   * The property values.
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
   * The list of usernames to be precisely excluded.
   */
  excludeEndUserIds?: string[];
  /**
   * @remarks
   * The string that is used for fuzzy search. You can use usernames and email addresses to perform fuzzy search. Wildcard characters (\\*) are supported for this parameter. For example, if you set this parameter to a\\*m, the usernames or an email addresses that start with a or end with m are returned.
   * 
   * @example
   * test
   */
  filter?: string;
  /**
   * @remarks
   * Specifies whether to return the number of cloud desktops that are assigned to the convenience user.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  includeDesktopCount?: boolean;
  /**
   * @remarks
   * Specifies whether to return the number of cloud desktop pools that are assigned to the convenience user.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * false
   */
  includeDesktopGroupCount?: boolean;
  includeOrgInfo?: boolean;
  includeSupportIdps?: boolean;
  isQueryAllSubOrgs?: boolean;
  /**
   * @remarks
   * The number of entries per page. If you set this parameter to a value greater than 100, the system resets the value to 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. If not all results are returned in a query, a value is returned for the NextToken parameter. In this case, you can use the returned NextToken value to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The parameter that might affect the sorting logic.
   */
  orderParam?: FilterUsersRequestOrderParam;
  /**
   * @remarks
   * The ID of the organization.
   * 
   * @example
   * org-aliyun-wy-org-id
   */
  orgId?: string;
  /**
   * @remarks
   * The activation type of the convenience account.
   * 
   * Valid values:
   * 
   * *   CreateFromManager: administrator-activated.
   * *   Normal: user-activated.
   * 
   * @example
   * Normal
   */
  ownerType?: string;
  /**
   * @remarks
   * The list of properties for fuzzy search.
   */
  propertyFilterParam?: FilterUsersRequestPropertyFilterParam[];
  /**
   * @remarks
   * The list of property names and property values.
   */
  propertyKeyValueFilterParam?: FilterUsersRequestPropertyKeyValueFilterParam[];
  status?: number;
  static names(): { [key: string]: string } {
    return {
      excludeEndUserIds: 'ExcludeEndUserIds',
      filter: 'Filter',
      includeDesktopCount: 'IncludeDesktopCount',
      includeDesktopGroupCount: 'IncludeDesktopGroupCount',
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
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeEndUserIds: { 'type': 'array', 'itemType': 'string' },
      filter: 'string',
      includeDesktopCount: 'boolean',
      includeDesktopGroupCount: 'boolean',
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
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.excludeEndUserIds)) {
      $dara.Model.validateArray(this.excludeEndUserIds);
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

