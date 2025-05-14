// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEditingProjectMaterialsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the online editing project.
   * 
   * This parameter is required.
   * 
   * @example
   * *****fb2101cb318*****
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

