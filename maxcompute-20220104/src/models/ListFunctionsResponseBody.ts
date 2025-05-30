// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFunctionsResponseBodyData } from "./ListFunctionsResponseBodyData";


export class ListFunctionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListFunctionsResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0be3e0b716671885050924814e3623
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListFunctionsResponseBodyData,
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

