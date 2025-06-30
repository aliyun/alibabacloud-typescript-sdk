// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteResolverRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The forwarding rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * hr****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

