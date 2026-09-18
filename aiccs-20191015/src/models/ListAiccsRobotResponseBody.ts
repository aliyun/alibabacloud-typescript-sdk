// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAiccsRobotResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The industry.
   * 
   * @example
   * RealEstate
   */
  atProfession?: string;
  /**
   * @remarks
   * The associated business.
   * 
   * @example
   * NewHomeSales
   */
  atSence?: string;
  /**
   * @remarks
   * The robot ID.
   * 
   * @example
   * 12****
   */
  id?: number;
  /**
   * @remarks
   * The robot name.
   * 
   * @example
   * TestRobot
   */
  robotName?: string;
  /**
   * @remarks
   * The robot type.
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
   * The request status code. OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The robot scripts.
   */
  data?: ListAiccsRobotResponseBodyData[];
  /**
   * @remarks
   * The status code description.
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
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: Successful.
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

