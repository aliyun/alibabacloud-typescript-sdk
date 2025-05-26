// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { KillSparkAppResponseBodyData } from "./KillSparkAppResponseBodyData";


export class KillSparkAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: KillSparkAppResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 69D0810B-F9F5-5F4C-A57F-DF36133B63C9
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
      data: KillSparkAppResponseBodyData,
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

