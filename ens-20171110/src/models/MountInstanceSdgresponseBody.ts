// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MountInstanceSDGResponseBodyData } from "./MountInstanceSdgresponseBodyData";


export class MountInstanceSDGResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data object.
   */
  data?: MountInstanceSDGResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F3B261DD-3858-4D3C-877D-303ADF374600
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
      data: MountInstanceSDGResponseBodyData,
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

