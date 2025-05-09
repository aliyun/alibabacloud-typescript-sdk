// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobShrinkRequest extends $dara.Model {
  deploymentPolicyShrink?: string;
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
  securityPolicyShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tasksShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentPolicyShrink: 'DeploymentPolicy',
      jobDescription: 'JobDescription',
      jobName: 'JobName',
      jobScheduler: 'JobScheduler',
      securityPolicyShrink: 'SecurityPolicy',
      tasksShrink: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentPolicyShrink: 'string',
      jobDescription: 'string',
      jobName: 'string',
      jobScheduler: 'string',
      securityPolicyShrink: 'string',
      tasksShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

