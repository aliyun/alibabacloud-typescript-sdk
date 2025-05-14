// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEditingProjectResponseBodyProject } from "./GetEditingProjectResponseBodyProject";


export class GetEditingProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the online editing project.
   */
  project?: GetEditingProjectResponseBodyProject;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
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
      project: GetEditingProjectResponseBodyProject,
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

