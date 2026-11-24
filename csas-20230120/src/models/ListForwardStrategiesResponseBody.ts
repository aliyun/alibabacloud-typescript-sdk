// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListForwardStrategiesResponseBodyForwardStrategies extends $dara.Model {
  /**
   * @remarks
   * The description of the forwarding rule.
   * 
   * @example
   * asdasdasd
   */
  description?: string;
  /**
   * @remarks
   * The ID of the destination instance.
   * 
   * @example
   * connector-4178bc59bec56df1
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
   * fs-8b299ac5a93a0a3a
   */
  forwardId?: string;
  /**
   * @remarks
   * The name of the forwarding rule.
   * 
   * @example
   * Whitelist acceleration
   */
  name?: string;
  /**
   * @remarks
   * The policy priority.
   * 
   * @example
   * 100
   */
  priority?: string;
  /**
   * @remarks
   * The status of the forwarding rule. Valid values:
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
      priority: 'string',
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

export class ListForwardStrategiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The forwarding rules.
   */
  forwardStrategies?: ListForwardStrategiesResponseBodyForwardStrategies[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D6707286-A50E-57B1-B2CF-EFAC59E850D8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of forwarding rules.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      forwardStrategies: 'ForwardStrategies',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardStrategies: { 'type': 'array', 'itemType': ListForwardStrategiesResponseBodyForwardStrategies },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.forwardStrategies)) {
      $dara.Model.validateArray(this.forwardStrategies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

