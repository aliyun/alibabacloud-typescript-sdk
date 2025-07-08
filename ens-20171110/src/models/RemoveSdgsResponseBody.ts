// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RemoveSDGsResponseBodyData } from "./RemoveSdgsResponseBodyData";


export class RemoveSDGsResponseBody extends $dara.Model {
  data?: RemoveSDGsResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 903819D9-D18B-5C59-8DFD-20D56FD2DAE4
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
      data: RemoveSDGsResponseBodyData,
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

