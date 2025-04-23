// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CreateGroupRequestNotifyConfig extends $dara.Model {
  /**
   * @example
   * /
   */
  notifyPath?: string;
  /**
   * @example
   * DingDing
   */
  notifyType?: string;
  static names(): { [key: string]: string } {
    return {
      notifyPath: 'notifyPath',
      notifyType: 'notifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyPath: 'string',
      notifyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupRequestTriggerConfig extends $dara.Model {
  /**
   * @example
   * Cron
   */
  triggerStrategy?: string;
  /**
   * @example
   * 0 0 19 * * ？
   */
  triggerValue?: string;
  static names(): { [key: string]: string } {
    return {
      triggerStrategy: 'triggerStrategy',
      triggerValue: 'triggerValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      triggerStrategy: 'string',
      triggerValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModuleRequestGroupInfo extends $dara.Model {
  /**
   * @example
   * g-5fd38c9b92d541a7083a86432e2
   */
  groupId?: string;
  /**
   * @example
   * p-433aead75605713865c386cb9d
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      projectId: 'projectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      projectId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParameterSetRequestParameters extends $dara.Model {
  /**
   * @example
   * test1121
   */
  name?: string;
  /**
   * @example
   * string
   */
  type?: string;
  /**
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateProjectBuildRequestTaskPolicies extends $dara.Model {
  /**
   * @example
   * destroyAfterExecution
   */
  destroyAfterExecution?: boolean;
  /**
   * @example
   * 30
   */
  priority?: number;
  /**
   * @example
   * task-60f24b4eb47f1135b7b14ddbdfd
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      destroyAfterExecution: 'destroyAfterExecution',
      priority: 'priority',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destroyAfterExecution: 'boolean',
      priority: 'number',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceExportTaskRequestExcludeRules extends $dara.Model {
  /**
   * @example
   * VPC
   */
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceExportTaskRequestExportToModule extends $dara.Model {
  /**
   * @example
   * Registry
   */
  source?: string;
  /**
   * @example
   * alibaba/security-group/alicloud
   */
  sourcePath?: string;
  /**
   * @example
   * /
   */
  statePath?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'source',
      sourcePath: 'sourcePath',
      statePath: 'statePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      sourcePath: 'string',
      statePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceExportTaskRequestIncludeRules extends $dara.Model {
  /**
   * @example
   * ZoneId
   */
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceExportTaskRequestVariables extends $dara.Model {
  properties?: string[];
  /**
   * @example
   * AliCloud::VPC::VPC
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      properties: 'properties',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      properties: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestGroupInfo extends $dara.Model {
  /**
   * @example
   * g-5fd38c9b92d541a7083a86432e2
   */
  groupId?: string;
  /**
   * @example
   * project-433aead7560572057e5d9167608
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      projectId: 'projectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      projectId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestTaskBackend extends $dara.Model {
  bucketEndpoint?: string;
  bucketName?: string;
  objectPath?: string;
  static names(): { [key: string]: string } {
    return {
      bucketEndpoint: 'bucketEndpoint',
      bucketName: 'bucketName',
      objectPath: 'objectPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketEndpoint: 'string',
      bucketName: 'string',
      objectPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExplorerTaskResponseBodyTaskUploadSignature extends $dara.Model {
  accessKeyId?: string;
  bucketName?: string;
  key?: string;
  policy?: string;
  signature?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'accessKeyId',
      bucketName: 'bucketName',
      key: 'key',
      policy: 'policy',
      signature: 'signature',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      bucketName: 'string',
      key: 'string',
      policy: 'string',
      signature: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExplorerTaskResponseBodyTask extends $dara.Model {
  autoApply?: boolean;
  autoDestroy?: boolean;
  createTime?: string;
  currentJobId?: string;
  description?: string;
  explorerTaskId?: string;
  initModuleState?: boolean;
  moduleId?: string;
  moduleVersion?: string;
  name?: string;
  skipPropertyValidation?: boolean;
  status?: string;
  taskOutputPath?: string;
  terraformVersion?: string;
  triggerValue?: string;
  uploadSignature?: GetExplorerTaskResponseBodyTaskUploadSignature;
  static names(): { [key: string]: string } {
    return {
      autoApply: 'autoApply',
      autoDestroy: 'autoDestroy',
      createTime: 'createTime',
      currentJobId: 'currentJobId',
      description: 'description',
      explorerTaskId: 'explorerTaskId',
      initModuleState: 'initModuleState',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      name: 'name',
      skipPropertyValidation: 'skipPropertyValidation',
      status: 'status',
      taskOutputPath: 'taskOutputPath',
      terraformVersion: 'terraformVersion',
      triggerValue: 'triggerValue',
      uploadSignature: 'uploadSignature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoApply: 'boolean',
      autoDestroy: 'boolean',
      createTime: 'string',
      currentJobId: 'string',
      description: 'string',
      explorerTaskId: 'string',
      initModuleState: 'boolean',
      moduleId: 'string',
      moduleVersion: 'string',
      name: 'string',
      skipPropertyValidation: 'boolean',
      status: 'string',
      taskOutputPath: 'string',
      terraformVersion: 'string',
      triggerValue: 'string',
      uploadSignature: GetExplorerTaskResponseBodyTaskUploadSignature,
    };
  }

  validate() {
    if(this.uploadSignature && typeof (this.uploadSignature as any).validate === 'function') {
      (this.uploadSignature as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResponseBodyGroupNotifyConfig extends $dara.Model {
  /**
   * @example
   * /
   */
  notifyPath?: string;
  /**
   * @example
   * DingDing
   */
  notifyType?: string;
  static names(): { [key: string]: string } {
    return {
      notifyPath: 'notifyPath',
      notifyType: 'notifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyPath: 'string',
      notifyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResponseBodyGroupTriggerConfig extends $dara.Model {
  /**
   * @example
   * Cron
   */
  triggerStrategy?: string;
  /**
   * @example
   * 0 0 8 * * ?
   */
  triggerValue?: string;
  static names(): { [key: string]: string } {
    return {
      triggerStrategy: 'triggerStrategy',
      triggerValue: 'triggerValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      triggerStrategy: 'string',
      triggerValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResponseBodyGroup extends $dara.Model {
  /**
   * @example
   * true
   */
  autoDestroy?: boolean;
  /**
   * @example
   * true
   */
  autoTrigger?: boolean;
  /**
   * @example
   * 2022-08-21T10:57:11Z
   */
  createTime?: string;
  /**
   * @example
   * OK
   */
  description?: string;
  /**
   * @example
   * true
   */
  forcedSetting?: boolean;
  /**
   * @example
   * g-14e80de4866bf7ffed0bab6154d738
   */
  groupId?: string;
  /**
   * @example
   * abc
   */
  name?: string;
  notifyConfig?: GetGroupResponseBodyGroupNotifyConfig[];
  notifyOperationTypes?: string[];
  /**
   * @example
   * p-4267dcfbf1b6d126edcadf0e949
   */
  projectId?: string;
  /**
   * @example
   * ramRoleName
   */
  ramRole?: string;
  reportExportField?: string[];
  /**
   * @example
   * /
   */
  reportExportPath?: string;
  /**
   * @example
   * 3
   */
  taskCnt?: number;
  /**
   * @example
   * 1.191.0
   */
  terraformProviderVersion?: string;
  triggerConfig?: GetGroupResponseBodyGroupTriggerConfig[];
  triggerResourceType?: string[];
  static names(): { [key: string]: string } {
    return {
      autoDestroy: 'autoDestroy',
      autoTrigger: 'autoTrigger',
      createTime: 'createTime',
      description: 'description',
      forcedSetting: 'forcedSetting',
      groupId: 'groupId',
      name: 'name',
      notifyConfig: 'notifyConfig',
      notifyOperationTypes: 'notifyOperationTypes',
      projectId: 'projectId',
      ramRole: 'ramRole',
      reportExportField: 'reportExportField',
      reportExportPath: 'reportExportPath',
      taskCnt: 'taskCnt',
      terraformProviderVersion: 'terraformProviderVersion',
      triggerConfig: 'triggerConfig',
      triggerResourceType: 'triggerResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDestroy: 'boolean',
      autoTrigger: 'boolean',
      createTime: 'string',
      description: 'string',
      forcedSetting: 'boolean',
      groupId: 'string',
      name: 'string',
      notifyConfig: { 'type': 'array', 'itemType': GetGroupResponseBodyGroupNotifyConfig },
      notifyOperationTypes: { 'type': 'array', 'itemType': 'string' },
      projectId: 'string',
      ramRole: 'string',
      reportExportField: { 'type': 'array', 'itemType': 'string' },
      reportExportPath: 'string',
      taskCnt: 'number',
      terraformProviderVersion: 'string',
      triggerConfig: { 'type': 'array', 'itemType': GetGroupResponseBodyGroupTriggerConfig },
      triggerResourceType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.notifyConfig)) {
      $dara.Model.validateArray(this.notifyConfig);
    }
    if(Array.isArray(this.notifyOperationTypes)) {
      $dara.Model.validateArray(this.notifyOperationTypes);
    }
    if(Array.isArray(this.reportExportField)) {
      $dara.Model.validateArray(this.reportExportField);
    }
    if(Array.isArray(this.triggerConfig)) {
      $dara.Model.validateArray(this.triggerConfig);
    }
    if(Array.isArray(this.triggerResourceType)) {
      $dara.Model.validateArray(this.triggerResourceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobAssertCheckDetail extends $dara.Model {
  /**
   * @example
   * eq
   */
  comparison?: string;
  expectedValue?: string;
  /**
   * @example
   * true
   */
  isPass?: boolean;
  /**
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
   * @example
   * true
   */
  autoApply?: boolean;
  /**
   * @example
   * fales
   */
  isDestroy?: boolean;
  /**
   * @example
   * v1
   */
  moduleVersion?: string;
  /**
   * @example
   * {}
   */
  resourcesChanged?: string;
  subCommand?: string;
  static names(): { [key: string]: string } {
    return {
      autoApply: 'autoApply',
      isDestroy: 'isDestroy',
      moduleVersion: 'moduleVersion',
      resourcesChanged: 'resourcesChanged',
      subCommand: 'subCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoApply: 'boolean',
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
  assertCheckDetail?: GetJobResponseBodyJobAssertCheckDetail[];
  config?: GetJobResponseBodyJobConfig;
  /**
   * @example
   * 2022-08-31T03:38:40Z
   */
  createTime?: string;
  /**
   * @example
   * test1
   */
  description?: string;
  downloadUrl?: { [key: string]: any };
  elapsedTime?: number;
  executeType?: string;
  /**
   * @example
   * true
   */
  isPassAssertCheck?: boolean;
  /**
   * @example
   * job-518855d9a058cfff0dc933e6b5767
   */
  jobId?: string;
  /**
   * @example
   * /
   */
  output?: string;
  parameters?: { [key: string]: string };
  runtimeType?: string;
  /**
   * @example
   * Errored
   */
  status?: string;
  statusDetail?: { [key: string]: JobStatusDetailValue };
  /**
   * @example
   * task-3b6cb9fa4751a1b9b5f22cbcf4e
   */
  taskId?: string;
  taskType?: string;
  terraformProviderVersion?: string;
  static names(): { [key: string]: string } {
    return {
      assertCheckDetail: 'assertCheckDetail',
      config: 'config',
      createTime: 'createTime',
      description: 'description',
      downloadUrl: 'downloadUrl',
      elapsedTime: 'elapsedTime',
      executeType: 'executeType',
      isPassAssertCheck: 'isPassAssertCheck',
      jobId: 'jobId',
      output: 'output',
      parameters: 'parameters',
      runtimeType: 'runtimeType',
      status: 'status',
      statusDetail: 'statusDetail',
      taskId: 'taskId',
      taskType: 'taskType',
      terraformProviderVersion: 'terraformProviderVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assertCheckDetail: { 'type': 'array', 'itemType': GetJobResponseBodyJobAssertCheckDetail },
      config: GetJobResponseBodyJobConfig,
      createTime: 'string',
      description: 'string',
      downloadUrl: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      elapsedTime: 'number',
      executeType: 'string',
      isPassAssertCheck: 'boolean',
      jobId: 'string',
      output: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      runtimeType: 'string',
      status: 'string',
      statusDetail: { 'type': 'map', 'keyType': 'string', 'valueType': JobStatusDetailValue },
      taskId: 'string',
      taskType: 'string',
      terraformProviderVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assertCheckDetail)) {
      $dara.Model.validateArray(this.assertCheckDetail);
    }
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.downloadUrl) {
      $dara.Model.validateMap(this.downloadUrl);
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

export class GetModuleResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 2022-09-06T06:11:27Z
   */
  createTime?: string;
  /**
   * @example
   * test1
   */
  description?: string;
  /**
   * @example
   * v1
   */
  latestVersion?: string;
  /**
   * @example
   * mod-4267dcfbf1b6d14625614ddbe15
   */
  moduleId?: string;
  /**
   * @example
   * abc
   */
  name?: string;
  /**
   * @example
   * /
   */
  outputPath?: string;
  /**
   * @example
   * OSS
   */
  source?: string;
  /**
   * @example
   * OSS：
   * "oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip"
   * Registry：
   * "alibaba/security-group/alicloud:2.1.0"
   */
  sourcePath?: string;
  /**
   * @example
   * oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/terraform.tfstate
   */
  statePath?: string;
  /**
   * @example
   * Created
   */
  status?: string;
  /**
   * @example
   * Manual
   */
  versionStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      latestVersion: 'latestVersion',
      moduleId: 'moduleId',
      name: 'name',
      outputPath: 'outputPath',
      source: 'source',
      sourcePath: 'sourcePath',
      statePath: 'statePath',
      status: 'status',
      versionStrategy: 'versionStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      latestVersion: 'string',
      moduleId: 'string',
      name: 'string',
      outputPath: 'string',
      source: 'string',
      sourcePath: 'string',
      statePath: 'string',
      status: 'string',
      versionStrategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModuleVersionResponseBodyVersion extends $dara.Model {
  /**
   * @example
   * 2022-09-08T18:07:40Z
   */
  createTime?: string;
  /**
   * @example
   * description
   */
  description?: string;
  /**
   * @example
   * mod-4267dcfbf1b6dfffbc27e218d1b66
   */
  moduleId?: string;
  /**
   * @example
   * v1
   */
  moduleVersion?: string;
  name?: string;
  /**
   * @example
   * OSS
   */
  source?: string;
  /**
   * @example
   * oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip
   */
  sourcePath?: string;
  /**
   * @example
   * oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/terraform.tfstate
   */
  statePath?: string;
  terraformContext?: { [key: string]: any };
  /**
   * @example
   * Manual
   */
  versionStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      name: 'name',
      source: 'source',
      sourcePath: 'sourcePath',
      statePath: 'statePath',
      terraformContext: 'terraformContext',
      versionStrategy: 'versionStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      moduleId: 'string',
      moduleVersion: 'string',
      name: 'string',
      source: 'string',
      sourcePath: 'string',
      statePath: 'string',
      terraformContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      versionStrategy: 'string',
    };
  }

  validate() {
    if(this.terraformContext) {
      $dara.Model.validateMap(this.terraformContext);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParameterSetResponseBodyParameterSetParameters extends $dara.Model {
  /**
   * @example
   * test1121
   */
  name?: string;
  /**
   * @example
   * string
   */
  type?: string;
  /**
   * @example
   * vpc-2ze83xrka9ktxy0pnaxn5
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParameterSetResponseBodyParameterSetRelationList extends $dara.Model {
  /**
   * @example
   * 2022-04-24T22:58:50Z
   */
  createTime?: string;
  /**
   * @example
   * mod-433aead756057101546eb5d50c1
   */
  resourceId?: string;
  /**
   * @example
   * Module
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParameterSetResponseBodyParameterSet extends $dara.Model {
  /**
   * @example
   * 2022-01-30T02:14:16Z
   */
  createTime?: string;
  /**
   * @example
   * OK
   */
  description?: string;
  /**
   * @example
   * abc
   */
  name?: string;
  /**
   * @example
   * pts-3b6cb9fa4751afff9c5e4e01624b9
   */
  parameterSetId?: string;
  parameters?: GetParameterSetResponseBodyParameterSetParameters[];
  relationList?: GetParameterSetResponseBodyParameterSetRelationList[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      name: 'name',
      parameterSetId: 'parameterSetId',
      parameters: 'parameters',
      relationList: 'relationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      name: 'string',
      parameterSetId: 'string',
      parameters: { 'type': 'array', 'itemType': GetParameterSetResponseBodyParameterSetParameters },
      relationList: { 'type': 'array', 'itemType': GetParameterSetResponseBodyParameterSetRelationList },
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(Array.isArray(this.relationList)) {
      $dara.Model.validateArray(this.relationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyProject extends $dara.Model {
  /**
   * @example
   * 2022-09-06T06:11:27Z
   */
  createTime?: string;
  /**
   * @example
   * abc
   */
  description?: string;
  /**
   * @example
   * abc
   */
  name?: string;
  /**
   * @example
   * p-433aead7560572f8d95b25775c
   */
  projectId?: string;
  /**
   * @example
   * 2
   */
  taskCnt?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      name: 'name',
      projectId: 'projectId',
      taskCnt: 'taskCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      name: 'string',
      projectId: 'string',
      taskCnt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectBuildContextResponseBodyProjectBuildJobList extends $dara.Model {
  elapsedTime?: number;
  /**
   * @example
   * 0
   */
  isDeleted?: number;
  isPassAssertCheck?: boolean;
  /**
   * @example
   * job-518855d9a058cfff262b993646d12
   */
  jobId?: string;
  /**
   * @example
   * mod-3b6cb9fa4751a107afd6c2c3eb9
   */
  moduleId?: string;
  moduleName?: string;
  /**
   * @example
   * v1
   */
  moduleVersion?: string;
  /**
   * @example
   * test7
   */
  name?: string;
  /**
   * @example
   * Pending
   */
  status?: string;
  /**
   * @example
   * task-433aead756057ffe67aefed4aa75d
   */
  taskId?: string;
  terraformProviderVersion?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      elapsedTime: 'elapsedTime',
      isDeleted: 'isDeleted',
      isPassAssertCheck: 'isPassAssertCheck',
      jobId: 'jobId',
      moduleId: 'moduleId',
      moduleName: 'moduleName',
      moduleVersion: 'moduleVersion',
      name: 'name',
      status: 'status',
      taskId: 'taskId',
      terraformProviderVersion: 'terraformProviderVersion',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elapsedTime: 'number',
      isDeleted: 'number',
      isPassAssertCheck: 'boolean',
      jobId: 'string',
      moduleId: 'string',
      moduleName: 'string',
      moduleVersion: 'string',
      name: 'string',
      status: 'string',
      taskId: 'string',
      terraformProviderVersion: 'string',
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

export class GetProjectBuildContextResponseBodyProjectBuildResourceList extends $dara.Model {
  info?: { [key: string]: string };
  /**
   * @example
   * 1
   */
  resourceCnt?: number;
  /**
   * @example
   * Module
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      info: 'info',
      resourceCnt: 'resourceCnt',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      resourceCnt: 'number',
      resourceType: 'string',
    };
  }

  validate() {
    if(this.info) {
      $dara.Model.validateMap(this.info);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectBuildContextResponseBodyProjectBuild extends $dara.Model {
  /**
   * @example
   * 1646719546155
   */
  endTime?: string;
  /**
   * @example
   * 2
   */
  failCnt?: number;
  jobList?: GetProjectBuildContextResponseBodyProjectBuildJobList[];
  /**
   * @example
   * 3
   */
  jobTotalCnt?: number;
  /**
   * @example
   * pb-4267dcfbf1b6d13c7d2386cba7
   */
  projectBuildId?: string;
  /**
   * @example
   * p-4267dcfbf1b6d1e0652bfbbe994
   */
  projectId?: string;
  /**
   * @example
   * 0
   */
  resourceCnt?: number;
  resourceList?: GetProjectBuildContextResponseBodyProjectBuildResourceList[];
  /**
   * @example
   * 0
   */
  resourceTypeCnt?: number;
  /**
   * @example
   * Pending
   */
  status?: string;
  /**
   * @example
   * 1
   */
  successCnt?: number;
  terraformProviderVersion?: string;
  triggerStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      failCnt: 'failCnt',
      jobList: 'jobList',
      jobTotalCnt: 'jobTotalCnt',
      projectBuildId: 'projectBuildId',
      projectId: 'projectId',
      resourceCnt: 'resourceCnt',
      resourceList: 'resourceList',
      resourceTypeCnt: 'resourceTypeCnt',
      status: 'status',
      successCnt: 'successCnt',
      terraformProviderVersion: 'terraformProviderVersion',
      triggerStrategy: 'triggerStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      failCnt: 'number',
      jobList: { 'type': 'array', 'itemType': GetProjectBuildContextResponseBodyProjectBuildJobList },
      jobTotalCnt: 'number',
      projectBuildId: 'string',
      projectId: 'string',
      resourceCnt: 'number',
      resourceList: { 'type': 'array', 'itemType': GetProjectBuildContextResponseBodyProjectBuildResourceList },
      resourceTypeCnt: 'number',
      status: 'string',
      successCnt: 'number',
      terraformProviderVersion: 'string',
      triggerStrategy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobList)) {
      $dara.Model.validateArray(this.jobList);
    }
    if(Array.isArray(this.resourceList)) {
      $dara.Model.validateArray(this.resourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRabbitmqPublisherResponseBodyPublisher extends $dara.Model {
  /**
   * @example
   * 2022-10-05T06:07:48Z
   */
  createTime?: string;
  /**
   * @example
   * description
   */
  description?: string;
  /**
   * @example
   * ExchangeTest
   */
  exchangeName?: string;
  /**
   * @example
   * TOPIC
   */
  exchangeType?: string;
  /**
   * @example
   * 1880770****.mq-amqp.cn-hangzhou-a.aliyuncs.com
   */
  hostName?: string;
  /**
   * @example
   * test123
   */
  name?: string;
  /**
   * @example
   * 5671
   */
  port?: number;
  /**
   * @example
   * mqp-3b6cb9fa4751a6fa1b69b8dca1
   */
  publisherId?: string;
  taskIds?: string[];
  /**
   * @example
   * MjoxODgwNzcwODY5MD****
   */
  userName?: string;
  /**
   * @example
   * MjoxODgwNzcwODY5MD****
   */
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      exchangeName: 'exchangeName',
      exchangeType: 'exchangeType',
      hostName: 'hostName',
      name: 'name',
      port: 'port',
      publisherId: 'publisherId',
      taskIds: 'taskIds',
      userName: 'userName',
      virtualHost: 'virtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      exchangeName: 'string',
      exchangeType: 'string',
      hostName: 'string',
      name: 'string',
      port: 'number',
      publisherId: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
      userName: 'string',
      virtualHost: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRamPolicyExportTaskResponseBodyRamPolicyExportTask extends $dara.Model {
  authorizationAccountIds?: number[];
  authorizationActions?: string[];
  authorizationRegionIds?: string[];
  /**
   * @example
   * 2022-06-16T10:03:39Z
   */
  createTime?: string;
  /**
   * @example
   * mod-66c23a9cc0cacddf
   */
  moduleId?: string;
  /**
   * @example
   * v1
   */
  moduleVersion?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * rpe-40252e48f9286a
   */
  ramPolicyExportTaskId?: string;
  /**
   * @example
   * ramName
   */
  ramRole?: string;
  /**
   * @example
   * Available
   */
  status?: string;
  /**
   * @example
   * 12345678/default/rampolicytask/rpe-4399111870d7e6b0f11a
   */
  taskOutputPath?: string;
  terraformProviderVersion?: string;
  /**
   * @example
   * Manual
   */
  triggerStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationAccountIds: 'authorizationAccountIds',
      authorizationActions: 'authorizationActions',
      authorizationRegionIds: 'authorizationRegionIds',
      createTime: 'createTime',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      name: 'name',
      ramPolicyExportTaskId: 'ramPolicyExportTaskId',
      ramRole: 'ramRole',
      status: 'status',
      taskOutputPath: 'taskOutputPath',
      terraformProviderVersion: 'terraformProviderVersion',
      triggerStrategy: 'triggerStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationAccountIds: { 'type': 'array', 'itemType': 'number' },
      authorizationActions: { 'type': 'array', 'itemType': 'string' },
      authorizationRegionIds: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      moduleId: 'string',
      moduleVersion: 'string',
      name: 'string',
      ramPolicyExportTaskId: 'string',
      ramRole: 'string',
      status: 'string',
      taskOutputPath: 'string',
      terraformProviderVersion: 'string',
      triggerStrategy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authorizationAccountIds)) {
      $dara.Model.validateArray(this.authorizationAccountIds);
    }
    if(Array.isArray(this.authorizationActions)) {
      $dara.Model.validateArray(this.authorizationActions);
    }
    if(Array.isArray(this.authorizationRegionIds)) {
      $dara.Model.validateArray(this.authorizationRegionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRamPolicyExportTaskVersionResponseBodyRamPolicyExportTaskVersion extends $dara.Model {
  authorizationAccountIds?: number[];
  authorizationActions?: string[];
  authorizationRegionIds?: string[];
  /**
   * @example
   * 2022-07-18T06:32:06Z
   */
  createTime?: string;
  elapsedTime?: number;
  /**
   * @example
   * v1
   */
  exportVersion?: string;
  /**
   * @example
   * the ram policy export task has time out, The maximum running time is 1 hour
   */
  failedReason?: string;
  missingActions?: string[];
  /**
   * @example
   * mod-4357ffeebf6b577c4afa
   */
  moduleId?: string;
  /**
   * @example
   * v1
   */
  moduleVersion?: string;
  noSupportResourceTypes?: string[];
  /**
   * @example
   * "{
   *     "version": "1",
   *     "statement": [
   *       {
   *         "effect": "Allow",
   *         "action": [
   *           "ecs:*"
   *         ],
   *         "resource": [
   *           "*"
   *         ],
   *         "condition": null,
   *         "supportVariables": []
   *       }
   *     ]
   *   }"
   */
  policyDocument?: string;
  /**
   * @example
   * rpe-43ffe0252e48f9286a
   */
  ramPolicyExportTaskId?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  terraformProviderVersion?: string;
  unauthorizedActions?: string[];
  warnMessage?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationAccountIds: 'authorizationAccountIds',
      authorizationActions: 'authorizationActions',
      authorizationRegionIds: 'authorizationRegionIds',
      createTime: 'createTime',
      elapsedTime: 'elapsedTime',
      exportVersion: 'exportVersion',
      failedReason: 'failedReason',
      missingActions: 'missingActions',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      noSupportResourceTypes: 'noSupportResourceTypes',
      policyDocument: 'policyDocument',
      ramPolicyExportTaskId: 'ramPolicyExportTaskId',
      status: 'status',
      terraformProviderVersion: 'terraformProviderVersion',
      unauthorizedActions: 'unauthorizedActions',
      warnMessage: 'warnMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationAccountIds: { 'type': 'array', 'itemType': 'number' },
      authorizationActions: { 'type': 'array', 'itemType': 'string' },
      authorizationRegionIds: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      elapsedTime: 'number',
      exportVersion: 'string',
      failedReason: 'string',
      missingActions: { 'type': 'array', 'itemType': 'string' },
      moduleId: 'string',
      moduleVersion: 'string',
      noSupportResourceTypes: { 'type': 'array', 'itemType': 'string' },
      policyDocument: 'string',
      ramPolicyExportTaskId: 'string',
      status: 'string',
      terraformProviderVersion: 'string',
      unauthorizedActions: { 'type': 'array', 'itemType': 'string' },
      warnMessage: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authorizationAccountIds)) {
      $dara.Model.validateArray(this.authorizationAccountIds);
    }
    if(Array.isArray(this.authorizationActions)) {
      $dara.Model.validateArray(this.authorizationActions);
    }
    if(Array.isArray(this.authorizationRegionIds)) {
      $dara.Model.validateArray(this.authorizationRegionIds);
    }
    if(Array.isArray(this.missingActions)) {
      $dara.Model.validateArray(this.missingActions);
    }
    if(Array.isArray(this.noSupportResourceTypes)) {
      $dara.Model.validateArray(this.noSupportResourceTypes);
    }
    if(Array.isArray(this.unauthorizedActions)) {
      $dara.Model.validateArray(this.unauthorizedActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceExportTaskResponseBodyTaskExcludeRules extends $dara.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceExportTaskResponseBodyTaskExportToModule extends $dara.Model {
  source?: string;
  sourcePath?: string;
  statePath?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'source',
      sourcePath: 'sourcePath',
      statePath: 'statePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      sourcePath: 'string',
      statePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceExportTaskResponseBodyTaskIncludeRules extends $dara.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceExportTaskResponseBodyTaskModules extends $dara.Model {
  source?: string;
  sourcePath?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'source',
      sourcePath: 'sourcePath',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      sourcePath: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceExportTaskResponseBodyTaskVariables extends $dara.Model {
  properties?: string[];
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      properties: 'properties',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      properties: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceExportTaskResponseBodyTask extends $dara.Model {
  configPath?: string;
  createTime?: string;
  description?: string;
  elapsedTime?: number;
  excludeRules?: GetResourceExportTaskResponseBodyTaskExcludeRules[];
  exportTaskId?: string;
  exportToModule?: GetResourceExportTaskResponseBodyTaskExportToModule;
  exportVersion?: string;
  failedReason?: string;
  includeRules?: GetResourceExportTaskResponseBodyTaskIncludeRules[];
  modules?: GetResourceExportTaskResponseBodyTaskModules[];
  name?: string;
  ramRole?: string;
  status?: string;
  taskOutputPath?: string;
  terraformContext?: { [key: string]: any };
  terraformProviderVersion?: string;
  terraformVersion?: string;
  triggerStrategy?: string;
  variables?: GetResourceExportTaskResponseBodyTaskVariables[];
  static names(): { [key: string]: string } {
    return {
      configPath: 'configPath',
      createTime: 'createTime',
      description: 'description',
      elapsedTime: 'elapsedTime',
      excludeRules: 'excludeRules',
      exportTaskId: 'exportTaskId',
      exportToModule: 'exportToModule',
      exportVersion: 'exportVersion',
      failedReason: 'failedReason',
      includeRules: 'includeRules',
      modules: 'modules',
      name: 'name',
      ramRole: 'ramRole',
      status: 'status',
      taskOutputPath: 'taskOutputPath',
      terraformContext: 'terraformContext',
      terraformProviderVersion: 'terraformProviderVersion',
      terraformVersion: 'terraformVersion',
      triggerStrategy: 'triggerStrategy',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configPath: 'string',
      createTime: 'string',
      description: 'string',
      elapsedTime: 'number',
      excludeRules: { 'type': 'array', 'itemType': GetResourceExportTaskResponseBodyTaskExcludeRules },
      exportTaskId: 'string',
      exportToModule: GetResourceExportTaskResponseBodyTaskExportToModule,
      exportVersion: 'string',
      failedReason: 'string',
      includeRules: { 'type': 'array', 'itemType': GetResourceExportTaskResponseBodyTaskIncludeRules },
      modules: { 'type': 'array', 'itemType': GetResourceExportTaskResponseBodyTaskModules },
      name: 'string',
      ramRole: 'string',
      status: 'string',
      taskOutputPath: 'string',
      terraformContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      terraformProviderVersion: 'string',
      terraformVersion: 'string',
      triggerStrategy: 'string',
      variables: { 'type': 'array', 'itemType': GetResourceExportTaskResponseBodyTaskVariables },
    };
  }

  validate() {
    if(Array.isArray(this.excludeRules)) {
      $dara.Model.validateArray(this.excludeRules);
    }
    if(this.exportToModule && typeof (this.exportToModule as any).validate === 'function') {
      (this.exportToModule as any).validate();
    }
    if(Array.isArray(this.includeRules)) {
      $dara.Model.validateArray(this.includeRules);
    }
    if(Array.isArray(this.modules)) {
      $dara.Model.validateArray(this.modules);
    }
    if(this.terraformContext) {
      $dara.Model.validateMap(this.terraformContext);
    }
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBodyTaskGroupInfo extends $dara.Model {
  /**
   * @example
   * g-59d8d22e78792ffe3d3eb6154d727
   */
  groupId?: string;
  /**
   * @example
   * abc
   */
  groupName?: string;
  /**
   * @example
   * p-433aead756057fff47ecbfd94d76
   */
  projectId?: string;
  /**
   * @example
   * abc
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      groupName: 'groupName',
      projectId: 'projectId',
      projectName: 'projectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      projectId: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBodyTask extends $dara.Model {
  /**
   * @example
   * true
   */
  autoApply?: boolean;
  /**
   * @example
   * false
   */
  autoDestroy?: boolean;
  /**
   * @example
   * 2022-06-15T02:44:37Z
   */
  createTime?: string;
  /**
   * @example
   * job-absdf
   */
  currentJobId?: string;
  /**
   * @example
   * demo
   */
  description?: string;
  groupInfo?: GetTaskResponseBodyTaskGroupInfo;
  initModuleState?: boolean;
  /**
   * @example
   * mod-4267dcfbf1b6d14625614ddbe15
   */
  moduleId?: string;
  /**
   * @example
   * v2
   */
  moduleVersion?: string;
  name?: string;
  parameters?: { [key: string]: string };
  protectionStrategy?: string[];
  /**
   * @example
   * {}
   */
  ramRole?: string;
  skipPropertyValidation?: boolean;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * task-433aead756057154bda7f1c2e98
   */
  taskId?: string;
  /**
   * @example
   * /
   */
  taskOutputPath?: string;
  /**
   * @example
   * 1.2.6
   */
  terraformVersion?: string;
  /**
   * @example
   * Manual
   */
  triggerStrategy?: string;
  /**
   * @example
   * ***10*
   */
  triggerValue?: string;
  static names(): { [key: string]: string } {
    return {
      autoApply: 'autoApply',
      autoDestroy: 'autoDestroy',
      createTime: 'createTime',
      currentJobId: 'currentJobId',
      description: 'description',
      groupInfo: 'groupInfo',
      initModuleState: 'initModuleState',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      name: 'name',
      parameters: 'parameters',
      protectionStrategy: 'protectionStrategy',
      ramRole: 'ramRole',
      skipPropertyValidation: 'skipPropertyValidation',
      status: 'status',
      taskId: 'taskId',
      taskOutputPath: 'taskOutputPath',
      terraformVersion: 'terraformVersion',
      triggerStrategy: 'triggerStrategy',
      triggerValue: 'triggerValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoApply: 'boolean',
      autoDestroy: 'boolean',
      createTime: 'string',
      currentJobId: 'string',
      description: 'string',
      groupInfo: GetTaskResponseBodyTaskGroupInfo,
      initModuleState: 'boolean',
      moduleId: 'string',
      moduleVersion: 'string',
      name: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      protectionStrategy: { 'type': 'array', 'itemType': 'string' },
      ramRole: 'string',
      skipPropertyValidation: 'boolean',
      status: 'string',
      taskId: 'string',
      taskOutputPath: 'string',
      terraformVersion: 'string',
      triggerStrategy: 'string',
      triggerValue: 'string',
    };
  }

  validate() {
    if(this.groupInfo && typeof (this.groupInfo as any).validate === 'function') {
      (this.groupInfo as any).validate();
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    if(Array.isArray(this.protectionStrategy)) {
      $dara.Model.validateArray(this.protectionStrategy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskPolicyResponseBodyTaskPolicyTaskPolicies extends $dara.Model {
  /**
   * @example
   * 5
   */
  priority?: number;
  /**
   * @example
   * task-433aead7560571d0938bfbbe957
   */
  taskId?: string;
  taskName?: string;
  /**
   * @example
   * SceneTestingTask
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      priority: 'priority',
      taskId: 'taskId',
      taskName: 'taskName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priority: 'number',
      taskId: 'string',
      taskName: 'string',
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

export class GetTaskPolicyResponseBodyTaskPolicy extends $dara.Model {
  /**
   * @example
   * g-433aead7560571e66e31274ffd3
   */
  groupId?: string;
  taskPolicies?: GetTaskPolicyResponseBodyTaskPolicyTaskPolicies[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      taskPolicies: 'taskPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      taskPolicies: { 'type': 'array', 'itemType': GetTaskPolicyResponseBodyTaskPolicyTaskPolicies },
    };
  }

  validate() {
    if(Array.isArray(this.taskPolicies)) {
      $dara.Model.validateArray(this.taskPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationsResponseBodyAuthorizations extends $dara.Model {
  /**
   * @example
   * auth-433aead756057ffee37b763564fdd
   */
  authorizationId?: string;
  /**
   * @example
   * 2022-06-16T03:41:34Z
   */
  createTime?: string;
  dueTime?: string;
  /**
   * @example
   * mod-395f8626622affff71ccbf5b25885
   */
  moduleId?: string;
  /**
   * @example
   * v1
   */
  moduleVersion?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * aadfaf
   */
  ownerUid?: number;
  /**
   * @example
   * asdf123
   */
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationId: 'authorizationId',
      createTime: 'createTime',
      dueTime: 'dueTime',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      name: 'name',
      ownerUid: 'ownerUid',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationId: 'string',
      createTime: 'string',
      dueTime: 'string',
      moduleId: 'string',
      moduleVersion: 'string',
      name: 'string',
      ownerUid: 'number',
      uid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExplorerTasksResponseBodyTasks extends $dara.Model {
  autoApply?: boolean;
  createTime?: string;
  currentJobId?: string;
  currentJobStatus?: string;
  deletionProtection?: boolean;
  moduleId?: string;
  moduleName?: string;
  moduleVersion?: string;
  name?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      autoApply: 'autoApply',
      createTime: 'createTime',
      currentJobId: 'currentJobId',
      currentJobStatus: 'currentJobStatus',
      deletionProtection: 'deletionProtection',
      moduleId: 'moduleId',
      moduleName: 'moduleName',
      moduleVersion: 'moduleVersion',
      name: 'name',
      status: 'status',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoApply: 'boolean',
      createTime: 'string',
      currentJobId: 'string',
      currentJobStatus: 'string',
      deletionProtection: 'boolean',
      moduleId: 'string',
      moduleName: 'string',
      moduleVersion: 'string',
      name: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupRequestTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class ListGroupResponseBodyGroupsTags extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class ListGroupResponseBodyGroups extends $dara.Model {
  /**
   * @example
   * 2022-09-14T07:19:13Z
   */
  createTime?: string;
  /**
   * @example
   * OK
   */
  description?: string;
  /**
   * @example
   * g-148e7853433574fffe9fec72ed9b73
   */
  groupId?: string;
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @example
   * 1
   */
  moduleCnt?: number;
  /**
   * @example
   * 1
   */
  name?: string;
  /**
   * @example
   * p-4267dcfbf1b6d126edcadf0e949
   */
  projectId?: string;
  /**
   * @example
   * 1
   */
  sceneTestingTaskCnt?: number;
  tags?: ListGroupResponseBodyGroupsTags[];
  /**
   * @example
   * 3
   */
  taskCnt?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      groupId: 'groupId',
      isDefault: 'isDefault',
      moduleCnt: 'moduleCnt',
      name: 'name',
      projectId: 'projectId',
      sceneTestingTaskCnt: 'sceneTestingTaskCnt',
      tags: 'tags',
      taskCnt: 'taskCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      groupId: 'string',
      isDefault: 'boolean',
      moduleCnt: 'number',
      name: 'string',
      projectId: 'string',
      sceneTestingTaskCnt: 'number',
      tags: { 'type': 'array', 'itemType': ListGroupResponseBodyGroupsTags },
      taskCnt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobsConfig extends $dara.Model {
  isDestroy?: boolean;
  /**
   * @example
   * v4
   */
  moduleVersion?: string;
  /**
   * @example
   * {}
   */
  resourcesChanged?: string;
  subCommand?: string;
  static names(): { [key: string]: string } {
    return {
      isDestroy: 'isDestroy',
      moduleVersion: 'moduleVersion',
      resourcesChanged: 'resourcesChanged',
      subCommand: 'subCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListJobsResponseBodyJobs extends $dara.Model {
  config?: ListJobsResponseBodyJobsConfig;
  /**
   * @example
   * 2022-07-05T02:13:43Z
   */
  createTime?: string;
  /**
   * @example
   * OK
   */
  description?: string;
  elapsedTime?: number;
  executeType?: string;
  /**
   * @example
   * true
   */
  isPassAssertCheck?: boolean;
  /**
   * @example
   * job-433aead756057fff9e4dca57b147c
   */
  jobId?: string;
  /**
   * @example
   * Errored
   */
  status?: string;
  statusDetail?: { [key: string]: JobsStatusDetailValue };
  /**
   * @example
   * task-518855d9a058c1176866c2c3efb
   */
  taskId?: string;
  terraformProviderVersion?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      createTime: 'createTime',
      description: 'description',
      elapsedTime: 'elapsedTime',
      executeType: 'executeType',
      isPassAssertCheck: 'isPassAssertCheck',
      jobId: 'jobId',
      status: 'status',
      statusDetail: 'statusDetail',
      taskId: 'taskId',
      terraformProviderVersion: 'terraformProviderVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: ListJobsResponseBodyJobsConfig,
      createTime: 'string',
      description: 'string',
      elapsedTime: 'number',
      executeType: 'string',
      isPassAssertCheck: 'boolean',
      jobId: 'string',
      status: 'string',
      statusDetail: { 'type': 'map', 'keyType': 'string', 'valueType': JobsStatusDetailValue },
      taskId: 'string',
      terraformProviderVersion: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
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

export class ListModuleVersionResponseBodyVersions extends $dara.Model {
  /**
   * @example
   * 2022-05-13T02:21:49Z
   */
  createTime?: string;
  /**
   * @example
   * description
   */
  description?: string;
  /**
   * @example
   * mod-55f1739d9050fffed3ec3a2c4a5e5
   */
  moduleId?: string;
  /**
   * @example
   * v3
   */
  moduleVersion?: string;
  /**
   * @example
   * name
   */
  name?: string;
  /**
   * @example
   * oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip
   */
  sourcePath?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      name: 'name',
      sourcePath: 'sourcePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      moduleId: 'string',
      moduleVersion: 'string',
      name: 'string',
      sourcePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModulesRequestTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class ListModulesResponseBodyModulesGroupInfo extends $dara.Model {
  groupId?: string;
  groupName?: string;
  projectId?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      groupName: 'groupName',
      projectId: 'projectId',
      projectName: 'projectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      projectId: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModulesResponseBodyModulesTags extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class ListModulesResponseBodyModules extends $dara.Model {
  /**
   * @example
   * 2022-01-30T02:14:16Z
   */
  createTime?: string;
  /**
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @example
   * description
   */
  description?: string;
  groupInfo?: ListModulesResponseBodyModulesGroupInfo;
  /**
   * @example
   * v1
   */
  latestVersion?: string;
  meta?: { [key: string]: any };
  /**
   * @example
   * mod-518855d9a058cdbd3fd6951d59
   */
  moduleId?: string;
  name?: string;
  /**
   * @example
   * OSS
   */
  source?: string;
  sourceConfig?: { [key: string]: any };
  /**
   * @example
   * Created
   */
  status?: string;
  tags?: ListModulesResponseBodyModulesTags[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      deletionProtection: 'deletionProtection',
      description: 'description',
      groupInfo: 'groupInfo',
      latestVersion: 'latestVersion',
      meta: 'meta',
      moduleId: 'moduleId',
      name: 'name',
      source: 'source',
      sourceConfig: 'sourceConfig',
      status: 'status',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      deletionProtection: 'boolean',
      description: 'string',
      groupInfo: ListModulesResponseBodyModulesGroupInfo,
      latestVersion: 'string',
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      moduleId: 'string',
      name: 'string',
      source: 'string',
      sourceConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListModulesResponseBodyModulesTags },
    };
  }

  validate() {
    if(this.groupInfo && typeof (this.groupInfo as any).validate === 'function') {
      (this.groupInfo as any).validate();
    }
    if(this.meta) {
      $dara.Model.validateMap(this.meta);
    }
    if(this.sourceConfig) {
      $dara.Model.validateMap(this.sourceConfig);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterSetRelationResponseBodyParameterSets extends $dara.Model {
  createTime?: string;
  description?: string;
  name?: string;
  parameterSetId?: string;
  parameters?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      name: 'name',
      parameterSetId: 'parameterSetId',
      parameters: 'parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      name: 'string',
      parameterSetId: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterSetsResponseBodyParameterSetsParameters extends $dara.Model {
  name?: string;
  /**
   * @example
   * string
   */
  type?: string;
  /**
   * @example
   * 111
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterSetsResponseBodyParameterSetsRelationList extends $dara.Model {
  /**
   * @example
   * 2022-06-09T03:46:18Z
   */
  createTime?: string;
  /**
   * @example
   * task-433aead756057ffdf5326bf1e12ed
   */
  resourceId?: string;
  /**
   * @example
   * Module
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterSetsResponseBodyParameterSets extends $dara.Model {
  /**
   * @example
   * 2022-05-14T10:05:19Z
   */
  createTime?: string;
  deletionProtection?: boolean;
  /**
   * @example
   * OK
   */
  description?: string;
  /**
   * @example
   * 12
   */
  name?: string;
  /**
   * @example
   * pts-433aead756057ea135b21e89c
   */
  parameterSetId?: string;
  parameters?: ListParameterSetsResponseBodyParameterSetsParameters[];
  relationList?: ListParameterSetsResponseBodyParameterSetsRelationList[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      deletionProtection: 'deletionProtection',
      description: 'description',
      name: 'name',
      parameterSetId: 'parameterSetId',
      parameters: 'parameters',
      relationList: 'relationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      deletionProtection: 'boolean',
      description: 'string',
      name: 'string',
      parameterSetId: 'string',
      parameters: { 'type': 'array', 'itemType': ListParameterSetsResponseBodyParameterSetsParameters },
      relationList: { 'type': 'array', 'itemType': ListParameterSetsResponseBodyParameterSetsRelationList },
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(Array.isArray(this.relationList)) {
      $dara.Model.validateArray(this.relationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectRequestTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class ListProjectResponseBodyProjectsTags extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class ListProjectResponseBodyProjects extends $dara.Model {
  /**
   * @example
   * 2022-05-10T10:08:34Z
   */
  createTime?: string;
  /**
   * @example
   * abc
   */
  description?: string;
  /**
   * @example
   * 1234
   */
  name?: string;
  /**
   * @example
   * p-148e7853433574fffe9fec72ed9b72
   */
  projectId?: string;
  tags?: ListProjectResponseBodyProjectsTags[];
  /**
   * @example
   * 2
   */
  taskCnt?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      name: 'name',
      projectId: 'projectId',
      tags: 'tags',
      taskCnt: 'taskCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      name: 'string',
      projectId: 'string',
      tags: { 'type': 'array', 'itemType': ListProjectResponseBodyProjectsTags },
      taskCnt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectBuildsResponseBodyProjectBuilds extends $dara.Model {
  /**
   * @example
   * 2022-08-26T02:10:48Z
   */
  createTime?: string;
  endTime?: string;
  /**
   * @example
   * apply
   */
  projectBuildAction?: string;
  /**
   * @example
   * pb-433aead75605717728b6a27615f
   */
  projectBuildId?: string;
  /**
   * @example
   * 1661221432088
   */
  projectBuildIndex?: number;
  /**
   * @example
   * p-14e80de4866bf7ffed0bab6154d737
   */
  projectId?: string;
  /**
   * @example
   * Pending
   */
  status?: string;
  terraformProviderVersion?: string;
  /**
   * @example
   * 1661221432088
   */
  timestamp?: number;
  triggerStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      endTime: 'endTime',
      projectBuildAction: 'projectBuildAction',
      projectBuildId: 'projectBuildId',
      projectBuildIndex: 'projectBuildIndex',
      projectId: 'projectId',
      status: 'status',
      terraformProviderVersion: 'terraformProviderVersion',
      timestamp: 'timestamp',
      triggerStrategy: 'triggerStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      endTime: 'string',
      projectBuildAction: 'string',
      projectBuildId: 'string',
      projectBuildIndex: 'number',
      projectId: 'string',
      status: 'string',
      terraformProviderVersion: 'string',
      timestamp: 'number',
      triggerStrategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRabbitmqPublishersResponseBodyAuthorizations extends $dara.Model {
  /**
   * @example
   * 2022-06-16T03:41:34Z
   */
  createTime?: string;
  /**
   * @example
   * description
   */
  description?: string;
  /**
   * @example
   * exchangeName
   */
  exchangeName?: string;
  /**
   * @example
   * TOPIC
   */
  exchangeType?: string;
  hostName?: string;
  /**
   * @example
   * MQ
   */
  name?: string;
  /**
   * @example
   * 5671
   */
  port?: number;
  /**
   * @example
   * mqp-3b6cb9fa4751a6e5cd2682246
   */
  publisherId?: string;
  /**
   * @example
   * MjoxODgwNzcwODY5MD***
   */
  userName?: string;
  /**
   * @example
   * virtualHost
   */
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      exchangeName: 'exchangeName',
      exchangeType: 'exchangeType',
      hostName: 'hostName',
      name: 'name',
      port: 'port',
      publisherId: 'publisherId',
      userName: 'userName',
      virtualHost: 'virtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      exchangeName: 'string',
      exchangeType: 'string',
      hostName: 'string',
      name: 'string',
      port: 'number',
      publisherId: 'string',
      userName: 'string',
      virtualHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRamPolicyExportTaskVersionsResponseBodyRamPolicyExportTaskVersions extends $dara.Model {
  /**
   * @example
   * 2022-07-04T02:11:29Z
   */
  createTime?: string;
  elapsedTime?: number;
  /**
   * @example
   * v1
   */
  exportVersion?: string;
  /**
   * @example
   * mod-51da8a8a36c166
   */
  moduleId?: string;
  /**
   * @example
   * v1
   */
  moduleVersion?: string;
  /**
   * @example
   * rpe-437ffe0252e48f9286a
   */
  ramPolicyExportTaskId?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      elapsedTime: 'elapsedTime',
      exportVersion: 'exportVersion',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      ramPolicyExportTaskId: 'ramPolicyExportTaskId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      elapsedTime: 'number',
      exportVersion: 'string',
      moduleId: 'string',
      moduleVersion: 'string',
      ramPolicyExportTaskId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRamPolicyExportTasksResponseBodyRamPolicyExportTasks extends $dara.Model {
  /**
   * @example
   * 2022-09-16T03:59:27Z
   */
  createTime?: string;
  currentPolicyStatus?: string;
  currentPolicyVersion?: string;
  elapsedTime?: number;
  exportTime?: string;
  /**
   * @example
   * mod-51fdfefa8788e82c9
   */
  moduleId?: string;
  /**
   * @example
   * v1
   */
  moduleVersion?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * rpe-457ffe0252e48f9286a
   */
  ramPolicyExportTaskId?: string;
  /**
   * @example
   * Available
   */
  status?: string;
  /**
   * @example
   * 12345678/default/rampolicytask/rpe-4399111870d7e6b0f11a
   */
  taskOutputPath?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      currentPolicyStatus: 'currentPolicyStatus',
      currentPolicyVersion: 'currentPolicyVersion',
      elapsedTime: 'elapsedTime',
      exportTime: 'exportTime',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      name: 'name',
      ramPolicyExportTaskId: 'ramPolicyExportTaskId',
      status: 'status',
      taskOutputPath: 'taskOutputPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      currentPolicyStatus: 'string',
      currentPolicyVersion: 'string',
      elapsedTime: 'number',
      exportTime: 'string',
      moduleId: 'string',
      moduleVersion: 'string',
      name: 'string',
      ramPolicyExportTaskId: 'string',
      status: 'string',
      taskOutputPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTaskVersionsResponseBodyExportTasksExcludeRules extends $dara.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTaskVersionsResponseBodyExportTasksExportToModule extends $dara.Model {
  source?: string;
  sourcePath?: string;
  statePath?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'source',
      sourcePath: 'sourcePath',
      statePath: 'statePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      sourcePath: 'string',
      statePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTaskVersionsResponseBodyExportTasksIncludeRules extends $dara.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTaskVersionsResponseBodyExportTasksModules extends $dara.Model {
  source?: string;
  sourcePath?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'source',
      sourcePath: 'sourcePath',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      sourcePath: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTaskVersionsResponseBodyExportTasksVariables extends $dara.Model {
  properties?: string[];
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      properties: 'properties',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      properties: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTaskVersionsResponseBodyExportTasks extends $dara.Model {
  createTime?: string;
  description?: string;
  elapsedTime?: number;
  excludeRules?: ListResourceExportTaskVersionsResponseBodyExportTasksExcludeRules[];
  exportTaskId?: string;
  exportToModule?: ListResourceExportTaskVersionsResponseBodyExportTasksExportToModule;
  exportVersion?: string;
  failedReason?: string;
  hasDestroy?: boolean;
  includeRules?: ListResourceExportTaskVersionsResponseBodyExportTasksIncludeRules[];
  modules?: ListResourceExportTaskVersionsResponseBodyExportTasksModules[];
  name?: string;
  status?: string;
  variables?: ListResourceExportTaskVersionsResponseBodyExportTasksVariables[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      elapsedTime: 'elapsedTime',
      excludeRules: 'excludeRules',
      exportTaskId: 'exportTaskId',
      exportToModule: 'exportToModule',
      exportVersion: 'exportVersion',
      failedReason: 'failedReason',
      hasDestroy: 'hasDestroy',
      includeRules: 'includeRules',
      modules: 'modules',
      name: 'name',
      status: 'status',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      elapsedTime: 'number',
      excludeRules: { 'type': 'array', 'itemType': ListResourceExportTaskVersionsResponseBodyExportTasksExcludeRules },
      exportTaskId: 'string',
      exportToModule: ListResourceExportTaskVersionsResponseBodyExportTasksExportToModule,
      exportVersion: 'string',
      failedReason: 'string',
      hasDestroy: 'boolean',
      includeRules: { 'type': 'array', 'itemType': ListResourceExportTaskVersionsResponseBodyExportTasksIncludeRules },
      modules: { 'type': 'array', 'itemType': ListResourceExportTaskVersionsResponseBodyExportTasksModules },
      name: 'string',
      status: 'string',
      variables: { 'type': 'array', 'itemType': ListResourceExportTaskVersionsResponseBodyExportTasksVariables },
    };
  }

  validate() {
    if(Array.isArray(this.excludeRules)) {
      $dara.Model.validateArray(this.excludeRules);
    }
    if(this.exportToModule && typeof (this.exportToModule as any).validate === 'function') {
      (this.exportToModule as any).validate();
    }
    if(Array.isArray(this.includeRules)) {
      $dara.Model.validateArray(this.includeRules);
    }
    if(Array.isArray(this.modules)) {
      $dara.Model.validateArray(this.modules);
    }
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTasksResponseBodyExportTasksExcludeRules extends $dara.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTasksResponseBodyExportTasksExportToModule extends $dara.Model {
  source?: string;
  sourcePath?: string;
  statePath?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'source',
      sourcePath: 'sourcePath',
      statePath: 'statePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      sourcePath: 'string',
      statePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTasksResponseBodyExportTasksIncludeRules extends $dara.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTasksResponseBodyExportTasksModules extends $dara.Model {
  source?: string;
  sourcePath?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'source',
      sourcePath: 'sourcePath',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      sourcePath: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTasksResponseBodyExportTasksVariables extends $dara.Model {
  properties?: string[];
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      properties: 'properties',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      properties: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTasksResponseBodyExportTasks extends $dara.Model {
  createTime?: string;
  description?: string;
  elapsedTime?: number;
  excludeRules?: ListResourceExportTasksResponseBodyExportTasksExcludeRules[];
  exportStatus?: string;
  exportTaskId?: string;
  exportToModule?: ListResourceExportTasksResponseBodyExportTasksExportToModule;
  exportVersion?: string;
  hasDestroy?: boolean;
  includeRules?: ListResourceExportTasksResponseBodyExportTasksIncludeRules[];
  modules?: ListResourceExportTasksResponseBodyExportTasksModules[];
  name?: string;
  status?: string;
  variables?: ListResourceExportTasksResponseBodyExportTasksVariables[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      elapsedTime: 'elapsedTime',
      excludeRules: 'excludeRules',
      exportStatus: 'exportStatus',
      exportTaskId: 'exportTaskId',
      exportToModule: 'exportToModule',
      exportVersion: 'exportVersion',
      hasDestroy: 'hasDestroy',
      includeRules: 'includeRules',
      modules: 'modules',
      name: 'name',
      status: 'status',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      elapsedTime: 'number',
      excludeRules: { 'type': 'array', 'itemType': ListResourceExportTasksResponseBodyExportTasksExcludeRules },
      exportStatus: 'string',
      exportTaskId: 'string',
      exportToModule: ListResourceExportTasksResponseBodyExportTasksExportToModule,
      exportVersion: 'string',
      hasDestroy: 'boolean',
      includeRules: { 'type': 'array', 'itemType': ListResourceExportTasksResponseBodyExportTasksIncludeRules },
      modules: { 'type': 'array', 'itemType': ListResourceExportTasksResponseBodyExportTasksModules },
      name: 'string',
      status: 'string',
      variables: { 'type': 'array', 'itemType': ListResourceExportTasksResponseBodyExportTasksVariables },
    };
  }

  validate() {
    if(Array.isArray(this.excludeRules)) {
      $dara.Model.validateArray(this.excludeRules);
    }
    if(this.exportToModule && typeof (this.exportToModule as any).validate === 'function') {
      (this.exportToModule as any).validate();
    }
    if(Array.isArray(this.includeRules)) {
      $dara.Model.validateArray(this.includeRules);
    }
    if(Array.isArray(this.modules)) {
      $dara.Model.validateArray(this.modules);
    }
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyResourcesTags extends $dara.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'tagKey',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyResources extends $dara.Model {
  accountId?: string;
  createTime?: string;
  dependsOnResourceIds?: string[];
  productCode?: string;
  properties?: { [key: string]: any };
  propertyVariables?: { [key: string]: any };
  regionId?: string;
  resourceArn?: string;
  resourceGroupId?: string;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  status?: string;
  tags?: ListResourcesResponseBodyResourcesTags[];
  terraformArn?: string;
  terraformCode?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      createTime: 'createTime',
      dependsOnResourceIds: 'dependsOnResourceIds',
      productCode: 'productCode',
      properties: 'properties',
      propertyVariables: 'propertyVariables',
      regionId: 'regionId',
      resourceArn: 'resourceArn',
      resourceGroupId: 'resourceGroupId',
      resourceId: 'resourceId',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
      status: 'status',
      tags: 'tags',
      terraformArn: 'terraformArn',
      terraformCode: 'terraformCode',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      createTime: 'string',
      dependsOnResourceIds: { 'type': 'array', 'itemType': 'string' },
      productCode: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      propertyVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      resourceArn: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListResourcesResponseBodyResourcesTags },
      terraformArn: 'string',
      terraformCode: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dependsOnResourceIds)) {
      $dara.Model.validateArray(this.dependsOnResourceIds);
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    if(this.propertyVariables) {
      $dara.Model.validateMap(this.propertyVariables);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksRequestTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class ListTasksResponseBodyTasksGroupInfo extends $dara.Model {
  /**
   * @example
   * g-4267dcfbf1b6d1e0652bfbbe995
   */
  groupId?: string;
  /**
   * @example
   * abc
   */
  groupName?: string;
  /**
   * @example
   * p-433aead7560571cf1b2bfbbe92b
   */
  projectId?: string;
  /**
   * @example
   * abc
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      groupName: 'groupName',
      projectId: 'projectId',
      projectName: 'projectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      projectId: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBodyTasksTags extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class ListTasksResponseBodyTasks extends $dara.Model {
  autoApply?: boolean;
  /**
   * @example
   * 2022-07-11T15:09:53Z
   */
  createTime?: string;
  /**
   * @example
   * job-123asd
   */
  currentJobId?: string;
  /**
   * @example
   * Pending
   */
  currentJobStatus?: string;
  deletionProtection?: boolean;
  groupInfo?: ListTasksResponseBodyTasksGroupInfo;
  /**
   * @example
   * mod-518855d9a058c331e9c60bc0ce
   */
  moduleId?: string;
  moduleName?: string;
  /**
   * @example
   * v1
   */
  moduleVersion?: string;
  /**
   * @example
   * abc
   */
  name?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  tags?: ListTasksResponseBodyTasksTags[];
  /**
   * @example
   * task-1525e992f1b621b0ca51647876e
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      autoApply: 'autoApply',
      createTime: 'createTime',
      currentJobId: 'currentJobId',
      currentJobStatus: 'currentJobStatus',
      deletionProtection: 'deletionProtection',
      groupInfo: 'groupInfo',
      moduleId: 'moduleId',
      moduleName: 'moduleName',
      moduleVersion: 'moduleVersion',
      name: 'name',
      status: 'status',
      tags: 'tags',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoApply: 'boolean',
      createTime: 'string',
      currentJobId: 'string',
      currentJobStatus: 'string',
      deletionProtection: 'boolean',
      groupInfo: ListTasksResponseBodyTasksGroupInfo,
      moduleId: 'string',
      moduleName: 'string',
      moduleVersion: 'string',
      name: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListTasksResponseBodyTasksTags },
      taskId: 'string',
    };
  }

  validate() {
    if(this.groupInfo && typeof (this.groupInfo as any).validate === 'function') {
      (this.groupInfo as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTerraformProviderVersionsResponseBodyVersions extends $dara.Model {
  publishedTime?: string;
  status?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      publishedTime: 'publishedTime',
      status: 'status',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publishedTime: 'string',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTags extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class UpdateGroupRequestNotifyConfig extends $dara.Model {
  /**
   * @example
   * /
   */
  notifyPath?: string;
  /**
   * @example
   * DingDing
   */
  notifyType?: string;
  static names(): { [key: string]: string } {
    return {
      notifyPath: 'notifyPath',
      notifyType: 'notifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyPath: 'string',
      notifyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupRequestTriggerConfig extends $dara.Model {
  /**
   * @example
   * Cron
   */
  triggerStrategy?: string;
  /**
   * @example
   * 0 0 * * * ？
   */
  triggerValue?: string;
  static names(): { [key: string]: string } {
    return {
      triggerStrategy: 'triggerStrategy',
      triggerValue: 'triggerValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      triggerStrategy: 'string',
      triggerValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModuleAttributeRequestGroupInfo extends $dara.Model {
  groupId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      projectId: 'projectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      projectId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateParameterSetAttributeRequestParameters extends $dara.Model {
  /**
   * @example
   * t
   */
  name?: string;
  /**
   * @example
   * string
   */
  type?: string;
  /**
   * @example
   * vpc-bp1mjm9exduos1bipw9x6
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpdateResourceExportTaskAttributeRequestExcludeRules extends $dara.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceExportTaskAttributeRequestExportToModule extends $dara.Model {
  source?: string;
  sourcePath?: string;
  statePath?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'source',
      sourcePath: 'sourcePath',
      statePath: 'statePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      sourcePath: 'string',
      statePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceExportTaskAttributeRequestIncludeRules extends $dara.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceExportTaskAttributeRequestVariables extends $dara.Model {
  properties?: string[];
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      properties: 'properties',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      properties: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskAttributeRequestGroupInfo extends $dara.Model {
  /**
   * @example
   * g-433aead7560571e66e31274ffd3
   */
  groupId?: string;
  /**
   * @example
   * p-433aead75605713865c386cb9d
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      projectId: 'projectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      projectId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskPolicyRequestTaskPolicies extends $dara.Model {
  /**
   * @example
   * 5
   */
  priority?: string;
  /**
   * @example
   * task-60f24b4eb47f1135b7b14ddbdfd
   */
  taskId?: string;
  /**
   * @example
   * SceneTestingTask
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      priority: 'priority',
      taskId: 'taskId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priority: 'string',
      taskId: 'string',
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

export class JobStatusDetailValue extends $dara.Model {
  comment?: string;
  /**
   * @example
   * {}
   */
  jobResult?: string;
  /**
   * @example
   * 2022-06-13 17:11:34
   */
  timeStamps?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      jobResult: 'jobResult',
      timeStamps: 'timeStamps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      jobResult: 'string',
      timeStamps: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobsStatusDetailValue extends $dara.Model {
  /**
   * @example
   * ""
   */
  comment?: string;
  /**
   * @example
   * ""
   */
  jobResult?: string;
  /**
   * @example
   * 2022-06-13 17:11:34
   */
  timeStamps?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      jobResult: 'jobResult',
      timeStamps: 'timeStamps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      jobResult: 'string',
      timeStamps: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateGroupRequest extends $dara.Model {
  /**
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @example
   * p-433aead7560571a87349d054b4
   */
  projectId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceIds?: string[];
  /**
   * @example
   * Task
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      projectId: 'projectId',
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      projectId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateGroupResponseBody extends $dara.Model {
  /**
   * @example
   * B6ED9F71-7FA8-598E-B64D-4606FB3FCCC9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssociateGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AssociateGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateParameterSetRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  parameterSetIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * task-433aead756057ffdf5326bf1e12ed
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Task
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      parameterSetIds: 'parameterSetIds',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterSetIds: { 'type': 'array', 'itemType': 'string' },
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameterSetIds)) {
      $dara.Model.validateArray(this.parameterSetIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateParameterSetResponseBody extends $dara.Model {
  /**
   * @example
   * BF75EF50-955D-5E1F-AB23-A657C2C6D3C7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateParameterSetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssociateParameterSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AssociateParameterSetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachRabbitmqPublisherRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * task-518855d9a058cfffcbeafaebe6c89
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachRabbitmqPublisherResponseBody extends $dara.Model {
  /**
   * @example
   * D1DEAA38-D888-5811-A8A6-E1E2FBC0779C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachRabbitmqPublisherResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachRabbitmqPublisherResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachRabbitmqPublisherResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelProjectBuildResponseBody extends $dara.Model {
  /**
   * @example
   * C7070EC3-DF66-58BA-A1DD-A8574FF53143
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelProjectBuildResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelProjectBuildResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelProjectBuildResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRamPolicyExportTaskResponseBody extends $dara.Model {
  /**
   * @example
   * E2D0E863-1651-5E58-823F-B451C8C24615
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRamPolicyExportTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelRamPolicyExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelRamPolicyExportTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelResourceExportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @example
   * {}
   */
  ramRole?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      ramRole: 'ramRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ramRole: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelResourceExportTaskResponseBody extends $dara.Model {
  /**
   * @example
   * ex-3b6cb9fa4751a6e5cdc6460282
   */
  exportTaskId?: string;
  /**
   * @example
   * v1
   */
  exportVersion?: string;
  /**
   * @example
   * 136B3926-DD90-5DB2-96EC-8BAD6407D1C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exportTaskId: 'exportTaskId',
      exportVersion: 'exportVersion',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTaskId: 'string',
      exportVersion: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelResourceExportTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelResourceExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelResourceExportTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourceNameRequest extends $dara.Model {
  /**
   * @example
   * mod-433af53ab7cc71afa
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * p-663a72b75245e3
   */
  parentId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * task
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      parentId: 'parentId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      parentId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourceNameResponseBody extends $dara.Model {
  /**
   * @example
   * 24B9B06B-16D8-5558-9FE1-C29757EB1689
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourceNameResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckResourceNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckResourceNameResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @example
   * p-433aead7560571a87349d054b4
   */
  projectId?: string;
  resourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      name: 'name',
      projectId: 'projectId',
      resourceTypes: 'resourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      name: 'string',
      projectId: 'string',
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneGroupResponseBody extends $dara.Model {
  /**
   * @example
   * BF75EF50-955D-5E1F-AB23-A657C2C6D3C7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloneGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloneGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneModuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ok
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mod-148e7853433574fff6b316f4eb737e
   */
  moduleId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * market
   */
  moduleSource?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v1
   */
  moduleVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      moduleId: 'moduleId',
      moduleSource: 'moduleSource',
      moduleVersion: 'moduleVersion',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      moduleId: 'string',
      moduleSource: 'string',
      moduleVersion: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneModuleResponseBody extends $dara.Model {
  /**
   * @example
   * mod-71012916a5a376f265ebc3774
   */
  moduleId?: string;
  /**
   * @example
   * 78EC2EFB-AED9-5C23-AE98-6DDC6F2F96D6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      moduleId: 'moduleId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneModuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloneModuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloneModuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAuthorizationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  dueTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mod-148e7853433574fff6b316f4eb737e
   */
  moduleId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v1
   */
  moduleVersion?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5a220da4-f594-4776-87ed-f37888ec0473
   */
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      dueTime: 'dueTime',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      name: 'name',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dueTime: 'string',
      moduleId: 'string',
      moduleVersion: 'string',
      name: 'string',
      uid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAuthorizationResponseBody extends $dara.Model {
  /**
   * @example
   * auth-14e80de4866bf7171264a9b40661
   */
  authorizationId?: string;
  /**
   * @example
   * 5FE84246-BB17-54BF-9F7A-F496270AC6DA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationId: 'authorizationId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAuthorizationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAuthorizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAuthorizationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExplorerTaskRequest extends $dara.Model {
  initModuleState?: boolean;
  terraformVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  autoApply?: boolean;
  autoDestroy?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  clientToken?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  moduleId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  moduleVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  skipPropertyValidation?: boolean;
  terraformProviderVersion?: string;
  triggerValue?: string;
  static names(): { [key: string]: string } {
    return {
      initModuleState: 'InitModuleState',
      terraformVersion: 'TerraformVersion',
      autoApply: 'autoApply',
      autoDestroy: 'autoDestroy',
      clientToken: 'clientToken',
      description: 'description',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      name: 'name',
      skipPropertyValidation: 'skipPropertyValidation',
      terraformProviderVersion: 'terraformProviderVersion',
      triggerValue: 'triggerValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initModuleState: 'boolean',
      terraformVersion: 'string',
      autoApply: 'boolean',
      autoDestroy: 'boolean',
      clientToken: 'string',
      description: 'string',
      moduleId: 'string',
      moduleVersion: 'string',
      name: 'string',
      skipPropertyValidation: 'boolean',
      terraformProviderVersion: 'string',
      triggerValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExplorerTaskResponseBody extends $dara.Model {
  explorerTaskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      explorerTaskId: 'explorerTaskId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      explorerTaskId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExplorerTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateExplorerTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateExplorerTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  autoDestroy?: boolean;
  /**
   * @example
   * true
   */
  autoTrigger?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * true
   */
  forcedSetting?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  notifyConfig?: CreateGroupRequestNotifyConfig[];
  notifyOperationTypes?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * p-433aead7560571a87349d054b4
   */
  projectId?: string;
  /**
   * @example
   * ramName
   */
  ramRole?: string;
  reportExportField?: string[];
  /**
   * @example
   * https://test.oss-cn-hangzhou.aliyuncs.com/test/test
   */
  reportExportPath?: string;
  /**
   * @example
   * 1.189.0
   */
  terraformProviderVersion?: string;
  triggerConfig?: CreateGroupRequestTriggerConfig[];
  triggerResourceType?: string[];
  static names(): { [key: string]: string } {
    return {
      autoDestroy: 'autoDestroy',
      autoTrigger: 'autoTrigger',
      clientToken: 'clientToken',
      description: 'description',
      forcedSetting: 'forcedSetting',
      name: 'name',
      notifyConfig: 'notifyConfig',
      notifyOperationTypes: 'notifyOperationTypes',
      projectId: 'projectId',
      ramRole: 'ramRole',
      reportExportField: 'reportExportField',
      reportExportPath: 'reportExportPath',
      terraformProviderVersion: 'terraformProviderVersion',
      triggerConfig: 'triggerConfig',
      triggerResourceType: 'triggerResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDestroy: 'boolean',
      autoTrigger: 'boolean',
      clientToken: 'string',
      description: 'string',
      forcedSetting: 'boolean',
      name: 'string',
      notifyConfig: { 'type': 'array', 'itemType': CreateGroupRequestNotifyConfig },
      notifyOperationTypes: { 'type': 'array', 'itemType': 'string' },
      projectId: 'string',
      ramRole: 'string',
      reportExportField: { 'type': 'array', 'itemType': 'string' },
      reportExportPath: 'string',
      terraformProviderVersion: 'string',
      triggerConfig: { 'type': 'array', 'itemType': CreateGroupRequestTriggerConfig },
      triggerResourceType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.notifyConfig)) {
      $dara.Model.validateArray(this.notifyConfig);
    }
    if(Array.isArray(this.notifyOperationTypes)) {
      $dara.Model.validateArray(this.notifyOperationTypes);
    }
    if(Array.isArray(this.reportExportField)) {
      $dara.Model.validateArray(this.reportExportField);
    }
    if(Array.isArray(this.triggerConfig)) {
      $dara.Model.validateArray(this.triggerConfig);
    }
    if(Array.isArray(this.triggerResourceType)) {
      $dara.Model.validateArray(this.triggerResourceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponseBody extends $dara.Model {
  /**
   * @example
   * g-4267dcfbf1b6d128c87adf0e95f
   */
  groupId?: string;
  /**
   * @example
   * E2D0E863-1651-5E58-823F-B451C8C24615
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2daf4227f747cbf11a5501f18cc5e004
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  description?: string;
  executeType?: string;
  /**
   * @example
   * null
   */
  subCommand?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      executeType: 'executeType',
      subCommand: 'subCommand',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      executeType: 'string',
      subCommand: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponseBody extends $dara.Model {
  /**
   * @example
   * job-518855d9a058c32798c319561f
   */
  jobId?: string;
  /**
   * @example
   * 136B3926-DD90-5DB2-96EC-8BAD6407D1C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'jobId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @example
   * test
   */
  description?: string;
  groupInfo?: CreateModuleRequestGroupInfo;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * OSS
   */
  source?: string;
  /**
   * @example
   * OSS：
   * "oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip"
   * Registry：
   * "alibaba/security-group/alicloud:2.1.0"
   */
  sourcePath?: string;
  /**
   * @example
   * oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/terraform.tfstate
   */
  statePath?: string;
  /**
   * @example
   * Manual
   */
  versionStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      groupInfo: 'groupInfo',
      name: 'name',
      source: 'source',
      sourcePath: 'sourcePath',
      statePath: 'statePath',
      versionStrategy: 'versionStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      groupInfo: CreateModuleRequestGroupInfo,
      name: 'string',
      source: 'string',
      sourcePath: 'string',
      statePath: 'string',
      versionStrategy: 'string',
    };
  }

  validate() {
    if(this.groupInfo && typeof (this.groupInfo as any).validate === 'function') {
      (this.groupInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModuleResponseBody extends $dara.Model {
  /**
   * @example
   * mod-518855d9a058cfffcc446d8fe3c99
   */
  moduleId?: string;
  /**
   * @example
   * 0D797DC3-FF04-5C21-81EB-92C7799512E3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      moduleId: 'moduleId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateModuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateModuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModuleVersionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModuleVersionResponseBody extends $dara.Model {
  /**
   * @example
   * v1
   */
  moduleVersion?: string;
  /**
   * @example
   * B6ED9F71-7FA8-598E-B64D-4606FB3FCCC9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      moduleVersion: 'moduleVersion',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleVersion: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModuleVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateModuleVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateModuleVersionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParameterSetRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  parameters?: CreateParameterSetRequestParameters[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      name: 'name',
      parameters: 'parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      name: 'string',
      parameters: { 'type': 'array', 'itemType': CreateParameterSetRequestParameters },
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParameterSetResponseBody extends $dara.Model {
  /**
   * @example
   * pts-3b6cb9fa4751afff89a4b73779e0d
   */
  parameterSetId?: string;
  /**
   * @example
   * 7FA0FF4A-ABD4-54F6-BEAC-B4273EBA10A2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameterSetId: 'parameterSetId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterSetId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParameterSetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateParameterSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateParameterSetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBody extends $dara.Model {
  /**
   * @example
   * p-433aead7560572f8d95b25775c
   */
  projectId?: string;
  /**
   * @example
   * 3E49127A-BB65-5CCD-AB93-0EC0A43E5446
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'projectId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateProjectResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectBuildRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  groupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * refresh
   */
  projectBuildAction?: string;
  taskIds?: string[];
  taskPolicies?: CreateProjectBuildRequestTaskPolicies[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      groupId: 'groupId',
      projectBuildAction: 'projectBuildAction',
      taskIds: 'taskIds',
      taskPolicies: 'taskPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      groupId: 'string',
      projectBuildAction: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
      taskPolicies: { 'type': 'array', 'itemType': CreateProjectBuildRequestTaskPolicies },
    };
  }

  validate() {
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    if(Array.isArray(this.taskPolicies)) {
      $dara.Model.validateArray(this.taskPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectBuildResponseBody extends $dara.Model {
  /**
   * @example
   * pb-433aead756057193ba8bb410945
   */
  id?: string;
  /**
   * @example
   * EE295EEC-EA85-5899-B2D5-5FCA788AC3C6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectBuildResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateProjectBuildResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateProjectBuildResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRabbitmqPublisherRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @example
   * ok
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ExchangeTest
   */
  exchangeName?: string;
  /**
   * @example
   * TOPIC
   */
  exchangeType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hostName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MQ
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NDAxREVDQzI2MjA0OT****
   */
  password?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5672
   */
  port?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MjoxODgwNzcwODY5MD****
   */
  userName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Test
   */
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      exchangeName: 'exchangeName',
      exchangeType: 'exchangeType',
      hostName: 'hostName',
      name: 'name',
      password: 'password',
      port: 'port',
      userName: 'userName',
      virtualHost: 'virtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      exchangeName: 'string',
      exchangeType: 'string',
      hostName: 'string',
      name: 'string',
      password: 'string',
      port: 'number',
      userName: 'string',
      virtualHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRabbitmqPublisherResponseBody extends $dara.Model {
  /**
   * @example
   * mqp-3b6cb9fa4751afffb0af06b9ba504
   */
  publisherId?: string;
  /**
   * @example
   * C3DA172D-DDCF-5268-BB0F-060C3A9D2623
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      publisherId: 'publisherId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publisherId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRabbitmqPublisherResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRabbitmqPublisherResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRabbitmqPublisherResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRamPolicyExportTaskRequest extends $dara.Model {
  authorizationAccountIds?: number[];
  authorizationActions?: string[];
  authorizationRegionIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2da11a5501f18cc5e004
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mod-148e785fff6b316f4eb737e
   */
  moduleId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v1
   */
  moduleVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * ramName
   */
  ramRole?: string;
  terraformProviderVersion?: string;
  /**
   * @example
   * Manual
   */
  triggerStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationAccountIds: 'authorizationAccountIds',
      authorizationActions: 'authorizationActions',
      authorizationRegionIds: 'authorizationRegionIds',
      clientToken: 'clientToken',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      name: 'name',
      ramRole: 'ramRole',
      terraformProviderVersion: 'terraformProviderVersion',
      triggerStrategy: 'triggerStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationAccountIds: { 'type': 'array', 'itemType': 'number' },
      authorizationActions: { 'type': 'array', 'itemType': 'string' },
      authorizationRegionIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      moduleId: 'string',
      moduleVersion: 'string',
      name: 'string',
      ramRole: 'string',
      terraformProviderVersion: 'string',
      triggerStrategy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authorizationAccountIds)) {
      $dara.Model.validateArray(this.authorizationAccountIds);
    }
    if(Array.isArray(this.authorizationActions)) {
      $dara.Model.validateArray(this.authorizationActions);
    }
    if(Array.isArray(this.authorizationRegionIds)) {
      $dara.Model.validateArray(this.authorizationRegionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRamPolicyExportTaskResponseBody extends $dara.Model {
  /**
   * @example
   * rpe-436057ffe0252e48f9286a
   */
  id?: string;
  /**
   * @example
   * 9AC66641-C0F1-533B-AB58-982FC7B1C32A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRamPolicyExportTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRamPolicyExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRamPolicyExportTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceExportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  configPath?: string;
  /**
   * @example
   * OK
   */
  description?: string;
  excludeRules?: CreateResourceExportTaskRequestExcludeRules[];
  exportToModule?: CreateResourceExportTaskRequestExportToModule;
  includeRules?: CreateResourceExportTaskRequestIncludeRules[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @example
   * {}
   */
  ramRole?: string;
  terraformProviderVersion?: string;
  /**
   * @example
   * 1.2.6
   */
  terraformVersion?: string;
  /**
   * @example
   * Auto
   */
  triggerStrategy?: string;
  variables?: CreateResourceExportTaskRequestVariables[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      configPath: 'configPath',
      description: 'description',
      excludeRules: 'excludeRules',
      exportToModule: 'exportToModule',
      includeRules: 'includeRules',
      name: 'name',
      ramRole: 'ramRole',
      terraformProviderVersion: 'terraformProviderVersion',
      terraformVersion: 'terraformVersion',
      triggerStrategy: 'triggerStrategy',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configPath: 'string',
      description: 'string',
      excludeRules: { 'type': 'array', 'itemType': CreateResourceExportTaskRequestExcludeRules },
      exportToModule: CreateResourceExportTaskRequestExportToModule,
      includeRules: { 'type': 'array', 'itemType': CreateResourceExportTaskRequestIncludeRules },
      name: 'string',
      ramRole: 'string',
      terraformProviderVersion: 'string',
      terraformVersion: 'string',
      triggerStrategy: 'string',
      variables: { 'type': 'array', 'itemType': CreateResourceExportTaskRequestVariables },
    };
  }

  validate() {
    if(Array.isArray(this.excludeRules)) {
      $dara.Model.validateArray(this.excludeRules);
    }
    if(this.exportToModule && typeof (this.exportToModule as any).validate === 'function') {
      (this.exportToModule as any).validate();
    }
    if(Array.isArray(this.includeRules)) {
      $dara.Model.validateArray(this.includeRules);
    }
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceExportTaskResponseBody extends $dara.Model {
  /**
   * @example
   * ex-4a1ec8b7003d24528326821be
   */
  exportTaskId?: string;
  /**
   * @example
   * v1
   */
  exportVersion?: string;
  /**
   * @example
   * CFD8C2A8-5BE7-56D2-916D-64039B8E06E3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exportTaskId: 'exportTaskId',
      exportVersion: 'exportVersion',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTaskId: 'string',
      exportVersion: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceExportTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateResourceExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateResourceExportTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  autoApply?: boolean;
  /**
   * @example
   * true
   */
  autoDestroy?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @example
   * demo
   */
  description?: string;
  groupInfo?: CreateTaskRequestGroupInfo;
  initModuleState?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mod-148e7853433574fff6b316f4eb737e
   */
  moduleId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v1
   */
  moduleVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  parameters?: { [key: string]: string };
  protectionStrategy?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {}
   */
  ramRole?: string;
  skipPropertyValidation?: boolean;
  taskBackend?: CreateTaskRequestTaskBackend;
  /**
   * @example
   * 1.2.6
   */
  terraformVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Always
   */
  triggerStrategy?: string;
  /**
   * @example
   * ******
   */
  triggerValue?: string;
  static names(): { [key: string]: string } {
    return {
      autoApply: 'autoApply',
      autoDestroy: 'autoDestroy',
      clientToken: 'clientToken',
      description: 'description',
      groupInfo: 'groupInfo',
      initModuleState: 'initModuleState',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      name: 'name',
      parameters: 'parameters',
      protectionStrategy: 'protectionStrategy',
      ramRole: 'ramRole',
      skipPropertyValidation: 'skipPropertyValidation',
      taskBackend: 'taskBackend',
      terraformVersion: 'terraformVersion',
      triggerStrategy: 'triggerStrategy',
      triggerValue: 'triggerValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoApply: 'boolean',
      autoDestroy: 'boolean',
      clientToken: 'string',
      description: 'string',
      groupInfo: CreateTaskRequestGroupInfo,
      initModuleState: 'boolean',
      moduleId: 'string',
      moduleVersion: 'string',
      name: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      protectionStrategy: { 'type': 'array', 'itemType': 'string' },
      ramRole: 'string',
      skipPropertyValidation: 'boolean',
      taskBackend: CreateTaskRequestTaskBackend,
      terraformVersion: 'string',
      triggerStrategy: 'string',
      triggerValue: 'string',
    };
  }

  validate() {
    if(this.groupInfo && typeof (this.groupInfo as any).validate === 'function') {
      (this.groupInfo as any).validate();
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    if(Array.isArray(this.protectionStrategy)) {
      $dara.Model.validateArray(this.protectionStrategy);
    }
    if(this.taskBackend && typeof (this.taskBackend as any).validate === 'function') {
      (this.taskBackend as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskResponseBody extends $dara.Model {
  /**
   * @example
   * CD478792-6952-5A1C-9F57-78932BF0FAC6
   */
  requestId?: string;
  /**
   * @example
   * task-433aead756057fffeaba4828f5195
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAuthorizationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BF72A6FB-B071-5F2E-A036-9D62545B962C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAuthorizationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAuthorizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAuthorizationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 1E7BA3EB-B0EF-53F5-9999-07CAD6D9F8A3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModuleResponseBody extends $dara.Model {
  /**
   * @example
   * 49DA6457-E545-5095-A930-EB8F0BCD4DAA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteModuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteModuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteParameterSetResponseBody extends $dara.Model {
  /**
   * @example
   * 708D670B-67C4-5653-9F88-8F7800429EE1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteParameterSetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteParameterSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteParameterSetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectResponseBody extends $dara.Model {
  /**
   * @example
   * BF72A6FB-B071-5F2E-A036-9D62545B962C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteProjectResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRabbitmqPublisherResponseBody extends $dara.Model {
  /**
   * @example
   * BF72A6FB-B071-5F2E-A036-9D62545B962C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRabbitmqPublisherResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRabbitmqPublisherResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRabbitmqPublisherResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRamPolicyExportTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 3E49127A-BB65-5CCD-AB93-0EC0A43E5446
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRamPolicyExportTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRamPolicyExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRamPolicyExportTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRamPolicyExportTaskVersionResponseBody extends $dara.Model {
  /**
   * @example
   * E2D0E863-1651-5E58-823F-B451C8C24615
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRamPolicyExportTaskVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRamPolicyExportTaskVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRamPolicyExportTaskVersionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceExportTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 136B3926-DD90-5DB2-96EC-8BAD6407D1C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceExportTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteResourceExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteResourceExportTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneTestingTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 17793D91-A26F-520D-A948-3452A45D15B1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneTestingTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSceneTestingTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSceneTestingTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 73B38F77-62BA-5878-8952-530DFE21C93B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachRabbitmqPublisherRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * task-518855d9a058cf1127d082bec5
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachRabbitmqPublisherResponseBody extends $dara.Model {
  /**
   * @example
   * BF72A6FB-B071-5F2E-A036-9D62545B962C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachRabbitmqPublisherResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachRabbitmqPublisherResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachRabbitmqPublisherResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateGroupRequest extends $dara.Model {
  /**
   * @example
   * 2daf4227f747cbf11a5501f18cc5e004
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceIds?: string[];
  /**
   * @example
   * Task
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 17793D91-A26F-520D-A948-3452A45D15B1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DissociateGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DissociateGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateParameterSetRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  parameterSetIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mod-39cd1e5e58c50e79dd8cd901cd
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Module
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      parameterSetIds: 'parameterSetIds',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterSetIds: { 'type': 'array', 'itemType': 'string' },
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameterSetIds)) {
      $dara.Model.validateArray(this.parameterSetIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateParameterSetResponseBody extends $dara.Model {
  /**
   * @example
   * 136B3926-DD90-5DB2-96EC-8BAD6407D1C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateParameterSetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DissociateParameterSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DissociateParameterSetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteRamPolicyExportTaskResponseBody extends $dara.Model {
  /**
   * @example
   * v1
   */
  exportVersion?: string;
  /**
   * @example
   * 7FA0FF4A-ABD4-54F6-BEAC-B4273EBA10A2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exportVersion: 'exportVersion',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportVersion: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteRamPolicyExportTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteRamPolicyExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExecuteRamPolicyExportTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteResourceExportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @example
   * {}
   */
  ramRole?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      ramRole: 'ramRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ramRole: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteResourceExportTaskResponseBody extends $dara.Model {
  /**
   * @example
   * ex-3b6cb9fa4751a6e645ad8365e6
   */
  exportTaskId?: string;
  /**
   * @example
   * v1
   */
  exportVersion?: string;
  /**
   * @example
   * 0B0A7C19-9077-5975-ACBD-DEE718787992
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exportTaskId: 'exportTaskId',
      exportVersion: 'exportVersion',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTaskId: 'string',
      exportVersion: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteResourceExportTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteResourceExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExecuteResourceExportTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExplorerTaskResponseBody extends $dara.Model {
  requestId?: string;
  task?: GetExplorerTaskResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      task: 'task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      task: GetExplorerTaskResponseBodyTask,
    };
  }

  validate() {
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExplorerTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetExplorerTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetExplorerTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResponseBody extends $dara.Model {
  group?: GetGroupResponseBodyGroup;
  /**
   * @example
   * B6ED9F71-7FA8-598E-B64D-4606FB3FCCC9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'group',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: GetGroupResponseBodyGroup,
      requestId: 'string',
    };
  }

  validate() {
    if(this.group && typeof (this.group as any).validate === 'function') {
      (this.group as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobRequest extends $dara.Model {
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBody extends $dara.Model {
  job?: GetJobResponseBodyJob;
  /**
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

export class GetJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModuleResponseBody extends $dara.Model {
  module?: GetModuleResponseBodyModule;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1E7BA3EB-B0EF-53F5-9999-07CAD6D9F8A3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      module: 'module',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: GetModuleResponseBodyModule,
      requestId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetModuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetModuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModuleVersionResponseBody extends $dara.Model {
  /**
   * @example
   * 0D298375-F92F-5B65-82E4-EA68F02521F1
   */
  requestId?: string;
  version?: GetModuleVersionResponseBodyVersion;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      version: GetModuleVersionResponseBodyVersion,
    };
  }

  validate() {
    if(this.version && typeof (this.version as any).validate === 'function') {
      (this.version as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModuleVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetModuleVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetModuleVersionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParameterSetResponseBody extends $dara.Model {
  parameterSet?: GetParameterSetResponseBodyParameterSet;
  /**
   * @example
   * 99905C7C-1320-5E7F-A798-3071482EB08E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameterSet: 'parameterSet',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterSet: GetParameterSetResponseBodyParameterSet,
      requestId: 'string',
    };
  }

  validate() {
    if(this.parameterSet && typeof (this.parameterSet as any).validate === 'function') {
      (this.parameterSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParameterSetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetParameterSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetParameterSetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBody extends $dara.Model {
  project?: GetProjectResponseBodyProject;
  /**
   * @example
   * 7FA0FF4A-ABD4-54F6-BEAC-B4273EBA10A2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'project',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: GetProjectResponseBodyProject,
      requestId: 'string',
    };
  }

  validate() {
    if(this.project && typeof (this.project as any).validate === 'function') {
      (this.project as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProjectResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectBuildContextRequest extends $dara.Model {
  isPassAssertCheck?: boolean;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      isPassAssertCheck: 'isPassAssertCheck',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPassAssertCheck: 'boolean',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectBuildContextResponseBody extends $dara.Model {
  projectBuild?: GetProjectBuildContextResponseBodyProjectBuild;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C54F3939-9112-5795-A5A7-5322E2FB2257
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      projectBuild: 'ProjectBuild',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectBuild: GetProjectBuildContextResponseBodyProjectBuild,
      requestId: 'string',
    };
  }

  validate() {
    if(this.projectBuild && typeof (this.projectBuild as any).validate === 'function') {
      (this.projectBuild as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectBuildContextResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProjectBuildContextResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProjectBuildContextResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRabbitmqPublisherResponseBody extends $dara.Model {
  publisher?: GetRabbitmqPublisherResponseBodyPublisher;
  /**
   * @example
   * 1E7BA3EB-B0EF-53F5-9999-07CAD6D9F8A3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      publisher: 'publisher',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publisher: GetRabbitmqPublisherResponseBodyPublisher,
      requestId: 'string',
    };
  }

  validate() {
    if(this.publisher && typeof (this.publisher as any).validate === 'function') {
      (this.publisher as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRabbitmqPublisherResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRabbitmqPublisherResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRabbitmqPublisherResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRamPolicyExportTaskResponseBody extends $dara.Model {
  ramPolicyExportTask?: GetRamPolicyExportTaskResponseBodyRamPolicyExportTask;
  /**
   * @example
   * 3E49127A-BB65-5CCD-AB93-0EC0A43E5446
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ramPolicyExportTask: 'ramPolicyExportTask',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ramPolicyExportTask: GetRamPolicyExportTaskResponseBodyRamPolicyExportTask,
      requestId: 'string',
    };
  }

  validate() {
    if(this.ramPolicyExportTask && typeof (this.ramPolicyExportTask as any).validate === 'function') {
      (this.ramPolicyExportTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRamPolicyExportTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRamPolicyExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRamPolicyExportTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRamPolicyExportTaskVersionResponseBody extends $dara.Model {
  ramPolicyExportTaskVersion?: GetRamPolicyExportTaskVersionResponseBodyRamPolicyExportTaskVersion;
  /**
   * @example
   * E2D0E863-1651-5E58-823F-B451C8C24615
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ramPolicyExportTaskVersion: 'ramPolicyExportTaskVersion',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ramPolicyExportTaskVersion: GetRamPolicyExportTaskVersionResponseBodyRamPolicyExportTaskVersion,
      requestId: 'string',
    };
  }

  validate() {
    if(this.ramPolicyExportTaskVersion && typeof (this.ramPolicyExportTaskVersion as any).validate === 'function') {
      (this.ramPolicyExportTaskVersion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRamPolicyExportTaskVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRamPolicyExportTaskVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRamPolicyExportTaskVersionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceExportTaskRequest extends $dara.Model {
  exportVersion?: string;
  static names(): { [key: string]: string } {
    return {
      exportVersion: 'exportVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceExportTaskResponseBody extends $dara.Model {
  requestId?: string;
  task?: GetResourceExportTaskResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      task: 'task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      task: GetResourceExportTaskResponseBodyTask,
    };
  }

  validate() {
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceExportTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResourceExportTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C24C498A-09CF-54D3-8972-8DC074CF8614
   */
  requestId?: string;
  task?: GetTaskResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      task: 'task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      task: GetTaskResponseBodyTask,
    };
  }

  validate() {
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskPolicyRequest extends $dara.Model {
  /**
   * @example
   * SceneTestingTask
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetTaskPolicyResponseBody extends $dara.Model {
  /**
   * @example
   * 0D797DC3-FF04-5C21-81EB-92C7799512E3
   */
  requestId?: string;
  taskPolicy?: GetTaskPolicyResponseBodyTaskPolicy;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      taskPolicy: 'taskPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskPolicy: GetTaskPolicyResponseBodyTaskPolicy,
    };
  }

  validate() {
    if(this.taskPolicy && typeof (this.taskPolicy as any).validate === 'function') {
      (this.taskPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTaskPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTaskPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationsRequest extends $dara.Model {
  /**
   * @example
   * auth-433aead756057ffec22d5b1ef27ac
   */
  authorizationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * others
   */
  authorizationType?: string;
  /**
   * @example
   * key
   */
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationId: 'authorizationId',
      authorizationType: 'authorizationType',
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationId: 'string',
      authorizationType: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationsResponseBody extends $dara.Model {
  authorizations?: ListAuthorizationsResponseBodyAuthorizations[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C67A913A-2A0F-53F6-A041-56CC4CA1E593
   */
  requestId?: string;
  /**
   * @example
   * 72
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      authorizations: 'authorizations',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizations: { 'type': 'array', 'itemType': ListAuthorizationsResponseBodyAuthorizations },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.authorizations)) {
      $dara.Model.validateArray(this.authorizations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAuthorizationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAuthorizationsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableTerraformVersionsRequest extends $dara.Model {
  /**
   * @example
   * 1.35
   */
  keyWord?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyWord: 'keyWord',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWord: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableTerraformVersionsResponseBody extends $dara.Model {
  /**
   * @example
   * b19952f6-1e03-43e3-ac9b-1be20c9ac1a6
   */
  requestId?: string;
  /**
   * @example
   * 58
   */
  totalCount?: number;
  verisonList?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      totalCount: 'totalCount',
      verisonList: 'verisonList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      verisonList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.verisonList)) {
      $dara.Model.validateArray(this.verisonList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableTerraformVersionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAvailableTerraformVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAvailableTerraformVersionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExplorerTasksRequest extends $dara.Model {
  keyword?: string;
  maxResult?: string;
  moduleId?: string;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      maxResult: 'maxResult',
      moduleId: 'moduleId',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxResult: 'string',
      moduleId: 'string',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExplorerTasksResponseBody extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  tasks?: ListExplorerTasksResponseBodyTasks[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      tasks: 'tasks',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ListExplorerTasksResponseBodyTasks },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExplorerTasksResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListExplorerTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListExplorerTasksResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupRequest extends $dara.Model {
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 200
   */
  pageSize?: string;
  /**
   * @example
   * p-14e80de4866bf7ffed0c4072ed9b37
   */
  projectId?: string;
  tag?: ListGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      projectId: 'projectId',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      projectId: 'string',
      tag: { 'type': 'array', 'itemType': ListGroupRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupShrinkRequest extends $dara.Model {
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 200
   */
  pageSize?: string;
  /**
   * @example
   * p-14e80de4866bf7ffed0c4072ed9b37
   */
  projectId?: string;
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      projectId: 'projectId',
      tagShrink: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      projectId: 'string',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 3
   */
  count?: number;
  groups?: ListGroupResponseBodyGroups[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * B6ED9F71-7FA8-598E-B64D-4606FB3FCCC9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      groups: 'groups',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      groups: { 'type': 'array', 'itemType': ListGroupResponseBodyGroups },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * Errored
   */
  status?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $dara.Model {
  jobs?: ListJobsResponseBodyJobs[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 882304F9-6DB1-5593-A719-33473D082B9C
   */
  requestId?: string;
  /**
   * @example
   * 11
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobs: 'jobs',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListJobsResponseBodyJobs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobs)) {
      $dara.Model.validateArray(this.jobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListJobsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModuleVersionRequest extends $dara.Model {
  /**
   * @example
   * key
   */
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModuleVersionResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 792171BB-1A68-5148-8B9B-C7C728E1E98B
   */
  requestId?: string;
  /**
   * @example
   * 6
   */
  totalCount?: number;
  versions?: ListModuleVersionResponseBodyVersions[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      versions: { 'type': 'array', 'itemType': ListModuleVersionResponseBodyVersions },
    };
  }

  validate() {
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModuleVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListModuleVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListModuleVersionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModulesRequest extends $dara.Model {
  excludeModuleIds?: string[];
  groupId?: string;
  /**
   * @example
   * key
   */
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  projectId?: string;
  tag?: ListModulesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      excludeModuleIds: 'excludeModuleIds',
      groupId: 'groupId',
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      projectId: 'projectId',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeModuleIds: { 'type': 'array', 'itemType': 'string' },
      groupId: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      tag: { 'type': 'array', 'itemType': ListModulesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.excludeModuleIds)) {
      $dara.Model.validateArray(this.excludeModuleIds);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModulesShrinkRequest extends $dara.Model {
  excludeModuleIdsShrink?: string;
  groupId?: string;
  /**
   * @example
   * key
   */
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  projectId?: string;
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      excludeModuleIdsShrink: 'excludeModuleIds',
      groupId: 'groupId',
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      projectId: 'projectId',
      tagShrink: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeModuleIdsShrink: 'string',
      groupId: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModulesResponseBody extends $dara.Model {
  modules?: ListModulesResponseBodyModules[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * C617E03B-3DD2-5F0C-A6CF-3028B499A2D5
   */
  requestId?: string;
  /**
   * @example
   * 2790
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      modules: 'modules',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modules: { 'type': 'array', 'itemType': ListModulesResponseBodyModules },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.modules)) {
      $dara.Model.validateArray(this.modules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModulesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListModulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListModulesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterSetRelationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterSetRelationResponseBody extends $dara.Model {
  parameterSets?: ListParameterSetRelationResponseBodyParameterSets[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      parameterSets: 'parameterSets',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterSets: { 'type': 'array', 'itemType': ListParameterSetRelationResponseBodyParameterSets },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.parameterSets)) {
      $dara.Model.validateArray(this.parameterSets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterSetRelationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListParameterSetRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListParameterSetRelationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterSetsRequest extends $dara.Model {
  /**
   * @example
   * key
   */
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterSetsResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  parameterSets?: ListParameterSetsResponseBodyParameterSets[];
  /**
   * @example
   * 4E188A8C-D77A-53F2-9578-E9AD8ABF2FA9
   */
  requestId?: string;
  /**
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      parameterSets: 'parameterSets',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      parameterSets: { 'type': 'array', 'itemType': ListParameterSetsResponseBodyParameterSets },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.parameterSets)) {
      $dara.Model.validateArray(this.parameterSets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterSetsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListParameterSetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListParameterSetsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectRequest extends $dara.Model {
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  tag?: ListProjectRequestTag[];
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      tag: { 'type': 'array', 'itemType': ListProjectRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectShrinkRequest extends $dara.Model {
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      tagShrink: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectResponseBody extends $dara.Model {
  /**
   * @example
   * 3
   */
  count?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  projects?: ListProjectResponseBodyProjects[];
  /**
   * @example
   * 136B3926-DD90-5DB2-96EC-8BAD6407D1C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      projects: 'projects',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      projects: { 'type': 'array', 'itemType': ListProjectResponseBodyProjects },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.projects)) {
      $dara.Model.validateArray(this.projects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProjectResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectBuildsRequest extends $dara.Model {
  groupId?: string;
  pageNumber?: string;
  pageSize?: string;
  projectBuildAction?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      projectBuildAction: 'projectBuildAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      projectBuildAction: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectBuildsResponseBody extends $dara.Model {
  projectBuilds?: ListProjectBuildsResponseBodyProjectBuilds[];
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 89154E16-FB0A-573D-8AF5-CF3F2FE28913
   */
  requestId?: string;
  /**
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      projectBuilds: 'ProjectBuilds',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectBuilds: { 'type': 'array', 'itemType': ListProjectBuildsResponseBodyProjectBuilds },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.projectBuilds)) {
      $dara.Model.validateArray(this.projectBuilds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectBuildsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProjectBuildsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProjectBuildsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRabbitmqPublishersRequest extends $dara.Model {
  /**
   * @example
   * key
   */
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRabbitmqPublishersResponseBody extends $dara.Model {
  authorizations?: ListRabbitmqPublishersResponseBodyAuthorizations[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 6599600A-20F6-556D-A15C-55EB9243BB24
   */
  requestId?: string;
  /**
   * @example
   * 72
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      authorizations: 'authorizations',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizations: { 'type': 'array', 'itemType': ListRabbitmqPublishersResponseBodyAuthorizations },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.authorizations)) {
      $dara.Model.validateArray(this.authorizations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRabbitmqPublishersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRabbitmqPublishersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRabbitmqPublishersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRamPolicyExportTaskVersionsRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRamPolicyExportTaskVersionsResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  ramPolicyExportTaskVersions?: ListRamPolicyExportTaskVersionsResponseBodyRamPolicyExportTaskVersions[];
  /**
   * @example
   * E2D0E863-1651-5E58-823F-B451C8C24615
   */
  requestId?: string;
  /**
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      ramPolicyExportTaskVersions: 'ramPolicyExportTaskVersions',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      ramPolicyExportTaskVersions: { 'type': 'array', 'itemType': ListRamPolicyExportTaskVersionsResponseBodyRamPolicyExportTaskVersions },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ramPolicyExportTaskVersions)) {
      $dara.Model.validateArray(this.ramPolicyExportTaskVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRamPolicyExportTaskVersionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRamPolicyExportTaskVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRamPolicyExportTaskVersionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRamPolicyExportTasksRequest extends $dara.Model {
  /**
   * @example
   * vpc
   */
  keyword?: string;
  /**
   * @example
   * mod-43143bd9145a5258
   */
  moduleId?: string;
  moduleVersion?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      moduleId: 'string',
      moduleVersion: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRamPolicyExportTasksResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  ramPolicyExportTasks?: ListRamPolicyExportTasksResponseBodyRamPolicyExportTasks[];
  /**
   * @example
   * B6ED9F71-7FA8-598E-B64D-4606FB3FCCC9
   */
  requestId?: string;
  /**
   * @example
   * 43
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      ramPolicyExportTasks: 'ramPolicyExportTasks',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      ramPolicyExportTasks: { 'type': 'array', 'itemType': ListRamPolicyExportTasksResponseBodyRamPolicyExportTasks },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ramPolicyExportTasks)) {
      $dara.Model.validateArray(this.ramPolicyExportTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRamPolicyExportTasksResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRamPolicyExportTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRamPolicyExportTasksResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTaskVersionsRequest extends $dara.Model {
  exportVersion?: string;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      exportVersion: 'exportVersion',
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportVersion: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTaskVersionsResponseBody extends $dara.Model {
  exportTasks?: ListResourceExportTaskVersionsResponseBodyExportTasks[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      exportTasks: 'exportTasks',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTasks: { 'type': 'array', 'itemType': ListResourceExportTaskVersionsResponseBodyExportTasks },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.exportTasks)) {
      $dara.Model.validateArray(this.exportTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTaskVersionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourceExportTaskVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListResourceExportTaskVersionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTasksRequest extends $dara.Model {
  exportTaskId?: string;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      exportTaskId: 'exportTaskId',
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTaskId: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTasksResponseBody extends $dara.Model {
  exportTasks?: ListResourceExportTasksResponseBodyExportTasks[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      exportTasks: 'exportTasks',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTasks: { 'type': 'array', 'itemType': ListResourceExportTasksResponseBodyExportTasks },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.exportTasks)) {
      $dara.Model.validateArray(this.exportTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTasksResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourceExportTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListResourceExportTasksResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesRequest extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceValue?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  specType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      sourceType: 'sourceType',
      sourceValue: 'sourceValue',
      specType: 'specType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      sourceType: 'string',
      sourceValue: 'string',
      specType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBody extends $dara.Model {
  resources?: ListResourcesResponseBodyResources[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      resources: 'Resources',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resources: { 'type': 'array', 'itemType': ListResourcesResponseBodyResources },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksRequest extends $dara.Model {
  excludeTaskIds?: string[];
  /**
   * @example
   * g-59d8d22e78792ffe3d3eb6154d727
   */
  groupId?: string;
  /**
   * @example
   * key
   */
  keyword?: string;
  /**
   * @example
   * mod-1525e992f1b62139d1c437d64ae
   */
  moduleId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * p-433aead7560572f8d95b25775c
   */
  projectId?: string;
  status?: string;
  tag?: ListTasksRequestTag[];
  /**
   * @example
   * task-433aead756057fffeaba4828f5195
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      excludeTaskIds: 'excludeTaskIds',
      groupId: 'groupId',
      keyword: 'keyword',
      moduleId: 'moduleId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      projectId: 'projectId',
      status: 'status',
      tag: 'tag',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeTaskIds: { 'type': 'array', 'itemType': 'string' },
      groupId: 'string',
      keyword: 'string',
      moduleId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListTasksRequestTag },
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.excludeTaskIds)) {
      $dara.Model.validateArray(this.excludeTaskIds);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksShrinkRequest extends $dara.Model {
  excludeTaskIdsShrink?: string;
  /**
   * @example
   * g-59d8d22e78792ffe3d3eb6154d727
   */
  groupId?: string;
  /**
   * @example
   * key
   */
  keyword?: string;
  /**
   * @example
   * mod-1525e992f1b62139d1c437d64ae
   */
  moduleId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * p-433aead7560572f8d95b25775c
   */
  projectId?: string;
  status?: string;
  tagShrink?: string;
  /**
   * @example
   * task-433aead756057fffeaba4828f5195
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      excludeTaskIdsShrink: 'excludeTaskIds',
      groupId: 'groupId',
      keyword: 'keyword',
      moduleId: 'moduleId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      projectId: 'projectId',
      status: 'status',
      tagShrink: 'tag',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeTaskIdsShrink: 'string',
      groupId: 'string',
      keyword: 'string',
      moduleId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      status: 'string',
      tagShrink: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 98610149-488B-5E48-B981-8D4CE1AF77CD
   */
  requestId?: string;
  tasks?: ListTasksResponseBodyTasks[];
  /**
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      tasks: 'tasks',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ListTasksResponseBodyTasks },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTasksResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTerraformProviderVersionsRequest extends $dara.Model {
  keyword?: string;
  maxResults?: number;
  nextToken?: string;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      usage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTerraformProviderVersionsResponseBody extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  /**
   * @example
   * 73588ebb-9d40-4660-a59f-764636ae6034
   */
  requestId?: string;
  /**
   * @example
   * 50
   */
  totalCount?: number;
  verisonList?: string[];
  versions?: ListTerraformProviderVersionsResponseBodyVersions[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
      verisonList: 'verisonList',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      verisonList: { 'type': 'array', 'itemType': 'string' },
      versions: { 'type': 'array', 'itemType': ListTerraformProviderVersionsResponseBodyVersions },
    };
  }

  validate() {
    if(Array.isArray(this.verisonList)) {
      $dara.Model.validateArray(this.verisonList);
    }
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTerraformProviderVersionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTerraformProviderVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTerraformProviderVersionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateJobRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dasd
   */
  comment?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateJobResponseBody extends $dara.Model {
  /**
   * @example
   * E602681C-A811-5787-9DC3-48BED7537071
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OperateJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OperateJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveResourceExportTaskVersionResponseBody extends $dara.Model {
  /**
   * @example
   * BF72A6FB-B071-5F2E-A036-9D62545B962C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveResourceExportTaskVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveResourceExportTaskVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveResourceExportTaskVersionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tags?: TagResourcesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': TagResourcesRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $dara.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAuthorizationAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dueTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      dueTime: 'dueTime',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dueTime: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAuthorizationAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 712C87FE-7C24-5298-B3E3-2BCB7AB9ED01
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAuthorizationAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAuthorizationAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAuthorizationAttributeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExplorerTaskAttributeRequest extends $dara.Model {
  autoApply?: boolean;
  explorerTaskName?: string;
  moduleId?: string;
  moduleVersion?: string;
  terraformProviderVersion?: string;
  static names(): { [key: string]: string } {
    return {
      autoApply: 'autoApply',
      explorerTaskName: 'explorerTaskName',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      terraformProviderVersion: 'terraformProviderVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoApply: 'boolean',
      explorerTaskName: 'string',
      moduleId: 'string',
      moduleVersion: 'string',
      terraformProviderVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExplorerTaskAttributeResponseBody extends $dara.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExplorerTaskAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateExplorerTaskAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateExplorerTaskAttributeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  autoDestroy?: boolean;
  /**
   * @example
   * true
   */
  autoTrigger?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * true
   */
  forcedSetting?: boolean;
  /**
   * @example
   * test
   */
  name?: string;
  notifyConfig?: UpdateGroupRequestNotifyConfig[];
  notifyOperationTypes?: string[];
  /**
   * @example
   * {}
   */
  ramRole?: string;
  reportExportField?: string[];
  /**
   * @example
   * /
   */
  reportExportPath?: string;
  /**
   * @example
   * 1.183.0
   */
  terraformProviderVersion?: string;
  triggerConfig?: UpdateGroupRequestTriggerConfig[];
  triggerResourceType?: string[];
  static names(): { [key: string]: string } {
    return {
      autoDestroy: 'autoDestroy',
      autoTrigger: 'autoTrigger',
      clientToken: 'clientToken',
      description: 'description',
      forcedSetting: 'forcedSetting',
      name: 'name',
      notifyConfig: 'notifyConfig',
      notifyOperationTypes: 'notifyOperationTypes',
      ramRole: 'ramRole',
      reportExportField: 'reportExportField',
      reportExportPath: 'reportExportPath',
      terraformProviderVersion: 'terraformProviderVersion',
      triggerConfig: 'triggerConfig',
      triggerResourceType: 'triggerResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDestroy: 'boolean',
      autoTrigger: 'boolean',
      clientToken: 'string',
      description: 'string',
      forcedSetting: 'boolean',
      name: 'string',
      notifyConfig: { 'type': 'array', 'itemType': UpdateGroupRequestNotifyConfig },
      notifyOperationTypes: { 'type': 'array', 'itemType': 'string' },
      ramRole: 'string',
      reportExportField: { 'type': 'array', 'itemType': 'string' },
      reportExportPath: 'string',
      terraformProviderVersion: 'string',
      triggerConfig: { 'type': 'array', 'itemType': UpdateGroupRequestTriggerConfig },
      triggerResourceType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.notifyConfig)) {
      $dara.Model.validateArray(this.notifyConfig);
    }
    if(Array.isArray(this.notifyOperationTypes)) {
      $dara.Model.validateArray(this.notifyOperationTypes);
    }
    if(Array.isArray(this.reportExportField)) {
      $dara.Model.validateArray(this.reportExportField);
    }
    if(Array.isArray(this.triggerConfig)) {
      $dara.Model.validateArray(this.triggerConfig);
    }
    if(Array.isArray(this.triggerResourceType)) {
      $dara.Model.validateArray(this.triggerResourceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 4EF5E823-AC0D-5CB5-8F18-1352455A488D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModuleAttributeRequest extends $dara.Model {
  /**
   * @example
   * test
   */
  description?: string;
  groupInfo?: UpdateModuleAttributeRequestGroupInfo;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * OSS
   */
  source?: string;
  /**
   * @example
   * OSS：
   * "oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip"
   * Registry：
   * "alibaba/security-group/alicloud:2.1.0"
   */
  sourcePath?: string;
  /**
   * @example
   * oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/terraform.tfstate
   */
  statePath?: string;
  /**
   * @example
   * Manual
   */
  versionStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      groupInfo: 'groupInfo',
      name: 'name',
      source: 'source',
      sourcePath: 'sourcePath',
      statePath: 'statePath',
      versionStrategy: 'versionStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupInfo: UpdateModuleAttributeRequestGroupInfo,
      name: 'string',
      source: 'string',
      sourcePath: 'string',
      statePath: 'string',
      versionStrategy: 'string',
    };
  }

  validate() {
    if(this.groupInfo && typeof (this.groupInfo as any).validate === 'function') {
      (this.groupInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModuleAttributeResponseBody extends $dara.Model {
  /**
   * @example
   * CA05185E-6B90-5941-98D4-7212688AECC8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModuleAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateModuleAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateModuleAttributeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateParameterSetAttributeRequest extends $dara.Model {
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  parameters?: UpdateParameterSetAttributeRequestParameters[];
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      parameters: 'parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      parameters: { 'type': 'array', 'itemType': UpdateParameterSetAttributeRequestParameters },
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateParameterSetAttributeResponseBody extends $dara.Model {
  /**
   * @example
   * 81CF7E18-D318-5670-9A4D-C08476BC4899
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateParameterSetAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateParameterSetAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateParameterSetAttributeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponseBody extends $dara.Model {
  /**
   * @example
   * C62888F6-254D-5589-BF05-0D9EE698C187
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateProjectResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRabbitmqPublisherAttributeRequest extends $dara.Model {
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * ExchangeTest
   */
  exchangeName?: string;
  /**
   * @example
   * TOPIC
   */
  exchangeType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      exchangeName: 'exchangeName',
      exchangeType: 'exchangeType',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      exchangeName: 'string',
      exchangeType: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRabbitmqPublisherAttributeResponseBody extends $dara.Model {
  /**
   * @example
   * E2D0E863-1651-5E58-823F-B451C8C24615
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRabbitmqPublisherAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRabbitmqPublisherAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRabbitmqPublisherAttributeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRamPolicyExportTaskAttributeRequest extends $dara.Model {
  authorizationAccountIds?: number[];
  authorizationActions?: string[];
  authorizationRegionIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mod-143574fff6b316f4eb737e
   */
  moduleId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v1
   */
  moduleVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * ramName
   */
  ramRole?: string;
  /**
   * @example
   * Auto
   */
  triggerStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationAccountIds: 'authorizationAccountIds',
      authorizationActions: 'authorizationActions',
      authorizationRegionIds: 'authorizationRegionIds',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      name: 'name',
      ramRole: 'ramRole',
      triggerStrategy: 'triggerStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationAccountIds: { 'type': 'array', 'itemType': 'number' },
      authorizationActions: { 'type': 'array', 'itemType': 'string' },
      authorizationRegionIds: { 'type': 'array', 'itemType': 'string' },
      moduleId: 'string',
      moduleVersion: 'string',
      name: 'string',
      ramRole: 'string',
      triggerStrategy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authorizationAccountIds)) {
      $dara.Model.validateArray(this.authorizationAccountIds);
    }
    if(Array.isArray(this.authorizationActions)) {
      $dara.Model.validateArray(this.authorizationActions);
    }
    if(Array.isArray(this.authorizationRegionIds)) {
      $dara.Model.validateArray(this.authorizationRegionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRamPolicyExportTaskAttributeResponseBody extends $dara.Model {
  /**
   * @example
   * BF72A6FB-B071-5F2E-A036-9D62545B962C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRamPolicyExportTaskAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRamPolicyExportTaskAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRamPolicyExportTaskAttributeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceExportTaskAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  clientToken?: string;
  configPath?: string;
  description?: string;
  excludeRules?: UpdateResourceExportTaskAttributeRequestExcludeRules[];
  exportToModule?: UpdateResourceExportTaskAttributeRequestExportToModule;
  includeRules?: UpdateResourceExportTaskAttributeRequestIncludeRules[];
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  ramRole?: string;
  terraformProviderVersion?: string;
  terraformVersion?: string;
  triggerStrategy?: string;
  variables?: UpdateResourceExportTaskAttributeRequestVariables[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      configPath: 'configPath',
      description: 'description',
      excludeRules: 'excludeRules',
      exportToModule: 'exportToModule',
      includeRules: 'includeRules',
      name: 'name',
      ramRole: 'ramRole',
      terraformProviderVersion: 'terraformProviderVersion',
      terraformVersion: 'terraformVersion',
      triggerStrategy: 'triggerStrategy',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configPath: 'string',
      description: 'string',
      excludeRules: { 'type': 'array', 'itemType': UpdateResourceExportTaskAttributeRequestExcludeRules },
      exportToModule: UpdateResourceExportTaskAttributeRequestExportToModule,
      includeRules: { 'type': 'array', 'itemType': UpdateResourceExportTaskAttributeRequestIncludeRules },
      name: 'string',
      ramRole: 'string',
      terraformProviderVersion: 'string',
      terraformVersion: 'string',
      triggerStrategy: 'string',
      variables: { 'type': 'array', 'itemType': UpdateResourceExportTaskAttributeRequestVariables },
    };
  }

  validate() {
    if(Array.isArray(this.excludeRules)) {
      $dara.Model.validateArray(this.excludeRules);
    }
    if(this.exportToModule && typeof (this.exportToModule as any).validate === 'function') {
      (this.exportToModule as any).validate();
    }
    if(Array.isArray(this.includeRules)) {
      $dara.Model.validateArray(this.includeRules);
    }
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceExportTaskAttributeResponseBody extends $dara.Model {
  exportTaskId?: string;
  exportVersion?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exportTaskId: 'exportTaskId',
      exportVersion: 'exportVersion',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTaskId: 'string',
      exportVersion: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceExportTaskAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateResourceExportTaskAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateResourceExportTaskAttributeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  autoApply?: boolean;
  /**
   * @example
   * true
   */
  autoDestroy?: boolean;
  /**
   * @example
   * demo
   */
  description?: string;
  groupInfo?: UpdateTaskAttributeRequestGroupInfo;
  initModuleState?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mod-148e7853433574fff6b316f4eb737e
   */
  moduleId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v1
   */
  moduleVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  parameters?: { [key: string]: string };
  protectionStrategy?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {}
   */
  ramRole?: string;
  skipPropertyValidation?: boolean;
  /**
   * @example
   * 1.2.6
   */
  terraformVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Manual
   */
  triggerStrategy?: string;
  /**
   * @example
   * ******
   */
  triggerValue?: string;
  static names(): { [key: string]: string } {
    return {
      autoApply: 'autoApply',
      autoDestroy: 'autoDestroy',
      description: 'description',
      groupInfo: 'groupInfo',
      initModuleState: 'initModuleState',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      name: 'name',
      parameters: 'parameters',
      protectionStrategy: 'protectionStrategy',
      ramRole: 'ramRole',
      skipPropertyValidation: 'skipPropertyValidation',
      terraformVersion: 'terraformVersion',
      triggerStrategy: 'triggerStrategy',
      triggerValue: 'triggerValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoApply: 'boolean',
      autoDestroy: 'boolean',
      description: 'string',
      groupInfo: UpdateTaskAttributeRequestGroupInfo,
      initModuleState: 'boolean',
      moduleId: 'string',
      moduleVersion: 'string',
      name: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      protectionStrategy: { 'type': 'array', 'itemType': 'string' },
      ramRole: 'string',
      skipPropertyValidation: 'boolean',
      terraformVersion: 'string',
      triggerStrategy: 'string',
      triggerValue: 'string',
    };
  }

  validate() {
    if(this.groupInfo && typeof (this.groupInfo as any).validate === 'function') {
      (this.groupInfo as any).validate();
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    if(Array.isArray(this.protectionStrategy)) {
      $dara.Model.validateArray(this.protectionStrategy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskAttributeResponseBody extends $dara.Model {
  /**
   * @example
   * 17793D91-A26F-520D-A948-3452A45D15B1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTaskAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateTaskAttributeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  taskPolicies?: UpdateTaskPolicyRequestTaskPolicies[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      taskPolicies: 'taskPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      taskPolicies: { 'type': 'array', 'itemType': UpdateTaskPolicyRequestTaskPolicies },
    };
  }

  validate() {
    if(Array.isArray(this.taskPolicies)) {
      $dara.Model.validateArray(this.taskPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskPolicyResponseBody extends $dara.Model {
  /**
   * @example
   * 0D797DC3-FF04-5C21-81EB-92C7799512E3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTaskPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateTaskPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("iacservice", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 分组关联
   * 
   * @param request - AssociateGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateGroupResponse
   */
  async associateGroupWithOptions(groupId: string, request: AssociateGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<AssociateGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.resourceIds)) {
      body["resourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group/${$dara.URL.percentEncode(groupId)}/associate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<AssociateGroupResponse>(await this.callApi(params, req, runtime), new AssociateGroupResponse({}));
  }

  /**
   * 分组关联
   * 
   * @param request - AssociateGroupRequest
   * @returns AssociateGroupResponse
   */
  async associateGroup(groupId: string, request: AssociateGroupRequest): Promise<AssociateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.associateGroupWithOptions(groupId, request, headers, runtime);
  }

  /**
   * 将参数集关联资源
   * 
   * @param request - AssociateParameterSetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateParameterSetResponse
   */
  async associateParameterSetWithOptions(request: AssociateParameterSetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<AssociateParameterSetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.parameterSetIds)) {
      body["parameterSetIds"] = request.parameterSetIds;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateParameterSet",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/parameterSets/operations/associate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<AssociateParameterSetResponse>(await this.callApi(params, req, runtime), new AssociateParameterSetResponse({}));
  }

  /**
   * 将参数集关联资源
   * 
   * @param request - AssociateParameterSetRequest
   * @returns AssociateParameterSetResponse
   */
  async associateParameterSet(request: AssociateParameterSetRequest): Promise<AssociateParameterSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.associateParameterSetWithOptions(request, headers, runtime);
  }

  /**
   * 将消息发布者挂载到任务
   * 
   * @param request - AttachRabbitmqPublisherRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachRabbitmqPublisherResponse
   */
  async attachRabbitmqPublisherWithOptions(publisherId: string, request: AttachRabbitmqPublisherRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<AttachRabbitmqPublisherResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachRabbitmqPublisher",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/publishers/${$dara.URL.percentEncode(publisherId)}/attach`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<AttachRabbitmqPublisherResponse>(await this.callApi(params, req, runtime), new AttachRabbitmqPublisherResponse({}));
  }

  /**
   * 将消息发布者挂载到任务
   * 
   * @param request - AttachRabbitmqPublisherRequest
   * @returns AttachRabbitmqPublisherResponse
   */
  async attachRabbitmqPublisher(publisherId: string, request: AttachRabbitmqPublisherRequest): Promise<AttachRabbitmqPublisherResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.attachRabbitmqPublisherWithOptions(publisherId, request, headers, runtime);
  }

  /**
   * 取消执行
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelProjectBuildResponse
   */
  async cancelProjectBuildWithOptions(projectId: string, projectBuildId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CancelProjectBuildResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelProjectBuild",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project/${$dara.URL.percentEncode(projectId)}/build/${$dara.URL.percentEncode(projectBuildId)}/cancel`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CancelProjectBuildResponse>(await this.callApi(params, req, runtime), new CancelProjectBuildResponse({}));
  }

  /**
   * 取消执行
   * @returns CancelProjectBuildResponse
   */
  async cancelProjectBuild(projectId: string, projectBuildId: string): Promise<CancelProjectBuildResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelProjectBuildWithOptions(projectId, projectBuildId, headers, runtime);
  }

  /**
   * 取消RAM策略导出任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelRamPolicyExportTaskResponse
   */
  async cancelRamPolicyExportTaskWithOptions(ramPolicyExportTaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CancelRamPolicyExportTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelRamPolicyExportTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/ramPolicyExportTasks/${$dara.URL.percentEncode(ramPolicyExportTaskId)}/cancel`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CancelRamPolicyExportTaskResponse>(await this.callApi(params, req, runtime), new CancelRamPolicyExportTaskResponse({}));
  }

  /**
   * 取消RAM策略导出任务
   * @returns CancelRamPolicyExportTaskResponse
   */
  async cancelRamPolicyExportTask(ramPolicyExportTaskId: string): Promise<CancelRamPolicyExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelRamPolicyExportTaskWithOptions(ramPolicyExportTaskId, headers, runtime);
  }

  /**
   * 取消资源导出任务
   * 
   * @param request - CancelResourceExportTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelResourceExportTaskResponse
   */
  async cancelResourceExportTaskWithOptions(exportTaskId: string, request: CancelResourceExportTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CancelResourceExportTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelResourceExportTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks/cancel/${$dara.URL.percentEncode(exportTaskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CancelResourceExportTaskResponse>(await this.callApi(params, req, runtime), new CancelResourceExportTaskResponse({}));
  }

  /**
   * 取消资源导出任务
   * 
   * @param request - CancelResourceExportTaskRequest
   * @returns CancelResourceExportTaskResponse
   */
  async cancelResourceExportTask(exportTaskId: string, request: CancelResourceExportTaskRequest): Promise<CancelResourceExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelResourceExportTaskWithOptions(exportTaskId, request, headers, runtime);
  }

  /**
   * 校验资源名称
   * 
   * @param request - CheckResourceNameRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckResourceNameResponse
   */
  async checkResourceNameWithOptions(request: CheckResourceNameRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CheckResourceNameResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.parentId)) {
      query["parentId"] = request.parentId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckResourceName",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/check/name`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CheckResourceNameResponse>(await this.callApi(params, req, runtime), new CheckResourceNameResponse({}));
  }

  /**
   * 校验资源名称
   * 
   * @param request - CheckResourceNameRequest
   * @returns CheckResourceNameResponse
   */
  async checkResourceName(request: CheckResourceNameRequest): Promise<CheckResourceNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkResourceNameWithOptions(request, headers, runtime);
  }

  /**
   * 克隆分组
   * 
   * @param request - CloneGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneGroupResponse
   */
  async cloneGroupWithOptions(groupId: string, request: CloneGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CloneGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.resourceTypes)) {
      body["resourceTypes"] = request.resourceTypes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloneGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group/${$dara.URL.percentEncode(groupId)}/clone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CloneGroupResponse>(await this.callApi(params, req, runtime), new CloneGroupResponse({}));
  }

  /**
   * 克隆分组
   * 
   * @param request - CloneGroupRequest
   * @returns CloneGroupResponse
   */
  async cloneGroup(groupId: string, request: CloneGroupRequest): Promise<CloneGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneGroupWithOptions(groupId, request, headers, runtime);
  }

  /**
   * 克隆模版
   * 
   * @param request - CloneModuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneModuleResponse
   */
  async cloneModuleWithOptions(request: CloneModuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CloneModuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.moduleId)) {
      body["moduleId"] = request.moduleId;
    }

    if (!$dara.isNull(request.moduleSource)) {
      body["moduleSource"] = request.moduleSource;
    }

    if (!$dara.isNull(request.moduleVersion)) {
      body["moduleVersion"] = request.moduleVersion;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloneModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules/operations/clone`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CloneModuleResponse>(await this.callApi(params, req, runtime), new CloneModuleResponse({}));
  }

  /**
   * 克隆模版
   * 
   * @param request - CloneModuleRequest
   * @returns CloneModuleResponse
   */
  async cloneModule(request: CloneModuleRequest): Promise<CloneModuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneModuleWithOptions(request, headers, runtime);
  }

  /**
   * 创建共享
   * 
   * @param request - CreateAuthorizationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAuthorizationResponse
   */
  async createAuthorizationWithOptions(request: CreateAuthorizationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateAuthorizationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dueTime)) {
      body["dueTime"] = request.dueTime;
    }

    if (!$dara.isNull(request.moduleId)) {
      body["moduleId"] = request.moduleId;
    }

    if (!$dara.isNull(request.moduleVersion)) {
      body["moduleVersion"] = request.moduleVersion;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.uid)) {
      body["uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAuthorization",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/authorizations`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateAuthorizationResponse>(await this.callApi(params, req, runtime), new CreateAuthorizationResponse({}));
  }

  /**
   * 创建共享
   * 
   * @param request - CreateAuthorizationRequest
   * @returns CreateAuthorizationResponse
   */
  async createAuthorization(request: CreateAuthorizationRequest): Promise<CreateAuthorizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAuthorizationWithOptions(request, headers, runtime);
  }

  /**
   * 创建Explorer任务
   * 
   * @param request - CreateExplorerTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExplorerTaskResponse
   */
  async createExplorerTaskWithOptions(request: CreateExplorerTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateExplorerTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.initModuleState)) {
      body["InitModuleState"] = request.initModuleState;
    }

    if (!$dara.isNull(request.terraformVersion)) {
      body["TerraformVersion"] = request.terraformVersion;
    }

    if (!$dara.isNull(request.autoApply)) {
      body["autoApply"] = request.autoApply;
    }

    if (!$dara.isNull(request.autoDestroy)) {
      body["autoDestroy"] = request.autoDestroy;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.initModuleState)) {
      body["initModuleState"] = request.initModuleState;
    }

    if (!$dara.isNull(request.moduleId)) {
      body["moduleId"] = request.moduleId;
    }

    if (!$dara.isNull(request.moduleVersion)) {
      body["moduleVersion"] = request.moduleVersion;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.skipPropertyValidation)) {
      body["skipPropertyValidation"] = request.skipPropertyValidation;
    }

    if (!$dara.isNull(request.terraformProviderVersion)) {
      body["terraformProviderVersion"] = request.terraformProviderVersion;
    }

    if (!$dara.isNull(request.triggerValue)) {
      body["triggerValue"] = request.triggerValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateExplorerTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/explorerTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateExplorerTaskResponse>(await this.callApi(params, req, runtime), new CreateExplorerTaskResponse({}));
  }

  /**
   * 创建Explorer任务
   * 
   * @param request - CreateExplorerTaskRequest
   * @returns CreateExplorerTaskResponse
   */
  async createExplorerTask(request: CreateExplorerTaskRequest): Promise<CreateExplorerTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createExplorerTaskWithOptions(request, headers, runtime);
  }

  /**
   * 创建分组
   * 
   * @param request - CreateGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGroupResponse
   */
  async createGroupWithOptions(request: CreateGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoDestroy)) {
      body["autoDestroy"] = request.autoDestroy;
    }

    if (!$dara.isNull(request.autoTrigger)) {
      body["autoTrigger"] = request.autoTrigger;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.forcedSetting)) {
      body["forcedSetting"] = request.forcedSetting;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.notifyConfig)) {
      body["notifyConfig"] = request.notifyConfig;
    }

    if (!$dara.isNull(request.notifyOperationTypes)) {
      body["notifyOperationTypes"] = request.notifyOperationTypes;
    }

    if (!$dara.isNull(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    if (!$dara.isNull(request.reportExportField)) {
      body["reportExportField"] = request.reportExportField;
    }

    if (!$dara.isNull(request.reportExportPath)) {
      body["reportExportPath"] = request.reportExportPath;
    }

    if (!$dara.isNull(request.terraformProviderVersion)) {
      body["terraformProviderVersion"] = request.terraformProviderVersion;
    }

    if (!$dara.isNull(request.triggerConfig)) {
      body["triggerConfig"] = request.triggerConfig;
    }

    if (!$dara.isNull(request.triggerResourceType)) {
      body["triggerResourceType"] = request.triggerResourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateGroupResponse>(await this.callApi(params, req, runtime), new CreateGroupResponse({}));
  }

  /**
   * 创建分组
   * 
   * @param request - CreateGroupRequest
   * @returns CreateGroupResponse
   */
  async createGroup(request: CreateGroupRequest): Promise<CreateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGroupWithOptions(request, headers, runtime);
  }

  /**
   * 创建作业
   * 
   * @param request - CreateJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateJobResponse
   */
  async createJobWithOptions(taskId: string, request: CreateJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.executeType)) {
      body["executeType"] = request.executeType;
    }

    if (!$dara.isNull(request.subCommand)) {
      body["subCommand"] = request.subCommand;
    }

    if (!$dara.isNull(request.taskType)) {
      body["taskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateJob",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${$dara.URL.percentEncode(taskId)}/jobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateJobResponse>(await this.callApi(params, req, runtime), new CreateJobResponse({}));
  }

  /**
   * 创建作业
   * 
   * @param request - CreateJobRequest
   * @returns CreateJobResponse
   */
  async createJob(taskId: string, request: CreateJobRequest): Promise<CreateJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createJobWithOptions(taskId, request, headers, runtime);
  }

  /**
   * 创建模版
   * 
   * @param request - CreateModuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModuleResponse
   */
  async createModuleWithOptions(request: CreateModuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateModuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.groupInfo)) {
      body["groupInfo"] = request.groupInfo;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.source)) {
      body["source"] = request.source;
    }

    if (!$dara.isNull(request.sourcePath)) {
      body["sourcePath"] = request.sourcePath;
    }

    if (!$dara.isNull(request.statePath)) {
      body["statePath"] = request.statePath;
    }

    if (!$dara.isNull(request.versionStrategy)) {
      body["versionStrategy"] = request.versionStrategy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateModuleResponse>(await this.callApi(params, req, runtime), new CreateModuleResponse({}));
  }

  /**
   * 创建模版
   * 
   * @param request - CreateModuleRequest
   * @returns CreateModuleResponse
   */
  async createModule(request: CreateModuleRequest): Promise<CreateModuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModuleWithOptions(request, headers, runtime);
  }

  /**
   * 创建模版版本
   * 
   * @param request - CreateModuleVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModuleVersionResponse
   */
  async createModuleVersionWithOptions(moduleId: string, request: CreateModuleVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateModuleVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModuleVersion",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules/${$dara.URL.percentEncode(moduleId)}/versions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateModuleVersionResponse>(await this.callApi(params, req, runtime), new CreateModuleVersionResponse({}));
  }

  /**
   * 创建模版版本
   * 
   * @param request - CreateModuleVersionRequest
   * @returns CreateModuleVersionResponse
   */
  async createModuleVersion(moduleId: string, request: CreateModuleVersionRequest): Promise<CreateModuleVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModuleVersionWithOptions(moduleId, request, headers, runtime);
  }

  /**
   * 创建参数集
   * 
   * @param request - CreateParameterSetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateParameterSetResponse
   */
  async createParameterSetWithOptions(request: CreateParameterSetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateParameterSetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateParameterSet",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/parameterSets`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateParameterSetResponse>(await this.callApi(params, req, runtime), new CreateParameterSetResponse({}));
  }

  /**
   * 创建参数集
   * 
   * @param request - CreateParameterSetRequest
   * @returns CreateParameterSetResponse
   */
  async createParameterSet(request: CreateParameterSetRequest): Promise<CreateParameterSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createParameterSetWithOptions(request, headers, runtime);
  }

  /**
   * 创建项目
   * 
   * @param request - CreateProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectResponse
   */
  async createProjectWithOptions(request: CreateProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProject",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateProjectResponse>(await this.callApi(params, req, runtime), new CreateProjectResponse({}));
  }

  /**
   * 创建项目
   * 
   * @param request - CreateProjectRequest
   * @returns CreateProjectResponse
   */
  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProjectWithOptions(request, headers, runtime);
  }

  /**
   * 构建项目批次
   * 
   * @param request - CreateProjectBuildRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectBuildResponse
   */
  async createProjectBuildWithOptions(projectId: string, request: CreateProjectBuildRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateProjectBuildResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.groupId)) {
      body["groupId"] = request.groupId;
    }

    if (!$dara.isNull(request.projectBuildAction)) {
      body["projectBuildAction"] = request.projectBuildAction;
    }

    if (!$dara.isNull(request.taskIds)) {
      body["taskIds"] = request.taskIds;
    }

    if (!$dara.isNull(request.taskPolicies)) {
      body["taskPolicies"] = request.taskPolicies;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProjectBuild",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project/${$dara.URL.percentEncode(projectId)}/build`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateProjectBuildResponse>(await this.callApi(params, req, runtime), new CreateProjectBuildResponse({}));
  }

  /**
   * 构建项目批次
   * 
   * @param request - CreateProjectBuildRequest
   * @returns CreateProjectBuildResponse
   */
  async createProjectBuild(projectId: string, request: CreateProjectBuildRequest): Promise<CreateProjectBuildResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProjectBuildWithOptions(projectId, request, headers, runtime);
  }

  /**
   * 创建消息发布者
   * 
   * @param request - CreateRabbitmqPublisherRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRabbitmqPublisherResponse
   */
  async createRabbitmqPublisherWithOptions(request: CreateRabbitmqPublisherRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateRabbitmqPublisherResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.exchangeName)) {
      body["exchangeName"] = request.exchangeName;
    }

    if (!$dara.isNull(request.exchangeType)) {
      body["exchangeType"] = request.exchangeType;
    }

    if (!$dara.isNull(request.hostName)) {
      body["hostName"] = request.hostName;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.password)) {
      body["password"] = request.password;
    }

    if (!$dara.isNull(request.port)) {
      body["port"] = request.port;
    }

    if (!$dara.isNull(request.userName)) {
      body["userName"] = request.userName;
    }

    if (!$dara.isNull(request.virtualHost)) {
      body["virtualHost"] = request.virtualHost;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRabbitmqPublisher",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/publishers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateRabbitmqPublisherResponse>(await this.callApi(params, req, runtime), new CreateRabbitmqPublisherResponse({}));
  }

  /**
   * 创建消息发布者
   * 
   * @param request - CreateRabbitmqPublisherRequest
   * @returns CreateRabbitmqPublisherResponse
   */
  async createRabbitmqPublisher(request: CreateRabbitmqPublisherRequest): Promise<CreateRabbitmqPublisherResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRabbitmqPublisherWithOptions(request, headers, runtime);
  }

  /**
   * 创建RAM策略导出任务
   * 
   * @param request - CreateRamPolicyExportTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRamPolicyExportTaskResponse
   */
  async createRamPolicyExportTaskWithOptions(request: CreateRamPolicyExportTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateRamPolicyExportTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authorizationAccountIds)) {
      body["authorizationAccountIds"] = request.authorizationAccountIds;
    }

    if (!$dara.isNull(request.authorizationActions)) {
      body["authorizationActions"] = request.authorizationActions;
    }

    if (!$dara.isNull(request.authorizationRegionIds)) {
      body["authorizationRegionIds"] = request.authorizationRegionIds;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.moduleId)) {
      body["moduleId"] = request.moduleId;
    }

    if (!$dara.isNull(request.moduleVersion)) {
      body["moduleVersion"] = request.moduleVersion;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    if (!$dara.isNull(request.terraformProviderVersion)) {
      body["terraformProviderVersion"] = request.terraformProviderVersion;
    }

    if (!$dara.isNull(request.triggerStrategy)) {
      body["triggerStrategy"] = request.triggerStrategy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRamPolicyExportTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/ramPolicyExportTasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateRamPolicyExportTaskResponse>(await this.callApi(params, req, runtime), new CreateRamPolicyExportTaskResponse({}));
  }

  /**
   * 创建RAM策略导出任务
   * 
   * @param request - CreateRamPolicyExportTaskRequest
   * @returns CreateRamPolicyExportTaskResponse
   */
  async createRamPolicyExportTask(request: CreateRamPolicyExportTaskRequest): Promise<CreateRamPolicyExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRamPolicyExportTaskWithOptions(request, headers, runtime);
  }

  /**
   * 创建导出任务
   * 
   * @param request - CreateResourceExportTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceExportTaskResponse
   */
  async createResourceExportTaskWithOptions(request: CreateResourceExportTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateResourceExportTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configPath)) {
      body["configPath"] = request.configPath;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.excludeRules)) {
      body["excludeRules"] = request.excludeRules;
    }

    if (!$dara.isNull(request.exportToModule)) {
      body["exportToModule"] = request.exportToModule;
    }

    if (!$dara.isNull(request.includeRules)) {
      body["includeRules"] = request.includeRules;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    if (!$dara.isNull(request.terraformProviderVersion)) {
      body["terraformProviderVersion"] = request.terraformProviderVersion;
    }

    if (!$dara.isNull(request.terraformVersion)) {
      body["terraformVersion"] = request.terraformVersion;
    }

    if (!$dara.isNull(request.triggerStrategy)) {
      body["triggerStrategy"] = request.triggerStrategy;
    }

    if (!$dara.isNull(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResourceExportTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateResourceExportTaskResponse>(await this.callApi(params, req, runtime), new CreateResourceExportTaskResponse({}));
  }

  /**
   * 创建导出任务
   * 
   * @param request - CreateResourceExportTaskRequest
   * @returns CreateResourceExportTaskResponse
   */
  async createResourceExportTask(request: CreateResourceExportTaskRequest): Promise<CreateResourceExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceExportTaskWithOptions(request, headers, runtime);
  }

  /**
   * 创建任务
   * 
   * @param request - CreateTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTaskResponse
   */
  async createTaskWithOptions(request: CreateTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoApply)) {
      body["autoApply"] = request.autoApply;
    }

    if (!$dara.isNull(request.autoDestroy)) {
      body["autoDestroy"] = request.autoDestroy;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.groupInfo)) {
      body["groupInfo"] = request.groupInfo;
    }

    if (!$dara.isNull(request.initModuleState)) {
      body["initModuleState"] = request.initModuleState;
    }

    if (!$dara.isNull(request.moduleId)) {
      body["moduleId"] = request.moduleId;
    }

    if (!$dara.isNull(request.moduleVersion)) {
      body["moduleVersion"] = request.moduleVersion;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.protectionStrategy)) {
      body["protectionStrategy"] = request.protectionStrategy;
    }

    if (!$dara.isNull(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    if (!$dara.isNull(request.skipPropertyValidation)) {
      body["skipPropertyValidation"] = request.skipPropertyValidation;
    }

    if (!$dara.isNull(request.taskBackend)) {
      body["taskBackend"] = request.taskBackend;
    }

    if (!$dara.isNull(request.terraformVersion)) {
      body["terraformVersion"] = request.terraformVersion;
    }

    if (!$dara.isNull(request.triggerStrategy)) {
      body["triggerStrategy"] = request.triggerStrategy;
    }

    if (!$dara.isNull(request.triggerValue)) {
      body["triggerValue"] = request.triggerValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateTaskResponse>(await this.callApi(params, req, runtime), new CreateTaskResponse({}));
  }

  /**
   * 创建任务
   * 
   * @param request - CreateTaskRequest
   * @returns CreateTaskResponse
   */
  async createTask(request: CreateTaskRequest): Promise<CreateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTaskWithOptions(request, headers, runtime);
  }

  /**
   * 删除共享
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAuthorizationResponse
   */
  async deleteAuthorizationWithOptions(authorizationId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteAuthorizationResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAuthorization",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/authorizations/${$dara.URL.percentEncode(authorizationId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteAuthorizationResponse>(await this.callApi(params, req, runtime), new DeleteAuthorizationResponse({}));
  }

  /**
   * 删除共享
   * @returns DeleteAuthorizationResponse
   */
  async deleteAuthorization(authorizationId: string): Promise<DeleteAuthorizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAuthorizationWithOptions(authorizationId, headers, runtime);
  }

  /**
   * 删除分组
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGroupResponse
   */
  async deleteGroupWithOptions(groupId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group/${$dara.URL.percentEncode(groupId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteGroupResponse>(await this.callApi(params, req, runtime), new DeleteGroupResponse({}));
  }

  /**
   * 删除分组
   * @returns DeleteGroupResponse
   */
  async deleteGroup(groupId: string): Promise<DeleteGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGroupWithOptions(groupId, headers, runtime);
  }

  /**
   * 删除模版
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModuleResponse
   */
  async deleteModuleWithOptions(moduleId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteModuleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules/${$dara.URL.percentEncode(moduleId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteModuleResponse>(await this.callApi(params, req, runtime), new DeleteModuleResponse({}));
  }

  /**
   * 删除模版
   * @returns DeleteModuleResponse
   */
  async deleteModule(moduleId: string): Promise<DeleteModuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModuleWithOptions(moduleId, headers, runtime);
  }

  /**
   * 删除参数集
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteParameterSetResponse
   */
  async deleteParameterSetWithOptions(parameterSetId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteParameterSetResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteParameterSet",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/parameterSets/${$dara.URL.percentEncode(parameterSetId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteParameterSetResponse>(await this.callApi(params, req, runtime), new DeleteParameterSetResponse({}));
  }

  /**
   * 删除参数集
   * @returns DeleteParameterSetResponse
   */
  async deleteParameterSet(parameterSetId: string): Promise<DeleteParameterSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteParameterSetWithOptions(parameterSetId, headers, runtime);
  }

  /**
   * 删除项目
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProjectResponse
   */
  async deleteProjectWithOptions(projectId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteProjectResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProject",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project/${$dara.URL.percentEncode(projectId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteProjectResponse>(await this.callApi(params, req, runtime), new DeleteProjectResponse({}));
  }

  /**
   * 删除项目
   * @returns DeleteProjectResponse
   */
  async deleteProject(projectId: string): Promise<DeleteProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProjectWithOptions(projectId, headers, runtime);
  }

  /**
   * 删除消息发布者
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRabbitmqPublisherResponse
   */
  async deleteRabbitmqPublisherWithOptions(publisherId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteRabbitmqPublisherResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRabbitmqPublisher",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/publishers/${$dara.URL.percentEncode(publisherId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteRabbitmqPublisherResponse>(await this.callApi(params, req, runtime), new DeleteRabbitmqPublisherResponse({}));
  }

  /**
   * 删除消息发布者
   * @returns DeleteRabbitmqPublisherResponse
   */
  async deleteRabbitmqPublisher(publisherId: string): Promise<DeleteRabbitmqPublisherResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRabbitmqPublisherWithOptions(publisherId, headers, runtime);
  }

  /**
   * 删除RAM策略导出任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRamPolicyExportTaskResponse
   */
  async deleteRamPolicyExportTaskWithOptions(ramPolicyExportTaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteRamPolicyExportTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRamPolicyExportTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/ramPolicyExportTasks/${$dara.URL.percentEncode(ramPolicyExportTaskId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteRamPolicyExportTaskResponse>(await this.callApi(params, req, runtime), new DeleteRamPolicyExportTaskResponse({}));
  }

  /**
   * 删除RAM策略导出任务
   * @returns DeleteRamPolicyExportTaskResponse
   */
  async deleteRamPolicyExportTask(ramPolicyExportTaskId: string): Promise<DeleteRamPolicyExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRamPolicyExportTaskWithOptions(ramPolicyExportTaskId, headers, runtime);
  }

  /**
   * 删除RAM策略导出任务版本
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRamPolicyExportTaskVersionResponse
   */
  async deleteRamPolicyExportTaskVersionWithOptions(ramPolicyExportTaskId: string, exportVersion: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteRamPolicyExportTaskVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRamPolicyExportTaskVersion",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/ramPolicyExportTasks/${$dara.URL.percentEncode(ramPolicyExportTaskId)}/versions/${$dara.URL.percentEncode(exportVersion)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteRamPolicyExportTaskVersionResponse>(await this.callApi(params, req, runtime), new DeleteRamPolicyExportTaskVersionResponse({}));
  }

  /**
   * 删除RAM策略导出任务版本
   * @returns DeleteRamPolicyExportTaskVersionResponse
   */
  async deleteRamPolicyExportTaskVersion(ramPolicyExportTaskId: string, exportVersion: string): Promise<DeleteRamPolicyExportTaskVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRamPolicyExportTaskVersionWithOptions(ramPolicyExportTaskId, exportVersion, headers, runtime);
  }

  /**
   * 删除任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceExportTaskResponse
   */
  async deleteResourceExportTaskWithOptions(exportTaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteResourceExportTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResourceExportTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks/${$dara.URL.percentEncode(exportTaskId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteResourceExportTaskResponse>(await this.callApi(params, req, runtime), new DeleteResourceExportTaskResponse({}));
  }

  /**
   * 删除任务
   * @returns DeleteResourceExportTaskResponse
   */
  async deleteResourceExportTask(exportTaskId: string): Promise<DeleteResourceExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceExportTaskWithOptions(exportTaskId, headers, runtime);
  }

  /**
   * 删除场景化测试任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSceneTestingTaskResponse
   */
  async deleteSceneTestingTaskWithOptions(taskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteSceneTestingTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSceneTestingTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/sceneTestingTask/${$dara.URL.percentEncode(taskId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteSceneTestingTaskResponse>(await this.callApi(params, req, runtime), new DeleteSceneTestingTaskResponse({}));
  }

  /**
   * 删除场景化测试任务
   * @returns DeleteSceneTestingTaskResponse
   */
  async deleteSceneTestingTask(taskId: string): Promise<DeleteSceneTestingTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSceneTestingTaskWithOptions(taskId, headers, runtime);
  }

  /**
   * 删除任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTaskResponse
   */
  async deleteTaskWithOptions(taskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${$dara.URL.percentEncode(taskId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteTaskResponse>(await this.callApi(params, req, runtime), new DeleteTaskResponse({}));
  }

  /**
   * 删除任务
   * @returns DeleteTaskResponse
   */
  async deleteTask(taskId: string): Promise<DeleteTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTaskWithOptions(taskId, headers, runtime);
  }

  /**
   * 将消息发布者从任务上卸载
   * 
   * @param request - DetachRabbitmqPublisherRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachRabbitmqPublisherResponse
   */
  async detachRabbitmqPublisherWithOptions(publisherId: string, request: DetachRabbitmqPublisherRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DetachRabbitmqPublisherResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachRabbitmqPublisher",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/publishers/${$dara.URL.percentEncode(publisherId)}/detach`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DetachRabbitmqPublisherResponse>(await this.callApi(params, req, runtime), new DetachRabbitmqPublisherResponse({}));
  }

  /**
   * 将消息发布者从任务上卸载
   * 
   * @param request - DetachRabbitmqPublisherRequest
   * @returns DetachRabbitmqPublisherResponse
   */
  async detachRabbitmqPublisher(publisherId: string, request: DetachRabbitmqPublisherRequest): Promise<DetachRabbitmqPublisherResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.detachRabbitmqPublisherWithOptions(publisherId, request, headers, runtime);
  }

  /**
   * 取消关联分组
   * 
   * @param request - DissociateGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DissociateGroupResponse
   */
  async dissociateGroupWithOptions(projectId: string, groupId: string, request: DissociateGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DissociateGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.resourceIds)) {
      body["resourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DissociateGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group/${$dara.URL.percentEncode(groupId)}/dissociate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DissociateGroupResponse>(await this.callApi(params, req, runtime), new DissociateGroupResponse({}));
  }

  /**
   * 取消关联分组
   * 
   * @param request - DissociateGroupRequest
   * @returns DissociateGroupResponse
   */
  async dissociateGroup(projectId: string, groupId: string, request: DissociateGroupRequest): Promise<DissociateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.dissociateGroupWithOptions(projectId, groupId, request, headers, runtime);
  }

  /**
   * 解除参数集关联资源关系
   * 
   * @param request - DissociateParameterSetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DissociateParameterSetResponse
   */
  async dissociateParameterSetWithOptions(request: DissociateParameterSetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DissociateParameterSetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.parameterSetIds)) {
      body["parameterSetIds"] = request.parameterSetIds;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DissociateParameterSet",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/parameterSets/operations/dissociate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DissociateParameterSetResponse>(await this.callApi(params, req, runtime), new DissociateParameterSetResponse({}));
  }

  /**
   * 解除参数集关联资源关系
   * 
   * @param request - DissociateParameterSetRequest
   * @returns DissociateParameterSetResponse
   */
  async dissociateParameterSet(request: DissociateParameterSetRequest): Promise<DissociateParameterSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.dissociateParameterSetWithOptions(request, headers, runtime);
  }

  /**
   * 执行RAM策略导出任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteRamPolicyExportTaskResponse
   */
  async executeRamPolicyExportTaskWithOptions(ramPolicyExportTaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ExecuteRamPolicyExportTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteRamPolicyExportTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/ramPolicyExportTasks/${$dara.URL.percentEncode(ramPolicyExportTaskId)}/execute`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ExecuteRamPolicyExportTaskResponse>(await this.callApi(params, req, runtime), new ExecuteRamPolicyExportTaskResponse({}));
  }

  /**
   * 执行RAM策略导出任务
   * @returns ExecuteRamPolicyExportTaskResponse
   */
  async executeRamPolicyExportTask(ramPolicyExportTaskId: string): Promise<ExecuteRamPolicyExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeRamPolicyExportTaskWithOptions(ramPolicyExportTaskId, headers, runtime);
  }

  /**
   * 执行资源导出任务
   * 
   * @param request - ExecuteResourceExportTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteResourceExportTaskResponse
   */
  async executeResourceExportTaskWithOptions(exportTaskId: string, request: ExecuteResourceExportTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ExecuteResourceExportTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteResourceExportTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks/execute/${$dara.URL.percentEncode(exportTaskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ExecuteResourceExportTaskResponse>(await this.callApi(params, req, runtime), new ExecuteResourceExportTaskResponse({}));
  }

  /**
   * 执行资源导出任务
   * 
   * @param request - ExecuteResourceExportTaskRequest
   * @returns ExecuteResourceExportTaskResponse
   */
  async executeResourceExportTask(exportTaskId: string, request: ExecuteResourceExportTaskRequest): Promise<ExecuteResourceExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeResourceExportTaskWithOptions(exportTaskId, request, headers, runtime);
  }

  /**
   * 查询Explorer任务详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExplorerTaskResponse
   */
  async getExplorerTaskWithOptions(explorerTaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetExplorerTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExplorerTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/explorerTask/${$dara.URL.percentEncode(explorerTaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetExplorerTaskResponse>(await this.callApi(params, req, runtime), new GetExplorerTaskResponse({}));
  }

  /**
   * 查询Explorer任务详情
   * @returns GetExplorerTaskResponse
   */
  async getExplorerTask(explorerTaskId: string): Promise<GetExplorerTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExplorerTaskWithOptions(explorerTaskId, headers, runtime);
  }

  /**
   * 查询分组
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGroupResponse
   */
  async getGroupWithOptions(groupId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group/${$dara.URL.percentEncode(groupId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetGroupResponse>(await this.callApi(params, req, runtime), new GetGroupResponse({}));
  }

  /**
   * 查询分组
   * @returns GetGroupResponse
   */
  async getGroup(groupId: string): Promise<GetGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGroupWithOptions(groupId, headers, runtime);
  }

  /**
   * 作业详情
   * 
   * @param request - GetJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobResponse
   */
  async getJobWithOptions(taskId: string, jobId: string, request: GetJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskType)) {
      query["taskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJob",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${$dara.URL.percentEncode(taskId)}/jobs/${$dara.URL.percentEncode(jobId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetJobResponse>(await this.callApi(params, req, runtime), new GetJobResponse({}));
  }

  /**
   * 作业详情
   * 
   * @param request - GetJobRequest
   * @returns GetJobResponse
   */
  async getJob(taskId: string, jobId: string, request: GetJobRequest): Promise<GetJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobWithOptions(taskId, jobId, request, headers, runtime);
  }

  /**
   * 获取模版详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModuleResponse
   */
  async getModuleWithOptions(moduleId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetModuleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules/${$dara.URL.percentEncode(moduleId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetModuleResponse>(await this.callApi(params, req, runtime), new GetModuleResponse({}));
  }

  /**
   * 获取模版详情
   * @returns GetModuleResponse
   */
  async getModule(moduleId: string): Promise<GetModuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModuleWithOptions(moduleId, headers, runtime);
  }

  /**
   * 模版版本详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModuleVersionResponse
   */
  async getModuleVersionWithOptions(moduleId: string, moduleVersion: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetModuleVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetModuleVersion",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules/${$dara.URL.percentEncode(moduleId)}/versions/${$dara.URL.percentEncode(moduleVersion)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetModuleVersionResponse>(await this.callApi(params, req, runtime), new GetModuleVersionResponse({}));
  }

  /**
   * 模版版本详情
   * @returns GetModuleVersionResponse
   */
  async getModuleVersion(moduleId: string, moduleVersion: string): Promise<GetModuleVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModuleVersionWithOptions(moduleId, moduleVersion, headers, runtime);
  }

  /**
   * 参数集详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetParameterSetResponse
   */
  async getParameterSetWithOptions(parameterSetId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetParameterSetResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetParameterSet",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/parameterSets/${$dara.URL.percentEncode(parameterSetId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetParameterSetResponse>(await this.callApi(params, req, runtime), new GetParameterSetResponse({}));
  }

  /**
   * 参数集详情
   * @returns GetParameterSetResponse
   */
  async getParameterSet(parameterSetId: string): Promise<GetParameterSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getParameterSetWithOptions(parameterSetId, headers, runtime);
  }

  /**
   * 查询项目
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectResponse
   */
  async getProjectWithOptions(projectId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetProjectResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProject",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project/${$dara.URL.percentEncode(projectId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetProjectResponse>(await this.callApi(params, req, runtime), new GetProjectResponse({}));
  }

  /**
   * 查询项目
   * @returns GetProjectResponse
   */
  async getProject(projectId: string): Promise<GetProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectWithOptions(projectId, headers, runtime);
  }

  /**
   * 项目批次概览
   * 
   * @param request - GetProjectBuildContextRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectBuildContextResponse
   */
  async getProjectBuildContextWithOptions(projectId: string, projectBuildId: string, request: GetProjectBuildContextRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetProjectBuildContextResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isPassAssertCheck)) {
      query["isPassAssertCheck"] = request.isPassAssertCheck;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProjectBuildContext",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project/${$dara.URL.percentEncode(projectId)}/build/${$dara.URL.percentEncode(projectBuildId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetProjectBuildContextResponse>(await this.callApi(params, req, runtime), new GetProjectBuildContextResponse({}));
  }

  /**
   * 项目批次概览
   * 
   * @param request - GetProjectBuildContextRequest
   * @returns GetProjectBuildContextResponse
   */
  async getProjectBuildContext(projectId: string, projectBuildId: string, request: GetProjectBuildContextRequest): Promise<GetProjectBuildContextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectBuildContextWithOptions(projectId, projectBuildId, request, headers, runtime);
  }

  /**
   * 获取消息发布者详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRabbitmqPublisherResponse
   */
  async getRabbitmqPublisherWithOptions(publisherId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetRabbitmqPublisherResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRabbitmqPublisher",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/publishers/${$dara.URL.percentEncode(publisherId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetRabbitmqPublisherResponse>(await this.callApi(params, req, runtime), new GetRabbitmqPublisherResponse({}));
  }

  /**
   * 获取消息发布者详情
   * @returns GetRabbitmqPublisherResponse
   */
  async getRabbitmqPublisher(publisherId: string): Promise<GetRabbitmqPublisherResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRabbitmqPublisherWithOptions(publisherId, headers, runtime);
  }

  /**
   * 获取RAM策略导出任务详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRamPolicyExportTaskResponse
   */
  async getRamPolicyExportTaskWithOptions(ramPolicyExportTaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetRamPolicyExportTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRamPolicyExportTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/ramPolicyExportTasks/${$dara.URL.percentEncode(ramPolicyExportTaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetRamPolicyExportTaskResponse>(await this.callApi(params, req, runtime), new GetRamPolicyExportTaskResponse({}));
  }

  /**
   * 获取RAM策略导出任务详情
   * @returns GetRamPolicyExportTaskResponse
   */
  async getRamPolicyExportTask(ramPolicyExportTaskId: string): Promise<GetRamPolicyExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRamPolicyExportTaskWithOptions(ramPolicyExportTaskId, headers, runtime);
  }

  /**
   * 获取RAM策略导出任务版本详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRamPolicyExportTaskVersionResponse
   */
  async getRamPolicyExportTaskVersionWithOptions(ramPolicyExportTaskId: string, exportVersion: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetRamPolicyExportTaskVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRamPolicyExportTaskVersion",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/ramPolicyExportTasks/${$dara.URL.percentEncode(ramPolicyExportTaskId)}/versions/${$dara.URL.percentEncode(exportVersion)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetRamPolicyExportTaskVersionResponse>(await this.callApi(params, req, runtime), new GetRamPolicyExportTaskVersionResponse({}));
  }

  /**
   * 获取RAM策略导出任务版本详情
   * @returns GetRamPolicyExportTaskVersionResponse
   */
  async getRamPolicyExportTaskVersion(ramPolicyExportTaskId: string, exportVersion: string): Promise<GetRamPolicyExportTaskVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRamPolicyExportTaskVersionWithOptions(ramPolicyExportTaskId, exportVersion, headers, runtime);
  }

  /**
   * 查询导出任务详情
   * 
   * @param request - GetResourceExportTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceExportTaskResponse
   */
  async getResourceExportTaskWithOptions(exportTaskId: string, request: GetResourceExportTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetResourceExportTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exportVersion)) {
      query["exportVersion"] = request.exportVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceExportTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks/${$dara.URL.percentEncode(exportTaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetResourceExportTaskResponse>(await this.callApi(params, req, runtime), new GetResourceExportTaskResponse({}));
  }

  /**
   * 查询导出任务详情
   * 
   * @param request - GetResourceExportTaskRequest
   * @returns GetResourceExportTaskResponse
   */
  async getResourceExportTask(exportTaskId: string, request: GetResourceExportTaskRequest): Promise<GetResourceExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceExportTaskWithOptions(exportTaskId, request, headers, runtime);
  }

  /**
   * 查询任务详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskResponse
   */
  async getTaskWithOptions(taskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${$dara.URL.percentEncode(taskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetTaskResponse>(await this.callApi(params, req, runtime), new GetTaskResponse({}));
  }

  /**
   * 查询任务详情
   * @returns GetTaskResponse
   */
  async getTask(taskId: string): Promise<GetTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskWithOptions(taskId, headers, runtime);
  }

  /**
   * 查询分组优先级详情
   * 
   * @param request - GetTaskPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskPolicyResponse
   */
  async getTaskPolicyWithOptions(groupId: string, request: GetTaskPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTaskPolicyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskPolicy",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group/task/policy/${$dara.URL.percentEncode(groupId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetTaskPolicyResponse>(await this.callApi(params, req, runtime), new GetTaskPolicyResponse({}));
  }

  /**
   * 查询分组优先级详情
   * 
   * @param request - GetTaskPolicyRequest
   * @returns GetTaskPolicyResponse
   */
  async getTaskPolicy(groupId: string, request: GetTaskPolicyRequest): Promise<GetTaskPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskPolicyWithOptions(groupId, request, headers, runtime);
  }

  /**
   * 获取共享列表
   * 
   * @param request - ListAuthorizationsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAuthorizationsResponse
   */
  async listAuthorizationsWithOptions(request: ListAuthorizationsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListAuthorizationsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authorizationId)) {
      query["authorizationId"] = request.authorizationId;
    }

    if (!$dara.isNull(request.authorizationType)) {
      query["authorizationType"] = request.authorizationType;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAuthorizations",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/authorizations`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListAuthorizationsResponse>(await this.callApi(params, req, runtime), new ListAuthorizationsResponse({}));
  }

  /**
   * 获取共享列表
   * 
   * @param request - ListAuthorizationsRequest
   * @returns ListAuthorizationsResponse
   */
  async listAuthorizations(request: ListAuthorizationsRequest): Promise<ListAuthorizationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAuthorizationsWithOptions(request, headers, runtime);
  }

  /**
   * terraform版本
   * 
   * @param request - ListAvailableTerraformVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAvailableTerraformVersionsResponse
   */
  async listAvailableTerraformVersionsWithOptions(request: ListAvailableTerraformVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListAvailableTerraformVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyWord)) {
      query["keyWord"] = request.keyWord;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAvailableTerraformVersions",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/version/terraform`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListAvailableTerraformVersionsResponse>(await this.callApi(params, req, runtime), new ListAvailableTerraformVersionsResponse({}));
  }

  /**
   * terraform版本
   * 
   * @param request - ListAvailableTerraformVersionsRequest
   * @returns ListAvailableTerraformVersionsResponse
   */
  async listAvailableTerraformVersions(request: ListAvailableTerraformVersionsRequest): Promise<ListAvailableTerraformVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAvailableTerraformVersionsWithOptions(request, headers, runtime);
  }

  /**
   * 列举Explorer任务
   * 
   * @param request - ListExplorerTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExplorerTasksResponse
   */
  async listExplorerTasksWithOptions(explorerTaskId: string, request: ListExplorerTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListExplorerTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResult)) {
      query["maxResult"] = request.maxResult;
    }

    if (!$dara.isNull(request.moduleId)) {
      query["moduleId"] = request.moduleId;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExplorerTasks",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/explorerTask`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListExplorerTasksResponse>(await this.callApi(params, req, runtime), new ListExplorerTasksResponse({}));
  }

  /**
   * 列举Explorer任务
   * 
   * @param request - ListExplorerTasksRequest
   * @returns ListExplorerTasksResponse
   */
  async listExplorerTasks(explorerTaskId: string, request: ListExplorerTasksRequest): Promise<ListExplorerTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExplorerTasksWithOptions(explorerTaskId, request, headers, runtime);
  }

  /**
   * 查询分组列表
   * 
   * @param tmpReq - ListGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupResponse
   */
  async listGroupWithOptions(tmpReq: ListGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListGroupResponse> {
    tmpReq.validate();
    let request = new ListGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListGroupResponse>(await this.callApi(params, req, runtime), new ListGroupResponse({}));
  }

  /**
   * 查询分组列表
   * 
   * @param request - ListGroupRequest
   * @returns ListGroupResponse
   */
  async listGroup(request: ListGroupRequest): Promise<ListGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGroupWithOptions(request, headers, runtime);
  }

  /**
   * 作业列表
   * 
   * @param request - ListJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobsResponse
   */
  async listJobsWithOptions(taskId: string, request: ListJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListJobsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.taskType)) {
      query["taskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobs",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${$dara.URL.percentEncode(taskId)}/jobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListJobsResponse>(await this.callApi(params, req, runtime), new ListJobsResponse({}));
  }

  /**
   * 作业列表
   * 
   * @param request - ListJobsRequest
   * @returns ListJobsResponse
   */
  async listJobs(taskId: string, request: ListJobsRequest): Promise<ListJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobsWithOptions(taskId, request, headers, runtime);
  }

  /**
   * 模版版本列表
   * 
   * @param request - ListModuleVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModuleVersionResponse
   */
  async listModuleVersionWithOptions(moduleId: string, request: ListModuleVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListModuleVersionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModuleVersion",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules/${$dara.URL.percentEncode(moduleId)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListModuleVersionResponse>(await this.callApi(params, req, runtime), new ListModuleVersionResponse({}));
  }

  /**
   * 模版版本列表
   * 
   * @param request - ListModuleVersionRequest
   * @returns ListModuleVersionResponse
   */
  async listModuleVersion(moduleId: string, request: ListModuleVersionRequest): Promise<ListModuleVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModuleVersionWithOptions(moduleId, request, headers, runtime);
  }

  /**
   * 列举模版
   * 
   * @param tmpReq - ListModulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModulesResponse
   */
  async listModulesWithOptions(tmpReq: ListModulesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListModulesResponse> {
    tmpReq.validate();
    let request = new ListModulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.excludeModuleIds)) {
      request.excludeModuleIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.excludeModuleIds, "excludeModuleIds", "simple");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.excludeModuleIdsShrink)) {
      query["excludeModuleIds"] = request.excludeModuleIdsShrink;
    }

    if (!$dara.isNull(request.groupId)) {
      query["groupId"] = request.groupId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModules",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListModulesResponse>(await this.callApi(params, req, runtime), new ListModulesResponse({}));
  }

  /**
   * 列举模版
   * 
   * @param request - ListModulesRequest
   * @returns ListModulesResponse
   */
  async listModules(request: ListModulesRequest): Promise<ListModulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModulesWithOptions(request, headers, runtime);
  }

  /**
   * 关联到资源的参数集列表
   * 
   * @param request - ListParameterSetRelationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListParameterSetRelationResponse
   */
  async listParameterSetRelationWithOptions(request: ListParameterSetRelationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListParameterSetRelationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceId)) {
      query["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListParameterSetRelation",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/parameterSets/operations/relation`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListParameterSetRelationResponse>(await this.callApi(params, req, runtime), new ListParameterSetRelationResponse({}));
  }

  /**
   * 关联到资源的参数集列表
   * 
   * @param request - ListParameterSetRelationRequest
   * @returns ListParameterSetRelationResponse
   */
  async listParameterSetRelation(request: ListParameterSetRelationRequest): Promise<ListParameterSetRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listParameterSetRelationWithOptions(request, headers, runtime);
  }

  /**
   * 参数集列表
   * 
   * @param request - ListParameterSetsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListParameterSetsResponse
   */
  async listParameterSetsWithOptions(request: ListParameterSetsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListParameterSetsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListParameterSets",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/parameterSets`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListParameterSetsResponse>(await this.callApi(params, req, runtime), new ListParameterSetsResponse({}));
  }

  /**
   * 参数集列表
   * 
   * @param request - ListParameterSetsRequest
   * @returns ListParameterSetsResponse
   */
  async listParameterSets(request: ListParameterSetsRequest): Promise<ListParameterSetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listParameterSetsWithOptions(request, headers, runtime);
  }

  /**
   * 查询项目列表
   * 
   * @param tmpReq - ListProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectResponse
   */
  async listProjectWithOptions(tmpReq: ListProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListProjectResponse> {
    tmpReq.validate();
    let request = new ListProjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProject",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListProjectResponse>(await this.callApi(params, req, runtime), new ListProjectResponse({}));
  }

  /**
   * 查询项目列表
   * 
   * @param request - ListProjectRequest
   * @returns ListProjectResponse
   */
  async listProject(request: ListProjectRequest): Promise<ListProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectWithOptions(request, headers, runtime);
  }

  /**
   * 项目批次列表
   * 
   * @param request - ListProjectBuildsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectBuildsResponse
   */
  async listProjectBuildsWithOptions(projectId: string, request: ListProjectBuildsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListProjectBuildsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      query["groupId"] = request.groupId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectBuildAction)) {
      query["projectBuildAction"] = request.projectBuildAction;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjectBuilds",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project/${$dara.URL.percentEncode(projectId)}/build`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListProjectBuildsResponse>(await this.callApi(params, req, runtime), new ListProjectBuildsResponse({}));
  }

  /**
   * 项目批次列表
   * 
   * @param request - ListProjectBuildsRequest
   * @returns ListProjectBuildsResponse
   */
  async listProjectBuilds(projectId: string, request: ListProjectBuildsRequest): Promise<ListProjectBuildsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectBuildsWithOptions(projectId, request, headers, runtime);
  }

  /**
   * 获取消息发布者列表
   * 
   * @param request - ListRabbitmqPublishersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRabbitmqPublishersResponse
   */
  async listRabbitmqPublishersWithOptions(request: ListRabbitmqPublishersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListRabbitmqPublishersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRabbitmqPublishers",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/publishers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListRabbitmqPublishersResponse>(await this.callApi(params, req, runtime), new ListRabbitmqPublishersResponse({}));
  }

  /**
   * 获取消息发布者列表
   * 
   * @param request - ListRabbitmqPublishersRequest
   * @returns ListRabbitmqPublishersResponse
   */
  async listRabbitmqPublishers(request: ListRabbitmqPublishersRequest): Promise<ListRabbitmqPublishersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRabbitmqPublishersWithOptions(request, headers, runtime);
  }

  /**
   * 获取RAM策略导出任务版本列表
   * 
   * @param request - ListRamPolicyExportTaskVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRamPolicyExportTaskVersionsResponse
   */
  async listRamPolicyExportTaskVersionsWithOptions(ramPolicyExportTaskId: string, request: ListRamPolicyExportTaskVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListRamPolicyExportTaskVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRamPolicyExportTaskVersions",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/ramPolicyExportTasks/${$dara.URL.percentEncode(ramPolicyExportTaskId)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListRamPolicyExportTaskVersionsResponse>(await this.callApi(params, req, runtime), new ListRamPolicyExportTaskVersionsResponse({}));
  }

  /**
   * 获取RAM策略导出任务版本列表
   * 
   * @param request - ListRamPolicyExportTaskVersionsRequest
   * @returns ListRamPolicyExportTaskVersionsResponse
   */
  async listRamPolicyExportTaskVersions(ramPolicyExportTaskId: string, request: ListRamPolicyExportTaskVersionsRequest): Promise<ListRamPolicyExportTaskVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRamPolicyExportTaskVersionsWithOptions(ramPolicyExportTaskId, request, headers, runtime);
  }

  /**
   * 获取RAM策略导出任务列表
   * 
   * @param request - ListRamPolicyExportTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRamPolicyExportTasksResponse
   */
  async listRamPolicyExportTasksWithOptions(request: ListRamPolicyExportTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListRamPolicyExportTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.moduleId)) {
      query["moduleId"] = request.moduleId;
    }

    if (!$dara.isNull(request.moduleVersion)) {
      query["moduleVersion"] = request.moduleVersion;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRamPolicyExportTasks",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/ramPolicyExportTasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListRamPolicyExportTasksResponse>(await this.callApi(params, req, runtime), new ListRamPolicyExportTasksResponse({}));
  }

  /**
   * 获取RAM策略导出任务列表
   * 
   * @param request - ListRamPolicyExportTasksRequest
   * @returns ListRamPolicyExportTasksResponse
   */
  async listRamPolicyExportTasks(request: ListRamPolicyExportTasksRequest): Promise<ListRamPolicyExportTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRamPolicyExportTasksWithOptions(request, headers, runtime);
  }

  /**
   * 获取任务版本列表
   * 
   * @param request - ListResourceExportTaskVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceExportTaskVersionsResponse
   */
  async listResourceExportTaskVersionsWithOptions(exportTaskId: string, request: ListResourceExportTaskVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListResourceExportTaskVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exportVersion)) {
      query["exportVersion"] = request.exportVersion;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceExportTaskVersions",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks/${$dara.URL.percentEncode(exportTaskId)}/exportVersions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListResourceExportTaskVersionsResponse>(await this.callApi(params, req, runtime), new ListResourceExportTaskVersionsResponse({}));
  }

  /**
   * 获取任务版本列表
   * 
   * @param request - ListResourceExportTaskVersionsRequest
   * @returns ListResourceExportTaskVersionsResponse
   */
  async listResourceExportTaskVersions(exportTaskId: string, request: ListResourceExportTaskVersionsRequest): Promise<ListResourceExportTaskVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceExportTaskVersionsWithOptions(exportTaskId, request, headers, runtime);
  }

  /**
   * 查询导出任务列表
   * 
   * @param request - ListResourceExportTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceExportTasksResponse
   */
  async listResourceExportTasksWithOptions(request: ListResourceExportTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListResourceExportTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exportTaskId)) {
      query["exportTaskId"] = request.exportTaskId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceExportTasks",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListResourceExportTasksResponse>(await this.callApi(params, req, runtime), new ListResourceExportTasksResponse({}));
  }

  /**
   * 查询导出任务列表
   * 
   * @param request - ListResourceExportTasksRequest
   * @returns ListResourceExportTasksResponse
   */
  async listResourceExportTasks(request: ListResourceExportTasksRequest): Promise<ListResourceExportTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceExportTasksWithOptions(request, headers, runtime);
  }

  /**
   * 资源列表
   * 
   * @param request - ListResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourcesResponse
   */
  async listResourcesWithOptions(request: ListResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["sourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.sourceValue)) {
      query["sourceValue"] = request.sourceValue;
    }

    if (!$dara.isNull(request.specType)) {
      query["specType"] = request.specType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResources",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/resources/stateparser`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListResourcesResponse>(await this.callApi(params, req, runtime), new ListResourcesResponse({}));
  }

  /**
   * 资源列表
   * 
   * @param request - ListResourcesRequest
   * @returns ListResourcesResponse
   */
  async listResources(request: ListResourcesRequest): Promise<ListResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourcesWithOptions(request, headers, runtime);
  }

  /**
   * 任务列表
   * 
   * @param tmpReq - ListTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTasksResponse
   */
  async listTasksWithOptions(tmpReq: ListTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTasksResponse> {
    tmpReq.validate();
    let request = new ListTasksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.excludeTaskIds)) {
      request.excludeTaskIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.excludeTaskIds, "excludeTaskIds", "simple");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.excludeTaskIdsShrink)) {
      query["excludeTaskIds"] = request.excludeTaskIdsShrink;
    }

    if (!$dara.isNull(request.groupId)) {
      query["groupId"] = request.groupId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.moduleId)) {
      query["moduleId"] = request.moduleId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTasks",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListTasksResponse>(await this.callApi(params, req, runtime), new ListTasksResponse({}));
  }

  /**
   * 任务列表
   * 
   * @param request - ListTasksRequest
   * @returns ListTasksResponse
   */
  async listTasks(request: ListTasksRequest): Promise<ListTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTasksWithOptions(request, headers, runtime);
  }

  /**
   * terraformProvider版本
   * 
   * @param request - ListTerraformProviderVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTerraformProviderVersionsResponse
   */
  async listTerraformProviderVersionsWithOptions(request: ListTerraformProviderVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTerraformProviderVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.usage)) {
      query["usage"] = request.usage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTerraformProviderVersions",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/version/terraform/provider`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListTerraformProviderVersionsResponse>(await this.callApi(params, req, runtime), new ListTerraformProviderVersionsResponse({}));
  }

  /**
   * terraformProvider版本
   * 
   * @param request - ListTerraformProviderVersionsRequest
   * @returns ListTerraformProviderVersionsResponse
   */
  async listTerraformProviderVersions(request: ListTerraformProviderVersionsRequest): Promise<ListTerraformProviderVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTerraformProviderVersionsWithOptions(request, headers, runtime);
  }

  /**
   * 控制作业
   * 
   * @param request - OperateJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateJobResponse
   */
  async operateJobWithOptions(taskId: string, jobId: string, operationType: string, request: OperateJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<OperateJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      query["comment"] = request.comment;
    }

    if (!$dara.isNull(request.taskType)) {
      query["taskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateJob",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${$dara.URL.percentEncode(taskId)}/jobs/${$dara.URL.percentEncode(jobId)}/operation/${$dara.URL.percentEncode(operationType)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<OperateJobResponse>(await this.callApi(params, req, runtime), new OperateJobResponse({}));
  }

  /**
   * 控制作业
   * 
   * @param request - OperateJobRequest
   * @returns OperateJobResponse
   */
  async operateJob(taskId: string, jobId: string, operationType: string, request: OperateJobRequest): Promise<OperateJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.operateJobWithOptions(taskId, jobId, operationType, request, headers, runtime);
  }

  /**
   * 移除导出任务版本
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveResourceExportTaskVersionResponse
   */
  async removeResourceExportTaskVersionWithOptions(exportTaskId: string, exportVersion: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RemoveResourceExportTaskVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveResourceExportTaskVersion",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks/${$dara.URL.percentEncode(exportTaskId)}/${$dara.URL.percentEncode(exportVersion)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<RemoveResourceExportTaskVersionResponse>(await this.callApi(params, req, runtime), new RemoveResourceExportTaskVersionResponse({}));
  }

  /**
   * 移除导出任务版本
   * @returns RemoveResourceExportTaskVersionResponse
   */
  async removeResourceExportTaskVersion(exportTaskId: string, exportVersion: string): Promise<RemoveResourceExportTaskVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeResourceExportTaskVersionWithOptions(exportTaskId, exportVersion, headers, runtime);
  }

  /**
   * 打标签接口
   * 
   * @param request - TagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<TagResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceIds)) {
      body["resourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * 打标签接口
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * 更新共享
   * 
   * @param request - UpdateAuthorizationAttributeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAuthorizationAttributeResponse
   */
  async updateAuthorizationAttributeWithOptions(authorizationId: string, request: UpdateAuthorizationAttributeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateAuthorizationAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dueTime)) {
      body["dueTime"] = request.dueTime;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAuthorizationAttribute",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/authorizations/${$dara.URL.percentEncode(authorizationId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateAuthorizationAttributeResponse>(await this.callApi(params, req, runtime), new UpdateAuthorizationAttributeResponse({}));
  }

  /**
   * 更新共享
   * 
   * @param request - UpdateAuthorizationAttributeRequest
   * @returns UpdateAuthorizationAttributeResponse
   */
  async updateAuthorizationAttribute(authorizationId: string, request: UpdateAuthorizationAttributeRequest): Promise<UpdateAuthorizationAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAuthorizationAttributeWithOptions(authorizationId, request, headers, runtime);
  }

  /**
   * 修改Explorer任务
   * 
   * @param request - UpdateExplorerTaskAttributeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateExplorerTaskAttributeResponse
   */
  async updateExplorerTaskAttributeWithOptions(explorerTaskId: string, request: UpdateExplorerTaskAttributeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateExplorerTaskAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoApply)) {
      body["autoApply"] = request.autoApply;
    }

    if (!$dara.isNull(request.explorerTaskName)) {
      body["explorerTaskName"] = request.explorerTaskName;
    }

    if (!$dara.isNull(request.moduleId)) {
      body["moduleId"] = request.moduleId;
    }

    if (!$dara.isNull(request.moduleVersion)) {
      body["moduleVersion"] = request.moduleVersion;
    }

    if (!$dara.isNull(request.terraformProviderVersion)) {
      body["terraformProviderVersion"] = request.terraformProviderVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateExplorerTaskAttribute",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/explorerTask/${$dara.URL.percentEncode(explorerTaskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateExplorerTaskAttributeResponse>(await this.callApi(params, req, runtime), new UpdateExplorerTaskAttributeResponse({}));
  }

  /**
   * 修改Explorer任务
   * 
   * @param request - UpdateExplorerTaskAttributeRequest
   * @returns UpdateExplorerTaskAttributeResponse
   */
  async updateExplorerTaskAttribute(explorerTaskId: string, request: UpdateExplorerTaskAttributeRequest): Promise<UpdateExplorerTaskAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExplorerTaskAttributeWithOptions(explorerTaskId, request, headers, runtime);
  }

  /**
   * 修改分组
   * 
   * @param request - UpdateGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGroupResponse
   */
  async updateGroupWithOptions(groupId: string, request: UpdateGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoDestroy)) {
      body["autoDestroy"] = request.autoDestroy;
    }

    if (!$dara.isNull(request.autoTrigger)) {
      body["autoTrigger"] = request.autoTrigger;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.forcedSetting)) {
      body["forcedSetting"] = request.forcedSetting;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.notifyConfig)) {
      body["notifyConfig"] = request.notifyConfig;
    }

    if (!$dara.isNull(request.notifyOperationTypes)) {
      body["notifyOperationTypes"] = request.notifyOperationTypes;
    }

    if (!$dara.isNull(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    if (!$dara.isNull(request.reportExportField)) {
      body["reportExportField"] = request.reportExportField;
    }

    if (!$dara.isNull(request.reportExportPath)) {
      body["reportExportPath"] = request.reportExportPath;
    }

    if (!$dara.isNull(request.terraformProviderVersion)) {
      body["terraformProviderVersion"] = request.terraformProviderVersion;
    }

    if (!$dara.isNull(request.triggerConfig)) {
      body["triggerConfig"] = request.triggerConfig;
    }

    if (!$dara.isNull(request.triggerResourceType)) {
      body["triggerResourceType"] = request.triggerResourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group/${$dara.URL.percentEncode(groupId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateGroupResponse>(await this.callApi(params, req, runtime), new UpdateGroupResponse({}));
  }

  /**
   * 修改分组
   * 
   * @param request - UpdateGroupRequest
   * @returns UpdateGroupResponse
   */
  async updateGroup(groupId: string, request: UpdateGroupRequest): Promise<UpdateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGroupWithOptions(groupId, request, headers, runtime);
  }

  /**
   * 更新模版
   * 
   * @param request - UpdateModuleAttributeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateModuleAttributeResponse
   */
  async updateModuleAttributeWithOptions(moduleId: string, request: UpdateModuleAttributeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateModuleAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.groupInfo)) {
      body["groupInfo"] = request.groupInfo;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.source)) {
      body["source"] = request.source;
    }

    if (!$dara.isNull(request.sourcePath)) {
      body["sourcePath"] = request.sourcePath;
    }

    if (!$dara.isNull(request.statePath)) {
      body["statePath"] = request.statePath;
    }

    if (!$dara.isNull(request.versionStrategy)) {
      body["versionStrategy"] = request.versionStrategy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateModuleAttribute",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules/${$dara.URL.percentEncode(moduleId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateModuleAttributeResponse>(await this.callApi(params, req, runtime), new UpdateModuleAttributeResponse({}));
  }

  /**
   * 更新模版
   * 
   * @param request - UpdateModuleAttributeRequest
   * @returns UpdateModuleAttributeResponse
   */
  async updateModuleAttribute(moduleId: string, request: UpdateModuleAttributeRequest): Promise<UpdateModuleAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateModuleAttributeWithOptions(moduleId, request, headers, runtime);
  }

  /**
   * 更新参数集
   * 
   * @param request - UpdateParameterSetAttributeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateParameterSetAttributeResponse
   */
  async updateParameterSetAttributeWithOptions(parameterSetId: string, request: UpdateParameterSetAttributeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateParameterSetAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateParameterSetAttribute",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/parameterSets/${$dara.URL.percentEncode(parameterSetId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateParameterSetAttributeResponse>(await this.callApi(params, req, runtime), new UpdateParameterSetAttributeResponse({}));
  }

  /**
   * 更新参数集
   * 
   * @param request - UpdateParameterSetAttributeRequest
   * @returns UpdateParameterSetAttributeResponse
   */
  async updateParameterSetAttribute(parameterSetId: string, request: UpdateParameterSetAttributeRequest): Promise<UpdateParameterSetAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateParameterSetAttributeWithOptions(parameterSetId, request, headers, runtime);
  }

  /**
   * 修改项目
   * 
   * @param request - UpdateProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectResponse
   */
  async updateProjectWithOptions(projectId: string, request: UpdateProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProject",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project/${$dara.URL.percentEncode(projectId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateProjectResponse>(await this.callApi(params, req, runtime), new UpdateProjectResponse({}));
  }

  /**
   * 修改项目
   * 
   * @param request - UpdateProjectRequest
   * @returns UpdateProjectResponse
   */
  async updateProject(projectId: string, request: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectWithOptions(projectId, request, headers, runtime);
  }

  /**
   * 更新消息发布者
   * 
   * @param request - UpdateRabbitmqPublisherAttributeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRabbitmqPublisherAttributeResponse
   */
  async updateRabbitmqPublisherAttributeWithOptions(publisherId: string, request: UpdateRabbitmqPublisherAttributeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateRabbitmqPublisherAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.exchangeName)) {
      body["exchangeName"] = request.exchangeName;
    }

    if (!$dara.isNull(request.exchangeType)) {
      body["exchangeType"] = request.exchangeType;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRabbitmqPublisherAttribute",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/publishers/${$dara.URL.percentEncode(publisherId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateRabbitmqPublisherAttributeResponse>(await this.callApi(params, req, runtime), new UpdateRabbitmqPublisherAttributeResponse({}));
  }

  /**
   * 更新消息发布者
   * 
   * @param request - UpdateRabbitmqPublisherAttributeRequest
   * @returns UpdateRabbitmqPublisherAttributeResponse
   */
  async updateRabbitmqPublisherAttribute(publisherId: string, request: UpdateRabbitmqPublisherAttributeRequest): Promise<UpdateRabbitmqPublisherAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRabbitmqPublisherAttributeWithOptions(publisherId, request, headers, runtime);
  }

  /**
   * 修改RAM策略导出任务
   * 
   * @param request - UpdateRamPolicyExportTaskAttributeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRamPolicyExportTaskAttributeResponse
   */
  async updateRamPolicyExportTaskAttributeWithOptions(ramPolicyExportTaskId: string, request: UpdateRamPolicyExportTaskAttributeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateRamPolicyExportTaskAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authorizationAccountIds)) {
      body["authorizationAccountIds"] = request.authorizationAccountIds;
    }

    if (!$dara.isNull(request.authorizationActions)) {
      body["authorizationActions"] = request.authorizationActions;
    }

    if (!$dara.isNull(request.authorizationRegionIds)) {
      body["authorizationRegionIds"] = request.authorizationRegionIds;
    }

    if (!$dara.isNull(request.moduleId)) {
      body["moduleId"] = request.moduleId;
    }

    if (!$dara.isNull(request.moduleVersion)) {
      body["moduleVersion"] = request.moduleVersion;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    if (!$dara.isNull(request.triggerStrategy)) {
      body["triggerStrategy"] = request.triggerStrategy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRamPolicyExportTaskAttribute",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/ramPolicyExportTasks/${$dara.URL.percentEncode(ramPolicyExportTaskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateRamPolicyExportTaskAttributeResponse>(await this.callApi(params, req, runtime), new UpdateRamPolicyExportTaskAttributeResponse({}));
  }

  /**
   * 修改RAM策略导出任务
   * 
   * @param request - UpdateRamPolicyExportTaskAttributeRequest
   * @returns UpdateRamPolicyExportTaskAttributeResponse
   */
  async updateRamPolicyExportTaskAttribute(ramPolicyExportTaskId: string, request: UpdateRamPolicyExportTaskAttributeRequest): Promise<UpdateRamPolicyExportTaskAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRamPolicyExportTaskAttributeWithOptions(ramPolicyExportTaskId, request, headers, runtime);
  }

  /**
   * 更新导出任务
   * 
   * @param request - UpdateResourceExportTaskAttributeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceExportTaskAttributeResponse
   */
  async updateResourceExportTaskAttributeWithOptions(exportTaskId: string, request: UpdateResourceExportTaskAttributeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateResourceExportTaskAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configPath)) {
      body["configPath"] = request.configPath;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.excludeRules)) {
      body["excludeRules"] = request.excludeRules;
    }

    if (!$dara.isNull(request.exportToModule)) {
      body["exportToModule"] = request.exportToModule;
    }

    if (!$dara.isNull(request.includeRules)) {
      body["includeRules"] = request.includeRules;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    if (!$dara.isNull(request.terraformProviderVersion)) {
      body["terraformProviderVersion"] = request.terraformProviderVersion;
    }

    if (!$dara.isNull(request.terraformVersion)) {
      body["terraformVersion"] = request.terraformVersion;
    }

    if (!$dara.isNull(request.triggerStrategy)) {
      body["triggerStrategy"] = request.triggerStrategy;
    }

    if (!$dara.isNull(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResourceExportTaskAttribute",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks/${$dara.URL.percentEncode(exportTaskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateResourceExportTaskAttributeResponse>(await this.callApi(params, req, runtime), new UpdateResourceExportTaskAttributeResponse({}));
  }

  /**
   * 更新导出任务
   * 
   * @param request - UpdateResourceExportTaskAttributeRequest
   * @returns UpdateResourceExportTaskAttributeResponse
   */
  async updateResourceExportTaskAttribute(exportTaskId: string, request: UpdateResourceExportTaskAttributeRequest): Promise<UpdateResourceExportTaskAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceExportTaskAttributeWithOptions(exportTaskId, request, headers, runtime);
  }

  /**
   * 修改任务
   * 
   * @param request - UpdateTaskAttributeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTaskAttributeResponse
   */
  async updateTaskAttributeWithOptions(taskId: string, request: UpdateTaskAttributeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateTaskAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoApply)) {
      body["autoApply"] = request.autoApply;
    }

    if (!$dara.isNull(request.autoDestroy)) {
      body["autoDestroy"] = request.autoDestroy;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.groupInfo)) {
      body["groupInfo"] = request.groupInfo;
    }

    if (!$dara.isNull(request.initModuleState)) {
      body["initModuleState"] = request.initModuleState;
    }

    if (!$dara.isNull(request.moduleId)) {
      body["moduleId"] = request.moduleId;
    }

    if (!$dara.isNull(request.moduleVersion)) {
      body["moduleVersion"] = request.moduleVersion;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.protectionStrategy)) {
      body["protectionStrategy"] = request.protectionStrategy;
    }

    if (!$dara.isNull(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    if (!$dara.isNull(request.skipPropertyValidation)) {
      body["skipPropertyValidation"] = request.skipPropertyValidation;
    }

    if (!$dara.isNull(request.terraformVersion)) {
      body["terraformVersion"] = request.terraformVersion;
    }

    if (!$dara.isNull(request.triggerStrategy)) {
      body["triggerStrategy"] = request.triggerStrategy;
    }

    if (!$dara.isNull(request.triggerValue)) {
      body["triggerValue"] = request.triggerValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTaskAttribute",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${$dara.URL.percentEncode(taskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateTaskAttributeResponse>(await this.callApi(params, req, runtime), new UpdateTaskAttributeResponse({}));
  }

  /**
   * 修改任务
   * 
   * @param request - UpdateTaskAttributeRequest
   * @returns UpdateTaskAttributeResponse
   */
  async updateTaskAttribute(taskId: string, request: UpdateTaskAttributeRequest): Promise<UpdateTaskAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTaskAttributeWithOptions(taskId, request, headers, runtime);
  }

  /**
   * 修改分组优先级配置
   * 
   * @param request - UpdateTaskPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTaskPolicyResponse
   */
  async updateTaskPolicyWithOptions(groupId: string, request: UpdateTaskPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateTaskPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.taskPolicies)) {
      body["taskPolicies"] = request.taskPolicies;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTaskPolicy",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group/task/policy/${$dara.URL.percentEncode(groupId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateTaskPolicyResponse>(await this.callApi(params, req, runtime), new UpdateTaskPolicyResponse({}));
  }

  /**
   * 修改分组优先级配置
   * 
   * @param request - UpdateTaskPolicyRequest
   * @returns UpdateTaskPolicyResponse
   */
  async updateTaskPolicy(groupId: string, request: UpdateTaskPolicyRequest): Promise<UpdateTaskPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTaskPolicyWithOptions(groupId, request, headers, runtime);
  }

}
