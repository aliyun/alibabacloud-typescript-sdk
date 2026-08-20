// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyForwardStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The policy description.
   * 
   * @example
   * This is an internal access policy
   */
  description?: string;
  /**
   * @remarks
   * The target instance ID.
   * 
   * @example
   * connector-e3152978fb32443b
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
   * This parameter is required.
   * 
   * @example
   * fs-051199361a1fbefc
   */
  forwardId?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * CollegeStudentsOnline
   */
  name?: string;
  /**
   * @remarks
   * The policy priority. A value of 1 indicates the highest priority, and a value of 100 indicates the lowest priority.
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

