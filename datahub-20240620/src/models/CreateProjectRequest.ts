// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * test_comment
   */
  comment?: string;
  /**
   * @remarks
   * The project name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_project
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
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

