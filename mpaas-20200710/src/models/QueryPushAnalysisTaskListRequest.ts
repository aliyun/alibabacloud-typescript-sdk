// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPushAnalysisTaskListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: number;
  taskId?: string;
  taskName?: string;
  tenantId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      taskId: 'TaskId',
      taskName: 'TaskName',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
      taskId: 'string',
      taskName: 'string',
      tenantId: 'string',
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

