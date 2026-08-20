// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateForwardStrategyResponseBodyForwardStrategy extends $dara.Model {
  /**
   * @remarks
   * The description of the traffic forwarding rule.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The target instance ID.
   * 
   * @example
   * connector-af9b4ee6fd15d82d
   */
  destinationId?: string;
  /**
   * @remarks
   * The destination type. Valid values:
   * - **Connector**: connector.
   * 
   * @example
   * Connector
   */
  destinationType?: string;
  /**
   * @remarks
   * The ID of the traffic forwarding rule.
   * 
   * @example
   * fs-345d6ab82b5a43a3
   */
  forwardId?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * xftp
   */
  name?: string;
  /**
   * @remarks
   * The policy priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The status of the internal-facing access application. Valid values:
   * - **Enabled**: enabled.
   * - **Disabled**: disabled.
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

export class CreateForwardStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The traffic forwarding rule.
   */
  forwardStrategy?: CreateForwardStrategyResponseBodyForwardStrategy;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 60D4601C-B693-51A8-BB30-0944CE500B75
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
      forwardStrategy: CreateForwardStrategyResponseBodyForwardStrategy,
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

