// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkSQLEngineStateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Spark application.
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
   * The third-party JAR package.
   * 
   * @example
   * oss://test-bucket/test.jar
   */
  jars?: string;
  /**
   * @remarks
   * The maximum number of started Spark executors.
   * 
   * @example
   * 3
   */
  maxExecutor?: string;
  /**
   * @remarks
   * The minimum number of started Spark executors.
   * 
   * @example
   * 1
   */
  minExecutor?: string;
  /**
   * @remarks
   * The slot number of the Spark application.
   * 
   * @example
   * 2
   */
  slotNum?: string;
  /**
   * @remarks
   * The execution state of the application. Valid values:
   * 
   * *   SUBMITTED
   * *   STARTING
   * *   RUNNING
   * *   FAILING
   * *   FAILED
   * *   KILLING
   * *   KILLED
   * *   SUCCEEDING
   * *   COMPLETED
   * *   FATAL
   * *   UNKNOWN
   * 
   * @example
   * COMPLETED
   */
  state?: string;
  /**
   * @remarks
   * The timestamp when the Spark SQL application was submitted. Unit: milliseconds.
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
   * The state information about the Spark SQL engine.
   */
  data?: GetSparkSQLEngineStateResponseBodyData;
  /**
   * @remarks
   * The request ID.
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

