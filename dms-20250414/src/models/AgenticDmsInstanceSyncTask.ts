// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgenticDmsInstanceSyncTask extends $dara.Model {
  actorId?: string;
  actorName?: string;
  actorType?: string;
  errorCode?: string;
  errorSummary?: string;
  failedCount?: number;
  gmtCreate?: string;
  gmtModified?: string;
  operatorMode?: string;
  requestedOperatorMode?: string;
  skippedCount?: number;
  status?: string;
  successCount?: number;
  syncUserDataPermission?: boolean;
  taskId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      actorId: 'ActorId',
      actorName: 'ActorName',
      actorType: 'ActorType',
      errorCode: 'ErrorCode',
      errorSummary: 'ErrorSummary',
      failedCount: 'FailedCount',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      operatorMode: 'OperatorMode',
      requestedOperatorMode: 'RequestedOperatorMode',
      skippedCount: 'SkippedCount',
      status: 'Status',
      successCount: 'SuccessCount',
      syncUserDataPermission: 'SyncUserDataPermission',
      taskId: 'TaskId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actorId: 'string',
      actorName: 'string',
      actorType: 'string',
      errorCode: 'string',
      errorSummary: 'string',
      failedCount: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      operatorMode: 'string',
      requestedOperatorMode: 'string',
      skippedCount: 'number',
      status: 'string',
      successCount: 'number',
      syncUserDataPermission: 'boolean',
      taskId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

