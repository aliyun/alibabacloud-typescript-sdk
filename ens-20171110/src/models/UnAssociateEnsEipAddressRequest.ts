// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnAssociateEnsEipAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP.
   * 
   * This parameter is required.
   * 
   * @example
   * eip-5sqa431nx3vee8heqxfxp****
   */
  allocationId?: string;
  /**
   * @remarks
   * Specifies whether to disassociate the EIP from a NAT gateway if a DNAT or SNAT entry is added to the NAT gateway. Valid values:
   * 
   * *   **false** (default): does not disassociate the EIP from a NAT gateway if a DNAT or SNAT entry is added to the NAT gateway.
   * *   **true**: disassociates the EIP from a NAT gateway if a DNAT or SNAT entry is added to the NAT gateway.
   * 
   * @example
   * false
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      force: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

