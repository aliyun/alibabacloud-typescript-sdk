// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeForwardTableEntriesResponseBodyForwardTableEntriesForwardTableEntry extends $dara.Model {
  /**
   * @remarks
   * *   The EIPs that can be accessed over the Internet when you query DNAT entries of Internet NAT gateways.
   * *   The NAT IP addresses that can be accessed by external networks when you query DNAT entries of VPC NAT gateways.
   * 
   * @example
   * 139.79.XX.XX
   */
  externalIp?: string;
  /**
   * @remarks
   * *   The external port or port range that is used for port forwarding when you query DNAT entries of Internet NAT gateways.
   * *   The port that is used when the NAT IP address can be accessed by external networks when you query DNAT entries of VPC NAT gateways.
   * 
   * @example
   * 80
   */
  externalPort?: string;
  /**
   * @remarks
   * The ID of the DNAT entry.
   * 
   * @example
   * fwd-119smw5tk****
   */
  forwardEntryId?: string;
  /**
   * @remarks
   * The name of the DNAT entry.
   * 
   * @example
   * ForwardEntry-1
   */
  forwardEntryName?: string;
  /**
   * @remarks
   * The ID of the DNAT table to which the DNAT entry belongs.
   * 
   * @example
   * ftb-11tc6xgmv****
   */
  forwardTableId?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * *   The private IP address of the ECS instance that uses DNAT entries to communicate with the Internet when you query DNAT entries of Internet NAT gateways.
   * *   The private IP address that uses DNAT entries when you query DNAT entries of VPC NAT gateways.
   * 
   * @example
   * 192.168.XX.XX
   */
  internalIp?: string;
  /**
   * @remarks
   * *   The internal port or port range that is used for port forwarding when you query DNAT entries of Internet NAT gateways.
   * *   The destination ECS instance port to be mapped when you query DNAT entries of VPC NAT gateways.
   * 
   * @example
   * 25
   */
  internalPort?: string;
  /**
   * @remarks
   * The protocol. Valid values:
   * 
   * *   **TCP**
   * *   **UDP**
   * *   **Any**
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The ID of the NAT gateway to which the DNAT entry belongs.
   * 
   * @example
   * ngw-bp1uewa15k4iy5770****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The status of the DNAT entry. Valid values:
   * 
   * *   **Pending**
   * *   **Available**
   * *   **Deleting**
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
      forwardTableId: 'ForwardTableId',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
      natGatewayId: 'NatGatewayId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalIp: 'string',
      externalPort: 'string',
      forwardEntryId: 'string',
      forwardEntryName: 'string',
      forwardTableId: 'string',
      internalIp: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
      natGatewayId: 'string',
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

export class DescribeForwardTableEntriesResponseBodyForwardTableEntries extends $dara.Model {
  forwardTableEntry?: DescribeForwardTableEntriesResponseBodyForwardTableEntriesForwardTableEntry[];
  static names(): { [key: string]: string } {
    return {
      forwardTableEntry: 'ForwardTableEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardTableEntry: { 'type': 'array', 'itemType': DescribeForwardTableEntriesResponseBodyForwardTableEntriesForwardTableEntry },
    };
  }

  validate() {
    if(Array.isArray(this.forwardTableEntry)) {
      $dara.Model.validateArray(this.forwardTableEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeForwardTableEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of DNAT entries.
   */
  forwardTableEntries?: DescribeForwardTableEntriesResponseBodyForwardTableEntries;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A6C4A8B1-7561-4509-949C-20DEB40D71E6
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
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
      forwardTableEntries: DescribeForwardTableEntriesResponseBodyForwardTableEntries,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.forwardTableEntries && typeof (this.forwardTableEntries as any).validate === 'function') {
      (this.forwardTableEntries as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

