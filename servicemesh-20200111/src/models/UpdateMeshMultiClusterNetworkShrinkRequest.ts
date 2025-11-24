// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMeshMultiClusterNetworkShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The network configuration descriptions of multiple Kubernetes clusters. The key in the map is the ID of a Kubernetes cluster, and the value is the network configuration of the cluster.
   */
  multiClusterNetworksShrink?: string;
  /**
   * @remarks
   * The ID of the ASM instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cb8963379255149cb98c8686f274x****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      multiClusterNetworksShrink: 'MultiClusterNetworks',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multiClusterNetworksShrink: 'string',
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

