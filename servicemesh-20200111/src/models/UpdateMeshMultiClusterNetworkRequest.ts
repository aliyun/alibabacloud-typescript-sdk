// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MultiClusterNetworksValue } from "./MultiClusterNetworksValue";


export class UpdateMeshMultiClusterNetworkRequest extends $dara.Model {
  /**
   * @remarks
   * The network configuration descriptions of multiple Kubernetes clusters. The key in the map is the ID of a Kubernetes cluster, and the value is the network configuration of the cluster.
   */
  multiClusterNetworks?: { [key: string]: MultiClusterNetworksValue };
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
      multiClusterNetworks: 'MultiClusterNetworks',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multiClusterNetworks: { 'type': 'map', 'keyType': 'string', 'valueType': MultiClusterNetworksValue },
      serviceMeshId: 'string',
    };
  }

  validate() {
    if(this.multiClusterNetworks) {
      $dara.Model.validateMap(this.multiClusterNetworks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

