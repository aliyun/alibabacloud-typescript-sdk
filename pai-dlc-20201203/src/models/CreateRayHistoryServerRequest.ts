// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRayHistoryServerRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the job. Valid values:
   * - PUBLIC: visible to all members in the workspace.
   * - PRIVATE: visible only to you and administrators in the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The display name of the job.
   * 
   * This parameter is required.
   * 
   * @example
   * my-ray-history-server
   */
  displayName?: string;
  /**
   * @remarks
   * The hardware specifications of the public resource group. To access the detailed list of specifications, see [PAI-DLC billing](https://help.aliyun.com/document_detail/171758.html).>Notice: Prices vary depending on the specifications..
   * 
   * @example
   * ecs.c6.large
   */
  ecsSpec?: string;
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
   * The resource group ID. This parameter is optional.
   * - If this parameter is left empty, the job is committed to the public resource group.
   * - If the current workspace is attached to a resource quota, you can specify the corresponding resource quota ID. For details about how to query the resource quota ID, see [Manage resource quotas](https://help.aliyun.com/document_detail/2651299.html).
   * 
   * @example
   * quotaxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The storage path for Ray logs.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket-test-hangzhou.oss-cn-hangzhou-internal.aliyuncs.com/tmp
   */
  storagePath?: string;
  /**
   * @remarks
   * The workspace ID. <props="china">For information about how to obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html)..
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      displayName: 'DisplayName',
      ecsSpec: 'EcsSpec',
      maxRuntimeMinutes: 'MaxRuntimeMinutes',
      resourceId: 'ResourceId',
      storagePath: 'StoragePath',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      displayName: 'string',
      ecsSpec: 'string',
      maxRuntimeMinutes: 'number',
      resourceId: 'string',
      storagePath: 'string',
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

