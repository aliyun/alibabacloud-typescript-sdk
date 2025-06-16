// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DownloadVpnConnectionConfigResponseBodyVpnConnectionConfig } from "./DownloadVpnConnectionConfigResponseBodyVpnConnectionConfig";


export class DownloadVpnConnectionConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0C68048B-0F70-40DA-B8AE-1B79B5CF62E3
   */
  requestId?: string;
  /**
   * @remarks
   * The configurations of the peer gateway device.
   */
  vpnConnectionConfig?: DownloadVpnConnectionConfigResponseBodyVpnConnectionConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpnConnectionConfig: 'VpnConnectionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpnConnectionConfig: DownloadVpnConnectionConfigResponseBodyVpnConnectionConfig,
    };
  }

  validate() {
    if(this.vpnConnectionConfig && typeof (this.vpnConnectionConfig as any).validate === 'function') {
      (this.vpnConnectionConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

