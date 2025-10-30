// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * Description of the workspace
   * 
   * @example
   * workspace test
   */
  description?: string;
  /**
   * @remarks
   * Display name of the workspace
   * 
   * @example
   * workspace-test
   */
  displayName?: string;
  /**
   * @remarks
   * Name of the Log Service project
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

