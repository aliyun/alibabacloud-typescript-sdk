// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResourceSpec extends $dara.Model {
  /**
   * @remarks
   * The number of CUs. Currently, 1 CU is equivalent to 1 vCPU and 4 GB of memory.
   * 
   * @example
   * 4
   */
  cu?: number;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 1
   */
  gpu?: number;
  /**
   * @remarks
   * The number of GPU machines.
   * 
   * @example
   * 1
   */
  gpuMachineNum?: number;
  /**
   * @remarks
   * The instance type ID.
   * 
   * @example
   * ecs.gn7i-c32g1.8xlarge
   */
  instanceTypeId?: string;
  /**
   * @remarks
   * The upper limit of the absolute value for the queue quota. If not specified, the backend falls back to the number of CUs.
   * 
   * @example
   * 4
   */
  maxCu?: number;
  static names(): { [key: string]: string } {
    return {
      cu: 'cu',
      gpu: 'gpu',
      gpuMachineNum: 'gpuMachineNum',
      instanceTypeId: 'instanceTypeId',
      maxCu: 'maxCu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
      gpu: 'number',
      gpuMachineNum: 'number',
      instanceTypeId: 'string',
      maxCu: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

