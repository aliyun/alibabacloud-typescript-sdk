// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAiccsRobotResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Associated industry.
   * 
   * @example
   * 房地产
   */
  atProfession?: string;
  /**
   * @remarks
   * Associated business.
   * 
   * @example
   * 新房销售
   */
  atSence?: string;
  /**
   * @remarks
   * Robot ID.
   * 
   * @example
   * 12****
   */
  id?: number;
  /**
   * @remarks
   * Robot name.
   * 
   * @example
   * 测试机器人
   */
  robotName?: string;
  /**
   * @remarks
   * Robot type.
   * 
   * @example
   * CUSTOM
   */
  robotType?: string;
  static names(): { [key: string]: string } {
    return {
      atProfession: 'AtProfession',
      atSence: 'AtSence',
      id: 'Id',
      robotName: 'RobotName',
      robotType: 'RobotType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atProfession: 'string',
      atSence: 'string',
      id: 'number',
      robotName: 'string',
      robotType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAiccsRobotResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request status code. A return value of OK indicates that the request Succeeded.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Robot scripts.
   */
  data?: ListAiccsRobotResponseBodyData[];
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
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API invocation Succeeded. Valid values:
   * - **true**: Succeeded.
   * - **false**: failed.
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
      data: { 'type': 'array', 'itemType': ListAiccsRobotResponseBodyData },
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

