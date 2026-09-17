// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlertRobotRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the digital employee.
   * 
   * @example
   * apsara-ops
   */
  digitalEmployeeName?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * zh_CN
   */
  lang?: string;
  /**
   * @remarks
   * The name of the robot.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The signature key of the robot.
   * 
   * @example
   * abc123
   */
  robotSignKey?: string;
  /**
   * @remarks
   * The type of the robot.
   * 
   * @example
   * DING
   */
  type?: string;
  /**
   * @remarks
   * The webhook URL of the robot.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=**************
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      digitalEmployeeName: 'digitalEmployeeName',
      lang: 'lang',
      name: 'name',
      robotSignKey: 'robotSignKey',
      type: 'type',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digitalEmployeeName: 'string',
      lang: 'string',
      name: 'string',
      robotSignKey: 'string',
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

