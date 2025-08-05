// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOtsTableSnapshotsRequestOtsInstances extends $dara.Model {
  /**
   * @remarks
   * The name of the Tablestore instance.
   * 
   * @example
   * instancename
   */
  instanceName?: string;
  /**
   * @remarks
   * The names of the tables in the Tablestore instance.
   */
  tableNames?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      tableNames: 'TableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      tableNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tableNames)) {
      $dara.Model.validateArray(this.tableNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOtsTableSnapshotsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the RAM role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Specifies whether data is backed up within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:
   * 
   * *   SELF_ACCOUNT: Data is backed up within the same Alibaba Cloud account.
   * *   CROSS_ACCOUNT: Data is backed up across Alibaba Cloud accounts.
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The UID of the source account used for cross-account backup.
   * 
   * @example
   * 144015xxxxx98732
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The end time of the backup. The value must be a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652068250881
   */
  endTime?: number;
  /**
   * @remarks
   * The maximum number of rows that you want the current query to return.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The token that is required to obtain the next page of backup snapshots.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The Tablestore instances that are backed up.
   */
  otsInstances?: DescribeOtsTableSnapshotsRequestOtsInstances[];
  /**
   * @remarks
   * The snapshot IDs.
   */
  snapshotIds?: string[];
  /**
   * @remarks
   * The start time of the backup. The value must be a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1611109271630
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      endTime: 'EndTime',
      limit: 'Limit',
      nextToken: 'NextToken',
      otsInstances: 'OtsInstances',
      snapshotIds: 'SnapshotIds',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      endTime: 'number',
      limit: 'number',
      nextToken: 'string',
      otsInstances: { 'type': 'array', 'itemType': DescribeOtsTableSnapshotsRequestOtsInstances },
      snapshotIds: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.otsInstances)) {
      $dara.Model.validateArray(this.otsInstances);
    }
    if(Array.isArray(this.snapshotIds)) {
      $dara.Model.validateArray(this.snapshotIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

