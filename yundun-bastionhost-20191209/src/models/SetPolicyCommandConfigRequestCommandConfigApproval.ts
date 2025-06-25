// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPolicyCommandConfigRequestCommandConfigApproval extends $dara.Model {
  /**
   * @remarks
   * The commands that can be run only after approval.
   */
  commands?: string[];
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

