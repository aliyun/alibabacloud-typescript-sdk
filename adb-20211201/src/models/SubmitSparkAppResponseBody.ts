// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitSparkAppResponseBodyData } from "./SubmitSparkAppResponseBodyData";


export class SubmitSparkAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: SubmitSparkAppResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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
      data: SubmitSparkAppResponseBodyData,
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

