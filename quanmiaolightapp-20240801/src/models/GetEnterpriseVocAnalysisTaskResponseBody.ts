// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEnterpriseVocAnalysisTaskResponseBodyData } from "./GetEnterpriseVocAnalysisTaskResponseBodyData";


export class GetEnterpriseVocAnalysisTaskResponseBody extends $dara.Model {
  /**
   * @example
   * NoPermission
   */
  code?: string;
  data?: GetEnterpriseVocAnalysisTaskResponseBodyData;
  /**
   * @example
   * 403
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 117F5ABE-CF02-5502-9A3F-E56BC9081A64
   */
  requestId?: string;
  /**
   * @example
   * false
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
      data: GetEnterpriseVocAnalysisTaskResponseBodyData,
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

