// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The name prefix based on which you want to search for templates.
   * 
   * @example
   * S00000001
   */
  namePrefix?: string;
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
   * The size of each page set during the result paging query.
   * 
   * - Upper limit: 100.
   * - Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the custom transcoding templates that you want to query.
   * 
   * *   **All**: All custom transcoding templates are queried.
   * *   **Normal**: Normal custom transcoding templates are queried.
   * *   **Deleted**: Deleted custom transcoding templates are queried.
   * *   Default value: **All**.
   * 
   * @example
   * Normal
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      namePrefix: 'NamePrefix',
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
      namePrefix: 'string',
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

