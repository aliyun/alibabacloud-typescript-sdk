// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsResponseBodyDataSourceConnectInfo extends $dara.Model {
  /**
   * @example
   * utf8mb4
   */
  charset?: string;
  /**
   * @example
   * null
   */
  connExtraAttributes?: any;
  /**
   * @example
   * null
   */
  connectionInfo?: string;
  /**
   * @example
   * OB_MYSQL_PUBLIC
   */
  dbEngine?: string;
  /**
   * @example
   * e_4w3al***
   */
  endpointId?: string;
  /**
   * @example
   * ration12****0obmysql4116892***
   */
  endpointName?: string;
  /**
   * @example
   * source
   */
  endpointSide?: string;
  /**
   * @example
   * xxx.xxx.xxx.1
   */
  host?: string;
  /**
   * @example
   * c_4w3aq****
   */
  id?: string;
  /**
   * @example
   * null
   */
  nlsLengthSemantics?: string;
  /**
   * @example
   * null
   */
  ocpName?: string;
  /**
   * @example
   * Linux
   */
  operatingSystem?: string;
  /**
   * @remarks
   * Owner。
   * 
   * @example
   * admin
   */
  owner?: string;
  /**
   * @example
   * 2883
   */
  port?: number;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * 1325847***
   */
  resourceOwner?: string;
  /**
   * @example
   * UTC
   */
  timezone?: string;
  /**
   * @example
   * oms931mys**
   */
  username?: string;
  /**
   * @example
   * 5.7.27
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      charset: 'Charset',
      connExtraAttributes: 'ConnExtraAttributes',
      connectionInfo: 'ConnectionInfo',
      dbEngine: 'DbEngine',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      endpointSide: 'EndpointSide',
      host: 'Host',
      id: 'Id',
      nlsLengthSemantics: 'NlsLengthSemantics',
      ocpName: 'OcpName',
      operatingSystem: 'OperatingSystem',
      owner: 'Owner',
      port: 'Port',
      region: 'Region',
      resourceOwner: 'ResourceOwner',
      timezone: 'Timezone',
      username: 'Username',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charset: 'string',
      connExtraAttributes: 'any',
      connectionInfo: 'string',
      dbEngine: 'string',
      endpointId: 'string',
      endpointName: 'string',
      endpointSide: 'string',
      host: 'string',
      id: 'string',
      nlsLengthSemantics: 'string',
      ocpName: 'string',
      operatingSystem: 'string',
      owner: 'string',
      port: 'number',
      region: 'string',
      resourceOwner: 'string',
      timezone: 'string',
      username: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

