// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTaskResponseBodyData } from "./CreateTaskResponseBodyData";


export class CreateTaskResponseBody extends $dara.Model {
  data?: CreateTaskResponseBodyData;
  /**
   * @example
   * 9F1DB065-AE0D-5EE3-B1AF-48632CB0831C
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateTaskResponseBodyData,
      requestId: 'string',
      success: 'string',
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

