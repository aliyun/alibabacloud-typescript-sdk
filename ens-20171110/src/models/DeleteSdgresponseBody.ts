// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteSDGResponseBodyData } from "./DeleteSdgresponseBodyData";


export class DeleteSDGResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data object.
   */
  data?: DeleteSDGResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 86A6D421-A0C7-4C01-8648-47377CA6A2CE
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
      data: DeleteSDGResponseBodyData,
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

