// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddRuleV4Request extends $dara.Model {
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123456
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * Specifies whether to copy the rule. Set this to \\`true\\` to copy the rule.
   * 
   * @example
   * false
   */
  isCopy?: boolean;
  /**
   * @remarks
   * For more information about JsonStrForRule, see [`Rule object description`](https://help.aliyun.com/document_detail/453053.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 无
   */
  jsonStrForRule?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      isCopy: 'IsCopy',
      jsonStrForRule: 'JsonStrForRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      isCopy: 'boolean',
      jsonStrForRule: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

