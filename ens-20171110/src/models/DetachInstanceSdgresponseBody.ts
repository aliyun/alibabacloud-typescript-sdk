// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetachInstanceSDGResponseBodyData } from "./DetachInstanceSdgresponseBodyData";


export class DetachInstanceSDGResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data object.
   */
  data?: DetachInstanceSDGResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
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
      data: DetachInstanceSDGResponseBodyData,
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

