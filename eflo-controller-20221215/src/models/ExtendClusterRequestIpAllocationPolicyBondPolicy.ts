// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExtendClusterRequestIpAllocationPolicyBondPolicyBonds } from "./ExtendClusterRequestIpAllocationPolicyBondPolicyBonds";


export class ExtendClusterRequestIpAllocationPolicyBondPolicy extends $dara.Model {
  /**
   * @remarks
   * The default bond subnet for the cluster.
   * 
   * @example
   * subnet-3od2fe
   */
  bondDefaultSubnet?: string;
  /**
   * @remarks
   * The bonds.
   */
  bonds?: ExtendClusterRequestIpAllocationPolicyBondPolicyBonds[];
  static names(): { [key: string]: string } {
    return {
      bondDefaultSubnet: 'BondDefaultSubnet',
      bonds: 'Bonds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondDefaultSubnet: 'string',
      bonds: { 'type': 'array', 'itemType': ExtendClusterRequestIpAllocationPolicyBondPolicyBonds },
    };
  }

  validate() {
    if(Array.isArray(this.bonds)) {
      $dara.Model.validateArray(this.bonds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

