// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiagnoseReportIdsResponseBodyHeaders extends $dara.Model {
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnoseReportIdsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The header of the response.
   */
  headers?: ListDiagnoseReportIdsResponseBodyHeaders;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****
   */
  requestId?: string;
  result?: string[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListDiagnoseReportIdsResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
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

