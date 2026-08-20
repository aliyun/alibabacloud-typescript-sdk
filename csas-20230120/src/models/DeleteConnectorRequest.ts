// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteConnectorRequest extends $dara.Model {
  /**
   * @remarks
   * ConnectorID。
   * 
   * This parameter is required.
   * 
   * @example
   * connector-d02b62911b2fb2d4
   */
  connectorId?: string;
  static names(): { [key: string]: string } {
    return {
      connectorId: 'ConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

