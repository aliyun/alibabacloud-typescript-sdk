// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConnectorRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable Global Accelerator. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  accelerateStatus?: string;
  /**
   * @remarks
   * The Connector ID. You can obtain the value by calling [ListConnectors](~~ListConnectors~~).
   * 
   * This parameter is required.
   * 
   * @example
   * connector-94db94e06b98****
   */
  connectorId?: string;
  /**
   * @remarks
   * The Connector name. The name must be 1 to 128 characters in length and can contain Chinese characters, letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * connector_name
   */
  name?: string;
  /**
   * @remarks
   * The instance status of the Connector. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Shutdown.
   * 
   * @example
   * Enabled
   */
  switchStatus?: string;
  /**
   * @remarks
   * The CIDR block of the virtual IP address.
   * 
   * @example
   * 10.0.0.0/24
   */
  vipCidr?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateStatus: 'AccelerateStatus',
      connectorId: 'ConnectorId',
      name: 'Name',
      switchStatus: 'SwitchStatus',
      vipCidr: 'VipCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateStatus: 'string',
      connectorId: 'string',
      name: 'string',
      switchStatus: 'string',
      vipCidr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

