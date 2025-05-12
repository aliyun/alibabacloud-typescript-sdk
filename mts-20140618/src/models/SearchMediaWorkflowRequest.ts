// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaWorkflowRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * *   A maximum of **100** entries can be returned on each page.
   * *   Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the media workflows that you want to query. You can specify multiple states. Separate multiple states with commas (,). Default value: **Inactive,Active,Deleted**. Valid values:
   * 
   * *   **Inactive**: Deactivated media workflows are queried.
   * *   **Active**: Activated media workflows are queried.
   * *   **Deleted**: Deleted media workflows are queried.
   * 
   * @example
   * Inactive,Active,Deleted
   */
  stateList?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      stateList: 'StateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      stateList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

