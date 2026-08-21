// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddVodStorageForAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25818875-5F78-4A*****F6-D7393642CA58
   */
  requestId?: string;
  /**
   * @remarks
   * The storage address of the created VOD system bucket.
   * 
   * @example
   * out-****.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      storageLocation: 'StorageLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      storageLocation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

