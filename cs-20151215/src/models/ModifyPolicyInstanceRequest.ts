// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPolicyInstanceRequest extends $dara.Model {
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
   * The instance ID of the policy rule instance.
   * 
   * @example
   * allowed-repos-cbhhb
   */
  instanceName?: string;
  /**
   * @remarks
   * The namespaces to which the policy applies. An empty value indicates all namespaces.
   */
  namespaces?: string[];
  /**
   * @remarks
   * The configuration parameters of the current rule instance. For more information about parameter settings rules, see [Container Security Policy Rule Library](https://help.aliyun.com/document_detail/359819.html).
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

