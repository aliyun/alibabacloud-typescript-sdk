// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgDesensPlanAddOrUpdateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The collection of data masking rules to add or update.
   * 
   * This parameter is required.
   */
  desensRulesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      desensRulesShrink: 'DesensRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desensRulesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

