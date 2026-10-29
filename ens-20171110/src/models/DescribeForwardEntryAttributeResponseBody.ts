// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeForwardEntryAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the DNAT entry was created. The time is displayed in UTC.
   * 
   * @example
   * 2020-04-26T15:38:27Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The elastic IP address (EIP) that provides public network access in the DNAT entry.
   * 
   * @example
   * 36.XXX.XXX.72
   */
  externalIp?: string;
  /**
   * @remarks
   * The external port or port range used for port forwarding.
   * - The port range must be from 1 to 65535.
   * - To forward traffic within a port range, separate the start port and the end port with a forward slash (/). Example: 10/20.
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
   * The health check port for the DNAT entry. The port must be within the internal port range. Default value: null.
   * 
   * @example
   * 80
   */
  healthCheckPort?: string;
  /**
   * @remarks
   * The private IP address of the instance that communicates with the Internet through the DNAT entry.
   * 
   * @example
   * 10.XXX.XXX.50
   */
  internalIp?: string;
  /**
   * @remarks
   * The internal port or port range used for port forwarding.
   * 
   * - The port range must be from 1 to 65535.
   * - To forward traffic within a port range, separate the start port and the end port with a forward slash (/). Example: 10/20.
   * 
   * @example
   * 22
   */
  internalPort?: string;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * - **TCP**: Forwards TCP packets.
   * 
   * - **UDP**: Forwards UDP packets.
   * 
   * - **Any**: Forwards packets of all protocols.
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
   * The standby elastic IP address (EIP) that provides public network access. You must select a standby EIP that is attached to the NAT gateway. The standby public IP address takes effect after the DNAT entry is created.
   * 
   * @example
   * 101.XXX.XXX.4
   */
  standbyExternalIp?: string;
  /**
   * @remarks
   * The status of the standby EIP. Valid values:
   * - Running: The standby EIP is enabled.
   * - Stopping: The standby EIP is being disabled.
   * - Stopped: The standby EIP is disabled.
   * - Starting: The standby EIP is being enabled.
   * 
   * @example
   * Stopped
   */
  standbyStatus?: string;
  /**
   * @remarks
   * The status of the DNAT entry. Valid values:
   * - Pending: The DNAT entry is being configured. It may be being created or modified.
   * - Available: The DNAT entry is available.
   * - Deleting: The DNAT entry is being deleted.
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

