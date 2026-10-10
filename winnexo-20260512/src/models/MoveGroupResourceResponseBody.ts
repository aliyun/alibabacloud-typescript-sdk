// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveGroupResourceResponseBody extends $dara.Model {
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
   * The collaboration space ID.
   * 
   * @example
   * group_example
   */
  groupId?: string;
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
   * The request trace ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The directory ID before the move.
   * 
   * @example
   * example
   */
  sourceDirectoryId?: string;
  /**
   * @remarks
   * The ID of the moved resource. This value remains unchanged before and after the move.
   * 
   * @example
   * example
   */
  sourceId?: string;
  /**
   * @remarks
   * The directory ID after the move.
   * 
   * @example
   * example
   */
  targetDirectoryId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      groupId: 'groupId',
      message: 'message',
      requestId: 'requestId',
      sourceDirectoryId: 'sourceDirectoryId',
      sourceId: 'sourceId',
      targetDirectoryId: 'targetDirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      groupId: 'string',
      message: 'string',
      requestId: 'string',
      sourceDirectoryId: 'string',
      sourceId: 'string',
      targetDirectoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

