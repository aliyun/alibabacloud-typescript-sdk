// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateK8sConfigMapRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Kubernetes cluster.
   * 
   * @example
   * 7246cxxx-53xx-xxxx-xxxx-xxxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The data of the ConfigMap. Set this parameter to a JSON string.
   * 
   * @example
   * [{"Key":"name","Value":"william"},{"Key":"age","Value":"12"}]
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * The name of the ConfigMap. The name must start with a letter, and can contain digits, letters, and hyphens (-). It can be up to 63 characters in length.
   * 
   * @example
   * my-configmap
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
      data: 'Data',
      name: 'Name',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      namespace: 'string',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

