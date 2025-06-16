// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigBgpConfigsBgpConfig } from "./DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigBgpConfigsBgpConfig";


export class DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigBgpConfigs extends $dara.Model {
  bgpConfig?: DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigBgpConfigsBgpConfig[];
  static names(): { [key: string]: string } {
    return {
      bgpConfig: 'BgpConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpConfig: { 'type': 'array', 'itemType': DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigBgpConfigsBgpConfig },
    };
  }

  validate() {
    if(Array.isArray(this.bgpConfig)) {
      $dara.Model.validateArray(this.bgpConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

