// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEventRequest extends $dara.Model {
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
   * The version number (latest).
   * 
   * @example
   * 1
   */
  bizVersion?: number;
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
   * The event code.
   * 
   * @example
   * de_ambiby3420
   */
  eventCode?: string;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * 注册事件
   */
  eventName?: string;
  /**
   * @remarks
   * The input parameters in a JSON string.
   * 
   * @example
   * [{\\"fieldCode\\":\\"sessionId\\",\\"description\\":\\"会话ID\\",\\"fieldRank\\":0,\\"title\\":\\"会话ID\\",\\"fieldType\\":\\"STRING\\",\\"fieldSource\\":\\"DEFAULT\\"},{\\"fieldCode\\":\\"tags\\",\\"fieldRank\\":1,\\"title\\":\\"风险标签\\",\\"fieldType\\":\\"STRING\\",\\"fieldSource\\":\\"DEFAULT\\"},{\\"fieldCode\\":\\"score\\",\\"fieldRank\\":2,\\"title\\":\\"风险分值\\",\\"fieldType\\":\\"DOUBLE\\",\\"fieldSource\\":\\"DEFAULT\\"},{\\"fieldCode\\":\\"hitRules\\",\\"fieldRank\\":3,\\"title\\":\\"命中策略\\",\\"fieldType\\":\\"STRING\\",\\"fieldSource\\":\\"DEFAULT\\"}]
   */
  inputFieldsStr?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * 备注
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
   * The template type.
   * 
   * @example
   * 暂无
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      bizVersion: 'bizVersion',
      createType: 'createType',
      eventCode: 'eventCode',
      eventName: 'eventName',
      inputFieldsStr: 'inputFieldsStr',
      memo: 'memo',
      regId: 'regId',
      templateType: 'templateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      bizVersion: 'number',
      createType: 'string',
      eventCode: 'string',
      eventName: 'string',
      inputFieldsStr: 'string',
      memo: 'string',
      regId: 'string',
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

