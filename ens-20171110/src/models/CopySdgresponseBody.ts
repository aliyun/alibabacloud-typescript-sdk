// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CopySDGResponseBodyData } from "./CopySdgresponseBodyData";


export class CopySDGResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data object.
   */
  data?: CopySDGResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * XXX-XXX-XXX
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
      data: CopySDGResponseBodyData,
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

