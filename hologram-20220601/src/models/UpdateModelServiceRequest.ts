// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelServiceRequest extends $dara.Model {
  /**
   * @example
   * 32
   */
  cpu?: number;
  /**
   * @example
   * 1
   */
  gpu?: number;
  /**
   * @example
   * 60
   */
  memory?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * model-qwen
   */
  modelServiceName?: string;
  /**
   * @example
   * Qwen/Qwen2.5-VL-32B-Instruct
   */
  modelType?: string;
  /**
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

