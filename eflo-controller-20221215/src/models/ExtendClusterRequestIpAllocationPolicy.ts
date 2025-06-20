// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExtendClusterRequestIpAllocationPolicyBondPolicy } from "./ExtendClusterRequestIpAllocationPolicyBondPolicy";
import { ExtendClusterRequestIpAllocationPolicyMachineTypePolicy } from "./ExtendClusterRequestIpAllocationPolicyMachineTypePolicy";
import { ExtendClusterRequestIpAllocationPolicyNodePolicy } from "./ExtendClusterRequestIpAllocationPolicyNodePolicy";


export class ExtendClusterRequestIpAllocationPolicy extends $dara.Model {
  /**
   * @remarks
   * The bond policy that you specify the cluster subnet ID based on the bond name.
   */
  bondPolicy?: ExtendClusterRequestIpAllocationPolicyBondPolicy;
  /**
   * @remarks
   * The allocation policies for the instance type.
   */
  machineTypePolicy?: ExtendClusterRequestIpAllocationPolicyMachineTypePolicy[];
  /**
   * @remarks
   * The node allocation policies.
   */
  nodePolicy?: ExtendClusterRequestIpAllocationPolicyNodePolicy[];
  static names(): { [key: string]: string } {
    return {
      bondPolicy: 'BondPolicy',
      machineTypePolicy: 'MachineTypePolicy',
      nodePolicy: 'NodePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondPolicy: ExtendClusterRequestIpAllocationPolicyBondPolicy,
      machineTypePolicy: { 'type': 'array', 'itemType': ExtendClusterRequestIpAllocationPolicyMachineTypePolicy },
      nodePolicy: { 'type': 'array', 'itemType': ExtendClusterRequestIpAllocationPolicyNodePolicy },
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

