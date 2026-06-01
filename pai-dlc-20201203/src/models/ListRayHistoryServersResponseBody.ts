// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRayHistoryServersResponseBodyRayHistoryServers extends $dara.Model {
  /**
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @example
   * AEB-RECHARGE-TASK-14478-1778466397-main-4-
   */
  displayName?: string;
  /**
   * @example
   * ecs.g6.xlarge
   */
  ecsSpec?: string;
  /**
   * @example
   * 2025-12-30T02:43:52Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2026-01-27T09:17:11Z
   */
  gmtFinishTime?: string;
  /**
   * @example
   * 2026-05-19T04:05:46Z
   */
  gmtModifyTime?: string;
  /**
   * @example
   * 1000
   */
  maxRuntimeMinutes?: number;
  /**
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
   * @example
   * InvalidParameter
   */
  reasonCode?: string;
  /**
   * @example
   * PyTorchJob dlc1tx4b9lw3ntb9 is running.
   */
  reasonMessage?: string;
  /**
   * @example
   * quotazoqd53w0q75
   */
  resourceId?: string;
  /**
   * @example
   * OWNER_REPO
   */
  resourceName?: string;
  /**
   * @example
   * Created
   */
  status?: string;
  /**
   * @example
   * oss://bucket-test-hangzhou.oss-cn-hangzhou-internal.aliyuncs.com/tmp
   */
  storagePath?: string;
  /**
   * @example
   * 1335237941080704
   */
  tenantId?: string;
  /**
   * @example
   * 123456789
   */
  userId?: string;
  /**
   * @example
   * myusername
   */
  username?: string;
  /**
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
  rayHistoryServers?: ListRayHistoryServersResponseBodyRayHistoryServers[];
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-xxxxxxx
   */
  requestId?: string;
  /**
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

