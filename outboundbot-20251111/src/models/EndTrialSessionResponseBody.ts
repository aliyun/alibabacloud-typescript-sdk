// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EndTrialSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business processing status code. OK indicates success. If an exception occurs, the corresponding business error code is returned. The error types and mapping rules follow the current API configuration. No error codes are added or modified in this operation.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The SessionId of the text session ended in this request, which corresponds to the SessionId in the request. The termination service still returns this ID even if the context has expired.
   * 
   * @example
   * text-11111111-2222-4333-8444-555555555555
   */
  data?: string;
  /**
   * @remarks
   * The HTTP status code recorded in the business response body. A normal return value is 200. To determine whether the business operation is successful, you must also check Code. You cannot determine the success of the call solely based on the presence of this field.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The business response or error message. It is typically empty or not returned upon success. Do not expect a fixed text string upon success. Upon failure, it provides an error description to assist with troubleshooting. Use it in conjunction with Code and Params to identify the cause of the error. The example shows an error message for an expired visitor token in an experience link (corresponding to the Expired.VisitorToken code) and serves as a format reference only.
   * 
   * @example
   * VisitorToken: example-visitor-token is expired.
   */
  message?: string;
  /**
   * @remarks
   * The list of parameters used for the localized display of error messages. These are not scenario variables or business results. A normal successful response usually returns an empty array. When an error occurs, parameters corresponding to the error template may be returned.
   * 
   * @example
   * []
   */
  params?: string[];
  /**
   * @remarks
   * The ID used to associate and troubleshoot this POP request. The value in the response corresponds to the current request. System request parameters are injected by the gateway, and the caller does not need to fill in system fields.
   * 
   * @example
   * AAAAAAAA-BBBB-4CCC-8DDD-EEEEEEEEEEEE
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
      data: 'string',
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

