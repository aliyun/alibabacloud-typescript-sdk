// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHitRuleFluctuationRequest extends $dara.Model {
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
   * Event codes, separated by commas (,).
   * 
   * @example
   * de_ahqhsw7665,de_agbzfi5134
   */
  eventCodes?: string;
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
   * Policy status
   * 
   * @example
   * DRAFT
   */
  ruleStatus?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      eventCodes: 'eventCodes',
      regId: 'regId',
      ruleStatus: 'ruleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      eventCodes: 'string',
      regId: 'string',
      ruleStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

