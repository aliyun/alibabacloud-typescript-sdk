// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMediaLiveInputSecurityGroupRequest extends $dara.Model {
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
  whitelistRules?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      whitelistRules: 'WhitelistRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      whitelistRules: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.whitelistRules)) {
      $dara.Model.validateArray(this.whitelistRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

