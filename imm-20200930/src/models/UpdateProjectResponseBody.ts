// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Project } from "./Project";


export class UpdateProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The project.
   */
  project?: Project;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D33C3574-4093-448E-86E7-15BE2BD3****
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
      project: Project,
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

