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

