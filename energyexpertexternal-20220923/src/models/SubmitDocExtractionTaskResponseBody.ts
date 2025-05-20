// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitDocExtractionTaskResponseBodyData } from "./SubmitDocExtractionTaskResponseBodyData";


export class SubmitDocExtractionTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returned data
   */
  data?: SubmitDocExtractionTaskResponseBodyData;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
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
      data: SubmitDocExtractionTaskResponseBodyData,
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

