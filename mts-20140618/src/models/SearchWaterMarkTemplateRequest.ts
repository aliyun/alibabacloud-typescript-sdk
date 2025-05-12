// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchWaterMarkTemplateRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * The state of the watermark templates that you want to query. Valid values:
   * 
   * *   **All (default)**
   * *   **Normal**
   * *   **Deleted**
   * 
   * @example
   * Normal
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

