// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNacosConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Language type of the returned information:
   * 
   * - zh: Chinese
   * - en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Whether it is a Beta release.
   * 
   * - `true`: Yes
   * - `false`: No
   * 
   * @example
   * true
   */
  beta?: boolean;
  /**
   * @remarks
   * Data ID.
   * 
   * This parameter is required.
   * 
   * @example
   * halvie-mp-item****
   */
  dataId?: string;
  /**
   * @remarks
   * Configuration group information.
   * 
   * This parameter is required.
   * 
   * @example
   * common
   */
  group?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * mse-cn-i7m2h0****
   */
  instanceId?: string;
  /**
   * @remarks
   * Namespace ID.
   * 
   * @example
   * ddaf8f12-****-b1c1-86e7c72e266b
   */
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      beta: 'Beta',
      dataId: 'DataId',
      group: 'Group',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      beta: 'boolean',
      dataId: 'string',
      group: 'string',
      instanceId: 'string',
      namespaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

