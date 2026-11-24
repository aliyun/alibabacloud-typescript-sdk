// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkSQLEngineStateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * s202207151211hz0c****
   */
  appId?: string;
  /**
   * @remarks
   * The configuration of the Spark application.
   * 
   * @example
   * {"key1": "value1", "key2": "value2"}
   */
  config?: string;
  /**
   * @remarks
   * The third-party JAR packages.
   * 
   * @example
   * oss://test-bucket/test.jar
   */
  jars?: string;
  /**
   * @remarks
   * The maximum number of Spark executors to start.
   * 
   * @example
   * 3
   */
  maxExecutor?: string;
  /**
   * @remarks
   * The minimum number of Spark executors to start.
   * 
   * @example
   * 1
   */
  minExecutor?: string;
  /**
   * @remarks
   * The slot value of the Spark application.
   * 
   * @example
   * 2
   */
  slotNum?: string;
  /**
   * @remarks
   * The execution status of the application. Valid values:
   * * SUBMITTED: Submitted.
   * * STARTING: Starting.
   * * RUNNING: Running.
   * * FAILING: The task failed and the environment is being cleaned up.
   * * FAILED: Failed.
   * * KILLING: The task is being terminated and the environment is being cleaned up.
   * * KILLED: Terminated.
   * * SUCCEEDING: The task execution is complete and the environment is being cleaned up.
   * * COMPLETED: Completed.
   * * FATAL: Unexpected failure.
   * * UNKNOWN: Unknown error.
   * 
   * @example
   * COMPLETED
   */
  state?: string;
  /**
   * @remarks
   * The submission time of the Spark SQL application. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1651213645000
   */
  submittedTimeInMillis?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      config: 'Config',
      jars: 'Jars',
      maxExecutor: 'MaxExecutor',
      minExecutor: 'MinExecutor',
      slotNum: 'SlotNum',
      state: 'State',
      submittedTimeInMillis: 'SubmittedTimeInMillis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      config: 'string',
      jars: 'string',
      maxExecutor: 'string',
      minExecutor: 'string',
      slotNum: 'string',
      state: 'string',
      submittedTimeInMillis: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkSQLEngineStateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status details of the Spark SQL engine.
   */
  data?: GetSparkSQLEngineStateResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxx-xxx-xx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSparkSQLEngineStateResponseBodyData,
      requestId: 'string',
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

