// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupsWithAuthDetailsResponseBodyAuthDetailsAuthOfResourceGroups extends $dara.Model {
  /**
   * @example
   * true
   */
  hasPermission?: boolean;
  /**
   * @example
   * rg-aekzscexx6w3u2y
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      hasPermission: 'HasPermission',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasPermission: 'boolean',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsWithAuthDetailsResponseBodyAuthDetails extends $dara.Model {
  accountScopeAuth?: boolean;
  authOfResourceGroups?: ListResourceGroupsWithAuthDetailsResponseBodyAuthDetailsAuthOfResourceGroups[];
  /**
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @example
   * ecs
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      accountScopeAuth: 'AccountScopeAuth',
      authOfResourceGroups: 'AuthOfResourceGroups',
      resourceType: 'ResourceType',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountScopeAuth: 'boolean',
      authOfResourceGroups: { 'type': 'array', 'itemType': ListResourceGroupsWithAuthDetailsResponseBodyAuthDetailsAuthOfResourceGroups },
      resourceType: 'string',
      service: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authOfResourceGroups)) {
      $dara.Model.validateArray(this.authOfResourceGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsWithAuthDetailsResponseBodyResourceGroupsTags extends $dara.Model {
  /**
   * @example
   * k1
   */
  tagKey?: string;
  /**
   * @example
   * v1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsWithAuthDetailsResponseBodyResourceGroups extends $dara.Model {
  /**
   * @example
   * 123456789****
   */
  accountId?: string;
  /**
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @example
   * my-project
   */
  displayName?: string;
  /**
   * @example
   * rg-9gLOoK****
   */
  id?: string;
  /**
   * @example
   * my-project
   */
  name?: string;
  /**
   * @example
   * OK
   */
  status?: string;
  tags?: ListResourceGroupsWithAuthDetailsResponseBodyResourceGroupsTags[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      id: 'Id',
      name: 'Name',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      createDate: 'string',
      displayName: 'string',
      id: 'string',
      name: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListResourceGroupsWithAuthDetailsResponseBodyResourceGroupsTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsWithAuthDetailsResponseBody extends $dara.Model {
  authDetails?: ListResourceGroupsWithAuthDetailsResponseBodyAuthDetails[];
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
   * @remarks
   * The response parameters.
   * 
   * @example
   * 4141780B-4E3D-5D2A-A8F4-44D6D34F****
   */
  requestId?: string;
  resourceGroups?: ListResourceGroupsWithAuthDetailsResponseBodyResourceGroups[];
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      authDetails: 'AuthDetails',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resourceGroups: 'ResourceGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authDetails: { 'type': 'array', 'itemType': ListResourceGroupsWithAuthDetailsResponseBodyAuthDetails },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resourceGroups: { 'type': 'array', 'itemType': ListResourceGroupsWithAuthDetailsResponseBodyResourceGroups },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.authDetails)) {
      $dara.Model.validateArray(this.authDetails);
    }
    if(Array.isArray(this.resourceGroups)) {
      $dara.Model.validateArray(this.resourceGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

