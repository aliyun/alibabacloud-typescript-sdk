// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupsResponseBodyResourceGroupsResourceGroupTagsTag extends $dara.Model {
  tagKey?: string;
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

export class ListResourceGroupsResponseBodyResourceGroupsResourceGroupTags extends $dara.Model {
  tag?: ListResourceGroupsResponseBodyResourceGroupsResourceGroupTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': ListResourceGroupsResponseBodyResourceGroupsResourceGroupTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponseBodyResourceGroupsResourceGroup extends $dara.Model {
  accountId?: string;
  createDate?: string;
  displayName?: string;
  id?: string;
  name?: string;
  status?: string;
  tags?: ListResourceGroupsResponseBodyResourceGroupsResourceGroupTags;
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
      tags: ListResourceGroupsResponseBodyResourceGroupsResourceGroupTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponseBodyResourceGroups extends $dara.Model {
  resourceGroup?: ListResourceGroupsResponseBodyResourceGroupsResourceGroup[];
  static names(): { [key: string]: string } {
    return {
      resourceGroup: 'ResourceGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroup: { 'type': 'array', 'itemType': ListResourceGroupsResponseBodyResourceGroupsResourceGroup },
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroup)) {
      $dara.Model.validateArray(this.resourceGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
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
   * The ID of the request.
   * 
   * @example
   * 4B450CA1-36E8-4AA2-8461-86B42BF4CC4E
   */
  requestId?: string;
  resourceGroups?: ListResourceGroupsResponseBodyResourceGroups;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resourceGroups: 'ResourceGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resourceGroups: ListResourceGroupsResponseBodyResourceGroups,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.resourceGroups && typeof (this.resourceGroups as any).validate === 'function') {
      (this.resourceGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

