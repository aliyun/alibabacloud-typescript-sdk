// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobsResponseBodyDataJobsJobMonitorInfo } from "./ListJobsResponseBodyDataJobsJobMonitorInfo";
import { ListJobsResponseBodyDataJobsMapTaskXAttrs } from "./ListJobsResponseBodyDataJobsMapTaskXattrs";
import { ListJobsResponseBodyDataJobsTimeConfig } from "./ListJobsResponseBodyDataJobsTimeConfig";


export class ListJobsResponseBodyDataJobs extends $dara.Model {
  /**
   * @remarks
   * The interval at which the system retries to run the job after a job failure. Unit: seconds. Default value: 30.
   * 
   * @example
   * 30
   */
  attemptInterval?: number;
  /**
   * @remarks
   * The full path of the job interface class. This parameter is returned only for a Java job.
   * 
   * @example
   * com.alibaba.schedulerx.test.helloworld
   */
  className?: string;
  /**
   * @remarks
   * The script of the job. This parameter is returned only for a Python, Shell, or Go job.
   * 
   * @example
   * echo \\"hello\\"
   */
  content?: string;
  /**
   * @remarks
   * The description of the job.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The execution mode of the job. Valid values:
   * 
   * *   **standalone**: The job runs in standalone mode.
   * *   **broadcast**: The job runs in broadcast mode.
   * *   **parallel**: The job runs in parallel computing mode.
   * *   **grid**: The job runs in memory grid mode.
   * *   **batch**: The job runs in grid computing mode.
   * *   **shard**: The job runs in multipart mode.
   * 
   * @example
   * standalone
   */
  executeMode?: string;
  /**
   * @remarks
   * The full path to which a JAR package is uploaded in Object Storage Service (OSS).
   * 
   * @example
   * https:doc***.oss-cn-hangzhou.aliyuncs.com/sc-****-D-0.0.2-SNAPSHOT.jar
   */
  jarUrl?: string;
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * 99341
   */
  jobId?: number;
  /**
   * @remarks
   * The monitoring information of the job.
   */
  jobMonitorInfo?: ListJobsResponseBodyDataJobsJobMonitorInfo;
  /**
   * @remarks
   * The type of the job.
   * 
   * @example
   * java
   */
  jobType?: string;
  /**
   * @remarks
   * The advanced configurations of the job. The parameters are returned only if the value of the ExecuteMode parameter is parallel, grid, or batch.
   */
  mapTaskXAttrs?: ListJobsResponseBodyDataJobsMapTaskXAttrs;
  /**
   * @remarks
   * The maximum number of retries after a job failure. This parameter is specified based on your business requirements. Default value: 0.
   * 
   * @example
   * 0
   */
  maxAttempt?: number;
  /**
   * @remarks
   * The maximum number of instances that can concurrently run for the job. Default value: 1. A value of 1 indicates that if the last triggered instance is running, the next instance is not triggered even if the scheduled point in time for running the instance is reached.
   * 
   * @example
   * 1
   */
  maxConcurrency?: string;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * helloworld
   */
  name?: string;
  /**
   * @remarks
   * The user-defined parameters. These parameters can be obtained when the job is running.
   * 
   * @example
   * test
   */
  parameters?: string;
  /**
   * @remarks
   * Indicates whether the job is enabled. Valid values:
   * 
   * *   **1**: The job is enabled and can be triggered.
   * *   **0**: The job is disabled and cannot be triggered.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The time configurations.
   */
  timeConfig?: ListJobsResponseBodyDataJobsTimeConfig;
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
      jobMonitorInfo: ListJobsResponseBodyDataJobsJobMonitorInfo,
      jobType: 'string',
      mapTaskXAttrs: ListJobsResponseBodyDataJobsMapTaskXAttrs,
      maxAttempt: 'number',
      maxConcurrency: 'string',
      name: 'string',
      parameters: 'string',
      status: 'number',
      timeConfig: ListJobsResponseBodyDataJobsTimeConfig,
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

