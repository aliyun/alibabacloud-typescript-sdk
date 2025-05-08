// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEngineNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * mse-09k1q11****
   */
  clusterId?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * public
   */
  desc?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * 33ff74b6-d21e-4f9b-91a8-bc1ea4ef****
   */
  id?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * mse-cn-st21ri2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The number of active services.
   * 
   * @example
   * 3
   */
  serviceCount?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      desc: 'Desc',
      id: 'Id',
      instanceId: 'InstanceId',
      name: 'Name',
      serviceCount: 'ServiceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      desc: 'string',
      id: 'string',
      instanceId: 'string',
      name: 'string',
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

