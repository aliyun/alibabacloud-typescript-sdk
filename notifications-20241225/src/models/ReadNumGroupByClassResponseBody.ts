// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadNumGroupByClassResponseBodyData extends $dara.Model {
  classId?: number;
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
   * @example
   * SUCCESS
   */
  code?: string;
  data?: ReadNumGroupByClassResponseBodyData[];
  message?: string;
  requestId?: string;
  /**
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

