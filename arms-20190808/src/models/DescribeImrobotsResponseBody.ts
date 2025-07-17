// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIMRobotsResponseBodyPageBeanAlertIMRobotsDispatchRules extends $dara.Model {
  /**
   * @remarks
   * The ID of the notification policy.
   * 
   * @example
   * 12345
   */
  id?: number;
  /**
   * @remarks
   * The name of the notification policy.
   * 
   * @example
   * Notification policy test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
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

export class DescribeIMRobotsResponseBodyPageBeanAlertIMRobots extends $dara.Model {
  /**
   * @remarks
   * The time when the IM chatbot was created.
   * 
   * @example
   * 2023-01-16 17:21:48
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether daily statistics are sent. Valid values:
   * 
   * *   `false` (default): Daily statistics are not sent.
   * *   `true`: Daily statistics are sent.
   * 
   * @example
   * true
   */
  dailyNoc?: boolean;
  /**
   * @remarks
   * The point in time at which the daily statistics are sent. The information that ARMS sends at the specified points in time includes the total number of alerts generated on the current day, the number of cleared alerts, and the number of alerts to be cleared.
   * 
   * @example
   * 09:30,17:30
   */
  dailyNocTime?: string;
  /**
   * @remarks
   * The signature key of DingTalk. If you specify a signature key, DingTalk authentication is performed by using the signature key. If you do not specify a signature key, a whitelist is used for authentication by default. The keyword of the whitelist is **Alert**.
   * 
   * @example
   * ******
   */
  dingSignKey?: string;
  /**
   * @remarks
   * The notification policies.
   */
  dispatchRules?: DescribeIMRobotsResponseBodyPageBeanAlertIMRobotsDispatchRules[];
  /**
   * @remarks
   * The webhook URL of the IM chatbot.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=e1a049121******
   */
  robotAddr?: string;
  /**
   * @remarks
   * The ID of the IM chatbot.
   * 
   * @example
   * 123
   */
  robotId?: number;
  /**
   * @remarks
   * The name of the IM chatbot.
   * 
   * @example
   * Chatbot name
   */
  robotName?: string;
  /**
   * @remarks
   * The type of the IM chatbot. Valid values:
   * 
   * *   `dingding`: DingTalk chatbot
   * *   `wechat`: WeCom chatbot
   * 
   * @example
   * dingding
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dailyNoc: 'DailyNoc',
      dailyNocTime: 'DailyNocTime',
      dingSignKey: 'DingSignKey',
      dispatchRules: 'DispatchRules',
      robotAddr: 'RobotAddr',
      robotId: 'RobotId',
      robotName: 'RobotName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dailyNoc: 'boolean',
      dailyNocTime: 'string',
      dingSignKey: 'string',
      dispatchRules: { 'type': 'array', 'itemType': DescribeIMRobotsResponseBodyPageBeanAlertIMRobotsDispatchRules },
      robotAddr: 'string',
      robotId: 'number',
      robotName: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dispatchRules)) {
      $dara.Model.validateArray(this.dispatchRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIMRobotsResponseBodyPageBean extends $dara.Model {
  /**
   * @remarks
   * The queried IM chatbots.
   */
  alertIMRobots?: DescribeIMRobotsResponseBodyPageBeanAlertIMRobots[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of IM chatbots returned per page.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The total number of queried IM chatbots.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      alertIMRobots: 'AlertIMRobots',
      page: 'Page',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertIMRobots: { 'type': 'array', 'itemType': DescribeIMRobotsResponseBodyPageBeanAlertIMRobots },
      page: 'number',
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alertIMRobots)) {
      $dara.Model.validateArray(this.alertIMRobots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIMRobotsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned objects.
   */
  pageBean?: DescribeIMRobotsResponseBodyPageBean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4D6C358A-A58B-4F4B-94CE-F5AAF023****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: DescribeIMRobotsResponseBodyPageBean,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageBean && typeof (this.pageBean as any).validate === 'function') {
      (this.pageBean as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

