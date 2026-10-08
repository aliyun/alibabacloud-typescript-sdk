// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JobSpec } from "./JobSpec";


export class UpdateJobRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the node can only be expanded, not reduced. Valid values:
   * - PUBLIC: Visible to everyone in the workspace.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @example
   * This is a training job
   */
  description?: string;
  /**
   * @remarks
   * The node specifications.
   */
  jobSpecs?: JobSpec[];
  /**
   * @remarks
   * The priority of the node. Valid values: 1 to 9.
   * - 1: lowest priority.
   * - 9: highest priority.
   * 
   * @example
   * 5
   */
  priority?: number;
  /**
   * @remarks
   * The user command.
   * 
   * @example
   * sleep 1d
   */
  userCommand?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      description: 'Description',
      jobSpecs: 'JobSpecs',
      priority: 'Priority',
      userCommand: 'UserCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      description: 'string',
      jobSpecs: { 'type': 'array', 'itemType': JobSpec },
      priority: 'number',
      userCommand: 'string',
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

