// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExtendClusterRequestIpAllocationPolicyNodePolicyBonds } from "./ExtendClusterRequestIpAllocationPolicyNodePolicyBonds";


export class ExtendClusterRequestIpAllocationPolicyNodePolicy extends $dara.Model {
  /**
   * @remarks
   * The bonds.
   */
  bonds?: ExtendClusterRequestIpAllocationPolicyNodePolicyBonds[];
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * i22c11282.eu95sqa
   */
  hostname?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * i-3fdodw2
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      bonds: 'Bonds',
      hostname: 'Hostname',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bonds: { 'type': 'array', 'itemType': ExtendClusterRequestIpAllocationPolicyNodePolicyBonds },
      hostname: 'string',
      nodeId: 'string',
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

