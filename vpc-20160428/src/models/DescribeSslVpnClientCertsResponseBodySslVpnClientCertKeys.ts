// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSslVpnClientCertsResponseBodySslVpnClientCertKeysSslVpnClientCertKey } from "./DescribeSslVpnClientCertsResponseBodySslVpnClientCertKeysSslVpnClientCertKey";


export class DescribeSslVpnClientCertsResponseBodySslVpnClientCertKeys extends $dara.Model {
  sslVpnClientCertKey?: DescribeSslVpnClientCertsResponseBodySslVpnClientCertKeysSslVpnClientCertKey[];
  static names(): { [key: string]: string } {
    return {
      sslVpnClientCertKey: 'SslVpnClientCertKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sslVpnClientCertKey: { 'type': 'array', 'itemType': DescribeSslVpnClientCertsResponseBodySslVpnClientCertKeysSslVpnClientCertKey },
    };
  }

  validate() {
    if(Array.isArray(this.sslVpnClientCertKey)) {
      $dara.Model.validateArray(this.sslVpnClientCertKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

