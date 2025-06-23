// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPortRequest extends $dara.Model {
  /**
   * @remarks
   * The port of the origin server. Valid values: **0** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 55
   */
  backendPort?: string;
  /**
   * @remarks
   * The forwarding port. Valid values: **0** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 55
   */
  frontendPort?: string;
  /**
   * @remarks
   * The type of the forwarding protocol. Valid values:
   * 
   * *   **tcp**
   * *   **udp**
   * 
   * This parameter is required.
   * 
   * @example
   * tcp
   */
  frontendProtocol?: string;
  /**
   * @remarks
   * The ID of the Anti-DDoS Pro or Anti-DDoS Premium instance to which the port forwarding rule belongs.
   * 
   * > You can call the [DescribeInstanceIds](https://help.aliyun.com/document_detail/157459.html) operation to query the IDs of all instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-st21zbyq****
   */
  instanceId?: string;
  proxyEnable?: number;
  /**
   * @remarks
   * An array that consists of the IP addresses of origin servers.
   * 
   * This parameter is required.
   */
  realServers?: string[];
  static names(): { [key: string]: string } {
    return {
      backendPort: 'BackendPort',
      frontendPort: 'FrontendPort',
      frontendProtocol: 'FrontendProtocol',
      instanceId: 'InstanceId',
      proxyEnable: 'ProxyEnable',
      realServers: 'RealServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendPort: 'string',
      frontendPort: 'string',
      frontendProtocol: 'string',
      instanceId: 'string',
      proxyEnable: 'number',
      realServers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.realServers)) {
      $dara.Model.validateArray(this.realServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

