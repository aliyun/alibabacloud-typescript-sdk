// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExperimentRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the experiment in the workspace. Valid values:
   * 
   * - PRIVATE: The experiment is visible only to you and the administrator in the workspace.
   * 
   * - PUBLIC: The experiment is visible to everyone in the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The name of the experiment. The naming convention is as follows:
   * 
   * - Must start with a lowercase or uppercase letter.
   * 
   * - Can contain lowercase letters, uppercase letters, digits, underscores (_), and hyphens (-).
   * 
   * - The length must be 1 to 63 characters.
   * 
   * @example
   * myName
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

