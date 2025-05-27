// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourceMySQLParameters extends $dara.Model {
  databaseName?: string;
  hostName?: string;
  includeSchemaChanges?: string;
  networkType?: string;
  password?: string;
  port?: number;
  regionId?: string;
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
      includeSchemaChanges: 'IncludeSchemaChanges',
      networkType: 'NetworkType',
      password: 'Password',
      port: 'Port',
      regionId: 'RegionId',
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
      includeSchemaChanges: 'string',
      networkType: 'string',
      password: 'string',
      port: 'number',
      regionId: 'string',
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

