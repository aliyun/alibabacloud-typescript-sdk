// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachToPolicyRequestIpPortProtocolList extends $dara.Model {
  /**
   * @remarks
   * The IP address of the protection object.
   * 
   * This parameter is required.
   * 
   * @example
   * 112.124.241.***
   */
  ip?: string;
  /**
   * @remarks
   * The port number of the protection object.
   * > Only port-specific mitigation policies support this parameter.
   * 
   * @example
   * 8*
   */
  port?: number;
  /**
   * @remarks
   * The port range of the protection object.
   * > Only port-specific mitigation policies support this parameter.
   * 
   * @example
   * 8*-9*
   */
  portRange?: string;
  /**
   * @remarks
   * The protocol type of the protection object. Valid values:
   * 
   * - **tcp**: Transmission Control Protocol.
   * - **udp**: User Datagram Protocol.
   * > Only port-specific mitigation policies support this parameter.
   * 
   * @example
   * tcp
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
      portRange: 'PortRange',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'number',
      portRange: 'string',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachToPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The list of protection objects.
   * 
   * This parameter is required.
   */
  ipPortProtocolList?: AttachToPolicyRequestIpPortProtocolList[];
  /**
   * @remarks
   * The policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cd8b4d70-e4e0-413a-b390-e71d********
   */
  policyId?: string;
  /**
   * @remarks
   * The version of the port-specific mitigation policy. Valid values:
   * 
   * - **Not specified**: Associates the default surf anti-DDoS engine policy.
   * - **2**: Associates the new stream anti-DDoS engine policy.
   * > Only port-specific mitigation policies support this parameter.
   * 
   * @example
   * 2
   */
  portVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ipPortProtocolList: 'IpPortProtocolList',
      policyId: 'PolicyId',
      portVersion: 'PortVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipPortProtocolList: { 'type': 'array', 'itemType': AttachToPolicyRequestIpPortProtocolList },
      policyId: 'string',
      portVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipPortProtocolList)) {
      $dara.Model.validateArray(this.ipPortProtocolList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

