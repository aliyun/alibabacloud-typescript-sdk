// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWebFilterRulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of web filtering rules. You can specify a maximum of 100 rules at a time, and the total number of rules in the template after creation must not exceed 100.
   * 
   * This parameter is required.
   */
  rulesShrink?: string;
  /**
   * @remarks
   * The ID of the web filtering template to which the web filtering rules belong. The template must exist within the current Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * wft-3f2a9c1d4b5e6f70
   */
  webFilterTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      rulesShrink: 'Rules',
      webFilterTemplateId: 'WebFilterTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rulesShrink: 'string',
      webFilterTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

