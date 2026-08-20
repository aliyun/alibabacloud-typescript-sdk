// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyForwardStrategyResponseBodyForwardStrategy extends $dara.Model {
  /**
   * @remarks
   * The policy description.
   * 
   * @example
   * material_versions_rec
   */
  description?: string;
  /**
   * @remarks
   * The target instance ID.
   * 
   * @example
   * connector-f0b9195a6f2597fa
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
   * The forwarding rule ID.
   * 
   * @example
   * fs-037cee3b6ebaa919
   */
  forwardId?: string;
  /**
   * @remarks
   * The name of the forwarding rule.
   * 
   * @example
   * SaseSSO
   */
  name?: string;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 100
   */
  priority?: number;
  /**
   * @remarks
   * The policy status. Valid values:
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

export class ModifyForwardStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The forwarding rule.
   */
  forwardStrategy?: ModifyForwardStrategyResponseBodyForwardStrategy;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2EBEEB93-E7AF-5667-B492-FA95C70821A0
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
      forwardStrategy: ModifyForwardStrategyResponseBodyForwardStrategy,
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

