// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container. This parameter is used as a filter condition to query nodes in a specified container. If you do not specify this parameter, leave it empty. This parameter is independent of the ResourceGroupId parameter.
   * 
   * >Notice: Before SDK version 8.0.0, this field is of the Long type. In SDK version 8.0.0 and later, this field is of the String type. **This change does not affect the normal use of the SDK, and the parameter is still returned based on the type defined in the SDK**. However, if you upgrade the SDK across version 8.0.0, the type change may cause project compilation failures. In this case, you must manually correct the data type.
   * 
   * @example
   * 860438872620113XXXX
   */
  containerId?: string;
  /**
   * @remarks
   * The name of the node. Fuzzy match is supported.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The page number of the requested data.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Management page to obtain the workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: number;
  /**
   * @remarks
   * The scheduling type. This parameter is used as a filter condition. Valid values: 
   * 
   * - Normal: The node runs as expected.
   * 
   * - Pause: The node is paused, and the execution of its downstream nodes is blocked.
   *  
   * - Skip: The node is set to dry run. The system directly returns a success response with an execution duration of 0 seconds. This does not block the execution of downstream nodes or consume resources.
   * 
   * @example
   * Normal
   */
  recurrence?: string;
  /**
   * @remarks
   * The rerun mode. If you do not specify this parameter, leave it empty. Valid values: 
   * 
   * - Allowed: The node can be rerun regardless of whether it is successfully run or fails to run.
   *  
   * - FailureAllowed: The node can be rerun only after it fails to run.
   *  
   * - Denied: The node cannot be rerun regardless of whether it is successfully run or fails to run.
   * 
   * @example
   * Allowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * The scenario to which the node belongs. This parameter is used as a filter condition. If you do not specify this parameter, leave it empty. In Data Studio, this parameter corresponds to the partitions in the left-side directory tree. Valid values: 
   * 
   * - DataworksProject: project directory.
   * 
   * - DataworksManualWorkflow: manual workflow. 
   * 
   * - DataworksManualTask: manual task.
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

