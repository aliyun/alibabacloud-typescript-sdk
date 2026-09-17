// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlertRobotRequest extends $dara.Model {
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
   * The unique ID of the robot.
   * 
   * @example
   * test
   */
  robotId?: string;
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
   * This parameter is required.
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
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * default-cms-1423134313712421-cn-shanghai
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      digitalEmployeeName: 'digitalEmployeeName',
      lang: 'lang',
      name: 'name',
      robotId: 'robotId',
      robotSignKey: 'robotSignKey',
      type: 'type',
      url: 'url',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digitalEmployeeName: 'string',
      lang: 'string',
      name: 'string',
      robotId: 'string',
      robotSignKey: 'string',
      type: 'string',
      url: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

