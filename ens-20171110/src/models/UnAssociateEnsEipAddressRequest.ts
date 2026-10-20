// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnAssociateEnsEipAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the edge elastic IP address (EIP).
   * 
   * If the EIP is referenced by an SNAT entry, invoke DeleteSnatIpForSnatEntry to remove it first. If the EIP is referenced by a DNAT entry, invoke DeleteForwardEntry to delete it first, or set Force to true under Settings as needed.
   * 
   * This parameter is required.
   * 
   * @example
   * eip-5sqa431nx3vee8heqxfxp****
   */
  allocationId?: string;
  /**
   * @remarks
   * Specifies whether to forcibly disassociate the EIP when the EIP is bound to a NAT gateway that has DNAT or SNAT entries. Valid values:
   * 
   * - **false** (default): does not forcibly disassociate the EIP.
   * - **true**: forcibly disassociates the EIP.
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

