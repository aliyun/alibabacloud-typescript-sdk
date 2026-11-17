// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EndSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business processing status code. A value of OK indicates success. If an exception occurs, the corresponding business error code is returned. The error types and mapping rules follow the current API configuration. No error codes are added or modified for this operation.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The session ID of the terminated text session, which corresponds to the session ID in the request. The service still returns this ID even if the session context has expired.
   * 
   * @example
   * text-11111111-2222-4333-8444-555555555555
   */
  data?: string;
  /**
   * @remarks
   * The HTTP status code recorded in the business response body. A value of 200 indicates a normal response. To determine whether the business operation is successful, you must also check the Code field. You cannot determine the success of the call based solely on the presence of this field.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The business response or error message. This field is usually empty or omitted for successful requests. For failed requests, it provides an error description to assist in troubleshooting. Use this field in conjunction with the Code and Params fields to identify the cause of the error. The example shows the error message returned when an instance does not exist, which corresponds to the NotExists.InstanceId error code. This example is for format reference only.
   * 
   * @example
   * Instance instance-example-001 does not exist.
   */
  message?: string;
  /**
   * @remarks
   * The list of parameters used to localize error messages. These are not scenario variables or business results. A successful response usually returns an empty array. If an error occurs, the parameters corresponding to the error template may be returned.
   * 
   * @example
   * []
   */
  params?: string[];
  /**
   * @remarks
   * The ID used to trace and troubleshoot the current POP request. The value in the response corresponds to the current request. System request parameters are injected by the gateway, so you do not need to specify system fields.
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

