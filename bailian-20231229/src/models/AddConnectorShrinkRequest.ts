// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddConnectorShrinkRequest extends $dara.Model {
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
   * FILE
   */
  connectorType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  fileConnectorConfigShrink?: string;
  static names(): { [key: string]: string } {
    return {
      connectorName: 'ConnectorName',
      connectorType: 'ConnectorType',
      description: 'Description',
      fileConnectorConfigShrink: 'FileConnectorConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorName: 'string',
      connectorType: 'string',
      description: 'string',
      fileConnectorConfigShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

