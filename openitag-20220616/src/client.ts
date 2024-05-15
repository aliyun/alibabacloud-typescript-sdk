// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateTaskDetail extends $tea.Model {
  admins?: CreateTaskDetailAdmins;
  allowAppendData?: boolean;
  assignConfig?: TaskAssginConfig;
  datasetProxyRelations?: DatasetProxyConfig[];
  exif?: { [key: string]: any };
  tags?: string[];
  taskName?: string;
  taskTemplateConfig?: TaskTemplateConfig;
  taskWorkflow?: CreateTaskDetailTaskWorkflow[];
  templateId?: string;
  UUID?: string;
  voteConfigs?: { [key: string]: CreateTaskDetailVoteInfo };
  static names(): { [key: string]: string } {
    return {
      admins: 'Admins',
      allowAppendData: 'AllowAppendData',
      assignConfig: 'AssignConfig',
      datasetProxyRelations: 'DatasetProxyRelations',
      exif: 'Exif',
      tags: 'Tags',
      taskName: 'TaskName',
      taskTemplateConfig: 'TaskTemplateConfig',
      taskWorkflow: 'TaskWorkflow',
      templateId: 'TemplateId',
      UUID: 'UUID',
      voteConfigs: 'VoteConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      admins: CreateTaskDetailAdmins,
      allowAppendData: 'boolean',
      assignConfig: TaskAssginConfig,
      datasetProxyRelations: { 'type': 'array', 'itemType': DatasetProxyConfig },
      exif: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tags: { 'type': 'array', 'itemType': 'string' },
      taskName: 'string',
      taskTemplateConfig: TaskTemplateConfig,
      taskWorkflow: { 'type': 'array', 'itemType': CreateTaskDetailTaskWorkflow },
      templateId: 'string',
      UUID: 'string',
      voteConfigs: { 'type': 'map', 'keyType': 'string', 'valueType': CreateTaskDetailVoteInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskDetailVoteInfo extends $tea.Model {
  minVote?: number;
  voteNum?: number;
  static names(): { [key: string]: string } {
    return {
      minVote: 'MinVote',
      voteNum: 'VoteNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minVote: 'number',
      voteNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DatasetProxyConfig extends $tea.Model {
  datasetType?: string;
  source?: string;
  sourceDatasetId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetType: 'DatasetType',
      source: 'Source',
      sourceDatasetId: 'SourceDatasetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetType: 'string',
      source: 'string',
      sourceDatasetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlowJobInfo extends $tea.Model {
  display?: boolean;
  jobId?: string;
  jobType?: string;
  messageId?: string;
  processType?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      display: 'Display',
      jobId: 'JobId',
      jobType: 'JobType',
      messageId: 'MessageId',
      processType: 'ProcessType',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      display: 'boolean',
      jobId: 'string',
      jobType: 'string',
      messageId: 'string',
      processType: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Job extends $tea.Model {
  creator?: SimpleUser;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  jobId?: string;
  jobResult?: JobJobResult;
  jobType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      jobId: 'JobId',
      jobResult: 'JobResult',
      jobType: 'JobType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: SimpleUser,
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      jobId: 'string',
      jobResult: JobJobResult,
      jobType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MarkResult extends $tea.Model {
  isNeedVoteJudge?: boolean;
  markResult?: string;
  markResultId?: string;
  markTime?: string;
  markTitle?: string;
  progress?: string;
  questionId?: string;
  resultType?: string;
  userMarkResultId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      isNeedVoteJudge: 'IsNeedVoteJudge',
      markResult: 'MarkResult',
      markResultId: 'MarkResultId',
      markTime: 'MarkTime',
      markTitle: 'MarkTitle',
      progress: 'Progress',
      questionId: 'QuestionId',
      resultType: 'ResultType',
      userMarkResultId: 'UserMarkResultId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isNeedVoteJudge: 'boolean',
      markResult: 'string',
      markResultId: 'string',
      markTime: 'string',
      markTitle: 'string',
      progress: 'string',
      questionId: 'string',
      resultType: 'string',
      userMarkResultId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenDatasetProxyAppendDataRequest extends $tea.Model {
  dataMeta?: { [key: string]: string }[];
  taskId?: string;
  traceId?: string;
  UUID?: string;
  static names(): { [key: string]: string } {
    return {
      dataMeta: 'DataMeta',
      taskId: 'TaskId',
      traceId: 'TraceId',
      UUID: 'UUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataMeta: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      taskId: 'string',
      traceId: 'string',
      UUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuestionOption extends $tea.Model {
  children?: QuestionOption[];
  color?: string;
  key?: string;
  label?: string;
  remark?: string;
  shortcut?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      color: 'Color',
      key: 'Key',
      label: 'Label',
      remark: 'Remark',
      shortcut: 'Shortcut',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': QuestionOption },
      color: 'string',
      key: 'string',
      label: 'string',
      remark: 'string',
      shortcut: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuestionPlugin extends $tea.Model {
  canSelect?: boolean;
  children?: QuestionPlugin[];
  defaultResult?: string;
  display?: boolean;
  exif?: { [key: string]: any };
  hotKeyMap?: string;
  markTitle?: string;
  markTitleAlias?: string;
  mustFill?: boolean;
  options?: QuestionOption[];
  preOptions?: string[];
  questionId?: string;
  rule?: string;
  selectGroup?: string;
  selected?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      canSelect: 'CanSelect',
      children: 'Children',
      defaultResult: 'DefaultResult',
      display: 'Display',
      exif: 'Exif',
      hotKeyMap: 'HotKeyMap',
      markTitle: 'MarkTitle',
      markTitleAlias: 'MarkTitleAlias',
      mustFill: 'MustFill',
      options: 'Options',
      preOptions: 'PreOptions',
      questionId: 'QuestionId',
      rule: 'Rule',
      selectGroup: 'SelectGroup',
      selected: 'Selected',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSelect: 'boolean',
      children: { 'type': 'array', 'itemType': QuestionPlugin },
      defaultResult: 'string',
      display: 'boolean',
      exif: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      hotKeyMap: 'string',
      markTitle: 'string',
      markTitleAlias: 'string',
      mustFill: 'boolean',
      options: { 'type': 'array', 'itemType': QuestionOption },
      preOptions: { 'type': 'array', 'itemType': 'string' },
      questionId: 'string',
      rule: 'string',
      selectGroup: 'string',
      selected: 'boolean',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimpleSubtask extends $tea.Model {
  items?: SimpleSubtaskItems[];
  status?: string;
  subtaskId?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      status: 'Status',
      subtaskId: 'SubtaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': SimpleSubtaskItems },
      status: 'string',
      subtaskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimpleTask extends $tea.Model {
  archived?: boolean;
  archivedInfos?: string;
  creator?: SimpleUser;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  labelStyle?: string;
  modifier?: SimpleUser;
  refTaskId?: string;
  remark?: string;
  stage?: string;
  status?: string;
  tags?: string[];
  taskId?: string;
  taskName?: string;
  taskType?: string;
  templateId?: string;
  tenantId?: string;
  UUID?: string;
  workflowNodes?: string[];
  static names(): { [key: string]: string } {
    return {
      archived: 'Archived',
      archivedInfos: 'ArchivedInfos',
      creator: 'Creator',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labelStyle: 'LabelStyle',
      modifier: 'Modifier',
      refTaskId: 'RefTaskId',
      remark: 'Remark',
      stage: 'Stage',
      status: 'Status',
      tags: 'Tags',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskType: 'TaskType',
      templateId: 'TemplateId',
      tenantId: 'TenantId',
      UUID: 'UUID',
      workflowNodes: 'WorkflowNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archived: 'boolean',
      archivedInfos: 'string',
      creator: SimpleUser,
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labelStyle: 'string',
      modifier: SimpleUser,
      refTaskId: 'string',
      remark: 'string',
      stage: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
      taskName: 'string',
      taskType: 'string',
      templateId: 'string',
      tenantId: 'string',
      UUID: 'string',
      workflowNodes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimpleTemplate extends $tea.Model {
  abandonReasons?: string;
  description?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  sharedMode?: string;
  status?: string;
  tags?: string[];
  templateId?: string;
  templateName?: string;
  tenantId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      abandonReasons: 'AbandonReasons',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      sharedMode: 'SharedMode',
      status: 'Status',
      tags: 'Tags',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      tenantId: 'TenantId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonReasons: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      sharedMode: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      templateId: 'string',
      templateName: 'string',
      tenantId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimpleTenant extends $tea.Model {
  creator?: SimpleUser;
  description?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  modifier?: SimpleUser;
  role?: string;
  tenantId?: string;
  tenantName?: string;
  UUID?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      modifier: 'Modifier',
      role: 'Role',
      tenantId: 'TenantId',
      tenantName: 'TenantName',
      UUID: 'UUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: SimpleUser,
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      modifier: SimpleUser,
      role: 'string',
      tenantId: 'string',
      tenantName: 'string',
      UUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimpleUser extends $tea.Model {
  accountNo?: string;
  accountType?: string;
  role?: string;
  userId?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      accountType: 'AccountType',
      role: 'Role',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'string',
      accountType: 'string',
      role: 'string',
      userId: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimpleWorkforce extends $tea.Model {
  userIds?: number[];
  workNodeId?: number;
  static names(): { [key: string]: string } {
    return {
      userIds: 'UserIds',
      workNodeId: 'WorkNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userIds: { 'type': 'array', 'itemType': 'number' },
      workNodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleTenant extends $tea.Model {
  description?: string;
  status?: string;
  tenantId?: string;
  tenantName?: string;
  UUID?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      status: 'Status',
      tenantId: 'TenantId',
      tenantName: 'TenantName',
      UUID: 'UUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      status: 'string',
      tenantId: 'string',
      tenantName: 'string',
      UUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubtaskDetail extends $tea.Model {
  canDiscard?: boolean;
  canReassign?: boolean;
  canRelease?: boolean;
  currentWorkNode?: string;
  extConfigs?: string;
  items?: SubtaskDetailItems[];
  status?: string;
  subtaskId?: string;
  taskId?: string;
  weight?: number;
  workNodeState?: string;
  workforce?: Workforce[];
  static names(): { [key: string]: string } {
    return {
      canDiscard: 'CanDiscard',
      canReassign: 'CanReassign',
      canRelease: 'CanRelease',
      currentWorkNode: 'CurrentWorkNode',
      extConfigs: 'ExtConfigs',
      items: 'Items',
      status: 'Status',
      subtaskId: 'SubtaskId',
      taskId: 'TaskId',
      weight: 'Weight',
      workNodeState: 'WorkNodeState',
      workforce: 'Workforce',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canDiscard: 'boolean',
      canReassign: 'boolean',
      canRelease: 'boolean',
      currentWorkNode: 'string',
      extConfigs: 'string',
      items: { 'type': 'array', 'itemType': SubtaskDetailItems },
      status: 'string',
      subtaskId: 'string',
      taskId: 'string',
      weight: 'number',
      workNodeState: 'string',
      workforce: { 'type': 'array', 'itemType': Workforce },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubtaskItemDetail extends $tea.Model {
  annotations?: SubtaskItemDetailAnnotations[];
  dataSource?: { [key: string]: any };
  itemId?: number;
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
      dataSource: 'DataSource',
      itemId: 'ItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: { 'type': 'array', 'itemType': SubtaskItemDetailAnnotations },
      dataSource: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      itemId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskAssginConfig extends $tea.Model {
  assignCount?: number;
  assignField?: string;
  assignSubTaskCount?: string;
  assignType?: string;
  static names(): { [key: string]: string } {
    return {
      assignCount: 'AssignCount',
      assignField: 'AssignField',
      assignSubTaskCount: 'AssignSubTaskCount',
      assignType: 'AssignType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignCount: 'number',
      assignField: 'string',
      assignSubTaskCount: 'string',
      assignType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskDetail extends $tea.Model {
  admins?: SimpleUser[];
  alertTime?: number;
  allowAppendData?: boolean;
  archived?: boolean;
  archivedInfos?: string;
  assignConfig?: { [key: string]: any };
  creator?: SimpleUser;
  datasetProxyRelations?: TaskDetailDatasetProxyRelations[];
  exif?: { [key: string]: any };
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  labelStyle?: string;
  mineConfigs?: { [key: string]: any };
  modifier?: SimpleUser;
  noticeConfig?: { [key: string]: any };
  periodConfig?: { [key: string]: any };
  refTaskId?: string;
  relateTaskConfig?: { [key: string]: any };
  remark?: string;
  resultCallbackConfig?: { [key: string]: any };
  stage?: string;
  status?: string;
  tags?: string[];
  taskId?: string;
  taskName?: string;
  taskTemplateConfig?: TaskDetailTaskTemplateConfig;
  taskType?: string;
  taskWorkflow?: TaskDetailTaskWorkflow[];
  templateId?: string;
  tenantId?: string;
  tenantName?: string;
  UUID?: string;
  voteConfigs?: { [key: string]: any };
  workflowNodes?: string[];
  runMsg?: string;
  static names(): { [key: string]: string } {
    return {
      admins: 'Admins',
      alertTime: 'AlertTime',
      allowAppendData: 'AllowAppendData',
      archived: 'Archived',
      archivedInfos: 'ArchivedInfos',
      assignConfig: 'AssignConfig',
      creator: 'Creator',
      datasetProxyRelations: 'DatasetProxyRelations',
      exif: 'Exif',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labelStyle: 'LabelStyle',
      mineConfigs: 'MineConfigs',
      modifier: 'Modifier',
      noticeConfig: 'NoticeConfig',
      periodConfig: 'PeriodConfig',
      refTaskId: 'RefTaskId',
      relateTaskConfig: 'RelateTaskConfig',
      remark: 'Remark',
      resultCallbackConfig: 'ResultCallbackConfig',
      stage: 'Stage',
      status: 'Status',
      tags: 'Tags',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskTemplateConfig: 'TaskTemplateConfig',
      taskType: 'TaskType',
      taskWorkflow: 'TaskWorkflow',
      templateId: 'TemplateId',
      tenantId: 'TenantId',
      tenantName: 'TenantName',
      UUID: 'UUID',
      voteConfigs: 'VoteConfigs',
      workflowNodes: 'WorkflowNodes',
      runMsg: 'runMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      admins: { 'type': 'array', 'itemType': SimpleUser },
      alertTime: 'number',
      allowAppendData: 'boolean',
      archived: 'boolean',
      archivedInfos: 'string',
      assignConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      creator: SimpleUser,
      datasetProxyRelations: { 'type': 'array', 'itemType': TaskDetailDatasetProxyRelations },
      exif: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labelStyle: 'string',
      mineConfigs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      modifier: SimpleUser,
      noticeConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      periodConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      refTaskId: 'string',
      relateTaskConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      remark: 'string',
      resultCallbackConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      stage: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
      taskName: 'string',
      taskTemplateConfig: TaskDetailTaskTemplateConfig,
      taskType: 'string',
      taskWorkflow: { 'type': 'array', 'itemType': TaskDetailTaskWorkflow },
      templateId: 'string',
      tenantId: 'string',
      tenantName: 'string',
      UUID: 'string',
      voteConfigs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      workflowNodes: { 'type': 'array', 'itemType': 'string' },
      runMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskStatistic extends $tea.Model {
  acceptItemCount?: number;
  checkAbandon?: number;
  checkAccuracy?: number;
  checkEfficiency?: number;
  checkedAccuracy?: number;
  checkedError?: number;
  checkedRejectCount?: number;
  finalAbandonCount?: number;
  finishedItemCount?: number;
  finishedSubtaskCount?: number;
  markEfficiency?: number;
  preMarkFixedCount?: number;
  sampledAccuracy?: number;
  sampledErrorCount?: number;
  sampledRejectCount?: number;
  samplingAccuracy?: number;
  totalCheckCount?: number;
  totalCheckTime?: number;
  totalCheckedCount?: number;
  totalItemCount?: number;
  totalMarkTime?: number;
  totalSampledCount?: number;
  totalSamplingCount?: number;
  totalSubtaskCount?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      acceptItemCount: 'AcceptItemCount',
      checkAbandon: 'CheckAbandon',
      checkAccuracy: 'CheckAccuracy',
      checkEfficiency: 'CheckEfficiency',
      checkedAccuracy: 'CheckedAccuracy',
      checkedError: 'CheckedError',
      checkedRejectCount: 'CheckedRejectCount',
      finalAbandonCount: 'FinalAbandonCount',
      finishedItemCount: 'FinishedItemCount',
      finishedSubtaskCount: 'FinishedSubtaskCount',
      markEfficiency: 'MarkEfficiency',
      preMarkFixedCount: 'PreMarkFixedCount',
      sampledAccuracy: 'SampledAccuracy',
      sampledErrorCount: 'SampledErrorCount',
      sampledRejectCount: 'SampledRejectCount',
      samplingAccuracy: 'SamplingAccuracy',
      totalCheckCount: 'TotalCheckCount',
      totalCheckTime: 'TotalCheckTime',
      totalCheckedCount: 'TotalCheckedCount',
      totalItemCount: 'TotalItemCount',
      totalMarkTime: 'TotalMarkTime',
      totalSampledCount: 'TotalSampledCount',
      totalSamplingCount: 'TotalSamplingCount',
      totalSubtaskCount: 'TotalSubtaskCount',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptItemCount: 'number',
      checkAbandon: 'number',
      checkAccuracy: 'number',
      checkEfficiency: 'number',
      checkedAccuracy: 'number',
      checkedError: 'number',
      checkedRejectCount: 'number',
      finalAbandonCount: 'number',
      finishedItemCount: 'number',
      finishedSubtaskCount: 'number',
      markEfficiency: 'number',
      preMarkFixedCount: 'number',
      sampledAccuracy: 'number',
      sampledErrorCount: 'number',
      sampledRejectCount: 'number',
      samplingAccuracy: 'number',
      totalCheckCount: 'number',
      totalCheckTime: 'number',
      totalCheckedCount: 'number',
      totalItemCount: 'number',
      totalMarkTime: 'number',
      totalSampledCount: 'number',
      totalSamplingCount: 'number',
      totalSubtaskCount: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskTemplateConfig extends $tea.Model {
  exif?: { [key: string]: string };
  resourceKey?: string;
  selectQuestions?: string[];
  templateOptionMap?: { [key: string]: TaskTemplateOptionConfig };
  templateRelationId?: string;
  static names(): { [key: string]: string } {
    return {
      exif: 'Exif',
      resourceKey: 'ResourceKey',
      selectQuestions: 'SelectQuestions',
      templateOptionMap: 'TemplateOptionMap',
      templateRelationId: 'TemplateRelationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exif: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      resourceKey: 'string',
      selectQuestions: { 'type': 'array', 'itemType': 'string' },
      templateOptionMap: { 'type': 'map', 'keyType': 'string', 'valueType': TaskTemplateOptionConfig },
      templateRelationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskTemplateOptionConfig extends $tea.Model {
  defaultResult?: string;
  options?: QuestionOption[];
  preOptions?: string[];
  rule?: string;
  static names(): { [key: string]: string } {
    return {
      defaultResult: 'DefaultResult',
      options: 'Options',
      preOptions: 'PreOptions',
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultResult: 'string',
      options: { 'type': 'array', 'itemType': QuestionOption },
      preOptions: { 'type': 'array', 'itemType': 'string' },
      rule: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateDTO extends $tea.Model {
  classify?: string;
  description?: string;
  exif?: { [key: string]: any };
  questionConfigs?: QuestionPlugin[];
  robotConfigs?: { [key: string]: any }[];
  sharedMode?: string;
  tags?: string[];
  templateId?: string;
  templateName?: string;
  viewConfigs?: TemplateDTOViewConfigs;
  static names(): { [key: string]: string } {
    return {
      classify: 'Classify',
      description: 'Description',
      exif: 'Exif',
      questionConfigs: 'QuestionConfigs',
      robotConfigs: 'RobotConfigs',
      sharedMode: 'SharedMode',
      tags: 'Tags',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      viewConfigs: 'ViewConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classify: 'string',
      description: 'string',
      exif: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      questionConfigs: { 'type': 'array', 'itemType': QuestionPlugin },
      robotConfigs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      sharedMode: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      templateId: 'string',
      templateName: 'string',
      viewConfigs: TemplateDTOViewConfigs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateDetail extends $tea.Model {
  abandonReasons?: string[];
  classify?: string;
  creator?: SimpleUser;
  description?: string;
  exif?: { [key: string]: any };
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  modifier?: SimpleUser;
  questionConfigs?: QuestionPlugin[];
  sharedMode?: string;
  status?: string;
  tags?: string[];
  templateId?: string;
  templateName?: string;
  tenantId?: string;
  type?: string;
  viewConfigs?: TemplateDetailViewConfigs;
  static names(): { [key: string]: string } {
    return {
      abandonReasons: 'AbandonReasons',
      classify: 'Classify',
      creator: 'Creator',
      description: 'Description',
      exif: 'Exif',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      modifier: 'Modifier',
      questionConfigs: 'QuestionConfigs',
      sharedMode: 'SharedMode',
      status: 'Status',
      tags: 'Tags',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      tenantId: 'TenantId',
      type: 'Type',
      viewConfigs: 'ViewConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonReasons: { 'type': 'array', 'itemType': 'string' },
      classify: 'string',
      creator: SimpleUser,
      description: 'string',
      exif: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      modifier: SimpleUser,
      questionConfigs: { 'type': 'array', 'itemType': QuestionPlugin },
      sharedMode: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      templateId: 'string',
      templateName: 'string',
      tenantId: 'string',
      type: 'string',
      viewConfigs: TemplateDetailViewConfigs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateQuestion extends $tea.Model {
  children?: TemplateQuestion[];
  exif?: { [key: string]: any };
  markTitle?: string;
  options?: QuestionOption[];
  preOptions?: string[];
  questionId?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      exif: 'Exif',
      markTitle: 'MarkTitle',
      options: 'Options',
      preOptions: 'PreOptions',
      questionId: 'QuestionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': TemplateQuestion },
      exif: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      markTitle: 'string',
      options: { 'type': 'array', 'itemType': QuestionOption },
      preOptions: { 'type': 'array', 'itemType': 'string' },
      questionId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateView extends $tea.Model {
  fields?: TemplateViewFields[];
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': TemplateViewFields },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskDTO extends $tea.Model {
  exif?: { [key: string]: string };
  remark?: string;
  tags?: string[];
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      exif: 'Exif',
      remark: 'Remark',
      tags: 'Tags',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exif: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      remark: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserStatistic extends $tea.Model {
  acceptedMarkItemsCount?: number;
  checkCount?: number;
  checkedAcceptedCount?: number;
  checkedAccuracy?: number;
  markEfficiency?: number;
  markTime?: number;
  samplingAccuracy?: number;
  samplingCount?: number;
  samplingErrorCount?: number;
  totalMarkItemsCount?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptedMarkItemsCount: 'AcceptedMarkItemsCount',
      checkCount: 'CheckCount',
      checkedAcceptedCount: 'CheckedAcceptedCount',
      checkedAccuracy: 'CheckedAccuracy',
      markEfficiency: 'MarkEfficiency',
      markTime: 'MarkTime',
      samplingAccuracy: 'SamplingAccuracy',
      samplingCount: 'SamplingCount',
      samplingErrorCount: 'SamplingErrorCount',
      totalMarkItemsCount: 'TotalMarkItemsCount',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptedMarkItemsCount: 'number',
      checkCount: 'number',
      checkedAcceptedCount: 'number',
      checkedAccuracy: 'number',
      markEfficiency: 'number',
      markTime: 'number',
      samplingAccuracy: 'number',
      samplingCount: 'number',
      samplingErrorCount: 'number',
      totalMarkItemsCount: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewPlugin extends $tea.Model {
  bindField?: string;
  convertor?: string;
  corsProxy?: boolean;
  displayOriImg?: boolean;
  exif?: { [key: string]: any };
  hide?: boolean;
  plugins?: { [key: string]: any };
  relationQuestionIds?: string[];
  type?: string;
  visitInfo?: ViewPluginVisitInfo;
  static names(): { [key: string]: string } {
    return {
      bindField: 'BindField',
      convertor: 'Convertor',
      corsProxy: 'CorsProxy',
      displayOriImg: 'DisplayOriImg',
      exif: 'Exif',
      hide: 'Hide',
      plugins: 'Plugins',
      relationQuestionIds: 'RelationQuestionIds',
      type: 'Type',
      visitInfo: 'VisitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindField: 'string',
      convertor: 'string',
      corsProxy: 'boolean',
      displayOriImg: 'boolean',
      exif: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      hide: 'boolean',
      plugins: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      relationQuestionIds: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
      visitInfo: ViewPluginVisitInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Workforce extends $tea.Model {
  nodeType?: string;
  users?: SimpleUser[];
  workNodeId?: number;
  static names(): { [key: string]: string } {
    return {
      nodeType: 'NodeType',
      users: 'Users',
      workNodeId: 'WorkNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeType: 'string',
      users: { 'type': 'array', 'itemType': SimpleUser },
      workNodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWorkNodeWorkforceRequest extends $tea.Model {
  userIds?: number[];
  static names(): { [key: string]: string } {
    return {
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWorkNodeWorkforceResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWorkNodeWorkforceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddWorkNodeWorkforceResponseBody;
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
      body: AddWorkNodeWorkforceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppendAllDataToTaskRequest extends $tea.Model {
  body?: OpenDatasetProxyAppendDataRequest;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: OpenDatasetProxyAppendDataRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppendAllDataToTaskResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppendAllDataToTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AppendAllDataToTaskResponseBody;
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
      body: AppendAllDataToTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequest extends $tea.Model {
  body?: CreateTaskDetail;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateTaskDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateRequest extends $tea.Model {
  body?: TemplateDTO;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: TemplateDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTemplateResponseBody;
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
      body: CreateTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequest extends $tea.Model {
  accountNo?: string;
  accountType?: string;
  role?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      accountType: 'AccountType',
      role: 'Role',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'string',
      accountType: 'string',
      role: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateUserResponseBody;
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
      body: CreateUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTaskResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTaskResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTemplateResponseBody;
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
      body: DeleteTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserResponseBody;
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
      body: DeleteUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportAnnotationsRequest extends $tea.Model {
  ossPath?: string;
  registerDataset?: string;
  target?: string;
  static names(): { [key: string]: string } {
    return {
      ossPath: 'OssPath',
      registerDataset: 'RegisterDataset',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossPath: 'string',
      registerDataset: 'string',
      target: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportAnnotationsResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  flowJob?: FlowJobInfo;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      flowJob: 'FlowJob',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      flowJob: FlowJobInfo,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportAnnotationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportAnnotationsResponseBody;
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
      body: ExportAnnotationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobRequest extends $tea.Model {
  jobType?: string;
  static names(): { [key: string]: string } {
    return {
      jobType: 'JobType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  job?: Job;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      job: 'Job',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      job: Job,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubtaskResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  subtask?: SimpleSubtask;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      subtask: 'Subtask',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      subtask: SimpleSubtask,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubtaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSubtaskResponseBody;
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
      body: GetSubtaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubtaskItemResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  item?: SubtaskItemDetail;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      item: 'Item',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      item: SubtaskItemDetail,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubtaskItemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSubtaskItemResponseBody;
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
      body: GetSubtaskItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  task?: TaskDetail;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      task: TaskDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatisticsRequest extends $tea.Model {
  statType?: string;
  static names(): { [key: string]: string } {
    return {
      statType: 'StatType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatisticsResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskStatistics?: TaskStatistic;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskStatistics: 'TaskStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskStatistics: TaskStatistic,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTaskStatisticsResponseBody;
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
      body: GetTaskStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTaskStatusResponseBody;
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
      body: GetTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskTemplateResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  template?: TemplateDetail;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      template: TemplateDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTaskTemplateResponseBody;
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
      body: GetTaskTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskTemplateQuestionsResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  questions?: QuestionPlugin[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      questions: 'Questions',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      questions: { 'type': 'array', 'itemType': QuestionPlugin },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskTemplateQuestionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTaskTemplateQuestionsResponseBody;
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
      body: GetTaskTemplateQuestionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskTemplateViewsResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  views?: GetTaskTemplateViewsResponseBodyViews;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      views: 'Views',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      views: GetTaskTemplateViewsResponseBodyViews,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskTemplateViewsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTaskTemplateViewsResponseBody;
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
      body: GetTaskTemplateViewsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskWorkforceResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  workforce?: Workforce[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      workforce: 'Workforce',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      workforce: { 'type': 'array', 'itemType': Workforce },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskWorkforceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTaskWorkforceResponseBody;
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
      body: GetTaskWorkforceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskWorkforceStatisticRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  statType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      statType: 'StatType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      statType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskWorkforceStatisticResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  totalPage?: number;
  usersStatistic?: UserStatistic[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
      usersStatistic: 'UsersStatistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      totalPage: 'number',
      usersStatistic: { 'type': 'array', 'itemType': UserStatistic },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskWorkforceStatisticResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTaskWorkforceStatisticResponseBody;
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
      body: GetTaskWorkforceStatisticResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  template?: TemplateDetail;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      template: TemplateDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTemplateResponseBody;
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
      body: GetTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateQuestionsResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  questionConfigs?: QuestionPlugin[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      questionConfigs: 'QuestionConfigs',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      questionConfigs: { 'type': 'array', 'itemType': QuestionPlugin },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateQuestionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTemplateQuestionsResponseBody;
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
      body: GetTemplateQuestionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateViewResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  viewConfigs?: GetTemplateViewResponseBodyViewConfigs;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      viewConfigs: 'ViewConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      viewConfigs: GetTemplateViewResponseBodyViewConfigs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateViewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTemplateViewResponseBody;
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
      body: GetTemplateViewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTenantResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  tenant?: SingleTenant;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tenant: 'Tenant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tenant: SingleTenant,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTenantResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTenantResponseBody;
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
      body: GetTenantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  user?: SimpleUser;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      user: SimpleUser,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserResponseBody;
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
      body: GetUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequest extends $tea.Model {
  jobType?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      jobType: 'JobType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  jobs?: Job[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      jobs: 'Jobs',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      jobs: { 'type': 'array', 'itemType': Job },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubtaskItemsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubtaskItemsResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  items?: SubtaskItemDetail[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      items: 'Items',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      items: { 'type': 'array', 'itemType': SubtaskItemDetail },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubtaskItemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSubtaskItemsResponseBody;
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
      body: ListSubtaskItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubtasksRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubtasksResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  subtasks?: SubtaskDetail[];
  success?: boolean;
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subtasks: 'Subtasks',
      success: 'Success',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subtasks: { 'type': 'array', 'itemType': SubtaskDetail },
      success: 'boolean',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubtasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSubtasksResponseBody;
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
      body: ListSubtasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  tasks?: SimpleTask[];
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      tasks: { 'type': 'array', 'itemType': SimpleTask },
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  searchKey?: string;
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      searchKey: 'string',
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesShrinkRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  searchKey?: string;
  typesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      typesShrink: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      searchKey: 'string',
      typesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  templates?: SimpleTemplate[];
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      templates: 'Templates',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      templates: { 'type': 'array', 'itemType': SimpleTemplate },
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTemplatesResponseBody;
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
      body: ListTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantsResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  tenants?: SimpleTenant[];
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      tenants: 'Tenants',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      tenants: { 'type': 'array', 'itemType': SimpleTenant },
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTenantsResponseBody;
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
      body: ListTenantsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  totalPage?: number;
  users?: SimpleUser[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      totalPage: 'number',
      users: { 'type': 'array', 'itemType': SimpleUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUsersResponseBody;
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
      body: ListUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveWorkNodeWorkforceRequest extends $tea.Model {
  userIds?: number[];
  static names(): { [key: string]: string } {
    return {
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveWorkNodeWorkforceResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveWorkNodeWorkforceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveWorkNodeWorkforceResponseBody;
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
      body: RemoveWorkNodeWorkforceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskRequest extends $tea.Model {
  body?: UpdateTaskDTO;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateTaskDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTaskResponseBody;
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
      body: UpdateTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskWorkforceRequest extends $tea.Model {
  workforce?: SimpleWorkforce[];
  static names(): { [key: string]: string } {
    return {
      workforce: 'Workforce',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workforce: { 'type': 'array', 'itemType': SimpleWorkforce },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskWorkforceResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskWorkforceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTaskWorkforceResponseBody;
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
      body: UpdateTaskWorkforceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateRequest extends $tea.Model {
  body?: TemplateDTO;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: TemplateDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTemplateResponseBody;
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
      body: UpdateTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTenantRequest extends $tea.Model {
  description?: string;
  tenantName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      tenantName: 'TenantName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      tenantName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTenantResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTenantResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTenantResponseBody;
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
      body: UpdateTenantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequest extends $tea.Model {
  role?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponseBody extends $tea.Model {
  code?: number;
  details?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserResponseBody;
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
      body: UpdateUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskDetailAdmins extends $tea.Model {
  users?: SimpleUser[];
  static names(): { [key: string]: string } {
    return {
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      users: { 'type': 'array', 'itemType': SimpleUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskDetailTaskWorkflow extends $tea.Model {
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobJobResult extends $tea.Model {
  resultLink?: string;
  static names(): { [key: string]: string } {
    return {
      resultLink: 'ResultLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultLink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimpleSubtaskItems extends $tea.Model {
  abandonFlag?: boolean;
  abandonRemark?: string;
  dataId?: string;
  feedbackFlag?: boolean;
  feedbackRemark?: string;
  fixedFlag?: boolean;
  itemId?: number;
  mine?: number;
  rejectFlag?: boolean;
  state?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      abandonFlag: 'AbandonFlag',
      abandonRemark: 'AbandonRemark',
      dataId: 'DataId',
      feedbackFlag: 'FeedbackFlag',
      feedbackRemark: 'FeedbackRemark',
      fixedFlag: 'FixedFlag',
      itemId: 'ItemId',
      mine: 'Mine',
      rejectFlag: 'RejectFlag',
      state: 'State',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonFlag: 'boolean',
      abandonRemark: 'string',
      dataId: 'string',
      feedbackFlag: 'boolean',
      feedbackRemark: 'string',
      fixedFlag: 'boolean',
      itemId: 'number',
      mine: 'number',
      rejectFlag: 'boolean',
      state: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubtaskDetailItems extends $tea.Model {
  abandonFlag?: boolean;
  abandonRemark?: string;
  dataId?: string;
  feedbackFlag?: boolean;
  feedbackRemark?: string;
  fixedFlag?: boolean;
  mine?: number;
  rejectFlag?: boolean;
  state?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      abandonFlag: 'AbandonFlag',
      abandonRemark: 'AbandonRemark',
      dataId: 'DataId',
      feedbackFlag: 'FeedbackFlag',
      feedbackRemark: 'FeedbackRemark',
      fixedFlag: 'FixedFlag',
      mine: 'Mine',
      rejectFlag: 'RejectFlag',
      state: 'State',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonFlag: 'boolean',
      abandonRemark: 'string',
      dataId: 'string',
      feedbackFlag: 'boolean',
      feedbackRemark: 'string',
      fixedFlag: 'boolean',
      mine: 'number',
      rejectFlag: 'boolean',
      state: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubtaskItemDetailAnnotations extends $tea.Model {
  abandonFlag?: boolean;
  abandonRemark?: string;
  dataId?: string;
  feedbackFlag?: boolean;
  feedbackRemark?: string;
  fixedFlag?: boolean;
  mine?: number;
  rejectFlag?: boolean;
  state?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      abandonFlag: 'AbandonFlag',
      abandonRemark: 'AbandonRemark',
      dataId: 'DataId',
      feedbackFlag: 'FeedbackFlag',
      feedbackRemark: 'FeedbackRemark',
      fixedFlag: 'FixedFlag',
      mine: 'Mine',
      rejectFlag: 'RejectFlag',
      state: 'State',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonFlag: 'boolean',
      abandonRemark: 'string',
      dataId: 'string',
      feedbackFlag: 'boolean',
      feedbackRemark: 'string',
      fixedFlag: 'boolean',
      mine: 'number',
      rejectFlag: 'boolean',
      state: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskDetailDatasetProxyRelations extends $tea.Model {
  datasetId?: string;
  datasetType?: string;
  exif?: { [key: string]: any };
  source?: string;
  sourceBizId?: string;
  sourceDatasetId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetType: 'DatasetType',
      exif: 'Exif',
      source: 'Source',
      sourceBizId: 'SourceBizId',
      sourceDatasetId: 'SourceDatasetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      datasetType: 'string',
      exif: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      source: 'string',
      sourceBizId: 'string',
      sourceDatasetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskDetailTaskTemplateConfig extends $tea.Model {
  exif?: { [key: string]: any };
  resourceKey?: string;
  robotConfig?: { [key: string]: any };
  selectQuestions?: string[];
  templateOptionMap?: { [key: string]: any };
  templateRelationId?: string;
  static names(): { [key: string]: string } {
    return {
      exif: 'Exif',
      resourceKey: 'ResourceKey',
      robotConfig: 'RobotConfig',
      selectQuestions: 'SelectQuestions',
      templateOptionMap: 'TemplateOptionMap',
      templateRelationId: 'TemplateRelationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exif: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceKey: 'string',
      robotConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      selectQuestions: { 'type': 'array', 'itemType': 'string' },
      templateOptionMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateRelationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskDetailTaskWorkflow extends $tea.Model {
  exif?: { [key: string]: any };
  groups?: string[];
  nodeName?: string;
  users?: SimpleUser[];
  static names(): { [key: string]: string } {
    return {
      exif: 'Exif',
      groups: 'Groups',
      nodeName: 'NodeName',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exif: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      groups: { 'type': 'array', 'itemType': 'string' },
      nodeName: 'string',
      users: { 'type': 'array', 'itemType': SimpleUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateDTOViewConfigs extends $tea.Model {
  viewPlugins?: ViewPlugin[];
  static names(): { [key: string]: string } {
    return {
      viewPlugins: 'ViewPlugins',
    };
  }

  static types(): { [key: string]: any } {
    return {
      viewPlugins: { 'type': 'array', 'itemType': ViewPlugin },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateDetailViewConfigs extends $tea.Model {
  viewPlugins?: ViewPlugin[];
  static names(): { [key: string]: string } {
    return {
      viewPlugins: 'ViewPlugins',
    };
  }

  static types(): { [key: string]: any } {
    return {
      viewPlugins: { 'type': 'array', 'itemType': ViewPlugin },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateViewFieldsVisitInfo extends $tea.Model {
  aftsConf?: { [key: string]: any };
  ossConf?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      aftsConf: 'AftsConf',
      ossConf: 'OssConf',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aftsConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ossConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateViewFields extends $tea.Model {
  displayOriImg?: boolean;
  fieldName?: string;
  type?: string;
  visitInfo?: TemplateViewFieldsVisitInfo;
  static names(): { [key: string]: string } {
    return {
      displayOriImg: 'DisplayOriImg',
      fieldName: 'FieldName',
      type: 'Type',
      visitInfo: 'VisitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayOriImg: 'boolean',
      fieldName: 'string',
      type: 'string',
      visitInfo: TemplateViewFieldsVisitInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewPluginVisitInfo extends $tea.Model {
  aftsConf?: { [key: string]: any };
  ossConf?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      aftsConf: 'aftsConf',
      ossConf: 'ossConf',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aftsConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ossConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskTemplateViewsResponseBodyViews extends $tea.Model {
  viewPlugins?: ViewPlugin[];
  static names(): { [key: string]: string } {
    return {
      viewPlugins: 'ViewPlugins',
    };
  }

  static types(): { [key: string]: any } {
    return {
      viewPlugins: { 'type': 'array', 'itemType': ViewPlugin },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateViewResponseBodyViewConfigs extends $tea.Model {
  viewPlugins?: ViewPlugin[];
  static names(): { [key: string]: string } {
    return {
      viewPlugins: 'ViewPlugins',
    };
  }

  static types(): { [key: string]: any } {
    return {
      viewPlugins: { 'type': 'array', 'itemType': ViewPlugin },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("openitag", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * @summary 增加结点任务人力
   *
   * @param request AddWorkNodeWorkforceRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return AddWorkNodeWorkforceResponse
   */
  async addWorkNodeWorkforceWithOptions(TenantId: string, TaskId: string, WorkNodeId: string, request: AddWorkNodeWorkforceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddWorkNodeWorkforceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userIds)) {
      body["UserIds"] = request.userIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddWorkNodeWorkforce",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/tasks/${OpenApiUtil.getEncodeParam(TaskId)}/worknodes/${OpenApiUtil.getEncodeParam(WorkNodeId)}/workforce`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddWorkNodeWorkforceResponse>(await this.callApi(params, req, runtime), new AddWorkNodeWorkforceResponse({}));
  }

  /**
   * @summary 增加结点任务人力
   *
   * @param request AddWorkNodeWorkforceRequest
   * @return AddWorkNodeWorkforceResponse
   */
  async addWorkNodeWorkforce(TenantId: string, TaskId: string, WorkNodeId: string, request: AddWorkNodeWorkforceRequest): Promise<AddWorkNodeWorkforceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addWorkNodeWorkforceWithOptions(TenantId, TaskId, WorkNodeId, request, headers, runtime);
  }

  /**
   * @summary 数据追加
   *
   * @param request AppendAllDataToTaskRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return AppendAllDataToTaskResponse
   */
  async appendAllDataToTaskWithOptions(TenantId: string, TaskId: string, request: AppendAllDataToTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AppendAllDataToTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "AppendAllDataToTask",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/tasks/${OpenApiUtil.getEncodeParam(TaskId)}/appendAllDataToTask`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AppendAllDataToTaskResponse>(await this.callApi(params, req, runtime), new AppendAllDataToTaskResponse({}));
  }

  /**
   * @summary 数据追加
   *
   * @param request AppendAllDataToTaskRequest
   * @return AppendAllDataToTaskResponse
   */
  async appendAllDataToTask(TenantId: string, TaskId: string, request: AppendAllDataToTaskRequest): Promise<AppendAllDataToTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.appendAllDataToTaskWithOptions(TenantId, TaskId, request, headers, runtime);
  }

  /**
   * @summary 创建标注任务
   *
   * @param request CreateTaskRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateTaskResponse
   */
  async createTaskWithOptions(TenantId: string, request: CreateTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTask",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/tasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateTaskResponse>(await this.callApi(params, req, runtime), new CreateTaskResponse({}));
  }

  /**
   * @summary 创建标注任务
   *
   * @param request CreateTaskRequest
   * @return CreateTaskResponse
   */
  async createTask(TenantId: string, request: CreateTaskRequest): Promise<CreateTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTaskWithOptions(TenantId, request, headers, runtime);
  }

  /**
   * @summary 创建标注模版
   *
   * @param request CreateTemplateRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateTemplateResponse
   */
  async createTemplateWithOptions(TenantId: string, request: CreateTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTemplate",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/templates`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateTemplateResponse>(await this.callApi(params, req, runtime), new CreateTemplateResponse({}));
  }

  /**
   * @summary 创建标注模版
   *
   * @param request CreateTemplateRequest
   * @return CreateTemplateResponse
   */
  async createTemplate(TenantId: string, request: CreateTemplateRequest): Promise<CreateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTemplateWithOptions(TenantId, request, headers, runtime);
  }

  /**
   * @summary 创建租户内用户
   *
   * @param request CreateUserRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateUserResponse
   */
  async createUserWithOptions(TenantId: string, request: CreateUserRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!Util.isUnset(request.accountType)) {
      body["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.role)) {
      body["Role"] = request.role;
    }

    if (!Util.isUnset(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateUser",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/users`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateUserResponse>(await this.callApi(params, req, runtime), new CreateUserResponse({}));
  }

  /**
   * @summary 创建租户内用户
   *
   * @param request CreateUserRequest
   * @return CreateUserResponse
   */
  async createUser(TenantId: string, request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createUserWithOptions(TenantId, request, headers, runtime);
  }

  /**
   * @summary 删除任务
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteTaskResponse
   */
  async deleteTaskWithOptions(TenantId: string, TaskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteTask",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/tasks/${OpenApiUtil.getEncodeParam(TaskId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteTaskResponse>(await this.callApi(params, req, runtime), new DeleteTaskResponse({}));
  }

  /**
   * @summary 删除任务
   *
   * @return DeleteTaskResponse
   */
  async deleteTask(TenantId: string, TaskId: string): Promise<DeleteTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTaskWithOptions(TenantId, TaskId, headers, runtime);
  }

  /**
   * @summary 删除租户下的单个模板
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteTemplateResponse
   */
  async deleteTemplateWithOptions(TenantId: string, TemplateId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteTemplateResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteTemplate",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/templates/${OpenApiUtil.getEncodeParam(TemplateId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteTemplateResponse>(await this.callApi(params, req, runtime), new DeleteTemplateResponse({}));
  }

  /**
   * @summary 删除租户下的单个模板
   *
   * @return DeleteTemplateResponse
   */
  async deleteTemplate(TenantId: string, TemplateId: string): Promise<DeleteTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTemplateWithOptions(TenantId, TemplateId, headers, runtime);
  }

  /**
   * @summary 删除用户
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteUserResponse
   */
  async deleteUserWithOptions(TenantId: string, UserId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteUser",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/users/${OpenApiUtil.getEncodeParam(UserId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserResponse>(await this.callApi(params, req, runtime), new DeleteUserResponse({}));
  }

  /**
   * @summary 删除用户
   *
   * @return DeleteUserResponse
   */
  async deleteUser(TenantId: string, UserId: string): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteUserWithOptions(TenantId, UserId, headers, runtime);
  }

  /**
   * @summary 获取任务导出结果
   *
   * @param request ExportAnnotationsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ExportAnnotationsResponse
   */
  async exportAnnotationsWithOptions(TenantId: string, TaskId: string, request: ExportAnnotationsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ExportAnnotationsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ossPath)) {
      query["OssPath"] = request.ossPath;
    }

    if (!Util.isUnset(request.registerDataset)) {
      query["RegisterDataset"] = request.registerDataset;
    }

    if (!Util.isUnset(request.target)) {
      query["Target"] = request.target;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportAnnotations",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/tasks/${OpenApiUtil.getEncodeParam(TaskId)}/annotations/export`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ExportAnnotationsResponse>(await this.callApi(params, req, runtime), new ExportAnnotationsResponse({}));
  }

  /**
   * @summary 获取任务导出结果
   *
   * @param request ExportAnnotationsRequest
   * @return ExportAnnotationsResponse
   */
  async exportAnnotations(TenantId: string, TaskId: string, request: ExportAnnotationsRequest): Promise<ExportAnnotationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.exportAnnotationsWithOptions(TenantId, TaskId, request, headers, runtime);
  }

  /**
   * @summary 获取异步任务Job
   *
   * @param request GetJobRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetJobResponse
   */
  async getJobWithOptions(TenantId: string, JobId: string, request: GetJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetJobResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetJob",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/jobs/${OpenApiUtil.getEncodeParam(JobId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetJobResponse>(await this.callApi(params, req, runtime), new GetJobResponse({}));
  }

  /**
   * @summary 获取异步任务Job
   *
   * @param request GetJobRequest
   * @return GetJobResponse
   */
  async getJob(TenantId: string, JobId: string, request: GetJobRequest): Promise<GetJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobWithOptions(TenantId, JobId, request, headers, runtime);
  }

  /**
   * @summary 获取单个子任务信息
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetSubtaskResponse
   */
  async getSubtaskWithOptions(TenantId: string, TaskID: string, SubtaskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSubtaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetSubtask",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/tasks/${OpenApiUtil.getEncodeParam(TaskID)}/subtasks/${OpenApiUtil.getEncodeParam(SubtaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSubtaskResponse>(await this.callApi(params, req, runtime), new GetSubtaskResponse({}));
  }

  /**
   * @summary 获取单个子任务信息
   *
   * @return GetSubtaskResponse
   */
  async getSubtask(TenantId: string, TaskID: string, SubtaskId: string): Promise<GetSubtaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSubtaskWithOptions(TenantId, TaskID, SubtaskId, headers, runtime);
  }

  /**
   * @summary 获取子任务单个ITEM信息
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetSubtaskItemResponse
   */
  async getSubtaskItemWithOptions(TenantId: string, TaskId: string, SubtaskId: string, ItemId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSubtaskItemResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetSubtaskItem",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/tasks/${OpenApiUtil.getEncodeParam(TaskId)}/subtasks/${OpenApiUtil.getEncodeParam(SubtaskId)}/items/${OpenApiUtil.getEncodeParam(ItemId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSubtaskItemResponse>(await this.callApi(params, req, runtime), new GetSubtaskItemResponse({}));
  }

  /**
   * @summary 获取子任务单个ITEM信息
   *
   * @return GetSubtaskItemResponse
   */
  async getSubtaskItem(TenantId: string, TaskId: string, SubtaskId: string, ItemId: string): Promise<GetSubtaskItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSubtaskItemWithOptions(TenantId, TaskId, SubtaskId, ItemId, headers, runtime);
  }

  /**
   * @summary 获取任务状态信息
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTaskResponse
   */
  async getTaskWithOptions(TenantId: string, TaskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTask",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/tasks/${OpenApiUtil.getEncodeParam(TaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTaskResponse>(await this.callApi(params, req, runtime), new GetTaskResponse({}));
  }

  /**
   * @summary 获取任务状态信息
   *
   * @return GetTaskResponse
   */
  async getTask(TenantId: string, TaskId: string): Promise<GetTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskWithOptions(TenantId, TaskId, headers, runtime);
  }

  /**
   * @summary 获取任务统计信息
   *
   * @param request GetTaskStatisticsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTaskStatisticsResponse
   */
  async getTaskStatisticsWithOptions(TenantId: string, TaskId: string, request: GetTaskStatisticsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTaskStatisticsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.statType)) {
      query["StatType"] = request.statType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTaskStatistics",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/tasks/${OpenApiUtil.getEncodeParam(TaskId)}/statistics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTaskStatisticsResponse>(await this.callApi(params, req, runtime), new GetTaskStatisticsResponse({}));
  }

  /**
   * @summary 获取任务统计信息
   *
   * @param request GetTaskStatisticsRequest
   * @return GetTaskStatisticsResponse
   */
  async getTaskStatistics(TenantId: string, TaskId: string, request: GetTaskStatisticsRequest): Promise<GetTaskStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskStatisticsWithOptions(TenantId, TaskId, request, headers, runtime);
  }

  /**
   * @summary 获取任务状态信息
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTaskStatusResponse
   */
  async getTaskStatusWithOptions(TenantId: string, TaskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTaskStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTaskStatus",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/tasks/${OpenApiUtil.getEncodeParam(TaskId)}/status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTaskStatusResponse>(await this.callApi(params, req, runtime), new GetTaskStatusResponse({}));
  }

  /**
   * @summary 获取任务状态信息
   *
   * @return GetTaskStatusResponse
   */
  async getTaskStatus(TenantId: string, TaskId: string): Promise<GetTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskStatusWithOptions(TenantId, TaskId, headers, runtime);
  }

  /**
   * @summary 获取任务模版信息
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTaskTemplateResponse
   */
  async getTaskTemplateWithOptions(TenantId: string, TaskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTaskTemplateResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTaskTemplate",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/tasks/${OpenApiUtil.getEncodeParam(TaskId)}/template`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTaskTemplateResponse>(await this.callApi(params, req, runtime), new GetTaskTemplateResponse({}));
  }

  /**
   * @summary 获取任务模版信息
   *
   * @return GetTaskTemplateResponse
   */
  async getTaskTemplate(TenantId: string, TaskId: string): Promise<GetTaskTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskTemplateWithOptions(TenantId, TaskId, headers, runtime);
  }

  /**
   * @summary 获取任务题目信息
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTaskTemplateQuestionsResponse
   */
  async getTaskTemplateQuestionsWithOptions(TenantId: string, TaskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTaskTemplateQuestionsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTaskTemplateQuestions",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/tasks/${OpenApiUtil.getEncodeParam(TaskId)}/template/questions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTaskTemplateQuestionsResponse>(await this.callApi(params, req, runtime), new GetTaskTemplateQuestionsResponse({}));
  }

  /**
   * @summary 获取任务题目信息
   *
   * @return GetTaskTemplateQuestionsResponse
   */
  async getTaskTemplateQuestions(TenantId: string, TaskId: string): Promise<GetTaskTemplateQuestionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskTemplateQuestionsWithOptions(TenantId, TaskId, headers, runtime);
  }

  /**
   * @summary 获取任务题目信息
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTaskTemplateViewsResponse
   */
  async getTaskTemplateViewsWithOptions(TenantId: string, TaskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTaskTemplateViewsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTaskTemplateViews",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/tasks/${OpenApiUtil.getEncodeParam(TaskId)}/template/views`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTaskTemplateViewsResponse>(await this.callApi(params, req, runtime), new GetTaskTemplateViewsResponse({}));
  }

  /**
   * @summary 获取任务题目信息
   *
   * @return GetTaskTemplateViewsResponse
   */
  async getTaskTemplateViews(TenantId: string, TaskId: string): Promise<GetTaskTemplateViewsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskTemplateViewsWithOptions(TenantId, TaskId, headers, runtime);
  }

  /**
   * @summary 获取任务人力
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTaskWorkforceResponse
   */
  async getTaskWorkforceWithOptions(TenantId: string, TaskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTaskWorkforceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTaskWorkforce",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/tasks/${OpenApiUtil.getEncodeParam(TaskId)}/workforce`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTaskWorkforceResponse>(await this.callApi(params, req, runtime), new GetTaskWorkforceResponse({}));
  }

  /**
   * @summary 获取任务人力
   *
   * @return GetTaskWorkforceResponse
   */
  async getTaskWorkforce(TenantId: string, TaskId: string): Promise<GetTaskWorkforceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskWorkforceWithOptions(TenantId, TaskId, headers, runtime);
  }

  /**
   * @summary 获取任务人力统计信息
   *
   * @param request GetTaskWorkforceStatisticRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTaskWorkforceStatisticResponse
   */
  async getTaskWorkforceStatisticWithOptions(TenantId: string, TaskId: string, request: GetTaskWorkforceStatisticRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTaskWorkforceStatisticResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.statType)) {
      query["StatType"] = request.statType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTaskWorkforceStatistic",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/tasks/${OpenApiUtil.getEncodeParam(TaskId)}/workforce/statistic`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTaskWorkforceStatisticResponse>(await this.callApi(params, req, runtime), new GetTaskWorkforceStatisticResponse({}));
  }

  /**
   * @summary 获取任务人力统计信息
   *
   * @param request GetTaskWorkforceStatisticRequest
   * @return GetTaskWorkforceStatisticResponse
   */
  async getTaskWorkforceStatistic(TenantId: string, TaskId: string, request: GetTaskWorkforceStatisticRequest): Promise<GetTaskWorkforceStatisticResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskWorkforceStatisticWithOptions(TenantId, TaskId, request, headers, runtime);
  }

  /**
   * @summary 获取租户下单个模板
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTemplateResponse
   */
  async getTemplateWithOptions(TenantId: string, TemplateId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTemplateResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTemplate",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/templates/${OpenApiUtil.getEncodeParam(TemplateId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTemplateResponse>(await this.callApi(params, req, runtime), new GetTemplateResponse({}));
  }

  /**
   * @summary 获取租户下单个模板
   *
   * @return GetTemplateResponse
   */
  async getTemplate(TenantId: string, TemplateId: string): Promise<GetTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTemplateWithOptions(TenantId, TemplateId, headers, runtime);
  }

  /**
   * @summary 获取租户下单个模板问题
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTemplateQuestionsResponse
   */
  async getTemplateQuestionsWithOptions(TenantId: string, TemplateId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTemplateQuestionsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTemplateQuestions",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/templates/${OpenApiUtil.getEncodeParam(TemplateId)}/questions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTemplateQuestionsResponse>(await this.callApi(params, req, runtime), new GetTemplateQuestionsResponse({}));
  }

  /**
   * @summary 获取租户下单个模板问题
   *
   * @return GetTemplateQuestionsResponse
   */
  async getTemplateQuestions(TenantId: string, TemplateId: string): Promise<GetTemplateQuestionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTemplateQuestionsWithOptions(TenantId, TemplateId, headers, runtime);
  }

  /**
   * @summary 获取租户下模板视图
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTemplateViewResponse
   */
  async getTemplateViewWithOptions(TenantId: string, TemplateId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTemplateViewResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTemplateView",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/templates/${OpenApiUtil.getEncodeParam(TemplateId)}/views`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTemplateViewResponse>(await this.callApi(params, req, runtime), new GetTemplateViewResponse({}));
  }

  /**
   * @summary 获取租户下模板视图
   *
   * @return GetTemplateViewResponse
   */
  async getTemplateView(TenantId: string, TemplateId: string): Promise<GetTemplateViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTemplateViewWithOptions(TenantId, TemplateId, headers, runtime);
  }

  /**
   * @summary 获取租户信息
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTenantResponse
   */
  async getTenantWithOptions(TenantId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTenantResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTenant",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTenantResponse>(await this.callApi(params, req, runtime), new GetTenantResponse({}));
  }

  /**
   * @summary 获取租户信息
   *
   * @return GetTenantResponse
   */
  async getTenant(TenantId: string): Promise<GetTenantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTenantWithOptions(TenantId, headers, runtime);
  }

  /**
   * @summary 获取用户
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetUserResponse
   */
  async getUserWithOptions(TenantId: string, UserId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetUserResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetUser",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/users/${OpenApiUtil.getEncodeParam(UserId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetUserResponse>(await this.callApi(params, req, runtime), new GetUserResponse({}));
  }

  /**
   * @summary 获取用户
   *
   * @return GetUserResponse
   */
  async getUser(TenantId: string, UserId: string): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserWithOptions(TenantId, UserId, headers, runtime);
  }

  /**
   * @summary 获取异步任务Job列表
   *
   * @param request ListJobsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListJobsResponse
   */
  async listJobsWithOptions(TenantId: string, request: ListJobsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListJobsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListJobs",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/jobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListJobsResponse>(await this.callApi(params, req, runtime), new ListJobsResponse({}));
  }

  /**
   * @summary 获取异步任务Job列表
   *
   * @param request ListJobsRequest
   * @return ListJobsResponse
   */
  async listJobs(TenantId: string, request: ListJobsRequest): Promise<ListJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobsWithOptions(TenantId, request, headers, runtime);
  }

  /**
   * @summary 获取子任务ITEM列表页信息
   *
   * @param request ListSubtaskItemsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListSubtaskItemsResponse
   */
  async listSubtaskItemsWithOptions(TenantId: string, TaskID: string, SubtaskId: string, request: ListSubtaskItemsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSubtaskItemsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSubtaskItems",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/tasks/${OpenApiUtil.getEncodeParam(TaskID)}/subtasks/${OpenApiUtil.getEncodeParam(SubtaskId)}/items`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSubtaskItemsResponse>(await this.callApi(params, req, runtime), new ListSubtaskItemsResponse({}));
  }

  /**
   * @summary 获取子任务ITEM列表页信息
   *
   * @param request ListSubtaskItemsRequest
   * @return ListSubtaskItemsResponse
   */
  async listSubtaskItems(TenantId: string, TaskID: string, SubtaskId: string, request: ListSubtaskItemsRequest): Promise<ListSubtaskItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSubtaskItemsWithOptions(TenantId, TaskID, SubtaskId, request, headers, runtime);
  }

  /**
   * @summary 获取子任务列表页信息
   *
   * @param request ListSubtasksRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListSubtasksResponse
   */
  async listSubtasksWithOptions(TenantId: string, TaskID: string, request: ListSubtasksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSubtasksResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSubtasks",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/tasks/${OpenApiUtil.getEncodeParam(TaskID)}/subtasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSubtasksResponse>(await this.callApi(params, req, runtime), new ListSubtasksResponse({}));
  }

  /**
   * @summary 获取子任务列表页信息
   *
   * @param request ListSubtasksRequest
   * @return ListSubtasksResponse
   */
  async listSubtasks(TenantId: string, TaskID: string, request: ListSubtasksRequest): Promise<ListSubtasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSubtasksWithOptions(TenantId, TaskID, request, headers, runtime);
  }

  /**
   * @summary 获取任务列表页信息
   *
   * @param request ListTasksRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTasksResponse
   */
  async listTasksWithOptions(TenantId: string, request: ListTasksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTasksResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTasks",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTasksResponse>(await this.callApi(params, req, runtime), new ListTasksResponse({}));
  }

  /**
   * @summary 获取任务列表页信息
   *
   * @param request ListTasksRequest
   * @return ListTasksResponse
   */
  async listTasks(TenantId: string, request: ListTasksRequest): Promise<ListTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTasksWithOptions(TenantId, request, headers, runtime);
  }

  /**
   * @summary 获取租户模板信息列表
   *
   * @param tmpReq ListTemplatesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTemplatesResponse
   */
  async listTemplatesWithOptions(TenantId: string, tmpReq: ListTemplatesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTemplatesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListTemplatesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.types)) {
      request.typesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.types, "Types", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!Util.isUnset(request.typesShrink)) {
      query["Types"] = request.typesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTemplates",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/templates`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTemplatesResponse>(await this.callApi(params, req, runtime), new ListTemplatesResponse({}));
  }

  /**
   * @summary 获取租户模板信息列表
   *
   * @param request ListTemplatesRequest
   * @return ListTemplatesResponse
   */
  async listTemplates(TenantId: string, request: ListTemplatesRequest): Promise<ListTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTemplatesWithOptions(TenantId, request, headers, runtime);
  }

  /**
   * @summary 获取租户列表
   *
   * @param request ListTenantsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTenantsResponse
   */
  async listTenantsWithOptions(request: ListTenantsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTenantsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTenants",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTenantsResponse>(await this.callApi(params, req, runtime), new ListTenantsResponse({}));
  }

  /**
   * @summary 获取租户列表
   *
   * @param request ListTenantsRequest
   * @return ListTenantsResponse
   */
  async listTenants(request: ListTenantsRequest): Promise<ListTenantsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTenantsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取用户列表
   *
   * @param request ListUsersRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListUsersResponse
   */
  async listUsersWithOptions(TenantId: string, request: ListUsersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUsers",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/users`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListUsersResponse>(await this.callApi(params, req, runtime), new ListUsersResponse({}));
  }

  /**
   * @summary 获取用户列表
   *
   * @param request ListUsersRequest
   * @return ListUsersResponse
   */
  async listUsers(TenantId: string, request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUsersWithOptions(TenantId, request, headers, runtime);
  }

  /**
   * @summary 删除结点人力
   *
   * @param request RemoveWorkNodeWorkforceRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RemoveWorkNodeWorkforceResponse
   */
  async removeWorkNodeWorkforceWithOptions(TenantId: string, TaskId: string, WorkNodeId: string, request: RemoveWorkNodeWorkforceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveWorkNodeWorkforceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userIds)) {
      body["UserIds"] = request.userIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveWorkNodeWorkforce",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/tasks/${OpenApiUtil.getEncodeParam(TaskId)}/worknodes/${OpenApiUtil.getEncodeParam(WorkNodeId)}/workforce`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RemoveWorkNodeWorkforceResponse>(await this.callApi(params, req, runtime), new RemoveWorkNodeWorkforceResponse({}));
  }

  /**
   * @summary 删除结点人力
   *
   * @param request RemoveWorkNodeWorkforceRequest
   * @return RemoveWorkNodeWorkforceResponse
   */
  async removeWorkNodeWorkforce(TenantId: string, TaskId: string, WorkNodeId: string, request: RemoveWorkNodeWorkforceRequest): Promise<RemoveWorkNodeWorkforceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeWorkNodeWorkforceWithOptions(TenantId, TaskId, WorkNodeId, request, headers, runtime);
  }

  /**
   * @summary 更新标注任务基础信息
   *
   * @param request UpdateTaskRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateTaskResponse
   */
  async updateTaskWithOptions(TenantId: string, TaskId: string, request: UpdateTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTask",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/tasks/${OpenApiUtil.getEncodeParam(TaskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateTaskResponse>(await this.callApi(params, req, runtime), new UpdateTaskResponse({}));
  }

  /**
   * @summary 更新标注任务基础信息
   *
   * @param request UpdateTaskRequest
   * @return UpdateTaskResponse
   */
  async updateTask(TenantId: string, TaskId: string, request: UpdateTaskRequest): Promise<UpdateTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTaskWithOptions(TenantId, TaskId, request, headers, runtime);
  }

  /**
   * @summary 更新任务人力
   *
   * @param request UpdateTaskWorkforceRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateTaskWorkforceResponse
   */
  async updateTaskWorkforceWithOptions(TenantId: string, TaskId: string, request: UpdateTaskWorkforceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateTaskWorkforceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workforce)) {
      body["Workforce"] = request.workforce;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTaskWorkforce",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/tasks/${OpenApiUtil.getEncodeParam(TaskId)}/workforce`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateTaskWorkforceResponse>(await this.callApi(params, req, runtime), new UpdateTaskWorkforceResponse({}));
  }

  /**
   * @summary 更新任务人力
   *
   * @param request UpdateTaskWorkforceRequest
   * @return UpdateTaskWorkforceResponse
   */
  async updateTaskWorkforce(TenantId: string, TaskId: string, request: UpdateTaskWorkforceRequest): Promise<UpdateTaskWorkforceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTaskWorkforceWithOptions(TenantId, TaskId, request, headers, runtime);
  }

  /**
   * @summary 更新标注模版
   *
   * @param request UpdateTemplateRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateTemplateResponse
   */
  async updateTemplateWithOptions(TenantId: string, TemplateId: string, request: UpdateTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTemplate",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/templates/${OpenApiUtil.getEncodeParam(TemplateId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateTemplateResponse>(await this.callApi(params, req, runtime), new UpdateTemplateResponse({}));
  }

  /**
   * @summary 更新标注模版
   *
   * @param request UpdateTemplateRequest
   * @return UpdateTemplateResponse
   */
  async updateTemplate(TenantId: string, TemplateId: string, request: UpdateTemplateRequest): Promise<UpdateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTemplateWithOptions(TenantId, TemplateId, request, headers, runtime);
  }

  /**
   * @summary 更新租户信息
   *
   * @param request UpdateTenantRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateTenantResponse
   */
  async updateTenantWithOptions(TenantId: string, request: UpdateTenantRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateTenantResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.tenantName)) {
      body["TenantName"] = request.tenantName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTenant",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateTenantResponse>(await this.callApi(params, req, runtime), new UpdateTenantResponse({}));
  }

  /**
   * @summary 更新租户信息
   *
   * @param request UpdateTenantRequest
   * @return UpdateTenantResponse
   */
  async updateTenant(TenantId: string, request: UpdateTenantRequest): Promise<UpdateTenantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTenantWithOptions(TenantId, request, headers, runtime);
  }

  /**
   * @summary 更新用户信息
   *
   * @param request UpdateUserRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateUserResponse
   */
  async updateUserWithOptions(TenantId: string, UserId: string, request: UpdateUserRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.role)) {
      body["Role"] = request.role;
    }

    if (!Util.isUnset(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUser",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${OpenApiUtil.getEncodeParam(TenantId)}/users/${OpenApiUtil.getEncodeParam(UserId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserResponse>(await this.callApi(params, req, runtime), new UpdateUserResponse({}));
  }

  /**
   * @summary 更新用户信息
   *
   * @param request UpdateUserRequest
   * @return UpdateUserResponse
   */
  async updateUser(TenantId: string, UserId: string, request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateUserWithOptions(TenantId, UserId, request, headers, runtime);
  }

}
