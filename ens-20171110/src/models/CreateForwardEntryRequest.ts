// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateForwardEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The elastic IP address (EIP) that is used to access the Internet.
   * 
   * This parameter is required.
   * 
   * @example
   * 121.11.36.28
   */
  externalIp?: string;
  /**
   * @remarks
   * The external port or port range that is used for port forwarding.
   * 
   * *   Valid values: 1 to 65535.
   * *   To specify a port range, separate the first port and the last port with a forward slash (/), such as 10/20.
   * *   If you set ExternalPort to a port range, you must also set InternalPort to a port range. The number of ports in the port ranges must be the same. For example, if you set ExternalPort to 10/20, you can set InternalPort to 80/90.
   * 
   * This parameter is required.
   * 
   * @example
   * 22
   */
  externalPort?: string;
  /**
   * @remarks
   * The name of the DNAT entry. The name must be 2 to 128 characters in length. The name cannot start with `http://` or `https://`.
   * 
   * @example
   * test0
   */
  forwardEntryName?: string;
  /**
   * @remarks
   * The probe port. The port must be within the internal port range. By default, this parameter is left empty.
   * 
   * @example
   * 80
   */
  healthCheckPort?: number;
  /**
   * @remarks
   * The private IP address of the instance that uses the DNAT entry for Internet communication.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.0.13
   */
  internalIp?: string;
  /**
   * @remarks
   * The internal port or port range that is used for port forwarding.
   * 
   * *   Valid values: 1 to 65535.
   * *   To specify a port range, separate the first port and the last port with a forward slash (/), such as 10/20.
   * 
   * This parameter is required.
   * 
   * @example
   * 22
   */
  internalPort?: string;
  /**
   * @remarks
   * The protocol. Valid values:
   * 
   * *   **TCP**: forwards TCP packets.
   * *   **UDP**: forwards UDP packets.
   * *   **Any** (default): forwards all packets.
   * 
   * @example
   * Any
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The ID of the Network Address Translation (NAT) gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * nat-5t7nh1cfm6kxiszlttr383xpo
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The secondary EIP that is used to access the Internet. You need to select a secondary EIP that is bound to NAT. After the DNAT entry is created, the secondary EIP takes effect.
   * 
   * @example
   * 101.XXX.XXX.4
   */
  standbyExternalIp?: string;
  static names(): { [key: string]: string } {
    return {
      externalIp: 'ExternalIp',
      externalPort: 'ExternalPort',
      forwardEntryName: 'ForwardEntryName',
      healthCheckPort: 'HealthCheckPort',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
      natGatewayId: 'NatGatewayId',
      standbyExternalIp: 'StandbyExternalIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalIp: 'string',
      externalPort: 'string',
      forwardEntryName: 'string',
      healthCheckPort: 'number',
      internalIp: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
      natGatewayId: 'string',
      standbyExternalIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

