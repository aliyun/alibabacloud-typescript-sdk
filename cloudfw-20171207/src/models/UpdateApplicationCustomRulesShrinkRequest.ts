// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationCustomRulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of custom application rules to be modified. You can specify up to 20 rules at a time. Rule IDs in the list must be unique.
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

