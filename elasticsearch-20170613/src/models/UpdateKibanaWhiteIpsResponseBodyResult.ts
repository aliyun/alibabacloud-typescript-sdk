// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateKibanaWhiteIpsResponseBodyResultNetworkConfig } from "./UpdateKibanaWhiteIpsResponseBodyResultNetworkConfig";


export class UpdateKibanaWhiteIpsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The public IP address whitelists for access to the Kibana console of the cluster.
   */
  kibanaIPWhitelist?: string[];
  /**
   * @remarks
   * The private IP address whitelists for access to the Kibana console of the cluster.
   */
  kibanaPrivateIPWhitelist?: string[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   */
  networkConfig?: UpdateKibanaWhiteIpsResponseBodyResultNetworkConfig;
  static names(): { [key: string]: string } {
    return {
      kibanaIPWhitelist: 'kibanaIPWhitelist',
      kibanaPrivateIPWhitelist: 'kibanaPrivateIPWhitelist',
      networkConfig: 'networkConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kibanaIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      kibanaPrivateIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      networkConfig: UpdateKibanaWhiteIpsResponseBodyResultNetworkConfig,
    };
  }

  validate() {
    if(Array.isArray(this.kibanaIPWhitelist)) {
      $dara.Model.validateArray(this.kibanaIPWhitelist);
    }
    if(Array.isArray(this.kibanaPrivateIPWhitelist)) {
      $dara.Model.validateArray(this.kibanaPrivateIPWhitelist);
    }
    if(this.networkConfig && typeof (this.networkConfig as any).validate === 'function') {
      (this.networkConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

