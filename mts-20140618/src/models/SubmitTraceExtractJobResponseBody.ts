// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitTraceExtractJobResponseBodyData } from "./SubmitTraceExtractJobResponseBodyData";


export class SubmitTraceExtractJobResponseBody extends $dara.Model {
  data?: SubmitTraceExtractJobResponseBodyData;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A1326BD4-30B1-4CB6-Q123-3330B877B0D4
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SubmitTraceExtractJobResponseBodyData,
      message: 'string',
      requestId: 'string',
      statusCode: 'number',
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

