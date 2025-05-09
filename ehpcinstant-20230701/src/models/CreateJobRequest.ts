// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateJobRequestDeploymentPolicy } from "./CreateJobRequestDeploymentPolicy";
import { CreateJobRequestSecurityPolicy } from "./CreateJobRequestSecurityPolicy";
import { CreateJobRequestTasks } from "./CreateJobRequestTasks";


export class CreateJobRequest extends $dara.Model {
  deploymentPolicy?: CreateJobRequestDeploymentPolicy;
  /**
   * @example
   * Demo
   */
  jobDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testjob
   */
  jobName?: string;
  jobScheduler?: string;
  securityPolicy?: CreateJobRequestSecurityPolicy;
  /**
   * @remarks
   * This parameter is required.
   */
  tasks?: CreateJobRequestTasks[];
  static names(): { [key: string]: string } {
    return {
      deploymentPolicy: 'DeploymentPolicy',
      jobDescription: 'JobDescription',
      jobName: 'JobName',
      jobScheduler: 'JobScheduler',
      securityPolicy: 'SecurityPolicy',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentPolicy: CreateJobRequestDeploymentPolicy,
      jobDescription: 'string',
      jobName: 'string',
      jobScheduler: 'string',
      securityPolicy: CreateJobRequestSecurityPolicy,
      tasks: { 'type': 'array', 'itemType': CreateJobRequestTasks },
    };
  }

  validate() {
    if(this.deploymentPolicy && typeof (this.deploymentPolicy as any).validate === 'function') {
      (this.deploymentPolicy as any).validate();
    }
    if(this.securityPolicy && typeof (this.securityPolicy as any).validate === 'function') {
      (this.securityPolicy as any).validate();
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

