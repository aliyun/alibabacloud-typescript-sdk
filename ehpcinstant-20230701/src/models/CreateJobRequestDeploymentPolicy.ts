// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateJobRequestDeploymentPolicyNetwork } from "./CreateJobRequestDeploymentPolicyNetwork";
import { CreateJobRequestDeploymentPolicyTag } from "./CreateJobRequestDeploymentPolicyTag";


export class CreateJobRequestDeploymentPolicy extends $dara.Model {
  /**
   * @example
   * Dedicated
   */
  allocationSpec?: string;
  level?: string;
  network?: CreateJobRequestDeploymentPolicyNetwork;
  tag?: CreateJobRequestDeploymentPolicyTag[];
  static names(): { [key: string]: string } {
    return {
      allocationSpec: 'AllocationSpec',
      level: 'Level',
      network: 'Network',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationSpec: 'string',
      level: 'string',
      network: CreateJobRequestDeploymentPolicyNetwork,
      tag: { 'type': 'array', 'itemType': CreateJobRequestDeploymentPolicyTag },
    };
  }

  validate() {
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

