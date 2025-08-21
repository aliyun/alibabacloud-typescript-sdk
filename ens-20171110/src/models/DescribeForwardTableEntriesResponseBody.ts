// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeForwardTableEntriesResponseBodyForwardTableEntries extends $dara.Model {
  /**
   * @remarks
   * The EIP in the DNAT entry. The public IP address is used to access the Internet.
   * 
   * @example
   * 120.XXX.XXX.70
   */
  externalIp?: string;
  /**
   * @remarks
   * The external port or port range that is used in port forwarding.
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
   * fwd-5tf66679oi2uoxcvlg0g2****
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
   * The probe port of DNAT.
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
   * 10.XXX.XXX.3
   */
  internalIp?: string;
  /**
   * @remarks
   * The internal port or port range that is used for port forwarding.
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
   * nat-5tawjw5j7sgd2deujxuk0****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The secondary EIP that is used to access the Internet.
   * 
   * @example
   * 101.XXX.XXX.7
   */
  standbyExternalIp?: string;
  /**
   * @remarks
   * The status of the secondary EIP. Valid values:
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
   * The status of the DNAT entry. Valid values:
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
      externalIp: 'ExternalIp',
      externalPort: 'ExternalPort',
      forwardEntryId: 'ForwardEntryId',
      forwardEntryName: 'ForwardEntryName',
      healthCheckPort: 'HealthCheckPort',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
      natGatewayId: 'NatGatewayId',
      standbyExternalIp: 'StandbyExternalIp',
      standbyStatus: 'StandbyStatus',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalIp: 'string',
      externalPort: 'string',
      forwardEntryId: 'string',
      forwardEntryName: 'string',
      healthCheckPort: 'string',
      internalIp: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
      natGatewayId: 'string',
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

export class DescribeForwardTableEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of DNAT entries.
   */
  forwardTableEntries?: DescribeForwardTableEntriesResponseBodyForwardTableEntries[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      forwardTableEntries: 'ForwardTableEntries',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardTableEntries: { 'type': 'array', 'itemType': DescribeForwardTableEntriesResponseBodyForwardTableEntries },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.forwardTableEntries)) {
      $dara.Model.validateArray(this.forwardTableEntries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

