// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServicesRequest extends $dara.Model {
  /**
   * @remarks
   * The model type. Valid values:
   * 
   * - system: built-in model
   * - deployment: custom deployment model.
   * 
   * @example
   * system
   */
  modelType?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * 文本向量化
   */
  name?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * ops-text-embedding-001
   */
  serviceId?: string;
  /**
   * @remarks
   * The service type.
   * 
   * @example
   * text-embedding
   */
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      modelType: 'modelType',
      name: 'name',
      serviceId: 'serviceId',
      serviceType: 'serviceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelType: 'string',
      name: 'string',
      serviceId: 'string',
      serviceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

