// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPolicyResponseBodyPolicyProtocolConfigRDP } from "./GetPolicyResponseBodyPolicyProtocolConfigRdp";
import { GetPolicyResponseBodyPolicyProtocolConfigSSH } from "./GetPolicyResponseBodyPolicyProtocolConfigSsh";


export class GetPolicyResponseBodyPolicyProtocolConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration details of Remote Desktop Protocol (RDP) options.
   */
  RDP?: GetPolicyResponseBodyPolicyProtocolConfigRDP;
  /**
   * @remarks
   * The configuration details of SSH and SSH File Transfer Protocol (SFTP) options.
   */
  SSH?: GetPolicyResponseBodyPolicyProtocolConfigSSH;
  static names(): { [key: string]: string } {
    return {
      RDP: 'RDP',
      SSH: 'SSH',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RDP: GetPolicyResponseBodyPolicyProtocolConfigRDP,
      SSH: GetPolicyResponseBodyPolicyProtocolConfigSSH,
    };
  }

  validate() {
    if(this.RDP && typeof (this.RDP as any).validate === 'function') {
      (this.RDP as any).validate();
    }
    if(this.SSH && typeof (this.SSH as any).validate === 'function') {
      (this.SSH as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

