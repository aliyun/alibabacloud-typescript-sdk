// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNacosConfigRequest extends $dara.Model {
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
   * saledatacenter-task
   */
  appName?: string;
  /**
   * @remarks
   * The list of IP addresses where the beta release of the configuration is performed.
   * 
   * @example
   * 100.117.XX.XX,100.117.XX.XX
   */
  betaIps?: string;
  content?: string;
  /**
   * @remarks
   * The ID of the data.
   * 
   * This parameter is required.
   * 
   * @example
   * common.yaml
   */
  dataId?: string;
  /**
   * @remarks
   * The description of the configuration.
   * 
   * @example
   * Basic module configuration.
   */
  desc?: string;
  /**
   * @remarks
   * The ID of the group.
   * 
   * This parameter is required.
   * 
   * @example
   * alime-bridge-aliyun
   */
  group?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mse_prepaid_public_cn-tl32****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * 547fd2a0-d0d6-****-80db2a1afb82
   */
  namespaceId?: string;
  /**
   * @remarks
   * The tags of the configuration.
   * 
   * @example
   * Basic configurations
   */
  tags?: string;
  /**
   * @remarks
   * The format of the configuration. Supported formats include TEXT, JSON, and XML.
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
      group: 'Group',
      instanceId: 'InstanceId',
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
      group: 'string',
      instanceId: 'string',
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

