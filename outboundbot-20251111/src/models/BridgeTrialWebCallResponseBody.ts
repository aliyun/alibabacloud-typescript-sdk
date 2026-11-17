// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BridgeTrialWebCallResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The web voice connection channel ID assigned or returned by the RTC gateway. It is used to associate and connect the voice channel for this call. It is different from the trial channel AccessChannelId. You must use the real value returned by this API.
   * 
   * @example
   * ch-ws-10001-057100000000-1794560400000-ws-11111111-2222-4333-8444-555555555555
   */
  channelId?: string;
  /**
   * @remarks
   * The expiration time of the web voice connection token for this call. The current POP type is string, and the backend WebCallContext type is long. The code does not mark the time unit. The format and unit must be confirmed according to the actual service provider agreement. The example is only a numeric string and does not represent a verified validity period unit.
   * 
   * @example
   * 1794564000000
   */
  expirationTime?: string;
  /**
   * @remarks
   * The instance identity of the associated product. You must use an instance that the invoker has access to and that actually exists. The instance must be consistent with the instance to which the scenario, channel, and session belong. The maximum length is subject to the current POP parameter definition.
   * 
   * @example
   * instance-example-001
   */
  instanceId?: string;
  /**
   * @remarks
   * The service address used to establish the web voice connection for this call. The format and protocol are determined by the service provider of the RTC gateway. You must use the actual returned value and cannot concatenate it yourself. The example is an unconnectable desensitized address and does not represent a production domain name or protocol guarantee.
   * 
   * @example
   * wss://example.invalid/voice
   */
  serverUrl?: string;
  /**
   * @remarks
   * The session ID used to uniquely associate this interaction. For a text session, it is the text- identifier returned when the session is started. For a web voice session, it is the ws- identifier. For a real number outbound call test, it is the test- identifier. Subsequent calls must use the actual returned value.
   * 
   * @example
   * ws-11111111-2222-4333-8444-555555555555
   */
  sessionId?: string;
  /**
   * @remarks
   * The temporary token used to connect to the voice channel for this call. It must be used together with the ServerUrl and ChannelId returned this time. Do not disclose or record the actual token without desensitization. The example is not a valid credential, and the format and validity period are determined by the service provider.
   * 
   * @example
   * example-web-call-token
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      expirationTime: 'ExpirationTime',
      instanceId: 'InstanceId',
      serverUrl: 'ServerUrl',
      sessionId: 'SessionId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      expirationTime: 'string',
      instanceId: 'string',
      serverUrl: 'string',
      sessionId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BridgeTrialWebCallResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business processing status code. OK indicates success. When an exception occurs, the corresponding business error code is returned. The error types and mapping rules follow the current API configuration, and no error codes are added or modified this time.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The session, channel, service address, and temporary authentication token for this web voice call. Use the actually returned connection parameters.
   * 
   * @example
   * {"InstanceId":"instance-example-001","SessionId":"ws-11111111-2222-4333-8444-555555555555","ChannelId":"ch-ws-10001-057100000000-1794560400000-ws-11111111-2222-4333-8444-555555555555","ExpirationTime":"1794564000000","ServerUrl":"wss://example.invalid/voice","Token":"example-web-call-token"}
   */
  data?: BridgeTrialWebCallResponseBodyData;
  /**
   * @remarks
   * The HTTP status code recorded in the business response body. A normal return is 200. To determine whether the business is successful, you must also check Code. You cannot determine that the call is successful solely based on the existence of this field.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The business response or error description. It is usually empty or not returned upon success, and it is not required to return a fixed text upon success. Upon failure, it is an error description used to assist troubleshooting, and it is combined with Code and Params to understand the cause of the error. The example is an error message when the trial link visitor token expires (corresponding to the Code Expired.VisitorToken), and is for format reference only.
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
   * The ID used to associate and troubleshoot this POP request. The value in the response corresponds to this request. System request parameters are injected by the gateway, and the caller does not need to fill in the system fields.
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
      data: BridgeTrialWebCallResponseBodyData,
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

