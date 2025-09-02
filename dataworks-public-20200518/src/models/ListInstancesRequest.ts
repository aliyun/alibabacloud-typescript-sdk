// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters related to the node.
   * 
   * @example
   * 2020-02-02 00:00:00
   */
  beginBizdate?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * test_bizName
   */
  bizName?: string;
  /**
   * @remarks
   * The number of entries returned per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 2020-02-02 00:00:00
   */
  bizdate?: string;
  /**
   * @remarks
   * The environment of the workspace. Valid values: PROD and DEV. The value PROD indicates the production environment. The value DEV indicates the development environment.
   * 
   * @example
   * 11111
   */
  dagId?: number;
  /**
   * @remarks
   * The ID of the workflow.
   * 
   * @example
   * 2020-02-03 00:00:00
   */
  endBizdate?: string;
  /**
   * @remarks
   * Indicates whether the instance is associated with a monitoring rule in Data Quality. Valid values:
   * 
   * *   0: The instance is associated with a monitoring rule in Data Quality.
   * *   1: The instance is not associated with a monitoring rule in Data Quality.
   * 
   * @example
   * 100000000000
   */
  nodeId?: number;
  /**
   * @remarks
   * Indicates whether the node can be rerun.
   * 
   * @example
   * openmr_8****
   */
  nodeName?: string;
  /**
   * @remarks
   * The sorting rule of the instances to be returned. Valid values:
   * 
   * *   CREATE_TIME_DESC: The instances are sorted in descending order of their creation time.
   * *   INSTANCE_ID_DESC (default): The instances are sorted in descending order of their IDs.
   * 
   * @example
   * INSTANCE_ID_DESC
   */
  orderBy?: string;
  /**
   * @remarks
   * The connection string.
   * 
   * @example
   * 193379****
   */
  owner?: string;
  /**
   * @remarks
   * The operation that you want to perform.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The error code returned.
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
   * The ID of the baseline.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: number;
  /**
   * @remarks
   * The status of the node. Valid values:
   * 
   * *   NOT_RUN: The node is not run.
   * *   WAIT_TIME: The node is waiting for the scheduling time to arrive.
   * *   WAIT_RESOURCE: The node is waiting for resources.
   * *   RUNNING: The node is running.
   * *   CHECKING: Data quality is being checked for the node.
   * *   CHECKING_CONDITION: Branch conditions are being checked for the node.
   * *   FAILURE: The node fails to run.
   * *   SUCCESS: The node is successfully run.
   * 
   * @example
   * NOT_RUN
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      beginBizdate: 'BeginBizdate',
      bizName: 'BizName',
      bizdate: 'Bizdate',
      dagId: 'DagId',
      endBizdate: 'EndBizdate',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      orderBy: 'OrderBy',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      programType: 'ProgramType',
      projectEnv: 'ProjectEnv',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginBizdate: 'string',
      bizName: 'string',
      bizdate: 'string',
      dagId: 'number',
      endBizdate: 'string',
      nodeId: 'number',
      nodeName: 'string',
      orderBy: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      programType: 'string',
      projectEnv: 'string',
      projectId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

