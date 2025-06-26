// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDBResponseBodyData } from "./CreateDbresponseBodyData";


export class CreateDBResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: CreateDBResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 94F92113-FF63-5E57-8401-6FE123AD11DD
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
      data: CreateDBResponseBodyData,
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

