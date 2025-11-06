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
   * HMS
   */
  channel?: string;
  /**
   * @example
   * 1745337419999
   */
  endTime?: number;
  /**
   * @example
   * ALIPUBE5C3F6D091419_ANDROID-default
   */
  platform?: string;
  /**
   * @example
   * 1745251200000
   */
  startTime?: number;
  /**
   * @example
   * 23876
   */
  taskId?: string;
  /**
   * @example
   * LZFPEFIM
   */
  tenantId?: string;
  /**
   * @example
   * SIMPLE
   */
  type?: string;
  /**
   * @example
   * default
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

