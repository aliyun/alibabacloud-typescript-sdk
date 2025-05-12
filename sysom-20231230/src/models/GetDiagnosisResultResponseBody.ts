// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDiagnosisResultResponseBodyData } from "./GetDiagnosisResultResponseBodyData";


export class GetDiagnosisResultResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetDiagnosisResultResponseBodyData;
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * 9515E5A0-8905-59B0-9BBF-5F0BE568C3A0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'request_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDiagnosisResultResponseBodyData,
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

