// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateNetworkInterfaceResponseBodyPrivateIpSetsPrivateIpSet } from "./CreateNetworkInterfaceResponseBodyPrivateIpSetsPrivateIpSet";


export class CreateNetworkInterfaceResponseBodyPrivateIpSets extends $dara.Model {
  privateIpSet?: CreateNetworkInterfaceResponseBodyPrivateIpSetsPrivateIpSet[];
  static names(): { [key: string]: string } {
    return {
      privateIpSet: 'PrivateIpSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateIpSet: { 'type': 'array', 'itemType': CreateNetworkInterfaceResponseBodyPrivateIpSetsPrivateIpSet },
    };
  }

  validate() {
    if(Array.isArray(this.privateIpSet)) {
      $dara.Model.validateArray(this.privateIpSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

