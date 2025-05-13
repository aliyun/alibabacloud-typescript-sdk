// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDiagnoseReportResponseBodyHeaders } from "./ListDiagnoseReportResponseBodyHeaders";
import { ListDiagnoseReportResponseBodyResult } from "./ListDiagnoseReportResponseBodyResult";


export class ListDiagnoseReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of entries returned.
   */
  headers?: ListDiagnoseReportResponseBodyHeaders;
  /**
   * @remarks
   * The header of the response.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****
   */
  requestId?: string;
  /**
   * @remarks
   * The trigger mode of health diagnostics. Valid values:
   * 
   * *   SYSTEM: The system is automatically triggered.
   * *   INNER: internal trigger
   * *   USER: manually triggered by the user
   */
  result?: ListDiagnoseReportResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListDiagnoseReportResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDiagnoseReportResponseBodyResult },
    };
  }

  validate() {
    if(this.headers && typeof (this.headers as any).validate === 'function') {
      (this.headers as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

