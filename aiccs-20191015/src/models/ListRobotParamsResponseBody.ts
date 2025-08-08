// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRobotParamsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 0
   */
  isEmpty?: number;
  /**
   * @example
   * name
   */
  paramCode?: string;
  paramName?: string;
  static names(): { [key: string]: string } {
    return {
      isEmpty: 'IsEmpty',
      paramCode: 'ParamCode',
      paramName: 'ParamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isEmpty: 'number',
      paramCode: 'string',
      paramName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotParamsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ListRobotParamsResponseBodyData[];
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * FF67D4D5-4E90-1DF5-BB8F-060BBFAD72DB
   */
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
      data: { 'type': 'array', 'itemType': ListRobotParamsResponseBodyData },
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

