// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEntitiesInMetaCollectionResponseBodyPagingInfoEntities } from "./ListEntitiesInMetaCollectionResponseBodyPagingInfoEntities";


export class ListEntitiesInMetaCollectionResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The entities in the collection.
   */
  entities?: ListEntitiesInMetaCollectionResponseBodyPagingInfoEntities[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      entities: 'Entities',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entities: { 'type': 'array', 'itemType': ListEntitiesInMetaCollectionResponseBodyPagingInfoEntities },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.entities)) {
      $dara.Model.validateArray(this.entities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

