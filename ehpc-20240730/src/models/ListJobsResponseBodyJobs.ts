// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobsResponseBodyJobsJobSpec } from "./ListJobsResponseBodyJobsJobSpec";


export class ListJobsResponseBodyJobs extends $dara.Model {
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * testjob
   */
  jobName?: string;
  /**
   * @remarks
   * The job configurations.
   */
  jobSpec?: ListJobsResponseBodyJobsJobSpec;
  static names(): { [key: string]: string } {
    return {
      jobName: 'JobName',
      jobSpec: 'JobSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobName: 'string',
      jobSpec: ListJobsResponseBodyJobsJobSpec,
    };
  }

  validate() {
    if(this.jobSpec && typeof (this.jobSpec as any).validate === 'function') {
      (this.jobSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

