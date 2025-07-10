// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetListenerAttributeResponseBodyTags } from "./GetListenerAttributeResponseBodyTags";


export class GetListenerAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The listener description.
   * 
   * The description must be 2 to 256 characters in length, and can contain letters, digits, commas (,), periods (.), semicolons (;), forward slashes (/), at signs (@), underscores (_), and hyphens (-).
   * 
   * @example
   * listener_description
   */
  listenerDescription?: string;
  /**
   * @remarks
   * The listener ID.
   * 
   * @example
   * lsn-3kbj3587mqhm3p****
   */
  listenerId?: string;
  /**
   * @remarks
   * The listener status. Valid values:
   * 
   * *   **Provisioning**: The listener is being created.
   * *   **Running**: The listener is running.
   * *   **Configuring**: The listener is being configured.
   * *   **Deleting**: The listener is being deleted.
   * 
   * @example
   * Provisioning
   */
  listenerStatus?: string;
  /**
   * @remarks
   * The GWLB instance ID.
   * 
   * @example
   * gwlb-te609d6696632f76****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The region ID of the GWLB instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75CC3312-7757-5EE1-90D8-49CEA66608AE
   */
  requestId?: string;
  /**
   * @remarks
   * The server group ID.
   * 
   * @example
   * sgp-sp8d2r6y7t0xtl****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: GetListenerAttributeResponseBodyTags[];
  /**
   * @remarks
   * The timeout period of an idle TCP connection. Unit: seconds.
   * 
   * @example
   * 350
   */
  tcpIdleTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      listenerDescription: 'ListenerDescription',
      listenerId: 'ListenerId',
      listenerStatus: 'ListenerStatus',
      loadBalancerId: 'LoadBalancerId',
      regionId: 'RegionId',
      requestId: 'RequestId',
      serverGroupId: 'ServerGroupId',
      tags: 'Tags',
      tcpIdleTimeout: 'TcpIdleTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerDescription: 'string',
      listenerId: 'string',
      listenerStatus: 'string',
      loadBalancerId: 'string',
      regionId: 'string',
      requestId: 'string',
      serverGroupId: 'string',
      tags: { 'type': 'array', 'itemType': GetListenerAttributeResponseBodyTags },
      tcpIdleTimeout: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

