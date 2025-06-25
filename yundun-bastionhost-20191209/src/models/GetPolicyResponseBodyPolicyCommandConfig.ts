// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPolicyResponseBodyPolicyCommandConfigApproval } from "./GetPolicyResponseBodyPolicyCommandConfigApproval";
import { GetPolicyResponseBodyPolicyCommandConfigDeny } from "./GetPolicyResponseBodyPolicyCommandConfigDeny";


export class GetPolicyResponseBodyPolicyCommandConfig extends $dara.Model {
  /**
   * @remarks
   * The details of the command approval settings.
   */
  approval?: GetPolicyResponseBodyPolicyCommandConfigApproval;
  /**
   * @remarks
   * The details of the command control setting.
   */
  deny?: GetPolicyResponseBodyPolicyCommandConfigDeny;
  static names(): { [key: string]: string } {
    return {
      approval: 'Approval',
      deny: 'Deny',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approval: GetPolicyResponseBodyPolicyCommandConfigApproval,
      deny: GetPolicyResponseBodyPolicyCommandConfigDeny,
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

