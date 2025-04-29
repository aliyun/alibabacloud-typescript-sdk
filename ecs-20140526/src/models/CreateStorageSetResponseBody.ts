// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStorageSetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the storage set.
   * 
   * @example
   * ss-bp67acfmxazb4p****
   */
  storageSetId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      storageSetId: 'StorageSetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      storageSetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

