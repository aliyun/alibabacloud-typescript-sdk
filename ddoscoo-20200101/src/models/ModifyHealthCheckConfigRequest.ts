// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHealthCheckConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The forwarding protocol. Valid values:
   * 
   * *   **tcp**
   * *   **udp**
   * 
   * This parameter is required.
   * 
   * @example
   * tcp
   */
  forwardProtocol?: string;
  /**
   * @remarks
   * The forwarding port.
   * 
   * This parameter is required.
   * 
   * @example
   * 8080
   */
  frontendPort?: number;
  /**
   * @remarks
   * The details of the health check configuration. This parameter is a JSON string. The string contains the following fields:
   * 
   * *   **Type**: the protocol type. This field is required and must be of the STRING type. Valid values: **tcp** (Layer 4) and **http** (Layer 7).
   * 
   * *   **Domain**: the domain name, which must be of the STRING type.
   * 
   *     **
   * 
   *     **Note**This parameter is returned only when the Layer 7 health check configuration is queried.
   * 
   * *   **Uri**: the check path, which must be of the STRING type.
   * 
   *     **
   * 
   *     **Note**This parameter is returned only when the Layer 7 health check configuration is queried.
   * 
   * *   **Timeout**: the response timeout period, which must be of the INTEGER type. Valid values: **1** to **30**. Unit: seconds.
   * 
   * *   **Port**: the port on which you want to perform the health check, which must be of the INTEGER type.
   * 
   * *   **Interval**: the health check interval, which must be of the INTEGER type. Valid values: **1** to **30**. Unit: seconds.
   * 
   * *   **Up**: the number of consecutive successful health checks that must occur before declaring a port healthy, which must be of the INTEGER type. Valid values: **1** to **10**.
   * 
   * *   **Down**: the number of consecutive failed health checks that must occur before declaring a port unhealthy, which must be of the INTEGER type. Valid values: **1** to **10**.
   * 
   * This parameter is required.
   * 
   * @example
   * {"Type":"tcp","Timeout":10,"Port":8080,"Interval":10,"Up":10,"Down":40}
   */
  healthCheck?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > You can call the [DescribeInstanceIds](https://help.aliyun.com/document_detail/157459.html) operation to query the IDs of all instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-mp91j1ao****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardProtocol: 'ForwardProtocol',
      frontendPort: 'FrontendPort',
      healthCheck: 'HealthCheck',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardProtocol: 'string',
      frontendPort: 'number',
      healthCheck: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

