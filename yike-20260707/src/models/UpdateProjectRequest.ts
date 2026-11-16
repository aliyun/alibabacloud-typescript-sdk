// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pd_061716****
   */
  projectId?: string;
  /**
   * @remarks
   * The new name of the project.
   * 
   * @example
   * Product Demo
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

