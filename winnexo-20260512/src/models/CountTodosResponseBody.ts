// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CountTodosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The number of pending items with the primary status of PENDING.
   * 
   * @example
   * 3
   */
  pendingCount?: number;
  /**
   * @remarks
   * The request tracking ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The number of unread items where the readAt field of the handler is empty.
   * 
   * @example
   * 1
   */
  unreadCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      pendingCount: 'pendingCount',
      requestId: 'requestId',
      unreadCount: 'unreadCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pendingCount: 'number',
      requestId: 'string',
      unreadCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

