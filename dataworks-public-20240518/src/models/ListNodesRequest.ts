// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container. If you specify this parameter, only nodes in the specified container are returned. This parameter is independent of the resource group (ResourceGroupId).
   * 
   * >Notice: 
   * 
   * This parameter is of the Long type in SDK versions earlier than 8.0.0 and of the String type in SDK 8.0.0 and later. **This change does not affect SDK usage. The parameter is returned in the type defined for your SDK version.** The type change may cause compilation errors only when you upgrade the SDK across version 8.0.0. In this case, you must manually correct the data type.
   * 
   * @example
   * 860438872620113XXXX
   */
  containerId?: string;
  /**
   * @remarks
   * The node name. Fuzzy search is supported.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The page number of the results to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default: 10. Maximum: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace. To find this ID, log in to the [DataWorks console](https://workbench.data.aliyun.com/console) and navigate to the workspace configuration page.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: number;
  /**
   * @remarks
   * Filters nodes by their scheduling type. Valid values:
   * 
   * - Normal: The node runs as scheduled.
   * 
   * - Pause: The node is paused and blocks its dependent downstream nodes.
   * 
   * - Skip: The node is skipped, and the system immediately returns a success status with a 0-second execution time. This action does not block downstream nodes or consume resources.
   * 
   * @example
   * Normal
   */
  recurrence?: string;
  /**
   * @remarks
   * The rerun mode. Valid values:
   * 
   * - Allowed: The node can be rerun regardless of whether it succeeded or failed.
   * 
   * - FailureAllowed: The node can be rerun only if its previous run failed.
   * 
   * - Denied: The node cannot be rerun regardless of whether it succeeded or failed.
   * 
   * @example
   * Allowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * The context for filtering nodes. In data development, this corresponds to the sections in the directory tree on the left. If you omit this parameter, no filtering is applied. Valid values:
   * 
   * - DataworksProject: Nodes in the project directory.
   * 
   * - DataworksManualWorkflow: manual workflow
   * 
   * - DataworksManualTask: manual task
   * 
   * @example
   * DataworksProject
   */
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      containerId: 'ContainerId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      recurrence: 'Recurrence',
      rerunMode: 'RerunMode',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      recurrence: 'string',
      rerunMode: 'string',
      scene: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

