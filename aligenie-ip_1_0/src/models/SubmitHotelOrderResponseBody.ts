// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitHotelOrderResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * CCCF2E86-D9B5-12A6-AD25-8A06933D2B0F
   */
  requestId?: string;
  /**
   * @example
   * 20220809104752000114671478353329
   */
  result?: string;
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'string',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

