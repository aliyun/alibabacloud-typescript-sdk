// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNatGatewayAttributeResponseBodyIpList extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP.
   * 
   * @example
   * eip-bp13e9i2qst4g6jzi****
   */
  allocationId?: string;
  /**
   * @remarks
   * The IP address of the EIP.
   * 
   * @example
   * 116.33.XX.XX
   */
  ipAddress?: string;
  /**
   * @remarks
   * The association status of the EIP.
   * 
   * *   **idle**: The EIP is not specified in an SNAT entry or a DNAT entry.
   * *   **UsedBySnatTable**: The EIP is specified in an SNAT entry.
   * *   **UsedByForwardTable**: The EIP is specified in a DNAT entry.
   * 
   * @example
   * idle
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

