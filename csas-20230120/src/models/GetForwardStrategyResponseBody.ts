// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetForwardStrategyResponseBodyForwardStrategy extends $dara.Model {
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * solemn_index
   */
  description?: string;
  /**
   * @remarks
   * The target instance ID.
   * 
   * @example
   * connector-bb95f515b6818623
   */
  destinationId?: string;
  /**
   * @remarks
   * The destination type. Valid values:
   * - **Connector**: Connector.
   * 
   * @example
   * Connector
   */
  destinationType?: string;
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * @example
   * fs-b87a2f8e863bf02c
   */
  forwardId?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * dynamic_route_name_eb55d3a3
   */
  name?: string;
  /**
   * @remarks
   * The policy priority. A value of 1 indicates the highest priority, and a value of 100 indicates the lowest priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The status of the policy. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationId: 'DestinationId',
      destinationType: 'DestinationType',
      forwardId: 'ForwardId',
      name: 'Name',
      priority: 'Priority',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationId: 'string',
      destinationType: 'string',
      forwardId: 'string',
      name: 'string',
      priority: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetForwardStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The forwarding rule.
   */
  forwardStrategy?: GetForwardStrategyResponseBodyForwardStrategy;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BE4FB974-11BC-5453-9BE1-1606A73EACA6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardStrategy: 'ForwardStrategy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardStrategy: GetForwardStrategyResponseBodyForwardStrategy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.forwardStrategy && typeof (this.forwardStrategy as any).validate === 'function') {
      (this.forwardStrategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

