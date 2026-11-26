// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRayHistoryServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The visibility.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The display name of the job.
   * 
   * @example
   * my-ray-history-server
   */
  displayName?: string;
  /**
   * @remarks
   * The hardware specifications of the public resource group. For a detailed list of specifications, access [PAI-DLC billing](https://help.aliyun.com/document_detail/171758.html).>Notice: Prices vary by specification.
   * 
   * @example
   * ecs.g6.large
   */
  ecsSpec?: string;
  /**
   * @remarks
   * The creation time in UTC.
   * 
   * @example
   * 2021-01-12T14:35:01Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The completion time in UTC.
   * 
   * @example
   * 2021-01-12T15:36:08Z
   */
  gmtFinishTime?: string;
  /**
   * @remarks
   * The modification time in UTC.
   * 
   * @example
   * 2021-01-12T14:36:00Z
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
   * The ID of the Ray history server.
   * 
   * @example
   * rhsxxx
   */
  rayHistoryServerId?: string;
  /**
   * @remarks
   * The Ray Dashboard URL.
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
   * NotFound
   */
  reasonCode?: string;
  /**
   * @remarks
   * The status details.
   * 
   * @example
   * ""
   */
  reasonMessage?: string;
  /**
   * @remarks
   * The ID of the resource group where the job runs.
   * 
   * @example
   * quotaxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource where the job runs.
   * 
   * @example
   * my-resource-name
   */
  resourceName?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The storage path for Ray logs.
   * 
   * @example
   * oss://bucket-test-hangzhou.oss-cn-hangzhou-internal.aliyuncs.com/tmp
   */
  storagePath?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 10**************14
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the user to which the job belongs.
   * 
   * @example
   * 123456789
   */
  userId?: string;
  /**
   * @remarks
   * The username of the user to which the job belongs.
   * 
   * @example
   * myusername
   */
  username?: string;
  /**
   * @remarks
   * The ID of the workspace to which the job belongs.
   * 
   * @example
   * 46099
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

