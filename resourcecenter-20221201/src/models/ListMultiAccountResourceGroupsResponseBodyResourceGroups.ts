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

