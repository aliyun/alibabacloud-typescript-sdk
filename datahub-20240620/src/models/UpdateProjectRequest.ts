// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the project.
   * 
   * @example
   * ec800m-y数据总线，康复中心
   */
  comment?: string;
  /**
   * @remarks
   * The name of the project.
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

