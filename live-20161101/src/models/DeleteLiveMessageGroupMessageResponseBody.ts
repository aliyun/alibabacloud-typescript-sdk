// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveMessageGroupMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * grouptest
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the deleted or non-existent message.
   * 
   * @example
   * a74a8fbd3cfe4b2daa8517e4e3******
   */
  messageId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B95BE680-5A6A-1CAD-8AB1-09DFF5D6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      messageId: 'MessageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      messageId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

