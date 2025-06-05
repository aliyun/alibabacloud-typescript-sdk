// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecContainerCommandResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP URL. You can use this URL to enter the container within 30 seconds after this operation is called. For more information, see [Use and integrate the Elastic Container Instance terminal](https://help.aliyun.com/document_detail/202846.html).
   * 
   * @example
   * https://eci.console.aliyun.com/terminal?param=X32a****
   */
  httpUrl?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 28B583A8-313D-4383-7817-B5A9F7E0****
   */
  requestId?: string;
  /**
   * @remarks
   * The output of the command. This parameter is returned only if Sync is set to true.
   * 
   * @example
   * Hello
   */
  syncResponse?: string;
  /**
   * @remarks
   * The WebSocket URL. You can use this URL to establish a WebSocket connection with the container.
   * 
   * @example
   * wss://eci-cn-shanghai.aliyun.com/exec/?s=ktHPx****
   */
  webSocketUri?: string;
  static names(): { [key: string]: string } {
    return {
      httpUrl: 'HttpUrl',
      requestId: 'RequestId',
      syncResponse: 'SyncResponse',
      webSocketUri: 'WebSocketUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpUrl: 'string',
      requestId: 'string',
      syncResponse: 'string',
      webSocketUri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

