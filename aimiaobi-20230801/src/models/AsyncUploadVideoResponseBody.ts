// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AsyncUploadVideoResponseBodyData } from "./AsyncUploadVideoResponseBodyData";


export class AsyncUploadVideoResponseBody extends $dara.Model {
  /**
   * @example
   * successful
   */
  code?: string;
  data?: AsyncUploadVideoResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 94512A33-8EC1-5452-A793-5C91F18ED2F0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AsyncUploadVideoResponseBodyData,
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

