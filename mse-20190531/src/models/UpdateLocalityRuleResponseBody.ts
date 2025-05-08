// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLocalityRuleResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * {
   *   "Message":"updateLocalityPolicy success",
   *   "RequestId":"3B519913-7348-16AB-AD71-******",
   *   "HttpStatusCode":200,
   *   "Code":200,
   *   "Success":true
   * }
   */
  data?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * 78F05E89-D387-50CE-8186-2E27A8AB****
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      httpStatusCode: 'number',
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

