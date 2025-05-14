// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetStorageListResponseBodyStorageInfoList } from "./GetStorageListResponseBodyStorageInfoList";


export class GetStorageListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ******73-8B78-5D86-A50C-49B96C******
   */
  requestId?: string;
  storageInfoList?: GetStorageListResponseBodyStorageInfoList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      storageInfoList: 'StorageInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      storageInfoList: { 'type': 'array', 'itemType': GetStorageListResponseBodyStorageInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.storageInfoList)) {
      $dara.Model.validateArray(this.storageInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

