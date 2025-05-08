// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEngineNamespaceRequest extends $dara.Model {
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
   * mse-0c738****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * 678ca857-****-b1bf-d0a98c5ca84b
   */
  id?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * mse-cn-7pp2d1****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      id: 'Id',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      id: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

