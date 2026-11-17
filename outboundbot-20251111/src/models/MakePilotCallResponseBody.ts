// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MakePilotCallResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The session ID used to uniquely associate the current interaction. For a text session, it is the text- ID returned when the session is started. For web voice, it is the ws- ID. For a real-number outbound call test, it is the test- ID. Subsequent calls must use the actual return value.
   * 
   * @example
   * test-11111111-2222-4333-8444-555555555555
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakePilotCallResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business processing status code. OK indicates success. When an exception occurs, the corresponding business error code is returned. Error types and mapping rules follow the current API configuration. No error codes are added or modified in this operation.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The session ID of the current real-number outbound call test. The return of this object does not indicate that the called party has answered.
   * 
   * @example
   * {"SessionId":"test-11111111-2222-4333-8444-555555555555"}
   */
  data?: MakePilotCallResponseBodyData;
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
   * The business response or error description. This field is usually empty or not returned upon success. A fixed text cannot be required upon success. Upon failure, this field contains an error description to assist in troubleshooting. Combine this field with Code and Params to understand the cause of the error. The example shows an error message when the instance does not exist, where Code is NotExists.InstanceId. This is for format reference only.
   * 
   * @example
   * Instance instance-example-001 does not exist.
   */
  message?: string;
  /**
   * @remarks
   * The list of parameters used for the localized display of error messages. This is not a scenario variable or business result. A normal successful response usually returns an empty array. When an error occurs, parameters corresponding to the error template may be returned.
   * 
   * @example
   * []
   */
  params?: string[];
  /**
   * @remarks
   * The ID used to associate and troubleshoot the current POP request. The value in the response corresponds to the current request. System request parameters are injected by the gateway. Callers do not need to fill in system fields.
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
      data: MakePilotCallResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

