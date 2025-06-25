// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SetPolicyCommandConfigRequestCommandConfigApproval } from "./SetPolicyCommandConfigRequestCommandConfigApproval";
import { SetPolicyCommandConfigRequestCommandConfigDeny } from "./SetPolicyCommandConfigRequestCommandConfigDeny";


export class SetPolicyCommandConfigRequestCommandConfig extends $dara.Model {
  /**
   * @remarks
   * The command approval settings.
   * 
   * > A command approval policy is used to approve the commands that are excluded from a whitelist or blacklist specified in a command control policy. The command control policy takes precedence over the command approval policy in validation.
   */
  approval?: SetPolicyCommandConfigRequestCommandConfigApproval;
  /**
   * @remarks
   * The command control settings.
   * 
   * This parameter is required.
   */
  deny?: SetPolicyCommandConfigRequestCommandConfigDeny;
  static names(): { [key: string]: string } {
    return {
      approval: 'Approval',
      deny: 'Deny',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approval: SetPolicyCommandConfigRequestCommandConfigApproval,
      deny: SetPolicyCommandConfigRequestCommandConfigDeny,
    };
  }

  validate() {
    if(this.approval && typeof (this.approval as any).validate === 'function') {
      (this.approval as any).validate();
    }
    if(this.deny && typeof (this.deny as any).validate === 'function') {
      (this.deny as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

