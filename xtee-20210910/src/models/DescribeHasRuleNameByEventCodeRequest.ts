// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHasRuleNameByEventCodeRequest extends $dara.Model {
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
   * Event code
   * 
   * @example
   * de_atvmlf7412
   */
  eventCode?: string;
  /**
   * @remarks
   * Excluded policy ID
   * 
   * @example
   * 10621
   */
  excludeRuleId?: string;
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
   * Policy name
   * 
   * @example
   * 非常见设备
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      eventCode: 'eventCode',
      excludeRuleId: 'excludeRuleId',
      regId: 'regId',
      ruleName: 'ruleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      eventCode: 'string',
      excludeRuleId: 'string',
      regId: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

