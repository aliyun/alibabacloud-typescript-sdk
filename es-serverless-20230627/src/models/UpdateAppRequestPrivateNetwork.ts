// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateAppRequestPrivateNetworkWhiteIpGroup } from "./UpdateAppRequestPrivateNetworkWhiteIpGroup";


export class UpdateAppRequestPrivateNetwork extends $dara.Model {
  enabled?: boolean;
  pvlEndpointId?: string;
  type?: string;
  vpcId?: string;
  whiteIpGroup?: UpdateAppRequestPrivateNetworkWhiteIpGroup[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      pvlEndpointId: 'pvlEndpointId',
      type: 'type',
      vpcId: 'vpcId',
      whiteIpGroup: 'whiteIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      pvlEndpointId: 'string',
      type: 'string',
      vpcId: 'string',
      whiteIpGroup: { 'type': 'array', 'itemType': UpdateAppRequestPrivateNetworkWhiteIpGroup },
    };
  }

  validate() {
    if(Array.isArray(this.whiteIpGroup)) {
      $dara.Model.validateArray(this.whiteIpGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

