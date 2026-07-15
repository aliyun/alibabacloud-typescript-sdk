// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRayHistoryServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The visibility of the job.
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
   * The specifications of the public resource group. For a list of supported instance types, see [PAI-DLC billing](https://help.aliyun.com/document_detail/171758.html).>Notice: Pricing varies based on the specifications.
   * 
   * @example
   * ecs.g6.large
   */
  ecsSpec?: string;
  /**
   * @remarks
   * The time when the job was created. The time is in UTC.
   * 
   * @example
   * 2021-01-12T14:35:01Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the job is complete. The time is in UTC.
   * 
   * @example
   * 2021-01-12T15:36:08Z
   */
  gmtFinishTime?: string;
  /**
   * @remarks
   * The time when the job was last modified. The time is in UTC.
   * 
   * @example
   * 2021-01-12T14:36:00Z
   */
  gmtModifyTime?: string;
  /**
   * @remarks
   * The maximum running time. Unit: minutes.
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
   * The URL of the Ray dashboard.
   * 
   * @example
   * https://rhsxxx-dashboard.dsw-gateway-cn-wulanchabu.data.aliyun.com/
   */
  rayHistoryServerUrl?: string;
  /**
   * @remarks
   * The code of the job status.
   * 
   * @example
   * NotFound
   */
  reasonCode?: string;
  /**
   * @remarks
   * The message that describes the job status.
   * 
   * @example
   * ""
   */
  reasonMessage?: string;
  /**
   * @remarks
   * The ID of the resource group to which the job belongs.
   * 
   * @example
   * quotaxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource on which the job runs.
   * 
   * @example
   * my-resource-name
   */
  resourceName?: string;
  /**
   * @remarks
   * The status of the job.
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
   * The ID of the user who creates the job.
   * 
   * @example
   * 123456789
   */
  userId?: string;
  /**
   * @remarks
   * The username of the user who creates the job.
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

