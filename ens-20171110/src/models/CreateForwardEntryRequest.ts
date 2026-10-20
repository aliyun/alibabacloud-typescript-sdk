// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateForwardEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The Elastic IP Address (EIP) that provides public network access.
   * 
   * The EIP must not be occupied by an SNAT rule of the same NAT gateway. You can check the IpLists.UsingStatus field returned by DescribeNatGateways to confirm that the EIP is in the Idle state.
   * 
   * This parameter is required.
   * 
   * @example
   * 121.XXX.XXX.28
   */
  externalIp?: string;
  /**
   * @remarks
   * The external port or port range for port forwarding.
   * - The port range must be within 1 to 65535.
   * - To forward traffic within a port range, separate the start and end ports with a forward slash (/), such as 10/20.
   * - If ExternalPort is set to a port range, InternalPort must also be set to a port range with the same number of ports. For example, if ExternalPort is set to 10/20, InternalPort must be set to 80/90.
   * 
   * This parameter is required.
   * 
   * @example
   * 22
   */
  externalPort?: string;
  /**
   * @remarks
   * The name of the DNAT rule. The name must be 2 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test0
   */
  forwardEntryName?: string;
  /**
   * @remarks
   * The health check port for DNAT. The port must be within the internal port range. Default value: empty.
   * 
   * @example
   * 80
   */
  healthCheckPort?: number;
  /**
   * @remarks
   * The private IP address of the instance that communicates with the Internet through the DNAT entry.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.XXX.XXX
   */
  internalIp?: string;
  /**
   * @remarks
   * The internal port or port range for port forwarding.
   * 
   * - The port range must be within 1 to 65535.
   * - To forward traffic within a port range, separate the start and end ports with a forward slash (/), such as 10/20.
   * 
   * This parameter is required.
   * 
   * @example
   * 22
   */
  internalPort?: string;
  /**
   * @remarks
   * The protocol type. Valid values: 
   * 
   * - **TCP**: forwards TCP packets.   
   * 
   * - **UDP**: forwards UDP packets.   
   * 
   * - **Any** (default): forwards all packets.
   * 
   * @example
   * Any
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * nat-5t7nh1cfm6kxiszlttr38****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The standby EIP that provides public network access. The standby EIP must be bound to the NAT gateway. After the DNAT entry is created, the standby EIP takes effect.
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

