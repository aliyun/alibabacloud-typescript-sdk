// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReplicationLinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dryRun?: boolean;
  replicatorAccount?: string;
  replicatorPassword?: string;
  sourceAddress?: string;
  sourceCategory?: string;
  sourceInstanceName?: string;
  sourceInstanceRegionId?: string;
  sourcePort?: number;
  targetAddress?: string;
  taskId?: number;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      dryRun: 'DryRun',
      replicatorAccount: 'ReplicatorAccount',
      replicatorPassword: 'ReplicatorPassword',
      sourceAddress: 'SourceAddress',
      sourceCategory: 'SourceCategory',
      sourceInstanceName: 'SourceInstanceName',
      sourceInstanceRegionId: 'SourceInstanceRegionId',
      sourcePort: 'SourcePort',
      targetAddress: 'TargetAddress',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      dryRun: 'boolean',
      replicatorAccount: 'string',
      replicatorPassword: 'string',
      sourceAddress: 'string',
      sourceCategory: 'string',
      sourceInstanceName: 'string',
      sourceInstanceRegionId: 'string',
      sourcePort: 'number',
      targetAddress: 'string',
      taskId: 'number',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

