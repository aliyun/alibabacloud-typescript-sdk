// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNacosConfigRequest extends $dara.Model {
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
   * Whether it is a Beta release. Default is false.
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
   * Configuration ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user-ds.yml
   */
  dataId?: string;
  /**
   * @remarks
   * Group type.
   * 
   * This parameter is required.
   * 
   * @example
   * HALVIE_MICRO_GROUP
   */
  group?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * mse_prepaid_public_cn-tl32epfyu18
   */
  instanceId?: string;
  /**
   * @remarks
   * Namespace ID. Default is public.
   * 
   * @example
   * 0e9d849b-****-8435da6c21ad
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

