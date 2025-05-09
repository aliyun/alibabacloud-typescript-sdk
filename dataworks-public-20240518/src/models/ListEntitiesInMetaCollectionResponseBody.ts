// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEntitiesInMetaCollectionResponseBodyPagingInfo } from "./ListEntitiesInMetaCollectionResponseBodyPagingInfo";


export class ListEntitiesInMetaCollectionResponseBody extends $dara.Model {
  pagingInfo?: ListEntitiesInMetaCollectionResponseBodyPagingInfo;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F05080B0-CCE6-5D22-B284-34A51C5D4E28
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListEntitiesInMetaCollectionResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

