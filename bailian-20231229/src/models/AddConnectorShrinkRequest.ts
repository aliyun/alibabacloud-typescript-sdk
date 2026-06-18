// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddConnectorShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the connector.
   * 
   * This parameter is required.
   * 
   * @example
   * test-connector
   */
  connectorName?: string;
  /**
   * @remarks
   * The type of the connector.
   * 
   * This parameter is required.
   * 
   * @example
   * FILE
   */
  connectorType?: string;
  /**
   * @remarks
   * The description for the connector.
   * 
   * This parameter is required.
   * 
   * @example
   * 文件连接器
   */
  description?: string;
  /**
   * @remarks
   * The parameters for the file connector.
   */
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

