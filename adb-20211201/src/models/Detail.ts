// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Detail extends $dara.Model {
  /**
   * @remarks
   * The type of the Spark application.
   * 
   * @example
   * BATCH
   */
  appType?: string;
  /**
   * @remarks
   * The ID of the cluster that runs the Spark application.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The configuration content of the Spark application.
   * 
   * @example
   * {     "name": "SparkPi",     "file": "local:///tmp/spark-examples.jar",     "className": "org.apache.spark.examples.SparkPi",     "args": [         "1000000"     ],     "conf": {         "spark.driver.resourceSpec": "small",         "spark.executor.instances": 1,         "spark.executor.resourceSpec": "small"     } }
   */
  data?: string;
  /**
   * @remarks
   * The execution duration of the Spark application, in milliseconds (ms).
   * 
   * @example
   * 100
   */
  durationInMillis?: number;
  /**
   * @remarks
   * The CPU time consumed by the Spark application, in milliseconds (ms).
   * 
   * @example
   * 100
   */
  estimateExecutionCpuTimeInSeconds?: number;
  /**
   * @remarks
   * The execution duration.
   * 
   * @example
   * 36000
   */
  executionDurationInMillis?: number;
  /**
   * @remarks
   * The ID of the last retry of the Spark application.
   * 
   * @example
   * s202204291426hzpre60****-0003
   */
  lastAttemptId?: string;
  /**
   * @remarks
   * The time when the Spark application was last updated. This value is a UNIX timestamp, in milliseconds (ms).
   * 
   * @example
   * 1651213645200
   */
  lastUpdatedTimeInMillis?: number;
  /**
   * @remarks
   * The storage path of the log file.
   * 
   * @example
   * oss://<bucket-name>/logs/driver
   */
  logRootPath?: string;
  /**
   * @remarks
   * The name of the job resource group.
   * 
   * @example
   * spark-rg
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The duration of resource provisioning for the application.
   * 
   * @example
   * 36000
   */
  resourceProvisioningDurationInMillis?: number;
  /**
   * @remarks
   * The timestamp when the job started running.
   * 
   * @example
   * 36000
   * 
   * **if can be null:**
   * false
   */
  runningStartTimeInMillis?: number;
  /**
   * @remarks
   * The time when the Spark application was created. This value is a UNIX timestamp, in milliseconds (ms).
   * 
   * @example
   * 1651213645010
   */
  startedTimeInMillis?: number;
  /**
   * @remarks
   * The time when the Spark application was submitted. This value is a UNIX timestamp, in milliseconds (ms).
   * 
   * @example
   * 1651213645000
   */
  submittedTimeInMillis?: number;
  /**
   * @remarks
   * The time when the Spark application was terminated. This value is a UNIX timestamp, in milliseconds (ms).
   * 
   * @example
   * 1651213645300
   */
  terminatedTimeInMillis?: number;
  /**
   * @remarks
   * The Web UI address.
   * 
   * @example
   * https://adbsparkui-cn-hangzhou.aliyuncs.com/?token=****
   */
  webUiAddress?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      DBClusterId: 'DBClusterId',
      data: 'Data',
      durationInMillis: 'DurationInMillis',
      estimateExecutionCpuTimeInSeconds: 'EstimateExecutionCpuTimeInSeconds',
      executionDurationInMillis: 'ExecutionDurationInMillis',
      lastAttemptId: 'LastAttemptId',
      lastUpdatedTimeInMillis: 'LastUpdatedTimeInMillis',
      logRootPath: 'LogRootPath',
      resourceGroupName: 'ResourceGroupName',
      resourceProvisioningDurationInMillis: 'ResourceProvisioningDurationInMillis',
      runningStartTimeInMillis: 'RunningStartTimeInMillis',
      startedTimeInMillis: 'StartedTimeInMillis',
      submittedTimeInMillis: 'SubmittedTimeInMillis',
      terminatedTimeInMillis: 'TerminatedTimeInMillis',
      webUiAddress: 'WebUiAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      DBClusterId: 'string',
      data: 'string',
      durationInMillis: 'number',
      estimateExecutionCpuTimeInSeconds: 'number',
      executionDurationInMillis: 'number',
      lastAttemptId: 'string',
      lastUpdatedTimeInMillis: 'number',
      logRootPath: 'string',
      resourceGroupName: 'string',
      resourceProvisioningDurationInMillis: 'number',
      runningStartTimeInMillis: 'number',
      startedTimeInMillis: 'number',
      submittedTimeInMillis: 'number',
      terminatedTimeInMillis: 'number',
      webUiAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

