// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDagResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data timestamp.
   * 
   * @example
   * 1605052800000
   */
  bizdate?: number;
  /**
   * @remarks
   * The time when the DAG was created.
   * 
   * @example
   * 1605052800000
   */
  createTime?: number;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 1736629400048545
   */
  createUser?: string;
  /**
   * @remarks
   * The DAG ID.
   * 
   * @example
   * 351249682
   */
  dagId?: number;
  /**
   * @remarks
   * The time when the DAG finished running.
   * 
   * @example
   * 1605052800000
   */
  finishTime?: number;
  /**
   * @remarks
   * The time when the DAG was scheduled to run.
   * 
   * @example
   * 1605052800000
   */
  gmtdate?: number;
  /**
   * @remarks
   * The time when the DAG was last modified.
   * 
   * @example
   * 1605052800000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name of the DAG.
   * 
   * @example
   * test_dag
   */
  name?: string;
  /**
   * @remarks
   * The sequence number of the operation.
   * 
   * @example
   * 123
   */
  opSeq?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 112345
   */
  projectId?: number;
  /**
   * @remarks
   * The time when the DAG started to run.
   * 
   * @example
   * 1605052800000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the DAG. Valid values: CREATED, RUNNING, FAILURE, and SUCCESS.
   * 
   * @example
   * FAILURE
   */
  status?: string;
  /**
   * @remarks
   * The type of the DAG. Valid values: MANUAL, SMOKE_TEST, SUPPLY_DATA, and BUSINESS_PROCESS_DAG. The value MANUAL indicates the DAG for a manually triggered workflow. The value SMOKE_TEST indicates the DAG for a smoke testing workflow. The value SUPPLY_DATA indicates the DAG for a data backfill instance. The value BUSINESS_PROCESS_DAG indicates the DAG for a one-time workflow.
   * 
   * @example
   * MANUAL_FLOW
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizdate: 'Bizdate',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      dagId: 'DagId',
      finishTime: 'FinishTime',
      gmtdate: 'Gmtdate',
      modifyTime: 'ModifyTime',
      name: 'Name',
      opSeq: 'OpSeq',
      projectId: 'ProjectId',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizdate: 'number',
      createTime: 'number',
      createUser: 'string',
      dagId: 'number',
      finishTime: 'number',
      gmtdate: 'number',
      modifyTime: 'number',
      name: 'string',
      opSeq: 'number',
      projectId: 'number',
      startTime: 'number',
      status: 'string',
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

export class GetDagResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the DAG.
   */
  data?: GetDagResponseBodyData;
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
   * 7782a299-b291-4fee-8424-cf8058efa8e8
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
      data: GetDagResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
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

