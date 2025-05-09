// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProxyResponseBody extends $dara.Model {
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
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * The condition cannot be empty!
   */
  errorMessage?: string;
  /**
   * @remarks
   * The port number used by the HTTPS protocol.
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
   * Indicates whether the internal endpoint was enabled. Default value: **true**.
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
   * The port number used by the protocol.
   * 
   * @example
   * 3306
   */
  protocolPort?: number;
  /**
   * @remarks
   * The protocol type of the database. Example: MYSQL.
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
   * Indicates whether the public endpoint was enabled. Valid values:
   * 
   * *   **true**: The public endpoint was enabled.
   * *   **false**: The public endpoint was disabled.
   * 
   * @example
   * true
   */
  publicEnable?: boolean;
  /**
   * @remarks
   * The public endpoint. A public endpoint is returned no matter whether the public endpoint is enabled or disabled.
   * 
   * > 
   * 
   * *   If the value of the PublicEnable parameter is **true**, a valid public endpoint that can be resolved by using Alibaba Cloud DNS is returned.
   * 
   * *   If the value of the PublicEnable parameter is **false**, an invalid public endpoint that cannot be resolved by using Alibaba Cloud DNS is returned.
   * 
   * @example
   * dphzmy-5j8oimjsz6zed7k****.proxy.dms.aliyuncs.com
   */
  publicHost?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F49D4598-2B3C-5723-865E-2CCB818E****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
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
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'number',
      creatorName: 'string',
      errorCode: 'string',
      errorMessage: 'string',
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
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

