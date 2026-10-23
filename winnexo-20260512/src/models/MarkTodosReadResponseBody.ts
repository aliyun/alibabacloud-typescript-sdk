// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MarkTodosReadResponseBody extends $dara.Model {
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
   * The error message.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
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
   * The number of unread to-do items remaining after the operation.
   * 
   * @example
   * 0
   */
  unreadCount?: number;
  /**
   * @remarks
   * The number of to-do items marked as read in this request.
   * 
   * @example
   * 2
   */
  updatedCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      unreadCount: 'unreadCount',
      updatedCount: 'updatedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      unreadCount: 'number',
      updatedCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

