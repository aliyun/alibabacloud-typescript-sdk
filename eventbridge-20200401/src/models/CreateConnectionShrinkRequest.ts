// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConnectionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The authentication configuration.
   */
  authParametersShrink?: string;
  /**
   * @remarks
   * The connection configuration name. Maximum length: 127 characters. Minimum length: 2 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * connection-name
   */
  connectionName?: string;
  /**
   * @remarks
   * The description of the connection configuration. Maximum length: 255 characters.
   * 
   * @example
   * demo
   */
  description?: string;
  /**
   * @remarks
   * The network configuration.
   * 
   * This parameter is required.
   */
  networkParametersShrink?: string;
  /**
   * @remarks
   * The data source connection parameters (JSON object). This parameter is required when Type is set to a data source type. This parameter is not required for the Http type. For specific field definitions, call the GetConnectionType operation and refer to ParamsSchema in the response.
   * 
   * @example
   * {"HostName":"xxx.mysql.rds.aliyuncs.com","Port":"3306","User":"root","Password":"xxx","DatabaseName":"demo_db"}
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The connection type. Valid values: MySQL, PostgreSQL, Elasticsearch, and Http. This parameter is required for data source connections. If this parameter is not specified, the default value Http is used. The Http type is used for HTTP protocol targets such as API Destination. Data source types are used for data connections in the integration marketplace.
   * 
   * @example
   * Http
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      authParametersShrink: 'AuthParameters',
      connectionName: 'ConnectionName',
      description: 'Description',
      networkParametersShrink: 'NetworkParameters',
      parametersShrink: 'Parameters',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authParametersShrink: 'string',
      connectionName: 'string',
      description: 'string',
      networkParametersShrink: 'string',
      parametersShrink: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

