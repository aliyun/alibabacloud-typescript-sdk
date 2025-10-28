// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateK8sConfigMapRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Kubernetes cluster.
   * 
   * @example
   * b07c8192-****-adf4f7447720
   */
  clusterId?: string;
  /**
   * @remarks
   * The data of the ConfigMap. The value must be a JSON array string.
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

