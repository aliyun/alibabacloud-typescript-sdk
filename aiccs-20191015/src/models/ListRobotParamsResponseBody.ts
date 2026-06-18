// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRobotParamsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the parameter is required. Valid values:
   * 
   * - 0: Not required.
   * 
   * - 1: Required.
   * 
   * @example
   * 0
   */
  isEmpty?: number;
  /**
   * @remarks
   * Parameter ID.
   * 
   * @example
   * 1
   */
  paramCode?: string;
  /**
   * @remarks
   * Parameter name.
   * 
   * @example
   * 名称
   */
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
   * @remarks
   * Status code. A value of 200 indicates that the request succeeded.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Parameter information.
   */
  data?: ListRobotParamsResponseBodyData[];
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * FF67D4D5-4E90-1DF5-BB8F-060BBFAD72DB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API invocation succeeded. Valid values:
   * - **true**: Succeeded.
   * - **false**: Failed.
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

