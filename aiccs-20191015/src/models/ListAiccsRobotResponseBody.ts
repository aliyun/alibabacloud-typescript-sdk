// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAiccsRobotResponseBodyData extends $dara.Model {
  atProfession?: string;
  atSence?: string;
  /**
   * @example
   * 123456
   */
  id?: number;
  robotName?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: ListAiccsRobotResponseBodyData[];
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
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

