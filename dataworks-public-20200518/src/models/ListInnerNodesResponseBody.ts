// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInnerNodesResponseBodyPagingNodes extends $dara.Model {
  /**
   * @remarks
   * The baseline ID.
   * 
   * @example
   * 1234
   */
  baselineId?: number;
  /**
   * @remarks
   * The workflow ID.
   * 
   * @example
   * 123
   */
  businessId?: number;
  /**
   * @remarks
   * The connection string.
   * 
   * @example
   * odps_first
   */
  connection?: string;
  /**
   * @remarks
   * The CRON expression.
   * 
   * @example
   * 00 00 00 * * ?
   */
  cronExpress?: string;
  /**
   * @remarks
   * The description of the inner node.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The table and partition filter expression in Data Quality that are associated with the inner node.
   * 
   * @example
   * [{"projectName":"ztjy_dim","tableName":"dim_user_agent_manage_area_a","partition":"ds\\u003d$[yyyy-mm-dd-1]"}]
   */
  dqcDescription?: string;
  /**
   * @remarks
   * Indicates whether the inner node is associated with a monitoring rule in Data Quality. Valid values: 0 and 1. The value 0 indicates that the inner node is associated with a monitoring rule in Data Quality. The value 1 indicates that the inner node is not associated with a monitoring rule in Data Quality.
   * 
   * @example
   * 1
   */
  dqcType?: string;
  /**
   * @remarks
   * The inner node ID.
   * 
   * @example
   * 12
   */
  nodeId?: number;
  /**
   * @remarks
   * The name of the inner node.
   * 
   * @example
   * liux_test_n****
   */
  nodeName?: string;
  /**
   * @remarks
   * The owner ID.
   * 
   * @example
   * 1933****36551
   */
  ownerId?: string;
  /**
   * @remarks
   * The additional parameters.
   * 
   * @example
   * a=b
   */
  paramValues?: string;
  /**
   * @remarks
   * The priority of the inner node. Valid values: 1, 3, 5, 7, and 8.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The type of the inner node.
   * 
   * @example
   * ODPS_SQL
   */
  programType?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123
   */
  projectId?: number;
  /**
   * @remarks
   * The interval at which the inner node is rerun after the inner node fails to run.
   * 
   * @example
   * 60
   */
  repeatInterval?: number;
  /**
   * @remarks
   * Indicates whether the inner node can be rerun.
   * 
   * @example
   * true
   */
  repeatability?: boolean;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * Default Resource Group
   */
  resGroupName?: string;
  /**
   * @remarks
   * The scheduling type of the inner node. Valid values:
   * 
   * *   NORMAL: The inner node is an auto triggered node.
   * *   MANUAL: The inner node is a manually triggered node. The scheduling system does not run the node on a regular basis.
   * *   PAUSE: The inner node is a paused node.
   * *   SKIP: The inner node is a dry-run node. Dry-run nodes are started as scheduled, but the scheduling system sets the status of the nodes to successful when it starts to run them.
   * 
   * @example
   * NORMAL
   */
  schedulerType?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      businessId: 'BusinessId',
      connection: 'Connection',
      cronExpress: 'CronExpress',
      description: 'Description',
      dqcDescription: 'DqcDescription',
      dqcType: 'DqcType',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      ownerId: 'OwnerId',
      paramValues: 'ParamValues',
      priority: 'Priority',
      programType: 'ProgramType',
      projectId: 'ProjectId',
      repeatInterval: 'RepeatInterval',
      repeatability: 'Repeatability',
      resGroupName: 'ResGroupName',
      schedulerType: 'SchedulerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      businessId: 'number',
      connection: 'string',
      cronExpress: 'string',
      description: 'string',
      dqcDescription: 'string',
      dqcType: 'string',
      nodeId: 'number',
      nodeName: 'string',
      ownerId: 'string',
      paramValues: 'string',
      priority: 'number',
      programType: 'string',
      projectId: 'number',
      repeatInterval: 'number',
      repeatability: 'boolean',
      resGroupName: 'string',
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

export class ListInnerNodesResponseBodyPaging extends $dara.Model {
  /**
   * @remarks
   * The list of inner nodes.
   */
  nodes?: ListInnerNodesResponseBodyPagingNodes[];
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
   * The total number of inner nodes returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': ListInnerNodesResponseBodyPagingNodes },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInnerNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  paging?: ListInnerNodesResponseBodyPaging;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E6F0DBDD-5AD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      paging: 'Paging',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paging: ListInnerNodesResponseBodyPaging,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.paging && typeof (this.paging as any).validate === 'function') {
      (this.paging as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

