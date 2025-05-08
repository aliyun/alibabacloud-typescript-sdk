// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNacosConfigRequest extends $dara.Model {
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
   * The name of the application.
   * 
   * @example
   * postoffice
   */
  appName?: string;
  /**
   * @remarks
   * The list of IP addresses where the beta release of the configuration is performed.
   * 
   * @example
   * 196.168.XX.XX
   */
  betaIps?: string;
  content?: string;
  /**
   * @remarks
   * The ID of the configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * ky-check-****.yml
   */
  dataId?: string;
  /**
   * @remarks
   * The description of the configuration.
   * 
   * @example
   * Basic configurations
   */
  desc?: string;
  /**
   * @remarks
   * The encryption key.
   * 
   * @example
   * 122wdwe****
   */
  encryptedDataKey?: string;
  /**
   * @remarks
   * The name of the group.
   * 
   * This parameter is required.
   * 
   * @example
   * resource
   */
  group?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mse-cn-7pp2a****
   */
  instanceId?: string;
  /**
   * @remarks
   * The MD5 value of the configuration.
   * 
   * @example
   * 045439703a273a94306422b****
   */
  md5?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * 78b7af66-d15f-4541-b886-11ed81ecb6c0
   */
  namespaceId?: string;
  /**
   * @remarks
   * The list of tags.
   * 
   * @example
   * 2021-10-20
   */
  tags?: string;
  /**
   * @remarks
   * The format of the configuration. Supported formats include TEXT, JSON, XML, and HTML.
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appName: 'AppName',
      betaIps: 'BetaIps',
      content: 'Content',
      dataId: 'DataId',
      desc: 'Desc',
      encryptedDataKey: 'EncryptedDataKey',
      group: 'Group',
      instanceId: 'InstanceId',
      md5: 'Md5',
      namespaceId: 'NamespaceId',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appName: 'string',
      betaIps: 'string',
      content: 'string',
      dataId: 'string',
      desc: 'string',
      encryptedDataKey: 'string',
      group: 'string',
      instanceId: 'string',
      md5: 'string',
      namespaceId: 'string',
      tags: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

