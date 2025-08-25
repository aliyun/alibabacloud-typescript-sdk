// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnalysisCoreIndexRequest extends $dara.Model {
  /**
   * @example
   * ALIPUBE5C3F6D091419
   */
  appId?: string;
  /**
   * @example
   * miui
   */
  channel?: string;
  /**
   * @example
   * 1756051200000
   */
  endTime?: number;
  /**
   * @example
   * Android
   */
  platform?: string;
  /**
   * @example
   * 1756051200000
   */
  startTime?: number;
  /**
   * @example
   * 546797740032
   */
  taskId?: string;
  /**
   * @example
   * CGAKLRCS
   */
  tenantId?: string;
  /**
   * @example
   * 2
   */
  type?: string;
  /**
   * @example
   * dev
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

