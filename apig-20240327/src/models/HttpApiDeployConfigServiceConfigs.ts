// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiDeployConfigServiceConfigs extends $dara.Model {
  /**
   * @example
   * qwen-max
   */
  modelName?: string;
  /**
   * @example
   * qwen-*
   */
  modelNamePattern?: string;
  /**
   * @example
   * svc-xxx
   */
  serviceId?: string;
  /**
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      modelName: 'modelName',
      modelNamePattern: 'modelNamePattern',
      serviceId: 'serviceId',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
      modelNamePattern: 'string',
      serviceId: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

