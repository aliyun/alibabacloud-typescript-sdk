// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMetaCollectionsResponseBodyDataMetaCollections } from "./ListMetaCollectionsResponseBodyDataMetaCollections";


export class ListMetaCollectionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The collections.
   */
  metaCollections?: ListMetaCollectionsResponseBodyDataMetaCollections[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      metaCollections: 'MetaCollections',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaCollections: { 'type': 'array', 'itemType': ListMetaCollectionsResponseBodyDataMetaCollections },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.metaCollections)) {
      $dara.Model.validateArray(this.metaCollections);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

