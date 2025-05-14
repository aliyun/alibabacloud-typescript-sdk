// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMediaLiveInputSecurityGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the security group. Letters, digits, hyphens (-), and underscores (_) are supported. The maximum length is 64 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * mysg
   */
  name?: string;
  /**
   * @remarks
   * The security group rules.
   * 
   * This parameter is required.
   * 
   * @example
   * ["10.1.1.0/24", "11.11.11.11/0"]
   */
  whitelistRulesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      whitelistRulesShrink: 'WhitelistRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      whitelistRulesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

