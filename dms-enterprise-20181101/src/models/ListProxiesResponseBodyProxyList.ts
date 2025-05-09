// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProxiesResponseBodyProxyList extends $dara.Model {
  /**
   * @remarks
   * The ID of the user who enabled the secure access proxy feature.
   * 
   * @example
   * 12****
   */
  creatorId?: number;
  /**
   * @remarks
   * The nickname of the user who enabled the secure access proxy feature.
   * 
   * @example
   * test_name
   */
  creatorName?: string;
  /**
   * @remarks
   * The number of the port that was used by HTTPS clients to connect to the database instance.
   * 
   * @example
   * 443
   */
  httpsPort?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 183****
   */
  instanceId?: number;
  /**
   * @remarks
   * Indicates whether the internal endpoint is enabled. Default value: **true**.
   * 
   * @example
   * true
   */
  privateEnable?: boolean;
  /**
   * @remarks
   * The internal endpoint.
   * 
   * @example
   * dphzmy-5j8oimjsz6ze****.proxy.dms.aliyuncs.com
   */
  privateHost?: string;
  /**
   * @remarks
   * The number of the port that is used to connect the database instance.
   * 
   * @example
   * 3306
   */
  protocolPort?: number;
  /**
   * @remarks
   * The type of the database. Example: MYSQL.
   * 
   * @example
   * MYSQL
   */
  protocolType?: string;
  /**
   * @remarks
   * The ID of the secure access proxy.
   * 
   * @example
   * 4**
   */
  proxyId?: number;
  /**
   * @remarks
   * Indicates whether the public endpoint is enabled. Valid values:
   * 
   * *   **true**: The public endpoint is enabled.
   * *   **false**: The public endpoint is disabled.
   * 
   * @example
   * false
   */
  publicEnable?: boolean;
  /**
   * @remarks
   * The public endpoint. A public endpoint is returned no matter whether the public endpoint is enabled or disabled.
   * 
   * > 
   * 
   * *   If the value of the PublicEnable parameter is **true**, a valid public endpoint that can be resolved by using Alibaba Cloud DNS (DNS) is returned.
   * 
   * *   If the value of the PublicEnable parameter is **false**, an invalid public endpoint that cannot be resolved by using DNS is returned.
   * 
   * @example
   * dphzmy-5j8oimjsz6ze****-pub.proxy.dms.aliyuncs.com
   */
  publicHost?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
      httpsPort: 'HttpsPort',
      instanceId: 'InstanceId',
      privateEnable: 'PrivateEnable',
      privateHost: 'PrivateHost',
      protocolPort: 'ProtocolPort',
      protocolType: 'ProtocolType',
      proxyId: 'ProxyId',
      publicEnable: 'PublicEnable',
      publicHost: 'PublicHost',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'number',
      creatorName: 'string',
      httpsPort: 'number',
      instanceId: 'number',
      privateEnable: 'boolean',
      privateHost: 'string',
      protocolPort: 'number',
      protocolType: 'string',
      proxyId: 'number',
      publicEnable: 'boolean',
      publicHost: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

