// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeISPAreaCityResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 84C8BA48-7FD3-46F8-AEE3-E24657C22289
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

