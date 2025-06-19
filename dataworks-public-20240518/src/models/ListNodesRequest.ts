// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The container ID, which is a filter condition. If you do not want to use this condition for filtering, you do not need to configure this parameter. The container ID that you specify is unrelated to the resource group ID indicated by the ResourceGroupId parameter.
   * 
   * @example
   * 860438872620113XXXX
   */
  containerId?: number;
  name?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: number;
  /**
   * @remarks
   * The scheduling type, which is a filter condition. Valid values:
   * 
   * *   Normal: The nodes are scheduled as expected.
   * *   Pause: The nodes are paused, and the running of their descendant nodes is blocked.
   * *   Skip: The nodes are dry run. The system does not actually run the nodes, but directly returns a success response. The running duration of the nodes is 0 seconds. In addition, the nodes do not occupy resources or block the running of their descendant nodes.
   * 
   * @example
   * Normal
   */
  recurrence?: string;
  /**
   * @remarks
   * The rerun property, which is a filter condition. If you do not want to use this condition for filtering, you do not need to configure this parameter. Valid values:
   * 
   * *   Allowed: The nodes can be rerun regardless of whether they are successfully run or fail to run.
   * *   FailureAllowed: The nodes can be rerun only after they fail to run.
   * *   Denied: The nodes cannot be rerun regardless of whether they are successfully run or fail to run.
   * 
   * @example
   * Allowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * The location of the nodes in the left-side navigation pane of the Data Studio page, which is a filter condition. If you do not want to use this condition for filtering, you do not need to configure this parameter. Valid values:
   * 
   * *   DataworksProject
   * *   DataworksManualWorkflow
   * *   DataworksManualTask
   * 
   * @example
   * DATAWORKS_PROJECT
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
      containerId: 'number',
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

