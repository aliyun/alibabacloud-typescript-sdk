// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateASMNamespaceFromGuestClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Kubernetes cluster whose namespace information you want to synchronize to ASM. The Kubernetes cluster is added to the ASM instance that is specified by the ServiceMeshId parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * c6f6d46583def494ba1f2e2937c8*****
   */
  k8sClusterId?: string;
  /**
   * @remarks
   * The ASM instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cbf9ca9e6d5dc4c87a3ecd0ebf1e*****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      k8sClusterId: 'K8sClusterId',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k8sClusterId: 'string',
      serviceMeshId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

