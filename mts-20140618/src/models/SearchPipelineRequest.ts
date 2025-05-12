// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchPipelineRequest extends $dara.Model {
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
   * The status of the MPS queues that you want to query. If you leave this parameter empty, all MPS queues are queried.
   * 
   * *   **All**: queries all MPS queues.
   * *   **Active**: queries the MPS queues that are active.
   * *   **Paused**: queues the MPS queues that are paused.
   * *   Default value: **All**.
   * 
   * @example
   * Paused
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      state: 'State',
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
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

