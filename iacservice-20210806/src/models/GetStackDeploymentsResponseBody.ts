// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackDeploymentsResponseBodyDeploymentsConfig extends $dara.Model {
  /**
   * @example
   * false
   */
  autoApply?: boolean;
  /**
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
   * @example
   * The name of the SLS log project
   */
  description?: string;
  /**
   * @example
   * component.sls.project_name
   */
  expression?: string;
  /**
   * @example
   * project_name
   */
  name?: string;
  /**
   * @example
   * string
   */
  type?: string;
  /**
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
   * @example
   * cn-hangzhou
   */
  defaultValue?: string;
  /**
   * @example
   * region of the resource
   */
  description?: string;
  /**
   * @example
   * region
   */
  name?: string;
  /**
   * @example
   * string
   */
  type?: string;
  /**
   * @example
   * ap-southeast-6
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'defaultValue',
      description: 'description',
      name: 'name',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      description: 'string',
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

export class GetStackDeploymentsResponseBodyDeploymentsPlanOutputsModuleActionDetail extends $dara.Model {
  /**
   * @example
   * 0
   */
  add?: number;
  /**
   * @example
   * 1
   */
  change?: number;
  /**
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
   * @example
   * ~ resource \\"alicloud_log_store\\" \\"default\\" {\\n        id                    = \\"alb-log-project-v1-ph-xxxxx:alb-log-store-ph\\"\\n      ~ max_split_shard_count = 64 -> 32\\n        name                  = \\"alb-log-store-ph\\"\\n\\n        # (13 unchanged attributes hidden)\\n    }
   */
  change?: string;
  resourceActions?: string[];
  /**
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
   * @example
   * update
   */
  moduleAction?: string;
  moduleActionDetail?: GetStackDeploymentsResponseBodyDeploymentsPlanOutputsModuleActionDetail;
  resourceChanges?: GetStackDeploymentsResponseBodyDeploymentsPlanOutputsResourceChanges[];
  /**
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
  config?: GetStackDeploymentsResponseBodyDeploymentsConfig;
  /**
   * @example
   * v1
   */
  configVersion?: string;
  /**
   * @example
   * 2026-04-01T12:10:18Z
   */
  createTime?: string;
  /**
   * @example
   * production
   */
  deploymentName?: string;
  /**
   * @example
   * 1
   */
  deploymentNo?: string;
  /**
   * @example
   * v1
   */
  deploymentVersion?: string;
  /**
   * @example
   * 38000
   */
  elapsedTime?: number;
  /**
   * @example
   * Manual
   */
  executeType?: string;
  /**
   * @example
   * \\n Error: Invalid value for input variable\\n \\n   on main.tf line 17, in module \\"alb\\":\\n   17:   log_project           = var.log_project.project_name\\n \\n The given value is not suitable for module.alb.var.log_project declared at\\n modules/alb/main.tf:34,1-23: string required.\\n╵\\n
   */
  failedReason?: string;
  /**
   * @example
   * job-as154vldqt46mv0ixxxxx
   */
  jobId?: string;
  outputs?: GetStackDeploymentsResponseBodyDeploymentsOutputs[];
  parameters?: GetStackDeploymentsResponseBodyDeploymentsParameters[];
  planOutputs?: GetStackDeploymentsResponseBodyDeploymentsPlanOutputs[];
  /**
   * @example
   * Pending
   */
  status?: string;
  /**
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
  deployments?: GetStackDeploymentsResponseBodyDeployments[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BF72A6FB-B071-5F2E-A036-9D62545B962C
   */
  requestId?: string;
  /**
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

