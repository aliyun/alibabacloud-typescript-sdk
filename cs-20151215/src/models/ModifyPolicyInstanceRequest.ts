// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPolicyInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The governance action of the rule. Valid values:
   * 
   * - `deny`: Blocks non-compliant deployments.
   * - `warn`: Generates an alert.
   * 
   * @example
   * deny
   */
  action?: string;
  /**
   * @remarks
   * The instance ID of the policy rule.
   * 
   * @example
   * allowed-repos-cbhhb
   */
  instanceName?: string;
  /**
   * @remarks
   * The namespaces where the policy is enforced. If this parameter is left empty, the policy is enforced in all namespaces.
   */
  namespaces?: string[];
  /**
   * @remarks
   * The configuration parameters of the current rule instance. For more information about the rules for parameter settings, see [Container security policy rule library](https://help.aliyun.com/document_detail/359819.html).
   * 
   * @example
   * "restrictedNamespaces": [ "test" ]
   */
  parameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      instanceName: 'instance_name',
      namespaces: 'namespaces',
      parameters: 'parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      instanceName: 'string',
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

