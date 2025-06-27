// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMetaCollectionResponseBodyMetaCollection } from "./GetMetaCollectionResponseBodyMetaCollection";


export class GetMetaCollectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the collection.
   */
  metaCollection?: GetMetaCollectionResponseBodyMetaCollection;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1AFAE64E-D1BE-432B-A9****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metaCollection: 'MetaCollection',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaCollection: GetMetaCollectionResponseBodyMetaCollection,
      requestId: 'string',
    };
  }

  validate() {
    if(this.metaCollection && typeof (this.metaCollection as any).validate === 'function') {
      (this.metaCollection as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

