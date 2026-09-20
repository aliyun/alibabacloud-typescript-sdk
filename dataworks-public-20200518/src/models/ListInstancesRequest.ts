// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The start date for which to retrieve the instance list. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2020-02-02 00:00:00
   */
  beginBizdate?: string;
  /**
   * @remarks
   * The name of the workflow. You can call [ListBusiness](https://help.aliyun.com/document_detail/173945.html) to query workflow information.
   * 
   * @example
   * test_bizName
   */
  bizName?: string;
  /**
   * @remarks
   * The date for which to retrieve the instance list. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2020-02-02 00:00:00
   */
  bizdate?: string;
  /**
   * @remarks
   * The DAG ID. The DagId can be the DagId returned by operations such as [RunCycleDagNodes](https://help.aliyun.com/document_detail/212961.html) for data backfill, [RunSmokeTest](https://help.aliyun.com/document_detail/212949.html) for smoke testing, and [RunManualDagNodes](https://help.aliyun.com/document_detail/212830.html) for manual workflows.
   * 
   * @example
   * 11111
   */
  dagId?: number;
  /**
   * @remarks
   * The end date for which to retrieve the instance list. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2020-02-03 00:00:00
   */
  endBizdate?: string;
  /**
   * @remarks
   * The node ID. You can call [ListNodes](https://help.aliyun.com/document_detail/173979.html) to query the node ID.
   * 
   * @example
   * 100000000000
   */
  nodeId?: number;
  /**
   * @remarks
   * The node name. You can call [ListNodes](https://help.aliyun.com/document_detail/173979.html) to query the node name.
   * 
   * @example
   * openmr_8****
   */
  nodeName?: string;
  /**
   * @remarks
   * The sorting rule for the returned results. Valid values:
   * - CREATE_TIME_DESC: sorted by creation time in descending order.
   * - INSTANCE_ID_DESC: default value. Sorted by instance ID in descending order.
   * 
   * @example
   * INSTANCE_ID_DESC
   */
  orderBy?: string;
  /**
   * @remarks
   * The ID of the owner, which is the UID of the workspace administrator. You can logon to the Alibaba Cloud Management Console and view the UID in the Security Settings section of the storage management page.
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
   * The node type. You can call [ListNodes](https://help.aliyun.com/document_detail/173979.html) to query the node type.
   * 
   * @example
   * ODPS_SQL
   */
  programType?: string;
  /**
   * @remarks
   * The runtime environment. Valid values:
   * 
   * - PROD: production environment.
   * - DEV: development environment.
   * 
   * This parameter is required.
   * 
   * @example
   * PROD
   */
  projectEnv?: string;
  /**
   * @remarks
   * The workspace ID. You can call [ListProjects](https://help.aliyun.com/document_detail/178393.html) to query the workspace ID.
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
   * - NOT_RUN: The node is not run.
   * 
   * - WAIT_TIME: The node is waiting for the scheduled time (DueTime or CycTime) to arrive.
   * 
   * - WAIT_RESOURCE: The node is waiting for resources.
   * 
   * - RUNNING: The node is running.
   * - CHECKING: The node has been sent to Data Quality for data validation.
   * - CHECKING_CONDITION: The node is undergoing branch condition verification.
   * - FAILURE: Failed to execute.
   * - SUCCESS: Execute successfully.
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

