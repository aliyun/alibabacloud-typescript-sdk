// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JobStatusDetailValue } from "./JobStatusDetailValue";


export class GetJobResponseBodyJobAllParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * regionId
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the parameter is confidential. Confidential parameters are hidden in API responses and console displays, and are stored in an encrypted manner.
   * 
   * @example
   * false
   */
  secret?: boolean;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * cn-zhangjiakou
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      secret: 'secret',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      secret: 'boolean',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobAssertCheckDetail extends $dara.Model {
  /**
   * @remarks
   * The comparison operator. Valid values:
   * - eq: Equal to.
   * - n_eq: Not equal to.
   * - ctn: Contains.
   * - n_ctn: Does not contain.
   * - regex: Regular expression match.
   * 
   * @example
   * eq
   */
  comparison?: string;
  /**
   * @remarks
   * The expected value.
   * 
   * @example
   * Expected value
   */
  expectedValue?: string;
  /**
   * @remarks
   * Indicates whether the check is passed.
   * 
   * @example
   * true
   */
  isPass?: boolean;
  /**
   * @remarks
   * The assertion type. Valid values:
   * - state: Task status.
   * - result: Execution result.
   * - resourceChange: Resource change.
   * 
   * @example
   * result
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comparison: 'comparison',
      expectedValue: 'expectedValue',
      isPass: 'isPass',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparison: 'string',
      expectedValue: 'string',
      isPass: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically execute the task.
   * 
   * @example
   * true
   */
  autoApply?: boolean;
  /**
   * @remarks
   * Specifies whether this job performs a compliance pre-check.
   * 
   * @example
   * true
   */
  hasConfigProactive?: string;
  /**
   * @remarks
   * Specifies whether to destroy resources.
   * 
   * @example
   * fales
   */
  isDestroy?: boolean;
  /**
   * @remarks
   * The template version.
   * 
   * @example
   * v1
   */
  moduleVersion?: string;
  /**
   * @remarks
   * The resource changes.
   * 
   * @example
   * +0 ~0 -0
   */
  resourcesChanged?: string;
  /**
   * @remarks
   * The operation command.
   * 
   * @example
   * destroy
   */
  subCommand?: string;
  static names(): { [key: string]: string } {
    return {
      autoApply: 'autoApply',
      hasConfigProactive: 'hasConfigProactive',
      isDestroy: 'isDestroy',
      moduleVersion: 'moduleVersion',
      resourcesChanged: 'resourcesChanged',
      subCommand: 'subCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoApply: 'boolean',
      hasConfigProactive: 'string',
      isDestroy: 'boolean',
      moduleVersion: 'string',
      resourcesChanged: 'string',
      subCommand: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJob extends $dara.Model {
  /**
   * @remarks
   * The full set of job parameters, including sensitive and non-sensitive parameters.
   */
  allParameters?: GetJobResponseBodyJobAllParameters[];
  /**
   * @remarks
   * The list of assertion checks, applicable to scenario-based testing tasks.
   */
  assertCheckDetail?: GetJobResponseBodyJobAssertCheckDetail[];
  /**
   * @remarks
   * The job configuration.
   */
  config?: GetJobResponseBodyJobConfig;
  /**
   * @remarks
   * The job creation time.
   * 
   * @example
   * 2022-08-31T03:38:40Z
   */
  createTime?: string;
  /**
   * @remarks
   * The job description.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The download URL.
   * 
   * @example
   * url
   */
  downloadUrl?: { [key: string]: any };
  /**
   * @remarks
   * The execution duration.
   * 
   * @example
   * 3s
   */
  elapsedTime?: number;
  /**
   * @remarks
   * The execution type. Valid values:
   * - Manual: Manual execution (default).
   * - Auto: Automatic execution.
   * 
   * @example
   * Manual
   */
  executeType?: string;
  /**
   * @remarks
   * Indicates whether the assertion check is passed.
   * 
   * @example
   * true
   */
  isPassAssertCheck?: boolean;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * job-518855d9a058cfff0dc933e6b5767
   */
  jobId?: string;
  /**
   * @remarks
   * The job type.
   * 
   * @example
   * Default
   */
  jobType?: string;
  /**
   * @remarks
   * The runtime logs. Currently, the following log content (that is, the values of the key) can be returned:
   * - tf-init.run.error.log
   * - tf-init.plan.log
   * - tf-plan.run.log
   * - tf-apply.run.log
   * - tf-init.apply.log
   */
  logFile?: { [key: string]: any };
  /**
   * @remarks
   * The job output.
   * 
   * @example
   * /
   */
  output?: string;
  /**
   * @remarks
   * The change details of the Plan phase.
   * 
   * @example
   * {
   *     "formatVersion": "1.2",
   *     "terraformVersion": "1.5.7",
   *     "providerVersion": "1.262.1",
   *     "plannedValues": {
   *         "root_module": {
   *         }
   *     },
   *     "resourceChanges": [
   *         {
   *             "address": "alicloud_instance.uuid_ae98dda8_xxxxxxx",
   *             "mode": "managed",
   *             "type": "alicloud_instance",
   *             "name": "uuid_ae98dda8_xxxxxx",
   *             "providerName": "registry.terraform.io/aliyun/alicloud",
   *             "change": {
   *                 "actions": [
   *                     "delete"
   *                 ],
   *                 "before": Object{...},
   *                 "after_unknown": {
   *                 },
   *                 "before_sensitive": Object{...},
   *                 "after_sensitive": false
   *             },
   *             "cloudSpecResourceCode": "ACS::ECS::Instance"
   *         }
   *     ],
   *     "configuration": Object{...}
   * }
   */
  outputJsonPlan?: any;
  /**
   * @remarks
   * The parameter collection.
   */
  parameters?: { [key: string]: string };
  /**
   * @remarks
   * The job status. Valid values:
   * - Pending: The initial state after the job is created.
   * - PlanQueued: The state where the job is queued and waiting because no workflow is available after creation.
   * - Planning: The state where the job is in the Plan phase.
   * - ConfigProactiveInProgress: The state where the compliance pre-check is in progress. This requires the compliance pre-check feature to be enabled for the account.
   * - ConfigProactiveSuccess: The state where the compliance pre-check is successful. This requires the compliance pre-check feature to be enabled for the account.
   * - Planned: The state where the job has completed the Plan phase.
   * - PlannedAndFinished: The final state where no differences are found after the Plan phase is completed.
   * - Confirmed: The state where the job is waiting for confirmation after the Plan phase is completed.
   * - ApplyQueued: The state where the job is queued and waiting because no workflow is available during execution.
   * - Applying: The state where the job is in the Apply phase.
   * - Applied: The final state where the job has completed the Apply phase.
   * - Errored: The final state where an error occurs during job execution.
   * - Canceled: The final state where the job execution is canceled.
   * - Discarded: The final state where the plan of the job is discarded.
   * - ConfigProactiveFailure: The state where the compliance pre-check fails. This requires the compliance pre-check feature to be enabled for the account.
   * 
   * @example
   * Errored
   */
  status?: string;
  /**
   * @remarks
   * The job status details.
   */
  statusDetail?: { [key: string]: JobStatusDetailValue };
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * task-3b6cb9fa4751a1b9b5f22cbcf4e
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - Task: Regular task (default).
   * - SceneTestingTask: Scenario-based testing task.
   * 
   * @example
   * SceneTestingTask
   */
  taskType?: string;
  /**
   * @remarks
   * The Terraform provider version.
   * 
   * @example
   * 1.230.0
   */
  terraformProviderVersion?: string;
  static names(): { [key: string]: string } {
    return {
      allParameters: 'allParameters',
      assertCheckDetail: 'assertCheckDetail',
      config: 'config',
      createTime: 'createTime',
      description: 'description',
      downloadUrl: 'downloadUrl',
      elapsedTime: 'elapsedTime',
      executeType: 'executeType',
      isPassAssertCheck: 'isPassAssertCheck',
      jobId: 'jobId',
      jobType: 'jobType',
      logFile: 'logFile',
      output: 'output',
      outputJsonPlan: 'outputJsonPlan',
      parameters: 'parameters',
      status: 'status',
      statusDetail: 'statusDetail',
      taskId: 'taskId',
      taskType: 'taskType',
      terraformProviderVersion: 'terraformProviderVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allParameters: { 'type': 'array', 'itemType': GetJobResponseBodyJobAllParameters },
      assertCheckDetail: { 'type': 'array', 'itemType': GetJobResponseBodyJobAssertCheckDetail },
      config: GetJobResponseBodyJobConfig,
      createTime: 'string',
      description: 'string',
      downloadUrl: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      elapsedTime: 'number',
      executeType: 'string',
      isPassAssertCheck: 'boolean',
      jobId: 'string',
      jobType: 'string',
      logFile: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      output: 'string',
      outputJsonPlan: 'any',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      status: 'string',
      statusDetail: { 'type': 'map', 'keyType': 'string', 'valueType': JobStatusDetailValue },
      taskId: 'string',
      taskType: 'string',
      terraformProviderVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allParameters)) {
      $dara.Model.validateArray(this.allParameters);
    }
    if(Array.isArray(this.assertCheckDetail)) {
      $dara.Model.validateArray(this.assertCheckDetail);
    }
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.downloadUrl) {
      $dara.Model.validateMap(this.downloadUrl);
    }
    if(this.logFile) {
      $dara.Model.validateMap(this.logFile);
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    if(this.statusDetail) {
      $dara.Model.validateMap(this.statusDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job details.
   */
  job?: GetJobResponseBodyJob;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1435C78A-AED9-53D6-B7A6-E2661D29B1FA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      job: 'job',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: GetJobResponseBodyJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.job && typeof (this.job as any).validate === 'function') {
      (this.job as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

