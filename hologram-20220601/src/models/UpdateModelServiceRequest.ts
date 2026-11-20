// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The CPU specifications.
   * 
   * @example
   * 32
   */
  cpu?: number;
  /**
   * @remarks
   * The GPU specifications.
   * 
   * @example
   * 1
   */
  gpu?: number;
  /**
   * @remarks
   * The memory specifications.
   * 
   * @example
   * 60
   */
  memory?: number;
  /**
   * @remarks
   * The custom service name.
   * 
   * This parameter is required.
   * 
   * @example
   * model-qwen
   */
  modelServiceName?: string;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * Qwen/Qwen2.5-VL-32B-Instruct
   */
  modelType?: string;
  /**
   * @remarks
   * The number of service replicas.
   * 
   * @example
   * 2
   */
  serviceCount?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'cpu',
      gpu: 'gpu',
      memory: 'memory',
      modelServiceName: 'modelServiceName',
      modelType: 'modelType',
      serviceCount: 'serviceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      gpu: 'number',
      memory: 'number',
      modelServiceName: 'string',
      modelType: 'string',
      serviceCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

