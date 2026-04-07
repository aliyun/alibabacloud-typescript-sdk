// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Collection extends $dara.Model {
  /**
   * @remarks
   * The type of the collection. Valid values:
   * 
   * *   **ALBUM**: data album
   * *   **ALBUM_CATEGORY**: category in a data album
   * 
   * @example
   * album
   */
  collectionType?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1668600147617
   */
  createTime?: number;
  /**
   * @remarks
   * The level of the collection. This parameter takes effect only if the CollectionType parameter is set to ALBUM_CATEGORY. Maximum value: 4.
   * 
   * @example
   * 1
   */
  level?: number;
  /**
   * @remarks
   * The name of the collection.
   * 
   * @example
   * collectionName
   */
  name?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used by the collection owner.
   * 
   * @example
   * 1234444
   */
  ownerId?: string;
  /**
   * @remarks
   * The name of the collection owner.
   * 
   * @example
   * owner
   */
  ownerName?: string;
  /**
   * @remarks
   * The unique identifier of the collection.
   * 
   * @example
   * album.12334
   */
  qualifiedName?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1668600148617
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      collectionType: 'CollectionType',
      comment: 'Comment',
      createTime: 'CreateTime',
      level: 'Level',
      name: 'Name',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      qualifiedName: 'QualifiedName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionType: 'string',
      comment: 'string',
      createTime: 'number',
      level: 'number',
      name: 'string',
      ownerId: 'string',
      ownerName: 'string',
      qualifiedName: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

