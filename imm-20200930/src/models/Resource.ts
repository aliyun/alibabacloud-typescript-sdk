// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Resource extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores. Valid values: 4 to 96.
   * 
   * @example
   * 2
   */
  CPU?: number;
  /**
   * @remarks
   * The Elastic Compute Service (ECS) instance.
   * 
   * @example
   * ecs.gn5i-c2g1.large
   */
  ECSInstance?: string;
  /**
   * @remarks
   * The GPU.
   * 
   * @example
   * string	NVIDIA_P4
   */
  GPUModel?: string;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 1
   */
  GPUNum?: number;
  /**
   * @remarks
   * The displayed name of the resource.
   * 
   * @example
   * string	ecs.gn5i-c2g1.large-2vCPU-8GB-1*NVIDIA_P4
   */
  name?: string;
  /**
   * @remarks
   * The RAM size. Unit: GB. Valid values: 30 to 736.
   * 
   * @example
   * 8
   */
  RAM?: number;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      ECSInstance: 'ECSInstance',
      GPUModel: 'GPUModel',
      GPUNum: 'GPUNum',
      name: 'Name',
      RAM: 'RAM',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'number',
      ECSInstance: 'string',
      GPUModel: 'string',
      GPUNum: 'number',
      name: 'string',
      RAM: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

