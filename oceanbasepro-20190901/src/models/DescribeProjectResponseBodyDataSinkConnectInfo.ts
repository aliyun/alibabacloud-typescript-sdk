// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProjectResponseBodyDataSinkConnectInfo extends $dara.Model {
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
   * MYSQL_PUBLIC
   */
  dbEngine?: string;
  /**
   * @example
   * e_4w1q****
   */
  endpointId?: string;
  /**
   * @example
   * RATION12948*****
   */
  endpointName?: string;
  /**
   * @example
   * sink
   */
  endpointSide?: string;
  /**
   * @example
   * xxx.xxx.xxx.1
   */
  host?: string;
  /**
   * @example
   * e_4lgzuzi9znr4
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
   * oms_test
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
   * +08:00
   */
  timezone?: string;
  /**
   * @example
   * oms2027obmysql@oms_***
   */
  username?: string;
  /**
   * @example
   * 2.2.77
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

