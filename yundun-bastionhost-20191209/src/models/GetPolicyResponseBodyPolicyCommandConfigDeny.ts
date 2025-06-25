// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolicyResponseBodyPolicyCommandConfigDeny extends $dara.Model {
  /**
   * @remarks
   * The type of command control. Valid values:
   * 
   * *   white: whitelist mode.
   * *   black: blacklist mode.
   * 
   * @example
   * black
   */
  aclType?: string;
  /**
   * @remarks
   * An array of controlled commands.
   */
  commands?: string[];
  static names(): { [key: string]: string } {
    return {
      aclType: 'AclType',
      commands: 'Commands',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      commands: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.commands)) {
      $dara.Model.validateArray(this.commands);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

