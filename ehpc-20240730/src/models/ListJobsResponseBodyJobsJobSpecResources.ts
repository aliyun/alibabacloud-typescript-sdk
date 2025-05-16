// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsResponseBodyJobsJobSpecResources extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs that were used to run the job.
   * 
   * @example
   * 6
   */
  cores?: string;
  /**
   * @remarks
   * The number of GPUs that were used to run the job.
   * 
   * @example
   * 0
   */
  gpus?: string;
  /**
   * @remarks
   * The size of memory that was used to run the job.
   * 
   * @example
   * 1536MB
   */
  memory?: string;
  /**
   * @remarks
   * The number of compute nodes that were used to run the job.
   * 
   * @example
   * 3
   */
  nodes?: string;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      gpus: 'Gpus',
      memory: 'Memory',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'string',
      gpus: 'string',
      memory: 'string',
      nodes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

