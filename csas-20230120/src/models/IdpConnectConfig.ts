// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IdpConnectConfig extends $dara.Model {
  connectorId?: string;
  useConnector?: boolean;
  static names(): { [key: string]: string } {
    return {
      connectorId: 'ConnectorId',
      useConnector: 'UseConnector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorId: 'string',
      useConnector: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

