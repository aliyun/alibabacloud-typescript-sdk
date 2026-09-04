// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadNumGroupByClassResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The message category ID.
   * 
   * @example
   * 1
   */
  classId?: number;
  /**
   * @remarks
   * The number of unread messages in the category.
   * 
   * @example
   * 1
   */
  msgCount?: number;
  static names(): { [key: string]: string } {
    return {
      classId: 'ClassId',
      msgCount: 'MsgCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classId: 'number',
      msgCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadNumGroupByClassResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the call fails. For more information, see error codes.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The execution result.
   */
  data?: ReadNumGroupByClassResponseBodyData[];
  /**
   * @remarks
   * The message returned when the call fails.
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5F62766-1C2F-1F56-A39D-63E3D30F0633
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ReadNumGroupByClassResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

