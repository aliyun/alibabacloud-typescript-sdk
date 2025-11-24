// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MultiClusterNetworksValue } from "./MultiClusterNetworksValue";


export class DescribeMeshMultiClusterNetworkResponseBody extends $dara.Model {
  multiClusterNetworks?: { [key: string]: MultiClusterNetworksValue };
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 71680038-8009-5073-B43E-C057E9******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      multiClusterNetworks: 'MultiClusterNetworks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multiClusterNetworks: { 'type': 'map', 'keyType': 'string', 'valueType': MultiClusterNetworksValue },
      requestId: 'string',
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

