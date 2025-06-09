// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAppResponseBodyResultPrivateNetworkWhiteIpGroup } from "./GetAppResponseBodyResultPrivateNetworkWhiteIpGroup";


export class GetAppResponseBodyResultPrivateNetwork extends $dara.Model {
  domain?: string;
  enabled?: boolean;
  port?: number;
  pvlEndpointId?: string;
  type?: string;
  vpcId?: string;
  whiteIpGroup?: GetAppResponseBodyResultPrivateNetworkWhiteIpGroup[];
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      enabled: 'enabled',
      port: 'port',
      pvlEndpointId: 'pvlEndpointId',
      type: 'type',
      vpcId: 'vpcId',
      whiteIpGroup: 'whiteIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enabled: 'boolean',
      port: 'number',
      pvlEndpointId: 'string',
      type: 'string',
      vpcId: 'string',
      whiteIpGroup: { 'type': 'array', 'itemType': GetAppResponseBodyResultPrivateNetworkWhiteIpGroup },
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

