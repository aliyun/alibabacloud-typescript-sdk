// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Collection extends $dara.Model {
  /**
   * @remarks
   * The name of the collection. The name must be globally unique.
   * 
   * @example
   * AI4D
   */
  collectionName?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-01-21T17:12:35Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The last update time.
   * 
   * @example
   * 2021-01-21T17:12:35Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 155770209******
   */
  ownerId?: string;
  /**
   * @remarks
   * The ID of the user that created the collection.
   * 
   * @example
   * 155770209******
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      collectionName: 'CollectionName',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      ownerId: 'OwnerId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionName: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      ownerId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

