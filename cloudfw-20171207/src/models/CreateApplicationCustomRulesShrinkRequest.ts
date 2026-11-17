// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationCustomRulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application template to which the custom rules belong. The template must exist within the current Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * ati-4f0691c56b8d4f06
   */
  applicationTemplateId?: string;
  /**
   * @remarks
   * The list of custom rules for the application. You can specify up to 100 rules at a time, and the total number of rules in the template after creation must not exceed 100.
   * 
   * This parameter is required.
   */
  rulesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      applicationTemplateId: 'ApplicationTemplateId',
      rulesShrink: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationTemplateId: 'string',
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

