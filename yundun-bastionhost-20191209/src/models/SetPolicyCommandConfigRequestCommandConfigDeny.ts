// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPolicyCommandConfigRequestCommandConfigDeny extends $dara.Model {
  /**
   * @remarks
   * The type of command control. Valid values:
   * 
   * *   **black**: blacklist mode.
   * *   **white**: whitelist mode.
   * 
   * This parameter is required.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The commands to be controlled.
   * 
   * > This parameter is required if AclType is set to white.
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

