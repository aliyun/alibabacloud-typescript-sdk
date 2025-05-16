// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobRequestJobSpecResources extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs to be allocated to each compute node.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The number of GPUs to be allocated to each compute node.
   * 
   * @example
   * 1
   */
  gpus?: number;
  /**
   * @remarks
   * The memory size to be allocated to each compute node. The memory size is in string format. Unit: MB or GB.
   * 
   * @example
   * 4gb
   */
  memory?: string;
  /**
   * @remarks
   * The number of compute nodes to be allocated to the job.
   * 
   * @example
   * 2
   */
  nodes?: number;
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
      cores: 'number',
      gpus: 'number',
      memory: 'string',
      nodes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

