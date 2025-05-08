// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEngineNamespaceRequest extends $dara.Model {
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
   * The ID of the instance.
   * 
   * @example
   * mse-98s****
   */
  clusterId?: string;
  /**
   * @remarks
   * The description of the namespace.
   * 
   * @example
   * Development environment
   */
  desc?: string;
  /**
   * @remarks
   * The custom ID of the namespace. If you do not specify this parameter, the automatically generated Universally Unique Identifier (UUID) is returned.
   * 
   * @example
   * f4fa5b81-2f26-4900-833a-7516b315ebb2
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
   * The display name of the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * dev
   */
  name?: string;
  /**
   * @remarks
   * The maximum number of services that can run in the namespace.
   * 
   * @example
   * 100
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

