// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupsWithAuthDetailsResponseBodyAuthDetailsAuthOfResourceGroups extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the user has permissions on the resource group for the specified resource type.
   * 
   * @example
   * true
   */
  hasPermission?: boolean;
  /**
   * @remarks
   * The resource group ID.
   * 
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
  /**
   * @remarks
   * Indicates whether the user has account-level authorization for this resource type.
   */
  accountScopeAuth?: boolean;
  /**
   * @remarks
   * The permission details for the resource groups on the specified resource types.
   */
  authOfResourceGroups?: ListResourceGroupsWithAuthDetailsResponseBodyAuthDetailsAuthOfResourceGroups[];
  /**
   * @remarks
   * The resource type.
   * 
   * You can obtain the resource type from the **Resource type** column in [Services that work with Resource Group](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud service.
   * 
   * You can obtain the ID from the **Service code** column in [Services that work with Resource Group](https://help.aliyun.com/document_detail/94479.html).
   * 
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
   * @remarks
   * The tag key.
   * 
   * @example
   * k1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
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
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource group belongs.
   * 
   * @example
   * 123456789****
   */
  accountId?: string;
  /**
   * @remarks
   * The time when the resource group was created. The time is displayed in UTC.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The display name of the resource group.
   * 
   * @example
   * my-project
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of your Alibaba Cloud resource group.
   * 
   * @example
   * rg-9gLOoK****
   */
  id?: string;
  /**
   * @remarks
   * The unique identifier of the resource group.
   * 
   * @example
   * my-project
   */
  name?: string;
  /**
   * @remarks
   * The status of the resource group. Valid values:
   * 
   * *   Creating: The resource group is being created.
   * *   OK: The resource group is created.
   * *   PendingDelete: The resource group is waiting to be deleted.
   * 
   * @example
   * OK
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
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
  /**
   * @remarks
   * The authorization details for resource groups.
   */
  authDetails?: ListResourceGroupsWithAuthDetailsResponseBodyAuthDetails[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
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
  /**
   * @remarks
   * The information of the resource groups.
   */
  resourceGroups?: ListResourceGroupsWithAuthDetailsResponseBodyResourceGroups[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
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

