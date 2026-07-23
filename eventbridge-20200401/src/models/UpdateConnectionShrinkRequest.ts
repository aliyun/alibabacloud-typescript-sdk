// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConnectionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The data structure of the authentication parameters.
   */
  authParametersShrink?: string;
  /**
   * @remarks
   * The name of the connection to be updated. The maximum length is 127 characters. The minimum length is 2 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * connection-name
   */
  connectionName?: string;
  /**
   * @remarks
   * The description. The maximum length is 255 characters.
   * 
   * @example
   * Description of the connection configuration
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
   * The data source connection parameters (JSON object). For specific field definitions, call the GetConnectionType API and refer to the ParamsSchema in the response.
   * 
   * @example
   * {"HostName":"xxx.mysql.rds.aliyuncs.com","Port":"3306","User":"root","Password":"xxx","DatabaseName":"demo_db"}
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The connection type. Valid values: MySQL, PostgreSQL, Elasticsearch, and Http.
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

