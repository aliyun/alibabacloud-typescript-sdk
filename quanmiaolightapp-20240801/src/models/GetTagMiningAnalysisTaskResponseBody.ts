// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTagMiningAnalysisTaskResponseBodyData } from "./GetTagMiningAnalysisTaskResponseBodyData";


export class GetTagMiningAnalysisTaskResponseBody extends $dara.Model {
  /**
   * @example
   * successful
   */
  code?: string;
  data?: GetTagMiningAnalysisTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @example
   * DataNotExists
   */
  message?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 085BE2D2-BB7E-59A6-B688-F2CB32124E7F
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
      data: GetTagMiningAnalysisTaskResponseBodyData,
      httpStatusCode: 'string',
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

