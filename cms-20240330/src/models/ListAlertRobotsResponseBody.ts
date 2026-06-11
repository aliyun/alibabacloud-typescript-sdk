// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertRobotsResponseBodyRobots extends $dara.Model {
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
   * The unique robot ID.
   * 
   * @example
   * test
   */
  robotId?: string;
  /**
   * @remarks
   * The robot type.
   * 
   * @example
   * DING
   */
  type?: string;
  /**
   * @remarks
   * The webhook URL.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=*******
   */
  url?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      digitalEmployeeName: 'digitalEmployeeName',
      lang: 'lang',
      name: 'name',
      robotId: 'robotId',
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

export class ListAlertRobotsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the robot.
   */
  robots?: ListAlertRobotsResponseBodyRobots[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      robots: 'robots',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      robots: { 'type': 'array', 'itemType': ListAlertRobotsResponseBodyRobots },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.robots)) {
      $dara.Model.validateArray(this.robots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

