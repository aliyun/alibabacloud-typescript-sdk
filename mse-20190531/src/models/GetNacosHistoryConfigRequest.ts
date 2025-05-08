// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNacosHistoryConfigRequest extends $dara.Model {
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
   * The ID of the data.
   * 
   * This parameter is required.
   * 
   * @example
   * msg-center.main.yaml
   */
  dataId?: string;
  /**
   * @remarks
   * The name of the group.
   * 
   * This parameter is required.
   * 
   * @example
   * DEFAULT_GROUP
   */
  group?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mse_prepaid_public_cn-st220g9ka02
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * 6cf708a5-****-89f2-3ba62c5ee9ba
   */
  namespaceId?: string;
  /**
   * @remarks
   * The version ID of the configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * 40****
   */
  nid?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      dataId: 'DataId',
      group: 'Group',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      nid: 'Nid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      dataId: 'string',
      group: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      nid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

