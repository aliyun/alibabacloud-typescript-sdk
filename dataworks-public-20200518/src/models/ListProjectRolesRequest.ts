// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectRolesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DataWorks workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 27
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

