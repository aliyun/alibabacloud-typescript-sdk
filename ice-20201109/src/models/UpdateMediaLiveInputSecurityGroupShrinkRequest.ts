// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMediaLiveInputSecurityGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the security group. Letters, digits, hyphens (-), and underscores (_) are supported. It can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * mysg
   */
  name?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * This parameter is required.
   * 
   * @example
   * SEGK5KA6KYKAWQQH
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The security group rules.
   * 
   * This parameter is required.
   */
  whitelistRulesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      securityGroupId: 'SecurityGroupId',
      whitelistRulesShrink: 'WhitelistRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      securityGroupId: 'string',
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

