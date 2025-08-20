// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Detail extends $dara.Model {
  /**
   * @example
   * BATCH
   */
  appType?: string;
  /**
   * @example
   * amv-bp11q28kv****
   */
  DBClusterId?: string;
  /**
   * @example
   * {     "name": "SparkPi",     "file": "local:///tmp/spark-examples.jar",     "className": "org.apache.spark.examples.SparkPi",     "args": [         "1000000"     ],     "conf": {         "spark.driver.resourceSpec": "small",         "spark.executor.instances": 1,         "spark.executor.resourceSpec": "small"     } }
   */
  data?: string;
  /**
   * @example
   * 100
   */
  durationInMillis?: number;
  /**
   * @example
   * 100
   */
  estimateExecutionCpuTimeInSeconds?: number;
  /**
   * @example
   * 36000
   */
  executionDurationInMillis?: number;
  /**
   * @example
   * s202204291426hzpre60cfa*****-0003
   */
  lastAttemptId?: string;
  /**
   * @example
   * 1651213645200
   */
  lastUpdatedTimeInMillis?: number;
  /**
   * @example
   * oss://<bucket-name>/logs/driver
   */
  logRootPath?: string;
  /**
   * @example
   * spark-rg
   */
  resourceGroupName?: string;
  /**
   * @example
   * 36000
   */
  resourceProvisioningDurationInMillis?: number;
  /**
   * @example
   * 36000
   * 
   * **if can be null:**
   * false
   */
  runningStartTimeInMillis?: number;
  /**
   * @example
   * 1651213645010
   */
  startedTimeInMillis?: number;
  /**
   * @example
   * 1651213645000
   */
  submittedTimeInMillis?: number;
  /**
   * @example
   * 1651213645300
   */
  terminatedTimeInMillis?: number;
  /**
   * @example
   * https://sparkui.aliyuncs.com/token=xxx
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

