// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHoneypotNodeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow the honeypot to access the Internet. Valid values:
   * 
   * - **true**: Allowed.
   * - **false**: Not allowed.
   * 
   * @example
   * true
   */
  allowHoneypotAccessInternet?: boolean;
  /**
   * @remarks
   * The number of available probes. This parameter is required. If this parameter is not specified, the API returns InvalidParam (400). The minimum value is 20. If the value is less than 20, the API returns InvalidProbeNum (400).
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
   * The list of allowed CIDR blocks. This parameter is required. At least one allowed CIDR block must be specified, such as 0.0.0.0/0. If this parameter is not specified, the API returns InvalidParam (400).
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

