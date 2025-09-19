// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHoneypotNodeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow honeypots to access the Internet. Valid values:
   * 
   * *   **true**: allows honeypots to access the Internet.
   * *   **false**: does not allow honeypots to access the Internet.
   * 
   * @example
   * true
   */
  allowHoneypotAccessInternet?: boolean;
  /**
   * @remarks
   * The number of available probes.
   * 
   * @example
   * 20
   */
  availableProbeNum?: number;
  /**
   * @remarks
   * The name of the management node.
   * 
   * This parameter is required.
   * 
   * @example
   * manageNode
   */
  nodeName?: string;
  /**
   * @remarks
   * The CIDR blocks that are allowed to access the management node.
   */
  securityGroupProbeIpList?: string[];
  static names(): { [key: string]: string } {
    return {
      allowHoneypotAccessInternet: 'AllowHoneypotAccessInternet',
      availableProbeNum: 'AvailableProbeNum',
      nodeName: 'NodeName',
      securityGroupProbeIpList: 'SecurityGroupProbeIpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowHoneypotAccessInternet: 'boolean',
      availableProbeNum: 'number',
      nodeName: 'string',
      securityGroupProbeIpList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupProbeIpList)) {
      $dara.Model.validateArray(this.securityGroupProbeIpList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

