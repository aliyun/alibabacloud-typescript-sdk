// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadClassNameResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The message category ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The message category name.
   * 
   * @example
   * 安全消息
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadClassNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned by the system. For more information about error codes, see error codes.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The execution result.
   */
  data?: ReadClassNameResponseBodyData[];
  /**
   * @remarks
   * The message returned when the call failed.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 73FD6AE8-898F-5D09-9763-69B8A875488A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
   * 
   * @example
   * True
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
      data: { 'type': 'array', 'itemType': ReadClassNameResponseBodyData },
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

