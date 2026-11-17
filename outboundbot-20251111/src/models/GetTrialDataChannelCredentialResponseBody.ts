// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTrialDataChannelCredentialResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The client connection ID returned by the data channel service. It must be used together with the address, username, and password returned in this response. The example is a desensitized placeholder value and does not declare a fixed naming rule.
   * 
   * @example
   * example-client-10001
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the client device that initiates web voice calls or receives data channel events. The same client must use the same DeviceId when retrieving data channel credentials and initiating calls. The example is only a business device ID and not a real credential assigned by the platform.
   * 
   * @example
   * 10001
   */
  deviceId?: string;
  /**
   * @remarks
   * The access endpoint of the data channel. The actual address, protocol, port, and authentication method are subject to the return values of the RTC gateway and client conventions. Local code only delegates to the gateway service and cannot be used to confirm a fixed production domain name or MQTT/WebSocket protocol.
   * 
   * @example
   * example.invalid
   */
  endpoint?: string;
  /**
   * @remarks
   * The expiration time of the temporary credentials for the data channel. The current POP maps to expirationTime, while the local RTC second-party package field is expiredTime. The field mapping compatibility and time unit must be verified against the actual gateway version. Do not assume that the field is always returned or interpret it as milliseconds without authorization. The example only demonstrates the integer format.
   * 
   * @example
   * 1794564000000
   */
  expirationTime?: number;
  /**
   * @remarks
   * The temporary authentication password used to connect to the data channel. It must be used together with UserName and within the validity period. It is a sensitive credential and the real value must not be disclosed. The example is a placeholder value that cannot be used for authentication.
   * 
   * @example
   * example-password-not-a-credential
   */
  password?: string;
  /**
   * @remarks
   * The topic ID returned by the data channel service. The client subscribes to or receives events based on the actual protocol and this topic. The client must not deduce the topic based on DeviceId or treat the example as a real available topic.
   * 
   * @example
   * example-topic-10001
   */
  topic?: string;
  /**
   * @remarks
   * The temporary authentication username used to connect to the data channel. It must be used together with the Password and Endpoint returned in the same response. The example placeholder value cannot be used for logon.
   * 
   * @example
   * example-user
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      deviceId: 'DeviceId',
      endpoint: 'Endpoint',
      expirationTime: 'ExpirationTime',
      password: 'Password',
      topic: 'Topic',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      deviceId: 'string',
      endpoint: 'string',
      expirationTime: 'number',
      password: 'string',
      topic: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrialDataChannelCredentialResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business processing status code. OK indicates success. When an exception occurs, the corresponding business error code is returned. The error types and mapping rules follow the current API configuration. No error codes are added or modified in this operation.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data channel connection and authentication information for the specified device. Use the actual return values and do not deduce topics or credentials manually.
   * 
   * @example
   * {"DeviceId":"10001","Topic":"example-topic-10001","ClientId":"example-client-10001","Endpoint":"example.invalid","UserName":"example-user","Password":"example-password-not-a-credential","ExpirationTime":1794564000000}
   */
  data?: GetTrialDataChannelCredentialResponseBodyData;
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
   * The business response or error description. It is usually empty or not returned upon success, and no fixed text is returned upon success. Upon failure, it provides an error description to assist in troubleshooting. Combine it with Code and Params to understand the cause of the error. The example is an error message when the trial link visitor token expires (corresponding to the Code Expired.VisitorToken) and is for format reference only.
   * 
   * @example
   * VisitorToken: example-visitor-token is expired.
   */
  message?: string;
  /**
   * @remarks
   * The list of parameters used for the localized display of error messages. It is not a scenario variable or business result. A normal successful response is usually an empty array. When an error occurs, parameters corresponding to the error template may be returned.
   * 
   * @example
   * []
   */
  params?: string[];
  /**
   * @remarks
   * The ID used to correlate and troubleshoot this POP request. The value in the response corresponds to this request. System request parameters are injected by the gateway, and the caller does not need to fill in system fields.
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
      data: GetTrialDataChannelCredentialResponseBodyData,
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

