// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConnectorClientRequest extends $dara.Model {
  /**
   * @remarks
   * The connector ID. You can call [ListConnectors](~~ListConnectors~~) to query connector IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * connector-94db94e06b98****
   */
  connectorId?: string;
  /**
   * @remarks
   * The unique identifier of the ConnectorClient device. You can call [ListConnectors](~~ListConnectors~~) to query connector information.
   * 
   * This parameter is required.
   * 
   * @example
   * 672ECBEE-727B-5F43-8D22-90F2BD9E38A7
   */
  devTag?: string;
  /**
   * @remarks
   * The connection status of the ConnectorClient. Valid values:
   * - **Enabled**: connected.
   * - **Disabled**: disconnected.
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      connectorId: 'ConnectorId',
      devTag: 'DevTag',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorId: 'string',
      devTag: 'string',
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

