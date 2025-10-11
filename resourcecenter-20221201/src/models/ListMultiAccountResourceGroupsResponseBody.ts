// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMultiAccountResourceGroupsResponseBodyResourceGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the management account or member of the resource directory.
   * 
   * @example
   * 1394339739****
   */
  accountId?: string;
  /**
   * @remarks
   * The time when the resource group was created.
   * 
   * @example
   * 2021-06-30T09:20:08Z
   */
  createDate?: string;
  /**
   * @remarks
   * The display name of the resource group.
   * 
   * @example
   * group1
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzawhxxc****
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
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      id: 'Id',
      name: 'Name',
      status: 'Status',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiAccountResourceGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAU5VsT9R1adMTuz9GzginZ3Y+7Y/5JATS+6q5GK9kT75
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0FF0A66E-781F-51EE-9531-928F197558F2
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the resource groups.
   */
  resourceGroups?: ListMultiAccountResourceGroupsResponseBodyResourceGroups[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceGroups: 'ResourceGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      resourceGroups: { 'type': 'array', 'itemType': ListMultiAccountResourceGroupsResponseBodyResourceGroups },
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroups)) {
      $dara.Model.validateArray(this.resourceGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

