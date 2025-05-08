// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAuthPolicyResponseBodyDataResultAuthRuleMethod } from "./ListAuthPolicyResponseBodyDataResultAuthRuleMethod";


export class ListAuthPolicyResponseBodyDataResultAuthRule extends $dara.Model {
  /**
   * @remarks
   * The IDs of applications.
   */
  appIds?: string[];
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
   * Indicates whether the rule is a blacklist rule.
   * 
   * @example
   * false
   */
  black?: boolean;
  /**
   * @remarks
   * The queried namespaces.
   */
  k8sNamespaces?: string[];
  /**
   * @remarks
   * The request method.
   */
  method?: ListAuthPolicyResponseBodyDataResultAuthRuleMethod;
  /**
   * @remarks
   * The service path.
   * 
   * @example
   * /a
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      authType: 'AuthType',
      black: 'Black',
      k8sNamespaces: 'K8sNamespaces',
      method: 'Method',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: { 'type': 'array', 'itemType': 'string' },
      authType: 'number',
      black: 'boolean',
      k8sNamespaces: { 'type': 'array', 'itemType': 'string' },
      method: ListAuthPolicyResponseBodyDataResultAuthRuleMethod,
      path: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appIds)) {
      $dara.Model.validateArray(this.appIds);
    }
    if(Array.isArray(this.k8sNamespaces)) {
      $dara.Model.validateArray(this.k8sNamespaces);
    }
    if(this.method && typeof (this.method as any).validate === 'function') {
      (this.method as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

