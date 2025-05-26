// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Resource extends $dara.Model {
  /**
   * @example
   * 2
   */
  CPU?: number;
  /**
   * @example
   * ecs.gn5i-c2g1.large
   */
  ECSInstance?: string;
  /**
   * @example
   * string	NVIDIA_P4
   */
  GPUModel?: string;
  /**
   * @example
   * 1
   */
  GPUNum?: number;
  /**
   * @example
   * string	ecs.gn5i-c2g1.large-2vCPU-8GB-1*NVIDIA_P4
   */
  name?: string;
  /**
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

