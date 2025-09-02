// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * test_bizName
   */
  bizName?: string;
  /**
   * @remarks
   * The ID of the baseline with which the node is associated.
   * 
   * @example
   * liux_test_n****
   */
  nodeName?: string;
  /**
   * @remarks
   * The description of the node.
   * 
   * @example
   * 193379****
   */
  owner?: string;
  /**
   * @remarks
   * The page number. Minimum value: 1. Maximum value: 100.
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
   * The operation that you want to perform. Set the value to **ListNodes**.
   * 
   * @example
   * ODPS_SQL
   */
  programType?: string;
  /**
   * @remarks
   * The environment in which the node runs. Valid values: DEV and PROD.
   * 
   * This parameter is required.
   * 
   * @example
   * PROD
   */
  projectEnv?: string;
  /**
   * @remarks
   * The ID of the owner.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  projectId?: number;
  /**
   * @remarks
   * The scheduling type. Valid values:
   * 
   * *   NORMAL: Nodes are scheduled as expected.
   * *   PAUSE: Nodes are paused.
   * *   SKIP: Nodes are dry-run. Dry-run nodes are started as scheduled, but the system sets the status of the nodes to successful when it starts to run them.
   * 
   * @example
   * NORMAL
   */
  schedulerType?: string;
  static names(): { [key: string]: string } {
    return {
      bizName: 'BizName',
      nodeName: 'NodeName',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      programType: 'ProgramType',
      projectEnv: 'ProjectEnv',
      projectId: 'ProjectId',
      schedulerType: 'SchedulerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizName: 'string',
      nodeName: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      programType: 'string',
      projectEnv: 'string',
      projectId: 'number',
      schedulerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

