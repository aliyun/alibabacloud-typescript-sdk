// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Creation type
   * 
   * @example
   * NORMAL
   */
  createType?: string;
  /**
   * @remarks
   * Event name.
   * 
   * @example
   * 登录事件
   */
  eventName?: string;
  /**
   * @remarks
   * Input parameters, JSON string.
   * 
   * @example
   * [{"fieldCode":"accountId","description":"用户的账户ID，唯一标识一个账户的id","fieldRank":1,"title":"账户ID","fieldType":"STRING","fieldSource":"DEFAULT"},{"fieldCode":"hitRules","fieldRank":2,"title":"命中策略","fieldType":"STRING","fieldSource":"DEFAULT"},{"fieldCode":"age","description":"","fieldRank":3,"title":"年龄","fieldType":"INT","fieldSource":"DEFAULT"},{"fieldCode":"ip","description":"IP地址","fieldRank":4,"title":"IP地址","fieldType":"STRING","fieldSource":"DEFAULT"},{"fieldCode":"tags","fieldRank":5,"title":"风险标签","fieldType":"STRING","fieldSource":"DEFAULT"},{"fieldCode":"score","fieldRank":6,"title":"风险分值","fieldType":"DOUBLE","fieldSource":"DEFAULT"},{"fieldCode":"hitList","fieldRank":7}]
   */
  inputFieldsStr?: string;
  /**
   * @remarks
   * Memo information
   * 
   * @example
   * 登录事件描述
   */
  memo?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Input field template type
   * 
   * @example
   * register
   */
  templateCode?: string;
  /**
   * @remarks
   * Published template name.
   * 
   * @example
   * 注册事件模版
   */
  templateName?: string;
  /**
   * @remarks
   * Template type.
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

