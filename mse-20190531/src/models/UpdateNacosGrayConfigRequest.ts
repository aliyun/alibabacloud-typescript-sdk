// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNacosGrayConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want the results to be displayed. Valid values: zh (default): Chinese. en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * spring-cloud-a
   */
  appName?: string;
  /**
   * @remarks
   * The configuration content.
   * 
   * @example
   * asdf
   */
  content?: string;
  /**
   * @remarks
   * The data ID.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dataId?: string;
  /**
   * @remarks
   * The canary release rule. For a beta release, you can specify one or more client IP addresses for this parameter. You must separate multiple IP addresses with commas (,). For a tag-based canary release, the value is in the format of Tag name=Tag value. You must separate multiple tag values with commas (,).
   * 
   * @example
   * key=value1,value2
   */
  grayRule?: string;
  /**
   * @remarks
   * The canary version name.
   * 
   * @example
   * test
   */
  grayRuleName?: string;
  /**
   * @remarks
   * The canary version priority.
   * 
   * @example
   * 100
   */
  grayRulePriority?: number;
  /**
   * @remarks
   * The canary release type. Beta release (IP address-based canary release) and tag-based canary release are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * Tags
   */
  grayType?: string;
  /**
   * @remarks
   * The group name. Default value: DEFAULT_GROUP.
   * 
   * @example
   * DEFAULT_GROUP
   */
  group?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * mse_prepaid_public_cn-st2212****
   */
  instanceId?: string;
  /**
   * @remarks
   * The namespace ID. Default value: public.
   * 
   * @example
   * 6cf708a5-****-89f2-3ba62c5ee9ba
   */
  namespaceId?: string;
  /**
   * @remarks
   * The operation type. Valid values: Create (create a canary release configuration) and Update (update an existing canary release configuration).
   * 
   * @example
   * Create
   */
  opType?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The extended request parameter in the JSON format.
   * 
   * @example
   * {}
   */
  requestPars?: string;
  /**
   * @remarks
   * Specifies whether to stop the canary release.
   * 
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

