// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConnectorRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-connector
   */
  connectorName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * never_delete_aeip_95_us-west-1
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      connectorName: 'ConnectorName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorName: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

