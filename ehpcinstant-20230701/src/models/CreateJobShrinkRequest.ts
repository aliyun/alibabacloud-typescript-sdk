// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The dependency policy.
   */
  dependencyPolicyShrink?: string;
  /**
   * @remarks
   * The resource deployment policy.
   */
  deploymentPolicyShrink?: string;
  /**
   * @remarks
   * The job description.
   * 
   * @example
   * Demo
   */
  jobDescription?: string;
  /**
   * @remarks
   * The job name. The name must be 2 to 64 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * testjob
   */
  jobName?: string;
  jobScheduler?: string;
  /**
   * @remarks
   * The job template ID.
   * 
   * @example
   * jt-xxxx
   */
  jobTemplateId?: string;
  /**
   * @remarks
   * The security policy.
   */
  securityPolicyShrink?: string;
  /**
   * @remarks
   * The task list. Currently, only one task is supported.
   * 
   * This parameter is required.
   */
  tasksShrink?: string;
  static names(): { [key: string]: string } {
    return {
      dependencyPolicyShrink: 'DependencyPolicy',
      deploymentPolicyShrink: 'DeploymentPolicy',
      jobDescription: 'JobDescription',
      jobName: 'JobName',
      jobScheduler: 'JobScheduler',
      jobTemplateId: 'JobTemplateId',
      securityPolicyShrink: 'SecurityPolicy',
      tasksShrink: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependencyPolicyShrink: 'string',
      deploymentPolicyShrink: 'string',
      jobDescription: 'string',
      jobName: 'string',
      jobScheduler: 'string',
      jobTemplateId: 'string',
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

