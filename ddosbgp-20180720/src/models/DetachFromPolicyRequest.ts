// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachFromPolicyRequestIpPortProtocolList extends $dara.Model {
  /**
   * @remarks
   * The IP address of the protected object.
   * 
   * This parameter is required.
   * 
   * @example
   * 47.118.172.***
   */
  ip?: string;
  /**
   * @remarks
   * The port of the protected object.
   * 
   * @example
   * 8*
   */
  port?: number;
  /**
   * @remarks
   * The port range of the protected object.
   * > Only port-specific mitigation policies support this parameter.
   * 
   * @example
   * 8*-9*
   */
  portRange?: string;
  /**
   * @remarks
   * The protocol type of the protected object. Valid values:
   * 
   * - **tcp**: Transmission Control Protocol.
   * - **udp**: User Datagram Protocol.
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

export class DetachFromPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The list of protected objects.
   * 
   * This parameter is required.
   */
  ipPortProtocolList?: DetachFromPolicyRequestIpPortProtocolList[];
  /**
   * @remarks
   * The policy type. Valid values:
   * - **default**: default mitigation policy.
   * - **l3**: IP-specific mitigation policy.
   * - **l4**: port-specific mitigation policy.
   * 
   * This parameter is required.
   * 
   * @example
   * l3
   */
  policyType?: string;
  /**
   * @remarks
   * The version of the port-specific mitigation policy. Valid values:
   * 
   * - **Not specified**: dissociates the default surf anti-DDoS engine policy.
   * - **2**: dissociates the new stream anti-DDoS engine policy.
   * > Only port-specific mitigation policies support this parameter.
   * 
   * @example
   * 2
   */
  portVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ipPortProtocolList: 'IpPortProtocolList',
      policyType: 'PolicyType',
      portVersion: 'PortVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipPortProtocolList: { 'type': 'array', 'itemType': DetachFromPolicyRequestIpPortProtocolList },
      policyType: 'string',
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

