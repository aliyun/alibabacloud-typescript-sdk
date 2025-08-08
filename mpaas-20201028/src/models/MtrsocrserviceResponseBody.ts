// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MTRSOCRServiceResponseBody extends $dara.Model {
  code?: string;
  msg?: string;
  /**
   * @example
   * D9B3C4E7-BEC7-1E2C-86A3-EA985B4FFD73
   */
  requestId?: string;
  /**
   * @example
   * {"aa":"ss"}
   */
  result?: string;
  /**
   * @example
   * true/false
   */
  status?: boolean;
  /**
   * @example
   * 777799aa
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      msg: 'Msg',
      requestId: 'RequestId',
      result: 'Result',
      status: 'Status',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
      requestId: 'string',
      result: 'string',
      status: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

