// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTranslateReportResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * {"result":[{"time":"2021-10-21 00:00:00","total":100}]}
   */
  data?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 86D18195-D89C-4C8C-9DC4-5FCE789CE6D5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

