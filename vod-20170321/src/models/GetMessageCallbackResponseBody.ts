// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMessageCallbackResponseBodyMessageCallback extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app-1000000
   */
  appId?: string;
  /**
   * @remarks
   * The authentication key when the callback method is set to HTTP.
   * 
   * @example
   * 12345678abc
   */
  authKey?: string;
  /**
   * @remarks
   * The callback authentication switch when the callback method is set to HTTP. Valid values:
   * - **on**: enabled.
   * - **off**: disabled.
   * 
   * @example
   * on
   */
  authSwitch?: string;
  /**
   * @remarks
   * The callback method. Valid values:
   * - **HTTP**
   * - **MNS**
   * 
   * @example
   * HTTP
   */
  callbackType?: string;
  /**
   * @remarks
   * The callback URL when the callback method is set to HTTP.
   * 
   * @example
   * http://test.com/test
   */
  callbackURL?: string;
  /**
   * @remarks
   * The callback event types.
   * 
   * @example
   * FileUploadComplete,StreamTranscodeComplete,TranscodeComplete,SnapshotComplete,AIComplete,AddLiveRecordVideoComplete,CreateAuditComplete,UploadByURLComplete,ProduceMediaComplete,LiveRecordVideoComposeStart,ImageUploadComplete,VideoAnalysisComplete
   */
  eventTypeList?: string;
  /**
   * @remarks
   * The public endpoint of the MSMQ when the callback method is set to MNS.
   * 
   * @example
   * http://1234567.mns.cn-shanghai-internal.aliyuncs.com/
   */
  mnsEndpoint?: string;
  /**
   * @remarks
   * The name of the MSMQ when the callback method is set to MNS.
   * 
   * @example
   * vodcallback
   */
  mnsQueueName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      authKey: 'AuthKey',
      authSwitch: 'AuthSwitch',
      callbackType: 'CallbackType',
      callbackURL: 'CallbackURL',
      eventTypeList: 'EventTypeList',
      mnsEndpoint: 'MnsEndpoint',
      mnsQueueName: 'MnsQueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      authKey: 'string',
      authSwitch: 'string',
      callbackType: 'string',
      callbackURL: 'string',
      eventTypeList: 'string',
      mnsEndpoint: 'string',
      mnsQueueName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageCallbackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The event notification configuration.
   */
  messageCallback?: GetMessageCallbackResponseBodyMessageCallback;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 272A222A-F7F7-4A3E-****-F531574F1234
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      messageCallback: 'MessageCallback',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageCallback: GetMessageCallbackResponseBodyMessageCallback,
      requestId: 'string',
    };
  }

  validate() {
    if(this.messageCallback && typeof (this.messageCallback as any).validate === 'function') {
      (this.messageCallback as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

