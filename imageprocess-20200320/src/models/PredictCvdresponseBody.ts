// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PredictCVDResponseBodyData } from "./PredictCvdresponseBodyData";


export class PredictCVDResponseBody extends $dara.Model {
  data?: PredictCVDResponseBodyData;
  message?: string;
  /**
   * @example
   * 7CB9B663-3EF8-4C9C-A464-FDA2B5F1E3A4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: PredictCVDResponseBodyData,
      message: 'string',
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

