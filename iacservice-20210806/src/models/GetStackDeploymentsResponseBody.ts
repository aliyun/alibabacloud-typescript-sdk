// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackDeploymentsResponseBodyDeploymentsConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically execute the task. Default value: false. Valid values:
   * - **false**: No.
   * - **true**: Yes.
   * 
   * @example
   * false
   */
  autoApply?: boolean;
  /**
   * @remarks
   * Specifies whether this is a destroy job.
   * 
   * @example
   * false
   */
  isDestroy?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoApply: 'autoApply',
      isDestroy: 'isDestroy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoApply: 'boolean',
      isDestroy: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackDeploymentsResponseBodyDeploymentsOutputs extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * The name of the SLS log project
   */
  description?: string;
  /**
   * @remarks
   * The expression, which can reference component outputs. Format: component.{component name}.{component output name}.
   * 
   * @example
   * component.sls.project_name
   */
  expression?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * project_name
   */
  name?: string;
  /**
   * @remarks
   * The parameter type.
   * 
   * @example
   * string
   */
  type?: string;
  /**
   * @remarks
   * The actual value after the deployment is completed.
   * 
   * @example
   * log-project-xxxx
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      expression: 'expression',
      name: 'name',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expression: 'string',
      name: 'string',
      type: 'string',
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

export class GetStackDeploymentsResponseBodyDeploymentsParameters extends $dara.Model {
  /**
   * @remarks
   * The default value of the parameter.
   * 
   * @example
   * cn-hangzhou
   */
  defaultValue?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * region of the resource
   */
  description?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * region
   */
  name?: string;
  sensitive?: boolean;
  /**
   * @remarks
   * The parameter type.
   * 
   * @example
   * string
   */
  type?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * ap-southeast-6
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'defaultValue',
      description: 'description',
      name: 'name',
      sensitive: 'sensitive',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      description: 'string',
      name: 'string',
      sensitive: 'boolean',
      type: 'string',
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

export class GetStackDeploymentsResponseBodyDeploymentsPlanOutputsModuleActionDetail extends $dara.Model {
  /**
   * @remarks
   * The number of resources to be created.
   * 
   * @example
   * 0
   */
  add?: number;
  /**
   * @remarks
   * The number of resources to be changed.
   * 
   * @example
   * 1
   */
  change?: number;
  /**
   * @remarks
   * The number of resources to be destroyed.
   * 
   * @example
   * 0
   */
  destroy?: number;
  static names(): { [key: string]: string } {
    return {
      add: 'add',
      change: 'change',
      destroy: 'destroy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      add: 'number',
      change: 'number',
      destroy: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackDeploymentsResponseBodyDeploymentsPlanOutputsResourceChanges extends $dara.Model {
  /**
   * @remarks
   * The difference information of the resource change.
   * 
   * @example
   * ~ resource \\"alicloud_log_store\\" \\"default\\" {\\n        id                    = \\"alb-log-project-v1-ph-xxxxx:alb-log-store-ph\\"\\n      ~ max_split_shard_count = 64 -> 32\\n        name                  = \\"alb-log-store-ph\\"\\n\\n        # (13 unchanged attributes hidden)\\n    }
   */
  change?: string;
  /**
   * @remarks
   * The types of resource change actions included in this resource change.
   */
  resourceActions?: string[];
  /**
   * @remarks
   * The unique identifier of the resource.
   * 
   * @example
   * alicloud_log_store.default
   */
  resourceIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      change: 'change',
      resourceActions: 'resourceActions',
      resourceIdentifier: 'resourceIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      change: 'string',
      resourceActions: { 'type': 'array', 'itemType': 'string' },
      resourceIdentifier: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceActions)) {
      $dara.Model.validateArray(this.resourceActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackDeploymentsResponseBodyDeploymentsPlanOutputs extends $dara.Model {
  /**
   * @remarks
   * The change type of the component. Valid values:
   * - create: all resource changes in the component are additions.
   * - delete: all resource changes in the component are deletions.
   * - read: all resource changes in the component are read operations.
   * - update: resource changes in the component include two or more types among additions, deletions, and read operations.
   * 
   * @example
   * update
   */
  moduleAction?: string;
  /**
   * @remarks
   * The number of resources to be added, updated, and destroyed in this deployment.
   */
  moduleActionDetail?: GetStackDeploymentsResponseBodyDeploymentsPlanOutputsModuleActionDetail;
  /**
   * @remarks
   * The resource change information.
   */
  resourceChanges?: GetStackDeploymentsResponseBodyDeploymentsPlanOutputsResourceChanges[];
  /**
   * @remarks
   * The component name of the stack.
   * 
   * @example
   * sls
   */
  stackModuleName?: string;
  static names(): { [key: string]: string } {
    return {
      moduleAction: 'moduleAction',
      moduleActionDetail: 'moduleActionDetail',
      resourceChanges: 'resourceChanges',
      stackModuleName: 'stackModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleAction: 'string',
      moduleActionDetail: GetStackDeploymentsResponseBodyDeploymentsPlanOutputsModuleActionDetail,
      resourceChanges: { 'type': 'array', 'itemType': GetStackDeploymentsResponseBodyDeploymentsPlanOutputsResourceChanges },
      stackModuleName: 'string',
    };
  }

  validate() {
    if(this.moduleActionDetail && typeof (this.moduleActionDetail as any).validate === 'function') {
      (this.moduleActionDetail as any).validate();
    }
    if(Array.isArray(this.resourceChanges)) {
      $dara.Model.validateArray(this.resourceChanges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackDeploymentsResponseBodyDeployments extends $dara.Model {
  /**
   * @remarks
   * The configuration item.
   */
  config?: GetStackDeploymentsResponseBodyDeploymentsConfig;
  /**
   * @remarks
   * The configuration version, such as v1. The initial value is v1. The version number increments each time the stack is updated or refreshed and the configuration changes.
   * 
   * @example
   * v1
   */
  configVersion?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-04-01T12:10:18Z
   */
  createTime?: string;
  /**
   * @remarks
   * The deployment name.
   * 
   * @example
   * production
   */
  deploymentName?: string;
  /**
   * @remarks
   * The deployment number. The deployment number of each stack starts from 1 and increments each time a deployment is triggered.
   * 
   * @example
   * 1
   */
  deploymentNo?: string;
  /**
   * @remarks
   * Deprecated field.
   * 
   * @example
   * v1
   */
  deploymentVersion?: string;
  /**
   * @remarks
   * The execution duration, in milliseconds.
   * 
   * @example
   * 38000
   */
  elapsedTime?: number;
  /**
   * @remarks
   * The execution type.
   * 
   * Manual: manual execution (default).
   * 
   * Auto: automatic execution.
   * 
   * @example
   * Manual
   */
  executeType?: string;
  /**
   * @remarks
   * The failure reason.
   * 
   * @example
   * \\n Error: Invalid value for input variable\\n \\n   on main.tf line 17, in module \\"alb\\":\\n   17:   log_project           = var.log_project.project_name\\n \\n The given value is not suitable for module.alb.var.log_project declared at\\n modules/alb/main.tf:34,1-23: string required.\\n╵\\n
   */
  failedReason?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * job-as154vldqt46mv0ixxxxx
   */
  jobId?: string;
  /**
   * @remarks
   * The outputs.
   */
  outputs?: GetStackDeploymentsResponseBodyDeploymentsOutputs[];
  /**
   * @remarks
   * The parameter set content.
   */
  parameters?: GetStackDeploymentsResponseBodyDeploymentsParameters[];
  /**
   * @remarks
   * The state file output results.
   */
  planOutputs?: GetStackDeploymentsResponseBodyDeploymentsPlanOutputs[];
  /**
   * @remarks
   * The deployment status.
   * | Name | Description |
   * |------|------|
   * | Pending | The initial status after a deployment is created. |
   * | PriorityQueued | The deployment is queued by priority. |
   * | PlanQueued | The deployment is queued because no workflow is available after the deployment is created. |
   * | ApplyQueued | The deployment is queued because no workflow is available during execution. |
   * | Planning | The resource deployment is in the Plan phase. |
   * | Planned | The resource deployment has completed the Plan phase. |
   * | ConfigProactiveInProgress | A compliance pre-check is in progress. |
   * | ConfigProactiveSuccess | The compliance pre-check succeeded. |
   * | DetectInProgress | Drift detection is in progress. |
   * | ImportQueued | The deployment is queued because no workflow is available during the Import phase. |
   * | Importing | The resource deployment is in the Import phase. |
   * | Imported | The resource deployment has completed the Import phase. |
   * | StateQueued | The deployment is queued because no workflow is available during the state command execution. |
   * | Stating | The resource deployment is executing the state command. |
   * | Stated | The resource deployment has completed the state command execution. |
   * | Confirmed | The resource deployment has been confirmed after the Plan phase. |
   * | PlannedAndFinished | No differences were found after the Plan phase. The deployment is in a final status. |
   * | Applying | The resource deployment is in the Apply phase. |
   * | Applied | The resource deployment has completed the Apply phase. |
   * | Discarded | The resource deployment has been discarded and is in a final status. |
   * | Errored | The deployment encountered an error and is in a final status. |
   * | ConfigProactiveFailure | The compliance pre-check failed. |
   * | Canceled | The deployment has been canceled and is in a final status. |.
   * 
   * @example
   * Pending
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * task-as1d4vld8ogb2l32xxxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      configVersion: 'configVersion',
      createTime: 'createTime',
      deploymentName: 'deploymentName',
      deploymentNo: 'deploymentNo',
      deploymentVersion: 'deploymentVersion',
      elapsedTime: 'elapsedTime',
      executeType: 'executeType',
      failedReason: 'failedReason',
      jobId: 'jobId',
      outputs: 'outputs',
      parameters: 'parameters',
      planOutputs: 'planOutputs',
      status: 'status',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: GetStackDeploymentsResponseBodyDeploymentsConfig,
      configVersion: 'string',
      createTime: 'string',
      deploymentName: 'string',
      deploymentNo: 'string',
      deploymentVersion: 'string',
      elapsedTime: 'number',
      executeType: 'string',
      failedReason: 'string',
      jobId: 'string',
      outputs: { 'type': 'array', 'itemType': GetStackDeploymentsResponseBodyDeploymentsOutputs },
      parameters: { 'type': 'array', 'itemType': GetStackDeploymentsResponseBodyDeploymentsParameters },
      planOutputs: { 'type': 'array', 'itemType': GetStackDeploymentsResponseBodyDeploymentsPlanOutputs },
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(Array.isArray(this.outputs)) {
      $dara.Model.validateArray(this.outputs);
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(Array.isArray(this.planOutputs)) {
      $dara.Model.validateArray(this.planOutputs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackDeploymentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The deployment results of the stack.
   */
  deployments?: GetStackDeploymentsResponseBodyDeployments[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BF72A6FB-B071-5F2E-A036-9D62545B962C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      deployments: 'deployments',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployments: { 'type': 'array', 'itemType': GetStackDeploymentsResponseBodyDeployments },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deployments)) {
      $dara.Model.validateArray(this.deployments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

