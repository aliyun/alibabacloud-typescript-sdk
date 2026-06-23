// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployPolicyInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The governance action of the rule. Valid values:
   * 
   * - `deny`: blocks non-compliant deployments.
   * - `warn`: generates alerts.
   * 
   * @example
   * deny
   */
  action?: string;
  /**
   * @remarks
   * The namespaces to which the policy is restricted. An empty value indicates all namespaces.
   */
  namespaces?: string[];
  /**
   * @remarks
   * The parameter settings of the current rule instance. For the parameters supported by each policy governance rule and the corresponding metric description, see [Security policy rule library](https://www.alibabacloud.com/help/doc-detail/359819.html).
   * 
   * @example
   * {   "repos": [     "registry-vpc.cn-hangzhou.aliyuncs.com/acs/",     "registry.cn-hangzhou.aliyuncs.com/acs/"   ] }
   */
  parameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      namespaces: 'namespaces',
      parameters: 'parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      namespaces: { 'type': 'array', 'itemType': 'string' },
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.namespaces)) {
      $dara.Model.validateArray(this.namespaces);
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

