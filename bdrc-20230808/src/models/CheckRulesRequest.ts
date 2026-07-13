// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:ecs:123***890:cn-shanghai:instance/i-001***90
   */
  resourceArn?: string;
  /**
   * @remarks
   * The ID of the rule to update. If you do not specify this parameter, all rules are updated.
   * 
   * @example
   * rule-000***dav
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceArn: 'ResourceArn',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceArn: 'string',
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

