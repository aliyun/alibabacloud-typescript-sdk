// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddUserSourceLogConfigResponseBodyData } from "./AddUserSourceLogConfigResponseBodyData";


export class AddUserSourceLogConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: AddUserSourceLogConfigResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: AddUserSourceLogConfigResponseBodyData,
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

