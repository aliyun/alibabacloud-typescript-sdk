// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeForwardEntryAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation time. The time is displayed in UTC.
   * 
   * @example
   * 2020-04-26T15:38:27Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The EIP in the DNAT entry. The public IP address is used to access the Internet.
   * 
   * @example
   * 36.XXX.XXX.72
   */
  externalIp?: string;
  /**
   * @remarks
   * The external port or port range that is used for port forwarding.
   * 
   * *   Valid values: 1 to 65535.
   * *   To specify a port range, separate the first port and the last port with a forward slash (/), such as 10/20.
   * 
   * @example
   * 22
   */
  externalPort?: string;
  /**
   * @remarks
   * The ID of the DNAT entry.
   * 
   * @example
   * fwd-5tfi6f0rutmd00xrhkag7****
   */
  forwardEntryId?: string;
  /**
   * @remarks
   * The name of the DNAT entry.
   * 
   * @example
   * test0
   */
  forwardEntryName?: string;
  /**
   * @remarks
   * The DNAT probe port. The port must be within the internal port range. By default, this parameter is empty.
   * 
   * @example
   * 80
   */
  healthCheckPort?: string;
  /**
   * @remarks
   * The private IP address of the instance that uses the DNAT entry for Internet communication.
   * 
   * @example
   * 10.XXX.XXX.50
   */
  internalIp?: string;
  /**
   * @remarks
   * The internal port or port range that is used for port forwarding.
   * 
   * *   Valid values: 1 to 65535.
   * *   To specify a port range, separate the first port and the last port with a forward slash (/), such as 10/20.
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
   * *   **Any**: forwards all packets.
   * 
   * @example
   * Any
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * @example
   * nat-5t7nh1cfm6kxiszlttr38****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6666C5A5-75ED-422E-A022-7121FA18C968
   */
  requestId?: string;
  /**
   * @remarks
   * The secondary EIP that is used to access the Internet. You need to select a secondary EIP that is bound to NAT. After the DNAT entry is created, the secondary EIP takes effect.
   * 
   * @example
   * 101.XXX.XXX.4
   */
  standbyExternalIp?: string;
  /**
   * @remarks
   * The status of the secondary EIP.
   * 
   * *   Running
   * *   Stopping
   * *   Stopped
   * *   Starting
   * 
   * @example
   * Stopped
   */
  standbyStatus?: string;
  /**
   * @remarks
   * The status of the DNAT entry.
   * 
   * *   Pending: The DNAT entry is being created or modified.
   * *   Available: The DNAT entry is available.
   * *   Deleting: The DNAT entry is being deleted.
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      externalIp: 'ExternalIp',
      externalPort: 'ExternalPort',
      forwardEntryId: 'ForwardEntryId',
      forwardEntryName: 'ForwardEntryName',
      healthCheckPort: 'HealthCheckPort',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
      natGatewayId: 'NatGatewayId',
      requestId: 'RequestId',
      standbyExternalIp: 'StandbyExternalIp',
      standbyStatus: 'StandbyStatus',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      externalIp: 'string',
      externalPort: 'string',
      forwardEntryId: 'string',
      forwardEntryName: 'string',
      healthCheckPort: 'string',
      internalIp: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
      natGatewayId: 'string',
      requestId: 'string',
      standbyExternalIp: 'string',
      standbyStatus: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

