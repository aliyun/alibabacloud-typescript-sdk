// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetJobResponseBodyJobInfoDeploymentPolicy } from "./GetJobResponseBodyJobInfoDeploymentPolicy";
import { GetJobResponseBodyJobInfoTasks } from "./GetJobResponseBodyJobInfoTasks";


export class GetJobResponseBodyJobInfo extends $dara.Model {
  appExtraInfo?: string;
  /**
   * @example
   * 2024-03-05 20:00:46
   */
  createTime?: string;
  deploymentPolicy?: GetJobResponseBodyJobInfoDeploymentPolicy;
  /**
   * @example
   * 2024-03-05 20:01:48
   */
  endTime?: string;
  /**
   * @example
   * Demo
   */
  jobDescription?: string;
  /**
   * @example
   * job-xxxx
   */
  jobId?: string;
  /**
   * @example
   * testJob
   */
  jobName?: string;
  jobScheduler?: string;
  /**
   * @example
   * 2024-03-05 20:00:48
   */
  startTime?: string;
  /**
   * @example
   * Succeed
   */
  status?: string;
  tasks?: GetJobResponseBodyJobInfoTasks[];
  static names(): { [key: string]: string } {
    return {
      appExtraInfo: 'AppExtraInfo',
      createTime: 'CreateTime',
      deploymentPolicy: 'DeploymentPolicy',
      endTime: 'EndTime',
      jobDescription: 'JobDescription',
      jobId: 'JobId',
      jobName: 'JobName',
      jobScheduler: 'JobScheduler',
      startTime: 'StartTime',
      status: 'Status',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appExtraInfo: 'string',
      createTime: 'string',
      deploymentPolicy: GetJobResponseBodyJobInfoDeploymentPolicy,
      endTime: 'string',
      jobDescription: 'string',
      jobId: 'string',
      jobName: 'string',
      jobScheduler: 'string',
      startTime: 'string',
      status: 'string',
      tasks: { 'type': 'array', 'itemType': GetJobResponseBodyJobInfoTasks },
    };
  }

  validate() {
    if(this.deploymentPolicy && typeof (this.deploymentPolicy as any).validate === 'function') {
      (this.deploymentPolicy as any).validate();
    }
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

