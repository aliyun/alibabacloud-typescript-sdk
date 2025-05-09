// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetJobResponseBodyJobInfoTasksTaskSpecResourceDisks } from "./GetJobResponseBodyJobInfoTasksTaskSpecResourceDisks";


export class GetJobResponseBodyJobInfoTasksTaskSpecResource extends $dara.Model {
  /**
   * @example
   * 1
   */
  cores?: number;
  disks?: GetJobResponseBodyJobInfoTasksTaskSpecResourceDisks[];
  /**
   * @example
   * 4
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      disks: 'Disks',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      disks: { 'type': 'array', 'itemType': GetJobResponseBodyJobInfoTasksTaskSpecResourceDisks },
      memory: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.disks)) {
      $dara.Model.validateArray(this.disks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

