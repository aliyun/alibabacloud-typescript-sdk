// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigNetworkRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The details of the port forwarding rule. This parameter is a JSON string. The string contains the following fields:
   * 
   * *   **InstanceId**: the ID of the instance. This field is required and must be of the STRING type.
   * *   **Protocol**: the forwarding protocol. This field is required and must be of the STRING type. Valid values: **tcp** and **udp**.
   * *   **FrontendPort**: the forwarding port. This field is required and must be of the INTEGER type.
   * *   **BackendPort**: the port of the origin server. This field is required and must be of the INTEGER type.
   * *   **RealServers**: the IP addresses of the origin server. This field is required and must be a JSON array. You can specify up to 20 IP addresses.
   * 
   * > You can modify only the value of **RealServers** when you modify a port forwarding rule.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"InstanceId":"ddoscoo-cn-mp91j1ao****","Protocol":"tcp","FrontendPort":8080,"BackendPort":8080,"RealServers":["1.1.1.1","2.2.2.2","3.3.3.3"]}]
   */
  networkRules?: string;
  static names(): { [key: string]: string } {
    return {
      networkRules: 'NetworkRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkRules: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

