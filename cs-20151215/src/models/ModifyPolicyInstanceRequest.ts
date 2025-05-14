// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPolicyInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The action of the policy. Valid values:
   * 
   * *   `deny`: Deployments that match the policy are denied.
   * *   `warn`: Alerts are generated for deployments that match the policy.
   * 
   * @example
   * deny
   */
  action?: string;
  /**
   * @remarks
   * The ID of the policy instance.
   * 
   * @example
   * allowed-repos-cbhhb
   */
  instanceName?: string;
  /**
   * @remarks
   * The namespaces to which the policy is applied. The policy is applied to all namespaces if this parameter is left empty.
   */
  namespaces?: string[];
  /**
   * @remarks
   * The parameters of the policy instance. For more information, see [Predefined security policies of ACK](https://help.aliyun.com/document_detail/359819.html).
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

