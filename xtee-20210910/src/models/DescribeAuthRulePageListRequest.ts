// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuthRulePageListRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_arcehq4370
   */
  eventCode?: string;
  /**
   * @remarks
   * The region code.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * 分析中心事件测试_策略01
   */
  ruleName?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      eventCode: 'eventCode',
      regId: 'regId',
      ruleName: 'ruleName',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      eventCode: 'string',
      regId: 'string',
      ruleName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

