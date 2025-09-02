// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Collection extends $dara.Model {
  /**
   * @example
   * album
   */
  collectionType?: string;
  /**
   * @example
   * comment
   */
  comment?: string;
  /**
   * @example
   * 1668600147617
   */
  createTime?: number;
  /**
   * @example
   * 1
   */
  level?: number;
  /**
   * @example
   * collectionName
   */
  name?: string;
  /**
   * @example
   * 1234444
   */
  ownerId?: string;
  /**
   * @example
   * owner
   */
  ownerName?: string;
  /**
   * @example
   * album.12334
   */
  qualifiedName?: string;
  /**
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

