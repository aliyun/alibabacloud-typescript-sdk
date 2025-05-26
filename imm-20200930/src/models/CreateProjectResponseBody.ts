// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Project } from "./Project";


export class CreateProjectResponseBody extends $dara.Model {
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
   * 7F7D235C-76FF-4B65-800C-8238AE3F****
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

