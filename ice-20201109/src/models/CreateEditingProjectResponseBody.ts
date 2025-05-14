// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEditingProjectResponseBodyProject } from "./CreateEditingProjectResponseBodyProject";


export class CreateEditingProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the online editing project.
   */
  project?: CreateEditingProjectResponseBodyProject;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: CreateEditingProjectResponseBodyProject,
      requestId: 'string',
    };
  }

  validate() {
    if(this.project && typeof (this.project as any).validate === 'function') {
      (this.project as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

