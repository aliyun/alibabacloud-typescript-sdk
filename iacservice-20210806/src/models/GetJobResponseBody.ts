// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JobStatusDetailValue } from "./JobStatusDetailValue";


export class GetJobResponseBodyJobAllParameters extends $dara.Model {
  /**
   * @example
   * regionId
   */
  name?: string;
  /**
   * @example
   * false
   */
  secret?: boolean;
  /**
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
   * 
   * - eq: equal to
   * - n_eq: not equal to
   * - ctn: contains
   * - n_ctn: does not contain
   * - regex: regular expression match.
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
   * 期望值
   */
  expectedValue?: string;
  /**
   * @remarks
   * Indicates whether the assertion check is passed.
   * 
   * @example
   * true
   */
  isPass?: boolean;
  /**
   * @remarks
   * The assertion type. Valid values:
   * 
   * - state: task status
   * - result: execution result
   * - resourceChange: resource change.
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
   * Specifies whether compliance pre-check is performed for this job.
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
   * The resource change content.
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
  allParameters?: GetJobResponseBodyJobAllParameters[];
  /**
   * @remarks
   * The list of assertion checks. This parameter applies to scenario-based testing tasks.
   */
  assertCheckDetail?: GetJobResponseBodyJobAssertCheckDetail[];
  /**
   * @remarks
   * The job configuration.
   */
  config?: GetJobResponseBodyJobConfig;
  /**
   * @remarks
   * The time when the job was created.
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
   * 
   * - Manual: manual execution (default)
   * - Auto: automatic execution.
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
   * The run logs. The following log content (key values) is currently supported:
   * 
   * - tf-init.run.error.log
   *  
   * - tf-init.plan.log
   * 
   * - tf-plan.run.log
   * 
   * - tf-apply.run.log
   *  
   * - tf-init.apply.log.
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
   * The collection of parameters.
   */
  parameters?: { [key: string]: string };
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * - Pending: the initial status after the job is created.
   * - PlanQueued: the job is queued because no available worker is ready after the job is created.
   * - Planning: the resource job is in the Plan phase.
   * - ConfigProactiveInProgress: compliance pre-check is in progress. The compliance pre-check feature must be enabled for the account.
   * - ConfigProactiveSuccess: compliance pre-check succeeded. The compliance pre-check feature must be enabled for the account.
   * - Planned: the resource job has completed the Plan phase.
   * - PlannedAndFinished: no diff is found after the Plan phase is completed. This is a final status.
   * - Confirmed: the resource job is waiting for confirmation after the Plan phase is completed.
   * - ApplyQueued: the job is queued because no available worker is ready during execution.
   * - Applying: the resource job is in the Apply phase.
   * - Applied: the resource job has completed the Apply phase. This is a final status.
   * - Errored: the job execution encountered an error. This is a final status.
   * - Canceled: the job execution was canceled. This is a final status.
   * - Discarded: the plan of the resource job was discarded. This is a final status.
   * - ConfigProactiveFailure: compliance pre-check failed. The compliance pre-check feature must be enabled for the account.
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
   * 
   * - Task: regular task (default)
   * - SceneTestingTask: scenario-based testing task.
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

