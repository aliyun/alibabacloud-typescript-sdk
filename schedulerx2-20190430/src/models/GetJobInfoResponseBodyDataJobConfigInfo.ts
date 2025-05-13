// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfo } from "./GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfo";
import { GetJobInfoResponseBodyDataJobConfigInfoMapTaskXAttrs } from "./GetJobInfoResponseBodyDataJobConfigInfoMapTaskXattrs";
import { GetJobInfoResponseBodyDataJobConfigInfoTimeConfig } from "./GetJobInfoResponseBodyDataJobConfigInfoTimeConfig";


export class GetJobInfoResponseBodyDataJobConfigInfo extends $dara.Model {
  /**
   * @remarks
   * The interval at which the system retried to run the job after a job failure. Default value: 30. Unit: seconds.
   * 
   * @example
   * 30
   */
  attemptInterval?: number;
  /**
   * @remarks
   * The full path of the job interface class. This parameter is returned only for jobs whose job type is Java.
   * 
   * @example
   * com.alibaba.test.helloword
   */
  className?: string;
  /**
   * @remarks
   * The script of a script job.
   * 
   * @example
   * echo "clear" > /home/admin/edas-container/logs/catalina.out
   */
  content?: string;
  /**
   * @remarks
   * The description of the job.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The execution mode of the job. Valid values:
   * 
   * *   **Stand-alone operation**: standalone
   * *   **Broadcast run**: broadcast
   * *   **Visual MapReduce**: parallel
   * *   **MapReduce**: batch
   * *   **Shard run**: sharding
   * 
   * @example
   * standalone
   */
  executeMode?: string;
  /**
   * @remarks
   * The full path used to upload files to Object Storage Service (OSS).
   * 
   * If you use a JAR package, you can upload the JAR package to this OSS path.
   * 
   * @example
   * https://test.oss-cn-hangzhou.aliyuncs.com/schedulerX/test.jar
   */
  jarUrl?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 538039
   */
  jobId?: number;
  /**
   * @remarks
   * The monitoring information of the job.
   */
  jobMonitorInfo?: GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfo;
  /**
   * @remarks
   * The job type.
   * 
   * @example
   * java
   */
  jobType?: string;
  /**
   * @remarks
   * The advanced configurations of the job.
   */
  mapTaskXAttrs?: GetJobInfoResponseBodyDataJobConfigInfoMapTaskXAttrs;
  /**
   * @remarks
   * The maximum number of retries after a job failure. This parameter was specified based on your business requirements. Default value: 0.
   * 
   * @example
   * 0
   */
  maxAttempt?: number;
  /**
   * @remarks
   * The maximum number of concurrent instances. Default value: 1. The default value indicates that if the last triggered instance is running, the next instance is not triggered even if the scheduled point in time for running the next instance is reached.
   * 
   * @example
   * 1
   */
  maxConcurrency?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * helloworld
   */
  name?: string;
  /**
   * @remarks
   * The user-defined parameters that you can obtain when the job is running.
   * 
   * @example
   * test
   */
  parameters?: string;
  /**
   * @remarks
   * Indicates whether the job was enabled. Valid values:
   * 
   * *   **1**: The job was enabled and could be triggered.
   * *   **0**: The job was disabled and could not be triggered.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The time configurations.
   */
  timeConfig?: GetJobInfoResponseBodyDataJobConfigInfoTimeConfig;
  /**
   * @remarks
   * The extended fields.
   * 
   * @example
   * {"pageSize":5,"queueSize":10,"consumerSize":5,"dispatcherSize":5,"taskMaxAttempt":0,"taskAttemptInterval":0,"globalConsumerSize":1000,"taskDispatchMode":"push"}
   */
  XAttrs?: string;
  static names(): { [key: string]: string } {
    return {
      attemptInterval: 'AttemptInterval',
      className: 'ClassName',
      content: 'Content',
      description: 'Description',
      executeMode: 'ExecuteMode',
      jarUrl: 'JarUrl',
      jobId: 'JobId',
      jobMonitorInfo: 'JobMonitorInfo',
      jobType: 'JobType',
      mapTaskXAttrs: 'MapTaskXAttrs',
      maxAttempt: 'MaxAttempt',
      maxConcurrency: 'MaxConcurrency',
      name: 'Name',
      parameters: 'Parameters',
      status: 'Status',
      timeConfig: 'TimeConfig',
      XAttrs: 'XAttrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attemptInterval: 'number',
      className: 'string',
      content: 'string',
      description: 'string',
      executeMode: 'string',
      jarUrl: 'string',
      jobId: 'number',
      jobMonitorInfo: GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfo,
      jobType: 'string',
      mapTaskXAttrs: GetJobInfoResponseBodyDataJobConfigInfoMapTaskXAttrs,
      maxAttempt: 'number',
      maxConcurrency: 'string',
      name: 'string',
      parameters: 'string',
      status: 'number',
      timeConfig: GetJobInfoResponseBodyDataJobConfigInfoTimeConfig,
      XAttrs: 'string',
    };
  }

  validate() {
    if(this.jobMonitorInfo && typeof (this.jobMonitorInfo as any).validate === 'function') {
      (this.jobMonitorInfo as any).validate();
    }
    if(this.mapTaskXAttrs && typeof (this.mapTaskXAttrs as any).validate === 'function') {
      (this.mapTaskXAttrs as any).validate();
    }
    if(this.timeConfig && typeof (this.timeConfig as any).validate === 'function') {
      (this.timeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

