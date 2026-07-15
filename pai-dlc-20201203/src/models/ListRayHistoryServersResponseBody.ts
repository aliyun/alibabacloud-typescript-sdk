// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRayHistoryServersResponseBodyRayHistoryServers extends $dara.Model {
  /**
   * @remarks
   * The visibility of the job. Valid values:
   * - PUBLIC: visible to all users in the workspace.
   * - PRIVATE (default): visible only to you and administrators in the workspace.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * The display name of the job.
   * 
   * @example
   * AEB-RECHARGE-TASK-14478-1778466397-main-4-
   */
  displayName?: string;
  /**
   * @remarks
   * The hardware specifications of the public resource group. Visit [PAI-DLC billing](https://help.aliyun.com/document_detail/171758.html) for a detailed list of specifications.>Notice: Prices vary depending on the specifications..
   * 
   * @example
   * ecs.g6.xlarge
   */
  ecsSpec?: string;
  /**
   * @remarks
   * The time when the job was created, in UTC.
   * 
   * @example
   * 2025-12-30T02:43:52Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the job ended, in UTC.
   * 
   * @example
   * 2026-01-27T09:17:11Z
   */
  gmtFinishTime?: string;
  /**
   * @remarks
   * The time when the job was last modified, in UTC.
   * 
   * @example
   * 2026-05-19T04:05:46Z
   */
  gmtModifyTime?: string;
  /**
   * @remarks
   * The maximum runtime in minutes.
   * 
   * @example
   * 1000
   */
  maxRuntimeMinutes?: number;
  /**
   * @remarks
   * The ID of the created RayHistoryServer.
   * 
   * @example
   * rhsxxx
   */
  rayHistoryServerId?: string;
  /**
   * @remarks
   * Ray Dashboard URL。
   * 
   * @example
   * https://rhsxxx-dashboard.dsw-gateway-cn-wulanchabu.data.aliyun.com/
   */
  rayHistoryServerUrl?: string;
  /**
   * @remarks
   * The status detail code.
   * 
   * @example
   * InvalidParameter
   */
  reasonCode?: string;
  /**
   * @remarks
   * The status details.
   * 
   * @example
   * PyTorchJob dlc1tx4b9lw3ntb9 is running.
   */
  reasonMessage?: string;
  /**
   * @remarks
   * The resource group ID. For information about how to query the ID of a dedicated resource group, see [Manage resource quotas](https://help.aliyun.com/document_detail/2651299.html).
   * 
   * @example
   * quotazoqd53w0q75
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource on which the job runs.
   * 
   * @example
   * OWNER_REPO
   */
  resourceName?: string;
  /**
   * @remarks
   * The RayHistoryServer status. Valid values:
   * - Creating: being created.
   * - Running: running.
   * - Stopped: stopped.
   * - Succeeded: succeeded.
   * - Failed: failed.
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The storage path of Ray logs.
   * 
   * @example
   * oss://bucket-test-hangzhou.oss-cn-hangzhou-internal.aliyuncs.com/tmp
   */
  storagePath?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1335237941080704
   */
  tenantId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 123456789
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * myusername
   */
  username?: string;
  /**
   * @remarks
   * The workspace ID. <props="china">For information about how to obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html)..
   * 
   * @example
   * 153466
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      displayName: 'DisplayName',
      ecsSpec: 'EcsSpec',
      gmtCreateTime: 'GmtCreateTime',
      gmtFinishTime: 'GmtFinishTime',
      gmtModifyTime: 'GmtModifyTime',
      maxRuntimeMinutes: 'MaxRuntimeMinutes',
      rayHistoryServerId: 'RayHistoryServerId',
      rayHistoryServerUrl: 'RayHistoryServerUrl',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      status: 'Status',
      storagePath: 'StoragePath',
      tenantId: 'TenantId',
      userId: 'UserId',
      username: 'Username',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      displayName: 'string',
      ecsSpec: 'string',
      gmtCreateTime: 'string',
      gmtFinishTime: 'string',
      gmtModifyTime: 'string',
      maxRuntimeMinutes: 'number',
      rayHistoryServerId: 'string',
      rayHistoryServerUrl: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      resourceId: 'string',
      resourceName: 'string',
      status: 'string',
      storagePath: 'string',
      tenantId: 'string',
      userId: 'string',
      username: 'string',
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

export class ListRayHistoryServersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of RayHistoryServer entries.
   */
  rayHistoryServers?: ListRayHistoryServersResponseBodyRayHistoryServers[];
  /**
   * @remarks
   * The request ID, which is used for diagnostics and troubleshooting.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-xxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that match the filter conditions.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      rayHistoryServers: 'RayHistoryServers',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rayHistoryServers: { 'type': 'array', 'itemType': ListRayHistoryServersResponseBodyRayHistoryServers },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rayHistoryServers)) {
      $dara.Model.validateArray(this.rayHistoryServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

