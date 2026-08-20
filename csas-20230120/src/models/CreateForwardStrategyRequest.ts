// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateForwardStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The description. The description must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), hyphens (-), and spaces. The description can also contain Chinese characters.
   * 
   * @example
   * This is an internal access policy
   */
  description?: string;
  /**
   * @remarks
   * The target instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * connector-4178bc59bec56df1
   */
  destinationId?: string;
  /**
   * @remarks
   * The destination type. Valid values:
   * - **Connector**: connector.
   * 
   * This parameter is required.
   * 
   * @example
   * Connector
   */
  destinationType?: string;
  /**
   * @remarks
   * The name. The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name can also contain Chinese characters.
   * 
   * This parameter is required.
   * 
   * @example
   * jogg-K8sapi
   */
  name?: string;
  /**
   * @remarks
   * The policy priority. A value of 1 indicates the highest priority. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The policy status. Valid values:
   * - **Enabled**: enabled.
   * - **Disabled**: disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * Approved
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationId: 'DestinationId',
      destinationType: 'DestinationType',
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

