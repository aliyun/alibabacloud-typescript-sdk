// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRuleV4Request extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   * 
   * @example
   * 123456
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * For details about JsonStrForRule, see the document [`Rule Object Description`](https://help.aliyun.com/document_detail/453053.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 无
   */
  jsonStrForRule?: string;
  /**
   * @remarks
   * Rule ID.
   * 
   * @example
   * 1
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStrForRule: 'JsonStrForRule',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStrForRule: 'string',
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

