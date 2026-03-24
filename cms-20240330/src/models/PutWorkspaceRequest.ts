// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the workspace.
   * 
   * @example
   * workspace test
   */
  description?: string;
  /**
   * @remarks
   * The display name of the workspace.
   * 
   * @example
   * workspace-test
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * This parameter is required.
   * 
   * @example
   * sls-project-test-001
   */
  slsProject?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      displayName: 'displayName',
      slsProject: 'slsProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      slsProject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

