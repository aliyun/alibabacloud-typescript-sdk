// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListenersByConfigShrinkRequest extends $dara.Model {
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
  extGrayRulesShrink?: string;
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
      extGrayRulesShrink: 'ExtGrayRules',
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
      extGrayRulesShrink: 'string',
      group: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      requestPars: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

