// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWebFilterRulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of web filtering rules to be updated. You can specify up to 20 rules at a time. The rule IDs in the list must be unique.
   * 
   * This parameter is required.
   */
  rulesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      rulesShrink: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rulesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

