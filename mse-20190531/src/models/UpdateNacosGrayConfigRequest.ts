// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNacosGrayConfigRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @example
   * spring-cloud-a
   */
  appName?: string;
  /**
   * @example
   * asdf
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  dataId?: string;
  /**
   * @example
   * key=value1,value2
   */
  grayRule?: string;
  grayRuleName?: string;
  grayRulePriority?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Tags
   */
  grayType?: string;
  /**
   * @example
   * DEFAULT_GROUP
   */
  group?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mse_prepaid_public_cn-st2212****
   */
  instanceId?: string;
  /**
   * @example
   * 6cf708a5-****-89f2-3ba62c5ee9ba
   */
  namespaceId?: string;
  opType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * {}
   */
  requestPars?: string;
  /**
   * @example
   * true
   */
  stopGray?: boolean;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appName: 'AppName',
      content: 'Content',
      dataId: 'DataId',
      grayRule: 'GrayRule',
      grayRuleName: 'GrayRuleName',
      grayRulePriority: 'GrayRulePriority',
      grayType: 'GrayType',
      group: 'Group',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      opType: 'OpType',
      regionId: 'RegionId',
      requestPars: 'RequestPars',
      stopGray: 'StopGray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appName: 'string',
      content: 'string',
      dataId: 'string',
      grayRule: 'string',
      grayRuleName: 'string',
      grayRulePriority: 'number',
      grayType: 'string',
      group: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      opType: 'string',
      regionId: 'string',
      requestPars: 'string',
      stopGray: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

