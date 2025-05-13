// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Collection extends $dara.Model {
  /**
   * @example
   * AI4D
   */
  collectionName?: string;
  /**
   * @example
   * 2021-01-21T17:12:35Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-21T17:12:35Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 155770209******
   */
  ownerId?: string;
  /**
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

