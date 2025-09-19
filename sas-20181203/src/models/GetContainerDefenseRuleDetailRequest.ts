// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContainerDefenseRuleDetailRequest extends $dara.Model {
  lang?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * >  You can call the [ListContainerDefenseRule](https://help.aliyun.com/document_detail/2590599.html) operation to query the rule ID.
   * 
   * @example
   * 156
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

