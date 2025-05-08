// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAuthPolicyRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @example
   * e9clba2xlc@***
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"all":true,"black":false,"appIds":["dez4qt7weh@***"]}]
   */
  authRule?: string;
  /**
   * @example
   * 0
   */
  authType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: string;
  /**
   * @example
   * c19c6c500e1ff4d7abc7***
   */
  k8sNamespace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SPRING_CLOUD
   */
  protocol?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
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

