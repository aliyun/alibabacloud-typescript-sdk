// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Snapshot extends $dara.Model {
  accessibility?: string;
  creationType?: string;
  creator?: string;
  description?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  snapshotId?: string;
  snapshotName?: string;
  snapshotResourceId?: string;
  snapshotResourceType?: string;
  snapshotStoragePath?: string;
  snapshotUrl?: string;
  workDir?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      creationType: 'CreationType',
      creator: 'Creator',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
      snapshotResourceId: 'SnapshotResourceId',
      snapshotResourceType: 'SnapshotResourceType',
      snapshotStoragePath: 'SnapshotStoragePath',
      snapshotUrl: 'SnapshotUrl',
      workDir: 'WorkDir',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      creationType: 'string',
      creator: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      snapshotId: 'string',
      snapshotName: 'string',
      snapshotResourceId: 'string',
      snapshotResourceType: 'string',
      snapshotStoragePath: 'string',
      snapshotUrl: 'string',
      workDir: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

