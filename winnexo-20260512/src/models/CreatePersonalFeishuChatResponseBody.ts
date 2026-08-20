// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalFeishuChatResponseBody extends $dara.Model {
  /**
   * @remarks
   * The group chat session ID.
   * 
   * @example
   * oc_abc123
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
   * The directory ID.
   * 
   * @example
   * dir_personal_1
   */
  directoryId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-08-18T10:30:00+08:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * Product R&D Group
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
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
   * The source ID.
   * 
   * @example
   * src_feishu_1
   */
  sourceId?: string;
  /**
   * @remarks
   * The signing status. Valid values:
   * - CREATED: Created but not signed.
   * - SUCCESS: Signed successfully.
   * - STOP: Terminated.
   * 
   * @example
   * RUNNING
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

