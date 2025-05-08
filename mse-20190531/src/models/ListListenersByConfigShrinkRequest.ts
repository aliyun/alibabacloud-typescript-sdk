// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListenersByConfigShrinkRequest extends $dara.Model {
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
   * zeekr-clueboss.yml
   */
  dataId?: string;
  extGrayRulesShrink?: string;
  /**
   * @remarks
   * The name of the group.
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
   * The ID of the namespace.
   * 
   * @example
   * aaeb4d28-c9eb-4fa2-85f5-d03ce7ee8df1
   */
  namespaceId?: string;
  /**
   * @remarks
   * The extended request parameters in the JSON format.
   * 
   * @example
   * {\\\\"appGroup\\\\":\\\\"emas-zfive_prehost\\\\",\\\\"appName\\\\":\\\\"emas-zfive\\\\",\\\\"appStage\\\\":\\\\"PRE_PUBLISH\\\\",\\\\"appUnit\\\\":\\\\"\\\\",\\\\"bucId\\\\":\\\\"225902\\\\",\\\\"bucName\\\\":\\\\"Wireless\\\\",\\\\"provider\\\\":\\\\"aliyun\\\\"}
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

