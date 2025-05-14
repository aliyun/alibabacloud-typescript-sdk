// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetProjectExportJobResponseBodyProjectExportJob } from "./GetProjectExportJobResponseBodyProjectExportJob";


export class GetProjectExportJobResponseBody extends $dara.Model {
  projectExportJob?: GetProjectExportJobResponseBodyProjectExportJob;
  /**
   * @example
   * ****2876-6263-4B75-8F2C-CD0F7FCF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      projectExportJob: 'ProjectExportJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectExportJob: GetProjectExportJobResponseBodyProjectExportJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.projectExportJob && typeof (this.projectExportJob as any).validate === 'function') {
      (this.projectExportJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

