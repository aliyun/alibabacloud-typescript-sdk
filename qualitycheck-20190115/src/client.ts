// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BusinessCategoryBasicInfo extends $tea.Model {
  bid?: number;
  name?: string;
  originalId?: number;
  serviceType?: number;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      name: 'Name',
      originalId: 'OriginalId',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'number',
      name: 'string',
      originalId: 'number',
      serviceType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConditionBasicInfo extends $tea.Model {
  checkRange?: ConditionBasicInfoCheckRange;
  cid?: string;
  exclusion?: number;
  id?: number;
  lambda?: string;
  name?: string;
  operators?: OperatorBasicInfo[];
  rid?: string;
  userGroup?: string;
  static names(): { [key: string]: string } {
    return {
      checkRange: 'Check_range',
      cid: 'Cid',
      exclusion: 'Exclusion',
      id: 'Id',
      lambda: 'Lambda',
      name: 'Name',
      operators: 'Operators',
      rid: 'Rid',
      userGroup: 'UserGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkRange: ConditionBasicInfoCheckRange,
      cid: 'string',
      exclusion: 'number',
      id: 'number',
      lambda: 'string',
      name: 'string',
      operators: { 'type': 'array', 'itemType': OperatorBasicInfo },
      rid: 'string',
      userGroup: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GraphFlowNode extends $tea.Model {
  conditions?: ConditionBasicInfo[];
  content?: string;
  id?: number;
  index?: number;
  name?: string;
  nextNodes?: GraphFlowNodeNextNodes[];
  nodeType?: string;
  properties?: GraphFlowNodeProperties;
  rid?: number;
  useConditions?: boolean;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      content: 'Content',
      id: 'Id',
      index: 'Index',
      name: 'Name',
      nextNodes: 'NextNodes',
      nodeType: 'NodeType',
      properties: 'Properties',
      rid: 'Rid',
      useConditions: 'UseConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': ConditionBasicInfo },
      content: 'string',
      id: 'number',
      index: 'number',
      name: 'string',
      nextNodes: { 'type': 'array', 'itemType': GraphFlowNodeNextNodes },
      nodeType: 'string',
      properties: GraphFlowNodeProperties,
      rid: 'number',
      useConditions: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JudgeNodeMetaDesc extends $tea.Model {
  actualValue?: string;
  dataType?: number;
  field?: string;
  fieldType?: number;
  symbol?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      actualValue: 'ActualValue',
      dataType: 'DataType',
      field: 'Field',
      fieldType: 'FieldType',
      symbol: 'Symbol',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualValue: 'string',
      dataType: 'number',
      field: 'string',
      fieldType: 'number',
      symbol: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NextNodeSituations extends $tea.Model {
  conditionGroup?: NextNodeSituationsConditionGroup[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      conditionGroup: 'ConditionGroup',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionGroup: { 'type': 'array', 'itemType': NextNodeSituationsConditionGroup },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperatorBasicInfo extends $tea.Model {
  id?: number;
  name?: string;
  oid?: string;
  param?: OperatorBasicInfoParam;
  qualityCheckType?: number;
  type?: string;
  userGroup?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      oid: 'Oid',
      param: 'Param',
      qualityCheckType: 'QualityCheckType',
      type: 'Type',
      userGroup: 'UserGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      oid: 'string',
      param: OperatorBasicInfoParam,
      qualityCheckType: 'number',
      type: 'string',
      userGroup: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RuleCountInfo extends $tea.Model {
  autoReview?: number;
  businessCategoryBasicInfoList?: BusinessCategoryBasicInfo[];
  businessCategoryNameList?: string[];
  businessRange?: number[];
  checkNumber?: number;
  comments?: string;
  createEmpName?: string;
  createEmpid?: string;
  createTime?: string;
  deny?: number;
  effective?: number;
  effectiveEndTime?: string;
  effectiveStartTime?: string;
  endTime?: string;
  fullCycle?: number;
  graphFlow?: any;
  hitNumber?: number;
  hitRate?: number;
  hitRealViolationRate?: number;
  isDelete?: number;
  isSelect?: boolean;
  jobName?: string;
  lastUpdateEmpName?: string;
  lastUpdateEmpid?: string;
  lastUpdateTime?: string;
  name?: string;
  operationMode?: number;
  preReviewNumber?: number;
  problemNumber?: number;
  qualityCheckType?: number;
  realViolationNumber?: number;
  reviewAccuracyRate?: number;
  reviewNumber?: number;
  reviewRate?: number;
  reviewStatusName?: string;
  rid?: number;
  ruleScoreSingleType?: number;
  ruleScoreType?: number;
  ruleType?: number;
  scoreSubId?: number;
  startTime?: string;
  status?: number;
  targetType?: number;
  type?: number;
  typeName?: string;
  unReviewNumber?: number;
  userGroup?: string;
  static names(): { [key: string]: string } {
    return {
      autoReview: 'AutoReview',
      businessCategoryBasicInfoList: 'BusinessCategoryBasicInfoList',
      businessCategoryNameList: 'BusinessCategoryNameList',
      businessRange: 'BusinessRange',
      checkNumber: 'CheckNumber',
      comments: 'Comments',
      createEmpName: 'CreateEmpName',
      createEmpid: 'CreateEmpid',
      createTime: 'CreateTime',
      deny: 'Deny',
      effective: 'Effective',
      effectiveEndTime: 'EffectiveEndTime',
      effectiveStartTime: 'EffectiveStartTime',
      endTime: 'EndTime',
      fullCycle: 'FullCycle',
      graphFlow: 'GraphFlow',
      hitNumber: 'HitNumber',
      hitRate: 'HitRate',
      hitRealViolationRate: 'HitRealViolationRate',
      isDelete: 'IsDelete',
      isSelect: 'IsSelect',
      jobName: 'JobName',
      lastUpdateEmpName: 'LastUpdateEmpName',
      lastUpdateEmpid: 'LastUpdateEmpid',
      lastUpdateTime: 'LastUpdateTime',
      name: 'Name',
      operationMode: 'OperationMode',
      preReviewNumber: 'PreReviewNumber',
      problemNumber: 'ProblemNumber',
      qualityCheckType: 'QualityCheckType',
      realViolationNumber: 'RealViolationNumber',
      reviewAccuracyRate: 'ReviewAccuracyRate',
      reviewNumber: 'ReviewNumber',
      reviewRate: 'ReviewRate',
      reviewStatusName: 'ReviewStatusName',
      rid: 'Rid',
      ruleScoreSingleType: 'RuleScoreSingleType',
      ruleScoreType: 'RuleScoreType',
      ruleType: 'RuleType',
      scoreSubId: 'ScoreSubId',
      startTime: 'StartTime',
      status: 'Status',
      targetType: 'TargetType',
      type: 'Type',
      typeName: 'TypeName',
      unReviewNumber: 'UnReviewNumber',
      userGroup: 'UserGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReview: 'number',
      businessCategoryBasicInfoList: { 'type': 'array', 'itemType': BusinessCategoryBasicInfo },
      businessCategoryNameList: { 'type': 'array', 'itemType': 'string' },
      businessRange: { 'type': 'array', 'itemType': 'number' },
      checkNumber: 'number',
      comments: 'string',
      createEmpName: 'string',
      createEmpid: 'string',
      createTime: 'string',
      deny: 'number',
      effective: 'number',
      effectiveEndTime: 'string',
      effectiveStartTime: 'string',
      endTime: 'string',
      fullCycle: 'number',
      graphFlow: 'any',
      hitNumber: 'number',
      hitRate: 'number',
      hitRealViolationRate: 'number',
      isDelete: 'number',
      isSelect: 'boolean',
      jobName: 'string',
      lastUpdateEmpName: 'string',
      lastUpdateEmpid: 'string',
      lastUpdateTime: 'string',
      name: 'string',
      operationMode: 'number',
      preReviewNumber: 'number',
      problemNumber: 'number',
      qualityCheckType: 'number',
      realViolationNumber: 'number',
      reviewAccuracyRate: 'number',
      reviewNumber: 'number',
      reviewRate: 'number',
      reviewStatusName: 'string',
      rid: 'number',
      ruleScoreSingleType: 'number',
      ruleScoreType: 'number',
      ruleType: 'number',
      scoreSubId: 'number',
      startTime: 'string',
      status: 'number',
      targetType: 'number',
      type: 'number',
      typeName: 'string',
      unReviewNumber: 'number',
      userGroup: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RuleInfo extends $tea.Model {
  autoReview?: number;
  businessCategoryNameList?: string[];
  checkType?: number;
  comments?: string;
  configType?: number;
  createEmpName?: string;
  createEmpid?: string;
  createTime?: string;
  deny?: number;
  dialogues?: RuleTestDialogue[];
  effective?: number;
  effectiveEndTime?: string;
  effectiveStartTime?: string;
  endTime?: string;
  externalProperty?: number;
  fullCycle?: number;
  graphFlow?: any;
  isDelete?: number;
  isOnline?: number;
  lambda?: string;
  lastUpdateEmpName?: string;
  lastUpdateEmpid?: string;
  lastUpdateTime?: string;
  level?: number;
  meet?: number;
  modifyType?: number;
  name?: string;
  operationMode?: number;
  qualityCheckType?: number;
  rid?: string;
  ruleCategoryName?: string;
  ruleScoreType?: number;
  ruleType?: number;
  schemeCheckType?: SchemeCheckType;
  schemeId?: number;
  schemeName?: string;
  schemeRuleMappingId?: number;
  scoreDeleted?: boolean;
  scoreId?: number;
  scoreName?: string;
  scoreNum?: number;
  scoreNumType?: number;
  scoreRuleHitType?: number;
  scoreSubId?: number;
  scoreSubName?: string;
  scoreType?: number;
  sortIndex?: number;
  startTime?: string;
  status?: number;
  targetType?: number;
  taskFlowId?: number;
  taskFlowType?: number;
  triggers?: string[];
  type?: number;
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      autoReview: 'AutoReview',
      businessCategoryNameList: 'BusinessCategoryNameList',
      checkType: 'CheckType',
      comments: 'Comments',
      configType: 'ConfigType',
      createEmpName: 'CreateEmpName',
      createEmpid: 'CreateEmpid',
      createTime: 'CreateTime',
      deny: 'Deny',
      dialogues: 'Dialogues',
      effective: 'Effective',
      effectiveEndTime: 'EffectiveEndTime',
      effectiveStartTime: 'EffectiveStartTime',
      endTime: 'EndTime',
      externalProperty: 'ExternalProperty',
      fullCycle: 'FullCycle',
      graphFlow: 'GraphFlow',
      isDelete: 'IsDelete',
      isOnline: 'IsOnline',
      lambda: 'Lambda',
      lastUpdateEmpName: 'LastUpdateEmpName',
      lastUpdateEmpid: 'LastUpdateEmpid',
      lastUpdateTime: 'LastUpdateTime',
      level: 'Level',
      meet: 'Meet',
      modifyType: 'ModifyType',
      name: 'Name',
      operationMode: 'OperationMode',
      qualityCheckType: 'QualityCheckType',
      rid: 'Rid',
      ruleCategoryName: 'RuleCategoryName',
      ruleScoreType: 'RuleScoreType',
      ruleType: 'RuleType',
      schemeCheckType: 'SchemeCheckType',
      schemeId: 'SchemeId',
      schemeName: 'SchemeName',
      schemeRuleMappingId: 'SchemeRuleMappingId',
      scoreDeleted: 'ScoreDeleted',
      scoreId: 'ScoreId',
      scoreName: 'ScoreName',
      scoreNum: 'ScoreNum',
      scoreNumType: 'ScoreNumType',
      scoreRuleHitType: 'ScoreRuleHitType',
      scoreSubId: 'ScoreSubId',
      scoreSubName: 'ScoreSubName',
      scoreType: 'ScoreType',
      sortIndex: 'SortIndex',
      startTime: 'StartTime',
      status: 'Status',
      targetType: 'TargetType',
      taskFlowId: 'TaskFlowId',
      taskFlowType: 'TaskFlowType',
      triggers: 'Triggers',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReview: 'number',
      businessCategoryNameList: { 'type': 'array', 'itemType': 'string' },
      checkType: 'number',
      comments: 'string',
      configType: 'number',
      createEmpName: 'string',
      createEmpid: 'string',
      createTime: 'string',
      deny: 'number',
      dialogues: { 'type': 'array', 'itemType': RuleTestDialogue },
      effective: 'number',
      effectiveEndTime: 'string',
      effectiveStartTime: 'string',
      endTime: 'string',
      externalProperty: 'number',
      fullCycle: 'number',
      graphFlow: 'any',
      isDelete: 'number',
      isOnline: 'number',
      lambda: 'string',
      lastUpdateEmpName: 'string',
      lastUpdateEmpid: 'string',
      lastUpdateTime: 'string',
      level: 'number',
      meet: 'number',
      modifyType: 'number',
      name: 'string',
      operationMode: 'number',
      qualityCheckType: 'number',
      rid: 'string',
      ruleCategoryName: 'string',
      ruleScoreType: 'number',
      ruleType: 'number',
      schemeCheckType: SchemeCheckType,
      schemeId: 'number',
      schemeName: 'string',
      schemeRuleMappingId: 'number',
      scoreDeleted: 'boolean',
      scoreId: 'number',
      scoreName: 'string',
      scoreNum: 'number',
      scoreNumType: 'number',
      scoreRuleHitType: 'number',
      scoreSubId: 'number',
      scoreSubName: 'string',
      scoreType: 'number',
      sortIndex: 'number',
      startTime: 'string',
      status: 'number',
      targetType: 'number',
      taskFlowId: 'number',
      taskFlowType: 'number',
      triggers: { 'type': 'array', 'itemType': 'string' },
      type: 'number',
      weight: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RuleTestDialogue extends $tea.Model {
  content?: RuleTestDialogueContent[];
  id?: number;
  name?: string;
  userGroup?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      name: 'Name',
      userGroup: 'UserGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': RuleTestDialogueContent },
      id: 'number',
      name: 'string',
      userGroup: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RulesInfo extends $tea.Model {
  conditions?: ConditionBasicInfo[];
  count?: number;
  dialogues?: RuleTestDialogue[];
  pageNumber?: number;
  pageSize?: number;
  rules?: RuleInfo[];
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      count: 'Count',
      dialogues: 'Dialogues',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': ConditionBasicInfo },
      count: 'number',
      dialogues: { 'type': 'array', 'itemType': RuleTestDialogue },
      pageNumber: 'number',
      pageSize: 'number',
      rules: { 'type': 'array', 'itemType': RuleInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SchemeCheckType extends $tea.Model {
  checkName?: string;
  checkType?: number;
  enable?: number;
  schemeId?: number;
  schemeScoreInfoList?: SchemeCheckTypeSchemeScoreInfoList[];
  score?: number;
  sourceScore?: number;
  taskFlowScoreInfoList?: SchemeCheckTypeTaskFlowScoreInfoList[];
  static names(): { [key: string]: string } {
    return {
      checkName: 'CheckName',
      checkType: 'CheckType',
      enable: 'Enable',
      schemeId: 'SchemeId',
      schemeScoreInfoList: 'SchemeScoreInfoList',
      score: 'Score',
      sourceScore: 'SourceScore',
      taskFlowScoreInfoList: 'TaskFlowScoreInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkName: 'string',
      checkType: 'number',
      enable: 'number',
      schemeId: 'number',
      schemeScoreInfoList: { 'type': 'array', 'itemType': SchemeCheckTypeSchemeScoreInfoList },
      score: 'number',
      sourceScore: 'number',
      taskFlowScoreInfoList: { 'type': 'array', 'itemType': SchemeCheckTypeTaskFlowScoreInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskGraphFlow extends $tea.Model {
  flowRuleScoreType?: number;
  id?: number;
  nodes?: GraphFlowNode[];
  rid?: number;
  ruleName?: string;
  showProperties?: string;
  skipWhenFirstSessionNodeMiss?: boolean;
  static names(): { [key: string]: string } {
    return {
      flowRuleScoreType: 'FlowRuleScoreType',
      id: 'Id',
      nodes: 'Nodes',
      rid: 'Rid',
      ruleName: 'RuleName',
      showProperties: 'ShowProperties',
      skipWhenFirstSessionNodeMiss: 'SkipWhenFirstSessionNodeMiss',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowRuleScoreType: 'number',
      id: 'number',
      nodes: { 'type': 'array', 'itemType': GraphFlowNode },
      rid: 'number',
      ruleName: 'string',
      showProperties: 'string',
      skipWhenFirstSessionNodeMiss: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBusinessCategoryRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBusinessCategoryResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBusinessCategoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddBusinessCategoryResponseBody;
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
      body: AddBusinessCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRuleCategoryRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRuleCategoryResponseBody extends $tea.Model {
  code?: string;
  data?: AddRuleCategoryResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddRuleCategoryResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRuleCategoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddRuleCategoryResponseBody;
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
      body: AddRuleCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRuleV4Request extends $tea.Model {
  baseMeAgentId?: number;
  isCopy?: boolean;
  jsonStrForRule?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      isCopy: 'IsCopy',
      jsonStrForRule: 'JsonStrForRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      isCopy: 'boolean',
      jsonStrForRule: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRuleV4ResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  messages?: AddRuleV4ResponseBodyMessages;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      messages: AddRuleV4ResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRuleV4Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddRuleV4ResponseBody;
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
      body: AddRuleV4ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddThesaurusForApiRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddThesaurusForApiResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddThesaurusForApiResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddThesaurusForApiResponseBody;
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
      body: AddThesaurusForApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignReviewerRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignReviewerResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignReviewerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssignReviewerResponseBody;
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
      body: AssignReviewerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignReviewerBySessionGroupRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignReviewerBySessionGroupResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  messages?: AssignReviewerBySessionGroupResponseBodyMessages;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      messages: AssignReviewerBySessionGroupResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignReviewerBySessionGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssignReviewerBySessionGroupResponseBody;
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
      body: AssignReviewerBySessionGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSubmitReviewInfoRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSubmitReviewInfoResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  messages?: BatchSubmitReviewInfoResponseBodyMessages;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      messages: BatchSubmitReviewInfoResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSubmitReviewInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchSubmitReviewInfoResponseBody;
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
      body: BatchSubmitReviewInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAsrVocabRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAsrVocabResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAsrVocabResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAsrVocabResponseBody;
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
      body: CreateAsrVocabResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCheckTypeToSchemeRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCheckTypeToSchemeResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  messages?: CreateCheckTypeToSchemeResponseBodyMessages;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      messages: CreateCheckTypeToSchemeResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCheckTypeToSchemeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCheckTypeToSchemeResponseBody;
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
      body: CreateCheckTypeToSchemeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityCheckSchemeRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityCheckSchemeResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  messages?: CreateQualityCheckSchemeResponseBodyMessages;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      messages: CreateQualityCheckSchemeResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityCheckSchemeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateQualityCheckSchemeResponseBody;
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
      body: CreateQualityCheckSchemeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchemeTaskConfigRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchemeTaskConfigResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  messages?: CreateSchemeTaskConfigResponseBodyMessages;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      messages: CreateSchemeTaskConfigResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchemeTaskConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSchemeTaskConfigResponseBody;
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
      body: CreateSchemeTaskConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupConfigRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupConfigResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSkillGroupConfigResponseBody;
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
      body: CreateSkillGroupConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskAssignRuleRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskAssignRuleResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskAssignRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTaskAssignRuleResponseBody;
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
      body: CreateTaskAssignRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class CreateWarningConfigRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWarningConfigResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWarningConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWarningConfigResponseBody;
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
      body: CreateWarningConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWarningStrategyConfigRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWarningStrategyConfigResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWarningStrategyConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWarningStrategyConfigResponseBody;
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
      body: CreateWarningStrategyConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelRuleCategoryRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelRuleCategoryResponseBody extends $tea.Model {
  code?: string;
  data?: DelRuleCategoryResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DelRuleCategoryResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelRuleCategoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DelRuleCategoryResponseBody;
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
      body: DelRuleCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelThesaurusForApiRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelThesaurusForApiResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelThesaurusForApiResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DelThesaurusForApiResponseBody;
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
      body: DelThesaurusForApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAsrVocabRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAsrVocabResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAsrVocabResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAsrVocabResponseBody;
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
      body: DeleteAsrVocabResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBusinessCategoryRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBusinessCategoryResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBusinessCategoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBusinessCategoryResponseBody;
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
      body: DeleteBusinessCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomizationConfigRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomizationConfigResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomizationConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomizationConfigResponseBody;
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
      body: DeleteCustomizationConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSetRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSetResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDataSetResponseBody;
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
      body: DeleteDataSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrecisionTaskRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrecisionTaskResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrecisionTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePrecisionTaskResponseBody;
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
      body: DeletePrecisionTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityCheckSchemeRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityCheckSchemeResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  messages?: DeleteQualityCheckSchemeResponseBodyMessages;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      messages: DeleteQualityCheckSchemeResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityCheckSchemeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteQualityCheckSchemeResponseBody;
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
      body: DeleteQualityCheckSchemeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleRequest extends $tea.Model {
  baseMeAgentId?: number;
  forceDelete?: boolean;
  isSchemeData?: number;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      forceDelete: 'ForceDelete',
      isSchemeData: 'IsSchemeData',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      forceDelete: 'boolean',
      isSchemeData: 'number',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  messages?: DeleteRuleResponseBodyMessages;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      messages: DeleteRuleResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRuleResponseBody;
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
      body: DeleteRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleV4Request extends $tea.Model {
  baseMeAgentId?: number;
  forceDelete?: boolean;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      forceDelete: 'ForceDelete',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      forceDelete: 'boolean',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleV4ResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  messages?: DeleteRuleV4ResponseBodyMessages;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      messages: DeleteRuleV4ResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleV4Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRuleV4ResponseBody;
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
      body: DeleteRuleV4ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSchemeTaskConfigRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSchemeTaskConfigResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  messages?: DeleteSchemeTaskConfigResponseBodyMessages;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      messages: DeleteSchemeTaskConfigResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSchemeTaskConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSchemeTaskConfigResponseBody;
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
      body: DeleteSchemeTaskConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScoreForApiRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScoreForApiResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScoreForApiResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteScoreForApiResponseBody;
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
      body: DeleteScoreForApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSkillGroupConfigRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSkillGroupConfigResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSkillGroupConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSkillGroupConfigResponseBody;
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
      body: DeleteSkillGroupConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubScoreForApiRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubScoreForApiResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubScoreForApiResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSubScoreForApiResponseBody;
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
      body: DeleteSubScoreForApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTaskAssignRuleRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTaskAssignRuleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTaskAssignRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTaskAssignRuleResponseBody;
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
      body: DeleteTaskAssignRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

export class DeleteWarningConfigRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWarningConfigResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWarningConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWarningConfigResponseBody;
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
      body: DeleteWarningConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWarningStrategyConfigRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWarningStrategyConfigResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWarningStrategyConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWarningStrategyConfigResponseBody;
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
      body: DeleteWarningStrategyConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditThesaurusForApiRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditThesaurusForApiResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditThesaurusForApiResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EditThesaurusForApiResponseBody;
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
      body: EditThesaurusForApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrVocabRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrVocabResponseBody extends $tea.Model {
  code?: string;
  data?: GetAsrVocabResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAsrVocabResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrVocabResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAsrVocabResponseBody;
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
      body: GetAsrVocabResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessCategoryListRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessCategoryListResponseBody extends $tea.Model {
  code?: string;
  data?: GetBusinessCategoryListResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetBusinessCategoryListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessCategoryListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBusinessCategoryListResponseBody;
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
      body: GetBusinessCategoryListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomizationConfigListRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomizationConfigListResponseBody extends $tea.Model {
  code?: string;
  data?: GetCustomizationConfigListResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCustomizationConfigListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomizationConfigListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCustomizationConfigListResponseBody;
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
      body: GetCustomizationConfigListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHitResultRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHitResultResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  data?: GetHitResultResponseBodyData;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: GetHitResultResponseBodyData,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHitResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHitResultResponseBody;
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
      body: GetHitResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBody extends $tea.Model {
  code?: string;
  data?: GetNextResultToVerifyResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetNextResultToVerifyResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNextResultToVerifyResponseBody;
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
      body: GetNextResultToVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrecisionTaskRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrecisionTaskResponseBody extends $tea.Model {
  code?: string;
  data?: GetPrecisionTaskResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetPrecisionTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrecisionTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPrecisionTaskResponseBody;
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
      body: GetPrecisionTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityCheckSchemeRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityCheckSchemeResponseBody extends $tea.Model {
  code?: string;
  data?: GetQualityCheckSchemeResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  messages?: string[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetQualityCheckSchemeResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      messages: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityCheckSchemeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQualityCheckSchemeResponseBody;
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
      body: GetQualityCheckSchemeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  data?: GetResultResponseBodyData;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  resultCountId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultCountId: 'ResultCountId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: GetResultResponseBodyData,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resultCountId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResultResponseBody;
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
      body: GetResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBody extends $tea.Model {
  code?: string;
  data?: GetResultToReviewResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetResultToReviewResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResultToReviewResponseBody;
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
      body: GetResultToReviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBody extends $tea.Model {
  code?: string;
  data?: GetRuleResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetRuleResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRuleResponseBody;
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
      body: GetRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleByIdRequest extends $tea.Model {
  baseMeAgentId?: number;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleByIdResponseBody extends $tea.Model {
  code?: string;
  data?: RulesInfo;
  httpStatusCode?: number;
  message?: string;
  messages?: string[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RulesInfo,
      httpStatusCode: 'number',
      message: 'string',
      messages: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleByIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRuleByIdResponseBody;
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
      body: GetRuleByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleCategoryRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleCategoryResponseBody extends $tea.Model {
  code?: string;
  data?: GetRuleCategoryResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetRuleCategoryResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleCategoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRuleCategoryResponseBody;
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
      body: GetRuleCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBody extends $tea.Model {
  code?: string;
  data?: GetRuleDetailResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetRuleDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRuleDetailResponseBody;
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
      body: GetRuleDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleV4Request extends $tea.Model {
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleV4ResponseBody extends $tea.Model {
  code?: string;
  data?: RulesInfo;
  httpStatusCode?: number;
  message?: string;
  messages?: string[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RulesInfo,
      httpStatusCode: 'number',
      message: 'string',
      messages: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleV4Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRuleV4ResponseBody;
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
      body: GetRuleV4ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleV4StrRequest extends $tea.Model {
  isSchemeData?: number;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      isSchemeData: 'IsSchemeData',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSchemeData: 'number',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleV4StrResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleV4StrResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRuleV4StrResponseBody;
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
      body: GetRuleV4StrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRulesCountListRequest extends $tea.Model {
  baseMeAgentId?: number;
  businessName?: string;
  businessRange?: number;
  categoryName?: string;
  countTotal?: boolean;
  createEmpid?: string;
  createUserId?: number;
  currentPage?: number;
  endTime?: string;
  lastUpdateEmpid?: string;
  pageNumber?: number;
  pageSize?: number;
  requireInfos?: string[];
  rid?: number;
  ruleIdOrRuleName?: string;
  ruleScoreSingleType?: number;
  ruleType?: number;
  schemeId?: number;
  sourceType?: number;
  startTime?: string;
  status?: number;
  type?: number;
  typeName?: string;
  updateEndTime?: string;
  updateStartTime?: string;
  updateUserId?: number;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      businessName: 'BusinessName',
      businessRange: 'BusinessRange',
      categoryName: 'CategoryName',
      countTotal: 'CountTotal',
      createEmpid: 'CreateEmpid',
      createUserId: 'CreateUserId',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      lastUpdateEmpid: 'LastUpdateEmpid',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requireInfos: 'RequireInfos',
      rid: 'Rid',
      ruleIdOrRuleName: 'RuleIdOrRuleName',
      ruleScoreSingleType: 'RuleScoreSingleType',
      ruleType: 'RuleType',
      schemeId: 'SchemeId',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
      typeName: 'TypeName',
      updateEndTime: 'UpdateEndTime',
      updateStartTime: 'UpdateStartTime',
      updateUserId: 'UpdateUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      businessName: 'string',
      businessRange: 'number',
      categoryName: 'string',
      countTotal: 'boolean',
      createEmpid: 'string',
      createUserId: 'number',
      currentPage: 'number',
      endTime: 'string',
      lastUpdateEmpid: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requireInfos: { 'type': 'array', 'itemType': 'string' },
      rid: 'number',
      ruleIdOrRuleName: 'string',
      ruleScoreSingleType: 'number',
      ruleType: 'number',
      schemeId: 'number',
      sourceType: 'number',
      startTime: 'string',
      status: 'number',
      type: 'number',
      typeName: 'string',
      updateEndTime: 'string',
      updateStartTime: 'string',
      updateUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRulesCountListResponseBody extends $tea.Model {
  businessType?: number;
  code?: string;
  count?: number;
  currentPage?: number;
  data?: GetRulesCountListResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  messages?: GetRulesCountListResponseBodyMessages;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      code: 'Code',
      count: 'Count',
      currentPage: 'CurrentPage',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'number',
      code: 'string',
      count: 'number',
      currentPage: 'number',
      data: GetRulesCountListResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      messages: GetRulesCountListResponseBodyMessages,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRulesCountListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRulesCountListResponseBody;
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
      body: GetRulesCountListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScoreInfoRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScoreInfoResponseBody extends $tea.Model {
  code?: string;
  data?: GetScoreInfoResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetScoreInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScoreInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetScoreInfoResponseBody;
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
      body: GetScoreInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupConfigRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupConfigResponseBody extends $tea.Model {
  code?: string;
  data?: GetSkillGroupConfigResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSkillGroupConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSkillGroupConfigResponseBody;
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
      body: GetSkillGroupConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  data?: GetSyncResultResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  resultCountId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultCountId: 'ResultCountId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: { 'type': 'array', 'itemType': GetSyncResultResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resultCountId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSyncResultResponseBody;
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
      body: GetSyncResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThesaurusBySynonymForApiRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThesaurusBySynonymForApiResponseBody extends $tea.Model {
  code?: string;
  data?: GetThesaurusBySynonymForApiResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetThesaurusBySynonymForApiResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThesaurusBySynonymForApiResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetThesaurusBySynonymForApiResponseBody;
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
      body: GetThesaurusBySynonymForApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWarningStrategyConfigRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWarningStrategyConfigResponseBody extends $tea.Model {
  code?: string;
  data?: GetWarningStrategyConfigResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetWarningStrategyConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWarningStrategyConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWarningStrategyConfigResponseBody;
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
      body: GetWarningStrategyConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleComplaintRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleComplaintResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleComplaintResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HandleComplaintResponseBody;
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
      body: HandleComplaintResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertScoreForApiRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertScoreForApiResponseBody extends $tea.Model {
  code?: string;
  data?: InsertScoreForApiResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: InsertScoreForApiResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertScoreForApiResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InsertScoreForApiResponseBody;
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
      body: InsertScoreForApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSubScoreForApiRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSubScoreForApiResponseBody extends $tea.Model {
  code?: string;
  data?: InsertSubScoreForApiResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: InsertSubScoreForApiResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSubScoreForApiResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InsertSubScoreForApiResponseBody;
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
      body: InsertSubScoreForApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvalidRuleRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvalidRuleResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvalidRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InvalidRuleResponseBody;
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
      body: InvalidRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsrVocabRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsrVocabResponseBody extends $tea.Model {
  code?: string;
  data?: ListAsrVocabResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListAsrVocabResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsrVocabResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAsrVocabResponseBody;
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
      body: ListAsrVocabResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBusinessSpacesRequest extends $tea.Model {
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBusinessSpacesResponseBody extends $tea.Model {
  code?: string;
  currentPage?: number;
  data?: ListBusinessSpacesResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': ListBusinessSpacesResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBusinessSpacesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListBusinessSpacesResponseBody;
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
      body: ListBusinessSpacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  currentPage?: number;
  data?: ListDataSetResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  messages?: ListDataSetResponseBodyMessages;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      currentPage: 'CurrentPage',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      currentPage: 'number',
      data: ListDataSetResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      messages: ListDataSetResponseBodyMessages,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataSetResponseBody;
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
      body: ListDataSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrecisionTaskRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrecisionTaskResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  data?: ListPrecisionTaskResponseBodyData;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: ListPrecisionTaskResponseBodyData,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrecisionTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPrecisionTaskResponseBody;
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
      body: ListPrecisionTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityCheckSchemeRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityCheckSchemeResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  data?: ListQualityCheckSchemeResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  resultCountId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultCountId: 'ResultCountId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: { 'type': 'array', 'itemType': ListQualityCheckSchemeResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resultCountId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityCheckSchemeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListQualityCheckSchemeResponseBody;
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
      body: ListQualityCheckSchemeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBody extends $tea.Model {
  code?: string;
  data?: ListRolesResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListRolesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRolesResponseBody;
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
      body: ListRolesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  data?: ListRulesResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: { 'type': 'array', 'itemType': ListRulesResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRulesResponseBody;
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
      body: ListRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesV4Request extends $tea.Model {
  baseMeAgentId?: number;
  businessName?: string;
  businessRange?: number;
  categoryName?: string;
  countTotal?: boolean;
  createEmpid?: string;
  createUserId?: number;
  currentPage?: number;
  endTime?: string;
  lastUpdateEmpid?: string;
  pageNumber?: number;
  pageSize?: number;
  requireInfos?: string[];
  rid?: number;
  ruleIdOrRuleName?: string;
  ruleScoreSingleType?: number;
  ruleType?: number;
  schemeId?: number;
  sourceType?: number;
  startTime?: string;
  status?: number;
  type?: number;
  typeName?: string;
  updateEndTime?: string;
  updateStartTime?: string;
  updateUserId?: number;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      businessName: 'BusinessName',
      businessRange: 'BusinessRange',
      categoryName: 'CategoryName',
      countTotal: 'CountTotal',
      createEmpid: 'CreateEmpid',
      createUserId: 'CreateUserId',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      lastUpdateEmpid: 'LastUpdateEmpid',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requireInfos: 'RequireInfos',
      rid: 'Rid',
      ruleIdOrRuleName: 'RuleIdOrRuleName',
      ruleScoreSingleType: 'RuleScoreSingleType',
      ruleType: 'RuleType',
      schemeId: 'SchemeId',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
      typeName: 'TypeName',
      updateEndTime: 'UpdateEndTime',
      updateStartTime: 'UpdateStartTime',
      updateUserId: 'UpdateUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      businessName: 'string',
      businessRange: 'number',
      categoryName: 'string',
      countTotal: 'boolean',
      createEmpid: 'string',
      createUserId: 'number',
      currentPage: 'number',
      endTime: 'string',
      lastUpdateEmpid: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requireInfos: { 'type': 'array', 'itemType': 'string' },
      rid: 'number',
      ruleIdOrRuleName: 'string',
      ruleScoreSingleType: 'number',
      ruleType: 'number',
      schemeId: 'number',
      sourceType: 'number',
      startTime: 'string',
      status: 'number',
      type: 'number',
      typeName: 'string',
      updateEndTime: 'string',
      updateStartTime: 'string',
      updateUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesV4ResponseBody extends $tea.Model {
  businessType?: number;
  code?: string;
  count?: number;
  currentPage?: number;
  data?: RuleCountInfo[];
  httpStatusCode?: number;
  message?: string;
  messages?: string[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      code: 'Code',
      count: 'Count',
      currentPage: 'CurrentPage',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'number',
      code: 'string',
      count: 'number',
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': RuleCountInfo },
      httpStatusCode: 'number',
      message: 'string',
      messages: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesV4Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRulesV4ResponseBody;
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
      body: ListRulesV4ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  currentPage?: number;
  data?: ListSchemeTaskConfigResponseBodyData;
  httpStatusCode?: number;
  lastDataId?: string;
  message?: string;
  messages?: ListSchemeTaskConfigResponseBodyMessages;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  resultCountId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      currentPage: 'CurrentPage',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      lastDataId: 'LastDataId',
      message: 'Message',
      messages: 'Messages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultCountId: 'ResultCountId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      currentPage: 'number',
      data: ListSchemeTaskConfigResponseBodyData,
      httpStatusCode: 'number',
      lastDataId: 'string',
      message: 'string',
      messages: ListSchemeTaskConfigResponseBodyMessages,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resultCountId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSchemeTaskConfigResponseBody;
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
      body: ListSchemeTaskConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  currentPage?: number;
  data?: ListSessionGroupResponseBodyData;
  httpStatusCode?: number;
  lastDataId?: string;
  message?: string;
  messages?: ListSessionGroupResponseBodyMessages;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  resultCountId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      currentPage: 'CurrentPage',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      lastDataId: 'LastDataId',
      message: 'Message',
      messages: 'Messages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultCountId: 'ResultCountId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      currentPage: 'number',
      data: ListSessionGroupResponseBodyData,
      httpStatusCode: 'number',
      lastDataId: 'string',
      message: 'string',
      messages: ListSessionGroupResponseBodyMessages,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resultCountId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSessionGroupResponseBody;
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
      body: ListSessionGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBody extends $tea.Model {
  code?: string;
  data?: ListSkillGroupConfigResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListSkillGroupConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSkillGroupConfigResponseBody;
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
      body: ListSkillGroupConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  data?: ListTaskAssignRulesResponseBodyData;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: ListTaskAssignRulesResponseBodyData,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTaskAssignRulesResponseBody;
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
      body: ListTaskAssignRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  data?: ListUsersResponseBodyData;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: ListUsersResponseBodyData,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
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

export class ListWarningConfigRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponseBody extends $tea.Model {
  code?: string;
  data?: ListWarningConfigResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListWarningConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWarningConfigResponseBody;
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
      body: ListWarningConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningStrategyConfigRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningStrategyConfigResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  data?: ListWarningStrategyConfigResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: ListWarningStrategyConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningStrategyConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWarningStrategyConfigResponseBody;
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
      body: ListWarningStrategyConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartAsrTaskRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartAsrTaskResponseBody extends $tea.Model {
  code?: string;
  data?: RestartAsrTaskResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RestartAsrTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartAsrTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartAsrTaskResponseBody;
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
      body: RestartAsrTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevertAssignedSessionRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevertAssignedSessionResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  messages?: RevertAssignedSessionResponseBodyMessages;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      messages: RevertAssignedSessionResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevertAssignedSessionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevertAssignedSessionResponseBody;
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
      body: RevertAssignedSessionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevertAssignedSessionGroupRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevertAssignedSessionGroupResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  messages?: RevertAssignedSessionGroupResponseBodyMessages;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      messages: RevertAssignedSessionGroupResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevertAssignedSessionGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevertAssignedSessionGroupResponseBody;
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
      body: RevertAssignedSessionGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveConfigDataSetRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveConfigDataSetResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveConfigDataSetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveConfigDataSetResponseBody;
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
      body: SaveConfigDataSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitComplaintRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitComplaintResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitComplaintResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitComplaintResponseBody;
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
      body: SubmitComplaintResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPrecisionTaskRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPrecisionTaskResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPrecisionTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitPrecisionTaskResponseBody;
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
      body: SubmitPrecisionTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitQualityCheckTaskRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitQualityCheckTaskResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitQualityCheckTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitQualityCheckTaskResponseBody;
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
      body: SubmitQualityCheckTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitReviewInfoRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitReviewInfoResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitReviewInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitReviewInfoResponseBody;
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
      body: SubmitReviewInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncQualityCheckRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncQualityCheckResponseBody extends $tea.Model {
  code?: string;
  data?: SyncQualityCheckResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SyncQualityCheckResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncQualityCheckResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SyncQualityCheckResponseBody;
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
      body: SyncQualityCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleV4Request extends $tea.Model {
  isSchemeData?: number;
  testJson?: string;
  static names(): { [key: string]: string } {
    return {
      isSchemeData: 'IsSchemeData',
      testJson: 'TestJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSchemeData: 'number',
      testJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleV4ResponseBody extends $tea.Model {
  code?: string;
  data?: TestRuleV4ResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: TestRuleV4ResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleV4Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TestRuleV4ResponseBody;
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
      body: TestRuleV4ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAsrVocabRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAsrVocabResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAsrVocabResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAsrVocabResponseBody;
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
      body: UpdateAsrVocabResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCheckTypeToSchemeRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCheckTypeToSchemeResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  messages?: UpdateCheckTypeToSchemeResponseBodyMessages;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      messages: UpdateCheckTypeToSchemeResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCheckTypeToSchemeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCheckTypeToSchemeResponseBody;
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
      body: UpdateCheckTypeToSchemeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQualityCheckDataRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQualityCheckDataResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQualityCheckDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateQualityCheckDataResponseBody;
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
      body: UpdateQualityCheckDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQualityCheckSchemeRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQualityCheckSchemeResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  messages?: UpdateQualityCheckSchemeResponseBodyMessages;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      messages: UpdateQualityCheckSchemeResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQualityCheckSchemeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateQualityCheckSchemeResponseBody;
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
      body: UpdateQualityCheckSchemeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRuleResponseBody;
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
      body: UpdateRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleByIdRequest extends $tea.Model {
  baseMeAgentId?: number;
  isCopy?: boolean;
  jsonStrForRule?: string;
  returnRelatedSchemes?: boolean;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      isCopy: 'IsCopy',
      jsonStrForRule: 'JsonStrForRule',
      returnRelatedSchemes: 'ReturnRelatedSchemes',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      isCopy: 'boolean',
      jsonStrForRule: 'string',
      returnRelatedSchemes: 'boolean',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleByIdResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  messages?: UpdateRuleByIdResponseBodyMessages;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      messages: UpdateRuleByIdResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleByIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRuleByIdResponseBody;
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
      body: UpdateRuleByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleToSchemeRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleToSchemeResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  messages?: UpdateRuleToSchemeResponseBodyMessages;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      messages: UpdateRuleToSchemeResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleToSchemeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRuleToSchemeResponseBody;
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
      body: UpdateRuleToSchemeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleV4Request extends $tea.Model {
  baseMeAgentId?: number;
  jsonStrForRule?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStrForRule: 'JsonStrForRule',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStrForRule: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleV4ResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  messages?: UpdateRuleV4ResponseBodyMessages;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      messages: UpdateRuleV4ResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleV4Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRuleV4ResponseBody;
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
      body: UpdateRuleV4ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSchemeTaskConfigRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSchemeTaskConfigResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  messages?: UpdateSchemeTaskConfigResponseBodyMessages;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      messages: UpdateSchemeTaskConfigResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSchemeTaskConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSchemeTaskConfigResponseBody;
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
      body: UpdateSchemeTaskConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScoreForApiRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScoreForApiResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScoreForApiResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateScoreForApiResponseBody;
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
      body: UpdateScoreForApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSkillGroupConfigRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSkillGroupConfigResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSkillGroupConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSkillGroupConfigResponseBody;
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
      body: UpdateSkillGroupConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubScoreForApiRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubScoreForApiResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubScoreForApiResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSubScoreForApiResponseBody;
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
      body: UpdateSubScoreForApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSyncQualityCheckDataRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSyncQualityCheckDataResponseBody extends $tea.Model {
  code?: string;
  data?: UpdateSyncQualityCheckDataResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateSyncQualityCheckDataResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSyncQualityCheckDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSyncQualityCheckDataResponseBody;
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
      body: UpdateSyncQualityCheckDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskAssignRuleRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskAssignRuleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskAssignRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTaskAssignRuleResponseBody;
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
      body: UpdateTaskAssignRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class UpdateUserConfigRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserConfigResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserConfigResponseBody;
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
      body: UpdateUserConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWarningConfigRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWarningConfigResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWarningConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWarningConfigResponseBody;
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
      body: UpdateWarningConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWarningStrategyConfigRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWarningStrategyConfigResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWarningStrategyConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWarningStrategyConfigResponseBody;
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
      body: UpdateWarningStrategyConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadAudioDataRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadAudioDataResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadAudioDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadAudioDataResponseBody;
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
      body: UploadAudioDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadDataResponseBody;
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
      body: UploadDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBody extends $tea.Model {
  code?: string;
  data?: UploadDataSyncResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UploadDataSyncResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadDataSyncResponseBody;
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
      body: UploadDataSyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataV4Request extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataV4ResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataV4Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadDataV4ResponseBody;
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
      body: UploadDataV4ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRuleRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRuleResponseBody extends $tea.Model {
  code?: string;
  data?: UploadRuleResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UploadRuleResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadRuleResponseBody;
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
      body: UploadRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyFileRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyFileResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyFileResponseBody;
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
      body: VerifyFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceRequest extends $tea.Model {
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponseBody extends $tea.Model {
  code?: string;
  data?: VerifySentenceResponseBodyData;
  incorrectWords?: number;
  message?: string;
  requestId?: string;
  sourceRole?: number;
  success?: boolean;
  targetRole?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      incorrectWords: 'IncorrectWords',
      message: 'Message',
      requestId: 'RequestId',
      sourceRole: 'SourceRole',
      success: 'Success',
      targetRole: 'TargetRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: VerifySentenceResponseBodyData,
      incorrectWords: 'number',
      message: 'string',
      requestId: 'string',
      sourceRole: 'number',
      success: 'boolean',
      targetRole: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifySentenceResponseBody;
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
      body: VerifySentenceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConditionBasicInfoCheckRangeAnchor extends $tea.Model {
  cid?: string;
  hitTime?: number;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      hitTime: 'Hit_time',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: 'string',
      hitTime: 'number',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConditionBasicInfoCheckRangeRange extends $tea.Model {
  from?: number;
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConditionBasicInfoCheckRange extends $tea.Model {
  absolute?: boolean;
  allSentencesSatisfy?: boolean;
  anchor?: ConditionBasicInfoCheckRangeAnchor;
  range?: ConditionBasicInfoCheckRangeRange;
  role?: string;
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      absolute: 'Absolute',
      allSentencesSatisfy: 'AllSentencesSatisfy',
      anchor: 'Anchor',
      range: 'Range',
      role: 'Role',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      absolute: 'boolean',
      allSentencesSatisfy: 'boolean',
      anchor: ConditionBasicInfoCheckRangeAnchor,
      range: ConditionBasicInfoCheckRangeRange,
      role: 'string',
      roleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GraphFlowNodeNextNodes extends $tea.Model {
  checkType?: number;
  index?: number;
  lambda?: string;
  name?: string;
  nextNodeId?: number;
  triggers?: string[];
  static names(): { [key: string]: string } {
    return {
      checkType: 'CheckType',
      index: 'Index',
      lambda: 'Lambda',
      name: 'Name',
      nextNodeId: 'NextNodeId',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkType: 'number',
      index: 'number',
      lambda: 'string',
      name: 'string',
      nextNodeId: 'number',
      triggers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GraphFlowNodeProperties extends $tea.Model {
  autoReview?: number;
  branchJudge?: boolean;
  checkMoreSize?: number;
  checkType?: number;
  lambda?: string;
  role?: string;
  ruleScoreType?: number;
  sayType?: string;
  scoreNum?: number;
  scoreNumType?: number;
  scoreRuleHitType?: number;
  scoreType?: number;
  triggers?: string[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoReview: 'AutoReview',
      branchJudge: 'BranchJudge',
      checkMoreSize: 'CheckMoreSize',
      checkType: 'CheckType',
      lambda: 'Lambda',
      role: 'Role',
      ruleScoreType: 'RuleScoreType',
      sayType: 'SayType',
      scoreNum: 'ScoreNum',
      scoreNumType: 'ScoreNumType',
      scoreRuleHitType: 'ScoreRuleHitType',
      scoreType: 'ScoreType',
      triggers: 'Triggers',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReview: 'number',
      branchJudge: 'boolean',
      checkMoreSize: 'number',
      checkType: 'number',
      lambda: 'string',
      role: 'string',
      ruleScoreType: 'number',
      sayType: 'string',
      scoreNum: 'number',
      scoreNumType: 'number',
      scoreRuleHitType: 'number',
      scoreType: 'number',
      triggers: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NextNodeSituationsConditionGroup extends $tea.Model {
  conditions?: JudgeNodeMetaDesc[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': JudgeNodeMetaDesc },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperatorBasicInfoParam extends $tea.Model {
  answerThreshold?: string;
  antModelInfo?: { [key: string]: string };
  average?: boolean;
  beginType?: string;
  botId?: string;
  caseSensitive?: boolean;
  categoryPathCode?: string;
  checkFirstSentence?: boolean;
  checkType?: number;
  compareOperator?: string;
  contextChatMatch?: boolean;
  customerParam?: JudgeNodeMetaDesc;
  delayTime?: number;
  differentRole?: boolean;
  endType?: string;
  excludes?: string[];
  from?: number;
  fromEnd?: boolean;
  hitTime?: number;
  inSentence?: boolean;
  interval?: number;
  intervalEnd?: number;
  keywordExtension?: number;
  keywordMatchSize?: number;
  keywords?: string[];
  knowledgeInfo?: string;
  knowledgeSentenceNum?: number;
  knowledgeTargetId?: string;
  knowledgeTargetName?: string;
  knowledgeTargetType?: number;
  lgfSentences?: string[];
  maxEmotionChangeValue?: number;
  minWordSize?: number;
  nearDialogue?: boolean;
  notRegex?: string;
  phrase?: string;
  pkey?: string;
  poutputType?: number;
  pvalues?: string[];
  questionThreshold?: string;
  references?: string[];
  regex?: string;
  roleId?: number;
  score?: number;
  similarityThreshold?: number;
  similarlySentences?: string[];
  synonyms?: { [key: string]: string[] };
  target?: number;
  targetRole?: string;
  threshold?: number;
  useEasAlgorithm?: boolean;
  velocity?: number;
  velocityInMint?: number;
  static names(): { [key: string]: string } {
    return {
      answerThreshold: 'AnswerThreshold',
      antModelInfo: 'AntModelInfo',
      average: 'Average',
      beginType: 'BeginType',
      botId: 'BotId',
      caseSensitive: 'Case_sensitive',
      categoryPathCode: 'CategoryPathCode',
      checkFirstSentence: 'CheckFirstSentence',
      checkType: 'CheckType',
      compareOperator: 'CompareOperator',
      contextChatMatch: 'ContextChatMatch',
      customerParam: 'CustomerParam',
      delayTime: 'DelayTime',
      differentRole: 'Different_role',
      endType: 'EndType',
      excludes: 'Excludes',
      from: 'From',
      fromEnd: 'From_end',
      hitTime: 'Hit_time',
      inSentence: 'In_sentence',
      interval: 'Interval',
      intervalEnd: 'IntervalEnd',
      keywordExtension: 'KeywordExtension',
      keywordMatchSize: 'KeywordMatchSize',
      keywords: 'Keywords',
      knowledgeInfo: 'KnowledgeInfo',
      knowledgeSentenceNum: 'KnowledgeSentenceNum',
      knowledgeTargetId: 'KnowledgeTargetId',
      knowledgeTargetName: 'KnowledgeTargetName',
      knowledgeTargetType: 'KnowledgeTargetType',
      lgfSentences: 'LgfSentences',
      maxEmotionChangeValue: 'MaxEmotionChangeValue',
      minWordSize: 'MinWordSize',
      nearDialogue: 'Near_dialogue',
      notRegex: 'NotRegex',
      phrase: 'Phrase',
      pkey: 'Pkey',
      poutputType: 'Poutput_type',
      pvalues: 'Pvalues',
      questionThreshold: 'QuestionThreshold',
      references: 'References',
      regex: 'Regex',
      roleId: 'RoleId',
      score: 'Score',
      similarityThreshold: 'Similarity_threshold',
      similarlySentences: 'SimilarlySentences',
      synonyms: 'Synonyms',
      target: 'Target',
      targetRole: 'Target_role',
      threshold: 'Threshold',
      useEasAlgorithm: 'UseEasAlgorithm',
      velocity: 'Velocity',
      velocityInMint: 'VelocityInMint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerThreshold: 'string',
      antModelInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      average: 'boolean',
      beginType: 'string',
      botId: 'string',
      caseSensitive: 'boolean',
      categoryPathCode: 'string',
      checkFirstSentence: 'boolean',
      checkType: 'number',
      compareOperator: 'string',
      contextChatMatch: 'boolean',
      customerParam: JudgeNodeMetaDesc,
      delayTime: 'number',
      differentRole: 'boolean',
      endType: 'string',
      excludes: { 'type': 'array', 'itemType': 'string' },
      from: 'number',
      fromEnd: 'boolean',
      hitTime: 'number',
      inSentence: 'boolean',
      interval: 'number',
      intervalEnd: 'number',
      keywordExtension: 'number',
      keywordMatchSize: 'number',
      keywords: { 'type': 'array', 'itemType': 'string' },
      knowledgeInfo: 'string',
      knowledgeSentenceNum: 'number',
      knowledgeTargetId: 'string',
      knowledgeTargetName: 'string',
      knowledgeTargetType: 'number',
      lgfSentences: { 'type': 'array', 'itemType': 'string' },
      maxEmotionChangeValue: 'number',
      minWordSize: 'number',
      nearDialogue: 'boolean',
      notRegex: 'string',
      phrase: 'string',
      pkey: 'string',
      poutputType: 'number',
      pvalues: { 'type': 'array', 'itemType': 'string' },
      questionThreshold: 'string',
      references: { 'type': 'array', 'itemType': 'string' },
      regex: 'string',
      roleId: 'number',
      score: 'number',
      similarityThreshold: 'number',
      similarlySentences: { 'type': 'array', 'itemType': 'string' },
      synonyms: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      target: 'number',
      targetRole: 'string',
      threshold: 'number',
      useEasAlgorithm: 'boolean',
      velocity: 'number',
      velocityInMint: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RuleTestDialogueContent extends $tea.Model {
  begin?: number;
  beginTime?: number;
  emotionValue?: number;
  end?: number;
  hourMinSec?: string;
  identity?: string;
  role?: string;
  silenceDuration?: number;
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      beginTime: 'BeginTime',
      emotionValue: 'EmotionValue',
      end: 'End',
      hourMinSec: 'HourMinSec',
      identity: 'Identity',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
      speechRate: 'SpeechRate',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      beginTime: 'number',
      emotionValue: 'number',
      end: 'number',
      hourMinSec: 'string',
      identity: 'string',
      role: 'string',
      silenceDuration: 'number',
      speechRate: 'number',
      words: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SchemeCheckTypeSchemeScoreInfoList extends $tea.Model {
  name?: string;
  rid?: number;
  scoreNum?: number;
  scoreNumType?: number;
  scoreRuleHitType?: number;
  scoreType?: number;
  taskFlowId?: number;
  taskFlowName?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      rid: 'Rid',
      scoreNum: 'ScoreNum',
      scoreNumType: 'ScoreNumType',
      scoreRuleHitType: 'ScoreRuleHitType',
      scoreType: 'ScoreType',
      taskFlowId: 'TaskFlowId',
      taskFlowName: 'TaskFlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      rid: 'number',
      scoreNum: 'number',
      scoreNumType: 'number',
      scoreRuleHitType: 'number',
      scoreType: 'number',
      taskFlowId: 'number',
      taskFlowName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SchemeCheckTypeTaskFlowScoreInfoListSchemeScoreInfoList extends $tea.Model {
  name?: string;
  rid?: number;
  scoreNum?: number;
  scoreNumType?: number;
  scoreRuleHitType?: number;
  scoreType?: number;
  taskFlowId?: number;
  taskFlowName?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      rid: 'Rid',
      scoreNum: 'ScoreNum',
      scoreNumType: 'ScoreNumType',
      scoreRuleHitType: 'ScoreRuleHitType',
      scoreType: 'ScoreType',
      taskFlowId: 'TaskFlowId',
      taskFlowName: 'TaskFlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      rid: 'number',
      scoreNum: 'number',
      scoreNumType: 'number',
      scoreRuleHitType: 'number',
      scoreType: 'number',
      taskFlowId: 'number',
      taskFlowName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SchemeCheckTypeTaskFlowScoreInfoList extends $tea.Model {
  schemeScoreInfoList?: SchemeCheckTypeTaskFlowScoreInfoListSchemeScoreInfoList[];
  taskFlowId?: number;
  taskFlowName?: string;
  taskFlowType?: number;
  static names(): { [key: string]: string } {
    return {
      schemeScoreInfoList: 'SchemeScoreInfoList',
      taskFlowId: 'TaskFlowId',
      taskFlowName: 'TaskFlowName',
      taskFlowType: 'TaskFlowType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemeScoreInfoList: { 'type': 'array', 'itemType': SchemeCheckTypeTaskFlowScoreInfoListSchemeScoreInfoList },
      taskFlowId: 'number',
      taskFlowName: 'string',
      taskFlowType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRuleCategoryResponseBodyData extends $tea.Model {
  select?: boolean;
  static names(): { [key: string]: string } {
    return {
      select: 'Select',
    };
  }

  static types(): { [key: string]: any } {
    return {
      select: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRuleV4ResponseBodyMessages extends $tea.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignReviewerBySessionGroupResponseBodyMessages extends $tea.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSubmitReviewInfoResponseBodyMessages extends $tea.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCheckTypeToSchemeResponseBodyMessages extends $tea.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityCheckSchemeResponseBodyMessages extends $tea.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchemeTaskConfigResponseBodyMessages extends $tea.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelRuleCategoryResponseBodyData extends $tea.Model {
  select?: boolean;
  static names(): { [key: string]: string } {
    return {
      select: 'Select',
    };
  }

  static types(): { [key: string]: any } {
    return {
      select: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityCheckSchemeResponseBodyMessages extends $tea.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleResponseBodyMessages extends $tea.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleV4ResponseBodyMessages extends $tea.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSchemeTaskConfigResponseBodyMessages extends $tea.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrVocabResponseBodyDataWordsWord extends $tea.Model {
  weight?: number;
  word?: string;
  static names(): { [key: string]: string } {
    return {
      weight: 'Weight',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      weight: 'number',
      word: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrVocabResponseBodyDataWords extends $tea.Model {
  word?: GetAsrVocabResponseBodyDataWordsWord[];
  static names(): { [key: string]: string } {
    return {
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      word: { 'type': 'array', 'itemType': GetAsrVocabResponseBodyDataWordsWord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrVocabResponseBodyData extends $tea.Model {
  name?: string;
  words?: GetAsrVocabResponseBodyDataWords;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      words: GetAsrVocabResponseBodyDataWords,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessCategoryListResponseBodyDataBusinessCategoryBasicInfo extends $tea.Model {
  bid?: number;
  businessName?: string;
  serviceType?: number;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      businessName: 'BusinessName',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'number',
      businessName: 'string',
      serviceType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessCategoryListResponseBodyData extends $tea.Model {
  businessCategoryBasicInfo?: GetBusinessCategoryListResponseBodyDataBusinessCategoryBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      businessCategoryBasicInfo: 'BusinessCategoryBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCategoryBasicInfo: { 'type': 'array', 'itemType': GetBusinessCategoryListResponseBodyDataBusinessCategoryBasicInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomizationConfigListResponseBodyDataModelCustomizationDataSetPo extends $tea.Model {
  createTime?: string;
  modeCustomizationId?: string;
  modelId?: number;
  modelName?: string;
  modelStatus?: number;
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modeCustomizationId: 'ModeCustomizationId',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelStatus: 'ModelStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modeCustomizationId: 'string',
      modelId: 'number',
      modelName: 'string',
      modelStatus: 'number',
      taskType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomizationConfigListResponseBodyData extends $tea.Model {
  modelCustomizationDataSetPo?: GetCustomizationConfigListResponseBodyDataModelCustomizationDataSetPo[];
  static names(): { [key: string]: string } {
    return {
      modelCustomizationDataSetPo: 'ModelCustomizationDataSetPo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelCustomizationDataSetPo: { 'type': 'array', 'itemType': GetCustomizationConfigListResponseBodyDataModelCustomizationDataSetPo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHitResultResponseBodyDataResultInfo extends $tea.Model {
  rid?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      rid: 'Rid',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rid: 'number',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHitResultResponseBodyData extends $tea.Model {
  resultInfo?: GetHitResultResponseBodyDataResultInfo[];
  static names(): { [key: string]: string } {
    return {
      resultInfo: 'ResultInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultInfo: { 'type': 'array', 'itemType': GetHitResultResponseBodyDataResultInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSourceLine extends $tea.Model {
  line?: string[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSource extends $tea.Model {
  line?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSourceLine;
  position?: number;
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSourceLine,
      position: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTargetLine extends $tea.Model {
  line?: string[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTarget extends $tea.Model {
  line?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTargetLine;
  position?: number;
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTargetLine,
      position: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDelta extends $tea.Model {
  source?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSource;
  target?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTarget;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      target: 'Target',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSource,
      target: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTarget,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltas extends $tea.Model {
  delta?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDelta[];
  static names(): { [key: string]: string } {
    return {
      delta: 'Delta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delta: { 'type': 'array', 'itemType': GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDelta },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyDataDialoguesDialogue extends $tea.Model {
  begin?: number;
  beginTime?: string;
  deltas?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltas;
  emotionValue?: number;
  end?: number;
  hourMinSec?: string;
  identity?: string;
  incorrectWords?: number;
  role?: string;
  silenceDuration?: number;
  sourceRole?: string;
  sourceWords?: string;
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      beginTime: 'BeginTime',
      deltas: 'Deltas',
      emotionValue: 'EmotionValue',
      end: 'End',
      hourMinSec: 'HourMinSec',
      identity: 'Identity',
      incorrectWords: 'IncorrectWords',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
      sourceRole: 'SourceRole',
      sourceWords: 'SourceWords',
      speechRate: 'SpeechRate',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      beginTime: 'string',
      deltas: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltas,
      emotionValue: 'number',
      end: 'number',
      hourMinSec: 'string',
      identity: 'string',
      incorrectWords: 'number',
      role: 'string',
      silenceDuration: 'number',
      sourceRole: 'string',
      sourceWords: 'string',
      speechRate: 'number',
      words: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyDataDialogues extends $tea.Model {
  dialogue?: GetNextResultToVerifyResponseBodyDataDialoguesDialogue[];
  static names(): { [key: string]: string } {
    return {
      dialogue: 'Dialogue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogue: { 'type': 'array', 'itemType': GetNextResultToVerifyResponseBodyDataDialoguesDialogue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyData extends $tea.Model {
  audioScheme?: string;
  audioURL?: string;
  dialogues?: GetNextResultToVerifyResponseBodyDataDialogues;
  duration?: number;
  fileId?: string;
  fileName?: string;
  incorrectWords?: number;
  index?: number;
  precision?: number;
  status?: number;
  totalCount?: number;
  updateTime?: string;
  verified?: boolean;
  verifiedCount?: number;
  static names(): { [key: string]: string } {
    return {
      audioScheme: 'AudioScheme',
      audioURL: 'AudioURL',
      dialogues: 'Dialogues',
      duration: 'Duration',
      fileId: 'FileId',
      fileName: 'FileName',
      incorrectWords: 'IncorrectWords',
      index: 'Index',
      precision: 'Precision',
      status: 'Status',
      totalCount: 'TotalCount',
      updateTime: 'UpdateTime',
      verified: 'Verified',
      verifiedCount: 'VerifiedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioScheme: 'string',
      audioURL: 'string',
      dialogues: GetNextResultToVerifyResponseBodyDataDialogues,
      duration: 'number',
      fileId: 'string',
      fileName: 'string',
      incorrectWords: 'number',
      index: 'number',
      precision: 'number',
      status: 'number',
      totalCount: 'number',
      updateTime: 'string',
      verified: 'boolean',
      verifiedCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrecisionTaskResponseBodyDataPrecisionsPrecision extends $tea.Model {
  modelId?: number;
  modelName?: string;
  precision?: number;
  status?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      modelName: 'ModelName',
      precision: 'Precision',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'number',
      modelName: 'string',
      precision: 'number',
      status: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrecisionTaskResponseBodyDataPrecisions extends $tea.Model {
  precision?: GetPrecisionTaskResponseBodyDataPrecisionsPrecision[];
  static names(): { [key: string]: string } {
    return {
      precision: 'Precision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      precision: { 'type': 'array', 'itemType': GetPrecisionTaskResponseBodyDataPrecisionsPrecision },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrecisionTaskResponseBodyData extends $tea.Model {
  dataSetId?: number;
  dataSetName?: string;
  duration?: number;
  incorrectWords?: number;
  name?: string;
  precisions?: GetPrecisionTaskResponseBodyDataPrecisions;
  source?: number;
  status?: number;
  taskId?: string;
  totalCount?: number;
  updateTime?: string;
  verifiedCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataSetId: 'DataSetId',
      dataSetName: 'DataSetName',
      duration: 'Duration',
      incorrectWords: 'IncorrectWords',
      name: 'Name',
      precisions: 'Precisions',
      source: 'Source',
      status: 'Status',
      taskId: 'TaskId',
      totalCount: 'TotalCount',
      updateTime: 'UpdateTime',
      verifiedCount: 'VerifiedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSetId: 'number',
      dataSetName: 'string',
      duration: 'number',
      incorrectWords: 'number',
      name: 'string',
      precisions: GetPrecisionTaskResponseBodyDataPrecisions,
      source: 'number',
      status: 'number',
      taskId: 'string',
      totalCount: 'number',
      updateTime: 'string',
      verifiedCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityCheckSchemeResponseBodyDataSchemeCheckTypeList extends $tea.Model {
  checkName?: string;
  checkType?: number;
  enable?: number;
  schemeId?: number;
  score?: number;
  sourceScore?: number;
  static names(): { [key: string]: string } {
    return {
      checkName: 'CheckName',
      checkType: 'CheckType',
      enable: 'Enable',
      schemeId: 'SchemeId',
      score: 'Score',
      sourceScore: 'SourceScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkName: 'string',
      checkType: 'number',
      enable: 'number',
      schemeId: 'number',
      score: 'number',
      sourceScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityCheckSchemeResponseBodyData extends $tea.Model {
  createTime?: string;
  createUserName?: string;
  dataType?: number;
  description?: string;
  name?: string;
  ruleIds?: string[];
  ruleList?: RulesInfo[];
  schemeCheckTypeList?: GetQualityCheckSchemeResponseBodyDataSchemeCheckTypeList[];
  schemeId?: number;
  schemeTemplateId?: number;
  status?: number;
  templateType?: number;
  type?: number;
  updateTime?: string;
  updateUserName?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUserName: 'CreateUserName',
      dataType: 'DataType',
      description: 'Description',
      name: 'Name',
      ruleIds: 'RuleIds',
      ruleList: 'RuleList',
      schemeCheckTypeList: 'SchemeCheckTypeList',
      schemeId: 'SchemeId',
      schemeTemplateId: 'SchemeTemplateId',
      status: 'Status',
      templateType: 'TemplateType',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateUserName: 'UpdateUserName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUserName: 'string',
      dataType: 'number',
      description: 'string',
      name: 'string',
      ruleIds: { 'type': 'array', 'itemType': 'string' },
      ruleList: { 'type': 'array', 'itemType': RulesInfo },
      schemeCheckTypeList: { 'type': 'array', 'itemType': GetQualityCheckSchemeResponseBodyDataSchemeCheckTypeList },
      schemeId: 'number',
      schemeTemplateId: 'number',
      status: 'number',
      templateType: 'number',
      type: 'number',
      updateTime: 'string',
      updateUserName: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoAgent extends $tea.Model {
  id?: string;
  name?: string;
  skillGroup?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      skillGroup: 'SkillGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      skillGroup: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoAsrResultAsrResult extends $tea.Model {
  begin?: number;
  emotionValue?: number;
  end?: number;
  role?: string;
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      role: 'Role',
      speechRate: 'SpeechRate',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      role: 'string',
      speechRate: 'number',
      words: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoAsrResult extends $tea.Model {
  asrResult?: GetResultResponseBodyDataResultInfoAsrResultAsrResult[];
  static names(): { [key: string]: string } {
    return {
      asrResult: 'AsrResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrResult: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfoAsrResultAsrResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeAnchor extends $tea.Model {
  cid?: string;
  hitTime?: number;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      hitTime: 'Hit_time',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: 'string',
      hitTime: 'number',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeRange extends $tea.Model {
  from?: number;
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeTimeRange extends $tea.Model {
  from?: number;
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRange extends $tea.Model {
  absolute?: boolean;
  allSentencesSatisfy?: boolean;
  anchor?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeAnchor;
  range?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeRange;
  role?: string;
  roleId?: number;
  timeRange?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeTimeRange;
  static names(): { [key: string]: string } {
    return {
      absolute: 'Absolute',
      allSentencesSatisfy: 'AllSentencesSatisfy',
      anchor: 'Anchor',
      range: 'Range',
      role: 'Role',
      roleId: 'RoleId',
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      absolute: 'boolean',
      allSentencesSatisfy: 'boolean',
      anchor: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeAnchor,
      range: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeRange,
      role: 'string',
      roleId: 'number',
      timeRange: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeTimeRange,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamExcludes extends $tea.Model {
  exclude?: string[];
  static names(): { [key: string]: string } {
    return {
      exclude: 'Exclude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exclude: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamFlowNodePrerequisiteParam extends $tea.Model {
  nodeId?: number;
  nodeMatchStatus?: number;
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      nodeMatchStatus: 'NodeMatchStatus',
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      nodeMatchStatus: 'number',
      nodeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamIntentModelCheckParmIntentsIntent extends $tea.Model {
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamIntentModelCheckParmIntents extends $tea.Model {
  intent?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamIntentModelCheckParmIntentsIntent[];
  static names(): { [key: string]: string } {
    return {
      intent: 'Intent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intent: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamIntentModelCheckParmIntentsIntent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamIntentModelCheckParm extends $tea.Model {
  intents?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamIntentModelCheckParmIntents;
  modelScene?: string;
  static names(): { [key: string]: string } {
    return {
      intents: 'Intents',
      modelScene: 'ModelScene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intents: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamIntentModelCheckParmIntents,
      modelScene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamKeywords extends $tea.Model {
  keyword?: string[];
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParam extends $tea.Model {
  average?: boolean;
  beginType?: string;
  caseSensitive?: boolean;
  checkFirstSentence?: boolean;
  checkType?: number;
  compareOperator?: string;
  contextChatMatch?: boolean;
  delayTime?: number;
  endType?: string;
  excludes?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamExcludes;
  flowNodePrerequisiteParam?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamFlowNodePrerequisiteParam;
  from?: number;
  fromEnd?: boolean;
  hitTime?: number;
  inSentence?: boolean;
  intentModelCheckParm?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamIntentModelCheckParm;
  interval?: number;
  intervalEnd?: number;
  keywordExtension?: number;
  keywordMatchSize?: number;
  keywords?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamKeywords;
  maxEmotionChangeValue?: number;
  minWordSize?: number;
  nearDialogue?: boolean;
  notRegex?: string;
  phrase?: string;
  regex?: string;
  target?: number;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      average: 'Average',
      beginType: 'BeginType',
      caseSensitive: 'Case_sensitive',
      checkFirstSentence: 'CheckFirstSentence',
      checkType: 'CheckType',
      compareOperator: 'CompareOperator',
      contextChatMatch: 'ContextChatMatch',
      delayTime: 'DelayTime',
      endType: 'EndType',
      excludes: 'Excludes',
      flowNodePrerequisiteParam: 'FlowNodePrerequisiteParam',
      from: 'From',
      fromEnd: 'From_end',
      hitTime: 'Hit_time',
      inSentence: 'In_sentence',
      intentModelCheckParm: 'IntentModelCheckParm',
      interval: 'Interval',
      intervalEnd: 'IntervalEnd',
      keywordExtension: 'KeywordExtension',
      keywordMatchSize: 'KeywordMatchSize',
      keywords: 'Keywords',
      maxEmotionChangeValue: 'MaxEmotionChangeValue',
      minWordSize: 'MinWordSize',
      nearDialogue: 'Near_dialogue',
      notRegex: 'NotRegex',
      phrase: 'Phrase',
      regex: 'Regex',
      target: 'Target',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      average: 'boolean',
      beginType: 'string',
      caseSensitive: 'boolean',
      checkFirstSentence: 'boolean',
      checkType: 'number',
      compareOperator: 'string',
      contextChatMatch: 'boolean',
      delayTime: 'number',
      endType: 'string',
      excludes: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamExcludes,
      flowNodePrerequisiteParam: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamFlowNodePrerequisiteParam,
      from: 'number',
      fromEnd: 'boolean',
      hitTime: 'number',
      inSentence: 'boolean',
      intentModelCheckParm: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamIntentModelCheckParm,
      interval: 'number',
      intervalEnd: 'number',
      keywordExtension: 'number',
      keywordMatchSize: 'number',
      keywords: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamKeywords,
      maxEmotionChangeValue: 'number',
      minWordSize: 'number',
      nearDialogue: 'boolean',
      notRegex: 'string',
      phrase: 'string',
      regex: 'string',
      target: 'number',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperator extends $tea.Model {
  id?: number;
  name?: string;
  oid?: string;
  param?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParam;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      oid: 'Oid',
      param: 'Param',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      oid: 'string',
      param: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParam,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperators extends $tea.Model {
  operator?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperator[];
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperator },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditions extends $tea.Model {
  checkRange?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRange;
  cid?: string;
  exclusion?: number;
  id?: number;
  lambda?: string;
  operators?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperators;
  rid?: string;
  static names(): { [key: string]: string } {
    return {
      checkRange: 'Check_range',
      cid: 'Cid',
      exclusion: 'Exclusion',
      id: 'Id',
      lambda: 'Lambda',
      operators: 'Operators',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkRange: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRange,
      cid: 'string',
      exclusion: 'number',
      id: 'number',
      lambda: 'string',
      operators: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperators,
      rid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditions extends $tea.Model {
  conditions?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditions[];
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitCid extends $tea.Model {
  cid?: string[];
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitKeyWordsKeyWord extends $tea.Model {
  cid?: string;
  from?: number;
  to?: number;
  val?: string;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      from: 'From',
      to: 'To',
      val: 'Val',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: 'string',
      from: 'number',
      to: 'number',
      val: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitKeyWords extends $tea.Model {
  keyWord?: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitKeyWordsKeyWord[];
  static names(): { [key: string]: string } {
    return {
      keyWord: 'KeyWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWord: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitKeyWordsKeyWord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitPhrase extends $tea.Model {
  begin?: number;
  emotionValue?: number;
  end?: number;
  role?: string;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      role: 'Role',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      role: 'string',
      words: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultHitsHit extends $tea.Model {
  cid?: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitCid;
  keyWords?: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitKeyWords;
  phrase?: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitPhrase;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      keyWords: 'KeyWords',
      phrase: 'Phrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitCid,
      keyWords: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitKeyWords,
      phrase: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitPhrase,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultHits extends $tea.Model {
  hit?: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHit[];
  static names(): { [key: string]: string } {
    return {
      hit: 'Hit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hit: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfoHitResultHitResultHitsHit },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResult extends $tea.Model {
  conditions?: GetResultResponseBodyDataResultInfoHitResultHitResultConditions;
  hits?: GetResultResponseBodyDataResultInfoHitResultHitResultHits;
  name?: string;
  reviewResult?: number;
  rid?: string;
  schemeId?: number;
  schemeVersion?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      hits: 'Hits',
      name: 'Name',
      reviewResult: 'ReviewResult',
      rid: 'Rid',
      schemeId: 'SchemeId',
      schemeVersion: 'SchemeVersion',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: GetResultResponseBodyDataResultInfoHitResultHitResultConditions,
      hits: GetResultResponseBodyDataResultInfoHitResultHitResultHits,
      name: 'string',
      reviewResult: 'number',
      rid: 'string',
      schemeId: 'number',
      schemeVersion: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResult extends $tea.Model {
  hitResult?: GetResultResponseBodyDataResultInfoHitResultHitResult[];
  static names(): { [key: string]: string } {
    return {
      hitResult: 'HitResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitResult: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfoHitResultHitResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitScoreHitScore extends $tea.Model {
  ruleId?: string;
  scoreId?: string;
  scoreName?: string;
  scoreNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      scoreId: 'ScoreId',
      scoreName: 'ScoreName',
      scoreNumber: 'ScoreNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
      scoreId: 'string',
      scoreName: 'string',
      scoreNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitScore extends $tea.Model {
  hitScore?: GetResultResponseBodyDataResultInfoHitScoreHitScore[];
  static names(): { [key: string]: string } {
    return {
      hitScore: 'HitScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitScore: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfoHitScoreHitScore },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoRecording extends $tea.Model {
  business?: string;
  callId?: string;
  callTime?: string;
  callType?: number;
  callee?: string;
  caller?: string;
  dataSetName?: string;
  dialogueSize?: number;
  duration?: number;
  id?: string;
  name?: string;
  primaryId?: string;
  remark1?: string;
  remark10?: string;
  remark11?: string;
  remark12?: string;
  remark13?: string;
  remark2?: string;
  remark3?: string;
  remark4?: string;
  remark5?: number;
  remark6?: string;
  remark7?: string;
  remark8?: string;
  remark9?: string;
  taskConfigId?: number;
  taskConfigName?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      business: 'Business',
      callId: 'CallId',
      callTime: 'CallTime',
      callType: 'CallType',
      callee: 'Callee',
      caller: 'Caller',
      dataSetName: 'DataSetName',
      dialogueSize: 'DialogueSize',
      duration: 'Duration',
      id: 'Id',
      name: 'Name',
      primaryId: 'PrimaryId',
      remark1: 'Remark1',
      remark10: 'Remark10',
      remark11: 'Remark11',
      remark12: 'Remark12',
      remark13: 'Remark13',
      remark2: 'Remark2',
      remark3: 'Remark3',
      remark4: 'Remark4',
      remark5: 'Remark5',
      remark6: 'Remark6',
      remark7: 'Remark7',
      remark8: 'Remark8',
      remark9: 'Remark9',
      taskConfigId: 'TaskConfigId',
      taskConfigName: 'TaskConfigName',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      business: 'string',
      callId: 'string',
      callTime: 'string',
      callType: 'number',
      callee: 'string',
      caller: 'string',
      dataSetName: 'string',
      dialogueSize: 'number',
      duration: 'number',
      id: 'string',
      name: 'string',
      primaryId: 'string',
      remark1: 'string',
      remark10: 'string',
      remark11: 'string',
      remark12: 'string',
      remark13: 'string',
      remark2: 'string',
      remark3: 'string',
      remark4: 'string',
      remark5: 'number',
      remark6: 'string',
      remark7: 'string',
      remark8: 'string',
      remark9: 'string',
      taskConfigId: 'number',
      taskConfigName: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoSchemeIdList extends $tea.Model {
  schemeIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      schemeIdList: 'SchemeIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemeIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoSchemeNameList extends $tea.Model {
  schemeNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      schemeNameList: 'SchemeNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemeNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfo extends $tea.Model {
  agent?: GetResultResponseBodyDataResultInfoAgent;
  asrResult?: GetResultResponseBodyDataResultInfoAsrResult;
  assignmentTime?: string;
  comments?: string;
  createTime?: string;
  createTimeLong?: string;
  errorMessage?: string;
  hitResult?: GetResultResponseBodyDataResultInfoHitResult;
  hitScore?: GetResultResponseBodyDataResultInfoHitScore;
  lastDataId?: string;
  recording?: GetResultResponseBodyDataResultInfoRecording;
  resolver?: string;
  reviewResult?: number;
  reviewStatus?: number;
  reviewTime?: string;
  reviewTimeLong?: string;
  reviewType?: number;
  reviewer?: string;
  schemeIdList?: GetResultResponseBodyDataResultInfoSchemeIdList;
  schemeNameList?: GetResultResponseBodyDataResultInfoSchemeNameList;
  score?: number;
  status?: number;
  taskId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
      asrResult: 'AsrResult',
      assignmentTime: 'AssignmentTime',
      comments: 'Comments',
      createTime: 'CreateTime',
      createTimeLong: 'CreateTimeLong',
      errorMessage: 'ErrorMessage',
      hitResult: 'HitResult',
      hitScore: 'HitScore',
      lastDataId: 'LastDataId',
      recording: 'Recording',
      resolver: 'Resolver',
      reviewResult: 'ReviewResult',
      reviewStatus: 'ReviewStatus',
      reviewTime: 'ReviewTime',
      reviewTimeLong: 'ReviewTimeLong',
      reviewType: 'ReviewType',
      reviewer: 'Reviewer',
      schemeIdList: 'SchemeIdList',
      schemeNameList: 'SchemeNameList',
      score: 'Score',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: GetResultResponseBodyDataResultInfoAgent,
      asrResult: GetResultResponseBodyDataResultInfoAsrResult,
      assignmentTime: 'string',
      comments: 'string',
      createTime: 'string',
      createTimeLong: 'string',
      errorMessage: 'string',
      hitResult: GetResultResponseBodyDataResultInfoHitResult,
      hitScore: GetResultResponseBodyDataResultInfoHitScore,
      lastDataId: 'string',
      recording: GetResultResponseBodyDataResultInfoRecording,
      resolver: 'string',
      reviewResult: 'number',
      reviewStatus: 'number',
      reviewTime: 'string',
      reviewTimeLong: 'string',
      reviewType: 'number',
      reviewer: 'string',
      schemeIdList: GetResultResponseBodyDataResultInfoSchemeIdList,
      schemeNameList: GetResultResponseBodyDataResultInfoSchemeNameList,
      score: 'number',
      status: 'number',
      taskId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyData extends $tea.Model {
  resultInfo?: GetResultResponseBodyDataResultInfo[];
  static names(): { [key: string]: string } {
    return {
      resultInfo: 'ResultInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultInfo: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataDialoguesDialogue extends $tea.Model {
  begin?: number;
  beginTime?: string;
  emotionValue?: number;
  end?: number;
  hourMinSec?: string;
  identity?: string;
  role?: string;
  silenceDuration?: number;
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      beginTime: 'BeginTime',
      emotionValue: 'EmotionValue',
      end: 'End',
      hourMinSec: 'HourMinSec',
      identity: 'Identity',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
      speechRate: 'SpeechRate',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      beginTime: 'string',
      emotionValue: 'number',
      end: 'number',
      hourMinSec: 'string',
      identity: 'string',
      role: 'string',
      silenceDuration: 'number',
      speechRate: 'number',
      words: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataDialogues extends $tea.Model {
  dialogue?: GetResultToReviewResponseBodyDataDialoguesDialogue[];
  static names(): { [key: string]: string } {
    return {
      dialogue: 'Dialogue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogue: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataDialoguesDialogue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoComplainHistoriesComplainHistories extends $tea.Model {
  comments?: string;
  operationTime?: string;
  operationType?: number;
  operator?: number;
  operatorName?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      operationTime: 'OperationTime',
      operationType: 'OperationType',
      operator: 'Operator',
      operatorName: 'OperatorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      operationTime: 'string',
      operationType: 'number',
      operator: 'number',
      operatorName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoComplainHistories extends $tea.Model {
  complainHistories?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoComplainHistoriesComplainHistories[];
  static names(): { [key: string]: string } {
    return {
      complainHistories: 'ComplainHistories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complainHistories: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoComplainHistoriesComplainHistories },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoCid extends $tea.Model {
  cid?: string[];
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWordsKeyWord extends $tea.Model {
  cid?: string;
  customizeCode?: string;
  from?: number;
  pid?: number;
  tid?: string;
  to?: number;
  val?: string;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      customizeCode: 'CustomizeCode',
      from: 'From',
      pid: 'Pid',
      tid: 'Tid',
      to: 'To',
      val: 'Val',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: 'string',
      customizeCode: 'string',
      from: 'number',
      pid: 'number',
      tid: 'string',
      to: 'number',
      val: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWords extends $tea.Model {
  keyWord?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWordsKeyWord[];
  static names(): { [key: string]: string } {
    return {
      keyWord: 'KeyWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWord: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWordsKeyWord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoPhrase extends $tea.Model {
  begin?: number;
  emotionValue?: number;
  end?: number;
  identity?: string;
  pid?: number;
  role?: string;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      identity: 'Identity',
      pid: 'Pid',
      role: 'Role',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      identity: 'string',
      pid: 'number',
      role: 'string',
      words: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfo extends $tea.Model {
  cid?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoCid;
  keyWords?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWords;
  phrase?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoPhrase;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      keyWords: 'KeyWords',
      phrase: 'Phrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoCid,
      keyWords: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWords,
      phrase: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoPhrase,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoList extends $tea.Model {
  conditionHitInfo?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfo[];
  static names(): { [key: string]: string } {
    return {
      conditionHitInfo: 'ConditionHitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionHitInfo: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfo extends $tea.Model {
  hitId?: string;
  reviewResult?: number;
  reviewTime?: string;
  reviewer?: string;
  rid?: number;
  static names(): { [key: string]: string } {
    return {
      hitId: 'HitId',
      reviewResult: 'ReviewResult',
      reviewTime: 'ReviewTime',
      reviewer: 'Reviewer',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitId: 'string',
      reviewResult: 'number',
      reviewTime: 'string',
      reviewer: 'string',
      rid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfo extends $tea.Model {
  autoReview?: number;
  complainHistories?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoComplainHistories;
  complainable?: boolean;
  conditionHitInfoList?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoList;
  reviewInfo?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfo;
  rid?: number;
  ruleName?: string;
  scoreId?: number;
  scoreNum?: number;
  scoreSubId?: number;
  scoreSubName?: string;
  static names(): { [key: string]: string } {
    return {
      autoReview: 'AutoReview',
      complainHistories: 'ComplainHistories',
      complainable: 'Complainable',
      conditionHitInfoList: 'ConditionHitInfoList',
      reviewInfo: 'ReviewInfo',
      rid: 'Rid',
      ruleName: 'RuleName',
      scoreId: 'ScoreId',
      scoreNum: 'ScoreNum',
      scoreSubId: 'ScoreSubId',
      scoreSubName: 'ScoreSubName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReview: 'number',
      complainHistories: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoComplainHistories,
      complainable: 'boolean',
      conditionHitInfoList: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoList,
      reviewInfo: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfo,
      rid: 'number',
      ruleName: 'string',
      scoreId: 'number',
      scoreNum: 'number',
      scoreSubId: 'number',
      scoreSubName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoList extends $tea.Model {
  hitRuleReviewInfo?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfo[];
  static names(): { [key: string]: string } {
    return {
      hitRuleReviewInfo: 'HitRuleReviewInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitRuleReviewInfo: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfoComplainHistoriesComplainHistories extends $tea.Model {
  comments?: string;
  operationTime?: string;
  operationType?: number;
  operator?: number;
  operatorName?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      operationTime: 'OperationTime',
      operationType: 'OperationType',
      operator: 'Operator',
      operatorName: 'OperatorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      operationTime: 'string',
      operationType: 'number',
      operator: 'number',
      operatorName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfoComplainHistories extends $tea.Model {
  complainHistories?: GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfoComplainHistoriesComplainHistories[];
  static names(): { [key: string]: string } {
    return {
      complainHistories: 'ComplainHistories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complainHistories: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfoComplainHistoriesComplainHistories },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfo extends $tea.Model {
  complainHistories?: GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfoComplainHistories;
  complainable?: boolean;
  scoreId?: number;
  scoreNum?: number;
  scoreSubId?: number;
  scoreSubName?: string;
  static names(): { [key: string]: string } {
    return {
      complainHistories: 'ComplainHistories',
      complainable: 'Complainable',
      scoreId: 'ScoreId',
      scoreNum: 'ScoreNum',
      scoreSubId: 'ScoreSubId',
      scoreSubName: 'ScoreSubName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complainHistories: GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfoComplainHistories,
      complainable: 'boolean',
      scoreId: 'number',
      scoreNum: 'number',
      scoreSubId: 'number',
      scoreSubName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataManualScoreInfoList extends $tea.Model {
  manualScoreInfo?: GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfo[];
  static names(): { [key: string]: string } {
    return {
      manualScoreInfo: 'ManualScoreInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      manualScoreInfo: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataReviewHistoryListReviewHistory extends $tea.Model {
  complainResult?: number;
  oldScore?: number;
  operatorName?: string;
  reviewResult?: number;
  score?: number;
  timeStr?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      complainResult: 'ComplainResult',
      oldScore: 'OldScore',
      operatorName: 'OperatorName',
      reviewResult: 'ReviewResult',
      score: 'Score',
      timeStr: 'TimeStr',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complainResult: 'number',
      oldScore: 'number',
      operatorName: 'string',
      reviewResult: 'number',
      score: 'number',
      timeStr: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataReviewHistoryList extends $tea.Model {
  reviewHistory?: GetResultToReviewResponseBodyDataReviewHistoryListReviewHistory[];
  static names(): { [key: string]: string } {
    return {
      reviewHistory: 'ReviewHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewHistory: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataReviewHistoryListReviewHistory },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyData extends $tea.Model {
  audioScheme?: string;
  audioURL?: string;
  comments?: string;
  dialogues?: GetResultToReviewResponseBodyDataDialogues;
  fileId?: string;
  fileMergeName?: string;
  hitRuleReviewInfoList?: GetResultToReviewResponseBodyDataHitRuleReviewInfoList;
  manualScoreInfoList?: GetResultToReviewResponseBodyDataManualScoreInfoList;
  reviewHistoryList?: GetResultToReviewResponseBodyDataReviewHistoryList;
  status?: number;
  totalScore?: number;
  vid?: string;
  static names(): { [key: string]: string } {
    return {
      audioScheme: 'AudioScheme',
      audioURL: 'AudioURL',
      comments: 'Comments',
      dialogues: 'Dialogues',
      fileId: 'FileId',
      fileMergeName: 'FileMergeName',
      hitRuleReviewInfoList: 'HitRuleReviewInfoList',
      manualScoreInfoList: 'ManualScoreInfoList',
      reviewHistoryList: 'ReviewHistoryList',
      status: 'Status',
      totalScore: 'TotalScore',
      vid: 'Vid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioScheme: 'string',
      audioURL: 'string',
      comments: 'string',
      dialogues: GetResultToReviewResponseBodyDataDialogues,
      fileId: 'string',
      fileMergeName: 'string',
      hitRuleReviewInfoList: GetResultToReviewResponseBodyDataHitRuleReviewInfoList,
      manualScoreInfoList: GetResultToReviewResponseBodyDataManualScoreInfoList,
      reviewHistoryList: GetResultToReviewResponseBodyDataReviewHistoryList,
      status: 'number',
      totalScore: 'number',
      vid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyDataRulesRuleInfoBusinessCategoryNameList extends $tea.Model {
  businessCategoryNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      businessCategoryNameList: 'BusinessCategoryNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCategoryNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyDataRulesRuleInfo extends $tea.Model {
  autoReview?: number;
  businessCategoryNameList?: GetRuleResponseBodyDataRulesRuleInfoBusinessCategoryNameList;
  comments?: string;
  createEmpid?: string;
  createTime?: string;
  endTime?: string;
  isDelete?: number;
  isOnline?: number;
  lastUpdateEmpid?: string;
  lastUpdateTime?: string;
  name?: string;
  rid?: string;
  ruleLambda?: string;
  ruleScoreType?: number;
  scoreId?: number;
  scoreName?: string;
  scoreSubId?: number;
  scoreSubName?: string;
  startTime?: string;
  status?: number;
  type?: number;
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      autoReview: 'AutoReview',
      businessCategoryNameList: 'BusinessCategoryNameList',
      comments: 'Comments',
      createEmpid: 'CreateEmpid',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      isDelete: 'IsDelete',
      isOnline: 'IsOnline',
      lastUpdateEmpid: 'LastUpdateEmpid',
      lastUpdateTime: 'LastUpdateTime',
      name: 'Name',
      rid: 'Rid',
      ruleLambda: 'RuleLambda',
      ruleScoreType: 'RuleScoreType',
      scoreId: 'ScoreId',
      scoreName: 'ScoreName',
      scoreSubId: 'ScoreSubId',
      scoreSubName: 'ScoreSubName',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReview: 'number',
      businessCategoryNameList: GetRuleResponseBodyDataRulesRuleInfoBusinessCategoryNameList,
      comments: 'string',
      createEmpid: 'string',
      createTime: 'string',
      endTime: 'string',
      isDelete: 'number',
      isOnline: 'number',
      lastUpdateEmpid: 'string',
      lastUpdateTime: 'string',
      name: 'string',
      rid: 'string',
      ruleLambda: 'string',
      ruleScoreType: 'number',
      scoreId: 'number',
      scoreName: 'string',
      scoreSubId: 'number',
      scoreSubName: 'string',
      startTime: 'string',
      status: 'number',
      type: 'number',
      weight: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyDataRules extends $tea.Model {
  ruleInfo?: GetRuleResponseBodyDataRulesRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleInfo: 'RuleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleInfo: { 'type': 'array', 'itemType': GetRuleResponseBodyDataRulesRuleInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyData extends $tea.Model {
  rules?: GetRuleResponseBodyDataRules;
  static names(): { [key: string]: string } {
    return {
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rules: GetRuleResponseBodyDataRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleCategoryResponseBodyDataRuleCountInfo extends $tea.Model {
  select?: boolean;
  type?: number;
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      select: 'Select',
      type: 'Type',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      select: 'boolean',
      type: 'number',
      typeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleCategoryResponseBodyData extends $tea.Model {
  ruleCountInfo?: GetRuleCategoryResponseBodyDataRuleCountInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleCountInfo: 'RuleCountInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleCountInfo: { 'type': 'array', 'itemType': GetRuleCategoryResponseBodyDataRuleCountInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRangeAnchor extends $tea.Model {
  anchorCid?: string;
  hitTime?: number;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      anchorCid: 'AnchorCid',
      hitTime: 'HitTime',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorCid: 'string',
      hitTime: 'number',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRangeRange extends $tea.Model {
  from?: number;
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRange extends $tea.Model {
  absolute?: boolean;
  anchor?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRangeAnchor;
  range?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRangeRange;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      absolute: 'Absolute',
      anchor: 'Anchor',
      range: 'Range',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      absolute: 'boolean',
      anchor: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRangeAnchor,
      range: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRangeRange,
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamAntModelInfo extends $tea.Model {
  antModelInfo?: string[];
  static names(): { [key: string]: string } {
    return {
      antModelInfo: 'AntModelInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antModelInfo: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamExcludes extends $tea.Model {
  excludes?: string[];
  static names(): { [key: string]: string } {
    return {
      excludes: 'Excludes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamOperKeyWords extends $tea.Model {
  operKeyWord?: string[];
  static names(): { [key: string]: string } {
    return {
      operKeyWord: 'OperKeyWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operKeyWord: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamPvalues extends $tea.Model {
  pvalues?: string[];
  static names(): { [key: string]: string } {
    return {
      pvalues: 'Pvalues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pvalues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamReferences extends $tea.Model {
  reference?: string[];
  static names(): { [key: string]: string } {
    return {
      reference: 'Reference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reference: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamSimilarlySentences extends $tea.Model {
  similarlySentence?: string[];
  static names(): { [key: string]: string } {
    return {
      similarlySentence: 'SimilarlySentence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      similarlySentence: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParam extends $tea.Model {
  antModelInfo?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamAntModelInfo;
  average?: boolean;
  beginType?: string;
  checkType?: number;
  compareOperator?: string;
  contextChatMatch?: boolean;
  delayTime?: number;
  differentRole?: boolean;
  excludes?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamExcludes;
  from?: number;
  fromEnd?: boolean;
  hitTime?: number;
  inSentence?: boolean;
  interval?: number;
  keywordExtension?: boolean;
  keywordMatchSize?: number;
  maxEmotionChangeValue?: number;
  minWordSize?: number;
  notRegex?: string;
  operKeyWords?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamOperKeyWords;
  phrase?: string;
  pvalues?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamPvalues;
  references?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamReferences;
  regex?: string;
  score?: number;
  similarityThreshold?: number;
  similarlySentences?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamSimilarlySentences;
  target?: number;
  targetRole?: string;
  threshold?: number;
  velocityInMint?: number;
  static names(): { [key: string]: string } {
    return {
      antModelInfo: 'AntModelInfo',
      average: 'Average',
      beginType: 'BeginType',
      checkType: 'CheckType',
      compareOperator: 'CompareOperator',
      contextChatMatch: 'ContextChatMatch',
      delayTime: 'DelayTime',
      differentRole: 'DifferentRole',
      excludes: 'Excludes',
      from: 'From',
      fromEnd: 'FromEnd',
      hitTime: 'HitTime',
      inSentence: 'InSentence',
      interval: 'Interval',
      keywordExtension: 'KeywordExtension',
      keywordMatchSize: 'KeywordMatchSize',
      maxEmotionChangeValue: 'MaxEmotionChangeValue',
      minWordSize: 'MinWordSize',
      notRegex: 'NotRegex',
      operKeyWords: 'OperKeyWords',
      phrase: 'Phrase',
      pvalues: 'Pvalues',
      references: 'References',
      regex: 'Regex',
      score: 'Score',
      similarityThreshold: 'Similarity_threshold',
      similarlySentences: 'SimilarlySentences',
      target: 'Target',
      targetRole: 'TargetRole',
      threshold: 'Threshold',
      velocityInMint: 'VelocityInMint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antModelInfo: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamAntModelInfo,
      average: 'boolean',
      beginType: 'string',
      checkType: 'number',
      compareOperator: 'string',
      contextChatMatch: 'boolean',
      delayTime: 'number',
      differentRole: 'boolean',
      excludes: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamExcludes,
      from: 'number',
      fromEnd: 'boolean',
      hitTime: 'number',
      inSentence: 'boolean',
      interval: 'number',
      keywordExtension: 'boolean',
      keywordMatchSize: 'number',
      maxEmotionChangeValue: 'number',
      minWordSize: 'number',
      notRegex: 'string',
      operKeyWords: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamOperKeyWords,
      phrase: 'string',
      pvalues: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamPvalues,
      references: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamReferences,
      regex: 'string',
      score: 'number',
      similarityThreshold: 'number',
      similarlySentences: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamSimilarlySentences,
      target: 'number',
      targetRole: 'string',
      threshold: 'number',
      velocityInMint: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfo extends $tea.Model {
  oid?: string;
  operName?: string;
  param?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParam;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      oid: 'Oid',
      operName: 'OperName',
      param: 'Param',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oid: 'string',
      operName: 'string',
      param: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParam,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperators extends $tea.Model {
  operatorBasicInfo?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      operatorBasicInfo: 'OperatorBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorBasicInfo: { 'type': 'array', 'itemType': GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfo extends $tea.Model {
  checkRange?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRange;
  conditionInfoCid?: string;
  operLambda?: string;
  operators?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperators;
  static names(): { [key: string]: string } {
    return {
      checkRange: 'CheckRange',
      conditionInfoCid: 'ConditionInfoCid',
      operLambda: 'OperLambda',
      operators: 'Operators',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkRange: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRange,
      conditionInfoCid: 'string',
      operLambda: 'string',
      operators: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperators,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditions extends $tea.Model {
  conditionBasicInfo?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      conditionBasicInfo: 'ConditionBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionBasicInfo: { 'type': 'array', 'itemType': GetRuleDetailResponseBodyDataConditionsConditionBasicInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataRulesRuleBasicInfoBusinessCategoriesBusinessCategoryBasicInfo extends $tea.Model {
  bid?: number;
  businessName?: string;
  serviceType?: number;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      businessName: 'BusinessName',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'number',
      businessName: 'string',
      serviceType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataRulesRuleBasicInfoBusinessCategories extends $tea.Model {
  businessCategoryBasicInfo?: GetRuleDetailResponseBodyDataRulesRuleBasicInfoBusinessCategoriesBusinessCategoryBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      businessCategoryBasicInfo: 'BusinessCategoryBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCategoryBasicInfo: { 'type': 'array', 'itemType': GetRuleDetailResponseBodyDataRulesRuleBasicInfoBusinessCategoriesBusinessCategoryBasicInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataRulesRuleBasicInfoTriggers extends $tea.Model {
  trigger?: string[];
  static names(): { [key: string]: string } {
    return {
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trigger: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataRulesRuleBasicInfo extends $tea.Model {
  businessCategories?: GetRuleDetailResponseBodyDataRulesRuleBasicInfoBusinessCategories;
  rid?: string;
  ruleLambda?: string;
  triggers?: GetRuleDetailResponseBodyDataRulesRuleBasicInfoTriggers;
  static names(): { [key: string]: string } {
    return {
      businessCategories: 'BusinessCategories',
      rid: 'Rid',
      ruleLambda: 'RuleLambda',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCategories: GetRuleDetailResponseBodyDataRulesRuleBasicInfoBusinessCategories,
      rid: 'string',
      ruleLambda: 'string',
      triggers: GetRuleDetailResponseBodyDataRulesRuleBasicInfoTriggers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataRules extends $tea.Model {
  ruleBasicInfo?: GetRuleDetailResponseBodyDataRulesRuleBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleBasicInfo: 'RuleBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleBasicInfo: { 'type': 'array', 'itemType': GetRuleDetailResponseBodyDataRulesRuleBasicInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyData extends $tea.Model {
  conditions?: GetRuleDetailResponseBodyDataConditions;
  count?: number;
  pageNumber?: number;
  pageSize?: number;
  rules?: GetRuleDetailResponseBodyDataRules;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      count: 'Count',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: GetRuleDetailResponseBodyDataConditions,
      count: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      rules: GetRuleDetailResponseBodyDataRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRulesCountListResponseBodyData extends $tea.Model {
  data?: string[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRulesCountListResponseBodyMessages extends $tea.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScoreInfoResponseBodyDataScorePoScoreInfosScoreParam extends $tea.Model {
  scoreNum?: number;
  scoreSubId?: number;
  scoreSubName?: string;
  scoreType?: number;
  static names(): { [key: string]: string } {
    return {
      scoreNum: 'ScoreNum',
      scoreSubId: 'ScoreSubId',
      scoreSubName: 'ScoreSubName',
      scoreType: 'ScoreType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreNum: 'number',
      scoreSubId: 'number',
      scoreSubName: 'string',
      scoreType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScoreInfoResponseBodyDataScorePoScoreInfos extends $tea.Model {
  scoreParam?: GetScoreInfoResponseBodyDataScorePoScoreInfosScoreParam[];
  static names(): { [key: string]: string } {
    return {
      scoreParam: 'ScoreParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreParam: { 'type': 'array', 'itemType': GetScoreInfoResponseBodyDataScorePoScoreInfosScoreParam },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScoreInfoResponseBodyDataScorePo extends $tea.Model {
  scoreId?: number;
  scoreInfos?: GetScoreInfoResponseBodyDataScorePoScoreInfos;
  scoreName?: string;
  static names(): { [key: string]: string } {
    return {
      scoreId: 'ScoreId',
      scoreInfos: 'ScoreInfos',
      scoreName: 'ScoreName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreId: 'number',
      scoreInfos: GetScoreInfoResponseBodyDataScorePoScoreInfos,
      scoreName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScoreInfoResponseBodyData extends $tea.Model {
  scorePo?: GetScoreInfoResponseBodyDataScorePo[];
  static names(): { [key: string]: string } {
    return {
      scorePo: 'ScorePo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scorePo: { 'type': 'array', 'itemType': GetScoreInfoResponseBodyDataScorePo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupConfigResponseBodyDataAllRuleListRuleNameInfo extends $tea.Model {
  rid?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      rid: 'Rid',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rid: 'number',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupConfigResponseBodyDataAllRuleList extends $tea.Model {
  ruleNameInfo?: GetSkillGroupConfigResponseBodyDataAllRuleListRuleNameInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleNameInfo: 'RuleNameInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleNameInfo: { 'type': 'array', 'itemType': GetSkillGroupConfigResponseBodyDataAllRuleListRuleNameInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupConfigResponseBodyDataRuleListRuleNameInfo extends $tea.Model {
  rid?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      rid: 'Rid',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rid: 'number',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupConfigResponseBodyDataRuleList extends $tea.Model {
  ruleNameInfo?: GetSkillGroupConfigResponseBodyDataRuleListRuleNameInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleNameInfo: 'RuleNameInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleNameInfo: { 'type': 'array', 'itemType': GetSkillGroupConfigResponseBodyDataRuleListRuleNameInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupConfigResponseBodyData extends $tea.Model {
  allContentQualityCheck?: number;
  allRids?: string;
  allRuleList?: GetSkillGroupConfigResponseBodyDataAllRuleList;
  createTime?: string;
  id?: number;
  instanceId?: string;
  modelId?: number;
  modelName?: string;
  name?: string;
  qualityCheckType?: number;
  rid?: string;
  ruleList?: GetSkillGroupConfigResponseBodyDataRuleList;
  skillGroupFrom?: number;
  skillGroupId?: string;
  skillGroupName?: string;
  status?: number;
  type?: number;
  updateTime?: string;
  vocabId?: number;
  vocabName?: string;
  static names(): { [key: string]: string } {
    return {
      allContentQualityCheck: 'AllContentQualityCheck',
      allRids: 'AllRids',
      allRuleList: 'AllRuleList',
      createTime: 'CreateTime',
      id: 'Id',
      instanceId: 'InstanceId',
      modelId: 'ModelId',
      modelName: 'ModelName',
      name: 'Name',
      qualityCheckType: 'QualityCheckType',
      rid: 'Rid',
      ruleList: 'RuleList',
      skillGroupFrom: 'SkillGroupFrom',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
      vocabId: 'VocabId',
      vocabName: 'VocabName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allContentQualityCheck: 'number',
      allRids: 'string',
      allRuleList: GetSkillGroupConfigResponseBodyDataAllRuleList,
      createTime: 'string',
      id: 'number',
      instanceId: 'string',
      modelId: 'number',
      modelName: 'string',
      name: 'string',
      qualityCheckType: 'number',
      rid: 'string',
      ruleList: GetSkillGroupConfigResponseBodyDataRuleList,
      skillGroupFrom: 'number',
      skillGroupId: 'string',
      skillGroupName: 'string',
      status: 'number',
      type: 'number',
      updateTime: 'string',
      vocabId: 'number',
      vocabName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataAgent extends $tea.Model {
  id?: string;
  name?: string;
  skillGroup?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      skillGroup: 'SkillGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      skillGroup: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataAsrResult extends $tea.Model {
  begin?: number;
  emotionValue?: number;
  end?: number;
  role?: string;
  silenceDuration?: number;
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
      speechRate: 'SpeechRate',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      role: 'string',
      silenceDuration: 'number',
      speechRate: 'number',
      words: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataHitResultHitsKeyWords extends $tea.Model {
  cid?: string;
  from?: number;
  to?: number;
  val?: string;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      from: 'From',
      to: 'To',
      val: 'Val',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: 'string',
      from: 'number',
      to: 'number',
      val: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataHitResultHitsPhrase extends $tea.Model {
  begin?: number;
  emotionValue?: number;
  end?: number;
  role?: string;
  silenceDuration?: number;
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
      speechRate: 'SpeechRate',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      role: 'string',
      silenceDuration: 'number',
      speechRate: 'number',
      words: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataHitResultHits extends $tea.Model {
  cid?: string[];
  keyWords?: GetSyncResultResponseBodyDataHitResultHitsKeyWords[];
  phrase?: GetSyncResultResponseBodyDataHitResultHitsPhrase;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      keyWords: 'KeyWords',
      phrase: 'Phrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: { 'type': 'array', 'itemType': 'string' },
      keyWords: { 'type': 'array', 'itemType': GetSyncResultResponseBodyDataHitResultHitsKeyWords },
      phrase: GetSyncResultResponseBodyDataHitResultHitsPhrase,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataHitResult extends $tea.Model {
  hits?: GetSyncResultResponseBodyDataHitResultHits[];
  name?: string;
  reviewResult?: number;
  rid?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      hits: 'Hits',
      name: 'Name',
      reviewResult: 'ReviewResult',
      rid: 'Rid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hits: { 'type': 'array', 'itemType': GetSyncResultResponseBodyDataHitResultHits },
      name: 'string',
      reviewResult: 'number',
      rid: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataRecording extends $tea.Model {
  business?: string;
  callId?: string;
  callTime?: string;
  callType?: number;
  callee?: string;
  caller?: string;
  dataSetName?: string;
  duration?: number;
  durationAudio?: number;
  id?: string;
  name?: string;
  primaryId?: string;
  remark1?: string;
  remark2?: string;
  remark3?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      business: 'Business',
      callId: 'CallId',
      callTime: 'CallTime',
      callType: 'CallType',
      callee: 'Callee',
      caller: 'Caller',
      dataSetName: 'DataSetName',
      duration: 'Duration',
      durationAudio: 'DurationAudio',
      id: 'Id',
      name: 'Name',
      primaryId: 'PrimaryId',
      remark1: 'Remark1',
      remark2: 'Remark2',
      remark3: 'Remark3',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      business: 'string',
      callId: 'string',
      callTime: 'string',
      callType: 'number',
      callee: 'string',
      caller: 'string',
      dataSetName: 'string',
      duration: 'number',
      durationAudio: 'number',
      id: 'string',
      name: 'string',
      primaryId: 'string',
      remark1: 'string',
      remark2: 'string',
      remark3: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyData extends $tea.Model {
  agent?: GetSyncResultResponseBodyDataAgent;
  asrResult?: GetSyncResultResponseBodyDataAsrResult[];
  comments?: string;
  createTime?: string;
  errorMessage?: string;
  hitResult?: GetSyncResultResponseBodyDataHitResult[];
  recording?: GetSyncResultResponseBodyDataRecording;
  resolver?: string;
  reviewResult?: number;
  reviewStatus?: number;
  reviewer?: string;
  score?: number;
  status?: number;
  taskId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
      asrResult: 'AsrResult',
      comments: 'Comments',
      createTime: 'CreateTime',
      errorMessage: 'ErrorMessage',
      hitResult: 'HitResult',
      recording: 'Recording',
      resolver: 'Resolver',
      reviewResult: 'ReviewResult',
      reviewStatus: 'ReviewStatus',
      reviewer: 'Reviewer',
      score: 'Score',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: GetSyncResultResponseBodyDataAgent,
      asrResult: { 'type': 'array', 'itemType': GetSyncResultResponseBodyDataAsrResult },
      comments: 'string',
      createTime: 'string',
      errorMessage: 'string',
      hitResult: { 'type': 'array', 'itemType': GetSyncResultResponseBodyDataHitResult },
      recording: GetSyncResultResponseBodyDataRecording,
      resolver: 'string',
      reviewResult: 'number',
      reviewStatus: 'number',
      reviewer: 'string',
      score: 'number',
      status: 'number',
      taskId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThesaurusBySynonymForApiResponseBodyDataThesaurusPoSynonymList extends $tea.Model {
  synonymList?: string[];
  static names(): { [key: string]: string } {
    return {
      synonymList: 'SynonymList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      synonymList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThesaurusBySynonymForApiResponseBodyDataThesaurusPo extends $tea.Model {
  business?: string;
  id?: number;
  synonymList?: GetThesaurusBySynonymForApiResponseBodyDataThesaurusPoSynonymList;
  static names(): { [key: string]: string } {
    return {
      business: 'Business',
      id: 'Id',
      synonymList: 'SynonymList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      business: 'string',
      id: 'number',
      synonymList: GetThesaurusBySynonymForApiResponseBodyDataThesaurusPoSynonymList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThesaurusBySynonymForApiResponseBodyData extends $tea.Model {
  thesaurusPo?: GetThesaurusBySynonymForApiResponseBodyDataThesaurusPo[];
  static names(): { [key: string]: string } {
    return {
      thesaurusPo: 'ThesaurusPo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thesaurusPo: { 'type': 'array', 'itemType': GetThesaurusBySynonymForApiResponseBodyDataThesaurusPo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWarningStrategyConfigResponseBodyDataWarningStrategyListWarningStrategyListRange extends $tea.Model {
  rangeNum?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      rangeNum: 'RangeNum',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rangeNum: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWarningStrategyConfigResponseBodyDataWarningStrategyListWarningStrategyList extends $tea.Model {
  code?: string;
  duration?: number;
  durationExpression?: number;
  hitNumber?: number;
  hitNumberExpression?: number;
  hitRuleList?: string;
  hitType?: number;
  id?: number;
  range?: GetWarningStrategyConfigResponseBodyDataWarningStrategyListWarningStrategyListRange;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      duration: 'Duration',
      durationExpression: 'DurationExpression',
      hitNumber: 'HitNumber',
      hitNumberExpression: 'HitNumberExpression',
      hitRuleList: 'HitRuleList',
      hitType: 'HitType',
      id: 'Id',
      range: 'Range',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      duration: 'number',
      durationExpression: 'number',
      hitNumber: 'number',
      hitNumberExpression: 'number',
      hitRuleList: 'string',
      hitType: 'number',
      id: 'number',
      range: GetWarningStrategyConfigResponseBodyDataWarningStrategyListWarningStrategyListRange,
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWarningStrategyConfigResponseBodyDataWarningStrategyList extends $tea.Model {
  warningStrategyList?: GetWarningStrategyConfigResponseBodyDataWarningStrategyListWarningStrategyList[];
  static names(): { [key: string]: string } {
    return {
      warningStrategyList: 'warningStrategyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      warningStrategyList: { 'type': 'array', 'itemType': GetWarningStrategyConfigResponseBodyDataWarningStrategyListWarningStrategyList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWarningStrategyConfigResponseBodyData extends $tea.Model {
  id?: number;
  intervalTime?: number;
  lambda?: string;
  level?: number;
  maxNumber?: number;
  name?: string;
  warningStrategyList?: GetWarningStrategyConfigResponseBodyDataWarningStrategyList;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      intervalTime: 'IntervalTime',
      lambda: 'Lambda',
      level: 'Level',
      maxNumber: 'MaxNumber',
      name: 'Name',
      warningStrategyList: 'WarningStrategyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      intervalTime: 'number',
      lambda: 'string',
      level: 'number',
      maxNumber: 'number',
      name: 'string',
      warningStrategyList: GetWarningStrategyConfigResponseBodyDataWarningStrategyList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertScoreForApiResponseBodyData extends $tea.Model {
  scoreId?: number;
  scoreName?: string;
  static names(): { [key: string]: string } {
    return {
      scoreId: 'ScoreId',
      scoreName: 'ScoreName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreId: 'number',
      scoreName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSubScoreForApiResponseBodyData extends $tea.Model {
  scoreSubId?: number;
  scoreSubName?: string;
  static names(): { [key: string]: string } {
    return {
      scoreSubId: 'ScoreSubId',
      scoreSubName: 'ScoreSubName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreSubId: 'number',
      scoreSubName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsrVocabResponseBodyDataAsrVocab extends $tea.Model {
  createTime?: string;
  id?: string;
  name?: string;
  updateTime?: string;
  vocabularyId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
      name: 'Name',
      updateTime: 'UpdateTime',
      vocabularyId: 'VocabularyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      id: 'string',
      name: 'string',
      updateTime: 'string',
      vocabularyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsrVocabResponseBodyData extends $tea.Model {
  asrVocab?: ListAsrVocabResponseBodyDataAsrVocab[];
  static names(): { [key: string]: string } {
    return {
      asrVocab: 'AsrVocab',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrVocab: { 'type': 'array', 'itemType': ListAsrVocabResponseBodyDataAsrVocab },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBusinessSpacesResponseBodyData extends $tea.Model {
  aliUid?: number;
  businessSpaceCode?: string;
  businessSpaceName?: string;
  currentStatus?: number;
  endTime?: string;
  id?: number;
  language?: string;
  loginUserType?: number;
  orderInstanceId?: string;
  productType?: string;
  roleName?: string;
  startTime?: string;
  subAliUid?: number;
  xspaceCommodityCode?: string;
  xspaceProductCode?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      businessSpaceCode: 'BusinessSpaceCode',
      businessSpaceName: 'BusinessSpaceName',
      currentStatus: 'CurrentStatus',
      endTime: 'EndTime',
      id: 'Id',
      language: 'Language',
      loginUserType: 'LoginUserType',
      orderInstanceId: 'OrderInstanceId',
      productType: 'ProductType',
      roleName: 'RoleName',
      startTime: 'StartTime',
      subAliUid: 'SubAliUid',
      xspaceCommodityCode: 'XspaceCommodityCode',
      xspaceProductCode: 'XspaceProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      businessSpaceCode: 'string',
      businessSpaceName: 'string',
      currentStatus: 'number',
      endTime: 'string',
      id: 'number',
      language: 'string',
      loginUserType: 'number',
      orderInstanceId: 'string',
      productType: 'string',
      roleName: 'string',
      startTime: 'string',
      subAliUid: 'number',
      xspaceCommodityCode: 'string',
      xspaceProductCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetResponseBodyDataData extends $tea.Model {
  autoTranscoding?: number;
  channelId0?: number;
  channelId1?: number;
  channelType?: number;
  createTime?: string;
  createType?: number;
  dataSetType?: number;
  isDelete?: number;
  roleConfigProp?: string;
  roleConfigStatus?: number;
  roleConfigTask?: string;
  setBucketName?: string;
  setDomain?: string;
  setFolderName?: string;
  setId?: number;
  setName?: string;
  setNumber?: number;
  setRoleArn?: string;
  setType?: number;
  sourceDataType?: number;
  subDir?: string;
  updateTime?: string;
  userGroup?: string;
  static names(): { [key: string]: string } {
    return {
      autoTranscoding: 'AutoTranscoding',
      channelId0: 'ChannelId0',
      channelId1: 'ChannelId1',
      channelType: 'ChannelType',
      createTime: 'CreateTime',
      createType: 'CreateType',
      dataSetType: 'DataSetType',
      isDelete: 'IsDelete',
      roleConfigProp: 'RoleConfigProp',
      roleConfigStatus: 'RoleConfigStatus',
      roleConfigTask: 'RoleConfigTask',
      setBucketName: 'SetBucketName',
      setDomain: 'SetDomain',
      setFolderName: 'SetFolderName',
      setId: 'SetId',
      setName: 'SetName',
      setNumber: 'SetNumber',
      setRoleArn: 'SetRoleArn',
      setType: 'SetType',
      sourceDataType: 'SourceDataType',
      subDir: 'SubDir',
      updateTime: 'UpdateTime',
      userGroup: 'UserGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoTranscoding: 'number',
      channelId0: 'number',
      channelId1: 'number',
      channelType: 'number',
      createTime: 'string',
      createType: 'number',
      dataSetType: 'number',
      isDelete: 'number',
      roleConfigProp: 'string',
      roleConfigStatus: 'number',
      roleConfigTask: 'string',
      setBucketName: 'string',
      setDomain: 'string',
      setFolderName: 'string',
      setId: 'number',
      setName: 'string',
      setNumber: 'number',
      setRoleArn: 'string',
      setType: 'number',
      sourceDataType: 'number',
      subDir: 'string',
      updateTime: 'string',
      userGroup: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetResponseBodyData extends $tea.Model {
  data?: ListDataSetResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDataSetResponseBodyDataData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetResponseBodyMessages extends $tea.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisionsPrecision extends $tea.Model {
  createTime?: string;
  modelId?: number;
  modelName?: string;
  precision?: number;
  status?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modelId: 'ModelId',
      modelName: 'ModelName',
      precision: 'Precision',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modelId: 'number',
      modelName: 'string',
      precision: 'number',
      status: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisions extends $tea.Model {
  precision?: ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisionsPrecision[];
  static names(): { [key: string]: string } {
    return {
      precision: 'Precision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      precision: { 'type': 'array', 'itemType': ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisionsPrecision },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrecisionTaskResponseBodyDataPrecisionTask extends $tea.Model {
  createTime?: string;
  dataSetId?: number;
  dataSetName?: string;
  duration?: number;
  incorrectWords?: number;
  name?: string;
  precisions?: ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisions;
  source?: number;
  status?: number;
  taskId?: string;
  totalCount?: number;
  updateTime?: string;
  verifiedCount?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSetId: 'DataSetId',
      dataSetName: 'DataSetName',
      duration: 'Duration',
      incorrectWords: 'IncorrectWords',
      name: 'Name',
      precisions: 'Precisions',
      source: 'Source',
      status: 'Status',
      taskId: 'TaskId',
      totalCount: 'TotalCount',
      updateTime: 'UpdateTime',
      verifiedCount: 'VerifiedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dataSetId: 'number',
      dataSetName: 'string',
      duration: 'number',
      incorrectWords: 'number',
      name: 'string',
      precisions: ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisions,
      source: 'number',
      status: 'number',
      taskId: 'string',
      totalCount: 'number',
      updateTime: 'string',
      verifiedCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrecisionTaskResponseBodyData extends $tea.Model {
  precisionTask?: ListPrecisionTaskResponseBodyDataPrecisionTask[];
  static names(): { [key: string]: string } {
    return {
      precisionTask: 'PrecisionTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      precisionTask: { 'type': 'array', 'itemType': ListPrecisionTaskResponseBodyDataPrecisionTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityCheckSchemeResponseBodyDataRuleListRules extends $tea.Model {
  checkType?: number;
  name?: string;
  rid?: number;
  ruleScoreType?: number;
  scoreNum?: number;
  scoreNumType?: number;
  scoreType?: number;
  targetType?: number;
  static names(): { [key: string]: string } {
    return {
      checkType: 'CheckType',
      name: 'Name',
      rid: 'Rid',
      ruleScoreType: 'RuleScoreType',
      scoreNum: 'ScoreNum',
      scoreNumType: 'ScoreNumType',
      scoreType: 'ScoreType',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkType: 'number',
      name: 'string',
      rid: 'number',
      ruleScoreType: 'number',
      scoreNum: 'number',
      scoreNumType: 'number',
      scoreType: 'number',
      targetType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityCheckSchemeResponseBodyDataRuleList extends $tea.Model {
  rules?: ListQualityCheckSchemeResponseBodyDataRuleListRules[];
  static names(): { [key: string]: string } {
    return {
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rules: { 'type': 'array', 'itemType': ListQualityCheckSchemeResponseBodyDataRuleListRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityCheckSchemeResponseBodyDataSchemeCheckTypeList extends $tea.Model {
  checkName?: string;
  checkType?: number;
  enable?: number;
  score?: number;
  targetType?: number;
  static names(): { [key: string]: string } {
    return {
      checkName: 'CheckName',
      checkType: 'CheckType',
      enable: 'Enable',
      score: 'Score',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkName: 'string',
      checkType: 'number',
      enable: 'number',
      score: 'number',
      targetType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityCheckSchemeResponseBodyData extends $tea.Model {
  createTime?: string;
  createUserName?: string;
  dataType?: number;
  description?: string;
  name?: string;
  ruleList?: ListQualityCheckSchemeResponseBodyDataRuleList[];
  schemeCheckTypeList?: ListQualityCheckSchemeResponseBodyDataSchemeCheckTypeList[];
  schemeId?: number;
  status?: number;
  templateType?: number;
  type?: number;
  updateTime?: string;
  updateUserName?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUserName: 'CreateUserName',
      dataType: 'DataType',
      description: 'Description',
      name: 'Name',
      ruleList: 'RuleList',
      schemeCheckTypeList: 'SchemeCheckTypeList',
      schemeId: 'SchemeId',
      status: 'Status',
      templateType: 'TemplateType',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateUserName: 'UpdateUserName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUserName: 'string',
      dataType: 'number',
      description: 'string',
      name: 'string',
      ruleList: { 'type': 'array', 'itemType': ListQualityCheckSchemeResponseBodyDataRuleList },
      schemeCheckTypeList: { 'type': 'array', 'itemType': ListQualityCheckSchemeResponseBodyDataSchemeCheckTypeList },
      schemeId: 'number',
      status: 'number',
      templateType: 'number',
      type: 'number',
      updateTime: 'string',
      updateUserName: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyDataRole extends $tea.Model {
  createTime?: string;
  displayName?: string;
  id?: number;
  level?: number;
  name?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      displayName: 'DisplayName',
      id: 'Id',
      level: 'Level',
      name: 'Name',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      displayName: 'string',
      id: 'number',
      level: 'number',
      name: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyData extends $tea.Model {
  role?: ListRolesResponseBodyDataRole[];
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: { 'type': 'array', 'itemType': ListRolesResponseBodyDataRole },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyData extends $tea.Model {
  businessCategoryNameList?: string[];
  comments?: string;
  createTime?: string;
  name?: string;
  rid?: number;
  ruleType?: number;
  type?: number;
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      businessCategoryNameList: 'BusinessCategoryNameList',
      comments: 'Comments',
      createTime: 'CreateTime',
      name: 'Name',
      rid: 'Rid',
      ruleType: 'RuleType',
      type: 'Type',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCategoryNameList: { 'type': 'array', 'itemType': 'string' },
      comments: 'string',
      createTime: 'string',
      name: 'string',
      rid: 'number',
      ruleType: 'number',
      type: 'number',
      typeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfigAssignConfigContestsAssignConfigContestListObject extends $tea.Model {
  listObject?: any[];
  static names(): { [key: string]: string } {
    return {
      listObject: 'ListObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listObject: { 'type': 'array', 'itemType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfigAssignConfigContestsAssignConfigContest extends $tea.Model {
  dataType?: number;
  listObject?: ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfigAssignConfigContestsAssignConfigContestListObject;
  name?: string;
  symbol?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      listObject: 'ListObject',
      name: 'Name',
      symbol: 'Symbol',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'number',
      listObject: ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfigAssignConfigContestsAssignConfigContestListObject,
      name: 'string',
      symbol: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfigAssignConfigContests extends $tea.Model {
  assignConfigContest?: ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfigAssignConfigContestsAssignConfigContest[];
  static names(): { [key: string]: string } {
    return {
      assignConfigContest: 'AssignConfigContest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignConfigContest: { 'type': 'array', 'itemType': ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfigAssignConfigContestsAssignConfigContest },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfig extends $tea.Model {
  assignConfigContests?: ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfigAssignConfigContests;
  static names(): { [key: string]: string } {
    return {
      assignConfigContests: 'AssignConfigContests',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignConfigContests: ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfigAssignConfigContests,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigs extends $tea.Model {
  assignConfig?: ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfig[];
  static names(): { [key: string]: string } {
    return {
      assignConfig: 'AssignConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignConfig: { 'type': 'array', 'itemType': ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyDataDataDataConfig extends $tea.Model {
  assignConfigs?: ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigs;
  dataSets?: string;
  index?: number;
  resultParam?: string;
  static names(): { [key: string]: string } {
    return {
      assignConfigs: 'AssignConfigs',
      dataSets: 'DataSets',
      index: 'Index',
      resultParam: 'ResultParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignConfigs: ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigs,
      dataSets: 'string',
      index: 'number',
      resultParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyDataDataSchemeIdList extends $tea.Model {
  schemeIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      schemeIdList: 'SchemeIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemeIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyDataDataSchemeListSchemeList extends $tea.Model {
  name?: string;
  schemeId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      schemeId: 'SchemeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      schemeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyDataDataSchemeList extends $tea.Model {
  schemeList?: ListSchemeTaskConfigResponseBodyDataDataSchemeListSchemeList[];
  static names(): { [key: string]: string } {
    return {
      schemeList: 'SchemeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemeList: { 'type': 'array', 'itemType': ListSchemeTaskConfigResponseBodyDataDataSchemeListSchemeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyDataData extends $tea.Model {
  asrTaskPriority?: number;
  assignType?: number;
  createTime?: string;
  createUser?: number;
  dataConfig?: ListSchemeTaskConfigResponseBodyDataDataDataConfig;
  finishRate?: number;
  id?: number;
  manualReview?: number;
  modeCustomizationId?: string;
  modelName?: string;
  name?: string;
  numberExecuting?: number;
  numberFail?: number;
  numberSuccess?: number;
  numberSum?: number;
  schemeIdList?: ListSchemeTaskConfigResponseBodyDataDataSchemeIdList;
  schemeList?: ListSchemeTaskConfigResponseBodyDataDataSchemeList;
  schemeTaskConfigId?: number;
  sourceDataType?: number;
  status?: number;
  type?: number;
  updateTime?: string;
  updateUser?: number;
  userGroup?: string;
  vocabId?: string;
  vocabName?: string;
  static names(): { [key: string]: string } {
    return {
      asrTaskPriority: 'AsrTaskPriority',
      assignType: 'AssignType',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      dataConfig: 'DataConfig',
      finishRate: 'FinishRate',
      id: 'Id',
      manualReview: 'ManualReview',
      modeCustomizationId: 'ModeCustomizationId',
      modelName: 'ModelName',
      name: 'Name',
      numberExecuting: 'NumberExecuting',
      numberFail: 'NumberFail',
      numberSuccess: 'NumberSuccess',
      numberSum: 'NumberSum',
      schemeIdList: 'SchemeIdList',
      schemeList: 'SchemeList',
      schemeTaskConfigId: 'SchemeTaskConfigId',
      sourceDataType: 'SourceDataType',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
      userGroup: 'UserGroup',
      vocabId: 'VocabId',
      vocabName: 'VocabName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrTaskPriority: 'number',
      assignType: 'number',
      createTime: 'string',
      createUser: 'number',
      dataConfig: ListSchemeTaskConfigResponseBodyDataDataDataConfig,
      finishRate: 'number',
      id: 'number',
      manualReview: 'number',
      modeCustomizationId: 'string',
      modelName: 'string',
      name: 'string',
      numberExecuting: 'number',
      numberFail: 'number',
      numberSuccess: 'number',
      numberSum: 'number',
      schemeIdList: ListSchemeTaskConfigResponseBodyDataDataSchemeIdList,
      schemeList: ListSchemeTaskConfigResponseBodyDataDataSchemeList,
      schemeTaskConfigId: 'number',
      sourceDataType: 'number',
      status: 'number',
      type: 'number',
      updateTime: 'string',
      updateUser: 'number',
      userGroup: 'string',
      vocabId: 'string',
      vocabName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyData extends $tea.Model {
  data?: ListSchemeTaskConfigResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListSchemeTaskConfigResponseBodyDataData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyMessages extends $tea.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBodyDataDataCallerList extends $tea.Model {
  callerList?: string[];
  static names(): { [key: string]: string } {
    return {
      callerList: 'CallerList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBodyDataDataCustomerIdList extends $tea.Model {
  customerIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      customerIdList: 'CustomerIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBodyDataDataCustomerNameList extends $tea.Model {
  customerNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      customerNameList: 'CustomerNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBodyDataDataCustomerServiceIdList extends $tea.Model {
  customerServiceIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      customerServiceIdList: 'CustomerServiceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerServiceIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBodyDataDataCustomerServiceNameList extends $tea.Model {
  customerServiceNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      customerServiceNameList: 'CustomerServiceNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerServiceNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBodyDataDataReviewerList extends $tea.Model {
  reviewerList?: string[];
  static names(): { [key: string]: string } {
    return {
      reviewerList: 'ReviewerList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewerList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBodyDataDataSkillGroupNameList extends $tea.Model {
  skillGroupNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      skillGroupNameList: 'SkillGroupNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBodyDataData extends $tea.Model {
  assignStatus?: number;
  callStartTime?: string;
  callerList?: ListSessionGroupResponseBodyDataDataCallerList;
  customerIdList?: ListSessionGroupResponseBodyDataDataCustomerIdList;
  customerNameList?: ListSessionGroupResponseBodyDataDataCustomerNameList;
  customerServiceIdList?: ListSessionGroupResponseBodyDataDataCustomerServiceIdList;
  customerServiceNameList?: ListSessionGroupResponseBodyDataDataCustomerServiceNameList;
  hitSessionCount?: number;
  lastDataId?: string;
  reviewStatus?: number;
  reviewerList?: ListSessionGroupResponseBodyDataDataReviewerList;
  schemeTaskConfigId?: number;
  schemeTaskConfigName?: string;
  score?: number;
  sessionCount?: number;
  sessionGroupId?: string;
  sessionGroupReviewedOrComplained?: boolean;
  skillGroupNameList?: ListSessionGroupResponseBodyDataDataSkillGroupNameList;
  static names(): { [key: string]: string } {
    return {
      assignStatus: 'AssignStatus',
      callStartTime: 'CallStartTime',
      callerList: 'CallerList',
      customerIdList: 'CustomerIdList',
      customerNameList: 'CustomerNameList',
      customerServiceIdList: 'CustomerServiceIdList',
      customerServiceNameList: 'CustomerServiceNameList',
      hitSessionCount: 'HitSessionCount',
      lastDataId: 'LastDataId',
      reviewStatus: 'ReviewStatus',
      reviewerList: 'ReviewerList',
      schemeTaskConfigId: 'SchemeTaskConfigId',
      schemeTaskConfigName: 'SchemeTaskConfigName',
      score: 'Score',
      sessionCount: 'SessionCount',
      sessionGroupId: 'SessionGroupId',
      sessionGroupReviewedOrComplained: 'SessionGroupReviewedOrComplained',
      skillGroupNameList: 'SkillGroupNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignStatus: 'number',
      callStartTime: 'string',
      callerList: ListSessionGroupResponseBodyDataDataCallerList,
      customerIdList: ListSessionGroupResponseBodyDataDataCustomerIdList,
      customerNameList: ListSessionGroupResponseBodyDataDataCustomerNameList,
      customerServiceIdList: ListSessionGroupResponseBodyDataDataCustomerServiceIdList,
      customerServiceNameList: ListSessionGroupResponseBodyDataDataCustomerServiceNameList,
      hitSessionCount: 'number',
      lastDataId: 'string',
      reviewStatus: 'number',
      reviewerList: ListSessionGroupResponseBodyDataDataReviewerList,
      schemeTaskConfigId: 'number',
      schemeTaskConfigName: 'string',
      score: 'number',
      sessionCount: 'number',
      sessionGroupId: 'string',
      sessionGroupReviewedOrComplained: 'boolean',
      skillGroupNameList: ListSessionGroupResponseBodyDataDataSkillGroupNameList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBodyData extends $tea.Model {
  data?: ListSessionGroupResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListSessionGroupResponseBodyDataData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBodyMessages extends $tea.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleListRuleNameInfo extends $tea.Model {
  rid?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      rid: 'Rid',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rid: 'number',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleList extends $tea.Model {
  ruleNameInfo?: ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleListRuleNameInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleNameInfo: 'RuleNameInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleNameInfo: { 'type': 'array', 'itemType': ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleListRuleNameInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBodyDataSkillGroupConfigRuleListRuleNameInfo extends $tea.Model {
  rid?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      rid: 'Rid',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rid: 'number',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBodyDataSkillGroupConfigRuleList extends $tea.Model {
  ruleNameInfo?: ListSkillGroupConfigResponseBodyDataSkillGroupConfigRuleListRuleNameInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleNameInfo: 'RuleNameInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleNameInfo: { 'type': 'array', 'itemType': ListSkillGroupConfigResponseBodyDataSkillGroupConfigRuleListRuleNameInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBodyDataSkillGroupConfigSkillGroupScreensSkillGroupScreen extends $tea.Model {
  dataType?: number;
  name?: string;
  symbol?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      name: 'Name',
      symbol: 'Symbol',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'number',
      name: 'string',
      symbol: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBodyDataSkillGroupConfigSkillGroupScreens extends $tea.Model {
  skillGroupScreen?: ListSkillGroupConfigResponseBodyDataSkillGroupConfigSkillGroupScreensSkillGroupScreen[];
  static names(): { [key: string]: string } {
    return {
      skillGroupScreen: 'SkillGroupScreen',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupScreen: { 'type': 'array', 'itemType': ListSkillGroupConfigResponseBodyDataSkillGroupConfigSkillGroupScreensSkillGroupScreen },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBodyDataSkillGroupConfig extends $tea.Model {
  allContentQualityCheck?: number;
  allRids?: string;
  allRuleList?: ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleList;
  createTime?: string;
  id?: number;
  instanceId?: string;
  modelId?: number;
  modelName?: string;
  name?: string;
  qualityCheckType?: number;
  rid?: string;
  ruleList?: ListSkillGroupConfigResponseBodyDataSkillGroupConfigRuleList;
  screenSwitch?: boolean;
  skillGroupFrom?: number;
  skillGroupId?: string;
  skillGroupName?: string;
  skillGroupScreens?: ListSkillGroupConfigResponseBodyDataSkillGroupConfigSkillGroupScreens;
  status?: number;
  type?: number;
  updateTime?: string;
  vocabId?: number;
  vocabName?: string;
  static names(): { [key: string]: string } {
    return {
      allContentQualityCheck: 'AllContentQualityCheck',
      allRids: 'AllRids',
      allRuleList: 'AllRuleList',
      createTime: 'CreateTime',
      id: 'Id',
      instanceId: 'InstanceId',
      modelId: 'ModelId',
      modelName: 'ModelName',
      name: 'Name',
      qualityCheckType: 'QualityCheckType',
      rid: 'Rid',
      ruleList: 'RuleList',
      screenSwitch: 'ScreenSwitch',
      skillGroupFrom: 'SkillGroupFrom',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      skillGroupScreens: 'SkillGroupScreens',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
      vocabId: 'VocabId',
      vocabName: 'VocabName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allContentQualityCheck: 'number',
      allRids: 'string',
      allRuleList: ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleList,
      createTime: 'string',
      id: 'number',
      instanceId: 'string',
      modelId: 'number',
      modelName: 'string',
      name: 'string',
      qualityCheckType: 'number',
      rid: 'string',
      ruleList: ListSkillGroupConfigResponseBodyDataSkillGroupConfigRuleList,
      screenSwitch: 'boolean',
      skillGroupFrom: 'number',
      skillGroupId: 'string',
      skillGroupName: 'string',
      skillGroupScreens: ListSkillGroupConfigResponseBodyDataSkillGroupConfigSkillGroupScreens,
      status: 'number',
      type: 'number',
      updateTime: 'string',
      vocabId: 'number',
      vocabName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBodyData extends $tea.Model {
  skillGroupConfig?: ListSkillGroupConfigResponseBodyDataSkillGroupConfig[];
  static names(): { [key: string]: string } {
    return {
      skillGroupConfig: 'SkillGroupConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupConfig: { 'type': 'array', 'itemType': ListSkillGroupConfigResponseBodyDataSkillGroupConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgentsAgent extends $tea.Model {
  agentId?: string;
  agentName?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgents extends $tea.Model {
  agent?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgentsAgent[];
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgentsAgent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewersReviewer extends $tea.Model {
  reviewerId?: string;
  reviewerName?: string;
  static names(): { [key: string]: string } {
    return {
      reviewerId: 'ReviewerId',
      reviewerName: 'ReviewerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewerId: 'string',
      reviewerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewers extends $tea.Model {
  reviewer?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewersReviewer[];
  static names(): { [key: string]: string } {
    return {
      reviewer: 'Reviewer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewer: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewersReviewer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRulesRuleBasicInfo extends $tea.Model {
  name?: string;
  rid?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      rid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRules extends $tea.Model {
  ruleBasicInfo?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRulesRuleBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleBasicInfo: 'RuleBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleBasicInfo: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRulesRuleBasicInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingModeSamplingModeAgentsSamplingModeAgent extends $tea.Model {
  agentId?: string;
  agentName?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingModeSamplingModeAgents extends $tea.Model {
  samplingModeAgent?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingModeSamplingModeAgentsSamplingModeAgent[];
  static names(): { [key: string]: string } {
    return {
      samplingModeAgent: 'SamplingModeAgent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      samplingModeAgent: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingModeSamplingModeAgentsSamplingModeAgent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingMode extends $tea.Model {
  anyNumberOfDraws?: number;
  designated?: boolean;
  dimension?: number;
  limit?: number;
  numberOfDraws?: number;
  proportion?: number;
  randomInspectionNumber?: number;
  samplingModeAgents?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingModeSamplingModeAgents;
  static names(): { [key: string]: string } {
    return {
      anyNumberOfDraws: 'AnyNumberOfDraws',
      designated: 'Designated',
      dimension: 'Dimension',
      limit: 'Limit',
      numberOfDraws: 'NumberOfDraws',
      proportion: 'Proportion',
      randomInspectionNumber: 'RandomInspectionNumber',
      samplingModeAgents: 'SamplingModeAgents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anyNumberOfDraws: 'number',
      designated: 'boolean',
      dimension: 'number',
      limit: 'number',
      numberOfDraws: 'number',
      proportion: 'number',
      randomInspectionNumber: 'number',
      samplingModeAgents: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingModeSamplingModeAgents,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroupsSkillGroup extends $tea.Model {
  skillId?: string;
  skillName?: string;
  static names(): { [key: string]: string } {
    return {
      skillId: 'SkillId',
      skillName: 'SkillName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillId: 'string',
      skillName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroups extends $tea.Model {
  skillGroup?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroupsSkillGroup[];
  static names(): { [key: string]: string } {
    return {
      skillGroup: 'SkillGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroup: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroupsSkillGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfo extends $tea.Model {
  agents?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgents;
  agentsStr?: string;
  assignmentType?: number;
  callTimeEnd?: number;
  callTimeStart?: number;
  callType?: number;
  createTime?: string;
  durationMax?: number;
  durationMin?: number;
  enabled?: number;
  priority?: number;
  reviewers?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewers;
  ruleId?: number;
  ruleName?: string;
  rules?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRules;
  samplingMode?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingMode;
  skillGroups?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroups;
  skillGroupsStr?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      agents: 'Agents',
      agentsStr: 'AgentsStr',
      assignmentType: 'AssignmentType',
      callTimeEnd: 'CallTimeEnd',
      callTimeStart: 'CallTimeStart',
      callType: 'CallType',
      createTime: 'CreateTime',
      durationMax: 'DurationMax',
      durationMin: 'DurationMin',
      enabled: 'Enabled',
      priority: 'Priority',
      reviewers: 'Reviewers',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      rules: 'Rules',
      samplingMode: 'SamplingMode',
      skillGroups: 'SkillGroups',
      skillGroupsStr: 'SkillGroupsStr',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agents: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgents,
      agentsStr: 'string',
      assignmentType: 'number',
      callTimeEnd: 'number',
      callTimeStart: 'number',
      callType: 'number',
      createTime: 'string',
      durationMax: 'number',
      durationMin: 'number',
      enabled: 'number',
      priority: 'number',
      reviewers: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewers,
      ruleId: 'number',
      ruleName: 'string',
      rules: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRules,
      samplingMode: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingMode,
      skillGroups: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroups,
      skillGroupsStr: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyData extends $tea.Model {
  taskAssignRuleInfo?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      taskAssignRuleInfo: 'TaskAssignRuleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskAssignRuleInfo: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyDataUser extends $tea.Model {
  aliUid?: string;
  createTime?: string;
  description?: string;
  displayName?: string;
  id?: number;
  loginUserType?: number;
  roleName?: string;
  updateTime?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      createTime: 'CreateTime',
      description: 'Description',
      displayName: 'DisplayName',
      id: 'Id',
      loginUserType: 'LoginUserType',
      roleName: 'RoleName',
      updateTime: 'UpdateTime',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      createTime: 'string',
      description: 'string',
      displayName: 'string',
      id: 'number',
      loginUserType: 'number',
      roleName: 'string',
      updateTime: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyData extends $tea.Model {
  user?: ListUsersResponseBodyDataUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': ListUsersResponseBodyDataUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponseBodyDataWarningConfigInfoChannelsChannel extends $tea.Model {
  type?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponseBodyDataWarningConfigInfoChannels extends $tea.Model {
  channel?: ListWarningConfigResponseBodyDataWarningConfigInfoChannelsChannel[];
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: { 'type': 'array', 'itemType': ListWarningConfigResponseBodyDataWarningConfigInfoChannelsChannel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponseBodyDataWarningConfigInfoRidList extends $tea.Model {
  ridList?: string[];
  static names(): { [key: string]: string } {
    return {
      ridList: 'RidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ridList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponseBodyDataWarningConfigInfoRuleListWarningRule extends $tea.Model {
  rid?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      rid: 'Rid',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rid: 'number',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponseBodyDataWarningConfigInfoRuleList extends $tea.Model {
  warningRule?: ListWarningConfigResponseBodyDataWarningConfigInfoRuleListWarningRule[];
  static names(): { [key: string]: string } {
    return {
      warningRule: 'WarningRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      warningRule: { 'type': 'array', 'itemType': ListWarningConfigResponseBodyDataWarningConfigInfoRuleListWarningRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponseBodyDataWarningConfigInfo extends $tea.Model {
  channels?: ListWarningConfigResponseBodyDataWarningConfigInfoChannels;
  configId?: number;
  configName?: string;
  createTime?: string;
  ridList?: ListWarningConfigResponseBodyDataWarningConfigInfoRidList;
  ruleList?: ListWarningConfigResponseBodyDataWarningConfigInfoRuleList;
  status?: number;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      configId: 'ConfigId',
      configName: 'ConfigName',
      createTime: 'CreateTime',
      ridList: 'RidList',
      ruleList: 'RuleList',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: ListWarningConfigResponseBodyDataWarningConfigInfoChannels,
      configId: 'number',
      configName: 'string',
      createTime: 'string',
      ridList: ListWarningConfigResponseBodyDataWarningConfigInfoRidList,
      ruleList: ListWarningConfigResponseBodyDataWarningConfigInfoRuleList,
      status: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponseBodyData extends $tea.Model {
  warningConfigInfo?: ListWarningConfigResponseBodyDataWarningConfigInfo[];
  static names(): { [key: string]: string } {
    return {
      warningConfigInfo: 'WarningConfigInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      warningConfigInfo: { 'type': 'array', 'itemType': ListWarningConfigResponseBodyDataWarningConfigInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningStrategyConfigResponseBodyDataData extends $tea.Model {
  id?: number;
  intervalTime?: number;
  lambda?: string;
  level?: number;
  maxNumber?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      intervalTime: 'IntervalTime',
      lambda: 'Lambda',
      level: 'Level',
      maxNumber: 'MaxNumber',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      intervalTime: 'number',
      lambda: 'string',
      level: 'number',
      maxNumber: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningStrategyConfigResponseBodyData extends $tea.Model {
  data?: ListWarningStrategyConfigResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListWarningStrategyConfigResponseBodyDataData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartAsrTaskResponseBodyDataRestartResult extends $tea.Model {
  data?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartAsrTaskResponseBodyData extends $tea.Model {
  restartResult?: RestartAsrTaskResponseBodyDataRestartResult[];
  static names(): { [key: string]: string } {
    return {
      restartResult: 'RestartResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restartResult: { 'type': 'array', 'itemType': RestartAsrTaskResponseBodyDataRestartResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevertAssignedSessionResponseBodyMessages extends $tea.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevertAssignedSessionGroupResponseBodyMessages extends $tea.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncQualityCheckResponseBodyDataRulesHitHitKeyWords extends $tea.Model {
  cid?: number;
  from?: number;
  pid?: number;
  to?: number;
  val?: string;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      from: 'From',
      pid: 'Pid',
      to: 'To',
      val: 'Val',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: 'number',
      from: 'number',
      pid: 'number',
      to: 'number',
      val: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncQualityCheckResponseBodyDataRulesHitPhrase extends $tea.Model {
  begin?: number;
  emotionValue?: number;
  end?: number;
  identity?: string;
  role?: string;
  silenceDuration?: number;
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      identity: 'Identity',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
      speechRate: 'SpeechRate',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      identity: 'string',
      role: 'string',
      silenceDuration: 'number',
      speechRate: 'number',
      words: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncQualityCheckResponseBodyDataRulesHit extends $tea.Model {
  hitKeyWords?: SyncQualityCheckResponseBodyDataRulesHitHitKeyWords[];
  phrase?: SyncQualityCheckResponseBodyDataRulesHitPhrase;
  static names(): { [key: string]: string } {
    return {
      hitKeyWords: 'HitKeyWords',
      phrase: 'Phrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitKeyWords: { 'type': 'array', 'itemType': SyncQualityCheckResponseBodyDataRulesHitHitKeyWords },
      phrase: SyncQualityCheckResponseBodyDataRulesHitPhrase,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncQualityCheckResponseBodyDataRules extends $tea.Model {
  hit?: SyncQualityCheckResponseBodyDataRulesHit[];
  rid?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      hit: 'Hit',
      rid: 'Rid',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hit: { 'type': 'array', 'itemType': SyncQualityCheckResponseBodyDataRulesHit },
      rid: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncQualityCheckResponseBodyData extends $tea.Model {
  beginTime?: number;
  rules?: SyncQualityCheckResponseBodyDataRules[];
  score?: number;
  taskId?: string;
  tid?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      rules: 'Rules',
      score: 'Score',
      taskId: 'TaskId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      rules: { 'type': 'array', 'itemType': SyncQualityCheckResponseBodyDataRules },
      score: 'number',
      taskId: 'string',
      tid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleV4ResponseBodyDataHitRuleReviewInfoListBranchInfoList extends $tea.Model {
  checkType?: number;
  index?: number;
  lambda?: string;
  name?: string;
  nextNodeId?: number;
  situation?: NextNodeSituations;
  triggers?: string[];
  static names(): { [key: string]: string } {
    return {
      checkType: 'CheckType',
      index: 'Index',
      lambda: 'Lambda',
      name: 'Name',
      nextNodeId: 'NextNodeId',
      situation: 'Situation',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkType: 'number',
      index: 'number',
      lambda: 'string',
      name: 'string',
      nextNodeId: 'number',
      situation: NextNodeSituations,
      triggers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoListKeyWords extends $tea.Model {
  cid?: string;
  customizeCode?: string;
  from?: number;
  oid?: string;
  operatorKey?: string;
  pid?: number;
  similarPhrase?: string;
  tid?: string;
  to?: number;
  uuid?: string;
  val?: string;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      customizeCode: 'CustomizeCode',
      from: 'From',
      oid: 'Oid',
      operatorKey: 'OperatorKey',
      pid: 'Pid',
      similarPhrase: 'SimilarPhrase',
      tid: 'Tid',
      to: 'To',
      uuid: 'Uuid',
      val: 'Val',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: 'string',
      customizeCode: 'string',
      from: 'number',
      oid: 'string',
      operatorKey: 'string',
      pid: 'number',
      similarPhrase: 'string',
      tid: 'string',
      to: 'number',
      uuid: 'string',
      val: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoListPhrase extends $tea.Model {
  begin?: number;
  beginTime?: string;
  channelId?: number;
  emotionFineGrainedValue?: number;
  emotionValue?: number;
  end?: number;
  hitStatus?: number;
  hourMinSec?: string;
  identity?: string;
  pid?: number;
  renterId?: number;
  role?: string;
  sid?: number;
  silenceDuration?: number;
  speechRate?: number;
  uuid?: string;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      beginTime: 'BeginTime',
      channelId: 'ChannelId',
      emotionFineGrainedValue: 'EmotionFineGrainedValue',
      emotionValue: 'EmotionValue',
      end: 'End',
      hitStatus: 'HitStatus',
      hourMinSec: 'HourMinSec',
      identity: 'Identity',
      pid: 'Pid',
      renterId: 'RenterId',
      role: 'Role',
      sid: 'Sid',
      silenceDuration: 'SilenceDuration',
      speechRate: 'SpeechRate',
      uuid: 'Uuid',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      beginTime: 'string',
      channelId: 'number',
      emotionFineGrainedValue: 'number',
      emotionValue: 'number',
      end: 'number',
      hitStatus: 'number',
      hourMinSec: 'string',
      identity: 'string',
      pid: 'number',
      renterId: 'number',
      role: 'string',
      sid: 'number',
      silenceDuration: 'number',
      speechRate: 'number',
      uuid: 'string',
      words: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoList extends $tea.Model {
  cid?: string[];
  keyWords?: TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoListKeyWords[];
  phrase?: TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoListPhrase;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      keyWords: 'KeyWords',
      phrase: 'Phrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: { 'type': 'array', 'itemType': 'string' },
      keyWords: { 'type': 'array', 'itemType': TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoListKeyWords },
      phrase: TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoListPhrase,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleV4ResponseBodyDataHitRuleReviewInfoList extends $tea.Model {
  branchHitId?: number;
  branchInfoList?: TestRuleV4ResponseBodyDataHitRuleReviewInfoListBranchInfoList[];
  conditionHitInfoList?: TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoList[];
  conditionInfoList?: ConditionBasicInfo[];
  judgeNodeName?: string;
  lambda?: string;
  matched?: boolean;
  nodeType?: string;
  rid?: number;
  ruleName?: string;
  ruleScoreType?: number;
  scoreNumType?: number;
  taskFlowId?: number;
  static names(): { [key: string]: string } {
    return {
      branchHitId: 'BranchHitId',
      branchInfoList: 'BranchInfoList',
      conditionHitInfoList: 'ConditionHitInfoList',
      conditionInfoList: 'ConditionInfoList',
      judgeNodeName: 'JudgeNodeName',
      lambda: 'Lambda',
      matched: 'Matched',
      nodeType: 'NodeType',
      rid: 'Rid',
      ruleName: 'RuleName',
      ruleScoreType: 'RuleScoreType',
      scoreNumType: 'ScoreNumType',
      taskFlowId: 'TaskFlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchHitId: 'number',
      branchInfoList: { 'type': 'array', 'itemType': TestRuleV4ResponseBodyDataHitRuleReviewInfoListBranchInfoList },
      conditionHitInfoList: { 'type': 'array', 'itemType': TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoList },
      conditionInfoList: { 'type': 'array', 'itemType': ConditionBasicInfo },
      judgeNodeName: 'string',
      lambda: 'string',
      matched: 'boolean',
      nodeType: 'string',
      rid: 'number',
      ruleName: 'string',
      ruleScoreType: 'number',
      scoreNumType: 'number',
      taskFlowId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleV4ResponseBodyDataHitTaskFlowList extends $tea.Model {
  graphFlow?: TaskGraphFlow;
  rid?: number;
  taskFlowType?: number;
  static names(): { [key: string]: string } {
    return {
      graphFlow: 'GraphFlow',
      rid: 'Rid',
      taskFlowType: 'TaskFlowType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      graphFlow: TaskGraphFlow,
      rid: 'number',
      taskFlowType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleV4ResponseBodyDataUnhitRuleReviewInfoList extends $tea.Model {
  conditionInfoList?: ConditionBasicInfo[];
  matched?: boolean;
  rid?: number;
  taskFlowType?: number;
  static names(): { [key: string]: string } {
    return {
      conditionInfoList: 'ConditionInfoList',
      matched: 'Matched',
      rid: 'Rid',
      taskFlowType: 'TaskFlowType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionInfoList: { 'type': 'array', 'itemType': ConditionBasicInfo },
      matched: 'boolean',
      rid: 'number',
      taskFlowType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleV4ResponseBodyData extends $tea.Model {
  hitRuleReviewInfoList?: TestRuleV4ResponseBodyDataHitRuleReviewInfoList[];
  hitTaskFlowList?: TestRuleV4ResponseBodyDataHitTaskFlowList[];
  unhitRuleReviewInfoList?: TestRuleV4ResponseBodyDataUnhitRuleReviewInfoList[];
  static names(): { [key: string]: string } {
    return {
      hitRuleReviewInfoList: 'HitRuleReviewInfoList',
      hitTaskFlowList: 'HitTaskFlowList',
      unhitRuleReviewInfoList: 'UnhitRuleReviewInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitRuleReviewInfoList: { 'type': 'array', 'itemType': TestRuleV4ResponseBodyDataHitRuleReviewInfoList },
      hitTaskFlowList: { 'type': 'array', 'itemType': TestRuleV4ResponseBodyDataHitTaskFlowList },
      unhitRuleReviewInfoList: { 'type': 'array', 'itemType': TestRuleV4ResponseBodyDataUnhitRuleReviewInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCheckTypeToSchemeResponseBodyMessages extends $tea.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQualityCheckSchemeResponseBodyMessages extends $tea.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleByIdResponseBodyMessages extends $tea.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleToSchemeResponseBodyMessages extends $tea.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleV4ResponseBodyMessages extends $tea.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSchemeTaskConfigResponseBodyMessages extends $tea.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSyncQualityCheckDataResponseBodyData extends $tea.Model {
  taskId?: string;
  tid?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      tid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoHandScoreIdList extends $tea.Model {
  handScoreIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      handScoreIdList: 'HandScoreIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handScoreIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoConditionInfoConditionBasicInfo extends $tea.Model {
  conditionInfoCid?: string;
  static names(): { [key: string]: string } {
    return {
      conditionInfoCid: 'ConditionInfoCid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionInfoCid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoConditionInfo extends $tea.Model {
  conditionBasicInfo?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoConditionInfoConditionBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      conditionBasicInfo: 'ConditionBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionBasicInfo: { 'type': 'array', 'itemType': UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoConditionInfoConditionBasicInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitCids extends $tea.Model {
  cidItem?: string[];
  static names(): { [key: string]: string } {
    return {
      cidItem: 'CidItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidItem: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWordsHitKeyWord extends $tea.Model {
  from?: number;
  pid?: number;
  tid?: string;
  to?: number;
  val?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      pid: 'Pid',
      tid: 'Tid',
      to: 'To',
      val: 'Val',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      pid: 'number',
      tid: 'string',
      to: 'number',
      val: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWords extends $tea.Model {
  hitKeyWord?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWordsHitKeyWord[];
  static names(): { [key: string]: string } {
    return {
      hitKeyWord: 'HitKeyWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitKeyWord: { 'type': 'array', 'itemType': UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWordsHitKeyWord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoPhrase extends $tea.Model {
  begin?: number;
  beginTime?: string;
  end?: number;
  identity?: string;
  role?: string;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      beginTime: 'BeginTime',
      end: 'End',
      identity: 'Identity',
      role: 'Role',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      beginTime: 'string',
      end: 'number',
      identity: 'string',
      role: 'string',
      words: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfo extends $tea.Model {
  hitCids?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitCids;
  hitKeyWords?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWords;
  phrase?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoPhrase;
  static names(): { [key: string]: string } {
    return {
      hitCids: 'HitCids',
      hitKeyWords: 'HitKeyWords',
      phrase: 'Phrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitCids: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitCids,
      hitKeyWords: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWords,
      phrase: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoPhrase,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHit extends $tea.Model {
  conditionHitInfo?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfo[];
  static names(): { [key: string]: string } {
    return {
      conditionHitInfo: 'ConditionHitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionHitInfo: { 'type': 'array', 'itemType': UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfo extends $tea.Model {
  conditionInfo?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoConditionInfo;
  hit?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHit;
  rid?: string;
  tid?: string;
  static names(): { [key: string]: string } {
    return {
      conditionInfo: 'ConditionInfo',
      hit: 'Hit',
      rid: 'Rid',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionInfo: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoConditionInfo,
      hit: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHit,
      rid: 'string',
      tid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRules extends $tea.Model {
  ruleHitInfo?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleHitInfo: 'RuleHitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleHitInfo: { 'type': 'array', 'itemType': UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfo extends $tea.Model {
  handScoreIdList?: UploadDataSyncResponseBodyDataResultInfoHandScoreIdList;
  rules?: UploadDataSyncResponseBodyDataResultInfoRules;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      handScoreIdList: 'HandScoreIdList',
      rules: 'Rules',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handScoreIdList: UploadDataSyncResponseBodyDataResultInfoHandScoreIdList,
      rules: UploadDataSyncResponseBodyDataResultInfoRules,
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyData extends $tea.Model {
  resultInfo?: UploadDataSyncResponseBodyDataResultInfo[];
  static names(): { [key: string]: string } {
    return {
      resultInfo: 'ResultInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultInfo: { 'type': 'array', 'itemType': UploadDataSyncResponseBodyDataResultInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRuleResponseBodyData extends $tea.Model {
  ridInfo?: string[];
  static names(): { [key: string]: string } {
    return {
      ridInfo: 'RidInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ridInfo: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponseBodyDataDeltaSourceLine extends $tea.Model {
  line?: string[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponseBodyDataDeltaSource extends $tea.Model {
  line?: VerifySentenceResponseBodyDataDeltaSourceLine;
  position?: number;
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: VerifySentenceResponseBodyDataDeltaSourceLine,
      position: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponseBodyDataDeltaTargetLine extends $tea.Model {
  line?: string[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponseBodyDataDeltaTarget extends $tea.Model {
  line?: VerifySentenceResponseBodyDataDeltaTargetLine;
  position?: number;
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: VerifySentenceResponseBodyDataDeltaTargetLine,
      position: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponseBodyDataDelta extends $tea.Model {
  source?: VerifySentenceResponseBodyDataDeltaSource;
  target?: VerifySentenceResponseBodyDataDeltaTarget;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      target: 'Target',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: VerifySentenceResponseBodyDataDeltaSource,
      target: VerifySentenceResponseBodyDataDeltaTarget,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponseBodyData extends $tea.Model {
  delta?: VerifySentenceResponseBodyDataDelta[];
  static names(): { [key: string]: string } {
    return {
      delta: 'Delta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delta: { 'type': 'array', 'itemType': VerifySentenceResponseBodyDataDelta },
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
    this._endpoint = this.getEndpoint("qualitycheck", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addBusinessCategoryWithOptions(request: AddBusinessCategoryRequest, runtime: $Util.RuntimeOptions): Promise<AddBusinessCategoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddBusinessCategory",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddBusinessCategoryResponse>(await this.callApi(params, req, runtime), new AddBusinessCategoryResponse({}));
  }

  async addBusinessCategory(request: AddBusinessCategoryRequest): Promise<AddBusinessCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addBusinessCategoryWithOptions(request, runtime);
  }

  async addRuleCategoryWithOptions(request: AddRuleCategoryRequest, runtime: $Util.RuntimeOptions): Promise<AddRuleCategoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddRuleCategory",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddRuleCategoryResponse>(await this.callApi(params, req, runtime), new AddRuleCategoryResponse({}));
  }

  async addRuleCategory(request: AddRuleCategoryRequest): Promise<AddRuleCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addRuleCategoryWithOptions(request, runtime);
  }

  async addRuleV4WithOptions(request: AddRuleV4Request, runtime: $Util.RuntimeOptions): Promise<AddRuleV4Response> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.isCopy)) {
      body["IsCopy"] = request.isCopy;
    }

    if (!Util.isUnset(request.jsonStrForRule)) {
      body["JsonStrForRule"] = request.jsonStrForRule;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddRuleV4",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddRuleV4Response>(await this.callApi(params, req, runtime), new AddRuleV4Response({}));
  }

  async addRuleV4(request: AddRuleV4Request): Promise<AddRuleV4Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addRuleV4WithOptions(request, runtime);
  }

  async addThesaurusForApiWithOptions(request: AddThesaurusForApiRequest, runtime: $Util.RuntimeOptions): Promise<AddThesaurusForApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddThesaurusForApi",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddThesaurusForApiResponse>(await this.callApi(params, req, runtime), new AddThesaurusForApiResponse({}));
  }

  async addThesaurusForApi(request: AddThesaurusForApiRequest): Promise<AddThesaurusForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addThesaurusForApiWithOptions(request, runtime);
  }

  async assignReviewerWithOptions(request: AssignReviewerRequest, runtime: $Util.RuntimeOptions): Promise<AssignReviewerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssignReviewer",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssignReviewerResponse>(await this.callApi(params, req, runtime), new AssignReviewerResponse({}));
  }

  async assignReviewer(request: AssignReviewerRequest): Promise<AssignReviewerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.assignReviewerWithOptions(request, runtime);
  }

  async assignReviewerBySessionGroupWithOptions(request: AssignReviewerBySessionGroupRequest, runtime: $Util.RuntimeOptions): Promise<AssignReviewerBySessionGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssignReviewerBySessionGroup",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssignReviewerBySessionGroupResponse>(await this.callApi(params, req, runtime), new AssignReviewerBySessionGroupResponse({}));
  }

  async assignReviewerBySessionGroup(request: AssignReviewerBySessionGroupRequest): Promise<AssignReviewerBySessionGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.assignReviewerBySessionGroupWithOptions(request, runtime);
  }

  async batchSubmitReviewInfoWithOptions(request: BatchSubmitReviewInfoRequest, runtime: $Util.RuntimeOptions): Promise<BatchSubmitReviewInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchSubmitReviewInfo",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchSubmitReviewInfoResponse>(await this.callApi(params, req, runtime), new BatchSubmitReviewInfoResponse({}));
  }

  async batchSubmitReviewInfo(request: BatchSubmitReviewInfoRequest): Promise<BatchSubmitReviewInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSubmitReviewInfoWithOptions(request, runtime);
  }

  async createAsrVocabWithOptions(request: CreateAsrVocabRequest, runtime: $Util.RuntimeOptions): Promise<CreateAsrVocabResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAsrVocab",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAsrVocabResponse>(await this.callApi(params, req, runtime), new CreateAsrVocabResponse({}));
  }

  async createAsrVocab(request: CreateAsrVocabRequest): Promise<CreateAsrVocabResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAsrVocabWithOptions(request, runtime);
  }

  async createCheckTypeToSchemeWithOptions(request: CreateCheckTypeToSchemeRequest, runtime: $Util.RuntimeOptions): Promise<CreateCheckTypeToSchemeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCheckTypeToScheme",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCheckTypeToSchemeResponse>(await this.callApi(params, req, runtime), new CreateCheckTypeToSchemeResponse({}));
  }

  async createCheckTypeToScheme(request: CreateCheckTypeToSchemeRequest): Promise<CreateCheckTypeToSchemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCheckTypeToSchemeWithOptions(request, runtime);
  }

  async createQualityCheckSchemeWithOptions(request: CreateQualityCheckSchemeRequest, runtime: $Util.RuntimeOptions): Promise<CreateQualityCheckSchemeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateQualityCheckScheme",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateQualityCheckSchemeResponse>(await this.callApi(params, req, runtime), new CreateQualityCheckSchemeResponse({}));
  }

  async createQualityCheckScheme(request: CreateQualityCheckSchemeRequest): Promise<CreateQualityCheckSchemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQualityCheckSchemeWithOptions(request, runtime);
  }

  async createSchemeTaskConfigWithOptions(request: CreateSchemeTaskConfigRequest, runtime: $Util.RuntimeOptions): Promise<CreateSchemeTaskConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSchemeTaskConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSchemeTaskConfigResponse>(await this.callApi(params, req, runtime), new CreateSchemeTaskConfigResponse({}));
  }

  async createSchemeTaskConfig(request: CreateSchemeTaskConfigRequest): Promise<CreateSchemeTaskConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSchemeTaskConfigWithOptions(request, runtime);
  }

  async createSkillGroupConfigWithOptions(request: CreateSkillGroupConfigRequest, runtime: $Util.RuntimeOptions): Promise<CreateSkillGroupConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSkillGroupConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSkillGroupConfigResponse>(await this.callApi(params, req, runtime), new CreateSkillGroupConfigResponse({}));
  }

  async createSkillGroupConfig(request: CreateSkillGroupConfigRequest): Promise<CreateSkillGroupConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSkillGroupConfigWithOptions(request, runtime);
  }

  async createTaskAssignRuleWithOptions(request: CreateTaskAssignRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateTaskAssignRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTaskAssignRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTaskAssignRuleResponse>(await this.callApi(params, req, runtime), new CreateTaskAssignRuleResponse({}));
  }

  async createTaskAssignRule(request: CreateTaskAssignRuleRequest): Promise<CreateTaskAssignRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTaskAssignRuleWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param request CreateUserRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateUserResponse
   */
  // Deprecated
  async createUserWithOptions(request: CreateUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateUser",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUserResponse>(await this.callApi(params, req, runtime), new CreateUserResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request CreateUserRequest
    * @return CreateUserResponse
   */
  // Deprecated
  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  async createWarningConfigWithOptions(request: CreateWarningConfigRequest, runtime: $Util.RuntimeOptions): Promise<CreateWarningConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateWarningConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWarningConfigResponse>(await this.callApi(params, req, runtime), new CreateWarningConfigResponse({}));
  }

  async createWarningConfig(request: CreateWarningConfigRequest): Promise<CreateWarningConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWarningConfigWithOptions(request, runtime);
  }

  async createWarningStrategyConfigWithOptions(request: CreateWarningStrategyConfigRequest, runtime: $Util.RuntimeOptions): Promise<CreateWarningStrategyConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateWarningStrategyConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWarningStrategyConfigResponse>(await this.callApi(params, req, runtime), new CreateWarningStrategyConfigResponse({}));
  }

  async createWarningStrategyConfig(request: CreateWarningStrategyConfigRequest): Promise<CreateWarningStrategyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWarningStrategyConfigWithOptions(request, runtime);
  }

  async delRuleCategoryWithOptions(request: DelRuleCategoryRequest, runtime: $Util.RuntimeOptions): Promise<DelRuleCategoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DelRuleCategory",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DelRuleCategoryResponse>(await this.callApi(params, req, runtime), new DelRuleCategoryResponse({}));
  }

  async delRuleCategory(request: DelRuleCategoryRequest): Promise<DelRuleCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.delRuleCategoryWithOptions(request, runtime);
  }

  async delThesaurusForApiWithOptions(request: DelThesaurusForApiRequest, runtime: $Util.RuntimeOptions): Promise<DelThesaurusForApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DelThesaurusForApi",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DelThesaurusForApiResponse>(await this.callApi(params, req, runtime), new DelThesaurusForApiResponse({}));
  }

  async delThesaurusForApi(request: DelThesaurusForApiRequest): Promise<DelThesaurusForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.delThesaurusForApiWithOptions(request, runtime);
  }

  async deleteAsrVocabWithOptions(request: DeleteAsrVocabRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAsrVocabResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAsrVocab",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAsrVocabResponse>(await this.callApi(params, req, runtime), new DeleteAsrVocabResponse({}));
  }

  async deleteAsrVocab(request: DeleteAsrVocabRequest): Promise<DeleteAsrVocabResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAsrVocabWithOptions(request, runtime);
  }

  async deleteBusinessCategoryWithOptions(request: DeleteBusinessCategoryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBusinessCategoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBusinessCategory",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBusinessCategoryResponse>(await this.callApi(params, req, runtime), new DeleteBusinessCategoryResponse({}));
  }

  async deleteBusinessCategory(request: DeleteBusinessCategoryRequest): Promise<DeleteBusinessCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBusinessCategoryWithOptions(request, runtime);
  }

  async deleteCustomizationConfigWithOptions(request: DeleteCustomizationConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomizationConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCustomizationConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCustomizationConfigResponse>(await this.callApi(params, req, runtime), new DeleteCustomizationConfigResponse({}));
  }

  async deleteCustomizationConfig(request: DeleteCustomizationConfigRequest): Promise<DeleteCustomizationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomizationConfigWithOptions(request, runtime);
  }

  async deleteDataSetWithOptions(request: DeleteDataSetRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataSetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDataSet",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDataSetResponse>(await this.callApi(params, req, runtime), new DeleteDataSetResponse({}));
  }

  async deleteDataSet(request: DeleteDataSetRequest): Promise<DeleteDataSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataSetWithOptions(request, runtime);
  }

  async deletePrecisionTaskWithOptions(request: DeletePrecisionTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeletePrecisionTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePrecisionTask",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePrecisionTaskResponse>(await this.callApi(params, req, runtime), new DeletePrecisionTaskResponse({}));
  }

  async deletePrecisionTask(request: DeletePrecisionTaskRequest): Promise<DeletePrecisionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePrecisionTaskWithOptions(request, runtime);
  }

  async deleteQualityCheckSchemeWithOptions(request: DeleteQualityCheckSchemeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQualityCheckSchemeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteQualityCheckScheme",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteQualityCheckSchemeResponse>(await this.callApi(params, req, runtime), new DeleteQualityCheckSchemeResponse({}));
  }

  async deleteQualityCheckScheme(request: DeleteQualityCheckSchemeRequest): Promise<DeleteQualityCheckSchemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQualityCheckSchemeWithOptions(request, runtime);
  }

  async deleteRuleWithOptions(request: DeleteRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.forceDelete)) {
      body["ForceDelete"] = request.forceDelete;
    }

    if (!Util.isUnset(request.isSchemeData)) {
      body["IsSchemeData"] = request.isSchemeData;
    }

    if (!Util.isUnset(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRuleResponse>(await this.callApi(params, req, runtime), new DeleteRuleResponse({}));
  }

  async deleteRule(request: DeleteRuleRequest): Promise<DeleteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRuleWithOptions(request, runtime);
  }

  async deleteRuleV4WithOptions(request: DeleteRuleV4Request, runtime: $Util.RuntimeOptions): Promise<DeleteRuleV4Response> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.forceDelete)) {
      body["ForceDelete"] = request.forceDelete;
    }

    if (!Util.isUnset(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRuleV4",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRuleV4Response>(await this.callApi(params, req, runtime), new DeleteRuleV4Response({}));
  }

  async deleteRuleV4(request: DeleteRuleV4Request): Promise<DeleteRuleV4Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRuleV4WithOptions(request, runtime);
  }

  async deleteSchemeTaskConfigWithOptions(request: DeleteSchemeTaskConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSchemeTaskConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSchemeTaskConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSchemeTaskConfigResponse>(await this.callApi(params, req, runtime), new DeleteSchemeTaskConfigResponse({}));
  }

  async deleteSchemeTaskConfig(request: DeleteSchemeTaskConfigRequest): Promise<DeleteSchemeTaskConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSchemeTaskConfigWithOptions(request, runtime);
  }

  async deleteScoreForApiWithOptions(request: DeleteScoreForApiRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScoreForApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteScoreForApi",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteScoreForApiResponse>(await this.callApi(params, req, runtime), new DeleteScoreForApiResponse({}));
  }

  async deleteScoreForApi(request: DeleteScoreForApiRequest): Promise<DeleteScoreForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScoreForApiWithOptions(request, runtime);
  }

  async deleteSkillGroupConfigWithOptions(request: DeleteSkillGroupConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSkillGroupConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSkillGroupConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSkillGroupConfigResponse>(await this.callApi(params, req, runtime), new DeleteSkillGroupConfigResponse({}));
  }

  async deleteSkillGroupConfig(request: DeleteSkillGroupConfigRequest): Promise<DeleteSkillGroupConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSkillGroupConfigWithOptions(request, runtime);
  }

  async deleteSubScoreForApiWithOptions(request: DeleteSubScoreForApiRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSubScoreForApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSubScoreForApi",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSubScoreForApiResponse>(await this.callApi(params, req, runtime), new DeleteSubScoreForApiResponse({}));
  }

  async deleteSubScoreForApi(request: DeleteSubScoreForApiRequest): Promise<DeleteSubScoreForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSubScoreForApiWithOptions(request, runtime);
  }

  async deleteTaskAssignRuleWithOptions(request: DeleteTaskAssignRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTaskAssignRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTaskAssignRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTaskAssignRuleResponse>(await this.callApi(params, req, runtime), new DeleteTaskAssignRuleResponse({}));
  }

  async deleteTaskAssignRule(request: DeleteTaskAssignRuleRequest): Promise<DeleteTaskAssignRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTaskAssignRuleWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param request DeleteUserRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteUserResponse
   */
  // Deprecated
  async deleteUserWithOptions(request: DeleteUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUser",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserResponse>(await this.callApi(params, req, runtime), new DeleteUserResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request DeleteUserRequest
    * @return DeleteUserResponse
   */
  // Deprecated
  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  async deleteWarningConfigWithOptions(request: DeleteWarningConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWarningConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWarningConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWarningConfigResponse>(await this.callApi(params, req, runtime), new DeleteWarningConfigResponse({}));
  }

  async deleteWarningConfig(request: DeleteWarningConfigRequest): Promise<DeleteWarningConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWarningConfigWithOptions(request, runtime);
  }

  async deleteWarningStrategyConfigWithOptions(request: DeleteWarningStrategyConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWarningStrategyConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWarningStrategyConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWarningStrategyConfigResponse>(await this.callApi(params, req, runtime), new DeleteWarningStrategyConfigResponse({}));
  }

  async deleteWarningStrategyConfig(request: DeleteWarningStrategyConfigRequest): Promise<DeleteWarningStrategyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWarningStrategyConfigWithOptions(request, runtime);
  }

  async editThesaurusForApiWithOptions(request: EditThesaurusForApiRequest, runtime: $Util.RuntimeOptions): Promise<EditThesaurusForApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EditThesaurusForApi",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EditThesaurusForApiResponse>(await this.callApi(params, req, runtime), new EditThesaurusForApiResponse({}));
  }

  async editThesaurusForApi(request: EditThesaurusForApiRequest): Promise<EditThesaurusForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editThesaurusForApiWithOptions(request, runtime);
  }

  async getAsrVocabWithOptions(request: GetAsrVocabRequest, runtime: $Util.RuntimeOptions): Promise<GetAsrVocabResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAsrVocab",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAsrVocabResponse>(await this.callApi(params, req, runtime), new GetAsrVocabResponse({}));
  }

  async getAsrVocab(request: GetAsrVocabRequest): Promise<GetAsrVocabResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsrVocabWithOptions(request, runtime);
  }

  async getBusinessCategoryListWithOptions(request: GetBusinessCategoryListRequest, runtime: $Util.RuntimeOptions): Promise<GetBusinessCategoryListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBusinessCategoryList",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBusinessCategoryListResponse>(await this.callApi(params, req, runtime), new GetBusinessCategoryListResponse({}));
  }

  async getBusinessCategoryList(request: GetBusinessCategoryListRequest): Promise<GetBusinessCategoryListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBusinessCategoryListWithOptions(request, runtime);
  }

  async getCustomizationConfigListWithOptions(request: GetCustomizationConfigListRequest, runtime: $Util.RuntimeOptions): Promise<GetCustomizationConfigListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCustomizationConfigList",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCustomizationConfigListResponse>(await this.callApi(params, req, runtime), new GetCustomizationConfigListResponse({}));
  }

  async getCustomizationConfigList(request: GetCustomizationConfigListRequest): Promise<GetCustomizationConfigListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCustomizationConfigListWithOptions(request, runtime);
  }

  async getHitResultWithOptions(request: GetHitResultRequest, runtime: $Util.RuntimeOptions): Promise<GetHitResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHitResult",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHitResultResponse>(await this.callApi(params, req, runtime), new GetHitResultResponse({}));
  }

  async getHitResult(request: GetHitResultRequest): Promise<GetHitResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHitResultWithOptions(request, runtime);
  }

  async getNextResultToVerifyWithOptions(request: GetNextResultToVerifyRequest, runtime: $Util.RuntimeOptions): Promise<GetNextResultToVerifyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetNextResultToVerify",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNextResultToVerifyResponse>(await this.callApi(params, req, runtime), new GetNextResultToVerifyResponse({}));
  }

  async getNextResultToVerify(request: GetNextResultToVerifyRequest): Promise<GetNextResultToVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNextResultToVerifyWithOptions(request, runtime);
  }

  async getPrecisionTaskWithOptions(request: GetPrecisionTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetPrecisionTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPrecisionTask",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPrecisionTaskResponse>(await this.callApi(params, req, runtime), new GetPrecisionTaskResponse({}));
  }

  async getPrecisionTask(request: GetPrecisionTaskRequest): Promise<GetPrecisionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPrecisionTaskWithOptions(request, runtime);
  }

  async getQualityCheckSchemeWithOptions(request: GetQualityCheckSchemeRequest, runtime: $Util.RuntimeOptions): Promise<GetQualityCheckSchemeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQualityCheckScheme",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQualityCheckSchemeResponse>(await this.callApi(params, req, runtime), new GetQualityCheckSchemeResponse({}));
  }

  async getQualityCheckScheme(request: GetQualityCheckSchemeRequest): Promise<GetQualityCheckSchemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQualityCheckSchemeWithOptions(request, runtime);
  }

  async getResultWithOptions(request: GetResultRequest, runtime: $Util.RuntimeOptions): Promise<GetResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResult",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResultResponse>(await this.callApi(params, req, runtime), new GetResultResponse({}));
  }

  async getResult(request: GetResultRequest): Promise<GetResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResultWithOptions(request, runtime);
  }

  async getResultToReviewWithOptions(request: GetResultToReviewRequest, runtime: $Util.RuntimeOptions): Promise<GetResultToReviewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResultToReview",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResultToReviewResponse>(await this.callApi(params, req, runtime), new GetResultToReviewResponse({}));
  }

  async getResultToReview(request: GetResultToReviewRequest): Promise<GetResultToReviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResultToReviewWithOptions(request, runtime);
  }

  async getRuleWithOptions(request: GetRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRuleResponse>(await this.callApi(params, req, runtime), new GetRuleResponse({}));
  }

  async getRule(request: GetRuleRequest): Promise<GetRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRuleWithOptions(request, runtime);
  }

  async getRuleByIdWithOptions(request: GetRuleByIdRequest, runtime: $Util.RuntimeOptions): Promise<GetRuleByIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetRuleById",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRuleByIdResponse>(await this.callApi(params, req, runtime), new GetRuleByIdResponse({}));
  }

  async getRuleById(request: GetRuleByIdRequest): Promise<GetRuleByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRuleByIdWithOptions(request, runtime);
  }

  async getRuleCategoryWithOptions(request: GetRuleCategoryRequest, runtime: $Util.RuntimeOptions): Promise<GetRuleCategoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRuleCategory",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRuleCategoryResponse>(await this.callApi(params, req, runtime), new GetRuleCategoryResponse({}));
  }

  async getRuleCategory(request: GetRuleCategoryRequest): Promise<GetRuleCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRuleCategoryWithOptions(request, runtime);
  }

  async getRuleDetailWithOptions(request: GetRuleDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetRuleDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRuleDetail",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRuleDetailResponse>(await this.callApi(params, req, runtime), new GetRuleDetailResponse({}));
  }

  async getRuleDetail(request: GetRuleDetailRequest): Promise<GetRuleDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRuleDetailWithOptions(request, runtime);
  }

  async getRuleV4WithOptions(request: GetRuleV4Request, runtime: $Util.RuntimeOptions): Promise<GetRuleV4Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetRuleV4",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRuleV4Response>(await this.callApi(params, req, runtime), new GetRuleV4Response({}));
  }

  async getRuleV4(request: GetRuleV4Request): Promise<GetRuleV4Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRuleV4WithOptions(request, runtime);
  }

  /**
    * @deprecated : GetRuleV4Str is deprecated, please use Qualitycheck::2019-01-15::GetRuleV4 instead.
    *
    * @param request GetRuleV4StrRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetRuleV4StrResponse
   */
  // Deprecated
  async getRuleV4StrWithOptions(request: GetRuleV4StrRequest, runtime: $Util.RuntimeOptions): Promise<GetRuleV4StrResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.isSchemeData)) {
      body["IsSchemeData"] = request.isSchemeData;
    }

    if (!Util.isUnset(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetRuleV4Str",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRuleV4StrResponse>(await this.callApi(params, req, runtime), new GetRuleV4StrResponse({}));
  }

  /**
    * @deprecated : GetRuleV4Str is deprecated, please use Qualitycheck::2019-01-15::GetRuleV4 instead.
    *
    * @param request GetRuleV4StrRequest
    * @return GetRuleV4StrResponse
   */
  // Deprecated
  async getRuleV4Str(request: GetRuleV4StrRequest): Promise<GetRuleV4StrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRuleV4StrWithOptions(request, runtime);
  }

  async getRulesCountListWithOptions(request: GetRulesCountListRequest, runtime: $Util.RuntimeOptions): Promise<GetRulesCountListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.businessName)) {
      body["BusinessName"] = request.businessName;
    }

    if (!Util.isUnset(request.businessRange)) {
      body["BusinessRange"] = request.businessRange;
    }

    if (!Util.isUnset(request.categoryName)) {
      body["CategoryName"] = request.categoryName;
    }

    if (!Util.isUnset(request.countTotal)) {
      body["CountTotal"] = request.countTotal;
    }

    if (!Util.isUnset(request.createEmpid)) {
      body["CreateEmpid"] = request.createEmpid;
    }

    if (!Util.isUnset(request.createUserId)) {
      body["CreateUserId"] = request.createUserId;
    }

    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.lastUpdateEmpid)) {
      body["LastUpdateEmpid"] = request.lastUpdateEmpid;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.requireInfos)) {
      body["RequireInfos"] = request.requireInfos;
    }

    if (!Util.isUnset(request.rid)) {
      body["Rid"] = request.rid;
    }

    if (!Util.isUnset(request.ruleIdOrRuleName)) {
      body["RuleIdOrRuleName"] = request.ruleIdOrRuleName;
    }

    if (!Util.isUnset(request.ruleScoreSingleType)) {
      body["RuleScoreSingleType"] = request.ruleScoreSingleType;
    }

    if (!Util.isUnset(request.ruleType)) {
      body["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.schemeId)) {
      body["SchemeId"] = request.schemeId;
    }

    if (!Util.isUnset(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.typeName)) {
      body["TypeName"] = request.typeName;
    }

    if (!Util.isUnset(request.updateEndTime)) {
      body["UpdateEndTime"] = request.updateEndTime;
    }

    if (!Util.isUnset(request.updateStartTime)) {
      body["UpdateStartTime"] = request.updateStartTime;
    }

    if (!Util.isUnset(request.updateUserId)) {
      body["UpdateUserId"] = request.updateUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetRulesCountList",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRulesCountListResponse>(await this.callApi(params, req, runtime), new GetRulesCountListResponse({}));
  }

  async getRulesCountList(request: GetRulesCountListRequest): Promise<GetRulesCountListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRulesCountListWithOptions(request, runtime);
  }

  async getScoreInfoWithOptions(request: GetScoreInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetScoreInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetScoreInfo",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetScoreInfoResponse>(await this.callApi(params, req, runtime), new GetScoreInfoResponse({}));
  }

  async getScoreInfo(request: GetScoreInfoRequest): Promise<GetScoreInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getScoreInfoWithOptions(request, runtime);
  }

  async getSkillGroupConfigWithOptions(request: GetSkillGroupConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetSkillGroupConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSkillGroupConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSkillGroupConfigResponse>(await this.callApi(params, req, runtime), new GetSkillGroupConfigResponse({}));
  }

  async getSkillGroupConfig(request: GetSkillGroupConfigRequest): Promise<GetSkillGroupConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSkillGroupConfigWithOptions(request, runtime);
  }

  async getSyncResultWithOptions(request: GetSyncResultRequest, runtime: $Util.RuntimeOptions): Promise<GetSyncResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSyncResult",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSyncResultResponse>(await this.callApi(params, req, runtime), new GetSyncResultResponse({}));
  }

  async getSyncResult(request: GetSyncResultRequest): Promise<GetSyncResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSyncResultWithOptions(request, runtime);
  }

  async getThesaurusBySynonymForApiWithOptions(request: GetThesaurusBySynonymForApiRequest, runtime: $Util.RuntimeOptions): Promise<GetThesaurusBySynonymForApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetThesaurusBySynonymForApi",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetThesaurusBySynonymForApiResponse>(await this.callApi(params, req, runtime), new GetThesaurusBySynonymForApiResponse({}));
  }

  async getThesaurusBySynonymForApi(request: GetThesaurusBySynonymForApiRequest): Promise<GetThesaurusBySynonymForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getThesaurusBySynonymForApiWithOptions(request, runtime);
  }

  async getWarningStrategyConfigWithOptions(request: GetWarningStrategyConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetWarningStrategyConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWarningStrategyConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWarningStrategyConfigResponse>(await this.callApi(params, req, runtime), new GetWarningStrategyConfigResponse({}));
  }

  async getWarningStrategyConfig(request: GetWarningStrategyConfigRequest): Promise<GetWarningStrategyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWarningStrategyConfigWithOptions(request, runtime);
  }

  async handleComplaintWithOptions(request: HandleComplaintRequest, runtime: $Util.RuntimeOptions): Promise<HandleComplaintResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "HandleComplaint",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HandleComplaintResponse>(await this.callApi(params, req, runtime), new HandleComplaintResponse({}));
  }

  async handleComplaint(request: HandleComplaintRequest): Promise<HandleComplaintResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.handleComplaintWithOptions(request, runtime);
  }

  async insertScoreForApiWithOptions(request: InsertScoreForApiRequest, runtime: $Util.RuntimeOptions): Promise<InsertScoreForApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InsertScoreForApi",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InsertScoreForApiResponse>(await this.callApi(params, req, runtime), new InsertScoreForApiResponse({}));
  }

  async insertScoreForApi(request: InsertScoreForApiRequest): Promise<InsertScoreForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertScoreForApiWithOptions(request, runtime);
  }

  async insertSubScoreForApiWithOptions(request: InsertSubScoreForApiRequest, runtime: $Util.RuntimeOptions): Promise<InsertSubScoreForApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InsertSubScoreForApi",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InsertSubScoreForApiResponse>(await this.callApi(params, req, runtime), new InsertSubScoreForApiResponse({}));
  }

  async insertSubScoreForApi(request: InsertSubScoreForApiRequest): Promise<InsertSubScoreForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertSubScoreForApiWithOptions(request, runtime);
  }

  async invalidRuleWithOptions(request: InvalidRuleRequest, runtime: $Util.RuntimeOptions): Promise<InvalidRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InvalidRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InvalidRuleResponse>(await this.callApi(params, req, runtime), new InvalidRuleResponse({}));
  }

  async invalidRule(request: InvalidRuleRequest): Promise<InvalidRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.invalidRuleWithOptions(request, runtime);
  }

  async listAsrVocabWithOptions(request: ListAsrVocabRequest, runtime: $Util.RuntimeOptions): Promise<ListAsrVocabResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAsrVocab",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAsrVocabResponse>(await this.callApi(params, req, runtime), new ListAsrVocabResponse({}));
  }

  async listAsrVocab(request: ListAsrVocabRequest): Promise<ListAsrVocabResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAsrVocabWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param request ListBusinessSpacesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListBusinessSpacesResponse
   */
  // Deprecated
  async listBusinessSpacesWithOptions(request: ListBusinessSpacesRequest, runtime: $Util.RuntimeOptions): Promise<ListBusinessSpacesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListBusinessSpaces",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListBusinessSpacesResponse>(await this.callApi(params, req, runtime), new ListBusinessSpacesResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request ListBusinessSpacesRequest
    * @return ListBusinessSpacesResponse
   */
  // Deprecated
  async listBusinessSpaces(request: ListBusinessSpacesRequest): Promise<ListBusinessSpacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBusinessSpacesWithOptions(request, runtime);
  }

  async listDataSetWithOptions(request: ListDataSetRequest, runtime: $Util.RuntimeOptions): Promise<ListDataSetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDataSet",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDataSetResponse>(await this.callApi(params, req, runtime), new ListDataSetResponse({}));
  }

  async listDataSet(request: ListDataSetRequest): Promise<ListDataSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataSetWithOptions(request, runtime);
  }

  async listPrecisionTaskWithOptions(request: ListPrecisionTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListPrecisionTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPrecisionTask",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPrecisionTaskResponse>(await this.callApi(params, req, runtime), new ListPrecisionTaskResponse({}));
  }

  async listPrecisionTask(request: ListPrecisionTaskRequest): Promise<ListPrecisionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPrecisionTaskWithOptions(request, runtime);
  }

  async listQualityCheckSchemeWithOptions(request: ListQualityCheckSchemeRequest, runtime: $Util.RuntimeOptions): Promise<ListQualityCheckSchemeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListQualityCheckScheme",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListQualityCheckSchemeResponse>(await this.callApi(params, req, runtime), new ListQualityCheckSchemeResponse({}));
  }

  async listQualityCheckScheme(request: ListQualityCheckSchemeRequest): Promise<ListQualityCheckSchemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQualityCheckSchemeWithOptions(request, runtime);
  }

  async listRolesWithOptions(request: ListRolesRequest, runtime: $Util.RuntimeOptions): Promise<ListRolesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRoles",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRolesResponse>(await this.callApi(params, req, runtime), new ListRolesResponse({}));
  }

  async listRoles(request: ListRolesRequest): Promise<ListRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRolesWithOptions(request, runtime);
  }

  async listRulesWithOptions(request: ListRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRules",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRulesResponse>(await this.callApi(params, req, runtime), new ListRulesResponse({}));
  }

  async listRules(request: ListRulesRequest): Promise<ListRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRulesWithOptions(request, runtime);
  }

  async listRulesV4WithOptions(request: ListRulesV4Request, runtime: $Util.RuntimeOptions): Promise<ListRulesV4Response> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.businessName)) {
      body["BusinessName"] = request.businessName;
    }

    if (!Util.isUnset(request.businessRange)) {
      body["BusinessRange"] = request.businessRange;
    }

    if (!Util.isUnset(request.categoryName)) {
      body["CategoryName"] = request.categoryName;
    }

    if (!Util.isUnset(request.countTotal)) {
      body["CountTotal"] = request.countTotal;
    }

    if (!Util.isUnset(request.createEmpid)) {
      body["CreateEmpid"] = request.createEmpid;
    }

    if (!Util.isUnset(request.createUserId)) {
      body["CreateUserId"] = request.createUserId;
    }

    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.lastUpdateEmpid)) {
      body["LastUpdateEmpid"] = request.lastUpdateEmpid;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.requireInfos)) {
      body["RequireInfos"] = request.requireInfos;
    }

    if (!Util.isUnset(request.rid)) {
      body["Rid"] = request.rid;
    }

    if (!Util.isUnset(request.ruleIdOrRuleName)) {
      body["RuleIdOrRuleName"] = request.ruleIdOrRuleName;
    }

    if (!Util.isUnset(request.ruleScoreSingleType)) {
      body["RuleScoreSingleType"] = request.ruleScoreSingleType;
    }

    if (!Util.isUnset(request.ruleType)) {
      body["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.schemeId)) {
      body["SchemeId"] = request.schemeId;
    }

    if (!Util.isUnset(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.typeName)) {
      body["TypeName"] = request.typeName;
    }

    if (!Util.isUnset(request.updateEndTime)) {
      body["UpdateEndTime"] = request.updateEndTime;
    }

    if (!Util.isUnset(request.updateStartTime)) {
      body["UpdateStartTime"] = request.updateStartTime;
    }

    if (!Util.isUnset(request.updateUserId)) {
      body["UpdateUserId"] = request.updateUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListRulesV4",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRulesV4Response>(await this.callApi(params, req, runtime), new ListRulesV4Response({}));
  }

  async listRulesV4(request: ListRulesV4Request): Promise<ListRulesV4Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRulesV4WithOptions(request, runtime);
  }

  async listSchemeTaskConfigWithOptions(request: ListSchemeTaskConfigRequest, runtime: $Util.RuntimeOptions): Promise<ListSchemeTaskConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSchemeTaskConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSchemeTaskConfigResponse>(await this.callApi(params, req, runtime), new ListSchemeTaskConfigResponse({}));
  }

  async listSchemeTaskConfig(request: ListSchemeTaskConfigRequest): Promise<ListSchemeTaskConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSchemeTaskConfigWithOptions(request, runtime);
  }

  async listSessionGroupWithOptions(request: ListSessionGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListSessionGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSessionGroup",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSessionGroupResponse>(await this.callApi(params, req, runtime), new ListSessionGroupResponse({}));
  }

  async listSessionGroup(request: ListSessionGroupRequest): Promise<ListSessionGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSessionGroupWithOptions(request, runtime);
  }

  async listSkillGroupConfigWithOptions(request: ListSkillGroupConfigRequest, runtime: $Util.RuntimeOptions): Promise<ListSkillGroupConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSkillGroupConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSkillGroupConfigResponse>(await this.callApi(params, req, runtime), new ListSkillGroupConfigResponse({}));
  }

  async listSkillGroupConfig(request: ListSkillGroupConfigRequest): Promise<ListSkillGroupConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSkillGroupConfigWithOptions(request, runtime);
  }

  async listTaskAssignRulesWithOptions(request: ListTaskAssignRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListTaskAssignRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTaskAssignRules",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTaskAssignRulesResponse>(await this.callApi(params, req, runtime), new ListTaskAssignRulesResponse({}));
  }

  async listTaskAssignRules(request: ListTaskAssignRulesRequest): Promise<ListTaskAssignRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTaskAssignRulesWithOptions(request, runtime);
  }

  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUsers",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUsersResponse>(await this.callApi(params, req, runtime), new ListUsersResponse({}));
  }

  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  async listWarningConfigWithOptions(request: ListWarningConfigRequest, runtime: $Util.RuntimeOptions): Promise<ListWarningConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWarningConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWarningConfigResponse>(await this.callApi(params, req, runtime), new ListWarningConfigResponse({}));
  }

  async listWarningConfig(request: ListWarningConfigRequest): Promise<ListWarningConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWarningConfigWithOptions(request, runtime);
  }

  async listWarningStrategyConfigWithOptions(request: ListWarningStrategyConfigRequest, runtime: $Util.RuntimeOptions): Promise<ListWarningStrategyConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWarningStrategyConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWarningStrategyConfigResponse>(await this.callApi(params, req, runtime), new ListWarningStrategyConfigResponse({}));
  }

  async listWarningStrategyConfig(request: ListWarningStrategyConfigRequest): Promise<ListWarningStrategyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWarningStrategyConfigWithOptions(request, runtime);
  }

  async restartAsrTaskWithOptions(request: RestartAsrTaskRequest, runtime: $Util.RuntimeOptions): Promise<RestartAsrTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartAsrTask",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestartAsrTaskResponse>(await this.callApi(params, req, runtime), new RestartAsrTaskResponse({}));
  }

  async restartAsrTask(request: RestartAsrTaskRequest): Promise<RestartAsrTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartAsrTaskWithOptions(request, runtime);
  }

  async revertAssignedSessionWithOptions(request: RevertAssignedSessionRequest, runtime: $Util.RuntimeOptions): Promise<RevertAssignedSessionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RevertAssignedSession",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevertAssignedSessionResponse>(await this.callApi(params, req, runtime), new RevertAssignedSessionResponse({}));
  }

  async revertAssignedSession(request: RevertAssignedSessionRequest): Promise<RevertAssignedSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revertAssignedSessionWithOptions(request, runtime);
  }

  async revertAssignedSessionGroupWithOptions(request: RevertAssignedSessionGroupRequest, runtime: $Util.RuntimeOptions): Promise<RevertAssignedSessionGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RevertAssignedSessionGroup",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevertAssignedSessionGroupResponse>(await this.callApi(params, req, runtime), new RevertAssignedSessionGroupResponse({}));
  }

  async revertAssignedSessionGroup(request: RevertAssignedSessionGroupRequest): Promise<RevertAssignedSessionGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revertAssignedSessionGroupWithOptions(request, runtime);
  }

  async saveConfigDataSetWithOptions(request: SaveConfigDataSetRequest, runtime: $Util.RuntimeOptions): Promise<SaveConfigDataSetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveConfigDataSet",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveConfigDataSetResponse>(await this.callApi(params, req, runtime), new SaveConfigDataSetResponse({}));
  }

  async saveConfigDataSet(request: SaveConfigDataSetRequest): Promise<SaveConfigDataSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveConfigDataSetWithOptions(request, runtime);
  }

  async submitComplaintWithOptions(request: SubmitComplaintRequest, runtime: $Util.RuntimeOptions): Promise<SubmitComplaintResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitComplaint",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitComplaintResponse>(await this.callApi(params, req, runtime), new SubmitComplaintResponse({}));
  }

  async submitComplaint(request: SubmitComplaintRequest): Promise<SubmitComplaintResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitComplaintWithOptions(request, runtime);
  }

  async submitPrecisionTaskWithOptions(request: SubmitPrecisionTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitPrecisionTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitPrecisionTask",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitPrecisionTaskResponse>(await this.callApi(params, req, runtime), new SubmitPrecisionTaskResponse({}));
  }

  async submitPrecisionTask(request: SubmitPrecisionTaskRequest): Promise<SubmitPrecisionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitPrecisionTaskWithOptions(request, runtime);
  }

  async submitQualityCheckTaskWithOptions(request: SubmitQualityCheckTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitQualityCheckTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitQualityCheckTask",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitQualityCheckTaskResponse>(await this.callApi(params, req, runtime), new SubmitQualityCheckTaskResponse({}));
  }

  async submitQualityCheckTask(request: SubmitQualityCheckTaskRequest): Promise<SubmitQualityCheckTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitQualityCheckTaskWithOptions(request, runtime);
  }

  async submitReviewInfoWithOptions(request: SubmitReviewInfoRequest, runtime: $Util.RuntimeOptions): Promise<SubmitReviewInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitReviewInfo",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitReviewInfoResponse>(await this.callApi(params, req, runtime), new SubmitReviewInfoResponse({}));
  }

  async submitReviewInfo(request: SubmitReviewInfoRequest): Promise<SubmitReviewInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitReviewInfoWithOptions(request, runtime);
  }

  async syncQualityCheckWithOptions(request: SyncQualityCheckRequest, runtime: $Util.RuntimeOptions): Promise<SyncQualityCheckResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SyncQualityCheck",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SyncQualityCheckResponse>(await this.callApi(params, req, runtime), new SyncQualityCheckResponse({}));
  }

  async syncQualityCheck(request: SyncQualityCheckRequest): Promise<SyncQualityCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncQualityCheckWithOptions(request, runtime);
  }

  async testRuleV4WithOptions(request: TestRuleV4Request, runtime: $Util.RuntimeOptions): Promise<TestRuleV4Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.isSchemeData)) {
      body["IsSchemeData"] = request.isSchemeData;
    }

    if (!Util.isUnset(request.testJson)) {
      body["TestJson"] = request.testJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TestRuleV4",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TestRuleV4Response>(await this.callApi(params, req, runtime), new TestRuleV4Response({}));
  }

  async testRuleV4(request: TestRuleV4Request): Promise<TestRuleV4Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.testRuleV4WithOptions(request, runtime);
  }

  async updateAsrVocabWithOptions(request: UpdateAsrVocabRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAsrVocabResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAsrVocab",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAsrVocabResponse>(await this.callApi(params, req, runtime), new UpdateAsrVocabResponse({}));
  }

  async updateAsrVocab(request: UpdateAsrVocabRequest): Promise<UpdateAsrVocabResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAsrVocabWithOptions(request, runtime);
  }

  async updateCheckTypeToSchemeWithOptions(request: UpdateCheckTypeToSchemeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCheckTypeToSchemeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCheckTypeToScheme",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCheckTypeToSchemeResponse>(await this.callApi(params, req, runtime), new UpdateCheckTypeToSchemeResponse({}));
  }

  async updateCheckTypeToScheme(request: UpdateCheckTypeToSchemeRequest): Promise<UpdateCheckTypeToSchemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCheckTypeToSchemeWithOptions(request, runtime);
  }

  async updateQualityCheckDataWithOptions(request: UpdateQualityCheckDataRequest, runtime: $Util.RuntimeOptions): Promise<UpdateQualityCheckDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateQualityCheckData",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateQualityCheckDataResponse>(await this.callApi(params, req, runtime), new UpdateQualityCheckDataResponse({}));
  }

  async updateQualityCheckData(request: UpdateQualityCheckDataRequest): Promise<UpdateQualityCheckDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateQualityCheckDataWithOptions(request, runtime);
  }

  async updateQualityCheckSchemeWithOptions(request: UpdateQualityCheckSchemeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateQualityCheckSchemeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateQualityCheckScheme",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateQualityCheckSchemeResponse>(await this.callApi(params, req, runtime), new UpdateQualityCheckSchemeResponse({}));
  }

  async updateQualityCheckScheme(request: UpdateQualityCheckSchemeRequest): Promise<UpdateQualityCheckSchemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateQualityCheckSchemeWithOptions(request, runtime);
  }

  async updateRuleWithOptions(request: UpdateRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRuleResponse>(await this.callApi(params, req, runtime), new UpdateRuleResponse({}));
  }

  async updateRule(request: UpdateRuleRequest): Promise<UpdateRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRuleWithOptions(request, runtime);
  }

  async updateRuleByIdWithOptions(request: UpdateRuleByIdRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRuleByIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.isCopy)) {
      body["IsCopy"] = request.isCopy;
    }

    if (!Util.isUnset(request.jsonStrForRule)) {
      body["JsonStrForRule"] = request.jsonStrForRule;
    }

    if (!Util.isUnset(request.returnRelatedSchemes)) {
      body["ReturnRelatedSchemes"] = request.returnRelatedSchemes;
    }

    if (!Util.isUnset(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRuleById",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRuleByIdResponse>(await this.callApi(params, req, runtime), new UpdateRuleByIdResponse({}));
  }

  async updateRuleById(request: UpdateRuleByIdRequest): Promise<UpdateRuleByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRuleByIdWithOptions(request, runtime);
  }

  async updateRuleToSchemeWithOptions(request: UpdateRuleToSchemeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRuleToSchemeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRuleToScheme",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRuleToSchemeResponse>(await this.callApi(params, req, runtime), new UpdateRuleToSchemeResponse({}));
  }

  async updateRuleToScheme(request: UpdateRuleToSchemeRequest): Promise<UpdateRuleToSchemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRuleToSchemeWithOptions(request, runtime);
  }

  async updateRuleV4WithOptions(request: UpdateRuleV4Request, runtime: $Util.RuntimeOptions): Promise<UpdateRuleV4Response> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jsonStrForRule)) {
      body["JsonStrForRule"] = request.jsonStrForRule;
    }

    if (!Util.isUnset(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRuleV4",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRuleV4Response>(await this.callApi(params, req, runtime), new UpdateRuleV4Response({}));
  }

  async updateRuleV4(request: UpdateRuleV4Request): Promise<UpdateRuleV4Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRuleV4WithOptions(request, runtime);
  }

  async updateSchemeTaskConfigWithOptions(request: UpdateSchemeTaskConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSchemeTaskConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSchemeTaskConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSchemeTaskConfigResponse>(await this.callApi(params, req, runtime), new UpdateSchemeTaskConfigResponse({}));
  }

  async updateSchemeTaskConfig(request: UpdateSchemeTaskConfigRequest): Promise<UpdateSchemeTaskConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSchemeTaskConfigWithOptions(request, runtime);
  }

  async updateScoreForApiWithOptions(request: UpdateScoreForApiRequest, runtime: $Util.RuntimeOptions): Promise<UpdateScoreForApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateScoreForApi",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateScoreForApiResponse>(await this.callApi(params, req, runtime), new UpdateScoreForApiResponse({}));
  }

  async updateScoreForApi(request: UpdateScoreForApiRequest): Promise<UpdateScoreForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateScoreForApiWithOptions(request, runtime);
  }

  async updateSkillGroupConfigWithOptions(request: UpdateSkillGroupConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSkillGroupConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSkillGroupConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSkillGroupConfigResponse>(await this.callApi(params, req, runtime), new UpdateSkillGroupConfigResponse({}));
  }

  async updateSkillGroupConfig(request: UpdateSkillGroupConfigRequest): Promise<UpdateSkillGroupConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSkillGroupConfigWithOptions(request, runtime);
  }

  async updateSubScoreForApiWithOptions(request: UpdateSubScoreForApiRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSubScoreForApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSubScoreForApi",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSubScoreForApiResponse>(await this.callApi(params, req, runtime), new UpdateSubScoreForApiResponse({}));
  }

  async updateSubScoreForApi(request: UpdateSubScoreForApiRequest): Promise<UpdateSubScoreForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSubScoreForApiWithOptions(request, runtime);
  }

  async updateSyncQualityCheckDataWithOptions(request: UpdateSyncQualityCheckDataRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSyncQualityCheckDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSyncQualityCheckData",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSyncQualityCheckDataResponse>(await this.callApi(params, req, runtime), new UpdateSyncQualityCheckDataResponse({}));
  }

  async updateSyncQualityCheckData(request: UpdateSyncQualityCheckDataRequest): Promise<UpdateSyncQualityCheckDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSyncQualityCheckDataWithOptions(request, runtime);
  }

  async updateTaskAssignRuleWithOptions(request: UpdateTaskAssignRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTaskAssignRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTaskAssignRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTaskAssignRuleResponse>(await this.callApi(params, req, runtime), new UpdateTaskAssignRuleResponse({}));
  }

  async updateTaskAssignRule(request: UpdateTaskAssignRuleRequest): Promise<UpdateTaskAssignRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTaskAssignRuleWithOptions(request, runtime);
  }

  async updateUserWithOptions(request: UpdateUserRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUser",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserResponse>(await this.callApi(params, req, runtime), new UpdateUserResponse({}));
  }

  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

  async updateUserConfigWithOptions(request: UpdateUserConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUserConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserConfigResponse>(await this.callApi(params, req, runtime), new UpdateUserConfigResponse({}));
  }

  async updateUserConfig(request: UpdateUserConfigRequest): Promise<UpdateUserConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserConfigWithOptions(request, runtime);
  }

  async updateWarningConfigWithOptions(request: UpdateWarningConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWarningConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWarningConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWarningConfigResponse>(await this.callApi(params, req, runtime), new UpdateWarningConfigResponse({}));
  }

  async updateWarningConfig(request: UpdateWarningConfigRequest): Promise<UpdateWarningConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWarningConfigWithOptions(request, runtime);
  }

  async updateWarningStrategyConfigWithOptions(request: UpdateWarningStrategyConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWarningStrategyConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWarningStrategyConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWarningStrategyConfigResponse>(await this.callApi(params, req, runtime), new UpdateWarningStrategyConfigResponse({}));
  }

  async updateWarningStrategyConfig(request: UpdateWarningStrategyConfigRequest): Promise<UpdateWarningStrategyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWarningStrategyConfigWithOptions(request, runtime);
  }

  async uploadAudioDataWithOptions(request: UploadAudioDataRequest, runtime: $Util.RuntimeOptions): Promise<UploadAudioDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadAudioData",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadAudioDataResponse>(await this.callApi(params, req, runtime), new UploadAudioDataResponse({}));
  }

  async uploadAudioData(request: UploadAudioDataRequest): Promise<UploadAudioDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadAudioDataWithOptions(request, runtime);
  }

  /**
    * @deprecated : UploadData is deprecated, please use Qualitycheck::2019-01-15::UploadDataV4 instead.
    *
    * @param request UploadDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UploadDataResponse
   */
  // Deprecated
  async uploadDataWithOptions(request: UploadDataRequest, runtime: $Util.RuntimeOptions): Promise<UploadDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadData",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadDataResponse>(await this.callApi(params, req, runtime), new UploadDataResponse({}));
  }

  /**
    * @deprecated : UploadData is deprecated, please use Qualitycheck::2019-01-15::UploadDataV4 instead.
    *
    * @param request UploadDataRequest
    * @return UploadDataResponse
   */
  // Deprecated
  async uploadData(request: UploadDataRequest): Promise<UploadDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadDataWithOptions(request, runtime);
  }

  async uploadDataSyncWithOptions(request: UploadDataSyncRequest, runtime: $Util.RuntimeOptions): Promise<UploadDataSyncResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadDataSync",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadDataSyncResponse>(await this.callApi(params, req, runtime), new UploadDataSyncResponse({}));
  }

  async uploadDataSync(request: UploadDataSyncRequest): Promise<UploadDataSyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadDataSyncWithOptions(request, runtime);
  }

  async uploadDataV4WithOptions(request: UploadDataV4Request, runtime: $Util.RuntimeOptions): Promise<UploadDataV4Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      body["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      body["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UploadDataV4",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadDataV4Response>(await this.callApi(params, req, runtime), new UploadDataV4Response({}));
  }

  async uploadDataV4(request: UploadDataV4Request): Promise<UploadDataV4Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadDataV4WithOptions(request, runtime);
  }

  async uploadRuleWithOptions(request: UploadRuleRequest, runtime: $Util.RuntimeOptions): Promise<UploadRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadRuleResponse>(await this.callApi(params, req, runtime), new UploadRuleResponse({}));
  }

  async uploadRule(request: UploadRuleRequest): Promise<UploadRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadRuleWithOptions(request, runtime);
  }

  async verifyFileWithOptions(request: VerifyFileRequest, runtime: $Util.RuntimeOptions): Promise<VerifyFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyFile",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyFileResponse>(await this.callApi(params, req, runtime), new VerifyFileResponse({}));
  }

  async verifyFile(request: VerifyFileRequest): Promise<VerifyFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyFileWithOptions(request, runtime);
  }

  async verifySentenceWithOptions(request: VerifySentenceRequest, runtime: $Util.RuntimeOptions): Promise<VerifySentenceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifySentence",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifySentenceResponse>(await this.callApi(params, req, runtime), new VerifySentenceResponse({}));
  }

  async verifySentence(request: VerifySentenceRequest): Promise<VerifySentenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifySentenceWithOptions(request, runtime);
  }

}
