// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAuthPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values: zh-CN (Chinese, default) and en-US (English).
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * e9clba2xlc@***
   */
  appId?: string;
  /**
   * @remarks
   * The content of the service authentication rule.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"all":true,"black":false,"appIds":["dez4qt7weh@***"]}]
   */
  authRule?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * - 0: application dimension.
   * - 1: namespace dimension.
   * 
   * @example
   * 0
   */
  authType?: number;
  /**
   * @remarks
   * Specifies whether the authentication rule is enabled. Valid values:
   * 
   * - `true`: Enabled.
   * - `false`: Disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: string;
  /**
   * @remarks
   * The ID of the namespace in the Kubernetes cluster.
   * 
   * @example
   * c19c6c500e1ff4d7abc7***
   */
  k8sNamespace?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The MSE namespace to which the application belongs.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * - **SPRING_CLOUD**
   * - **DUBBO**
   * - **istio**
   * 
   * This parameter is required.
   * 
   * @example
   * SPRING_CLOUD
   */
  protocol?: string;
  /**
   * @remarks
   * The region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The source. Valid values: edasmsc.
   * 
   * This parameter is required.
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
      authType: 'AuthType',
      enable: 'Enable',
      k8sNamespace: 'K8sNamespace',
      name: 'Name',
      namespace: 'Namespace',
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
      authType: 'number',
      enable: 'string',
      k8sNamespace: 'string',
      name: 'string',
      namespace: 'string',
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

