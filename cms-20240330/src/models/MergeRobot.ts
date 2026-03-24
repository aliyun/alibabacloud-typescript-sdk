// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MergeRobotExtend extends $dara.Model {
  /**
   * @remarks
   * 卡片模板。
   * 
   * @example
   * incident-card-template
   */
  cardTemplate?: string;
  /**
   * @remarks
   * 是否启用每日值班报告。
   * 
   * @example
   * true
   */
  dailyNoc?: boolean;
  /**
   * @remarks
   * 每日值班报告时间。
   * 
   * @example
   * 09:00
   */
  dailyNocTime?: string;
  /**
   * @remarks
   * 钉钉签名密钥。
   * 
   * @example
   * abc123
   */
  dingSignKey?: string;
  /**
   * @remarks
   * 是否启用出站请求。
   * 
   * @example
   * false
   */
  enableOutgoing?: boolean;
  /**
   * @remarks
   * 认证令牌。
   * 
   * @example
   * token-abc123
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      cardTemplate: 'cardTemplate',
      dailyNoc: 'dailyNoc',
      dailyNocTime: 'dailyNocTime',
      dingSignKey: 'dingSignKey',
      enableOutgoing: 'enableOutgoing',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardTemplate: 'string',
      dailyNoc: 'boolean',
      dailyNocTime: 'string',
      dingSignKey: 'string',
      enableOutgoing: 'boolean',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeRobot extends $dara.Model {
  /**
   * @remarks
   * 创建时间。
   * 
   * @example
   * 2025-03-11T08:21:58.789Z
   */
  createTime?: string;
  /**
   * @remarks
   * 扩展字段。
   */
  extend?: MergeRobotExtend;
  /**
   * @remarks
   * 最后修改时间。
   * 
   * @example
   * 2025-03-11T08:21:58.789Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * 机器人唯一标识符。
   * 
   * @example
   * robot-12345
   */
  identifier?: string;
  /**
   * @remarks
   * 语言偏好。
   * 
   * @example
   * zh-CN
   */
  lang?: string;
  /**
   * @remarks
   * 机器人名称。
   * 
   * @example
   * 运维告警机器人
   */
  name?: string;
  /**
   * @remarks
   * 机器人来源系统。
   * 
   * @example
   * dingtalk
   */
  source?: string;
  /**
   * @remarks
   * 机器人类型。
   * 
   * @example
   * dingtalk
   */
  type?: string;
  /**
   * @remarks
   * Webhook 地址。
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=abc123
   */
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      extend: 'extend',
      gmtModified: 'gmtModified',
      identifier: 'identifier',
      lang: 'lang',
      name: 'name',
      source: 'source',
      type: 'type',
      webhook: 'webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      extend: MergeRobotExtend,
      gmtModified: 'string',
      identifier: 'string',
      lang: 'string',
      name: 'string',
      source: 'string',
      type: 'string',
      webhook: 'string',
    };
  }

  validate() {
    if(this.extend && typeof (this.extend as any).validate === 'function') {
      (this.extend as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

