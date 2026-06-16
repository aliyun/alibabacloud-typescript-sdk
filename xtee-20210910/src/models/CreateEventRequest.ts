// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The creation type.
   * 
   * @example
   * NORMAL
   */
  createType?: string;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * 登录事件
   */
  eventName?: string;
  /**
   * @remarks
   * The input parameters in a JSON string.
   * 
   * @example
   * [{"fieldCode":"accountId","description":"用户的账户ID，唯一标识一个账户的id","fieldRank":1,"title":"账户ID","fieldType":"STRING","fieldSource":"DEFAULT"},{"fieldCode":"hitRules","fieldRank":2,"title":"命中策略","fieldType":"STRING","fieldSource":"DEFAULT"},{"fieldCode":"age","description":"","fieldRank":3,"title":"年龄","fieldType":"INT","fieldSource":"DEFAULT"},{"fieldCode":"ip","description":"IP地址","fieldRank":4,"title":"IP地址","fieldType":"STRING","fieldSource":"DEFAULT"},{"fieldCode":"tags","fieldRank":5,"title":"风险标签","fieldType":"STRING","fieldSource":"DEFAULT"},{"fieldCode":"score","fieldRank":6,"title":"风险分值","fieldType":"DOUBLE","fieldSource":"DEFAULT"},{"fieldCode":"hitList","fieldRank":7}]
   */
  inputFieldsStr?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * 登录事件描述
   */
  memo?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The templatetype of the input field.
   * 
   * @example
   * register
   */
  templateCode?: string;
  /**
   * @remarks
   * The name of the published template.
   * 
   * @example
   * 注册事件模版
   */
  templateName?: string;
  /**
   * @remarks
   * The templatetype.
   * 
   * @example
   * TASK
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      createType: 'createType',
      eventName: 'eventName',
      inputFieldsStr: 'inputFieldsStr',
      memo: 'memo',
      regId: 'regId',
      templateCode: 'templateCode',
      templateName: 'templateName',
      templateType: 'templateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      createType: 'string',
      eventName: 'string',
      inputFieldsStr: 'string',
      memo: 'string',
      regId: 'string',
      templateCode: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

