// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourcePostgreSQLParameters extends $dara.Model {
  databaseName?: string;
  hostName?: string;
  networkType?: string;
  password?: string;
  port?: number;
  regionId?: string;
  schemaName?: string;
  securityGroupId?: string;
  snapshotMode?: string;
  tableNames?: string;
  user?: string;
  vSwitchIds?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      hostName: 'HostName',
      networkType: 'NetworkType',
      password: 'Password',
      port: 'Port',
      regionId: 'RegionId',
      schemaName: 'SchemaName',
      securityGroupId: 'SecurityGroupId',
      snapshotMode: 'SnapshotMode',
      tableNames: 'TableNames',
      user: 'User',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      hostName: 'string',
      networkType: 'string',
      password: 'string',
      port: 'number',
      regionId: 'string',
      schemaName: 'string',
      securityGroupId: 'string',
      snapshotMode: 'string',
      tableNames: 'string',
      user: 'string',
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

