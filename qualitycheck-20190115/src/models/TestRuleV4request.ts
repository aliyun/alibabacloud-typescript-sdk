// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestRuleV4Request extends $dara.Model {
  /**
   * @remarks
   * Whether this is the new quality check version. Valid values: 0 (legacy version) and 1 (new version). Default value: 1.
   * 
   * @example
   * 1
   */
  isSchemeData?: number;
  /**
   * @remarks
   * JSON request parameters for rule testing. For details, see the supplemental description of request parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * {"ruleList":[9771],"dialogues":[{"begin":0,"end":760,"hourMinSec":"00:00","role":"客户","identity":"客户","words":"123"},{"begin":21004,"end":21494,"hourMinSec":"00:21","role":"客服","identity":"客服","words":"123"}]}
   */
  testJson?: string;
  static names(): { [key: string]: string } {
    return {
      isSchemeData: 'IsSchemeData',
      testJson: 'TestJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSchemeData: 'number',
      testJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

