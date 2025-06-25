// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SetPolicyProtocolConfigRequestProtocolConfigRDP } from "./SetPolicyProtocolConfigRequestProtocolConfigRdp";
import { SetPolicyProtocolConfigRequestProtocolConfigSSH } from "./SetPolicyProtocolConfigRequestProtocolConfigSsh";


export class SetPolicyProtocolConfigRequestProtocolConfig extends $dara.Model {
  /**
   * @remarks
   * The settings of the Remote Desktop Protocol (RDP) options.
   */
  RDP?: SetPolicyProtocolConfigRequestProtocolConfigRDP;
  /**
   * @remarks
   * The settings of the SSH and SSH Fine Transfer Protocol (SFTP) options.
   */
  SSH?: SetPolicyProtocolConfigRequestProtocolConfigSSH;
  static names(): { [key: string]: string } {
    return {
      RDP: 'RDP',
      SSH: 'SSH',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RDP: SetPolicyProtocolConfigRequestProtocolConfigRDP,
      SSH: SetPolicyProtocolConfigRequestProtocolConfigSSH,
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

