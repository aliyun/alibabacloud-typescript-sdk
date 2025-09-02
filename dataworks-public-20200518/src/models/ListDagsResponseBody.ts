// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDagsResponseBodyDataDags extends $dara.Model {
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
   * The creation time.
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
   * The end time.
   * 
   * @example
   * 1605052800000
   */
  finishTime?: number;
  /**
   * @remarks
   * The actual running time.
   * 
   * @example
   * 1605052800000
   */
  gmtdate?: number;
  /**
   * @remarks
   * The modification time.
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
   * The start time.
   * 
   * @example
   * 1605052800000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the DAG. Valid values:
   * 
   * *   CREATED
   * *   RUNNING
   * *   FAILURE
   * *   SUCCESS
   * 
   * @example
   * FAILURE
   */
  status?: string;
  /**
   * @remarks
   * The type of the DAG. Valid values:
   * 
   * *   MANUAL: DAG for a manually triggered workflow
   * *   SMOKE_TEST: DAG for a smoke testing workflow
   * *   SUPPLY_DATA: DAG for a data backfill instance
   * *   BUSINESS_PROCESS_DAG: DAG for a one-time workflow
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

export class ListDagsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The entities returned.
   */
  dags?: ListDagsResponseBodyDataDags[];
  static names(): { [key: string]: string } {
    return {
      dags: 'Dags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dags: { 'type': 'array', 'itemType': ListDagsResponseBodyDataDags },
    };
  }

  validate() {
    if(Array.isArray(this.dags)) {
      $dara.Model.validateArray(this.dags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of DAGs.
   */
  data?: ListDagsResponseBodyData;
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
   * The request ID. You can use the ID to locate logs and troubleshoot issues.
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
      data: ListDagsResponseBodyData,
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

