// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSslVpnServersResponseBodySslVpnServersSslVpnServer } from "./DescribeSslVpnServersResponseBodySslVpnServersSslVpnServer";


export class DescribeSslVpnServersResponseBodySslVpnServers extends $dara.Model {
  sslVpnServer?: DescribeSslVpnServersResponseBodySslVpnServersSslVpnServer[];
  static names(): { [key: string]: string } {
    return {
      sslVpnServer: 'SslVpnServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sslVpnServer: { 'type': 'array', 'itemType': DescribeSslVpnServersResponseBodySslVpnServersSslVpnServer },
    };
  }

  validate() {
    if(Array.isArray(this.sslVpnServer)) {
      $dara.Model.validateArray(this.sslVpnServer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

