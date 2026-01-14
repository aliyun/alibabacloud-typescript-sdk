// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigEndpointProbeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable latency monitoring. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: string;
  /**
   * @remarks
   * The endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * 127.0.XX.XX
   */
  endpoint?: string;
  /**
   * @remarks
   * The endpoint group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * epg-bp1dmlohjjz4kqaun****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * *   **Ip:** a custom IP address.
   * *   **Domain:** a custom domain name.
   * *   **EIP:** an Alibaba Cloud elastic IP address (EIP).
   * *   **PublicIp:** an Alibaba Cloud public IP address.
   * 
   * This parameter is required.
   * 
   * @example
   * Ip
   */
  endpointType?: string;
  /**
   * @remarks
   * The port that is used to monitor latency. Valid values: **0** to **65535**.
   * 
   * @example
   * 80
   */
  probePort?: string;
  /**
   * @remarks
   * The protocol that is used to monitor latency. Valid values:
   * 
   * *   **tcp:** TCP.
   * *   **icmp:** ICMP.
   * 
   * @example
   * tcp
   */
  probeProtocol?: string;
  /**
   * @remarks
   * The region ID of the GA instance. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      enable: 'Enable',
      endpoint: 'Endpoint',
      endpointGroupId: 'EndpointGroupId',
      endpointType: 'EndpointType',
      probePort: 'ProbePort',
      probeProtocol: 'ProbeProtocol',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      enable: 'string',
      endpoint: 'string',
      endpointGroupId: 'string',
      endpointType: 'string',
      probePort: 'string',
      probeProtocol: 'string',
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

