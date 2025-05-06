// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchLawQueryResponseBodyData } from "./RunSearchLawQueryResponseBodyData";


export class RunSearchLawQueryResponseBody extends $dara.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: RunSearchLawQueryResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 05062567-EB51-50F6-AF56-0BE44955848D
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RunSearchLawQueryResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

