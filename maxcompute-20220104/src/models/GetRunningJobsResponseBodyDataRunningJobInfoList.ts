// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRunningJobsResponseBodyDataRunningJobInfoList extends $dara.Model {
  /**
   * @remarks
   * The compute unit (CU) snapshot proportion of the job.
   * 
   * @example
   * 0.45
   */
  cuSnapshot?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 2023050206371544gomgtp3ljcr4
   */
  instanceId?: string;
  /**
   * @remarks
   * The account that submits the job.
   * 
   * @example
   * ALIYUN$xxx@test.aliyunid.com
   */
  jobOwner?: string;
  /**
   * @remarks
   * The memory snapshot proportion of the job.
   * 
   * @example
   * 0.45
   */
  memorySnapshot?: number;
  /**
   * @remarks
   * The progress of the job.
   * 
   * @example
   * 0
   */
  progress?: number;
  /**
   * @remarks
   * The name of the MaxCompute project.
   * 
   * @example
   * project_20221021123044_981b
   */
  project?: string;
  /**
   * @remarks
   * The nickname of the quota that is used by the job.
   * 
   * @example
   * my_quota
   */
  quotaNickname?: string;
  /**
   * @remarks
   * The time when the job starts to run.
   * 
   * @example
   * 1689746864
   */
  runningAtTime?: number;
  /**
   * @remarks
   * The time when the job is submitted.
   * 
   * @example
   * 1689746864
   */
  submittedAtTime?: number;
  static names(): { [key: string]: string } {
    return {
      cuSnapshot: 'cuSnapshot',
      instanceId: 'instanceId',
      jobOwner: 'jobOwner',
      memorySnapshot: 'memorySnapshot',
      progress: 'progress',
      project: 'project',
      quotaNickname: 'quotaNickname',
      runningAtTime: 'runningAtTime',
      submittedAtTime: 'submittedAtTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cuSnapshot: 'number',
      instanceId: 'string',
      jobOwner: 'string',
      memorySnapshot: 'number',
      progress: 'number',
      project: 'string',
      quotaNickname: 'string',
      runningAtTime: 'number',
      submittedAtTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

