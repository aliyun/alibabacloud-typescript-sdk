// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpListsIpList extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP associated with the NAT gateway.
   * 
   * @example
   * eip-m5egzuvp3dgixen6****
   */
  allocationId?: string;
  /**
   * @remarks
   * The IP address of the EIP associated with the NAT gateway.
   * 
   * @example
   * 116.62.XX.XX
   */
  ipAddress?: string;
  /**
   * @remarks
   * The private IP address of the NAT gateway.
   * 
   * @example
   * 192.168.XX.XX
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * Indicates whether IP addresses that are used in DNAT entries can be specified in SNAT entries. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  snatEntryEnabled?: boolean;
  /**
   * @remarks
   * The association between the EIP and the Internet NAT gateway. Valid values:
   * 
   * *   **UsedByForwardTable**: The EIP is specified in a DNAT entry.
   * *   **UsedBySnatTable**: The EIP is specified in an SNAT entry.
   * *   **UsedByForwardSnatTable**: The EIP is specified in both an SNAT entry and a DNAT entry.
   * *   **Idle**: The EIP is not specified in a DNAT or SNAT entry.
   * 
   * @example
   * UsedByForwardTable
   */
  usingStatus?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      ipAddress: 'IpAddress',
      privateIpAddress: 'PrivateIpAddress',
      snatEntryEnabled: 'SnatEntryEnabled',
      usingStatus: 'UsingStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      ipAddress: 'string',
      privateIpAddress: 'string',
      snatEntryEnabled: 'boolean',
      usingStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

