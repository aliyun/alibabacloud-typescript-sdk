// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWebRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated defense. This parameter applies to scenarios in which other cloud services, such as Object Storage Service (OSS), are integrated with Anti-DDoS Pro or Anti-DDoS Premium.
   * 
   * > This parameter is in internal preview. Do not use this parameter.
   * 
   * For example, if you integrate OSS with Anti-DDoS Pro or Anti-DDoS Premium, Anti-DDoS Pro or Anti-DDoS Premium allocates an IP address pool for the OSS production account. Each IP address corresponds to a unique defense ID. A defense ID is a CNAME, which is automatically resolved to the IP address of the required Anti-DDoS Pro or Anti-DDoS Premium instance. A defense ID can be resolved to the same IP address to facilitate scheduling.
   * 
   * > You can specify only one of the following parameters: **InstanceIds** and **DefenseId**.
   * 
   * @example
   * testid
   */
  defenseId?: string;
  /**
   * @remarks
   * The domain name of the website that you want to add to the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The advanced HTTPS settings. This parameter takes effect only when the value of the **ProxyType** parameter includes **https**. The value is a string that consists of a JSON struct. The JSON struct contains the following fields:
   * 
   * *   **Http2https**: specifies whether to turn on Enforce HTTPS Routing. This field is optional and must be an integer. Valid values: **0** and **1**. The value 0 indicates that Enforce HTTPS Routing is turned off. The value 1 indicates that Enforce HTTPS Routing is turned on. The default value is 0.
   * 
   *     If your website supports both HTTP and HTTPS, this feature meets your business requirements. If you enable this feature, all HTTP requests to access the website are redirected to HTTPS requests on the standard port 443.
   * 
   * *   **Https2http**: specifies whether to turn on Enable HTTP. This field is optional and must be an integer. Valid values: **0** and **1**. The value 0 indicates that Enable HTTP is turned off. The value 1 indicates that Enable HTTP is turned on. The default value is 0.
   * 
   *     If your website does not support HTTPS, this feature meets your business requirements If this feature is enabled, all HTTPS requests are redirected to HTTP requests and forwarded to origin servers. This feature can redirect WebSockets requests to WebSocket requests. Requests are redirected over the standard port 80.
   * 
   * *   **Http2**: specifies whether to turn on Enable HTTP/2. This field is optional and must be an integer. Valid values: **0** and **1**. The value 0 indicates that Enable HTTP/2 is turned off. The value 1 indicates that Enable HTTP/2 is turned on. The default value is 0.
   * 
   *     After you turn on Enable HTTP/2, the protocol type is HTTP/2.
   * 
   * @example
   * {"Http2":1,"Http2https":1,"Https2http":1}
   */
  httpsExt?: string;
  /**
   * @remarks
   * An array consisting of the IDs of instances that you want to associate.
   * 
   * @example
   * ddoscoo-cn-mp91j1ao****
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs in Resource Management. This parameter is empty by default, which indicates that the instance belongs to the default resource group.
   * 
   * For more information about resource groups, see [Create a resource group](https://help.aliyun.com/document_detail/94485.html).
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The address type of the origin server. Valid values:
   * 
   * *   **0**: IP address
   * *   **1**: domain name The domain name of the origin server is returned if you deploy proxies, such as Web Application Firewall (WAF), between the origin server and the instance. In this case, the address of the proxy, such as the CNAME provided by WAF, is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  rsType?: number;
  /**
   * @remarks
   * The details of the forwarding rule. The value is a string that consists of JSON arrays. Each element in a JSON array is a JSON struct that contains the following fields:
   * 
   * *   **ProxyRules**: the information about the origin server. The information includes the port number and IP address. This field is required and must be a JSON array. Each element in a JSON array is a JSON struct that contains the following fields:
   * 
   *     *   **ProxyPort**: the port number. This field is required and must be an integer.
   *     *   **RealServers**: the IP address. This field is required and must be a string array.
   * 
   * *   **ProxyType**: the protocol type. This field is required and must be a string. Valid values: **http**, **https**, **websocket**, and **websockets**.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"ProxyRules":[{"ProxyPort":443,"RealServers":["192.1.XX.XX"]}],"ProxyType":"https"}]
   */
  rules?: string;
  static names(): { [key: string]: string } {
    return {
      defenseId: 'DefenseId',
      domain: 'Domain',
      httpsExt: 'HttpsExt',
      instanceIds: 'InstanceIds',
      resourceGroupId: 'ResourceGroupId',
      rsType: 'RsType',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseId: 'string',
      domain: 'string',
      httpsExt: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      rsType: 'number',
      rules: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

