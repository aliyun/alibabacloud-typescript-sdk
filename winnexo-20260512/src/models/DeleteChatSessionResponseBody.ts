// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteChatSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the session is deleted.
   * 
   * @example
   * true
   */
  deleted?: boolean;
  /**
   * @remarks
   * Indicates whether the session is hard-deleted.
   * 
   * @example
   * true
   */
  hardDelete?: boolean;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * ok
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
   * The unique identifier of the function session.
   * 
   * @example
   * exampleSessionId
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      deleted: 'deleted',
      hardDelete: 'hardDelete',
      message: 'message',
      requestId: 'requestId',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      deleted: 'boolean',
      hardDelete: 'boolean',
      message: 'string',
      requestId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

