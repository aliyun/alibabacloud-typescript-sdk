// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesByOutputResponseBodyDataNodeList extends $dara.Model {
  /**
   * @remarks
   * The baseline ID.
   * 
   * @example
   * 1235667
   */
  baselineId?: number;
  /**
   * @remarks
   * The name of the data source.
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
   * The description of the node.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The table and partition filter expression in Data Quality that are associated with the node.
   * 
   * @example
   * [{"projectName":"ztjy_dim","tableName":"dim_user_agent_manage_area_a","partition":"ds\\u003d$[yyyy-mm-dd-1]"}]
   */
  dqcDescription?: string;
  /**
   * @remarks
   * Indicates whether the node is associated with a monitoring rule in Data Quality. Valid values: 0 and 1. The value 0 indicates that the node is associated with a monitoring rule in Data Quality. The value 1 indicates that the node is not associated with a monitoring rule in Data Quality.
   * 
   * @example
   * 1
   */
  dqcType?: number;
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * 6 (Shell), 10 (ODPS SQL), 11 (ODPS MR), 23 (Data Integration), 24 (ODPS Script), 99 (zero load), 221 (PyODPS 2), 225 (ODPS Spark), 227 (EMR Hive), 228 (EMR Spark), 229 (EMR Spark SQL), 230 (EMR MR), 239 (OSS object inspection), 257 (EMR Shell), 258 (EMR Spark Shell), 259 (EMR Presto), 260 (EMR Impala), 900 (real-time synchronization), 1089 (cross-tenant collaboration), 1091 (Hologres development), 1093 (Hologres SQL), 1100 (assignment), and 1221 (PyODPS 3)
   * 
   * @example
   * ODPS_SQL
   */
  fileType?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * 125677
   */
  nodeId?: number;
  /**
   * @remarks
   * The name of the node.
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
   * 19337906836551
   */
  ownerId?: string;
  /**
   * @remarks
   * The scheduling parameters of the node.
   * 
   * @example
   * a=b
   */
  paramValues?: string;
  /**
   * @remarks
   * The priority of the node. Valid values: 1, 3, 5, 7, and 8. A greater value indicates a higher priority. Default value: 1.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The node type. This parameter is deprecated. For more information about node types, see valid values of the FileType parameter.
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
   * 33671
   */
  projectId?: number;
  /**
   * @remarks
   * The ID of the workflow to which the node belongs.
   * 
   * @example
   * 1235655464
   */
  relatedFlowId?: number;
  /**
   * @remarks
   * The interval at which the node is rerun after the node fails to run.
   * 
   * @example
   * 60
   */
  repeatInterval?: number;
  /**
   * @remarks
   * Indicates whether the node can be rerun.
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
   * The scheduling type of the node. Valid values:
   * 
   * *   NORMAL: The node is an auto triggered node. The scheduling system regularly runs the node.
   * *   MANUAL: The node is a manually triggered node. The scheduling system does not regularly run the node.
   * *   PAUSE: The node is a frozen node. The scheduling system regularly runs the node but sets the status of the node to failed when the scheduling system starts to run the node.
   * *   SKIP: The node is a dry-run node. The scheduling system regularly runs the node but sets the status of the node to successful when the scheduling system starts to run the node.
   * 
   * @example
   * NORMAL
   */
  schedulerType?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      connection: 'Connection',
      cronExpress: 'CronExpress',
      description: 'Description',
      dqcDescription: 'DqcDescription',
      dqcType: 'DqcType',
      fileType: 'FileType',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      ownerId: 'OwnerId',
      paramValues: 'ParamValues',
      priority: 'Priority',
      programType: 'ProgramType',
      projectId: 'ProjectId',
      relatedFlowId: 'RelatedFlowId',
      repeatInterval: 'RepeatInterval',
      repeatability: 'Repeatability',
      resGroupName: 'ResGroupName',
      schedulerType: 'SchedulerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      connection: 'string',
      cronExpress: 'string',
      description: 'string',
      dqcDescription: 'string',
      dqcType: 'number',
      fileType: 'string',
      nodeId: 'number',
      nodeName: 'string',
      ownerId: 'string',
      paramValues: 'string',
      priority: 'number',
      programType: 'string',
      projectId: 'number',
      relatedFlowId: 'number',
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

export class ListNodesByOutputResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the nodes returned.
   */
  nodeList?: ListNodesByOutputResponseBodyDataNodeList[];
  /**
   * @remarks
   * The output name of the current node.
   * 
   * @example
   * test_0709_1.630003556_out
   */
  output?: string;
  static names(): { [key: string]: string } {
    return {
      nodeList: 'NodeList',
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeList: { 'type': 'array', 'itemType': ListNodesByOutputResponseBodyDataNodeList },
      output: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeList)) {
      $dara.Model.validateArray(this.nodeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByOutputResponseBody extends $dara.Model {
  /**
   * @remarks
   * The nodes returned.
   */
  data?: ListNodesByOutputResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The connection does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * SDFSDFSDF-asdfDFSDF-SDFSDf-SDfSFD
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
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListNodesByOutputResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

