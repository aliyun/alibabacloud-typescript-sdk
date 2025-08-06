// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMessageCallbackResponseBodyMessageCallback extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * app-1000000
   */
  appId?: string;
  /**
   * @remarks
   * The cryptographic key. This parameter is returned only for HTTP callbacks.
   * 
   * @example
   * 12345678abc
   */
  authKey?: string;
  /**
   * @remarks
   * Indicates whether callback authentication is enabled. This parameter is returned only for HTTP callbacks. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  authSwitch?: string;
  /**
   * @remarks
   * The callback method. Valid values:
   * 
   * *   **HTTP**
   * *   **MNS**
   * 
   * @example
   * HTTP
   */
  callbackType?: string;
  /**
   * @remarks
   * The callback URL. This parameter is returned only for HTTP callbacks.
   * 
   * @example
   * http://test.com/test
   */
  callbackURL?: string;
  /**
   * @remarks
   * The type of the callback event.
   * 
   * @example
   * FileUploadComplete,StreamTranscodeComplete,TranscodeComplete,SnapshotComplete,AIComplete,AddLiveRecordVideoComplete,CreateAuditComplete,UploadByURLComplete,ProduceMediaComplete,LiveRecordVideoComposeStart,ImageUploadComplete,VideoAnalysisComplete
   */
  eventTypeList?: string;
  /**
   * @remarks
   * The public endpoint of MNS. This parameter is returned only for MNS callbacks.
   * 
   * @example
   * http://1234567.mns.cn-shanghai-internal.aliyuncs.com/
   */
  mnsEndpoint?: string;
  /**
   * @remarks
   * The name of the Message Service (MNS) queue. This parameter is returned only for MNS callbacks.
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
   * The configuration of the event notification.
   */
  messageCallback?: GetMessageCallbackResponseBodyMessageCallback;
  /**
   * @remarks
   * The ID of the request.
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

