// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAuthPolicyResponseBodyDataResultAuthRule } from "./ListAuthPolicyResponseBodyDataResultAuthRule";


export class ListAuthPolicyResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 19039813784***
   */
  accountId?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * hkhon1po62@5f1b08becb*****
   */
  appId?: string;
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
   * The content of the service authentication rule.
   */
  authRule?: ListAuthPolicyResponseBodyDataResultAuthRule[];
  /**
   * @remarks
   * The rule type. Valid values:
   * 
   * *   0: by application
   * *   1: by namespace
   * 
   * @example
   * 0
   */
  authType?: number;
  /**
   * @remarks
   * Indicates whether the rule was enabled or disabled. Valid values:
   * 
   * *   `true`: enabled
   * *   `false`: disabled
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 204
   */
  id?: number;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * c19c6c500e1ff4d7abc7bed9b8236***
   */
  k8sNamespace?: string;
  /**
   * @remarks
   * The name of the authentication rule.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * ced54a95-4e33-4bda-be7e-37e95868***
   */
  namespaceId?: string;
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
  regionId?: string;
  /**
   * @remarks
   * The source of the application.
   * 
   * @example
   * edasmsc
   */
  source?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      appId: 'AppId',
      appName: 'AppName',
      authRule: 'AuthRule',
      authType: 'AuthType',
      enable: 'Enable',
      id: 'Id',
      k8sNamespace: 'K8sNamespace',
      name: 'Name',
      namespaceId: 'NamespaceId',
      protocol: 'Protocol',
      regionId: 'RegionId',
      source: 'Source',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      appId: 'string',
      appName: 'string',
      authRule: { 'type': 'array', 'itemType': ListAuthPolicyResponseBodyDataResultAuthRule },
      authType: 'number',
      enable: 'boolean',
      id: 'number',
      k8sNamespace: 'string',
      name: 'string',
      namespaceId: 'string',
      protocol: 'string',
      regionId: 'string',
      source: 'string',
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.authRule)) {
      $dara.Model.validateArray(this.authRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

