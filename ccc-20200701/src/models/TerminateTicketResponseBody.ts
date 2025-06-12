// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TerminateTicketResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: any;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  params?: string[];
  /**
   * @example
   * 03C67DAD-EB26-41D8-949D-9B0C470FB716
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

