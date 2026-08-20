// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalAliDingChatResponseBody extends $dara.Model {
  /**
   * @remarks
   * The DingTalk group chat session ID.
   * 
   * @example
   * cidxxxxxxxx
   */
  chatId?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-08-18T10:00:00Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * CustomerProjectGroup
   */
  name?: string;
  /**
   * @remarks
   * The request trace ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The permission scope.
   * 
   * @example
   * PERSONAL
   */
  scope?: string;
  /**
   * @remarks
   * The original project ID.
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * The call status. Valid values:
   * - **PENDING**: Waiting for acknowledgment.
   * - **SUCCESS**: Succeeded.
   * - **FAILED**: Failed.
   * - **TIMEOUT**: Timed out.
   * 
   * @example
   * PENDING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      chatId: 'chatId',
      code: 'code',
      directoryId: 'directoryId',
      gmtCreate: 'gmtCreate',
      message: 'message',
      name: 'name',
      requestId: 'requestId',
      scope: 'scope',
      sourceId: 'sourceId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatId: 'string',
      code: 'string',
      directoryId: 'string',
      gmtCreate: 'string',
      message: 'string',
      name: 'string',
      requestId: 'string',
      scope: 'string',
      sourceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

