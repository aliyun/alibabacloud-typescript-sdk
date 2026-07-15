// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JobSpec } from "./JobSpec";


export class UpdateJobRequest extends $dara.Model {
  /**
   * @remarks
   * The job\\"s visibility. You can only increase, not decrease, the visibility. Valid value:
   * 
   * - `PUBLIC`: The job is visible to all users in the workspace.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  description?: string;
  /**
   * @remarks
   * The job specifications.
   */
  jobSpecs?: JobSpec[];
  /**
   * @remarks
   * The priority of the job. Valid values range from 1 to 9:
   * 
   * - 1 indicates the lowest priority.
   * 
   * - 9 indicates the highest priority.
   * 
   * @example
   * 5
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      description: 'Description',
      jobSpecs: 'JobSpecs',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      description: 'string',
      jobSpecs: { 'type': 'array', 'itemType': JobSpec },
      priority: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobSpecs)) {
      $dara.Model.validateArray(this.jobSpecs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

