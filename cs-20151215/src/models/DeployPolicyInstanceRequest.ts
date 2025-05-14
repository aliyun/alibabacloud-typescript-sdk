// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployPolicyInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The action of the policy. Valid values:
   * 
   * *   `deny`: Deployments that match the policy are denied.
   * *   `warn`: Alerts are generated for Deployments that match the policy.
   * 
   * @example
   * deny
   */
  action?: string;
  /**
   * @remarks
   * The namespaces to which the policy applies. If you leave this parameter empty, the policy is applicable to all namespaces of the cluster.
   */
  namespaces?: string[];
  /**
   * @remarks
   * The parameter settings of the policy. For more information about the parameters supported by each policy, see [Predefined security policies of ACK](https://www.alibabacloud.com/help/doc-detail/359819.html).
   * 
   * @example
   * {"restrictedNamespaces": [ "test" ]}
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

