// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHostResponseBodyHostProtocols extends $dara.Model {
  /**
   * @remarks
   * The fingerprint of the host. This parameter uniquely identifies a host. A value is returned for this parameter only if you have performed O\\&M operations on the host by using the bastion host. Otherwise, no value is returned.
   * 
   * @example
   * ssh-ed25519|3e:46:5a:e1:1f:0d:39:7e:61:35:d5:fa:7b:2b:**:**
   */
  hostFingerPrint?: string;
  /**
   * @remarks
   * The service port of the host.
   * 
   * @example
   * 22
   */
  port?: number;
  /**
   * @remarks
   * The protocol that is used to connect to the host. Valid values:
   * 
   * *   **SSH**
   * *   **RDP**
   * 
   * @example
   * SSH
   */
  protocolName?: string;
  static names(): { [key: string]: string } {
    return {
      hostFingerPrint: 'HostFingerPrint',
      port: 'Port',
      protocolName: 'ProtocolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostFingerPrint: 'string',
      port: 'number',
      protocolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

