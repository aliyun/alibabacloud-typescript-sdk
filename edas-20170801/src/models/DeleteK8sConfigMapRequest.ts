// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteK8sConfigMapRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 51e37e91-6403-423a-9913-f236aa7a6a50
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the ConfigMap. The name must start with a letter, and can contain digits, letters, and hyphens (-). It can be up to 63 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * my-configmap
   */
  name?: string;
  /**
   * @remarks
   * The namespace of the Kubernetes cluster.
   * 
   * This parameter is required.
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

