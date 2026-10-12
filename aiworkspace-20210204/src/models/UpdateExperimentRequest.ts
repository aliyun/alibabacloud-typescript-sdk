// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExperimentRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the workspace. Valid values:
   * - PRIVATE: The experiment is visible only to you and the administrator in the workspace.
   * - PUBLIC: The experiment is visible to all users in the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The name of the experiment. The name must meet the following rules:
   * 
   * - The name must start with a lowercase or uppercase letter.
   * - The name can contain uppercase letters, lowercase letters, digits, underscores (_), or hyphens (-).
   * - The name must be 1 to 63 characters in length.
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

