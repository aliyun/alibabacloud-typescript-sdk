// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataChannelCredentialResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The client connection identifier returned by the data channel service, which should be used in conjunction with the address, username, and password returned in this response. The example is a desensitized placeholder value and does not declare a fixed naming rule.
   * 
   * @example
   * example-client-10001
   */
  clientId?: string;
  /**
   * @remarks
   * The device ID corresponding to the current data channel credentials, which should match the requested DeviceId. Use it in conjunction with the Topic, ClientId, and authentication information returned in the same response, and do not mix it with the ChannelId of the voice channel.
   * 
   * @example
   * 10001
   */
  deviceId?: string;
  /**
   * @remarks
   * The access endpoint for the data channel. The actual address, protocol, port, and authentication method are subject to the RTC gateway return and client conventions. Local code only delegates to the gateway service, and you cannot use this to confirm a fixed production domain name or MQTT/WebSocket protocol.
   * 
   * @example
   * example.invalid
   */
  endpoint?: string;
  /**
   * @remarks
   * The expiration time of the temporary credentials for the data channel. The current POP maps this to expirationTime, whereas the field in the local RTC SDK is expiredTime. You must verify the actual gateway version for field mapping compatibility and time units. Do not assume that this field is always returned or arbitrarily interpret it as milliseconds. The example only demonstrates the integer format.
   * 
   * @example
   * 1794564000000
   */
  expirationTime?: number;
  /**
   * @remarks
   * The temporary authentication password used to connect to the data channel, which should be used in conjunction with UserName and within its validity period. It is a sensitive credential, and the real value must not be disclosed. The example is a placeholder value that cannot be used for authentication.
   * 
   * @example
   * example-password-not-a-credential
   */
  password?: string;
  /**
   * @remarks
   * The topic identifier returned by the data channel service. The client subscribes to or receives events based on the actual protocol and this topic. Do not infer the topic based on DeviceId, and do not treat the example as a real usable topic.
   * 
   * @example
   * example-topic-10001
   */
  topic?: string;
  /**
   * @remarks
   * The temporary authentication username used to connect to the data channel. It should be used in conjunction with the Password and Endpoint returned in the same response. Do not use the example placeholder value for logon.
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

export class GetDataChannelCredentialResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business processing status code. OK indicates success. When an exception occurs, the corresponding business error code is returned. Error types and mapping rules follow the current API configuration, and no error codes are added or modified in this operation.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data channel connection and authentication information for the specified device. Use the actual return values and do not infer topics or credentials.
   * 
   * @example
   * {"DeviceId":"10001","Topic":"example-topic-10001","ClientId":"example-client-10001","Endpoint":"example.invalid","UserName":"example-user","Password":"example-password-not-a-credential","ExpirationTime":1794564000000}
   */
  data?: GetDataChannelCredentialResponseBodyData;
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
   * The business response or error description. It is usually empty or not returned upon success, and you should not expect a fixed text to be returned upon success. Upon failure, it provides an error description to assist in troubleshooting, and should be used in conjunction with Code and Params to understand the cause of the error. The example shows an error message when the instance does not exist (corresponding to the Code NotExists.InstanceId) and is provided for format reference only.
   * 
   * @example
   * Instance instance-example-001 does not exist.
   */
  message?: string;
  /**
   * @remarks
   * The list of parameters used for the localized display of error messages, which are not scenario variables or business results. A normal successful response is usually an empty array. When an error occurs, parameters corresponding to the error template may be returned.
   * 
   * @example
   * []
   */
  params?: string[];
  /**
   * @remarks
   * The ID used to associate and troubleshoot this POP request. The value in the response corresponds to this request. System request parameters are injected by the gateway, and the caller does not need to fill in system fields.
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
      data: GetDataChannelCredentialResponseBodyData,
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

