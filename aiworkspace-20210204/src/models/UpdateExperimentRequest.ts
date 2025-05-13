// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExperimentRequest extends $dara.Model {
  /**
   * @remarks
   * The accessibility of the experiment in the workspace. Valid values:
   * 
   * *   PRIVATE: The experiment is accessible only to you and the administrator of the workspace.
   * *   PUBLIC: The experiment is accessible to all users in the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The experiment name. The name must meet the following requirements:
   * 
   * *   The name must start with a letter.
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must be 1 to 63 characters in length.
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

