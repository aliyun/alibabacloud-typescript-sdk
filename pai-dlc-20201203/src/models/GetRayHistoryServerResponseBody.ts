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
   * The hardware specifications of the public resource group. For the detailed list of specifications, see [PAI-DLC billing](https://help.aliyun.com/document_detail/171758.html).
   * >Notice: Prices vary depending on the specifications.
   * 
   * @example
   * ecs.g6.large
   */
  ecsSpec?: string;
  /**
   * @remarks
   * The creation time (UTC).
   * 
   * @example
   * 2021-01-12T14:35:01Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The end time (UTC).
   * 
   * @example
   * 2021-01-12T15:36:08Z
   */
  gmtFinishTime?: string;
  /**
   * @remarks
   * The modification time (UTC).
   * 
   * @example
   * 2021-01-12T14:36:00Z
   */
  gmtModifyTime?: string;
  /**
   * @remarks
   * The maximum runtime duration.
   * 
   * @example
   * 1000
   */
  maxRuntimeMinutes?: number;
  /**
   * @remarks
   * The ID of the RayHistoryServer.
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
   * The ID of the resource group in which the job runs.
   * 
   * @example
   * quotaxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource in which the job runs.
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
   * 10**************14
   */
  tenantId?: string;
  /**
   * @remarks
   * The user ID used to filter results.
   * 
   * @example
   * 123456789
   */
  userId?: string;
  /**
   * @remarks
   * The username used to filter results.
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

