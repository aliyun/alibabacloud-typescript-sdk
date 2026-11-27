// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SparkAppInfo } from "./SparkAppInfo";


export class GetSparkAppInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the Spark application. Response parameter description:
   * - **Data**: the Spark application template data.
   * - **EstimateExecutionCpuTimeInSeconds**: the CPU time consumed to execute the Spark application, in milliseconds.
   * - **LogRootPath**: the storage path of the log file.
   * - **LastAttemptId**: the retry ID.
   * - **WebUiAddress**: the web UI address.
   * - **SubmittedTimeInMillis**: the time when the Spark application was submitted. The value is a UNIX timestamp in milliseconds.
   * - **StartedTimeInMillis**: the time when the Spark application was created. The value is a UNIX timestamp in milliseconds.
   * - **LastUpdatedTimeInMillis**: the time when the Spark application was last updated. The value is a UNIX timestamp in milliseconds.
   * - **TerminatedTimeInMillis**: the time when the execution of the Spark application was terminated. The value is a UNIX timestamp in milliseconds.
   * - **DBClusterId**: the ID of the cluster where the Spark application is executed.
   * - **ResourceGroupName**: the name of the job resource group.
   * - **DurationInMillis**: the execution duration of the Spark application, in milliseconds.
   * 
   * @example
   * {     \"name\": \"SparkPi\",     \"file\": \"local:///tmp/spark-examples.jar\",     \"className\": \"org.apache.spark.examples.SparkPi\",     \"args\": [         \"1000000\"     ],     \"conf\": {         \"spark.driver.resourceSpec\": \"small\",         \"spark.executor.instances\": 1,         \"spark.executor.resourceSpec\": \"small\"     } }",
   *       "EstimateExecutionCpuTimeInSeconds" : 100,
   *       "LogRootPath" : "oss://test/logs/driver",
   *       "LastAttemptId" : "s202204291426hzpre60cfabb0000004-0003",
   *       "WebUiAddress" : "https://sparkui.aliyuncs.com/token=xxx",
   *       "SubmittedTimeInMillis" : 1651213645000,
   *       "StartedTimeInMillis" : 1651213645010,
   *       "LastUpdatedTimeInMillis" : 1651213645200,
   *       "TerminatedTimeInMillis" : 1651213645300,
   *       "DBClusterId" : "am-dbclusterid",
   *       "ResourceGroupName" : "spark-rg",
   *       "DurationInMillis" : 100
   *     }
   */
  data?: SparkAppInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D65A809F-34CE-4550-9BC1-0ED21ETG380
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
      data: SparkAppInfo,
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

