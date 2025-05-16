// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobResponseBodyJobInfoResources extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs used by the job on each node.
   * 
   * @example
   * 2
   */
  cores?: string;
  /**
   * @remarks
   * The number of GPUs used by the job on each node.
   * 
   * @example
   * 1
   */
  gpus?: string;
  /**
   * @remarks
   * The memory size used by the job on each node.
   * 
   * @example
   * 1gb
   */
  memory?: string;
  /**
   * @remarks
   * The number of nodes that are used to run the job.
   * 
   * @example
   * 1
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

