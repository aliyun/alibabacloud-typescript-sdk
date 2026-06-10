// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployPolicyInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The governance action. Valid values:
   * 
   * - `deny`: Denies deployments that violate the rule.
   * 
   * - `warn`: Generates an alert for deployments that violate the rule.
   * 
   * @example
   * deny
   */
  action?: string;
  /**
   * @remarks
   * The namespaces where the policy applies. If you omit this parameter, the policy applies to all namespaces.
   */
  namespaces?: string[];
  /**
   * @remarks
   * For details on the parameters supported by each policy governance rule, see [Container security policy rules](https://www.alibabacloud.com/help/doc-detail/359819.html).
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

