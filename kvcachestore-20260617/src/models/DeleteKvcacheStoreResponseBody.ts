// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteKVCacheStoreResponseBody extends $dara.Model {
  /**
   * @remarks
   * KVCacheStore KvcsId
   * 
   * @example
   * kvcs-your-id
   */
  kvcsId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B127704C-ECB1-5B0A-AA9C-8F394A6F179F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      kvcsId: 'KvcsId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kvcsId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

