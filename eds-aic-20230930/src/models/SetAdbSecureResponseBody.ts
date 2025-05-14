// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SetAdbSecureResponseBodyData } from "./SetAdbSecureResponseBodyData";


export class SetAdbSecureResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned object.
   */
  data?: SetAdbSecureResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 69BCBBE4-FCF2-59B8-AD9D-531EB422****
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
      data: SetAdbSecureResponseBodyData,
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

