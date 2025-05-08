// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RulesValue } from "./RulesValue";


export class ApplyTagPoliciesRequest extends $dara.Model {
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
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * h5pohqu3gd@xxx
   * 
   * @deprecated
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * example-app
   */
  appName?: string;
  /**
   * @remarks
   * Specifies whether to enable the routing rule.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The Microservices Engine (MSE) namespace to which the application belongs.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * Optional. The ID of the namespace.
   * 
   * @example
   * 12233****
   */
  namespaceId?: string;
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
   * The details of the routing rule.
   * 
   * @example
   * { "blue": { # Tag key. "rate": 20, # Rate. A value of 20 indicates that 20% of the traffic is routed to the node identified by the tag. "name": "luoye-route-test", # Routing rule name. "carryData": false, # Specifies whether to enable pass-through. This parameter is applicable to end-to-end canary release. "rules": { # Rule information. "dubbo": [{ # Dubbo rule. The system also supports Spring Cloud and Istio rule. "serviceName": "com.taobao.hsf.common.DemoService", # Service name (operation name). "group": "", # Group name. "version": "", # Service version. "methodName": "sayHello", # Method name. "condition": "AND", # Logical operator used by the following items. Valid values: AND and OR. "argumentItems": [{ # Array of rule details. "index": 0, # Index field. "expr": "", # Expression. Its details is described below. "operator": "rawvalue", # The comparison mode. A value of rawvalue indicates direct comparison. A value of mode indicates the modulo operation. A value of list indicates using a whitelist. "value": "jim", # Base value. The value obtained by the expression will be compared with this value. If operator is set to list, separate the items specified for this parameter with commas (,). Example: 1,2,3. "cond": "==" # Comparison operator. Valid values: >=, <=, >, <, and ==. }] }] } }, "_base": { # Another tag key. "rate": 80 # Rate. A value of 20 indicates that 20% of the traffic is routed to the node identified by the tag. } }
   */
  rules?: { [key: string]: RulesValue };
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appId: 'AppId',
      appName: 'AppName',
      enable: 'Enable',
      namespace: 'Namespace',
      namespaceId: 'NamespaceId',
      region: 'Region',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appId: 'string',
      appName: 'string',
      enable: 'boolean',
      namespace: 'string',
      namespaceId: 'string',
      region: 'string',
      rules: { 'type': 'map', 'keyType': 'string', 'valueType': RulesValue },
    };
  }

  validate() {
    if(this.rules) {
      $dara.Model.validateMap(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

