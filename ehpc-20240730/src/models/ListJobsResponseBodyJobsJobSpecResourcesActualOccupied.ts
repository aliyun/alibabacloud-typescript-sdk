// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsResponseBodyJobsJobSpecResourcesActualOccupied extends $dara.Model {
  /**
   * @remarks
   * Number of CPU cores.
   * 
   * @example
   * 4
   */
  cores?: string;
  /**
   * @remarks
   * Number of CPUs
   * 
   * @example
   * 0
   */
  gpus?: string;
  /**
   * @remarks
   * Number of memory.
   * 
   * @example
   * 982MB
   */
  memory?: string;
  /**
   * @remarks
   * Number of compute nodes.
   * 
   * @example
   * 2
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

