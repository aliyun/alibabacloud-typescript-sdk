// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableSchemaPropertyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Additional information
   * 
   * @example
   * User 244715989906081477 does not exist in instance worldfirst01.
   */
  message?: string;
  /**
   * @remarks
   * Parameter information
   */
  params?: string[];
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 9FBA26B0-462B-4D77-B78F-AF35560DBC71
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

