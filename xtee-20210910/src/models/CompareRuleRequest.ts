// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompareRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, with a default value of **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Primary key ID of the previous policy version.
   * 
   * @example
   * 11518
   */
  previousRuleVersionId?: number;
  /**
   * @remarks
   * Region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Primary key ID of the policy version.
   * 
   * @example
   * 11519
   */
  ruleVersionId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      previousRuleVersionId: 'previousRuleVersionId',
      regId: 'regId',
      ruleVersionId: 'ruleVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      previousRuleVersionId: 'number',
      regId: 'string',
      ruleVersionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

