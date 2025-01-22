// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CreatePublicParameterResponseBodyParameter extends $dara.Model {
  constraints?: string;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  name?: string;
  parameterVersion?: number;
  regionId?: string;
  shareType?: string;
  type?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      regionId: 'RegionId',
      shareType: 'ShareType',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      parameterVersion: 'number',
      regionId: 'string',
      shareType: 'string',
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublicPatchBaselineResponseBodyPatchBaseline extends $dara.Model {
  approvalRules?: string;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  name?: string;
  operationSystem?: string;
  shareType?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      operationSystem: 'OperationSystem',
      shareType: 'ShareType',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      operationSystem: 'string',
      shareType: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublicTemplateResponseBodyTemplate extends $dara.Model {
  category?: string;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  hash?: string;
  popularity?: number;
  shareType?: string;
  templateFormat?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      hash: 'Hash',
      popularity: 'Popularity',
      shareType: 'ShareType',
      templateFormat: 'TemplateFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      hash: 'string',
      popularity: 'number',
      shareType: 'string',
      templateFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicParameterResponseBodyParameter extends $dara.Model {
  constraints?: string;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  name?: string;
  parameterVersion?: number;
  regionId?: string;
  shareType?: string;
  type?: string;
  updatedBy?: string;
  updatedDate?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      regionId: 'RegionId',
      shareType: 'ShareType',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      parameterVersion: 'number',
      regionId: 'string',
      shareType: 'string',
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
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

export class GetPublicPatchBaselineResponseBodyPatchBaseline extends $dara.Model {
  approvalRules?: string;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  name?: string;
  operationSystem?: string;
  shareType?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      operationSystem: 'OperationSystem',
      shareType: 'ShareType',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      operationSystem: 'string',
      shareType: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicTemplateResponseBodyTemplate extends $dara.Model {
  createdBy?: string;
  createdDate?: string;
  description?: string;
  hash?: string;
  popularity?: number;
  shareType?: string;
  templateFormat?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      hash: 'Hash',
      popularity: 'Popularity',
      shareType: 'ShareType',
      templateFormat: 'TemplateFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      hash: 'string',
      popularity: 'number',
      shareType: 'string',
      templateFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodyQuota extends $dara.Model {
  concurrentExecution?: number;
  dailyTasks?: number;
  totalTemplate?: number;
  static names(): { [key: string]: string } {
    return {
      concurrentExecution: 'ConcurrentExecution',
      dailyTasks: 'DailyTasks',
      totalTemplate: 'TotalTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentExecution: 'number',
      dailyTasks: 'number',
      totalTemplate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserExecutionTemplateResponseBodyTemplate extends $dara.Model {
  createdBy?: string;
  createdDate?: string;
  description?: string;
  hash?: string;
  shareType?: string;
  templateFormat?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      hash: 'Hash',
      shareType: 'ShareType',
      templateFormat: 'TemplateFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      hash: 'string',
      shareType: 'string',
      templateFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserTemplateResponseBodyTemplate extends $dara.Model {
  createdBy?: string;
  createdDate?: string;
  description?: string;
  hash?: string;
  shareType?: string;
  templateFormat?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      hash: 'Hash',
      shareType: 'ShareType',
      templateFormat: 'TemplateFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      hash: 'string',
      shareType: 'string',
      templateFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActionsResponseBodyActions extends $dara.Model {
  actionType?: string;
  createdDate?: string;
  description?: string;
  OOSActionName?: string;
  popularity?: number;
  properties?: string;
  templateVersion?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      createdDate: 'CreatedDate',
      description: 'Description',
      OOSActionName: 'OOSActionName',
      popularity: 'Popularity',
      properties: 'Properties',
      templateVersion: 'TemplateVersion',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      createdDate: 'string',
      description: 'string',
      OOSActionName: 'string',
      popularity: 'number',
      properties: 'string',
      templateVersion: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDefaultQuotaResponseBodyQuotas extends $dara.Model {
  concurrentExecution?: number;
  dailyTasks?: number;
  totalTemplate?: number;
  static names(): { [key: string]: string } {
    return {
      concurrentExecution: 'ConcurrentExecution',
      dailyTasks: 'DailyTasks',
      totalTemplate: 'TotalTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentExecution: 'number',
      dailyTasks: 'number',
      totalTemplate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFailureMsgsResponseBodyFailureMsgs extends $dara.Model {
  aliUid?: string;
  executionId?: string;
  messageBody?: string;
  reason?: string;
  taskExecutionId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      executionId: 'ExecutionId',
      messageBody: 'MessageBody',
      reason: 'Reason',
      taskExecutionId: 'TaskExecutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      executionId: 'string',
      messageBody: 'string',
      reason: 'string',
      taskExecutionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicParametersResponseBodyParameters extends $dara.Model {
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  name?: string;
  parameterVersion?: string;
  regionId?: string;
  shareType?: string;
  type?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      regionId: 'RegionId',
      shareType: 'ShareType',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      parameterVersion: 'string',
      regionId: 'string',
      shareType: 'string',
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicPatchBaselinesResponseBodyPatchBaselines extends $dara.Model {
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  isDefault?: boolean;
  name?: string;
  operationSystem?: string;
  shareType?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      isDefault: 'IsDefault',
      name: 'Name',
      operationSystem: 'OperationSystem',
      shareType: 'ShareType',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      isDefault: 'boolean',
      name: 'string',
      operationSystem: 'string',
      shareType: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicTemplateRegistrationsResponseBodyRegistrations extends $dara.Model {
  comment?: string;
  createdDate?: string;
  detail?: string;
  registrationId?: string;
  showPages?: string;
  status?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createdDate: 'CreatedDate',
      detail: 'Detail',
      registrationId: 'RegistrationId',
      showPages: 'ShowPages',
      status: 'Status',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createdDate: 'string',
      detail: 'string',
      registrationId: 'string',
      showPages: 'string',
      status: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updatedDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicTemplatesResponseBodyTemplates extends $dara.Model {
  createdBy?: string;
  createdDate?: string;
  description?: string;
  hash?: string;
  popularity?: number;
  shareType?: string;
  templateFormat?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  totalExecutionCount?: number;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      hash: 'Hash',
      popularity: 'Popularity',
      shareType: 'ShareType',
      templateFormat: 'TemplateFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      totalExecutionCount: 'TotalExecutionCount',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      hash: 'string',
      popularity: 'number',
      shareType: 'string',
      templateFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      totalExecutionCount: 'number',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserExecutionLogsResponseBodyExecutionLogs extends $dara.Model {
  logType?: string;
  message?: string;
  taskExecutionId?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      logType: 'LogType',
      message: 'Message',
      taskExecutionId: 'TaskExecutionId',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logType: 'string',
      message: 'string',
      taskExecutionId: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserExecutionsResponseBodyExecutionsCurrentTasks extends $dara.Model {
  taskAction?: string;
  taskExecutionId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      taskAction: 'TaskAction',
      taskExecutionId: 'TaskExecutionId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskAction: 'string',
      taskExecutionId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserExecutionsResponseBodyExecutions extends $dara.Model {
  counters?: string;
  createDate?: string;
  currentTasks?: ListUserExecutionsResponseBodyExecutionsCurrentTasks[];
  endDate?: string;
  executedBy?: string;
  executionId?: string;
  isParent?: boolean;
  mode?: string;
  outputs?: string;
  parameters?: string;
  parentExecutionId?: string;
  ramRole?: string;
  safetyCheck?: string;
  startDate?: string;
  status?: string;
  statusMessage?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  updateDate?: string;
  waitingStatus?: string;
  static names(): { [key: string]: string } {
    return {
      counters: 'Counters',
      createDate: 'CreateDate',
      currentTasks: 'CurrentTasks',
      endDate: 'EndDate',
      executedBy: 'ExecutedBy',
      executionId: 'ExecutionId',
      isParent: 'IsParent',
      mode: 'Mode',
      outputs: 'Outputs',
      parameters: 'Parameters',
      parentExecutionId: 'ParentExecutionId',
      ramRole: 'RamRole',
      safetyCheck: 'SafetyCheck',
      startDate: 'StartDate',
      status: 'Status',
      statusMessage: 'StatusMessage',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updateDate: 'UpdateDate',
      waitingStatus: 'WaitingStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      counters: 'string',
      createDate: 'string',
      currentTasks: { 'type': 'array', 'itemType': ListUserExecutionsResponseBodyExecutionsCurrentTasks },
      endDate: 'string',
      executedBy: 'string',
      executionId: 'string',
      isParent: 'boolean',
      mode: 'string',
      outputs: 'string',
      parameters: 'string',
      parentExecutionId: 'string',
      ramRole: 'string',
      safetyCheck: 'string',
      startDate: 'string',
      status: 'string',
      statusMessage: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updateDate: 'string',
      waitingStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.currentTasks)) {
      $dara.Model.validateArray(this.currentTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserInstancePatchStatesResponseBodyInstancePatchStates extends $dara.Model {
  baselineId?: string;
  failedCount?: string;
  installedCount?: string;
  installedOtherCount?: string;
  installedPendingRebootCount?: string;
  installedRejectedCount?: string;
  instanceId?: string;
  missingCount?: string;
  operationEndTime?: string;
  operationStartTime?: string;
  operationType?: string;
  ownerInformation?: string;
  patchGroup?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      failedCount: 'FailedCount',
      installedCount: 'InstalledCount',
      installedOtherCount: 'InstalledOtherCount',
      installedPendingRebootCount: 'InstalledPendingRebootCount',
      installedRejectedCount: 'InstalledRejectedCount',
      instanceId: 'InstanceId',
      missingCount: 'MissingCount',
      operationEndTime: 'OperationEndTime',
      operationStartTime: 'OperationStartTime',
      operationType: 'OperationType',
      ownerInformation: 'OwnerInformation',
      patchGroup: 'PatchGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'string',
      failedCount: 'string',
      installedCount: 'string',
      installedOtherCount: 'string',
      installedPendingRebootCount: 'string',
      installedRejectedCount: 'string',
      instanceId: 'string',
      missingCount: 'string',
      operationEndTime: 'string',
      operationStartTime: 'string',
      operationType: 'string',
      ownerInformation: 'string',
      patchGroup: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserInstancePatchesResponseBodyPatches extends $dara.Model {
  classification?: string;
  installedTime?: string;
  KBId?: string;
  severity?: string;
  status?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      classification: 'Classification',
      installedTime: 'InstalledTime',
      KBId: 'KBId',
      severity: 'Severity',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classification: 'string',
      installedTime: 'string',
      KBId: 'string',
      severity: 'string',
      status: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserInventoryEntriesRequestFilter extends $dara.Model {
  name?: string;
  operator?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operator: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserTaskExecutionsResponseBodyTaskExecutions extends $dara.Model {
  childExecutionId?: string;
  createDate?: string;
  endDate?: string;
  executionId?: string;
  extraData?: string;
  loop?: string;
  loopBatchNumber?: number;
  loopItem?: string;
  outputs?: string;
  parentTaskExecutionId?: string;
  properties?: string;
  startDate?: string;
  status?: string;
  statusMessage?: string;
  taskAction?: string;
  taskExecutionId?: string;
  taskName?: string;
  templateId?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      childExecutionId: 'ChildExecutionId',
      createDate: 'CreateDate',
      endDate: 'EndDate',
      executionId: 'ExecutionId',
      extraData: 'ExtraData',
      loop: 'Loop',
      loopBatchNumber: 'LoopBatchNumber',
      loopItem: 'LoopItem',
      outputs: 'Outputs',
      parentTaskExecutionId: 'ParentTaskExecutionId',
      properties: 'Properties',
      startDate: 'StartDate',
      status: 'Status',
      statusMessage: 'StatusMessage',
      taskAction: 'TaskAction',
      taskExecutionId: 'TaskExecutionId',
      taskName: 'TaskName',
      templateId: 'TemplateId',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childExecutionId: 'string',
      createDate: 'string',
      endDate: 'string',
      executionId: 'string',
      extraData: 'string',
      loop: 'string',
      loopBatchNumber: 'number',
      loopItem: 'string',
      outputs: 'string',
      parentTaskExecutionId: 'string',
      properties: 'string',
      startDate: 'string',
      status: 'string',
      statusMessage: 'string',
      taskAction: 'string',
      taskExecutionId: 'string',
      taskName: 'string',
      templateId: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserTemplatesResponseBodyTemplates extends $dara.Model {
  createdBy?: string;
  createdDate?: string;
  description?: string;
  hash?: string;
  popularity?: number;
  shareType?: string;
  templateFormat?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  totalExecutionCount?: number;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      hash: 'Hash',
      popularity: 'Popularity',
      shareType: 'ShareType',
      templateFormat: 'TemplateFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      totalExecutionCount: 'TotalExecutionCount',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      hash: 'string',
      popularity: 'number',
      shareType: 'string',
      templateFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      totalExecutionCount: 'number',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicParameterResponseBodyParameter extends $dara.Model {
  constraints?: string;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  name?: string;
  parameterVersion?: number;
  regionId?: string;
  shareType?: string;
  type?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      regionId: 'RegionId',
      shareType: 'ShareType',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      parameterVersion: 'number',
      regionId: 'string',
      shareType: 'string',
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicPatchBaselineResponseBodyPatchBaseline extends $dara.Model {
  approvalRules?: string;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  name?: string;
  operationSystem?: string;
  shareType?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      operationSystem: 'OperationSystem',
      shareType: 'ShareType',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      operationSystem: 'string',
      shareType: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicTemplateResponseBodyTemplate extends $dara.Model {
  category?: string;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  hash?: string;
  popularity?: number;
  shareType?: string;
  templateFormat?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      hash: 'Hash',
      popularity: 'Popularity',
      shareType: 'ShareType',
      templateFormat: 'TemplateFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      hash: 'string',
      popularity: 'number',
      shareType: 'string',
      templateFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidatePublicTemplateContentResponseBodyTasks extends $dara.Model {
  description?: string;
  name?: string;
  outputs?: string;
  properties?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      outputs: 'Outputs',
      properties: 'Properties',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      outputs: 'string',
      properties: 'string',
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

export class AuditPublicTemplateRegistrationRequest extends $dara.Model {
  auditAction?: string;
  comment?: string;
  regionId?: string;
  registrationId?: string;
  static names(): { [key: string]: string } {
    return {
      auditAction: 'AuditAction',
      comment: 'Comment',
      regionId: 'RegionId',
      registrationId: 'RegistrationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditAction: 'string',
      comment: 'string',
      regionId: 'string',
      registrationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditPublicTemplateRegistrationResponseBody extends $dara.Model {
  comment?: string;
  detail?: string;
  registrationId?: string;
  requestId?: string;
  status?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      detail: 'Detail',
      registrationId: 'RegistrationId',
      requestId: 'RequestId',
      status: 'Status',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      detail: 'string',
      registrationId: 'string',
      requestId: 'string',
      status: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditPublicTemplateRegistrationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AuditPublicTemplateRegistrationResponseBody;
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
      body: AuditPublicTemplateRegistrationResponseBody,
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

export class CreateActionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  actionName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  actionType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  popularity?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      actionType: 'ActionType',
      content: 'Content',
      popularity: 'Popularity',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      actionType: 'string',
      content: 'string',
      popularity: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateActionResponseBody extends $dara.Model {
  actionName?: string;
  actionType?: string;
  createdDate?: string;
  description?: string;
  popularity?: number;
  properties?: string;
  requestId?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      actionType: 'ActionType',
      createdDate: 'CreatedDate',
      description: 'Description',
      popularity: 'Popularity',
      properties: 'Properties',
      requestId: 'RequestId',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      actionType: 'string',
      createdDate: 'string',
      description: 'string',
      popularity: 'number',
      properties: 'string',
      requestId: 'string',
      templateVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateActionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateActionResponseBody;
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
      body: CreateActionResponseBody,
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

export class CreatePublicParameterRequest extends $dara.Model {
  clientToken?: string;
  constraints?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  parameterType?: string;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      constraints: 'Constraints',
      description: 'Description',
      name: 'Name',
      parameterType: 'ParameterType',
      regionId: 'RegionId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      constraints: 'string',
      description: 'string',
      name: 'string',
      parameterType: 'string',
      regionId: 'string',
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

export class CreatePublicParameterResponseBody extends $dara.Model {
  parameter?: CreatePublicParameterResponseBodyParameter;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: CreatePublicParameterResponseBodyParameter,
      requestId: 'string',
    };
  }

  validate() {
    if(this.parameter && typeof (this.parameter as any).validate === 'function') {
      (this.parameter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublicParameterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePublicParameterResponseBody;
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
      body: CreatePublicParameterResponseBody,
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

export class CreatePublicPatchBaselineRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  approvalRules?: string;
  clientToken?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  operationSystem?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      operationSystem: 'OperationSystem',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      clientToken: 'string',
      description: 'string',
      name: 'string',
      operationSystem: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublicPatchBaselineResponseBody extends $dara.Model {
  patchBaseline?: CreatePublicPatchBaselineResponseBodyPatchBaseline;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      patchBaseline: 'PatchBaseline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      patchBaseline: CreatePublicPatchBaselineResponseBodyPatchBaseline,
      requestId: 'string',
    };
  }

  validate() {
    if(this.patchBaseline && typeof (this.patchBaseline as any).validate === 'function') {
      (this.patchBaseline as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublicPatchBaselineResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePublicPatchBaselineResponseBody;
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
      body: CreatePublicPatchBaselineResponseBody,
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

export class CreatePublicTemplateRequest extends $dara.Model {
  category?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  isExample?: boolean;
  popularity?: number;
  publisher?: string;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  templateName?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      isExample: 'IsExample',
      popularity: 'Popularity',
      publisher: 'Publisher',
      regionId: 'RegionId',
      templateName: 'TemplateName',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      content: 'string',
      isExample: 'boolean',
      popularity: 'number',
      publisher: 'string',
      regionId: 'string',
      templateName: 'string',
      versionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublicTemplateResponseBody extends $dara.Model {
  requestId?: string;
  template?: CreatePublicTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      template: CreatePublicTemplateResponseBodyTemplate,
    };
  }

  validate() {
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublicTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePublicTemplateResponseBody;
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
      body: CreatePublicTemplateResponseBody,
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

export class DeleteFailureMsgRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  operation?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestFingerprint?: string;
  static names(): { [key: string]: string } {
    return {
      operation: 'Operation',
      requestFingerprint: 'RequestFingerprint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: 'string',
      requestFingerprint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFailureMsgResponseBody extends $dara.Model {
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

export class DeleteFailureMsgResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFailureMsgResponseBody;
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
      body: DeleteFailureMsgResponseBody,
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

export class DeletePublicParameterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePublicParameterResponseBody extends $dara.Model {
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

export class DeletePublicParameterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePublicParameterResponseBody;
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
      body: DeletePublicParameterResponseBody,
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

export class DeletePublicPatchBaselineRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DeletePublicPatchBaselineResponseBody extends $dara.Model {
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

export class DeletePublicPatchBaselineResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePublicPatchBaselineResponseBody;
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
      body: DeletePublicPatchBaselineResponseBody,
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

export class DeletePublicTemplateRequest extends $dara.Model {
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePublicTemplateResponseBody extends $dara.Model {
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

export class DeletePublicTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePublicTemplateResponseBody;
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
      body: DeletePublicTemplateResponseBody,
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

export class DoCheckResourceRequest extends $dara.Model {
  bid?: string;
  country?: string;
  gmtWakeup?: string;
  hid?: number;
  interrupt?: boolean;
  invoker?: string;
  level?: number;
  message?: string;
  pk?: string;
  prompt?: string;
  success?: boolean;
  taskExtraData?: string;
  taskIdentifier?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'bid',
      country: 'country',
      gmtWakeup: 'gmtWakeup',
      hid: 'hid',
      interrupt: 'interrupt',
      invoker: 'invoker',
      level: 'level',
      message: 'message',
      pk: 'pk',
      prompt: 'prompt',
      success: 'success',
      taskExtraData: 'taskExtraData',
      taskIdentifier: 'taskIdentifier',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'string',
      country: 'string',
      gmtWakeup: 'string',
      hid: 'number',
      interrupt: 'boolean',
      invoker: 'string',
      level: 'number',
      message: 'string',
      pk: 'string',
      prompt: 'string',
      success: 'boolean',
      taskExtraData: 'string',
      taskIdentifier: 'string',
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

export class DoCheckResourceResponseBody extends $dara.Model {
  requestId?: string;
  bid?: string;
  country?: string;
  gmtWakeup?: string;
  hid?: number;
  interrupt?: boolean;
  invoker?: string;
  level?: number;
  message?: string;
  pk?: string;
  prompt?: string;
  success?: boolean;
  taskExtraData?: string;
  taskIdentifier?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      bid: 'bid',
      country: 'country',
      gmtWakeup: 'gmtWakeup',
      hid: 'hid',
      interrupt: 'interrupt',
      invoker: 'invoker',
      level: 'level',
      message: 'message',
      pk: 'pk',
      prompt: 'prompt',
      success: 'success',
      taskExtraData: 'taskExtraData',
      taskIdentifier: 'taskIdentifier',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      bid: 'string',
      country: 'string',
      gmtWakeup: 'string',
      hid: 'number',
      interrupt: 'boolean',
      invoker: 'string',
      level: 'number',
      message: 'string',
      pk: 'string',
      prompt: 'string',
      success: 'boolean',
      taskExtraData: 'string',
      taskIdentifier: 'string',
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

export class DoCheckResourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DoCheckResourceResponseBody;
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
      body: DoCheckResourceResponseBody,
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

export class GetActionRequest extends $dara.Model {
  actionName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetActionResponseBody extends $dara.Model {
  actionName?: string;
  actionType?: string;
  content?: Buffer;
  createTime?: string;
  modifiedTime?: string;
  popularity?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      actionType: 'ActionType',
      content: 'Content',
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      popularity: 'Popularity',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      actionType: 'string',
      content: 'Buffer',
      createTime: 'string',
      modifiedTime: 'string',
      popularity: 'string',
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

export class GetActionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetActionResponseBody;
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
      body: GetActionResponseBody,
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

export class GetFlowControlRequest extends $dara.Model {
  api?: string;
  service?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      api: 'Api',
      service: 'Service',
      type: 'Type',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: 'string',
      service: 'string',
      type: 'number',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowControlResponseBody extends $dara.Model {
  requestId?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowControlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFlowControlResponseBody;
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
      body: GetFlowControlResponseBody,
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

export class GetPublicParameterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  parameterVersion?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parameterVersion: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicParameterResponseBody extends $dara.Model {
  parameter?: GetPublicParameterResponseBodyParameter;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: GetPublicParameterResponseBodyParameter,
      requestId: 'string',
    };
  }

  validate() {
    if(this.parameter && typeof (this.parameter as any).validate === 'function') {
      (this.parameter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicParameterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPublicParameterResponseBody;
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
      body: GetPublicParameterResponseBody,
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

export class GetPublicPatchBaselineRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicPatchBaselineResponseBody extends $dara.Model {
  patchBaseline?: GetPublicPatchBaselineResponseBodyPatchBaseline;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      patchBaseline: 'PatchBaseline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      patchBaseline: GetPublicPatchBaselineResponseBodyPatchBaseline,
      requestId: 'string',
    };
  }

  validate() {
    if(this.patchBaseline && typeof (this.patchBaseline as any).validate === 'function') {
      (this.patchBaseline as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicPatchBaselineResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPublicPatchBaselineResponseBody;
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
      body: GetPublicPatchBaselineResponseBody,
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

export class GetPublicTemplateRequest extends $dara.Model {
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  templateName?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateName: 'string',
      templateVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicTemplateResponseBody extends $dara.Model {
  content?: string;
  requestId?: string;
  template?: GetPublicTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
      template: GetPublicTemplateResponseBodyTemplate,
    };
  }

  validate() {
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPublicTemplateResponseBody;
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
      body: GetPublicTemplateResponseBody,
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

export class GetQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  quotaName?: string;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      quotaName: 'QuotaName',
      regionId: 'RegionId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaName: 'string',
      regionId: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBody extends $dara.Model {
  quota?: GetQuotaResponseBodyQuota;
  requestId?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      quota: 'Quota',
      requestId: 'RequestId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: GetQuotaResponseBodyQuota,
      requestId: 'string',
      uid: 'string',
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQuotaResponseBody;
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
      body: GetQuotaResponseBody,
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

export class GetUserExecutionTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aliUid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  executionId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      executionId: 'ExecutionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      executionId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserExecutionTemplateResponseBody extends $dara.Model {
  content?: string;
  requestId?: string;
  template?: GetUserExecutionTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
      template: GetUserExecutionTemplateResponseBodyTemplate,
    };
  }

  validate() {
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserExecutionTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserExecutionTemplateResponseBody;
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
      body: GetUserExecutionTemplateResponseBody,
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

export class GetUserTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aliUid?: string;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  templateName?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      regionId: 'RegionId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      regionId: 'string',
      templateName: 'string',
      templateVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserTemplateResponseBody extends $dara.Model {
  content?: string;
  requestId?: string;
  template?: GetUserTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
      template: GetUserTemplateResponseBodyTemplate,
    };
  }

  validate() {
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserTemplateResponseBody;
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
      body: GetUserTemplateResponseBody,
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

export class ListActionsRequest extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  OOSActionName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      OOSActionName: 'OOSActionName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      OOSActionName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActionsResponseBody extends $dara.Model {
  actions?: ListActionsResponseBodyActions[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': ListActionsResponseBodyActions },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListActionsResponseBody;
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
      body: ListActionsResponseBody,
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

export class ListDefaultQuotaResponseBody extends $dara.Model {
  quotas?: ListDefaultQuotaResponseBodyQuotas[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quotas: 'Quotas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotas: { 'type': 'array', 'itemType': ListDefaultQuotaResponseBodyQuotas },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.quotas)) {
      $dara.Model.validateArray(this.quotas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDefaultQuotaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDefaultQuotaResponseBody;
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
      body: ListDefaultQuotaResponseBody,
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

export class ListFailureMsgsRequest extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  requestFingerprint?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestFingerprint: 'RequestFingerprint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestFingerprint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFailureMsgsResponseBody extends $dara.Model {
  failureMsgs?: ListFailureMsgsResponseBodyFailureMsgs[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failureMsgs: 'FailureMsgs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureMsgs: { 'type': 'array', 'itemType': ListFailureMsgsResponseBodyFailureMsgs },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.failureMsgs)) {
      $dara.Model.validateArray(this.failureMsgs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFailureMsgsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFailureMsgsResponseBody;
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
      body: ListFailureMsgsResponseBody,
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

export class ListOOSLogsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: string;
  executionId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  requestFingerprint?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      executionId: 'ExecutionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      requestFingerprint: 'RequestFingerprint',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      executionId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      requestFingerprint: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOOSLogsResponseBody extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  OOSLogs?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      OOSLogs: 'OOSLogs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      OOSLogs: 'string',
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

export class ListOOSLogsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOOSLogsResponseBody;
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
      body: ListOOSLogsResponseBody,
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

export class ListPublicParametersRequest extends $dara.Model {
  createdDateAfter?: string;
  createdDateBefore?: string;
  maxResults?: number;
  name?: string;
  nextToken?: string;
  parameterType?: string;
  path?: string;
  recursive?: boolean;
  regionId?: string;
  sortField?: string;
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      createdDateAfter: 'CreatedDateAfter',
      createdDateBefore: 'CreatedDateBefore',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      parameterType: 'ParameterType',
      path: 'Path',
      recursive: 'Recursive',
      regionId: 'RegionId',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdDateAfter: 'string',
      createdDateBefore: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      parameterType: 'string',
      path: 'string',
      recursive: 'boolean',
      regionId: 'string',
      sortField: 'string',
      sortOrder: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicParametersResponseBody extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  parameters?: ListPublicParametersResponseBodyParameters[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      parameters: 'Parameters',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      parameters: { 'type': 'array', 'itemType': ListPublicParametersResponseBodyParameters },
      requestId: 'string',
      totalCount: 'number',
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

export class ListPublicParametersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPublicParametersResponseBody;
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
      body: ListPublicParametersResponseBody,
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

export class ListPublicPatchBaselinesRequest extends $dara.Model {
  maxResults?: number;
  name?: string;
  nextToken?: string;
  operationSystem?: string;
  regionId?: string;
  shareType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      operationSystem: 'OperationSystem',
      regionId: 'RegionId',
      shareType: 'ShareType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      operationSystem: 'string',
      regionId: 'string',
      shareType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicPatchBaselinesResponseBody extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  patchBaselines?: ListPublicPatchBaselinesResponseBodyPatchBaselines[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      patchBaselines: 'PatchBaselines',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      patchBaselines: { 'type': 'array', 'itemType': ListPublicPatchBaselinesResponseBodyPatchBaselines },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.patchBaselines)) {
      $dara.Model.validateArray(this.patchBaselines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicPatchBaselinesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPublicPatchBaselinesResponseBody;
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
      body: ListPublicPatchBaselinesResponseBody,
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

export class ListPublicTemplateRegistrationsRequest extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  registrationId?: string;
  status?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      registrationId: 'RegistrationId',
      status: 'Status',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      registrationId: 'string',
      status: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicTemplateRegistrationsResponseBody extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  registrations?: ListPublicTemplateRegistrationsResponseBodyRegistrations[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      registrations: 'Registrations',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      registrations: { 'type': 'array', 'itemType': ListPublicTemplateRegistrationsResponseBodyRegistrations },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.registrations)) {
      $dara.Model.validateArray(this.registrations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicTemplateRegistrationsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPublicTemplateRegistrationsResponseBody;
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
      body: ListPublicTemplateRegistrationsResponseBody,
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

export class ListPublicTemplatesRequest extends $dara.Model {
  createdBy?: string;
  createdDateAfter?: string;
  createdDateBefore?: string;
  isExample?: boolean;
  maxResults?: number;
  nextToken?: string;
  popularity?: number;
  regionId?: string;
  shareType?: string;
  sortField?: string;
  sortOrder?: string;
  templateFormat?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDateAfter: 'CreatedDateAfter',
      createdDateBefore: 'CreatedDateBefore',
      isExample: 'IsExample',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      popularity: 'Popularity',
      regionId: 'RegionId',
      shareType: 'ShareType',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      templateFormat: 'TemplateFormat',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDateAfter: 'string',
      createdDateBefore: 'string',
      isExample: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      popularity: 'number',
      regionId: 'string',
      shareType: 'string',
      sortField: 'string',
      sortOrder: 'string',
      templateFormat: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicTemplatesResponseBody extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  templates?: ListPublicTemplatesResponseBodyTemplates[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': ListPublicTemplatesResponseBodyTemplates },
    };
  }

  validate() {
    if(Array.isArray(this.templates)) {
      $dara.Model.validateArray(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicTemplatesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPublicTemplatesResponseBody;
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
      body: ListPublicTemplatesResponseBody,
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

export class ListUserExecutionLogsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aliUid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  executionId?: string;
  logType?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  taskExecutionId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      executionId: 'ExecutionId',
      logType: 'LogType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      taskExecutionId: 'TaskExecutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      executionId: 'string',
      logType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      taskExecutionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserExecutionLogsResponseBody extends $dara.Model {
  executionLogs?: ListUserExecutionLogsResponseBodyExecutionLogs[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      executionLogs: 'ExecutionLogs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionLogs: { 'type': 'array', 'itemType': ListUserExecutionLogsResponseBodyExecutionLogs },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.executionLogs)) {
      $dara.Model.validateArray(this.executionLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserExecutionLogsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserExecutionLogsResponseBody;
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
      body: ListUserExecutionLogsResponseBody,
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

export class ListUserExecutionsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aliUid?: string;
  endDateAfter?: string;
  endDateBefore?: string;
  executedBy?: string;
  executionId?: string;
  includeChildExecution?: boolean;
  maxResults?: number;
  mode?: string;
  nextToken?: string;
  parentExecutionId?: string;
  ramRole?: string;
  regionId?: string;
  sortField?: string;
  sortOrder?: string;
  startDateAfter?: string;
  startDateBefore?: string;
  status?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      endDateAfter: 'EndDateAfter',
      endDateBefore: 'EndDateBefore',
      executedBy: 'ExecutedBy',
      executionId: 'ExecutionId',
      includeChildExecution: 'IncludeChildExecution',
      maxResults: 'MaxResults',
      mode: 'Mode',
      nextToken: 'NextToken',
      parentExecutionId: 'ParentExecutionId',
      ramRole: 'RamRole',
      regionId: 'RegionId',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      startDateAfter: 'StartDateAfter',
      startDateBefore: 'StartDateBefore',
      status: 'Status',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      endDateAfter: 'string',
      endDateBefore: 'string',
      executedBy: 'string',
      executionId: 'string',
      includeChildExecution: 'boolean',
      maxResults: 'number',
      mode: 'string',
      nextToken: 'string',
      parentExecutionId: 'string',
      ramRole: 'string',
      regionId: 'string',
      sortField: 'string',
      sortOrder: 'string',
      startDateAfter: 'string',
      startDateBefore: 'string',
      status: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserExecutionsResponseBody extends $dara.Model {
  executions?: ListUserExecutionsResponseBodyExecutions[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      executions: 'Executions',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executions: { 'type': 'array', 'itemType': ListUserExecutionsResponseBodyExecutions },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.executions)) {
      $dara.Model.validateArray(this.executions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserExecutionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserExecutionsResponseBody;
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
      body: ListUserExecutionsResponseBody,
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

export class ListUserInstancePatchStatesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aliUid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceIds?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      instanceIds: 'InstanceIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      instanceIds: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserInstancePatchStatesResponseBody extends $dara.Model {
  instancePatchStates?: ListUserInstancePatchStatesResponseBodyInstancePatchStates[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instancePatchStates: 'InstancePatchStates',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instancePatchStates: { 'type': 'array', 'itemType': ListUserInstancePatchStatesResponseBodyInstancePatchStates },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instancePatchStates)) {
      $dara.Model.validateArray(this.instancePatchStates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserInstancePatchStatesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserInstancePatchStatesResponseBody;
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
      body: ListUserInstancePatchStatesResponseBody,
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

export class ListUserInstancePatchesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aliUid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserInstancePatchesResponseBody extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  patches?: ListUserInstancePatchesResponseBodyPatches[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      patches: 'Patches',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      patches: { 'type': 'array', 'itemType': ListUserInstancePatchesResponseBodyPatches },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.patches)) {
      $dara.Model.validateArray(this.patches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserInstancePatchesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserInstancePatchesResponseBody;
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
      body: ListUserInstancePatchesResponseBody,
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

export class ListUserInventoryEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aliUid?: string;
  filter?: ListUserInventoryEntriesRequestFilter[];
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      filter: 'Filter',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      filter: { 'type': 'array', 'itemType': ListUserInventoryEntriesRequestFilter },
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      typeName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserInventoryEntriesResponseBody extends $dara.Model {
  captureTime?: string;
  entries?: { [key: string]: any }[];
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  schemaVersion?: string;
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      captureTime: 'CaptureTime',
      entries: 'Entries',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      schemaVersion: 'SchemaVersion',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captureTime: 'string',
      entries: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      schemaVersion: 'string',
      typeName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entries)) {
      $dara.Model.validateArray(this.entries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserInventoryEntriesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserInventoryEntriesResponseBody;
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
      body: ListUserInventoryEntriesResponseBody,
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

export class ListUserTaskExecutionsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aliUid?: string;
  endDateAfter?: string;
  endDateBefore?: string;
  executionId?: string;
  includeChildTaskExecution?: boolean;
  maxResults?: number;
  nextToken?: string;
  parentTaskExecutionId?: string;
  regionId?: string;
  sortField?: string;
  sortOrder?: string;
  startDateAfter?: string;
  startDateBefore?: string;
  status?: string;
  taskAction?: string;
  taskExecutionId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      endDateAfter: 'EndDateAfter',
      endDateBefore: 'EndDateBefore',
      executionId: 'ExecutionId',
      includeChildTaskExecution: 'IncludeChildTaskExecution',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      parentTaskExecutionId: 'ParentTaskExecutionId',
      regionId: 'RegionId',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      startDateAfter: 'StartDateAfter',
      startDateBefore: 'StartDateBefore',
      status: 'Status',
      taskAction: 'TaskAction',
      taskExecutionId: 'TaskExecutionId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      endDateAfter: 'string',
      endDateBefore: 'string',
      executionId: 'string',
      includeChildTaskExecution: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      parentTaskExecutionId: 'string',
      regionId: 'string',
      sortField: 'string',
      sortOrder: 'string',
      startDateAfter: 'string',
      startDateBefore: 'string',
      status: 'string',
      taskAction: 'string',
      taskExecutionId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserTaskExecutionsResponseBody extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  taskExecutions?: ListUserTaskExecutionsResponseBodyTaskExecutions[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      taskExecutions: 'TaskExecutions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      taskExecutions: { 'type': 'array', 'itemType': ListUserTaskExecutionsResponseBodyTaskExecutions },
    };
  }

  validate() {
    if(Array.isArray(this.taskExecutions)) {
      $dara.Model.validateArray(this.taskExecutions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserTaskExecutionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserTaskExecutionsResponseBody;
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
      body: ListUserTaskExecutionsResponseBody,
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

export class ListUserTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aliUid?: string;
  category?: string;
  createdBy?: string;
  createdDateAfter?: string;
  createdDateBefore?: string;
  maxResults?: number;
  nextToken?: string;
  popularity?: number;
  regionId?: string;
  shareType?: string;
  sortField?: string;
  sortOrder?: string;
  templateFormat?: string;
  templateName?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      category: 'Category',
      createdBy: 'CreatedBy',
      createdDateAfter: 'CreatedDateAfter',
      createdDateBefore: 'CreatedDateBefore',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      popularity: 'Popularity',
      regionId: 'RegionId',
      shareType: 'ShareType',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      templateFormat: 'TemplateFormat',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      category: 'string',
      createdBy: 'string',
      createdDateAfter: 'string',
      createdDateBefore: 'string',
      maxResults: 'number',
      nextToken: 'string',
      popularity: 'number',
      regionId: 'string',
      shareType: 'string',
      sortField: 'string',
      sortOrder: 'string',
      templateFormat: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserTemplatesResponseBody extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  templates?: ListUserTemplatesResponseBodyTemplates[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': ListUserTemplatesResponseBodyTemplates },
    };
  }

  validate() {
    if(Array.isArray(this.templates)) {
      $dara.Model.validateArray(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserTemplatesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserTemplatesResponseBody;
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
      body: ListUserTemplatesResponseBody,
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

export class ResetTimerTriggerExecutionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aliUid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  executionId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      executionId: 'ExecutionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      executionId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetTimerTriggerExecutionResponseBody extends $dara.Model {
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

export class ResetTimerTriggerExecutionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetTimerTriggerExecutionResponseBody;
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
      body: ResetTimerTriggerExecutionResponseBody,
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

export class ResetUserExecutionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aliUid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  executionId?: string;
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      executionId: 'ExecutionId',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      executionId: 'string',
      regionId: 'string',
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

export class ResetUserExecutionResponseBody extends $dara.Model {
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

export class ResetUserExecutionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetUserExecutionResponseBody;
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
      body: ResetUserExecutionResponseBody,
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

export class SetFlowControlRequest extends $dara.Model {
  api?: string;
  service?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: number;
  uid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      api: 'Api',
      service: 'Service',
      type: 'Type',
      uid: 'Uid',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: 'string',
      service: 'string',
      type: 'number',
      uid: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetFlowControlResponseBody extends $dara.Model {
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

export class SetFlowControlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetFlowControlResponseBody;
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
      body: SetFlowControlResponseBody,
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

export class SetQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  quotaName?: string;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  uid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      quotaName: 'QuotaName',
      regionId: 'RegionId',
      uid: 'Uid',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaName: 'string',
      regionId: 'string',
      uid: 'string',
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

export class SetQuotaResponseBody extends $dara.Model {
  quota?: number;
  requestId?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      quota: 'Quota',
      requestId: 'RequestId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: 'number',
      requestId: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetQuotaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetQuotaResponseBody;
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
      body: SetQuotaResponseBody,
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

export class TerminateUserExecutionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aliUid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  executionId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      executionId: 'ExecutionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      executionId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateUserExecutionResponseBody extends $dara.Model {
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

export class TerminateUserExecutionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TerminateUserExecutionResponseBody;
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
      body: TerminateUserExecutionResponseBody,
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

export class UpdateActionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  actionName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  actionType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  popularity?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      actionType: 'ActionType',
      content: 'Content',
      popularity: 'Popularity',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      actionType: 'string',
      content: 'string',
      popularity: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateActionResponseBody extends $dara.Model {
  actionName?: string;
  actionType?: string;
  createdDate?: string;
  description?: string;
  popularity?: number;
  properties?: string;
  requestId?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      actionType: 'ActionType',
      createdDate: 'CreatedDate',
      description: 'Description',
      popularity: 'Popularity',
      properties: 'Properties',
      requestId: 'RequestId',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      actionType: 'string',
      createdDate: 'string',
      description: 'string',
      popularity: 'number',
      properties: 'string',
      requestId: 'string',
      templateVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateActionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateActionResponseBody;
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
      body: UpdateActionResponseBody,
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

export class UpdatePublicParameterRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      regionId: 'string',
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

export class UpdatePublicParameterResponseBody extends $dara.Model {
  parameter?: UpdatePublicParameterResponseBodyParameter;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: UpdatePublicParameterResponseBodyParameter,
      requestId: 'string',
    };
  }

  validate() {
    if(this.parameter && typeof (this.parameter as any).validate === 'function') {
      (this.parameter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicParameterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePublicParameterResponseBody;
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
      body: UpdatePublicParameterResponseBody,
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

export class UpdatePublicPatchBaselineRequest extends $dara.Model {
  approvalRules?: string;
  clientToken?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      clientToken: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicPatchBaselineResponseBody extends $dara.Model {
  patchBaseline?: UpdatePublicPatchBaselineResponseBodyPatchBaseline;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      patchBaseline: 'PatchBaseline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      patchBaseline: UpdatePublicPatchBaselineResponseBodyPatchBaseline,
      requestId: 'string',
    };
  }

  validate() {
    if(this.patchBaseline && typeof (this.patchBaseline as any).validate === 'function') {
      (this.patchBaseline as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicPatchBaselineResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePublicPatchBaselineResponseBody;
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
      body: UpdatePublicPatchBaselineResponseBody,
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

export class UpdatePublicTemplateRequest extends $dara.Model {
  category?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  popularity?: number;
  publisher?: string;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  templateName?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      popularity: 'Popularity',
      publisher: 'Publisher',
      regionId: 'RegionId',
      templateName: 'TemplateName',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      content: 'string',
      popularity: 'number',
      publisher: 'string',
      regionId: 'string',
      templateName: 'string',
      versionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicTemplateResponseBody extends $dara.Model {
  requestId?: string;
  template?: UpdatePublicTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      template: UpdatePublicTemplateResponseBodyTemplate,
    };
  }

  validate() {
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePublicTemplateResponseBody;
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
      body: UpdatePublicTemplateResponseBody,
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

export class ValidatePublicTemplateContentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  regionId?: string;
  templateName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      regionId: 'RegionId',
      templateName: 'TemplateName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      regionId: 'string',
      templateName: 'string',
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

export class ValidatePublicTemplateContentResponseBody extends $dara.Model {
  description?: string;
  outputs?: string;
  parameters?: string;
  ramRole?: string;
  requestId?: string;
  tasks?: ValidatePublicTemplateContentResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      outputs: 'Outputs',
      parameters: 'Parameters',
      ramRole: 'RamRole',
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      outputs: 'string',
      parameters: 'string',
      ramRole: 'string',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ValidatePublicTemplateContentResponseBodyTasks },
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

export class ValidatePublicTemplateContentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ValidatePublicTemplateContentResponseBody;
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
      body: ValidatePublicTemplateContentResponseBody,
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
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("oosops", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - AuditPublicTemplateRegistrationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuditPublicTemplateRegistrationResponse
   */
  async auditPublicTemplateRegistrationWithOptions(request: AuditPublicTemplateRegistrationRequest, runtime: $dara.RuntimeOptions): Promise<AuditPublicTemplateRegistrationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auditAction)) {
      query["AuditAction"] = request.auditAction;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.registrationId)) {
      query["RegistrationId"] = request.registrationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuditPublicTemplateRegistration",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AuditPublicTemplateRegistrationResponse>(await this.callApi(params, req, runtime), new AuditPublicTemplateRegistrationResponse({}));
    } else {
      return $dara.cast<AuditPublicTemplateRegistrationResponse>(await this.execute(params, req, runtime), new AuditPublicTemplateRegistrationResponse({}));
    }

  }

  /**
   * @param request - AuditPublicTemplateRegistrationRequest
   * @returns AuditPublicTemplateRegistrationResponse
   */
  async auditPublicTemplateRegistration(request: AuditPublicTemplateRegistrationRequest): Promise<AuditPublicTemplateRegistrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.auditPublicTemplateRegistrationWithOptions(request, runtime);
  }

  /**
   * @param request - CreateActionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateActionResponse
   */
  async createActionWithOptions(request: CreateActionRequest, runtime: $dara.RuntimeOptions): Promise<CreateActionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionName)) {
      query["ActionName"] = request.actionName;
    }

    if (!$dara.isNull(request.actionType)) {
      query["ActionType"] = request.actionType;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.popularity)) {
      query["Popularity"] = request.popularity;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAction",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateActionResponse>(await this.callApi(params, req, runtime), new CreateActionResponse({}));
    } else {
      return $dara.cast<CreateActionResponse>(await this.execute(params, req, runtime), new CreateActionResponse({}));
    }

  }

  /**
   * @param request - CreateActionRequest
   * @returns CreateActionResponse
   */
  async createAction(request: CreateActionRequest): Promise<CreateActionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createActionWithOptions(request, runtime);
  }

  /**
   * 创建一个公共参数。
   * 
   * @param request - CreatePublicParameterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePublicParameterResponse
   */
  async createPublicParameterWithOptions(request: CreatePublicParameterRequest, runtime: $dara.RuntimeOptions): Promise<CreatePublicParameterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.constraints)) {
      query["Constraints"] = request.constraints;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.parameterType)) {
      query["ParameterType"] = request.parameterType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePublicParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreatePublicParameterResponse>(await this.callApi(params, req, runtime), new CreatePublicParameterResponse({}));
    } else {
      return $dara.cast<CreatePublicParameterResponse>(await this.execute(params, req, runtime), new CreatePublicParameterResponse({}));
    }

  }

  /**
   * 创建一个公共参数。
   * 
   * @param request - CreatePublicParameterRequest
   * @returns CreatePublicParameterResponse
   */
  async createPublicParameter(request: CreatePublicParameterRequest): Promise<CreatePublicParameterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPublicParameterWithOptions(request, runtime);
  }

  /**
   * @param request - CreatePublicPatchBaselineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePublicPatchBaselineResponse
   */
  async createPublicPatchBaselineWithOptions(request: CreatePublicPatchBaselineRequest, runtime: $dara.RuntimeOptions): Promise<CreatePublicPatchBaselineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.approvalRules)) {
      query["ApprovalRules"] = request.approvalRules;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.operationSystem)) {
      query["OperationSystem"] = request.operationSystem;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePublicPatchBaseline",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreatePublicPatchBaselineResponse>(await this.callApi(params, req, runtime), new CreatePublicPatchBaselineResponse({}));
    } else {
      return $dara.cast<CreatePublicPatchBaselineResponse>(await this.execute(params, req, runtime), new CreatePublicPatchBaselineResponse({}));
    }

  }

  /**
   * @param request - CreatePublicPatchBaselineRequest
   * @returns CreatePublicPatchBaselineResponse
   */
  async createPublicPatchBaseline(request: CreatePublicPatchBaselineRequest): Promise<CreatePublicPatchBaselineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPublicPatchBaselineWithOptions(request, runtime);
  }

  /**
   * @param request - CreatePublicTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePublicTemplateResponse
   */
  async createPublicTemplateWithOptions(request: CreatePublicTemplateRequest, runtime: $dara.RuntimeOptions): Promise<CreatePublicTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.isExample)) {
      query["IsExample"] = request.isExample;
    }

    if (!$dara.isNull(request.popularity)) {
      query["Popularity"] = request.popularity;
    }

    if (!$dara.isNull(request.publisher)) {
      query["Publisher"] = request.publisher;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePublicTemplate",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreatePublicTemplateResponse>(await this.callApi(params, req, runtime), new CreatePublicTemplateResponse({}));
    } else {
      return $dara.cast<CreatePublicTemplateResponse>(await this.execute(params, req, runtime), new CreatePublicTemplateResponse({}));
    }

  }

  /**
   * @param request - CreatePublicTemplateRequest
   * @returns CreatePublicTemplateResponse
   */
  async createPublicTemplate(request: CreatePublicTemplateRequest): Promise<CreatePublicTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPublicTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteFailureMsgRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFailureMsgResponse
   */
  async deleteFailureMsgWithOptions(request: DeleteFailureMsgRequest, runtime: $dara.RuntimeOptions): Promise<DeleteFailureMsgResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.operation)) {
      query["Operation"] = request.operation;
    }

    if (!$dara.isNull(request.requestFingerprint)) {
      query["RequestFingerprint"] = request.requestFingerprint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFailureMsg",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteFailureMsgResponse>(await this.callApi(params, req, runtime), new DeleteFailureMsgResponse({}));
    } else {
      return $dara.cast<DeleteFailureMsgResponse>(await this.execute(params, req, runtime), new DeleteFailureMsgResponse({}));
    }

  }

  /**
   * @param request - DeleteFailureMsgRequest
   * @returns DeleteFailureMsgResponse
   */
  async deleteFailureMsg(request: DeleteFailureMsgRequest): Promise<DeleteFailureMsgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFailureMsgWithOptions(request, runtime);
  }

  /**
   * 删除公共参数。
   * 
   * @param request - DeletePublicParameterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePublicParameterResponse
   */
  async deletePublicParameterWithOptions(request: DeletePublicParameterRequest, runtime: $dara.RuntimeOptions): Promise<DeletePublicParameterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePublicParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeletePublicParameterResponse>(await this.callApi(params, req, runtime), new DeletePublicParameterResponse({}));
    } else {
      return $dara.cast<DeletePublicParameterResponse>(await this.execute(params, req, runtime), new DeletePublicParameterResponse({}));
    }

  }

  /**
   * 删除公共参数。
   * 
   * @param request - DeletePublicParameterRequest
   * @returns DeletePublicParameterResponse
   */
  async deletePublicParameter(request: DeletePublicParameterRequest): Promise<DeletePublicParameterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePublicParameterWithOptions(request, runtime);
  }

  /**
   * @param request - DeletePublicPatchBaselineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePublicPatchBaselineResponse
   */
  async deletePublicPatchBaselineWithOptions(request: DeletePublicPatchBaselineRequest, runtime: $dara.RuntimeOptions): Promise<DeletePublicPatchBaselineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePublicPatchBaseline",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeletePublicPatchBaselineResponse>(await this.callApi(params, req, runtime), new DeletePublicPatchBaselineResponse({}));
    } else {
      return $dara.cast<DeletePublicPatchBaselineResponse>(await this.execute(params, req, runtime), new DeletePublicPatchBaselineResponse({}));
    }

  }

  /**
   * @param request - DeletePublicPatchBaselineRequest
   * @returns DeletePublicPatchBaselineResponse
   */
  async deletePublicPatchBaseline(request: DeletePublicPatchBaselineRequest): Promise<DeletePublicPatchBaselineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePublicPatchBaselineWithOptions(request, runtime);
  }

  /**
   * @param request - DeletePublicTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePublicTemplateResponse
   */
  async deletePublicTemplateWithOptions(request: DeletePublicTemplateRequest, runtime: $dara.RuntimeOptions): Promise<DeletePublicTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePublicTemplate",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeletePublicTemplateResponse>(await this.callApi(params, req, runtime), new DeletePublicTemplateResponse({}));
    } else {
      return $dara.cast<DeletePublicTemplateResponse>(await this.execute(params, req, runtime), new DeletePublicTemplateResponse({}));
    }

  }

  /**
   * @param request - DeletePublicTemplateRequest
   * @returns DeletePublicTemplateResponse
   */
  async deletePublicTemplate(request: DeletePublicTemplateRequest): Promise<DeletePublicTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePublicTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - DoCheckResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DoCheckResourceResponse
   */
  async doCheckResourceWithOptions(request: DoCheckResourceRequest, runtime: $dara.RuntimeOptions): Promise<DoCheckResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bid)) {
      query["bid"] = request.bid;
    }

    if (!$dara.isNull(request.country)) {
      query["country"] = request.country;
    }

    if (!$dara.isNull(request.gmtWakeup)) {
      query["gmtWakeup"] = request.gmtWakeup;
    }

    if (!$dara.isNull(request.hid)) {
      query["hid"] = request.hid;
    }

    if (!$dara.isNull(request.interrupt)) {
      query["interrupt"] = request.interrupt;
    }

    if (!$dara.isNull(request.invoker)) {
      query["invoker"] = request.invoker;
    }

    if (!$dara.isNull(request.level)) {
      query["level"] = request.level;
    }

    if (!$dara.isNull(request.message)) {
      query["message"] = request.message;
    }

    if (!$dara.isNull(request.pk)) {
      query["pk"] = request.pk;
    }

    if (!$dara.isNull(request.prompt)) {
      query["prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.success)) {
      query["success"] = request.success;
    }

    if (!$dara.isNull(request.taskExtraData)) {
      query["taskExtraData"] = request.taskExtraData;
    }

    if (!$dara.isNull(request.taskIdentifier)) {
      query["taskIdentifier"] = request.taskIdentifier;
    }

    if (!$dara.isNull(request.url)) {
      query["url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DoCheckResource",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DoCheckResourceResponse>(await this.callApi(params, req, runtime), new DoCheckResourceResponse({}));
    } else {
      return $dara.cast<DoCheckResourceResponse>(await this.execute(params, req, runtime), new DoCheckResourceResponse({}));
    }

  }

  /**
   * @param request - DoCheckResourceRequest
   * @returns DoCheckResourceResponse
   */
  async doCheckResource(request: DoCheckResourceRequest): Promise<DoCheckResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.doCheckResourceWithOptions(request, runtime);
  }

  /**
   * 获取action的详细信息
   * 
   * @param request - GetActionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetActionResponse
   */
  async getActionWithOptions(request: GetActionRequest, runtime: $dara.RuntimeOptions): Promise<GetActionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionName)) {
      query["ActionName"] = request.actionName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAction",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetActionResponse>(await this.callApi(params, req, runtime), new GetActionResponse({}));
    } else {
      return $dara.cast<GetActionResponse>(await this.execute(params, req, runtime), new GetActionResponse({}));
    }

  }

  /**
   * 获取action的详细信息
   * 
   * @param request - GetActionRequest
   * @returns GetActionResponse
   */
  async getAction(request: GetActionRequest): Promise<GetActionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getActionWithOptions(request, runtime);
  }

  /**
   * @param request - GetFlowControlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFlowControlResponse
   */
  async getFlowControlWithOptions(request: GetFlowControlRequest, runtime: $dara.RuntimeOptions): Promise<GetFlowControlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.api)) {
      query["Api"] = request.api;
    }

    if (!$dara.isNull(request.service)) {
      query["Service"] = request.service;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFlowControl",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetFlowControlResponse>(await this.callApi(params, req, runtime), new GetFlowControlResponse({}));
    } else {
      return $dara.cast<GetFlowControlResponse>(await this.execute(params, req, runtime), new GetFlowControlResponse({}));
    }

  }

  /**
   * @param request - GetFlowControlRequest
   * @returns GetFlowControlResponse
   */
  async getFlowControl(request: GetFlowControlRequest): Promise<GetFlowControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFlowControlWithOptions(request, runtime);
  }

  /**
   * 获取一个公共参数，包括参数值。
   * 
   * @param request - GetPublicParameterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPublicParameterResponse
   */
  async getPublicParameterWithOptions(request: GetPublicParameterRequest, runtime: $dara.RuntimeOptions): Promise<GetPublicParameterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.parameterVersion)) {
      query["ParameterVersion"] = request.parameterVersion;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPublicParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetPublicParameterResponse>(await this.callApi(params, req, runtime), new GetPublicParameterResponse({}));
    } else {
      return $dara.cast<GetPublicParameterResponse>(await this.execute(params, req, runtime), new GetPublicParameterResponse({}));
    }

  }

  /**
   * 获取一个公共参数，包括参数值。
   * 
   * @param request - GetPublicParameterRequest
   * @returns GetPublicParameterResponse
   */
  async getPublicParameter(request: GetPublicParameterRequest): Promise<GetPublicParameterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPublicParameterWithOptions(request, runtime);
  }

  /**
   * @param request - GetPublicPatchBaselineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPublicPatchBaselineResponse
   */
  async getPublicPatchBaselineWithOptions(request: GetPublicPatchBaselineRequest, runtime: $dara.RuntimeOptions): Promise<GetPublicPatchBaselineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPublicPatchBaseline",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetPublicPatchBaselineResponse>(await this.callApi(params, req, runtime), new GetPublicPatchBaselineResponse({}));
    } else {
      return $dara.cast<GetPublicPatchBaselineResponse>(await this.execute(params, req, runtime), new GetPublicPatchBaselineResponse({}));
    }

  }

  /**
   * @param request - GetPublicPatchBaselineRequest
   * @returns GetPublicPatchBaselineResponse
   */
  async getPublicPatchBaseline(request: GetPublicPatchBaselineRequest): Promise<GetPublicPatchBaselineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPublicPatchBaselineWithOptions(request, runtime);
  }

  /**
   * @param request - GetPublicTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPublicTemplateResponse
   */
  async getPublicTemplateWithOptions(request: GetPublicTemplateRequest, runtime: $dara.RuntimeOptions): Promise<GetPublicTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPublicTemplate",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetPublicTemplateResponse>(await this.callApi(params, req, runtime), new GetPublicTemplateResponse({}));
    } else {
      return $dara.cast<GetPublicTemplateResponse>(await this.execute(params, req, runtime), new GetPublicTemplateResponse({}));
    }

  }

  /**
   * @param request - GetPublicTemplateRequest
   * @returns GetPublicTemplateResponse
   */
  async getPublicTemplate(request: GetPublicTemplateRequest): Promise<GetPublicTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPublicTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - GetQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQuotaResponse
   */
  async getQuotaWithOptions(request: GetQuotaRequest, runtime: $dara.RuntimeOptions): Promise<GetQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.quotaName)) {
      query["QuotaName"] = request.quotaName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQuota",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetQuotaResponse>(await this.callApi(params, req, runtime), new GetQuotaResponse({}));
    } else {
      return $dara.cast<GetQuotaResponse>(await this.execute(params, req, runtime), new GetQuotaResponse({}));
    }

  }

  /**
   * @param request - GetQuotaRequest
   * @returns GetQuotaResponse
   */
  async getQuota(request: GetQuotaRequest): Promise<GetQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQuotaWithOptions(request, runtime);
  }

  /**
   * @param request - GetUserExecutionTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserExecutionTemplateResponse
   */
  async getUserExecutionTemplateWithOptions(request: GetUserExecutionTemplateRequest, runtime: $dara.RuntimeOptions): Promise<GetUserExecutionTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!$dara.isNull(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserExecutionTemplate",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetUserExecutionTemplateResponse>(await this.callApi(params, req, runtime), new GetUserExecutionTemplateResponse({}));
    } else {
      return $dara.cast<GetUserExecutionTemplateResponse>(await this.execute(params, req, runtime), new GetUserExecutionTemplateResponse({}));
    }

  }

  /**
   * @param request - GetUserExecutionTemplateRequest
   * @returns GetUserExecutionTemplateResponse
   */
  async getUserExecutionTemplate(request: GetUserExecutionTemplateRequest): Promise<GetUserExecutionTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserExecutionTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - GetUserTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserTemplateResponse
   */
  async getUserTemplateWithOptions(request: GetUserTemplateRequest, runtime: $dara.RuntimeOptions): Promise<GetUserTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserTemplate",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetUserTemplateResponse>(await this.callApi(params, req, runtime), new GetUserTemplateResponse({}));
    } else {
      return $dara.cast<GetUserTemplateResponse>(await this.execute(params, req, runtime), new GetUserTemplateResponse({}));
    }

  }

  /**
   * @param request - GetUserTemplateRequest
   * @returns GetUserTemplateResponse
   */
  async getUserTemplate(request: GetUserTemplateRequest): Promise<GetUserTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - ListActionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListActionsResponse
   */
  async listActionsWithOptions(request: ListActionsRequest, runtime: $dara.RuntimeOptions): Promise<ListActionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.OOSActionName)) {
      query["OOSActionName"] = request.OOSActionName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListActions",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListActionsResponse>(await this.callApi(params, req, runtime), new ListActionsResponse({}));
    } else {
      return $dara.cast<ListActionsResponse>(await this.execute(params, req, runtime), new ListActionsResponse({}));
    }

  }

  /**
   * @param request - ListActionsRequest
   * @returns ListActionsResponse
   */
  async listActions(request: ListActionsRequest): Promise<ListActionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listActionsWithOptions(request, runtime);
  }

  /**
   * @param request - ListDefaultQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDefaultQuotaResponse
   */
  async listDefaultQuotaWithOptions(runtime: $dara.RuntimeOptions): Promise<ListDefaultQuotaResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListDefaultQuota",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDefaultQuotaResponse>(await this.callApi(params, req, runtime), new ListDefaultQuotaResponse({}));
    } else {
      return $dara.cast<ListDefaultQuotaResponse>(await this.execute(params, req, runtime), new ListDefaultQuotaResponse({}));
    }

  }

  /**
   * @returns ListDefaultQuotaResponse
   */
  async listDefaultQuota(): Promise<ListDefaultQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDefaultQuotaWithOptions(runtime);
  }

  /**
   * @param request - ListFailureMsgsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFailureMsgsResponse
   */
  async listFailureMsgsWithOptions(request: ListFailureMsgsRequest, runtime: $dara.RuntimeOptions): Promise<ListFailureMsgsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.requestFingerprint)) {
      query["RequestFingerprint"] = request.requestFingerprint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFailureMsgs",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListFailureMsgsResponse>(await this.callApi(params, req, runtime), new ListFailureMsgsResponse({}));
    } else {
      return $dara.cast<ListFailureMsgsResponse>(await this.execute(params, req, runtime), new ListFailureMsgsResponse({}));
    }

  }

  /**
   * @param request - ListFailureMsgsRequest
   * @returns ListFailureMsgsResponse
   */
  async listFailureMsgs(request: ListFailureMsgsRequest): Promise<ListFailureMsgsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFailureMsgsWithOptions(request, runtime);
  }

  /**
   * @param request - ListOOSLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOOSLogsResponse
   */
  async listOOSLogsWithOptions(request: ListOOSLogsRequest, runtime: $dara.RuntimeOptions): Promise<ListOOSLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.requestFingerprint)) {
      query["RequestFingerprint"] = request.requestFingerprint;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOOSLogs",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListOOSLogsResponse>(await this.callApi(params, req, runtime), new ListOOSLogsResponse({}));
    } else {
      return $dara.cast<ListOOSLogsResponse>(await this.execute(params, req, runtime), new ListOOSLogsResponse({}));
    }

  }

  /**
   * @param request - ListOOSLogsRequest
   * @returns ListOOSLogsResponse
   */
  async listOOSLogs(request: ListOOSLogsRequest): Promise<ListOOSLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOOSLogsWithOptions(request, runtime);
  }

  /**
   * 查询公共参数。支持多种查询
   * 
   * @param request - ListPublicParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPublicParametersResponse
   */
  async listPublicParametersWithOptions(request: ListPublicParametersRequest, runtime: $dara.RuntimeOptions): Promise<ListPublicParametersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createdDateAfter)) {
      query["CreatedDateAfter"] = request.createdDateAfter;
    }

    if (!$dara.isNull(request.createdDateBefore)) {
      query["CreatedDateBefore"] = request.createdDateBefore;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.parameterType)) {
      query["ParameterType"] = request.parameterType;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.recursive)) {
      query["Recursive"] = request.recursive;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sortField)) {
      query["SortField"] = request.sortField;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPublicParameters",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPublicParametersResponse>(await this.callApi(params, req, runtime), new ListPublicParametersResponse({}));
    } else {
      return $dara.cast<ListPublicParametersResponse>(await this.execute(params, req, runtime), new ListPublicParametersResponse({}));
    }

  }

  /**
   * 查询公共参数。支持多种查询
   * 
   * @param request - ListPublicParametersRequest
   * @returns ListPublicParametersResponse
   */
  async listPublicParameters(request: ListPublicParametersRequest): Promise<ListPublicParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPublicParametersWithOptions(request, runtime);
  }

  /**
   * @param request - ListPublicPatchBaselinesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPublicPatchBaselinesResponse
   */
  async listPublicPatchBaselinesWithOptions(request: ListPublicPatchBaselinesRequest, runtime: $dara.RuntimeOptions): Promise<ListPublicPatchBaselinesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.operationSystem)) {
      query["OperationSystem"] = request.operationSystem;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPublicPatchBaselines",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPublicPatchBaselinesResponse>(await this.callApi(params, req, runtime), new ListPublicPatchBaselinesResponse({}));
    } else {
      return $dara.cast<ListPublicPatchBaselinesResponse>(await this.execute(params, req, runtime), new ListPublicPatchBaselinesResponse({}));
    }

  }

  /**
   * @param request - ListPublicPatchBaselinesRequest
   * @returns ListPublicPatchBaselinesResponse
   */
  async listPublicPatchBaselines(request: ListPublicPatchBaselinesRequest): Promise<ListPublicPatchBaselinesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPublicPatchBaselinesWithOptions(request, runtime);
  }

  /**
   * @param request - ListPublicTemplateRegistrationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPublicTemplateRegistrationsResponse
   */
  async listPublicTemplateRegistrationsWithOptions(request: ListPublicTemplateRegistrationsRequest, runtime: $dara.RuntimeOptions): Promise<ListPublicTemplateRegistrationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.registrationId)) {
      query["RegistrationId"] = request.registrationId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPublicTemplateRegistrations",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPublicTemplateRegistrationsResponse>(await this.callApi(params, req, runtime), new ListPublicTemplateRegistrationsResponse({}));
    } else {
      return $dara.cast<ListPublicTemplateRegistrationsResponse>(await this.execute(params, req, runtime), new ListPublicTemplateRegistrationsResponse({}));
    }

  }

  /**
   * @param request - ListPublicTemplateRegistrationsRequest
   * @returns ListPublicTemplateRegistrationsResponse
   */
  async listPublicTemplateRegistrations(request: ListPublicTemplateRegistrationsRequest): Promise<ListPublicTemplateRegistrationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPublicTemplateRegistrationsWithOptions(request, runtime);
  }

  /**
   * @param request - ListPublicTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPublicTemplatesResponse
   */
  async listPublicTemplatesWithOptions(request: ListPublicTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<ListPublicTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createdBy)) {
      query["CreatedBy"] = request.createdBy;
    }

    if (!$dara.isNull(request.createdDateAfter)) {
      query["CreatedDateAfter"] = request.createdDateAfter;
    }

    if (!$dara.isNull(request.createdDateBefore)) {
      query["CreatedDateBefore"] = request.createdDateBefore;
    }

    if (!$dara.isNull(request.isExample)) {
      query["IsExample"] = request.isExample;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.popularity)) {
      query["Popularity"] = request.popularity;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!$dara.isNull(request.sortField)) {
      query["SortField"] = request.sortField;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.templateFormat)) {
      query["TemplateFormat"] = request.templateFormat;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPublicTemplates",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPublicTemplatesResponse>(await this.callApi(params, req, runtime), new ListPublicTemplatesResponse({}));
    } else {
      return $dara.cast<ListPublicTemplatesResponse>(await this.execute(params, req, runtime), new ListPublicTemplatesResponse({}));
    }

  }

  /**
   * @param request - ListPublicTemplatesRequest
   * @returns ListPublicTemplatesResponse
   */
  async listPublicTemplates(request: ListPublicTemplatesRequest): Promise<ListPublicTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPublicTemplatesWithOptions(request, runtime);
  }

  /**
   * @param request - ListUserExecutionLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserExecutionLogsResponse
   */
  async listUserExecutionLogsWithOptions(request: ListUserExecutionLogsRequest, runtime: $dara.RuntimeOptions): Promise<ListUserExecutionLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!$dara.isNull(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!$dara.isNull(request.logType)) {
      query["LogType"] = request.logType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskExecutionId)) {
      query["TaskExecutionId"] = request.taskExecutionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserExecutionLogs",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListUserExecutionLogsResponse>(await this.callApi(params, req, runtime), new ListUserExecutionLogsResponse({}));
    } else {
      return $dara.cast<ListUserExecutionLogsResponse>(await this.execute(params, req, runtime), new ListUserExecutionLogsResponse({}));
    }

  }

  /**
   * @param request - ListUserExecutionLogsRequest
   * @returns ListUserExecutionLogsResponse
   */
  async listUserExecutionLogs(request: ListUserExecutionLogsRequest): Promise<ListUserExecutionLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserExecutionLogsWithOptions(request, runtime);
  }

  /**
   * @param request - ListUserExecutionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserExecutionsResponse
   */
  async listUserExecutionsWithOptions(request: ListUserExecutionsRequest, runtime: $dara.RuntimeOptions): Promise<ListUserExecutionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!$dara.isNull(request.endDateAfter)) {
      query["EndDateAfter"] = request.endDateAfter;
    }

    if (!$dara.isNull(request.endDateBefore)) {
      query["EndDateBefore"] = request.endDateBefore;
    }

    if (!$dara.isNull(request.executedBy)) {
      query["ExecutedBy"] = request.executedBy;
    }

    if (!$dara.isNull(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!$dara.isNull(request.includeChildExecution)) {
      query["IncludeChildExecution"] = request.includeChildExecution;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.parentExecutionId)) {
      query["ParentExecutionId"] = request.parentExecutionId;
    }

    if (!$dara.isNull(request.ramRole)) {
      query["RamRole"] = request.ramRole;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sortField)) {
      query["SortField"] = request.sortField;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.startDateAfter)) {
      query["StartDateAfter"] = request.startDateAfter;
    }

    if (!$dara.isNull(request.startDateBefore)) {
      query["StartDateBefore"] = request.startDateBefore;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserExecutions",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListUserExecutionsResponse>(await this.callApi(params, req, runtime), new ListUserExecutionsResponse({}));
    } else {
      return $dara.cast<ListUserExecutionsResponse>(await this.execute(params, req, runtime), new ListUserExecutionsResponse({}));
    }

  }

  /**
   * @param request - ListUserExecutionsRequest
   * @returns ListUserExecutionsResponse
   */
  async listUserExecutions(request: ListUserExecutionsRequest): Promise<ListUserExecutionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserExecutionsWithOptions(request, runtime);
  }

  /**
   * @param request - ListUserInstancePatchStatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserInstancePatchStatesResponse
   */
  async listUserInstancePatchStatesWithOptions(request: ListUserInstancePatchStatesRequest, runtime: $dara.RuntimeOptions): Promise<ListUserInstancePatchStatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserInstancePatchStates",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListUserInstancePatchStatesResponse>(await this.callApi(params, req, runtime), new ListUserInstancePatchStatesResponse({}));
    } else {
      return $dara.cast<ListUserInstancePatchStatesResponse>(await this.execute(params, req, runtime), new ListUserInstancePatchStatesResponse({}));
    }

  }

  /**
   * @param request - ListUserInstancePatchStatesRequest
   * @returns ListUserInstancePatchStatesResponse
   */
  async listUserInstancePatchStates(request: ListUserInstancePatchStatesRequest): Promise<ListUserInstancePatchStatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserInstancePatchStatesWithOptions(request, runtime);
  }

  /**
   * @param request - ListUserInstancePatchesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserInstancePatchesResponse
   */
  async listUserInstancePatchesWithOptions(request: ListUserInstancePatchesRequest, runtime: $dara.RuntimeOptions): Promise<ListUserInstancePatchesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserInstancePatches",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListUserInstancePatchesResponse>(await this.callApi(params, req, runtime), new ListUserInstancePatchesResponse({}));
    } else {
      return $dara.cast<ListUserInstancePatchesResponse>(await this.execute(params, req, runtime), new ListUserInstancePatchesResponse({}));
    }

  }

  /**
   * @param request - ListUserInstancePatchesRequest
   * @returns ListUserInstancePatchesResponse
   */
  async listUserInstancePatches(request: ListUserInstancePatchesRequest): Promise<ListUserInstancePatchesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserInstancePatchesWithOptions(request, runtime);
  }

  /**
   * @param request - ListUserInventoryEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserInventoryEntriesResponse
   */
  async listUserInventoryEntriesWithOptions(request: ListUserInventoryEntriesRequest, runtime: $dara.RuntimeOptions): Promise<ListUserInventoryEntriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.typeName)) {
      query["TypeName"] = request.typeName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserInventoryEntries",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListUserInventoryEntriesResponse>(await this.callApi(params, req, runtime), new ListUserInventoryEntriesResponse({}));
    } else {
      return $dara.cast<ListUserInventoryEntriesResponse>(await this.execute(params, req, runtime), new ListUserInventoryEntriesResponse({}));
    }

  }

  /**
   * @param request - ListUserInventoryEntriesRequest
   * @returns ListUserInventoryEntriesResponse
   */
  async listUserInventoryEntries(request: ListUserInventoryEntriesRequest): Promise<ListUserInventoryEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserInventoryEntriesWithOptions(request, runtime);
  }

  /**
   * @param request - ListUserTaskExecutionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserTaskExecutionsResponse
   */
  async listUserTaskExecutionsWithOptions(request: ListUserTaskExecutionsRequest, runtime: $dara.RuntimeOptions): Promise<ListUserTaskExecutionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!$dara.isNull(request.endDateAfter)) {
      query["EndDateAfter"] = request.endDateAfter;
    }

    if (!$dara.isNull(request.endDateBefore)) {
      query["EndDateBefore"] = request.endDateBefore;
    }

    if (!$dara.isNull(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!$dara.isNull(request.includeChildTaskExecution)) {
      query["IncludeChildTaskExecution"] = request.includeChildTaskExecution;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.parentTaskExecutionId)) {
      query["ParentTaskExecutionId"] = request.parentTaskExecutionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sortField)) {
      query["SortField"] = request.sortField;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.startDateAfter)) {
      query["StartDateAfter"] = request.startDateAfter;
    }

    if (!$dara.isNull(request.startDateBefore)) {
      query["StartDateBefore"] = request.startDateBefore;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskAction)) {
      query["TaskAction"] = request.taskAction;
    }

    if (!$dara.isNull(request.taskExecutionId)) {
      query["TaskExecutionId"] = request.taskExecutionId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserTaskExecutions",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListUserTaskExecutionsResponse>(await this.callApi(params, req, runtime), new ListUserTaskExecutionsResponse({}));
    } else {
      return $dara.cast<ListUserTaskExecutionsResponse>(await this.execute(params, req, runtime), new ListUserTaskExecutionsResponse({}));
    }

  }

  /**
   * @param request - ListUserTaskExecutionsRequest
   * @returns ListUserTaskExecutionsResponse
   */
  async listUserTaskExecutions(request: ListUserTaskExecutionsRequest): Promise<ListUserTaskExecutionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserTaskExecutionsWithOptions(request, runtime);
  }

  /**
   * @param request - ListUserTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserTemplatesResponse
   */
  async listUserTemplatesWithOptions(request: ListUserTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<ListUserTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.createdBy)) {
      query["CreatedBy"] = request.createdBy;
    }

    if (!$dara.isNull(request.createdDateAfter)) {
      query["CreatedDateAfter"] = request.createdDateAfter;
    }

    if (!$dara.isNull(request.createdDateBefore)) {
      query["CreatedDateBefore"] = request.createdDateBefore;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.popularity)) {
      query["Popularity"] = request.popularity;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!$dara.isNull(request.sortField)) {
      query["SortField"] = request.sortField;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.templateFormat)) {
      query["TemplateFormat"] = request.templateFormat;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserTemplates",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListUserTemplatesResponse>(await this.callApi(params, req, runtime), new ListUserTemplatesResponse({}));
    } else {
      return $dara.cast<ListUserTemplatesResponse>(await this.execute(params, req, runtime), new ListUserTemplatesResponse({}));
    }

  }

  /**
   * @param request - ListUserTemplatesRequest
   * @returns ListUserTemplatesResponse
   */
  async listUserTemplates(request: ListUserTemplatesRequest): Promise<ListUserTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserTemplatesWithOptions(request, runtime);
  }

  /**
   * @param request - ResetTimerTriggerExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetTimerTriggerExecutionResponse
   */
  async resetTimerTriggerExecutionWithOptions(request: ResetTimerTriggerExecutionRequest, runtime: $dara.RuntimeOptions): Promise<ResetTimerTriggerExecutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!$dara.isNull(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetTimerTriggerExecution",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ResetTimerTriggerExecutionResponse>(await this.callApi(params, req, runtime), new ResetTimerTriggerExecutionResponse({}));
    } else {
      return $dara.cast<ResetTimerTriggerExecutionResponse>(await this.execute(params, req, runtime), new ResetTimerTriggerExecutionResponse({}));
    }

  }

  /**
   * @param request - ResetTimerTriggerExecutionRequest
   * @returns ResetTimerTriggerExecutionResponse
   */
  async resetTimerTriggerExecution(request: ResetTimerTriggerExecutionRequest): Promise<ResetTimerTriggerExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetTimerTriggerExecutionWithOptions(request, runtime);
  }

  /**
   * @param request - ResetUserExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetUserExecutionResponse
   */
  async resetUserExecutionWithOptions(request: ResetUserExecutionRequest, runtime: $dara.RuntimeOptions): Promise<ResetUserExecutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!$dara.isNull(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetUserExecution",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ResetUserExecutionResponse>(await this.callApi(params, req, runtime), new ResetUserExecutionResponse({}));
    } else {
      return $dara.cast<ResetUserExecutionResponse>(await this.execute(params, req, runtime), new ResetUserExecutionResponse({}));
    }

  }

  /**
   * @param request - ResetUserExecutionRequest
   * @returns ResetUserExecutionResponse
   */
  async resetUserExecution(request: ResetUserExecutionRequest): Promise<ResetUserExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetUserExecutionWithOptions(request, runtime);
  }

  /**
   * @param request - SetFlowControlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetFlowControlResponse
   */
  async setFlowControlWithOptions(request: SetFlowControlRequest, runtime: $dara.RuntimeOptions): Promise<SetFlowControlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.api)) {
      query["Api"] = request.api;
    }

    if (!$dara.isNull(request.service)) {
      query["Service"] = request.service;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetFlowControl",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SetFlowControlResponse>(await this.callApi(params, req, runtime), new SetFlowControlResponse({}));
    } else {
      return $dara.cast<SetFlowControlResponse>(await this.execute(params, req, runtime), new SetFlowControlResponse({}));
    }

  }

  /**
   * @param request - SetFlowControlRequest
   * @returns SetFlowControlResponse
   */
  async setFlowControl(request: SetFlowControlRequest): Promise<SetFlowControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setFlowControlWithOptions(request, runtime);
  }

  /**
   * @param request - SetQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetQuotaResponse
   */
  async setQuotaWithOptions(request: SetQuotaRequest, runtime: $dara.RuntimeOptions): Promise<SetQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.quotaName)) {
      query["QuotaName"] = request.quotaName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetQuota",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SetQuotaResponse>(await this.callApi(params, req, runtime), new SetQuotaResponse({}));
    } else {
      return $dara.cast<SetQuotaResponse>(await this.execute(params, req, runtime), new SetQuotaResponse({}));
    }

  }

  /**
   * @param request - SetQuotaRequest
   * @returns SetQuotaResponse
   */
  async setQuota(request: SetQuotaRequest): Promise<SetQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setQuotaWithOptions(request, runtime);
  }

  /**
   * @param request - TerminateUserExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TerminateUserExecutionResponse
   */
  async terminateUserExecutionWithOptions(request: TerminateUserExecutionRequest, runtime: $dara.RuntimeOptions): Promise<TerminateUserExecutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!$dara.isNull(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TerminateUserExecution",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<TerminateUserExecutionResponse>(await this.callApi(params, req, runtime), new TerminateUserExecutionResponse({}));
    } else {
      return $dara.cast<TerminateUserExecutionResponse>(await this.execute(params, req, runtime), new TerminateUserExecutionResponse({}));
    }

  }

  /**
   * @param request - TerminateUserExecutionRequest
   * @returns TerminateUserExecutionResponse
   */
  async terminateUserExecution(request: TerminateUserExecutionRequest): Promise<TerminateUserExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.terminateUserExecutionWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateActionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateActionResponse
   */
  async updateActionWithOptions(request: UpdateActionRequest, runtime: $dara.RuntimeOptions): Promise<UpdateActionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionName)) {
      query["ActionName"] = request.actionName;
    }

    if (!$dara.isNull(request.actionType)) {
      query["ActionType"] = request.actionType;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.popularity)) {
      query["Popularity"] = request.popularity;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAction",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateActionResponse>(await this.callApi(params, req, runtime), new UpdateActionResponse({}));
    } else {
      return $dara.cast<UpdateActionResponse>(await this.execute(params, req, runtime), new UpdateActionResponse({}));
    }

  }

  /**
   * @param request - UpdateActionRequest
   * @returns UpdateActionResponse
   */
  async updateAction(request: UpdateActionRequest): Promise<UpdateActionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateActionWithOptions(request, runtime);
  }

  /**
   * 更新一个已存在的公共参数。
   * 
   * @param request - UpdatePublicParameterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePublicParameterResponse
   */
  async updatePublicParameterWithOptions(request: UpdatePublicParameterRequest, runtime: $dara.RuntimeOptions): Promise<UpdatePublicParameterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePublicParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdatePublicParameterResponse>(await this.callApi(params, req, runtime), new UpdatePublicParameterResponse({}));
    } else {
      return $dara.cast<UpdatePublicParameterResponse>(await this.execute(params, req, runtime), new UpdatePublicParameterResponse({}));
    }

  }

  /**
   * 更新一个已存在的公共参数。
   * 
   * @param request - UpdatePublicParameterRequest
   * @returns UpdatePublicParameterResponse
   */
  async updatePublicParameter(request: UpdatePublicParameterRequest): Promise<UpdatePublicParameterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePublicParameterWithOptions(request, runtime);
  }

  /**
   * @param request - UpdatePublicPatchBaselineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePublicPatchBaselineResponse
   */
  async updatePublicPatchBaselineWithOptions(request: UpdatePublicPatchBaselineRequest, runtime: $dara.RuntimeOptions): Promise<UpdatePublicPatchBaselineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.approvalRules)) {
      query["ApprovalRules"] = request.approvalRules;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePublicPatchBaseline",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdatePublicPatchBaselineResponse>(await this.callApi(params, req, runtime), new UpdatePublicPatchBaselineResponse({}));
    } else {
      return $dara.cast<UpdatePublicPatchBaselineResponse>(await this.execute(params, req, runtime), new UpdatePublicPatchBaselineResponse({}));
    }

  }

  /**
   * @param request - UpdatePublicPatchBaselineRequest
   * @returns UpdatePublicPatchBaselineResponse
   */
  async updatePublicPatchBaseline(request: UpdatePublicPatchBaselineRequest): Promise<UpdatePublicPatchBaselineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePublicPatchBaselineWithOptions(request, runtime);
  }

  /**
   * @param request - UpdatePublicTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePublicTemplateResponse
   */
  async updatePublicTemplateWithOptions(request: UpdatePublicTemplateRequest, runtime: $dara.RuntimeOptions): Promise<UpdatePublicTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.popularity)) {
      query["Popularity"] = request.popularity;
    }

    if (!$dara.isNull(request.publisher)) {
      query["Publisher"] = request.publisher;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePublicTemplate",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdatePublicTemplateResponse>(await this.callApi(params, req, runtime), new UpdatePublicTemplateResponse({}));
    } else {
      return $dara.cast<UpdatePublicTemplateResponse>(await this.execute(params, req, runtime), new UpdatePublicTemplateResponse({}));
    }

  }

  /**
   * @param request - UpdatePublicTemplateRequest
   * @returns UpdatePublicTemplateResponse
   */
  async updatePublicTemplate(request: UpdatePublicTemplateRequest): Promise<UpdatePublicTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePublicTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - ValidatePublicTemplateContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidatePublicTemplateContentResponse
   */
  async validatePublicTemplateContentWithOptions(request: ValidatePublicTemplateContentRequest, runtime: $dara.RuntimeOptions): Promise<ValidatePublicTemplateContentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidatePublicTemplateContent",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ValidatePublicTemplateContentResponse>(await this.callApi(params, req, runtime), new ValidatePublicTemplateContentResponse({}));
    } else {
      return $dara.cast<ValidatePublicTemplateContentResponse>(await this.execute(params, req, runtime), new ValidatePublicTemplateContentResponse({}));
    }

  }

  /**
   * @param request - ValidatePublicTemplateContentRequest
   * @returns ValidatePublicTemplateContentResponse
   */
  async validatePublicTemplateContent(request: ValidatePublicTemplateContentRequest): Promise<ValidatePublicTemplateContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.validatePublicTemplateContentWithOptions(request, runtime);
  }

}
