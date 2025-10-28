// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteK8sIngressRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Kubernetes cluster.
   * 
   * @example
   * 5b2b4ab4-efbc-4a81-9c45-xxxxxxxxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the Ingress. The name can contain lowercase letters, digits, and hyphens (-). It must start with a lowercase letter but cannot end with a hyphen (-). The name can be up to 63 characters in length.
   * 
   * @example
   * my-ingress-rule
   */
  name?: string;
  /**
   * @remarks
   * The namespace of the Kubernetes cluster.
   * 
   * @example
   * default
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      name: 'Name',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      name: 'string',
      namespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

