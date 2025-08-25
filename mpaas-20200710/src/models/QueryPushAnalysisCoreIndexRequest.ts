// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPushAnalysisCoreIndexRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  channel?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: number;
  platform?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: number;
  taskId?: string;
  tenantId?: string;
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channel: 'Channel',
      endTime: 'EndTime',
      platform: 'Platform',
      startTime: 'StartTime',
      taskId: 'TaskId',
      tenantId: 'TenantId',
      type: 'Type',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channel: 'string',
      endTime: 'number',
      platform: 'string',
      startTime: 'number',
      taskId: 'string',
      tenantId: 'string',
      type: 'string',
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

