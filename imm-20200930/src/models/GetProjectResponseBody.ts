// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Project } from "./Project";


export class GetProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The project information.
   */
  project?: Project;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A022F78-B9A8-4ACC-BB6B-B3597553
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

