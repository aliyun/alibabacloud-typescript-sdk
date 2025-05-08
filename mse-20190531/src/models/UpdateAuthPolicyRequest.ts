// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAuthPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values: zh-CN and en-US. Default value: zh-CN. The value zh-CN indicates Chinese, and the value en-US indicates English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * abcde@12345
   */
  appId?: string;
  /**
   * @remarks
   * The content of the service authentication rule.
   * 
   * @example
   * [{\\"all\\":true,\\"appIds\\":[\\"f6xqzbao96@4adfaf3c92c947a\\"],\\"black\\":false}]
   */
  authRule?: string;
  /**
   * @remarks
   * Specifies whether to enable the rule.
   * 
   * @example
   * true
   */
  enable?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 432
   */
  id?: string;
  /**
   * @remarks
   * The ID of the ACK cluster namespace.
   * 
   * @example
   * c19c6c500e1ff4d7abc7bed9b8236***
   */
  k8sNamespace?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * demo-test
   */
  name?: string;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * *   **SPRING_CLOUD**
   * *   **DUBBO**
   * *   **istio**
   * 
   * @example
   * SPRING_CLOUD
   */
  protocol?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The source for application access.
   * 
   * @example
   * edasmsc
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appId: 'AppId',
      authRule: 'AuthRule',
      enable: 'Enable',
      id: 'Id',
      k8sNamespace: 'K8sNamespace',
      name: 'Name',
      protocol: 'Protocol',
      region: 'Region',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appId: 'string',
      authRule: 'string',
      enable: 'string',
      id: 'string',
      k8sNamespace: 'string',
      name: 'string',
      protocol: 'string',
      region: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

