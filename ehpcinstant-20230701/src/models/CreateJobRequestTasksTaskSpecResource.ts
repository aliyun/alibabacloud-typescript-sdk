// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateJobRequestTasksTaskSpecResourceDisks } from "./CreateJobRequestTasksTaskSpecResourceDisks";


export class CreateJobRequestTasksTaskSpecResource extends $dara.Model {
  /**
   * @example
   * 2
   */
  cores?: number;
  disks?: CreateJobRequestTasksTaskSpecResourceDisks[];
  instanceTypes?: string[];
  /**
   * @example
   * 4
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      disks: 'Disks',
      instanceTypes: 'InstanceTypes',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      disks: { 'type': 'array', 'itemType': CreateJobRequestTasksTaskSpecResourceDisks },
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      memory: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.disks)) {
      $dara.Model.validateArray(this.disks);
    }
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

