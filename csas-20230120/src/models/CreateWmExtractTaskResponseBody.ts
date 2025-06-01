// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateWmExtractTaskResponseBodyData } from "./CreateWmExtractTaskResponseBodyData";


export class CreateWmExtractTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the watermark extraction task.
   */
  data?: CreateWmExtractTaskResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D6707286-A50E-57B1-B2CF-EFAC59E850D8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateWmExtractTaskResponseBodyData,
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

