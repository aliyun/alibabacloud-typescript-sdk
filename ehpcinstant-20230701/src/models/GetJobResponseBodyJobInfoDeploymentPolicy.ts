// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetJobResponseBodyJobInfoDeploymentPolicyNetwork } from "./GetJobResponseBodyJobInfoDeploymentPolicyNetwork";
import { GetJobResponseBodyJobInfoDeploymentPolicyTags } from "./GetJobResponseBodyJobInfoDeploymentPolicyTags";


export class GetJobResponseBodyJobInfoDeploymentPolicy extends $dara.Model {
  /**
   * @example
   * Dedicated
   */
  allocationSpec?: string;
  level?: string;
  network?: GetJobResponseBodyJobInfoDeploymentPolicyNetwork;
  tags?: GetJobResponseBodyJobInfoDeploymentPolicyTags[];
  static names(): { [key: string]: string } {
    return {
      allocationSpec: 'AllocationSpec',
      level: 'Level',
      network: 'Network',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationSpec: 'string',
      level: 'string',
      network: GetJobResponseBodyJobInfoDeploymentPolicyNetwork,
      tags: { 'type': 'array', 'itemType': GetJobResponseBodyJobInfoDeploymentPolicyTags },
    };
  }

  validate() {
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

