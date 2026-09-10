// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BridgeWebCallResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The channel ID.
   * 
   * @example
   * 894526715106764802
   */
  channelId?: string;
  /**
   * @remarks
   * The token expiration time.
   * 
   * > The value is in timestamp format.
   * 
   * @example
   * 1744964682422
   */
  expirationTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-uf6abxo1tuuwarrtffpp
   */
  instanceId?: string;
  /**
   * @remarks
   * The server URL.
   * 
   * @example
   * wss://sh-voicebot.aliyuncs.com:443/audio
   */
  serverUrl?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * ws-4b7c263f-9b4c-4b28-baae-a65e9155e380
   */
  sessionId?: string;
  /**
   * @remarks
   * The authentication signature.
   * 
   * @example
   * 83480f806b48f022313de37b691e167e
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

export class BridgeWebCallResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates success.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: BridgeWebCallResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * connect timed out
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CF6D3484-19A1-5C77-863B-AC8B5754D37C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: BridgeWebCallResponseBodyData,
      errorMsg: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

