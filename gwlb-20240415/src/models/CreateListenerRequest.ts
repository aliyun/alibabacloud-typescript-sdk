// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateListenerRequestTag } from "./CreateListenerRequestTag";


export class CreateListenerRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without sending the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The description of the listener.
   * 
   * The description must be 2 to 256 characters in length, and can contain letters, digits, commas (,), periods (.), semicolons (;), forward slashes (/), at signs (@), underscores (_), and hyphens (-).
   * 
   * @example
   * listener-description
   */
  listenerDescription?: string;
  /**
   * @remarks
   * The GWLB instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gwlb-te609d6696632f7*****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The server group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sgp-ckh01px70dszof****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The tags. You can specify at most 20 tags in each call.
   */
  tag?: CreateListenerRequestTag[];
  /**
   * @remarks
   * The timeout period of an idle TCP connection. Unit: seconds.
   * 
   * Default value: **350**.
   * 
   * Valid values: **60** to **6000**.
   * 
   * @example
   * 350
   */
  tcpIdleTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerDescription: 'ListenerDescription',
      loadBalancerId: 'LoadBalancerId',
      serverGroupId: 'ServerGroupId',
      tag: 'Tag',
      tcpIdleTimeout: 'TcpIdleTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      listenerDescription: 'string',
      loadBalancerId: 'string',
      serverGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateListenerRequestTag },
      tcpIdleTimeout: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

