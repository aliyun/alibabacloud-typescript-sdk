// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListStorageProjectsInfoResponseBodyData } from "./ListStorageProjectsInfoResponseBodyData";


export class ListStorageProjectsInfoResponseBody extends $dara.Model {
  data?: ListStorageProjectsInfoResponseBodyData;
  /**
   * @example
   * OBJECT_NOT_EXIST
   */
  errorCode?: string;
  /**
   * @example
   * this quota is not exist.
   */
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * 0bc3b4b016674434996033675e71ee
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListStorageProjectsInfoResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

