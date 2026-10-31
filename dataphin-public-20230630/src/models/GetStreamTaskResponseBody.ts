// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStreamTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time corresponding to the latest read position. The format is yyyy-MM-dd HH:mm:ss. If no consumption metrics are available, the value is null.
   * 
   * @example
   * 2026-10-15 13:45:52
   */
  consumeLocationDate?: string;
  /**
   * @remarks
   * The database engine version of the compute DPI engine used to run the node.
   * 
   * @example
   * 1.15.3
   */
  engineVersion?: string;
  /**
   * @remarks
   * The ID of the task file. This corresponds to the FileId request parameter in ListStreamOpsRecords and ListStreamInstanceRecords. It is not a nodeId or a template file ID.
   * 
   * @example
   * 7333610201479808
   */
  fileId?: string;
  /**
   * @remarks
   * The name of the node to which the real-time task belongs.
   * 
   * @example
   * rt_mysql_doris
   */
  name?: string;
  /**
   * @remarks
   * The ID of the node. The ID starts with n_ and identifies a development node. It is different from the task file ID.
   * 
   * @example
   * n_8442437168737681408
   */
  nodeId?: string;
  /**
   * @remarks
   * The ID of the user who last operated the task.
   * 
   * @example
   * 30001011
   */
  operatorId?: string;
  /**
   * @remarks
   * The display name of the user who last operated the task.
   * 
   * @example
   * Alice
   */
  operatorName?: string;
  /**
   * @remarks
   * The ID of the Dataphin project to which the task belongs.
   * 
   * @example
   * 7299592831043008
   */
  projectId?: number;
  /**
   * @remarks
   * The project mode. Valid values: BASIC for the basic mode, and DEV_PROD for the development-production isolation mode.
   * 
   * @example
   * BASIC
   */
  projectMode?: string;
  /**
   * @remarks
   * The name of the Dataphin project to which the task belongs.
   * 
   * @example
   * flink_k8s
   */
  projectName?: string;
  /**
   * @remarks
   * The display information of the resource queue used by the task, including the queue name and ID.
   * 
   * @example
   * Dedicated for real-time development (1052061)
   */
  resourceQueue?: string;
  /**
   * @remarks
   * The running status of the task. The original TaskStatusEnum enumeration name is returned. Common real-time statuses include: STREAMING_STARTING (starting), STREAMING_RUNNING (running), STREAMING_PAUSING (pausing), STREAMING_PAUSED (paused), STREAMING_RESUMING (resuming), STREAMING_STOPPING (stopping), STREAMING_STOPPED (stopped), STREAMING_INIT (initial status), STREAMING_FAILED (running exception), STREAMING_START_FAILED (start exception), STREAMING_RESUME_FAILED (resume exception), and STREAMING_FINISHED (completed). Other known statuses also return the original enumeration name. If the status cannot be identified, UNKNOWN is returned. If the original status is empty, null is returned.
   * 
   * @example
   * STREAMING_RUNNING
   */
  status?: string;
  /**
   * @remarks
   * Instance ID of the real-time task instance. Instance ID starts with t_ and corresponds to the TaskId request parameter in GetStreamTask.
   * 
   * @example
   * t_8442437168737681408_20261014_8442447717177229312
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the task, such as REAL_TIME_PIPELINE (real-time integration), FLINK_SQL (SQL task), FLINK_TEMPLATE_SQL (template task), and FLINK_DATASTREAM (DataStream task).
   * 
   * @example
   * REAL_TIME_PIPELINE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      consumeLocationDate: 'ConsumeLocationDate',
      engineVersion: 'EngineVersion',
      fileId: 'FileId',
      name: 'Name',
      nodeId: 'NodeId',
      operatorId: 'OperatorId',
      operatorName: 'OperatorName',
      projectId: 'ProjectId',
      projectMode: 'ProjectMode',
      projectName: 'ProjectName',
      resourceQueue: 'ResourceQueue',
      status: 'Status',
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeLocationDate: 'string',
      engineVersion: 'string',
      fileId: 'string',
      name: 'string',
      nodeId: 'string',
      operatorId: 'string',
      operatorName: 'string',
      projectId: 'number',
      projectMode: 'string',
      projectName: 'string',
      resourceQueue: 'string',
      status: 'string',
      taskId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStreamTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The basic information and running information of the real-time task instance. The fileId can be used to subsequently query operation records and historical running instances.
   */
  data?: GetStreamTaskResponseBodyData;
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
   * The details of the backend response exception.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetStreamTaskResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

