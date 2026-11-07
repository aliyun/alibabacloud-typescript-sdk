// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListenersByConfigRequestExtGrayRules extends $dara.Model {
  /**
   * @remarks
   * The canary release rule. If it is a Beta canary release, this field contains the IP addresses of the canary release clients, separated by commas. If it is a tag-based canary release, this field contains tag_name=tag_value, with multiple tag values separated by commas.
   * 
   * @example
   * 127.0.0.1
   */
  grayRule?: string;
  /**
   * @remarks
   * The name of the canary release version.
   * 
   * @example
   * test
   */
  grayRuleName?: string;
  /**
   * @remarks
   * The priority of the canary release version.
   * 
   * @example
   * 100
   */
  grayRulePriority?: number;
  /**
   * @remarks
   * The type of the canary release rule.
   * 
   * @example
   * Tags
   */
  grayRuleType?: string;
  static names(): { [key: string]: string } {
    return {
      grayRule: 'GrayRule',
      grayRuleName: 'GrayRuleName',
      grayRulePriority: 'GrayRulePriority',
      grayRuleType: 'GrayRuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grayRule: 'string',
      grayRuleName: 'string',
      grayRulePriority: 'number',
      grayRuleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersByConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese.
   * - en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The data ID.
   * 
   * This parameter is required.
   * 
   * @example
   * zeekr-clueboss.yml
   */
  dataId?: string;
  /**
   * @remarks
   * The list of additional canary release rules. When performing listener matching, the additional canary release rules are merged with existing rules for matching.
   */
  extGrayRules?: ListListenersByConfigRequestExtGrayRules[];
  /**
   * @remarks
   * The group.
   * 
   * This parameter is required.
   * 
   * @example
   * prod
   */
  group?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mse-cn-m7r1yurp00e
   */
  instanceId?: string;
  /**
   * @remarks
   * The namespace ID. Default value: public.
   * 
   * @example
   * aaeb4d28-c9eb-4fa2-85f5-d03ce7ee8df1
   */
  namespaceId?: string;
  /**
   * @remarks
   * This parameter is deprecated and does not need to be specified.
   * 
   * @example
   * ...
   */
  requestPars?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      dataId: 'DataId',
      extGrayRules: 'ExtGrayRules',
      group: 'Group',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      dataId: 'string',
      extGrayRules: { 'type': 'array', 'itemType': ListListenersByConfigRequestExtGrayRules },
      group: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      requestPars: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extGrayRules)) {
      $dara.Model.validateArray(this.extGrayRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

