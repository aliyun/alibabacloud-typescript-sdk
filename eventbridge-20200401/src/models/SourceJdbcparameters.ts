// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourceJDBCParameters extends $dara.Model {
  batchSize?: number;
  customQuery?: string;
  incrementingColumn?: string;
  jdbcUrl?: string;
  network?: string;
  password?: string;
  pollingInterval?: number;
  queryMode?: string;
  queryTimeout?: number;
  securityGroupId?: string;
  tableName?: string;
  timestampColumn?: string;
  username?: string;
  vSwitchIds?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      batchSize: 'BatchSize',
      customQuery: 'CustomQuery',
      incrementingColumn: 'IncrementingColumn',
      jdbcUrl: 'JdbcUrl',
      network: 'Network',
      password: 'Password',
      pollingInterval: 'PollingInterval',
      queryMode: 'QueryMode',
      queryTimeout: 'QueryTimeout',
      securityGroupId: 'SecurityGroupId',
      tableName: 'TableName',
      timestampColumn: 'TimestampColumn',
      username: 'Username',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchSize: 'number',
      customQuery: 'string',
      incrementingColumn: 'string',
      jdbcUrl: 'string',
      network: 'string',
      password: 'string',
      pollingInterval: 'number',
      queryMode: 'string',
      queryTimeout: 'number',
      securityGroupId: 'string',
      tableName: 'string',
      timestampColumn: 'string',
      username: 'string',
      vSwitchIds: 'string',
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

