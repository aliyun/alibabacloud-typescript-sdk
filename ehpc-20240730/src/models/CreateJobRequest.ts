// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateJobRequestJobSpec } from "./CreateJobRequestJobSpec";


export class CreateJobRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * TestJob
   */
  jobName?: string;
  /**
   * @remarks
   * The job configurations.
   */
  jobSpec?: CreateJobRequestJobSpec;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobName: 'JobName',
      jobSpec: 'JobSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobName: 'string',
      jobSpec: CreateJobRequestJobSpec,
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

