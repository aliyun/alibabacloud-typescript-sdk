// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourceResponseBodyData extends $dara.Model {
  /**
   * @example
   * utf8mb4
   */
  charset?: string;
  /**
   * @example
   * cluster_name
   */
  cluster?: string;
  /**
   * @example
   * null
   */
  connExtraAttributes?: any;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 2023-07-13T20:27:28.000+00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2023-07-13T20:37:28.000+00:00
   */
  gmtModified?: string;
  /**
   * @example
   * e_4w****v
   */
  id?: string;
  /**
   * @example
   * xxx.xxx.xxx.1
   */
  ip?: string;
  /**
   * @example
   * RATION***1DBUTF11
   */
  name?: string;
  /**
   * @example
   * Linux
   */
  operatingSystem?: string;
  /**
   * @example
   * null
   */
  oracleNlsLengthSemantics?: string;
  /**
   * @example
   * null
   */
  oracleSid?: string;
  /**
   * @example
   * admin
   */
  owner?: string;
  /**
   * @example
   * null
   */
  partnerId?: string;
  /**
   * @example
   * 2883
   */
  port?: number;
  /**
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @example
   * 178641****05809
   */
  resourceOwner?: string;
  /**
   * @example
   * MASTER
   */
  role?: string;
  /**
   * @example
   * schema_name
   */
  schema?: string;
  /**
   * @example
   * tenant_name
   */
  tenant?: string;
  /**
   * @example
   * +08:00
   */
  timezone?: string;
  /**
   * @example
   * MYSQL_PUBLIC
   */
  type?: string;
  /**
   * @example
   * user_name
   */
  userName?: string;
  /**
   * @example
   * 4.1.0
   */
  version?: string;
  /**
   * @example
   * vpc_t4***
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      charset: 'Charset',
      cluster: 'Cluster',
      connExtraAttributes: 'ConnExtraAttributes',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      ip: 'Ip',
      name: 'Name',
      operatingSystem: 'OperatingSystem',
      oracleNlsLengthSemantics: 'OracleNlsLengthSemantics',
      oracleSid: 'OracleSid',
      owner: 'Owner',
      partnerId: 'PartnerId',
      port: 'Port',
      region: 'Region',
      resourceOwner: 'ResourceOwner',
      role: 'Role',
      schema: 'Schema',
      tenant: 'Tenant',
      timezone: 'Timezone',
      type: 'Type',
      userName: 'UserName',
      version: 'Version',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charset: 'string',
      cluster: 'string',
      connExtraAttributes: 'any',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'string',
      ip: 'string',
      name: 'string',
      operatingSystem: 'string',
      oracleNlsLengthSemantics: 'string',
      oracleSid: 'string',
      owner: 'string',
      partnerId: 'string',
      port: 'number',
      region: 'string',
      resourceOwner: 'string',
      role: 'string',
      schema: 'string',
      tenant: 'string',
      timezone: 'string',
      type: 'string',
      userName: 'string',
      version: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

