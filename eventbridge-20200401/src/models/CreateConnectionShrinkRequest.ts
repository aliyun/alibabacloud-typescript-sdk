// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConnectionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The authentication data structure.
   */
  authParametersShrink?: string;
  /**
   * @remarks
   * The name of the connection configuration. The length must be 2 to 127 characters.
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
   * The data structure of the network configuration.
   * 
   * This parameter is required.
   */
  networkParametersShrink?: string;
  /**
   * @remarks
   * The data source connection parameters in JSON format. This parameter is required when Type is set to a data source type, and is not required when Type is set to Http. For specific field definitions, call the GetConnectionType operation and refer to ParamsSchema in the response.
   * 
   * @example
   * {"HostName":"xxx.mysql.rds.aliyuncs.com","Port":"3306","User":"root","Password":"xxx","DatabaseName":"demo_db"}
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The connection type. Valid values: MySQL, PostgreSQL, Elasticsearch, OSS_TABLES, SLS, OTS, MaxCompute, MongoDB, Redis, SQLServer, ClickHouse, Oracle, Hive, Iceberg, lakehouse, and Http. This parameter is required for data source connections. If you do not specify this parameter, the default value Http is used. The Http type is used for HTTP protocol targets such as API Destination. Hive and Iceberg are used for their respective data lakehouse data sources. The lakehouse type is used only for compatibility with existing connections. Other data source types are used for data connections in the integration marketplace.
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

