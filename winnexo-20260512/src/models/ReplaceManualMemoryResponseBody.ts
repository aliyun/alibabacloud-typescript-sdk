// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceManualMemoryResponseBody extends $dara.Model {
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
   * The complete content of the manual memory after it is saved. If the memory is successfully cleared, an empty string is returned.
   * 
   * @example
   * Prefers concise answers
   */
  content?: string;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * The current user is not an active member of the group cg_12345
   */
  message?: string;
  /**
   * @remarks
   * The request tracking ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      content: 'content',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      content: 'string',
      message: 'string',
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

