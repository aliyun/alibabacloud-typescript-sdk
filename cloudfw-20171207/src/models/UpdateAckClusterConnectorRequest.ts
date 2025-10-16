// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAckClusterConnectorRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac-7c1bad6c3cc84c33baab
   */
  connectorId?: string;
  /**
   * @example
   * ack-cluster-connector-name
   */
  connectorName?: string;
  /**
   * @example
   * 30
   */
  ttl?: string;
  static names(): { [key: string]: string } {
    return {
      connectorId: 'ConnectorId',
      connectorName: 'ConnectorName',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorId: 'string',
      connectorName: 'string',
      ttl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

