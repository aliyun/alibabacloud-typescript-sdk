// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPushSchedulerListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: number;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: number;
  tenantId?: string;
  type?: number;
  uniqueId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      tenantId: 'TenantId',
      type: 'Type',
      uniqueId: 'UniqueId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
      tenantId: 'string',
      type: 'number',
      uniqueId: 'string',
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

