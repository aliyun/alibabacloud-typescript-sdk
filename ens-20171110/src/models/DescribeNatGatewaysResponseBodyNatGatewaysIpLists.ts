// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatGatewaysResponseBodyNatGatewaysIpLists extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP.
   * 
   * @example
   * eip-50g****
   */
  allocationId?: string;
  /**
   * @remarks
   * The EIP.
   * 
   * @example
   * 8.XX.XX.162
   */
  ipAddress?: string;
  /**
   * @remarks
   * The association between the EIP and the Internet NAT gateway. Valid values:
   * 
   * *   **UsedByForwardTable**: The EIP is specified in a DNAT entry.
   * *   **UsedBySnatTable**: The EIP is specified in an SNAT entry.
   * *   **Idle**: The EIP is not specified in an SNAT entry or a DNAT entry.
   * 
   * @example
   * Idle
   */
  usingStatus?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      ipAddress: 'IpAddress',
      usingStatus: 'UsingStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      ipAddress: 'string',
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

