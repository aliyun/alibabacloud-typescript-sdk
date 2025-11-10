// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JobSpec } from "./JobSpec";


export class UpdateJobRequest extends $dara.Model {
  /**
   * @remarks
   * The job visibility. Valid values:
   * 
   * *   PUBLIC: The job is visible to all members in the workspace.
   * *   PRIVATE: The job is visible only to you and the administrator of the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  jobSpecs?: JobSpec[];
  /**
   * @remarks
   * The job priority. Valid values: 1 to 9.
   * 
   * *   1: the lowest priority.
   * *   9: the highest priority.
   * 
   * @example
   * 5
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      jobSpecs: 'JobSpecs',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
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

