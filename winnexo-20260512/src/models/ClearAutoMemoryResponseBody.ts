// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClearAutoMemoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of automatic memory files successfully deleted in this request. The value is 0 if no memory is available to be cleared.
   * 
   * @example
   * 3
   */
  clearedCount?: number;
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
  /**
   * @remarks
   * The type of automatic memory cleared in this request. Valid values: user, feedback, reference, project, and all.
   * 
   * @example
   * project
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clearedCount: 'clearedCount',
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clearedCount: 'number',
      code: 'string',
      message: 'string',
      requestId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

