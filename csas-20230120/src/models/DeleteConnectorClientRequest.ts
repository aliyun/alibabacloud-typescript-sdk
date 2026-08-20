// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteConnectorClientRequest extends $dara.Model {
  /**
   * @remarks
   * The connector ID. You can call [ListConnectors](~~ListConnectors~~) to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * connector-94db94e06b98****
   */
  connectorId?: string;
  /**
   * @remarks
   * The unique identifier of the ConnectorClient device. You can call [ListConnectors](~~ListConnectors~~) to obtain the identifier.
   * 
   * This parameter is required.
   * 
   * @example
   * E4BD65C4-58F6-5127-AD2F-319CF020F549
   */
  devTag?: string;
  static names(): { [key: string]: string } {
    return {
      connectorId: 'ConnectorId',
      devTag: 'DevTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorId: 'string',
      devTag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

