// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateClusterRequestNetworksIpAllocationPolicyBondPolicy } from "./CreateClusterRequestNetworksIpAllocationPolicyBondPolicy";
import { CreateClusterRequestNetworksIpAllocationPolicyMachineTypePolicy } from "./CreateClusterRequestNetworksIpAllocationPolicyMachineTypePolicy";
import { CreateClusterRequestNetworksIpAllocationPolicyNodePolicy } from "./CreateClusterRequestNetworksIpAllocationPolicyNodePolicy";


export class CreateClusterRequestNetworksIpAllocationPolicy extends $dara.Model {
  /**
   * @remarks
   * The bond policy.
   */
  bondPolicy?: CreateClusterRequestNetworksIpAllocationPolicyBondPolicy;
  /**
   * @remarks
   * The allocation policy for the instance type.
   */
  machineTypePolicy?: CreateClusterRequestNetworksIpAllocationPolicyMachineTypePolicy[];
  /**
   * @remarks
   * The node allocation policy.
   */
  nodePolicy?: CreateClusterRequestNetworksIpAllocationPolicyNodePolicy[];
  static names(): { [key: string]: string } {
    return {
      bondPolicy: 'BondPolicy',
      machineTypePolicy: 'MachineTypePolicy',
      nodePolicy: 'NodePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondPolicy: CreateClusterRequestNetworksIpAllocationPolicyBondPolicy,
      machineTypePolicy: { 'type': 'array', 'itemType': CreateClusterRequestNetworksIpAllocationPolicyMachineTypePolicy },
      nodePolicy: { 'type': 'array', 'itemType': CreateClusterRequestNetworksIpAllocationPolicyNodePolicy },
    };
  }

  validate() {
    if(this.bondPolicy && typeof (this.bondPolicy as any).validate === 'function') {
      (this.bondPolicy as any).validate();
    }
    if(Array.isArray(this.machineTypePolicy)) {
      $dara.Model.validateArray(this.machineTypePolicy);
    }
    if(Array.isArray(this.nodePolicy)) {
      $dara.Model.validateArray(this.nodePolicy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

