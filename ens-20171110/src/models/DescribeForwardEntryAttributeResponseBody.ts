// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeForwardEntryAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation time in UTC.
   * 
   * @example
   * 2020-04-26T15:38:27Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The Elastic IP Address (EIP) that provides public network access in the DNAT entry.
   * 
   * @example
   * 36.XXX.XXX.72
   */
  externalIp?: string;
  /**
   * @remarks
   * The external port or port range for port forwarding.
   * 
   * - The port range must be between 1 and 65535.
   * 
   * - To forward a port range, separate the start and end ports with a forward slash (/), such as 10/20.
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
   * The probe port for DNAT. It must fall within the internal port range. The default value is empty.
   * 
   * @example
   * 80
   */
  healthCheckPort?: string;
  /**
   * @remarks
   * The private IP address of the instance that communicates over the public network through the DNAT entry.
   * 
   * @example
   * 10.XXX.XXX.50
   */
  internalIp?: string;
  /**
   * @remarks
   * The internal port or port range for port forwarding.
   * 
   * - The port range must be between 1 and 65535.
   * 
   * - To forward a port range, separate the start and end ports with a forward slash (/), such as 10/20.
   * 
   * @example
   * 22
   */
  internalPort?: string;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * - **TCP**: Forwards TCP messages.
   * 
   * - **UDP**: Forwards UDP messages.
   * 
   * - **Any**: Forwards messages of all protocols.
   * 
   * @example
   * Any
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The ID of the NAT Gateway.
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
   * The standby Elastic IP Address (EIP) that provides public network access. You must select a standby EIP attached to the NAT Gateway. The standby public IP becomes active after the DNAT entry is created.
   * 
   * @example
   * 101.XXX.XXX.4
   */
  standbyExternalIp?: string;
  /**
   * @remarks
   * The status of the standby EIP.
   * 
   * - Running: Enabled.
   * 
   * - Stopping: Being disabled.
   * 
   * - Stopped: Disabled.
   * 
   * - Starting: Being enabled.
   * 
   * @example
   * Stopped
   */
  standbyStatus?: string;
  /**
   * @remarks
   * The status of the DNAT entry.
   * 
   * - Pending: The configuration is in progress, such as during creation or modification.
   * 
   * - Available: The entry is active.
   * 
   * - Deleting: The entry is being deleted.
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

