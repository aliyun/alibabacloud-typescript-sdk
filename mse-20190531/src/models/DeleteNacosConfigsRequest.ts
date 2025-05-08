// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNacosConfigsRequest extends $dara.Model {
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
   * The IDs of configurations.
   * 
   * This parameter is required.
   * 
   * @example
   * 20024,20025,20026,20027,20034,20104,20394
   */
  ids?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mse_prepaid_public_cn-i7m2e32pd0n
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ef93a21-3487-4367-a859-857d8****
   */
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      ids: 'Ids',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      ids: 'string',
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

