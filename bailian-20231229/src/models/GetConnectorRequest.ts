// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnectorRequest extends $dara.Model {
  /**
   * @example
   * file_conn_xxxx
   */
  connectorId?: string;
  connectorName?: string;
  static names(): { [key: string]: string } {
    return {
      connectorId: 'ConnectorId',
      connectorName: 'ConnectorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorId: 'string',
      connectorName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

