// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the project.
   * 
   * @example
   * 123
   */
  projectId?: string;
  /**
   * @remarks
   * The new name of the project.
   * 
   * @example
   * MyProject
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'projectId',
      projectName: 'projectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

