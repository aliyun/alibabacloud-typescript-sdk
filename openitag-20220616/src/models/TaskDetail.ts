// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SimpleUser } from "./SimpleUser";


export class TaskDetailDatasetProxyRelations extends $dara.Model {
  /**
   * @remarks
   * Dataset ID.
   * 
   * @example
   * 102***124
   */
  datasetId?: string;
  /**
   * @remarks
   * Dataset type.
   * 
   * @example
   * LABEL
   */
  datasetType?: string;
  /**
   * @remarks
   * Additional information.
   * 
   * @example
   * false
   */
  exif?: { [key: string]: any };
  /**
   * @remarks
   * Dataset source.
   * 
   * @example
   * PAI
   */
  source?: string;
  /**
   * @remarks
   * Source business ID.
   * 
   * @example
   * d-24eyimdzdn4a98jktk
   */
  sourceBizId?: string;
  /**
   * @remarks
   * Source dataset ID.
   * 
   * @example
   * 2312124
   */
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

  validate() {
    if(this.exif) {
      $dara.Model.validateMap(this.exif);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskDetailTaskTemplateConfig extends $dara.Model {
  /**
   * @remarks
   * Additional information for template configuration.
   * 
   * @example
   * false
   */
  exif?: { [key: string]: any };
  /**
   * @remarks
   * Resource key.
   * 
   * @example
   * picture1
   */
  resourceKey?: string;
  /**
   * @remarks
   * Robot configuration.
   * 
   * @example
   * null
   */
  robotConfig?: { [key: string]: any };
  /**
   * @remarks
   * If the number of questions in the Job is less than that in the template, you can select the required questions from the List.
   */
  selectQuestions?: string[];
  /**
   * @remarks
   * Options configuration.
   * 
   * @example
   * {"1":[{"label":"label1","key":"label1"}]}
   */
  templateOptionMap?: { [key: string]: any };
  /**
   * @remarks
   * Template relation ID.
   * 
   * @example
   * 200
   */
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

  validate() {
    if(this.exif) {
      $dara.Model.validateMap(this.exif);
    }
    if(this.robotConfig) {
      $dara.Model.validateMap(this.robotConfig);
    }
    if(Array.isArray(this.selectQuestions)) {
      $dara.Model.validateArray(this.selectQuestions);
    }
    if(this.templateOptionMap) {
      $dara.Model.validateMap(this.templateOptionMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskDetailTaskWorkflow extends $dara.Model {
  /**
   * @remarks
   * Extra information.
   * 
   * @example
   * false
   */
  exif?: { [key: string]: any };
  /**
   * @remarks
   * Group list.
   */
  groups?: string[];
  /**
   * @remarks
   * Edge zone name. Possible values:  
   * - MARK  
   * - CHECK  
   * - SAMPLING
   * 
   * @example
   * MARK
   */
  nodeName?: string;
  /**
   * @remarks
   * User List.
   */
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

  validate() {
    if(this.exif) {
      $dara.Model.validateMap(this.exif);
    }
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskDetail extends $dara.Model {
  /**
   * @remarks
   * List of job administrators.
   */
  admins?: SimpleUser[];
  /**
   * @remarks
   * Alert time.
   * 
   * @example
   * 12412312
   */
  alertTime?: number;
  /**
   * @remarks
   * Indicates whether data appending is allowed.
   * 
   * @example
   * true
   */
  allowAppendData?: boolean;
  /**
   * @remarks
   * Indicates whether the job has been archived.
   * 
   * @example
   * false
   */
  archived?: boolean;
  /**
   * @remarks
   * Data archiving information.
   * 
   * @example
   * null
   * 
   * **if can be null:**
   * true
   */
  archivedInfos?: string;
  /**
   * @remarks
   * Job assignment configuration.
   * 
   * @example
   * null
   */
  assignConfig?: { [key: string]: any };
  /**
   * @remarks
   * Creator information.
   */
  creator?: SimpleUser;
  /**
   * @remarks
   * List of Data proxy relationships.
   */
  datasetProxyRelations?: TaskDetailDatasetProxyRelations[];
  /**
   * @remarks
   * Additional configuration.
   * 
   * @example
   * null
   */
  exif?: { [key: string]: any };
  /**
   * @remarks
   * Creation UTC time.
   * 
   * @example
   * 2022-07-04 11:42:57
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * UTC time of the last modification.
   * 
   * @example
   * 2022-08-16 18:38:42
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * Annotation style.
   * 
   * @example
   * null
   */
  labelStyle?: string;
  /**
   * @remarks
   * My configuration.
   * 
   * @example
   * null
   */
  mineConfigs?: { [key: string]: any };
  /**
   * @remarks
   * Updated By information.
   */
  modifier?: SimpleUser;
  /**
   * @remarks
   * Notice configuration.
   * 
   * @example
   * {"DingHook":"","ListenActions":[],"SubTaskAlertGap":""}
   */
  noticeConfig?: { [key: string]: any };
  /**
   * @remarks
   * Time configuration.
   * 
   * @example
   * {"periodConfigId":"","status":""}
   */
  periodConfig?: { [key: string]: any };
  /**
   * @remarks
   * Auto triggered task ID.
   * 
   * @example
   * 12312414
   */
  refTaskId?: string;
  /**
   * @remarks
   * Related job configuration.
   * 
   * @example
   * null
   */
  relateTaskConfig?: { [key: string]: any };
  /**
   * @remarks
   * Remark information.
   * 
   * @example
   * demo
   * 
   * **if can be null:**
   * true
   */
  remark?: string;
  /**
   * @remarks
   * Result callback configuration.
   * 
   * @example
   * {"RetMsgMode":"","Exif":{}}
   */
  resultCallbackConfig?: { [key: string]: any };
  /**
   * @remarks
   * Current edge zone. Possible values:
   * - MARK: Annotating.
   * - CHECK: Checking.
   * - SAMPLING: Validating.
   * 
   * @example
   * MARK
   */
  stage?: string;
  /**
   * @remarks
   * Task Status. Possible values:
   * - CREATED
   * - SUCCESS
   * 
   * @example
   * CREATED
   */
  status?: string;
  /**
   * @remarks
   * List of job tags.
   * 
   * **if can be null:**
   * true
   */
  tags?: string[];
  /**
   * @remarks
   * Job ID.
   * 
   * @example
   * 15438***8306500608
   */
  taskId?: string;
  /**
   * @remarks
   * Task Name.
   * 
   * @example
   * 测试任务
   */
  taskName?: string;
  /**
   * @remarks
   * Supplementary configuration for the Job template.
   */
  taskTemplateConfig?: TaskDetailTaskTemplateConfig;
  /**
   * @remarks
   * Task Type.
   * 
   * @example
   * NORMAL
   */
  taskType?: string;
  /**
   * @remarks
   * List of job stream configurations.
   */
  taskWorkflow?: TaskDetailTaskWorkflow[];
  /**
   * @remarks
   * Template ID.
   * 
   * @example
   * 1529***348342353920
   * 
   * **if can be null:**
   * true
   */
  templateId?: string;
  /**
   * @remarks
   * Tenant ID.
   * 
   * @example
   * GA***W134
   */
  tenantId?: string;
  /**
   * @remarks
   * Tenant name.
   * 
   * @example
   * 测试任务202208101424
   */
  tenantName?: string;
  /**
   * @remarks
   * UUID.
   * 
   * @example
   * paiworkspace-0001
   */
  UUID?: string;
  /**
   * @remarks
   * Voting configuration.
   * 
   * @example
   * {"1":{"VoteNum":1,"MinVote":1}}
   */
  voteConfigs?: { [key: string]: any };
  /**
   * @remarks
   * List of pipeline nodes.
   */
  workflowNodes?: string[];
  /**
   * @remarks
   * Run message.
   * 
   * @example
   * xxxxx
   */
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

  validate() {
    if(Array.isArray(this.admins)) {
      $dara.Model.validateArray(this.admins);
    }
    if(this.assignConfig) {
      $dara.Model.validateMap(this.assignConfig);
    }
    if(this.creator && typeof (this.creator as any).validate === 'function') {
      (this.creator as any).validate();
    }
    if(Array.isArray(this.datasetProxyRelations)) {
      $dara.Model.validateArray(this.datasetProxyRelations);
    }
    if(this.exif) {
      $dara.Model.validateMap(this.exif);
    }
    if(this.mineConfigs) {
      $dara.Model.validateMap(this.mineConfigs);
    }
    if(this.modifier && typeof (this.modifier as any).validate === 'function') {
      (this.modifier as any).validate();
    }
    if(this.noticeConfig) {
      $dara.Model.validateMap(this.noticeConfig);
    }
    if(this.periodConfig) {
      $dara.Model.validateMap(this.periodConfig);
    }
    if(this.relateTaskConfig) {
      $dara.Model.validateMap(this.relateTaskConfig);
    }
    if(this.resultCallbackConfig) {
      $dara.Model.validateMap(this.resultCallbackConfig);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.taskTemplateConfig && typeof (this.taskTemplateConfig as any).validate === 'function') {
      (this.taskTemplateConfig as any).validate();
    }
    if(Array.isArray(this.taskWorkflow)) {
      $dara.Model.validateArray(this.taskWorkflow);
    }
    if(this.voteConfigs) {
      $dara.Model.validateMap(this.voteConfigs);
    }
    if(Array.isArray(this.workflowNodes)) {
      $dara.Model.validateArray(this.workflowNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

