// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddInstanceWhiteListResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: any;
  /**
   * @example
   * The specified parameter \\"[\\"vpc-xxx\\"]\\" is not valid
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8BFB1C9D-08A2-4859-A47C-403C9EFA2***
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  statusCode?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      statusCode: 'StatusCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      message: 'string',
      requestId: 'string',
      statusCode: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

