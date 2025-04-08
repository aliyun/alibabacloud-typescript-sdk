// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class BatchCreateAICoachTaskRequestStudentList extends $dara.Model {
  studentAudioUrl?: string;
  studentId?: string;
  static names(): { [key: string]: string } {
    return {
      studentAudioUrl: 'studentAudioUrl',
      studentId: 'studentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      studentAudioUrl: 'string',
      studentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetProjectTaskResponseBodyResultList extends $dara.Model {
  errorMsg?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * 11
   */
  taskId?: string;
  /**
   * @example
   * http
   */
  videoDownloadUrl?: string;
  /**
   * @example
   * 1000
   */
  videoDuration?: number;
  /**
   * @example
   * http
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'errorMsg',
      status: 'status',
      taskId: 'taskId',
      videoDownloadUrl: 'videoDownloadUrl',
      videoDuration: 'videoDuration',
      videoUrl: 'videoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      status: 'string',
      taskId: 'string',
      videoDownloadUrl: 'string',
      videoDuration: 'number',
      videoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetTrainTaskResponseBodyVoiceListVoiceMaterial extends $dara.Model {
  /**
   * @example
   * 1
   */
  voiceId?: number;
  /**
   * @example
   * zh
   */
  voiceLanguage?: string;
  /**
   * @example
   * http://www.voice.com
   */
  voiceUrl?: string;
  static names(): { [key: string]: string } {
    return {
      voiceId: 'voiceId',
      voiceLanguage: 'voiceLanguage',
      voiceUrl: 'voiceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      voiceId: 'number',
      voiceLanguage: 'string',
      voiceUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetTrainTaskResponseBodyVoiceList extends $dara.Model {
  /**
   * @example
   * 1524004782438111
   */
  aliyunSubId?: string;
  auditFailMessage?: string;
  /**
   * @example
   * auditFail
   */
  auditStatus?: string;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  createTime?: string;
  /**
   * @example
   * M
   */
  gender?: string;
  name?: string;
  /**
   * @example
   * BASIC_MODEL
   */
  resSpecType?: string;
  /**
   * @example
   * 837091359375048704
   */
  taskId?: string;
  /**
   * @example
   * CopyVoice
   */
  taskType?: string;
  trainFailMessage?: string;
  /**
   * @example
   * trainFail
   */
  trainStatus?: string;
  /**
   * @example
   * realTimeInteractivity
   */
  useScene?: string;
  voiceMaterial?: BatchGetTrainTaskResponseBodyVoiceListVoiceMaterial;
  static names(): { [key: string]: string } {
    return {
      aliyunSubId: 'aliyunSubId',
      auditFailMessage: 'auditFailMessage',
      auditStatus: 'auditStatus',
      createTime: 'createTime',
      gender: 'gender',
      name: 'name',
      resSpecType: 'resSpecType',
      taskId: 'taskId',
      taskType: 'taskType',
      trainFailMessage: 'trainFailMessage',
      trainStatus: 'trainStatus',
      useScene: 'useScene',
      voiceMaterial: 'voiceMaterial',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunSubId: 'string',
      auditFailMessage: 'string',
      auditStatus: 'string',
      createTime: 'string',
      gender: 'string',
      name: 'string',
      resSpecType: 'string',
      taskId: 'string',
      taskType: 'string',
      trainFailMessage: 'string',
      trainStatus: 'string',
      useScene: 'string',
      voiceMaterial: BatchGetTrainTaskResponseBodyVoiceListVoiceMaterial,
    };
  }

  validate() {
    if(this.voiceMaterial && typeof (this.voiceMaterial as any).validate === 'function') {
      (this.voiceMaterial as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetVideoClipTaskResponseBodyTaskListVideoList extends $dara.Model {
  /**
   * @example
   * 0
   */
  beginTime?: number;
  description?: string;
  /**
   * @example
   * 11110
   */
  endTime?: number;
  errorMsg?: string;
  title?: string;
  /**
   * @example
   * https://e-ai.oss-cn-guangzhou.aliyuncs.com/video/jlkasdl.mp4
   */
  videoDownloadUrl?: string;
  videoName?: string;
  /**
   * @example
   * https://e-ai.oss-cn-guangzhou.aliyuncs.com/video/jlkasdl.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'beginTime',
      description: 'description',
      endTime: 'endTime',
      errorMsg: 'errorMsg',
      title: 'title',
      videoDownloadUrl: 'videoDownloadUrl',
      videoName: 'videoName',
      videoUrl: 'videoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      description: 'string',
      endTime: 'number',
      errorMsg: 'string',
      title: 'string',
      videoDownloadUrl: 'string',
      videoName: 'string',
      videoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetVideoClipTaskResponseBodyTaskList extends $dara.Model {
  /**
   * @example
   * FINISHED
   */
  status?: string;
  /**
   * @example
   * 864413342857035776
   */
  taskId?: string;
  /**
   * @example
   * 43335
   */
  totalDuration?: number;
  /**
   * @example
   * 11
   */
  totalToken?: number;
  videoList?: BatchGetVideoClipTaskResponseBodyTaskListVideoList[];
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      taskId: 'taskId',
      totalDuration: 'totalDuration',
      totalToken: 'totalToken',
      videoList: 'videoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      taskId: 'string',
      totalDuration: 'number',
      totalToken: 'number',
      videoList: { 'type': 'array', 'itemType': BatchGetVideoClipTaskResponseBodyTaskListVideoList },
    };
  }

  validate() {
    if(Array.isArray(this.videoList)) {
      $dara.Model.validateArray(this.videoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryIndividuationTextResponseBodyTextList extends $dara.Model {
  content?: string;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  createTime?: string;
  /**
   * @example
   * 1
   */
  errorMsg?: string;
  /**
   * @example
   * 2849286
   */
  itemId?: string;
  /**
   * @example
   * 812884915104530432
   */
  projectId?: string;
  /**
   * @example
   * 1
   */
  status?: string;
  /**
   * @example
   * 837074737851613184
   */
  taskId?: string;
  /**
   * @example
   * 110825
   */
  textId?: string;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  updateTime?: string;
  /**
   * @example
   * 11
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      createTime: 'createTime',
      errorMsg: 'errorMsg',
      itemId: 'itemId',
      projectId: 'projectId',
      status: 'status',
      taskId: 'taskId',
      textId: 'textId',
      updateTime: 'updateTime',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      errorMsg: 'string',
      itemId: 'string',
      projectId: 'string',
      status: 'string',
      taskId: 'string',
      textId: 'string',
      updateTime: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountTextResponseBodyCountTextCmdList extends $dara.Model {
  /**
   * @example
   * 4
   */
  count?: number;
  /**
   * @example
   * RED_BOOK
   */
  theme?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      theme: 'theme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      theme: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAICoachTaskSessionResponseBodyScriptInfo extends $dara.Model {
  agentIconUrl?: string;
  characterName?: string;
  dialogueTextFlag?: boolean;
  dialogueTipFlag?: boolean;
  initiator?: string;
  inputTypeList?: string[];
  /**
   * @example
   * 11
   */
  maxDuration?: number;
  /**
   * @example
   * test
   */
  scriptDesc?: string;
  scriptName?: string;
  scriptRecordId?: string;
  scriptType?: number;
  sparringTipContent?: string;
  sparringTipTitle?: string;
  studentThinkTimeFlag?: boolean;
  studentThinkTimeLimit?: number;
  static names(): { [key: string]: string } {
    return {
      agentIconUrl: 'agentIconUrl',
      characterName: 'characterName',
      dialogueTextFlag: 'dialogueTextFlag',
      dialogueTipFlag: 'dialogueTipFlag',
      initiator: 'initiator',
      inputTypeList: 'inputTypeList',
      maxDuration: 'maxDuration',
      scriptDesc: 'scriptDesc',
      scriptName: 'scriptName',
      scriptRecordId: 'scriptRecordId',
      scriptType: 'scriptType',
      sparringTipContent: 'sparringTipContent',
      sparringTipTitle: 'sparringTipTitle',
      studentThinkTimeFlag: 'studentThinkTimeFlag',
      studentThinkTimeLimit: 'studentThinkTimeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIconUrl: 'string',
      characterName: 'string',
      dialogueTextFlag: 'boolean',
      dialogueTipFlag: 'boolean',
      initiator: 'string',
      inputTypeList: { 'type': 'array', 'itemType': 'string' },
      maxDuration: 'number',
      scriptDesc: 'string',
      scriptName: 'string',
      scriptRecordId: 'string',
      scriptType: 'number',
      sparringTipContent: 'string',
      sparringTipTitle: 'string',
      studentThinkTimeFlag: 'boolean',
      studentThinkTimeLimit: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.inputTypeList)) {
      $dara.Model.validateArray(this.inputTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachScriptResponseBodyCheckCheatConfig extends $dara.Model {
  checkImage?: boolean;
  checkVoice?: boolean;
  static names(): { [key: string]: string } {
    return {
      checkImage: 'checkImage',
      checkVoice: 'checkVoice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkImage: 'boolean',
      checkVoice: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachScriptResponseBodyCompleteStrategy extends $dara.Model {
  /**
   * @example
   * 5
   */
  abnormalQuitSessionExpired?: number;
  /**
   * @example
   * true
   */
  abnormalQuitSessionExpiredFlag?: boolean;
  /**
   * @example
   * true
   */
  clickCompleteAutoEnd?: boolean;
  /**
   * @example
   * 15
   */
  duration?: number;
  /**
   * @example
   * true
   */
  durationFlag?: boolean;
  /**
   * @example
   * true
   */
  fullCoverageAutoEnd?: boolean;
  static names(): { [key: string]: string } {
    return {
      abnormalQuitSessionExpired: 'abnormalQuitSessionExpired',
      abnormalQuitSessionExpiredFlag: 'abnormalQuitSessionExpiredFlag',
      clickCompleteAutoEnd: 'clickCompleteAutoEnd',
      duration: 'duration',
      durationFlag: 'durationFlag',
      fullCoverageAutoEnd: 'fullCoverageAutoEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalQuitSessionExpired: 'number',
      abnormalQuitSessionExpiredFlag: 'boolean',
      clickCompleteAutoEnd: 'boolean',
      duration: 'number',
      durationFlag: 'boolean',
      fullCoverageAutoEnd: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachScriptResponseBodyPointDeductionRuleList extends $dara.Model {
  /**
   * @example
   * demo
   */
  description?: string;
  punishmentTypes?: string[];
  ruleValue?: string;
  /**
   * @example
   * 90
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      punishmentTypes: 'punishmentTypes',
      ruleValue: 'ruleValue',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      punishmentTypes: { 'type': 'array', 'itemType': 'string' },
      ruleValue: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.punishmentTypes)) {
      $dara.Model.validateArray(this.punishmentTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachScriptResponseBodyPointsAnswerListAnswerValuesKeywordValues extends $dara.Model {
  name?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachScriptResponseBodyPointsAnswerListAnswerValuesScoringRules extends $dara.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
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

export class GetAICoachScriptResponseBodyPointsAnswerListAnswerValues extends $dara.Model {
  answerName?: string;
  answerWeight?: number;
  keywordValues?: GetAICoachScriptResponseBodyPointsAnswerListAnswerValuesKeywordValues[];
  keywordWeight?: number;
  scoringRules?: GetAICoachScriptResponseBodyPointsAnswerListAnswerValuesScoringRules[];
  static names(): { [key: string]: string } {
    return {
      answerName: 'answerName',
      answerWeight: 'answerWeight',
      keywordValues: 'keywordValues',
      keywordWeight: 'keywordWeight',
      scoringRules: 'scoringRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerName: 'string',
      answerWeight: 'number',
      keywordValues: { 'type': 'array', 'itemType': GetAICoachScriptResponseBodyPointsAnswerListAnswerValuesKeywordValues },
      keywordWeight: 'number',
      scoringRules: { 'type': 'array', 'itemType': GetAICoachScriptResponseBodyPointsAnswerListAnswerValuesScoringRules },
    };
  }

  validate() {
    if(Array.isArray(this.keywordValues)) {
      $dara.Model.validateArray(this.keywordValues);
    }
    if(Array.isArray(this.scoringRules)) {
      $dara.Model.validateArray(this.scoringRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachScriptResponseBodyPointsAnswerListParameters extends $dara.Model {
  /**
   * @example
   * name
   */
  name?: string;
  /**
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class GetAICoachScriptResponseBodyPointsAnswerList extends $dara.Model {
  answerValues?: GetAICoachScriptResponseBodyPointsAnswerListAnswerValues[];
  enabledKeyword?: boolean;
  name?: string;
  nameList?: string[];
  operators?: string;
  parameters?: GetAICoachScriptResponseBodyPointsAnswerListParameters[];
  /**
   * @example
   * normalKnowledge
   */
  type?: string;
  /**
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      answerValues: 'answerValues',
      enabledKeyword: 'enabledKeyword',
      name: 'name',
      nameList: 'nameList',
      operators: 'operators',
      parameters: 'parameters',
      type: 'type',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerValues: { 'type': 'array', 'itemType': GetAICoachScriptResponseBodyPointsAnswerListAnswerValues },
      enabledKeyword: 'boolean',
      name: 'string',
      nameList: { 'type': 'array', 'itemType': 'string' },
      operators: 'string',
      parameters: { 'type': 'array', 'itemType': GetAICoachScriptResponseBodyPointsAnswerListParameters },
      type: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.answerValues)) {
      $dara.Model.validateArray(this.answerValues);
    }
    if(Array.isArray(this.nameList)) {
      $dara.Model.validateArray(this.nameList);
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachScriptResponseBodyPoints extends $dara.Model {
  answerList?: GetAICoachScriptResponseBodyPointsAnswerList[];
  knowledgeList?: string[];
  /**
   * @example
   * demo
   */
  name?: string;
  pointId?: string;
  /**
   * @example
   * test
   */
  questionDescription?: string;
  /**
   * @example
   * 1
   */
  sortNo?: number;
  /**
   * @example
   * 50
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      answerList: 'answerList',
      knowledgeList: 'knowledgeList',
      name: 'name',
      pointId: 'pointId',
      questionDescription: 'questionDescription',
      sortNo: 'sortNo',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerList: { 'type': 'array', 'itemType': GetAICoachScriptResponseBodyPointsAnswerList },
      knowledgeList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      pointId: 'string',
      questionDescription: 'string',
      sortNo: 'number',
      weight: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.answerList)) {
      $dara.Model.validateArray(this.answerList);
    }
    if(Array.isArray(this.knowledgeList)) {
      $dara.Model.validateArray(this.knowledgeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachScriptResponseBodySampleDialogueList extends $dara.Model {
  message?: string;
  /**
   * @example
   * coach
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachScriptResponseBodyWeights extends $dara.Model {
  /**
   * @example
   * 10
   */
  abilityEvaluation?: number;
  /**
   * @example
   * false
   */
  abilityEvaluationEnabled?: boolean;
  /**
   * @example
   * 10
   */
  assessmentPoint?: number;
  /**
   * @example
   * 10
   */
  expressiveness?: number;
  /**
   * @example
   * true
   */
  expressivenessEnabled?: boolean;
  /**
   * @example
   * 10
   */
  pointDeductionRule?: number;
  /**
   * @example
   * true
   */
  pointDeductionRuleEnabled?: boolean;
  /**
   * @example
   * 10
   */
  standard?: number;
  /**
   * @example
   * true
   */
  standardEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      abilityEvaluation: 'abilityEvaluation',
      abilityEvaluationEnabled: 'abilityEvaluationEnabled',
      assessmentPoint: 'assessmentPoint',
      expressiveness: 'expressiveness',
      expressivenessEnabled: 'expressivenessEnabled',
      pointDeductionRule: 'pointDeductionRule',
      pointDeductionRuleEnabled: 'pointDeductionRuleEnabled',
      standard: 'standard',
      standardEnabled: 'standardEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abilityEvaluation: 'number',
      abilityEvaluationEnabled: 'boolean',
      assessmentPoint: 'number',
      expressiveness: 'number',
      expressivenessEnabled: 'boolean',
      pointDeductionRule: 'number',
      pointDeductionRuleEnabled: 'boolean',
      standard: 'number',
      standardEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachTaskSessionHistoryResponseBodyConversationList extends $dara.Model {
  audioUrl?: string;
  evaluationFeedback?: string;
  /**
   * @example
   * {}
   */
  evaluationResult?: string;
  message?: string;
  recordId?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      audioUrl: 'audioUrl',
      evaluationFeedback: 'evaluationFeedback',
      evaluationResult: 'evaluationResult',
      message: 'message',
      recordId: 'recordId',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioUrl: 'string',
      evaluationFeedback: 'string',
      evaluationResult: 'string',
      message: 'string',
      recordId: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextTemplateResponseBodyAvailableIndustryTextModeTypesTextStyles extends $dara.Model {
  desc?: string;
  /**
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @example
   * RED_BOOK
   */
  name?: string;
  /**
   * @example
   * 111
   */
  templateKey?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      disabled: 'disabled',
      name: 'name',
      templateKey: 'templateKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      disabled: 'boolean',
      name: 'string',
      templateKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextTemplateResponseBodyAvailableIndustryTextModeTypes extends $dara.Model {
  /**
   * @example
   * Rewrite
   */
  name?: string;
  textStyles?: GetTextTemplateResponseBodyAvailableIndustryTextModeTypesTextStyles[];
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      textStyles: 'textStyles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      textStyles: { 'type': 'array', 'itemType': GetTextTemplateResponseBodyAvailableIndustryTextModeTypesTextStyles },
    };
  }

  validate() {
    if(Array.isArray(this.textStyles)) {
      $dara.Model.validateArray(this.textStyles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextTemplateResponseBodyAvailableIndustry extends $dara.Model {
  /**
   * @example
   * Car
   */
  name?: string;
  textModeTypes?: GetTextTemplateResponseBodyAvailableIndustryTextModeTypes[];
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      textModeTypes: 'textModeTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      textModeTypes: { 'type': 'array', 'itemType': GetTextTemplateResponseBodyAvailableIndustryTextModeTypes },
    };
  }

  validate() {
    if(Array.isArray(this.textModeTypes)) {
      $dara.Model.validateArray(this.textModeTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAICoachScriptPageResponseBodyListCompleteStrategy extends $dara.Model {
  /**
   * @example
   * true
   */
  clickCompleteAutoEnd?: boolean;
  /**
   * @example
   * 75
   */
  duration?: number;
  /**
   * @example
   * false
   */
  fullCoverageAutoEnd?: boolean;
  static names(): { [key: string]: string } {
    return {
      clickCompleteAutoEnd: 'clickCompleteAutoEnd',
      duration: 'duration',
      fullCoverageAutoEnd: 'fullCoverageAutoEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clickCompleteAutoEnd: 'boolean',
      duration: 'number',
      fullCoverageAutoEnd: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAICoachScriptPageResponseBodyListSampleDialogueList extends $dara.Model {
  message?: string;
  /**
   * @example
   * student
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAICoachScriptPageResponseBodyListScoreConfig extends $dara.Model {
  enabled?: boolean;
  passScore?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      passScore: 'passScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      passScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAICoachScriptPageResponseBodyListWeights extends $dara.Model {
  /**
   * @example
   * 50
   */
  assessmentPoint?: number;
  /**
   * @example
   * 30
   */
  expressiveness?: number;
  expressivenessEnabled?: boolean;
  pointDeductionRule?: number;
  pointDeductionRuleEnabled?: boolean;
  /**
   * @example
   * 20
   */
  standard?: number;
  /**
   * @example
   * true
   */
  standardEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      assessmentPoint: 'assessmentPoint',
      expressiveness: 'expressiveness',
      expressivenessEnabled: 'expressivenessEnabled',
      pointDeductionRule: 'pointDeductionRule',
      pointDeductionRuleEnabled: 'pointDeductionRuleEnabled',
      standard: 'standard',
      standardEnabled: 'standardEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assessmentPoint: 'number',
      expressiveness: 'number',
      expressivenessEnabled: 'boolean',
      pointDeductionRule: 'number',
      pointDeductionRuleEnabled: 'boolean',
      standard: 'number',
      standardEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAICoachScriptPageResponseBodyList extends $dara.Model {
  appendQuestionFlag?: string;
  assessmentScope?: string;
  completeStrategy?: ListAICoachScriptPageResponseBodyListCompleteStrategy;
  /**
   * @example
   * https://oss-ata.alibaba.com/front/live/banner1.png
   */
  coverUrl?: string;
  dialogueTextFlag?: boolean;
  dialogueTipFlag?: boolean;
  evaluateReportFlag?: boolean;
  expressiveness?: { [key: string]: string };
  /**
   * @example
   * 2024-12-25 14:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-12-25 14:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * student
   */
  initiator?: string;
  /**
   * @example
   * 4
   */
  interactionType?: string;
  introduce?: string;
  /**
   * @example
   * prod-ydsf
   */
  name?: string;
  orderAckFlag?: boolean;
  sampleDialogueList?: ListAICoachScriptPageResponseBodyListSampleDialogueList[];
  scoreConfig?: ListAICoachScriptPageResponseBodyListScoreConfig;
  /**
   * @example
   * 1
   */
  scriptRecordId?: string;
  sparringTipContent?: string;
  sparringTipTitle?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  studentThinkTimeFlag?: boolean;
  type?: number;
  weights?: ListAICoachScriptPageResponseBodyListWeights;
  static names(): { [key: string]: string } {
    return {
      appendQuestionFlag: 'appendQuestionFlag',
      assessmentScope: 'assessmentScope',
      completeStrategy: 'completeStrategy',
      coverUrl: 'coverUrl',
      dialogueTextFlag: 'dialogueTextFlag',
      dialogueTipFlag: 'dialogueTipFlag',
      evaluateReportFlag: 'evaluateReportFlag',
      expressiveness: 'expressiveness',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      initiator: 'initiator',
      interactionType: 'interactionType',
      introduce: 'introduce',
      name: 'name',
      orderAckFlag: 'orderAckFlag',
      sampleDialogueList: 'sampleDialogueList',
      scoreConfig: 'scoreConfig',
      scriptRecordId: 'scriptRecordId',
      sparringTipContent: 'sparringTipContent',
      sparringTipTitle: 'sparringTipTitle',
      status: 'status',
      studentThinkTimeFlag: 'studentThinkTimeFlag',
      type: 'type',
      weights: 'weights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appendQuestionFlag: 'string',
      assessmentScope: 'string',
      completeStrategy: ListAICoachScriptPageResponseBodyListCompleteStrategy,
      coverUrl: 'string',
      dialogueTextFlag: 'boolean',
      dialogueTipFlag: 'boolean',
      evaluateReportFlag: 'boolean',
      expressiveness: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gmtCreate: 'string',
      gmtModified: 'string',
      initiator: 'string',
      interactionType: 'string',
      introduce: 'string',
      name: 'string',
      orderAckFlag: 'boolean',
      sampleDialogueList: { 'type': 'array', 'itemType': ListAICoachScriptPageResponseBodyListSampleDialogueList },
      scoreConfig: ListAICoachScriptPageResponseBodyListScoreConfig,
      scriptRecordId: 'string',
      sparringTipContent: 'string',
      sparringTipTitle: 'string',
      status: 'number',
      studentThinkTimeFlag: 'boolean',
      type: 'number',
      weights: ListAICoachScriptPageResponseBodyListWeights,
    };
  }

  validate() {
    if(this.completeStrategy && typeof (this.completeStrategy as any).validate === 'function') {
      (this.completeStrategy as any).validate();
    }
    if(this.expressiveness) {
      $dara.Model.validateMap(this.expressiveness);
    }
    if(Array.isArray(this.sampleDialogueList)) {
      $dara.Model.validateArray(this.sampleDialogueList);
    }
    if(this.scoreConfig && typeof (this.scoreConfig as any).validate === 'function') {
      (this.scoreConfig as any).validate();
    }
    if(this.weights && typeof (this.weights as any).validate === 'function') {
      (this.weights as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAICoachTaskPageResponseBodyTaskList extends $dara.Model {
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  finishTime?: string;
  /**
   * @example
   * FINISHED
   */
  status?: string;
  /**
   * @example
   * 222
   */
  studentId?: string;
  /**
   * @example
   * 11111111111
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      finishTime: 'finishTime',
      status: 'status',
      studentId: 'studentId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishTime: 'string',
      status: 'string',
      studentId: 'string',
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

export class ListAgentsResponseBodyList extends $dara.Model {
  /**
   * @example
   * 840016700254633984
   */
  agentId?: string;
  agentName?: string;
  /**
   * @example
   * text
   */
  agentScene?: string;
  charactersDescription?: string;
  /**
   * @example
   * 1
   */
  enableInteraction?: number;
  /**
   * @example
   * Car
   */
  industry?: string;
  /**
   * @example
   * true
   */
  onlineSearch?: boolean;
  /**
   * @example
   * SYSTEM
   */
  owner?: string;
  /**
   * @example
   * http
   * ;//www.abc.com/111.mp4
   */
  referenceUrl?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * RED_BOOK
   */
  textStyle?: string;
  /**
   * @example
   * Seller
   */
  viewer?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      agentName: 'agentName',
      agentScene: 'agentScene',
      charactersDescription: 'charactersDescription',
      enableInteraction: 'enableInteraction',
      industry: 'industry',
      onlineSearch: 'onlineSearch',
      owner: 'owner',
      referenceUrl: 'referenceUrl',
      status: 'status',
      textStyle: 'textStyle',
      viewer: 'viewer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      agentScene: 'string',
      charactersDescription: 'string',
      enableInteraction: 'number',
      industry: 'string',
      onlineSearch: 'boolean',
      owner: 'string',
      referenceUrl: 'string',
      status: 'number',
      textStyle: 'string',
      viewer: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvatarProjectResponseBodyQueryAvatarProjectResultList extends $dara.Model {
  /**
   * @example
   * 1000206
   */
  agentId?: string;
  errorMsg?: string;
  /**
   * @example
   * 12826084562688
   */
  projectId?: string;
  projectName?: string;
  /**
   * @example
   * DEPLOYING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      errorMsg: 'errorMsg',
      projectId: 'projectId',
      projectName: 'projectName',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      errorMsg: 'string',
      projectId: 'string',
      projectName: 'string',
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

export class QueryAvatarProjectResponseBodyFramesLayersMaterial extends $dara.Model {
  format?: string;
  id?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'format',
      id: 'id',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      id: 'string',
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

export class QueryAvatarProjectResponseBodyFramesLayers extends $dara.Model {
  height?: number;
  material?: QueryAvatarProjectResponseBodyFramesLayersMaterial;
  positionX?: number;
  positionY?: number;
  type?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'height',
      material: 'material',
      positionX: 'positionX',
      positionY: 'positionY',
      type: 'type',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      material: QueryAvatarProjectResponseBodyFramesLayersMaterial,
      positionX: 'number',
      positionY: 'number',
      type: 'string',
      width: 'number',
    };
  }

  validate() {
    if(this.material && typeof (this.material as any).validate === 'function') {
      (this.material as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvatarProjectResponseBodyFramesVideoScript extends $dara.Model {
  speedRate?: string;
  voiceTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      speedRate: 'speedRate',
      voiceTemplateId: 'voiceTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      speedRate: 'string',
      voiceTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvatarProjectResponseBodyFrames extends $dara.Model {
  layers?: QueryAvatarProjectResponseBodyFramesLayers[];
  videoScript?: QueryAvatarProjectResponseBodyFramesVideoScript;
  static names(): { [key: string]: string } {
    return {
      layers: 'layers',
      videoScript: 'videoScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layers: { 'type': 'array', 'itemType': QueryAvatarProjectResponseBodyFramesLayers },
      videoScript: QueryAvatarProjectResponseBodyFramesVideoScript,
    };
  }

  validate() {
    if(Array.isArray(this.layers)) {
      $dara.Model.validateArray(this.layers);
    }
    if(this.videoScript && typeof (this.videoScript as any).validate === 'function') {
      (this.videoScript as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvatarResourceResponseBodyQueryResourceInfoList extends $dara.Model {
  /**
   * @example
   * 21275
   */
  resourceId?: string;
  /**
   * @example
   * STANDARD
   */
  type?: string;
  /**
   * @example
   * 1719904342237
   */
  validPeriodTime?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      type: 'type',
      validPeriodTime: 'validPeriodTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      type: 'string',
      validPeriodTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIndividuationTextTaskResponseBodyTextList extends $dara.Model {
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 2761
   */
  textId?: string;
  /**
   * @example
   * 11
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      textId: 'textId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      textId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySessionInfoResponseBodyQueryResourceInfoList extends $dara.Model {
  /**
   * @example
   * a169e9ec18404edc9972afd80866dc97
   */
  sessionId?: string;
  /**
   * @example
   * FREE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'sessionId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
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

export class SaveAvatarProjectRequestFramesLayersMaterial extends $dara.Model {
  /**
   * @example
   * image/png
   */
  format?: string;
  /**
   * @example
   * 434508
   */
  id?: string;
  /**
   * @example
   * https://alidocs.dingtalk.com/i/nodes/vy20BglGWOxjGpq0C5G4DlN0VA7depqY
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'format',
      id: 'id',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      id: 'string',
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

export class SaveAvatarProjectRequestFramesLayers extends $dara.Model {
  /**
   * @example
   * 100
   */
  height?: number;
  material?: SaveAvatarProjectRequestFramesLayersMaterial;
  /**
   * @example
   * 1
   */
  positionX?: number;
  /**
   * @example
   * 1
   */
  positionY?: number;
  /**
   * @example
   * ANCHOR
   */
  type?: string;
  /**
   * @example
   * 100
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'height',
      material: 'material',
      positionX: 'positionX',
      positionY: 'positionY',
      type: 'type',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      material: SaveAvatarProjectRequestFramesLayersMaterial,
      positionX: 'number',
      positionY: 'number',
      type: 'string',
      width: 'number',
    };
  }

  validate() {
    if(this.material && typeof (this.material as any).validate === 'function') {
      (this.material as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveAvatarProjectRequestFramesVideoScript extends $dara.Model {
  /**
   * @example
   * 1.0
   */
  speedRate?: string;
  voiceLanguage?: string;
  /**
   * @example
   * 1
   */
  voiceTemplateId?: string;
  /**
   * @example
   * 50
   */
  volume?: string;
  static names(): { [key: string]: string } {
    return {
      speedRate: 'speedRate',
      voiceLanguage: 'voiceLanguage',
      voiceTemplateId: 'voiceTemplateId',
      volume: 'volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      speedRate: 'string',
      voiceLanguage: 'string',
      voiceTemplateId: 'string',
      volume: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveAvatarProjectRequestFrames extends $dara.Model {
  layers?: SaveAvatarProjectRequestFramesLayers[];
  videoScript?: SaveAvatarProjectRequestFramesVideoScript;
  static names(): { [key: string]: string } {
    return {
      layers: 'layers',
      videoScript: 'videoScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layers: { 'type': 'array', 'itemType': SaveAvatarProjectRequestFramesLayers },
      videoScript: SaveAvatarProjectRequestFramesVideoScript,
    };
  }

  validate() {
    if(Array.isArray(this.layers)) {
      $dara.Model.validateArray(this.layers);
    }
    if(this.videoScript && typeof (this.videoScript as any).validate === 'function') {
      (this.videoScript as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectImageTaskResponseBodyImageInfos extends $dara.Model {
  /**
   * @example
   * www.ali.com
   */
  customImageUrl?: string;
  /**
   * @example
   * 1
   */
  gmtCreate?: string;
  /**
   * @example
   * 500
   */
  imageH?: string;
  /**
   * @example
   * 500
   */
  imageW?: string;
  static names(): { [key: string]: string } {
    return {
      customImageUrl: 'customImageUrl',
      gmtCreate: 'gmtCreate',
      imageH: 'imageH',
      imageW: 'imageW',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customImageUrl: 'string',
      gmtCreate: 'string',
      imageH: 'string',
      imageW: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectResourceResponseBodyResourceInfoList extends $dara.Model {
  /**
   * @example
   * 111
   */
  expireTime?: string;
  /**
   * @example
   * 11
   */
  lastExpire?: number;
  /**
   * @example
   * 1249
   */
  remainCount?: number;
  /**
   * @example
   * 2
   */
  resourceType?: number;
  /**
   * @example
   * second
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'expireTime',
      lastExpire: 'lastExpire',
      remainCount: 'remainCount',
      resourceType: 'resourceType',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'string',
      lastExpire: 'number',
      remainCount: 'number',
      resourceType: 'number',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitProjectTaskRequestFramesLayersMaterial extends $dara.Model {
  anchorStyleLevel?: string;
  /**
   * @example
   * video/mp4
   */
  format?: string;
  /**
   * @example
   * 38863
   */
  id?: string;
  speed?: string;
  /**
   * @example
   * https://meeting.dingtalk.com/j/1COFppy0POR
   */
  url?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      anchorStyleLevel: 'anchorStyleLevel',
      format: 'format',
      id: 'id',
      speed: 'speed',
      url: 'url',
      volume: 'volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorStyleLevel: 'string',
      format: 'string',
      id: 'string',
      speed: 'string',
      url: 'string',
      volume: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitProjectTaskRequestFramesLayers extends $dara.Model {
  /**
   * @example
   * 222
   */
  height?: number;
  /**
   * @example
   * 1
   */
  index?: number;
  material?: SubmitProjectTaskRequestFramesLayersMaterial;
  /**
   * @example
   * 11
   */
  positionX?: number;
  /**
   * @example
   * 22
   */
  positionY?: number;
  /**
   * @example
   * ANCHOR
   */
  type?: string;
  /**
   * @example
   * 111
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'height',
      index: 'index',
      material: 'material',
      positionX: 'positionX',
      positionY: 'positionY',
      type: 'type',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      index: 'number',
      material: SubmitProjectTaskRequestFramesLayersMaterial,
      positionX: 'number',
      positionY: 'number',
      type: 'string',
      width: 'number',
    };
  }

  validate() {
    if(this.material && typeof (this.material as any).validate === 'function') {
      (this.material as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitProjectTaskRequestFramesSubtitle extends $dara.Model {
  /**
   * @example
   * BottomLeft
   */
  alignment?: string;
  /**
   * @example
   * #ffffff
   */
  backgroundColor?: string;
  /**
   * @example
   * SimSun
   */
  font?: string;
  /**
   * @example
   * #ffffff
   */
  fontColor?: string;
  /**
   * @example
   * 32
   */
  fontSize?: number;
  /**
   * @example
   * 11
   */
  maxCharLength?: number;
  /**
   * @example
   * 2
   */
  positionX?: number;
  /**
   * @example
   * 1
   */
  positionY?: number;
  /**
   * @example
   * 22
   */
  textHeight?: number;
  /**
   * @example
   * 11
   */
  textWidth?: number;
  static names(): { [key: string]: string } {
    return {
      alignment: 'alignment',
      backgroundColor: 'backgroundColor',
      font: 'font',
      fontColor: 'fontColor',
      fontSize: 'fontSize',
      maxCharLength: 'maxCharLength',
      positionX: 'positionX',
      positionY: 'positionY',
      textHeight: 'textHeight',
      textWidth: 'textWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alignment: 'string',
      backgroundColor: 'string',
      font: 'string',
      fontColor: 'string',
      fontSize: 'number',
      maxCharLength: 'number',
      positionX: 'number',
      positionY: 'number',
      textHeight: 'number',
      textWidth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitProjectTaskRequestFramesVideoScript extends $dara.Model {
  /**
   * @example
   * https://meeting.dingtalk.com/j/1COFppy0POR
   */
  audioUrl?: string;
  emotion?: string;
  pitchRate?: string;
  speechOpen?: boolean;
  /**
   * @example
   * 2.0
   */
  speedRate?: string;
  textContent?: string;
  /**
   * @example
   * TEXT
   */
  type?: string;
  voiceLanguage?: string;
  /**
   * @example
   * 11
   */
  voiceTemplateId?: number;
  /**
   * @example
   * 20
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      audioUrl: 'audioUrl',
      emotion: 'emotion',
      pitchRate: 'pitchRate',
      speechOpen: 'speechOpen',
      speedRate: 'speedRate',
      textContent: 'textContent',
      type: 'type',
      voiceLanguage: 'voiceLanguage',
      voiceTemplateId: 'voiceTemplateId',
      volume: 'volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioUrl: 'string',
      emotion: 'string',
      pitchRate: 'string',
      speechOpen: 'boolean',
      speedRate: 'string',
      textContent: 'string',
      type: 'string',
      voiceLanguage: 'string',
      voiceTemplateId: 'number',
      volume: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitProjectTaskRequestFrames extends $dara.Model {
  /**
   * @example
   * 1
   */
  index?: number;
  layers?: SubmitProjectTaskRequestFramesLayers[];
  subtitle?: SubmitProjectTaskRequestFramesSubtitle;
  videoScript?: SubmitProjectTaskRequestFramesVideoScript;
  static names(): { [key: string]: string } {
    return {
      index: 'index',
      layers: 'layers',
      subtitle: 'subtitle',
      videoScript: 'videoScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      layers: { 'type': 'array', 'itemType': SubmitProjectTaskRequestFramesLayers },
      subtitle: SubmitProjectTaskRequestFramesSubtitle,
      videoScript: SubmitProjectTaskRequestFramesVideoScript,
    };
  }

  validate() {
    if(Array.isArray(this.layers)) {
      $dara.Model.validateArray(this.layers);
    }
    if(this.subtitle && typeof (this.subtitle as any).validate === 'function') {
      (this.subtitle as any).validate();
    }
    if(this.videoScript && typeof (this.videoScript as any).validate === 'function') {
      (this.videoScript as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDocumentInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pdf
   */
  documentType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      documentType: 'documentType',
      name: 'name',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentType: 'string',
      name: 'string',
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

export class AddDocumentResult extends $dara.Model {
  /**
   * @example
   * example.pdf
   */
  docName?: string;
  documentInfo?: DocumentInfo;
  /**
   * @example
   * true
   */
  errorMessage?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      docName: 'docName',
      documentInfo: 'documentInfo',
      errorMessage: 'errorMessage',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docName: 'string',
      documentInfo: DocumentInfo,
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.documentInfo && typeof (this.documentInfo as any).validate === 'function') {
      (this.documentInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnchorResponse extends $dara.Model {
  anchorCategory?: string;
  anchorId?: string;
  anchorMaterialName?: string;
  anchorType?: string;
  coverHeight?: number;
  coverRate?: string;
  coverThumbnailUrl?: string;
  coverUrl?: string;
  coverWeight?: number;
  digitalHumanType?: string;
  gender?: string;
  resourceTypeDesc?: string;
  status?: string;
  supportBgChange?: number;
  useScene?: string;
  static names(): { [key: string]: string } {
    return {
      anchorCategory: 'anchorCategory',
      anchorId: 'anchorId',
      anchorMaterialName: 'anchorMaterialName',
      anchorType: 'anchorType',
      coverHeight: 'coverHeight',
      coverRate: 'coverRate',
      coverThumbnailUrl: 'coverThumbnailUrl',
      coverUrl: 'coverUrl',
      coverWeight: 'coverWeight',
      digitalHumanType: 'digitalHumanType',
      gender: 'gender',
      resourceTypeDesc: 'resourceTypeDesc',
      status: 'status',
      supportBgChange: 'supportBgChange',
      useScene: 'useScene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorCategory: 'string',
      anchorId: 'string',
      anchorMaterialName: 'string',
      anchorType: 'string',
      coverHeight: 'number',
      coverRate: 'string',
      coverThumbnailUrl: 'string',
      coverUrl: 'string',
      coverWeight: 'number',
      digitalHumanType: 'string',
      gender: 'string',
      resourceTypeDesc: 'string',
      status: 'string',
      supportBgChange: 'number',
      useScene: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddDocumentResult extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  addDocumentResults?: AddDocumentResult[];
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addDocumentResults: 'addDocumentResults',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addDocumentResults: { 'type': 'array', 'itemType': AddDocumentResult },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addDocumentResults)) {
      $dara.Model.validateArray(this.addDocumentResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DocumentInfo extends $dara.Model {
  documentType?: string;
  id?: string;
  name?: string;
  processStatus?: string;
  static names(): { [key: string]: string } {
    return {
      documentType: 'documentType',
      id: 'id',
      name: 'name',
      processStatus: 'processStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentType: 'string',
      id: 'string',
      name: 'string',
      processStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DocumentResult extends $dara.Model {
  documentInfo?: DocumentInfo;
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      documentInfo: 'documentInfo',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentInfo: DocumentInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.documentInfo && typeof (this.documentInfo as any).validate === 'function') {
      (this.documentInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssUploadTokenResult extends $dara.Model {
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  uploadInfo?: UploadInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      uploadInfo: 'uploadInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uploadInfo: UploadInfo,
    };
  }

  validate() {
    if(this.uploadInfo && typeof (this.uploadInfo as any).validate === 'function') {
      (this.uploadInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Illustration extends $dara.Model {
  illustrationId?: number;
  oss?: string;
  static names(): { [key: string]: string } {
    return {
      illustrationId: 'illustrationId',
      oss: 'oss',
    };
  }

  static types(): { [key: string]: any } {
    return {
      illustrationId: 'number',
      oss: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IllustrationResult extends $dara.Model {
  illustration?: Illustration;
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      illustration: 'illustration',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      illustration: Illustration,
      requestId: 'string',
    };
  }

  validate() {
    if(this.illustration && typeof (this.illustration as any).validate === 'function') {
      (this.illustration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IllustrationTask extends $dara.Model {
  gmtCreate?: string;
  gmtModified?: string;
  illustrationIds?: number[];
  illustrationTaskId?: number;
  /**
   * @example
   * Success
   */
  taskStatus?: string;
  textId?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      illustrationIds: 'illustrationIds',
      illustrationTaskId: 'illustrationTaskId',
      taskStatus: 'taskStatus',
      textId: 'textId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      illustrationIds: { 'type': 'array', 'itemType': 'number' },
      illustrationTaskId: 'number',
      taskStatus: 'string',
      textId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.illustrationIds)) {
      $dara.Model.validateArray(this.illustrationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IllustrationTaskCreateCmd extends $dara.Model {
  /**
   * @example
   * 0-不换背景，1-换背景
   */
  backgroundType?: number;
  /**
   * @example
   * 1024
   */
  dstHeight?: number;
  /**
   * @example
   * 1024
   */
  dstWidth?: number;
  /**
   * @example
   * 28274623764834
   */
  idempotentId?: string;
  imageUrls?: string[];
  /**
   * @example
   * 4
   */
  nums?: number;
  ossPaths?: string[];
  stickerText?: string;
  static names(): { [key: string]: string } {
    return {
      backgroundType: 'backgroundType',
      dstHeight: 'dstHeight',
      dstWidth: 'dstWidth',
      idempotentId: 'idempotentId',
      imageUrls: 'imageUrls',
      nums: 'nums',
      ossPaths: 'ossPaths',
      stickerText: 'stickerText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundType: 'number',
      dstHeight: 'number',
      dstWidth: 'number',
      idempotentId: 'string',
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      nums: 'number',
      ossPaths: { 'type': 'array', 'itemType': 'string' },
      stickerText: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageUrls)) {
      $dara.Model.validateArray(this.imageUrls);
    }
    if(Array.isArray(this.ossPaths)) {
      $dara.Model.validateArray(this.ossPaths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IllustrationTaskResult extends $dara.Model {
  illustrationTask?: IllustrationTask;
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      illustrationTask: 'illustrationTask',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      illustrationTask: IllustrationTask,
      requestId: 'string',
    };
  }

  validate() {
    if(this.illustrationTask && typeof (this.illustrationTask as any).validate === 'function') {
      (this.illustrationTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KnowledgeBaseInfo extends $dara.Model {
  description?: string;
  id?: string;
  industry?: string;
  knowledgeBaseType?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      id: 'id',
      industry: 'industry',
      knowledgeBaseType: 'knowledgeBaseType',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      industry: 'string',
      knowledgeBaseType: 'string',
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

export class KnowledgeBaseListResult extends $dara.Model {
  knowledgeBases?: KnowledgeBaseInfo[];
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      knowledgeBases: 'knowledgeBases',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBases: { 'type': 'array', 'itemType': KnowledgeBaseInfo },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.knowledgeBases)) {
      $dara.Model.validateArray(this.knowledgeBases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReferenceTag extends $dara.Model {
  referenceContent?: string;
  referenceTitle?: string;
  static names(): { [key: string]: string } {
    return {
      referenceContent: 'referenceContent',
      referenceTitle: 'referenceTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referenceContent: 'string',
      referenceTitle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Text extends $dara.Model {
  agentId?: string;
  agentName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  desc?: string;
  errMsg?: string;
  gmtCreate?: string;
  gmtModified?: string;
  illustrationTaskIdList?: number[];
  publishStatus?: string;
  textContent?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  textId?: number;
  /**
   * @example
   * true
   */
  textIllustrationTag?: boolean;
  textModeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Generating
   */
  textStatus?: string;
  textStyleType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  textTaskId?: number;
  textThemes?: string[];
  /**
   * @example
   * xxx
   */
  title?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  userNameCreate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  userNameModified?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      agentName: 'agentName',
      desc: 'desc',
      errMsg: 'errMsg',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      illustrationTaskIdList: 'illustrationTaskIdList',
      publishStatus: 'publishStatus',
      textContent: 'textContent',
      textId: 'textId',
      textIllustrationTag: 'textIllustrationTag',
      textModeType: 'textModeType',
      textStatus: 'textStatus',
      textStyleType: 'textStyleType',
      textTaskId: 'textTaskId',
      textThemes: 'textThemes',
      title: 'title',
      userNameCreate: 'userNameCreate',
      userNameModified: 'userNameModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      desc: 'string',
      errMsg: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      illustrationTaskIdList: { 'type': 'array', 'itemType': 'number' },
      publishStatus: 'string',
      textContent: 'string',
      textId: 'number',
      textIllustrationTag: 'boolean',
      textModeType: 'string',
      textStatus: 'string',
      textStyleType: 'string',
      textTaskId: 'number',
      textThemes: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      userNameCreate: 'string',
      userNameModified: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.illustrationTaskIdList)) {
      $dara.Model.validateArray(this.illustrationTaskIdList);
    }
    if(Array.isArray(this.textThemes)) {
      $dara.Model.validateArray(this.textThemes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextQueryResult extends $dara.Model {
  requestId?: string;
  texts?: Text[];
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      texts: 'texts',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      texts: { 'type': 'array', 'itemType': Text },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextResult extends $dara.Model {
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  text?: Text;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      text: Text,
    };
  }

  validate() {
    if(this.text && typeof (this.text as any).validate === 'function') {
      (this.text as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextTask extends $dara.Model {
  agentId?: string;
  agentName?: string;
  /**
   * @example
   * 九寨沟三日游攻略
   */
  contentRequirement?: string;
  gmtCreate?: string;
  gmtModified?: string;
  introduction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  nums?: number;
  /**
   * @example
   * xxx
   */
  point?: string;
  referenceTag?: ReferenceTag;
  relatedRagIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
  style?: string;
  target?: string;
  textIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
  textModeType?: string;
  textTaskId?: number;
  textTaskStatus?: string;
  texts?: Text[];
  /**
   * @example
   * 旅游路线
   */
  theme?: string;
  themeDesc?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      agentName: 'agentName',
      contentRequirement: 'contentRequirement',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      introduction: 'introduction',
      nums: 'nums',
      point: 'point',
      referenceTag: 'referenceTag',
      relatedRagIds: 'relatedRagIds',
      style: 'style',
      target: 'target',
      textIds: 'textIds',
      textModeType: 'textModeType',
      textTaskId: 'textTaskId',
      textTaskStatus: 'textTaskStatus',
      texts: 'texts',
      theme: 'theme',
      themeDesc: 'themeDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      contentRequirement: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      introduction: 'string',
      nums: 'number',
      point: 'string',
      referenceTag: ReferenceTag,
      relatedRagIds: { 'type': 'array', 'itemType': 'number' },
      style: 'string',
      target: 'string',
      textIds: { 'type': 'array', 'itemType': 'number' },
      textModeType: 'string',
      textTaskId: 'number',
      textTaskStatus: 'string',
      texts: { 'type': 'array', 'itemType': Text },
      theme: 'string',
      themeDesc: 'string',
    };
  }

  validate() {
    if(this.referenceTag && typeof (this.referenceTag as any).validate === 'function') {
      (this.referenceTag as any).validate();
    }
    if(Array.isArray(this.relatedRagIds)) {
      $dara.Model.validateArray(this.relatedRagIds);
    }
    if(Array.isArray(this.textIds)) {
      $dara.Model.validateArray(this.textIds);
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextTaskCreateCmd extends $dara.Model {
  agentId?: string;
  /**
   * @example
   * 极氪007新车上市
   */
  contentRequirement?: string;
  /**
   * @example
   * 28274623764834
   */
  idempotentId?: string;
  industry?: string;
  /**
   * @example
   * xxx
   */
  introduction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  number?: number;
  /**
   * @example
   * 超强续航
   */
  point?: string;
  referenceTag?: ReferenceTag;
  /**
   * @example
   * 1
   */
  relatedRagIds?: number[];
  /**
   * @example
   * true
   */
  streamApi?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  style?: string;
  target?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  textModeType?: string;
  /**
   * @example
   * 旅游路线
   */
  theme?: string;
  themes?: string[];
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      contentRequirement: 'contentRequirement',
      idempotentId: 'idempotentId',
      industry: 'industry',
      introduction: 'introduction',
      number: 'number',
      point: 'point',
      referenceTag: 'referenceTag',
      relatedRagIds: 'relatedRagIds',
      streamApi: 'streamApi',
      style: 'style',
      target: 'target',
      textModeType: 'textModeType',
      theme: 'theme',
      themes: 'themes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      contentRequirement: 'string',
      idempotentId: 'string',
      industry: 'string',
      introduction: 'string',
      number: 'number',
      point: 'string',
      referenceTag: ReferenceTag,
      relatedRagIds: { 'type': 'array', 'itemType': 'number' },
      streamApi: 'boolean',
      style: 'string',
      target: 'string',
      textModeType: 'string',
      theme: 'string',
      themes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.referenceTag && typeof (this.referenceTag as any).validate === 'function') {
      (this.referenceTag as any).validate();
    }
    if(Array.isArray(this.relatedRagIds)) {
      $dara.Model.validateArray(this.relatedRagIds);
    }
    if(Array.isArray(this.themes)) {
      $dara.Model.validateArray(this.themes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextTaskResult extends $dara.Model {
  textTask?: TextTask;
  static names(): { [key: string]: string } {
    return {
      textTask: 'textTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      textTask: TextTask,
    };
  }

  validate() {
    if(this.textTask && typeof (this.textTask as any).validate === 'function') {
      (this.textTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextTheme extends $dara.Model {
  desc?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
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

export class TextThemeListResult extends $dara.Model {
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  textThemeList?: TextTheme[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      textThemeList: 'textThemeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      textThemeList: { 'type': 'array', 'itemType': TextTheme },
    };
  }

  validate() {
    if(Array.isArray(this.textThemeList)) {
      $dara.Model.validateArray(this.textThemeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxxx
   */
  accessId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yic-pre.oss-cn-hangzhou.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234/temp-novels/xxxx-xxx-xx.txt
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxxxxx
   */
  policy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxxxx
   */
  policySignature?: string;
  /**
   * @example
   * xxxxxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'accessId',
      host: 'host',
      key: 'key',
      policy: 'policy',
      policySignature: 'policySignature',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      host: 'string',
      key: 'string',
      policy: 'string',
      policySignature: 'string',
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

export class VoiceModelResponse extends $dara.Model {
  resourceTypeDesc?: string;
  ttsVersion?: number;
  useScene?: string;
  voiceDesc?: string;
  voiceGender?: string;
  voiceId?: number;
  voiceLanguage?: string;
  voiceModel?: string;
  voiceName?: string;
  voiceType?: string;
  voiceUrl?: string;
  static names(): { [key: string]: string } {
    return {
      resourceTypeDesc: 'resourceTypeDesc',
      ttsVersion: 'ttsVersion',
      useScene: 'useScene',
      voiceDesc: 'voiceDesc',
      voiceGender: 'voiceGender',
      voiceId: 'voiceId',
      voiceLanguage: 'voiceLanguage',
      voiceModel: 'voiceModel',
      voiceName: 'voiceName',
      voiceType: 'voiceType',
      voiceUrl: 'voiceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTypeDesc: 'string',
      ttsVersion: 'number',
      useScene: 'string',
      voiceDesc: 'string',
      voiceGender: 'string',
      voiceId: 'number',
      voiceLanguage: 'string',
      voiceModel: 'string',
      voiceName: 'string',
      voiceType: 'string',
      voiceUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTextFeedbackRequest extends $dara.Model {
  content?: string;
  /**
   * @example
   * 1
   */
  quality?: number;
  /**
   * @example
   * 8478
   */
  textId?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      quality: 'quality',
      textId: 'textId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      quality: 'number',
      textId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTextFeedbackResponseBody extends $dara.Model {
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTextFeedbackResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddTextFeedbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddTextFeedbackResponseBody,
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

export class BatchAddDocumentRequest extends $dara.Model {
  addDocumentInfos?: AddDocumentInfo[];
  static names(): { [key: string]: string } {
    return {
      addDocumentInfos: 'addDocumentInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addDocumentInfos: { 'type': 'array', 'itemType': AddDocumentInfo },
    };
  }

  validate() {
    if(Array.isArray(this.addDocumentInfos)) {
      $dara.Model.validateArray(this.addDocumentInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddDocumentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchAddDocumentResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchAddDocumentResult,
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

export class BatchCreateAICoachTaskRequest extends $dara.Model {
  /**
   * @example
   * 7915125A-0D96-5A25-A54B-D3B739A86AFC
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  scriptRecordId?: string;
  studentIds?: string[];
  studentList?: BatchCreateAICoachTaskRequestStudentList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      scriptRecordId: 'scriptRecordId',
      studentIds: 'studentIds',
      studentList: 'studentList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scriptRecordId: 'string',
      studentIds: { 'type': 'array', 'itemType': 'string' },
      studentList: { 'type': 'array', 'itemType': BatchCreateAICoachTaskRequestStudentList },
    };
  }

  validate() {
    if(Array.isArray(this.studentIds)) {
      $dara.Model.validateArray(this.studentIds);
    }
    if(Array.isArray(this.studentList)) {
      $dara.Model.validateArray(this.studentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateAICoachTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 10923AA3-F7A1-5EA0-ACCA-D704269EAA78
   */
  requestId?: string;
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      taskIds: 'taskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
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

export class BatchCreateAICoachTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchCreateAICoachTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchCreateAICoachTaskResponseBody,
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

export class BatchGetProjectTaskRequest extends $dara.Model {
  taskIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      taskIdList: 'taskIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.taskIdList)) {
      $dara.Model.validateArray(this.taskIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetProjectTaskShrinkRequest extends $dara.Model {
  taskIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      taskIdListShrink: 'taskIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskIdListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetProjectTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 11
   */
  requestId?: string;
  resultList?: BatchGetProjectTaskResponseBodyResultList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      resultList: 'resultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultList: { 'type': 'array', 'itemType': BatchGetProjectTaskResponseBodyResultList },
    };
  }

  validate() {
    if(Array.isArray(this.resultList)) {
      $dara.Model.validateArray(this.resultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetProjectTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchGetProjectTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchGetProjectTaskResponseBody,
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

export class BatchGetTrainTaskRequest extends $dara.Model {
  /**
   * @example
   * 1524004782431111
   */
  aliyunMainId?: string;
  taskIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      aliyunMainId: 'aliyunMainId',
      taskIdList: 'taskIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunMainId: 'string',
      taskIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.taskIdList)) {
      $dara.Model.validateArray(this.taskIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetTrainTaskShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1524004782431111
   */
  aliyunMainId?: string;
  taskIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunMainId: 'aliyunMainId',
      taskIdListShrink: 'taskIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunMainId: 'string',
      taskIdListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetTrainTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 2226A26A-26E5-5AB9-A14A-54D612FCF96A
   */
  requestId?: string;
  voiceList?: BatchGetTrainTaskResponseBodyVoiceList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      voiceList: 'voiceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      voiceList: { 'type': 'array', 'itemType': BatchGetTrainTaskResponseBodyVoiceList },
    };
  }

  validate() {
    if(Array.isArray(this.voiceList)) {
      $dara.Model.validateArray(this.voiceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetTrainTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchGetTrainTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchGetTrainTaskResponseBody,
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

export class BatchGetVideoClipTaskRequest extends $dara.Model {
  taskIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      taskIdList: 'taskIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.taskIdList)) {
      $dara.Model.validateArray(this.taskIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetVideoClipTaskShrinkRequest extends $dara.Model {
  taskIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      taskIdListShrink: 'taskIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskIdListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetVideoClipTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 86A90C40-D1AB-50DA-A4B1-0D545F80F2FE
   */
  requestId?: string;
  taskList?: BatchGetVideoClipTaskResponseBodyTaskList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      taskList: 'taskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskList: { 'type': 'array', 'itemType': BatchGetVideoClipTaskResponseBodyTaskList },
    };
  }

  validate() {
    if(Array.isArray(this.taskList)) {
      $dara.Model.validateArray(this.taskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetVideoClipTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchGetVideoClipTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchGetVideoClipTaskResponseBody,
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

export class BatchQueryIndividuationTextRequest extends $dara.Model {
  textIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      textIdList: 'textIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      textIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.textIdList)) {
      $dara.Model.validateArray(this.textIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryIndividuationTextShrinkRequest extends $dara.Model {
  textIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      textIdListShrink: 'textIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      textIdListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryIndividuationTextResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 14878724-A835-578D-9DD5-4779ADCE9221
   */
  requestId?: string;
  textList?: BatchQueryIndividuationTextResponseBodyTextList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      textList: 'textList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      textList: { 'type': 'array', 'itemType': BatchQueryIndividuationTextResponseBodyTextList },
    };
  }

  validate() {
    if(Array.isArray(this.textList)) {
      $dara.Model.validateArray(this.textList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryIndividuationTextResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchQueryIndividuationTextResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchQueryIndividuationTextResponseBody,
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

export class CheckSessionRequest extends $dara.Model {
  /**
   * @example
   * 11111
   */
  projectId?: string;
  /**
   * @example
   * 121dlsga4o7golrl1hoja
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'projectId',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSessionResponseBody extends $dara.Model {
  /**
   * @example
   * 5389BE87-571B-573C-90ED-F07C5E68760B
   */
  requestId?: string;
  /**
   * @example
   * FREE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

export class CheckSessionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckSessionResponseBody,
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

export class CloseAICoachTaskSessionRequest extends $dara.Model {
  /**
   * @example
   * 11
   */
  sessionId?: string;
  /**
   * @example
   * 273610276967782972
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'sessionId',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
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

export class CloseAICoachTaskSessionResponseBody extends $dara.Model {
  /**
   * @example
   * 0E06E0AA-D5B6-538C-8CE9-BAB79C68B690
   */
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

export class CloseAICoachTaskSessionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloseAICoachTaskSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloseAICoachTaskSessionResponseBody,
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

export class CountTextRequest extends $dara.Model {
  /**
   * @remarks
   * API
   * 
   * @example
   * PLATFORM
   */
  generationSource?: string;
  /**
   * @example
   * Garment
   */
  industry?: string;
  /**
   * @example
   * 1
   */
  publishStatus?: string;
  /**
   * @example
   * RED_BOOK
   */
  style?: string;
  static names(): { [key: string]: string } {
    return {
      generationSource: 'generationSource',
      industry: 'industry',
      publishStatus: 'publishStatus',
      style: 'style',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generationSource: 'string',
      industry: 'string',
      publishStatus: 'string',
      style: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountTextResponseBody extends $dara.Model {
  /**
   * @example
   * 6C9CB64D-E2D3-5BF2-A9E6-2445F952F178
   */
  requestId?: string;
  countTextCmdList?: CountTextResponseBodyCountTextCmdList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      countTextCmdList: 'countTextCmdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      countTextCmdList: { 'type': 'array', 'itemType': CountTextResponseBodyCountTextCmdList },
    };
  }

  validate() {
    if(Array.isArray(this.countTextCmdList)) {
      $dara.Model.validateArray(this.countTextCmdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountTextResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CountTextResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CountTextResponseBody,
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

export class CreateAICoachTaskRequest extends $dara.Model {
  /**
   * @example
   * 541E7123-2E8A-5BA2-AC38-665650C84129
   */
  requestId?: string;
  scriptRecordId?: string;
  studentAudioUrl?: string;
  studentId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      scriptRecordId: 'scriptRecordId',
      studentAudioUrl: 'studentAudioUrl',
      studentId: 'studentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scriptRecordId: 'string',
      studentAudioUrl: 'string',
      studentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAICoachTaskResponseBody extends $dara.Model {
  /**
   * @example
   * Deduct.DeductTaskAlreadySuccess
   */
  errorCode?: string;
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0E8B1746-AE35-5C4B-A3A8-345B274AE32C
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 821882330423951360
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class CreateAICoachTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAICoachTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAICoachTaskResponseBody,
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

export class CreateAICoachTaskSessionRequest extends $dara.Model {
  /**
   * @example
   * 821882330423951360
   */
  taskId?: string;
  /**
   * @example
   * 1730530943640489
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
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

export class CreateAICoachTaskSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * rtctoken
   * 
   * @example
   * 11
   */
  channelToken?: string;
  /**
   * @example
   * 4830493A-728F-5F19-BBCC-1443292E9C49
   */
  requestId?: string;
  scriptInfo?: CreateAICoachTaskSessionResponseBodyScriptInfo;
  /**
   * @example
   * 111
   */
  sessionId?: string;
  sessionStatus?: number;
  /**
   * @remarks
   * Token
   * 
   * @example
   * 11
   */
  token?: string;
  /**
   * @example
   * 11
   */
  webSocketUrl?: string;
  static names(): { [key: string]: string } {
    return {
      channelToken: 'channelToken',
      requestId: 'requestId',
      scriptInfo: 'scriptInfo',
      sessionId: 'sessionId',
      sessionStatus: 'sessionStatus',
      token: 'token',
      webSocketUrl: 'webSocketUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelToken: 'string',
      requestId: 'string',
      scriptInfo: CreateAICoachTaskSessionResponseBodyScriptInfo,
      sessionId: 'string',
      sessionStatus: 'number',
      token: 'string',
      webSocketUrl: 'string',
    };
  }

  validate() {
    if(this.scriptInfo && typeof (this.scriptInfo as any).validate === 'function') {
      (this.scriptInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAICoachTaskSessionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAICoachTaskSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAICoachTaskSessionResponseBody,
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

export class CreateAnchorRequest extends $dara.Model {
  anchorMaterialName?: string;
  /**
   * @example
   * https://yic-pre.oss-cn-hangzhou.aliyuncs.com/common/image/anchor/1733474220549-1733474198960image.png?Expires=3311144948&OSSAccessKeyId=LTAI5tPHLyFPhh4UoRias4Zg&Signature=qldDufvRDj9IUTmOtb9r2451RIU%3D
   */
  coverUrl?: string;
  digitalHumanType?: string;
  /**
   * @example
   * F
   */
  gender?: string;
  /**
   * @example
   * offlineSynthesis
   */
  useScene?: string;
  static names(): { [key: string]: string } {
    return {
      anchorMaterialName: 'anchorMaterialName',
      coverUrl: 'coverUrl',
      digitalHumanType: 'digitalHumanType',
      gender: 'gender',
      useScene: 'useScene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorMaterialName: 'string',
      coverUrl: 'string',
      digitalHumanType: 'string',
      gender: 'string',
      useScene: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAnchorResponseBody extends $dara.Model {
  /**
   * @remarks
   * 123456789
   */
  data?: string;
  /**
   * @example
   * PARAM_ERROR
   */
  errorCode?: string;
  /**
   * @example
   * Failed to proxy flink ui request, message: An error occurred: Invalid UUID string: jobsn
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 10923AA3-F7A1-5EA0-ACCA-D704269EAA78
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAnchorResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAnchorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAnchorResponseBody,
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

export class CreateIllustrationTaskRequest extends $dara.Model {
  body?: IllustrationTaskCreateCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: IllustrationTaskCreateCmd,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIllustrationTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: IllustrationTaskResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: IllustrationTaskResult,
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

export class CreateIndividuationProjectRequest extends $dara.Model {
  projectInfo?: string;
  /**
   * @example
   * avatar-1
   */
  projectName?: string;
  purpose?: string;
  /**
   * @example
   * ail003
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      projectInfo: 'projectInfo',
      projectName: 'projectName',
      purpose: 'purpose',
      sceneId: 'sceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectInfo: 'string',
      projectName: 'string',
      purpose: 'string',
      sceneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndividuationProjectResponseBody extends $dara.Model {
  /**
   * @example
   * 812907463682949120
   */
  projectId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4D902811-B75C-5D1B-8882-D515F8E2F977
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

export class CreateIndividuationProjectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateIndividuationProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateIndividuationProjectResponseBody,
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

export class CreateIndividuationTextTaskRequest extends $dara.Model {
  crowdPack?: string[][];
  /**
   * @example
   * 840015278620459008
   */
  projectId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      crowdPack: 'crowdPack',
      projectId: 'projectId',
      taskName: 'taskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crowdPack: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
      projectId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.crowdPack)) {
      $dara.Model.validateArray(this.crowdPack);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndividuationTextTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 56AC346B-AF40-5E4F-AFFE-FD8BA5E6FB3A
   */
  requestId?: string;
  /**
   * @example
   * 837091359375048704
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

export class CreateIndividuationTextTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateIndividuationTextTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateIndividuationTextTaskResponseBody,
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

export class CreateRealisticPortraitRequest extends $dara.Model {
  ages?: number[];
  /**
   * @example
   * 1
   */
  cloth?: number;
  /**
   * @example
   * 1
   */
  color?: number;
  /**
   * @example
   * 11
   */
  custom?: string;
  face?: number[];
  /**
   * @example
   * 1
   */
  figure?: number;
  /**
   * @example
   * 1
   */
  gender?: number;
  /**
   * @example
   * 1
   */
  hairColor?: number;
  /**
   * @example
   * 1
   */
  hairstyle?: number;
  /**
   * @example
   * 500
   */
  height?: number;
  imageUrl?: string;
  /**
   * @example
   * 4
   */
  numbers?: number;
  /**
   * @example
   * 1:1
   */
  ratio?: string;
  /**
   * @example
   * 500
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      ages: 'ages',
      cloth: 'cloth',
      color: 'color',
      custom: 'custom',
      face: 'face',
      figure: 'figure',
      gender: 'gender',
      hairColor: 'hairColor',
      hairstyle: 'hairstyle',
      height: 'height',
      imageUrl: 'imageUrl',
      numbers: 'numbers',
      ratio: 'ratio',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ages: { 'type': 'array', 'itemType': 'number' },
      cloth: 'number',
      color: 'number',
      custom: 'string',
      face: { 'type': 'array', 'itemType': 'number' },
      figure: 'number',
      gender: 'number',
      hairColor: 'number',
      hairstyle: 'number',
      height: 'number',
      imageUrl: 'string',
      numbers: 'number',
      ratio: 'string',
      width: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ages)) {
      $dara.Model.validateArray(this.ages);
    }
    if(Array.isArray(this.face)) {
      $dara.Model.validateArray(this.face);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRealisticPortraitResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D5798660-1531-5D12-9C20-16FEE9D22351
   */
  requestId?: string;
  /**
   * @example
   * 313123123
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

export class CreateRealisticPortraitResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRealisticPortraitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRealisticPortraitResponseBody,
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

export class CreateTextTaskRequest extends $dara.Model {
  body?: TextTaskCreateCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: TextTaskCreateCmd,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTextTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TextTaskResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TextTaskResult,
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

export class CreateTrainTaskRequest extends $dara.Model {
  /**
   * @example
   * 13168123111
   */
  aliyunMainId?: string;
  /**
   * @example
   * BASIC_MODEL
   */
  resSpecType?: string;
  /**
   * @example
   * CopyAnchorAndVoice
   */
  taskType?: string;
  /**
   * @example
   * realTimeInteractivity
   */
  useScene?: string;
  /**
   * @example
   * M
   */
  voiceGender?: string;
  /**
   * @example
   * zh
   */
  voiceLanguage?: string;
  voiceName?: string;
  /**
   * @example
   * https://yic-pre/video/test-0513.mp3
   */
  voicePath?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunMainId: 'aliyunMainId',
      resSpecType: 'resSpecType',
      taskType: 'taskType',
      useScene: 'useScene',
      voiceGender: 'voiceGender',
      voiceLanguage: 'voiceLanguage',
      voiceName: 'voiceName',
      voicePath: 'voicePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunMainId: 'string',
      resSpecType: 'string',
      taskType: 'string',
      useScene: 'string',
      voiceGender: 'string',
      voiceLanguage: 'string',
      voiceName: 'string',
      voicePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrainTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 84657DE0-B68C-508B-AFE7-8ED921854E3C
   */
  requestId?: string;
  /**
   * @example
   * 837091359375048704
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

export class CreateTrainTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTrainTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTrainTaskResponseBody,
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

export class CreateVideoClipTaskRequest extends $dara.Model {
  /**
   * @example
   * 1314445556
   */
  aliyunMainId?: string;
  description?: string;
  ossKeys?: string[];
  requirement?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunMainId: 'aliyunMainId',
      description: 'description',
      ossKeys: 'ossKeys',
      requirement: 'requirement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunMainId: 'string',
      description: 'string',
      ossKeys: { 'type': 'array', 'itemType': 'string' },
      requirement: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ossKeys)) {
      $dara.Model.validateArray(this.ossKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoClipTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 86A90C40-D1AB-50DA-A4B1-0D545F80F2FE
   */
  requestId?: string;
  /**
   * @example
   * 837091359375048704
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

export class CreateVideoClipTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateVideoClipTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateVideoClipTaskResponseBody,
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

export class DeleteIndividuationProjectRequest extends $dara.Model {
  /**
   * @example
   * 840015278620459008
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'projectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DeleteIndividuationProjectResponseBody extends $dara.Model {
  desc?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 86A90C40-D1AB-50DA-A4B1-0D545F80F2FE
   */
  requestId?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      requestId: 'string',
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

export class DeleteIndividuationProjectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteIndividuationProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteIndividuationProjectResponseBody,
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

export class DeleteIndividuationTextRequest extends $dara.Model {
  textIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      textIdList: 'textIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      textIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.textIdList)) {
      $dara.Model.validateArray(this.textIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIndividuationTextResponseBody extends $dara.Model {
  desc?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4830493A-728F-5F19-BBCC-1443292E9C49
   */
  requestId?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      requestId: 'string',
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

export class DeleteIndividuationTextResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteIndividuationTextResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteIndividuationTextResponseBody,
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

export class DescribeDocumentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DocumentResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DocumentResult,
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

export class FinishAICoachTaskSessionRequest extends $dara.Model {
  /**
   * @example
   * 111
   */
  sessionId?: string;
  /**
   * @example
   * 222
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'sessionId',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
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

export class FinishAICoachTaskSessionResponseBody extends $dara.Model {
  /**
   * @example
   * 14878724-A835-578D-9DD5-4779ADCE9221
   */
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

export class FinishAICoachTaskSessionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FinishAICoachTaskSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FinishAICoachTaskSessionResponseBody,
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

export class GetAICoachScriptRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  scriptRecordId?: string;
  static names(): { [key: string]: string } {
    return {
      scriptRecordId: 'scriptRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scriptRecordId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachScriptResponseBody extends $dara.Model {
  appendQuestionFlag?: boolean;
  /**
   * @example
   * point
   */
  assessmentScope?: string;
  checkCheatConfig?: GetAICoachScriptResponseBodyCheckCheatConfig;
  completeStrategy?: GetAICoachScriptResponseBodyCompleteStrategy;
  /**
   * @example
   * https://demo.com
   */
  coverUrl?: string;
  /**
   * @example
   * 500
   */
  dialogueInputTextLimit?: number;
  /**
   * @example
   * true
   */
  dialogueTextFlag?: boolean;
  /**
   * @example
   * true
   */
  dialogueTipFlag?: boolean;
  /**
   * @example
   * 30
   */
  dialogueVoiceLimit?: number;
  /**
   * @example
   * true
   */
  evaluateReportFlag?: boolean;
  expressiveness?: { [key: string]: number };
  /**
   * @example
   * 2025-02-24 12:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-02-24 12:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * coach
   */
  initiator?: string;
  interactionInputTypes?: string[];
  /**
   * @example
   * 1
   */
  interactionType?: number;
  /**
   * @example
   * demo
   */
  introduce?: string;
  /**
   * @example
   * demo
   */
  name?: string;
  /**
   * @example
   * true
   */
  orderAckFlag?: boolean;
  pointDeductionRuleList?: GetAICoachScriptResponseBodyPointDeductionRuleList[];
  points?: GetAICoachScriptResponseBodyPoints[];
  /**
   * @example
   * 1
   */
  requestId?: string;
  sampleDialogueList?: GetAICoachScriptResponseBodySampleDialogueList[];
  /**
   * @example
   * 1
   */
  scriptRecordId?: string;
  sparringTipContent?: string;
  sparringTipTitle?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * true
   */
  studentThinkTimeFlag?: boolean;
  /**
   * @example
   * 100
   */
  studentThinkTimeLimit?: number;
  /**
   * @example
   * 1
   */
  type?: number;
  weights?: GetAICoachScriptResponseBodyWeights;
  static names(): { [key: string]: string } {
    return {
      appendQuestionFlag: 'appendQuestionFlag',
      assessmentScope: 'assessmentScope',
      checkCheatConfig: 'checkCheatConfig',
      completeStrategy: 'completeStrategy',
      coverUrl: 'coverUrl',
      dialogueInputTextLimit: 'dialogueInputTextLimit',
      dialogueTextFlag: 'dialogueTextFlag',
      dialogueTipFlag: 'dialogueTipFlag',
      dialogueVoiceLimit: 'dialogueVoiceLimit',
      evaluateReportFlag: 'evaluateReportFlag',
      expressiveness: 'expressiveness',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      initiator: 'initiator',
      interactionInputTypes: 'interactionInputTypes',
      interactionType: 'interactionType',
      introduce: 'introduce',
      name: 'name',
      orderAckFlag: 'orderAckFlag',
      pointDeductionRuleList: 'pointDeductionRuleList',
      points: 'points',
      requestId: 'requestId',
      sampleDialogueList: 'sampleDialogueList',
      scriptRecordId: 'scriptRecordId',
      sparringTipContent: 'sparringTipContent',
      sparringTipTitle: 'sparringTipTitle',
      status: 'status',
      studentThinkTimeFlag: 'studentThinkTimeFlag',
      studentThinkTimeLimit: 'studentThinkTimeLimit',
      type: 'type',
      weights: 'weights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appendQuestionFlag: 'boolean',
      assessmentScope: 'string',
      checkCheatConfig: GetAICoachScriptResponseBodyCheckCheatConfig,
      completeStrategy: GetAICoachScriptResponseBodyCompleteStrategy,
      coverUrl: 'string',
      dialogueInputTextLimit: 'number',
      dialogueTextFlag: 'boolean',
      dialogueTipFlag: 'boolean',
      dialogueVoiceLimit: 'number',
      evaluateReportFlag: 'boolean',
      expressiveness: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      gmtCreate: 'string',
      gmtModified: 'string',
      initiator: 'string',
      interactionInputTypes: { 'type': 'array', 'itemType': 'string' },
      interactionType: 'number',
      introduce: 'string',
      name: 'string',
      orderAckFlag: 'boolean',
      pointDeductionRuleList: { 'type': 'array', 'itemType': GetAICoachScriptResponseBodyPointDeductionRuleList },
      points: { 'type': 'array', 'itemType': GetAICoachScriptResponseBodyPoints },
      requestId: 'string',
      sampleDialogueList: { 'type': 'array', 'itemType': GetAICoachScriptResponseBodySampleDialogueList },
      scriptRecordId: 'string',
      sparringTipContent: 'string',
      sparringTipTitle: 'string',
      status: 'number',
      studentThinkTimeFlag: 'boolean',
      studentThinkTimeLimit: 'number',
      type: 'number',
      weights: GetAICoachScriptResponseBodyWeights,
    };
  }

  validate() {
    if(this.checkCheatConfig && typeof (this.checkCheatConfig as any).validate === 'function') {
      (this.checkCheatConfig as any).validate();
    }
    if(this.completeStrategy && typeof (this.completeStrategy as any).validate === 'function') {
      (this.completeStrategy as any).validate();
    }
    if(this.expressiveness) {
      $dara.Model.validateMap(this.expressiveness);
    }
    if(Array.isArray(this.interactionInputTypes)) {
      $dara.Model.validateArray(this.interactionInputTypes);
    }
    if(Array.isArray(this.pointDeductionRuleList)) {
      $dara.Model.validateArray(this.pointDeductionRuleList);
    }
    if(Array.isArray(this.points)) {
      $dara.Model.validateArray(this.points);
    }
    if(Array.isArray(this.sampleDialogueList)) {
      $dara.Model.validateArray(this.sampleDialogueList);
    }
    if(this.weights && typeof (this.weights as any).validate === 'function') {
      (this.weights as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachScriptResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAICoachScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAICoachScriptResponseBody,
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

export class GetAICoachTaskSessionHistoryRequest extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  /**
   * @example
   * 111
   */
  sessionId?: string;
  /**
   * @example
   * 1251317954812712
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      sessionId: 'sessionId',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      sessionId: 'string',
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

export class GetAICoachTaskSessionHistoryResponseBody extends $dara.Model {
  conversationList?: GetAICoachTaskSessionHistoryResponseBodyConversationList[];
  /**
   * @example
   * 0
   */
  duration?: number;
  /**
   * @example
   * 2024-11-08 09:33:21
   */
  endTime?: string;
  pauseDuration?: number;
  /**
   * @example
   * D5798660-1531-5D12-9C20-16FEE9D22351
   */
  requestId?: string;
  scriptName?: string;
  /**
   * @example
   * 2024-08-21 05:00:01
   */
  startTime?: string;
  status?: string;
  total?: number;
  /**
   * @example
   * 1579404690269235
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      conversationList: 'conversationList',
      duration: 'duration',
      endTime: 'endTime',
      pauseDuration: 'pauseDuration',
      requestId: 'requestId',
      scriptName: 'scriptName',
      startTime: 'startTime',
      status: 'status',
      total: 'total',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationList: { 'type': 'array', 'itemType': GetAICoachTaskSessionHistoryResponseBodyConversationList },
      duration: 'number',
      endTime: 'string',
      pauseDuration: 'number',
      requestId: 'string',
      scriptName: 'string',
      startTime: 'string',
      status: 'string',
      total: 'number',
      uid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conversationList)) {
      $dara.Model.validateArray(this.conversationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachTaskSessionHistoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAICoachTaskSessionHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAICoachTaskSessionHistoryResponseBody,
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

export class GetAICoachTaskSessionReportRequest extends $dara.Model {
  /**
   * @example
   * 1111
   */
  sessionId?: string;
  /**
   * @example
   * 1707732338016307
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'sessionId',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
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

export class GetAICoachTaskSessionReportResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  duration?: number;
  /**
   * @example
   * 2024-11-08 09:33:21
   */
  endTime?: string;
  evaluationRating?: string;
  /**
   * @example
   * {}
   */
  evaluationResult?: string;
  feedback?: boolean;
  /**
   * @example
   * 0E8B1746-AE35-5C4B-A3A8-345B274AE32C
   */
  requestId?: string;
  scriptName?: string;
  /**
   * @example
   * 2024-10-11 09:58:01
   */
  startTime?: string;
  status?: string;
  /**
   * @example
   * 1276673855116835
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'duration',
      endTime: 'endTime',
      evaluationRating: 'evaluationRating',
      evaluationResult: 'evaluationResult',
      feedback: 'feedback',
      requestId: 'requestId',
      scriptName: 'scriptName',
      startTime: 'startTime',
      status: 'status',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      endTime: 'string',
      evaluationRating: 'string',
      evaluationResult: 'string',
      feedback: 'boolean',
      requestId: 'string',
      scriptName: 'string',
      startTime: 'string',
      status: 'string',
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

export class GetAICoachTaskSessionReportResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAICoachTaskSessionReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAICoachTaskSessionReportResponseBody,
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

export class GetIllustrationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: IllustrationResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: IllustrationResult,
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

export class GetIllustrationTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: IllustrationTaskResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: IllustrationTaskResult,
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

export class GetOssUploadTokenRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8021678.png
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ProductImage
   */
  fileType?: string;
  uploadType?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      fileType: 'fileType',
      uploadType: 'uploadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileType: 'string',
      uploadType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssUploadTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOssUploadTokenResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetOssUploadTokenResult,
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

export class GetProjectTaskRequest extends $dara.Model {
  /**
   * @example
   * 20230823218109326025-1200
   */
  idempotentId?: string;
  /**
   * @example
   * 313123123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      idempotentId: 'IdempotentId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idempotentId: 'string',
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

export class GetProjectTaskResponseBody extends $dara.Model {
  /**
   * @example
   * error
   */
  errorMsg?: string;
  /**
   * @example
   * 5389BE87-571B-573C-90ED-F07C5E68760B
   */
  requestId?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * www.ali.com
   */
  videoDownloadUrl?: string;
  /**
   * @example
   * 111
   */
  videoDuration?: number;
  /**
   * @example
   * www.ali.com
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      status: 'status',
      videoDownloadUrl: 'videoDownloadUrl',
      videoDuration: 'videoDuration',
      videoUrl: 'videoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      status: 'string',
      videoDownloadUrl: 'string',
      videoDuration: 'number',
      videoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProjectTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProjectTaskResponseBody,
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

export class GetTextResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TextResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TextResult,
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

export class GetTextTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TextTaskResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TextTaskResult,
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

export class GetTextTemplateRequest extends $dara.Model {
  /**
   * @example
   * Car
   */
  industry?: string;
  static names(): { [key: string]: string } {
    return {
      industry: 'industry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      industry: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextTemplateResponseBody extends $dara.Model {
  availableIndustry?: GetTextTemplateResponseBodyAvailableIndustry;
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableIndustry: 'availableIndustry',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableIndustry: GetTextTemplateResponseBodyAvailableIndustry,
      requestId: 'string',
    };
  }

  validate() {
    if(this.availableIndustry && typeof (this.availableIndustry as any).validate === 'function') {
      (this.availableIndustry as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTextTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTextTemplateResponseBody,
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

export class InteractTextRequest extends $dara.Model {
  /**
   * @example
   * 1000222
   */
  agentId?: string;
  content?: string;
  /**
   * @example
   * 144285195534941
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      content: 'content',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      content: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InteractTextResponseBody extends $dara.Model {
  /**
   * @example
   * false
   */
  end?: boolean;
  /**
   * @example
   * 1
   */
  index?: number;
  message?: string;
  relatedImages?: string[];
  relatedVideos?: string[];
  /**
   * @example
   * 79e954faffe2415ebd18188ba787d78e
   */
  sessionId?: string;
  /**
   * @example
   * 2
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      index: 'index',
      message: 'message',
      relatedImages: 'relatedImages',
      relatedVideos: 'relatedVideos',
      sessionId: 'sessionId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      index: 'number',
      message: 'string',
      relatedImages: { 'type': 'array', 'itemType': 'string' },
      relatedVideos: { 'type': 'array', 'itemType': 'string' },
      sessionId: 'string',
      type: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.relatedImages)) {
      $dara.Model.validateArray(this.relatedImages);
    }
    if(Array.isArray(this.relatedVideos)) {
      $dara.Model.validateArray(this.relatedVideos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InteractTextResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InteractTextResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InteractTextResponseBody,
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

export class ListAICoachScriptPageRequest extends $dara.Model {
  name?: string;
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
   * 1
   */
  status?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAICoachScriptPageResponseBody extends $dara.Model {
  /**
   * @example
   * PARAM_ERROR
   */
  errorCode?: string;
  /**
   * @example
   * SYSTEM_ERROR
   */
  errorMessage?: string;
  list?: ListAICoachScriptPageResponseBodyList[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 86A90C40-D1AB-50DA-A4B1-0D545F80F2FE
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      list: 'list',
      requestId: 'requestId',
      success: 'success',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      list: { 'type': 'array', 'itemType': ListAICoachScriptPageResponseBodyList },
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAICoachScriptPageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAICoachScriptPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAICoachScriptPageResponseBody,
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

export class ListAICoachTaskPageRequest extends $dara.Model {
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
   * FINISHED
   */
  status?: string;
  /**
   * @example
   * 111
   */
  studentId?: string;
  /**
   * @example
   * 313123123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
      studentId: 'studentId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
      studentId: 'string',
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

export class ListAICoachTaskPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D7F2B74F-63F2-5DD6-95E4-F408EAD6617E
   */
  requestId?: string;
  taskList?: ListAICoachTaskPageResponseBodyTaskList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      taskList: 'taskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskList: { 'type': 'array', 'itemType': ListAICoachTaskPageResponseBodyTaskList },
    };
  }

  validate() {
    if(Array.isArray(this.taskList)) {
      $dara.Model.validateArray(this.taskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAICoachTaskPageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAICoachTaskPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAICoachTaskPageResponseBody,
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

export class ListAgentsRequest extends $dara.Model {
  /**
   * @example
   * 840016700254633984
   */
  agentId?: string;
  /**
   * @example
   * text
   */
  agentScene?: string;
  /**
   * @example
   * SYSTEM
   */
  owner?: string;
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
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      agentScene: 'agentScene',
      owner: 'owner',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentScene: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentsResponseBody extends $dara.Model {
  list?: ListAgentsResponseBodyList[];
  /**
   * @example
   * 86A90C40-D1AB-50DA-A4B1-0D545F80F2FE
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      requestId: 'requestId',
      success: 'success',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListAgentsResponseBodyList },
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAgentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAgentsResponseBody,
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

export class ListAnchorRequest extends $dara.Model {
  anchorCategory?: string;
  /**
   * @example
   * PUBLIC_MODEL
   */
  anchorType?: string;
  /**
   * @example
   * 9:16
   */
  coverRate?: string;
  /**
   * @example
   * staticTransparency
   */
  digitalHumanType?: string;
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
  resSpecType?: string;
  /**
   * @example
   * offlineSynthesis
   */
  useScene?: string;
  static names(): { [key: string]: string } {
    return {
      anchorCategory: 'anchorCategory',
      anchorType: 'anchorType',
      coverRate: 'coverRate',
      digitalHumanType: 'digitalHumanType',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resSpecType: 'resSpecType',
      useScene: 'useScene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorCategory: 'string',
      anchorType: 'string',
      coverRate: 'string',
      digitalHumanType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resSpecType: 'string',
      useScene: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnchorResponseBody extends $dara.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * Deduct.DeductTaskAlreadySuccess
   */
  errorCode?: string;
  /**
   * @example
   * Failed to proxy flink ui request, message: An error occurred: Invalid UUID string: jobsn
   */
  errorMessage?: string;
  list?: AnchorResponse[];
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 5389BE87-571B-573C-90ED-F07C5E68760B
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      list: 'list',
      requestId: 'requestId',
      success: 'success',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      list: { 'type': 'array', 'itemType': AnchorResponse },
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnchorResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAnchorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAnchorResponseBody,
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

export class ListAvatarProjectRequest extends $dara.Model {
  projectIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      projectIdList: 'projectIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.projectIdList)) {
      $dara.Model.validateArray(this.projectIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvatarProjectShrinkRequest extends $dara.Model {
  projectIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      projectIdListShrink: 'projectIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectIdListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvatarProjectResponseBody extends $dara.Model {
  queryAvatarProjectResultList?: ListAvatarProjectResponseBodyQueryAvatarProjectResultList[];
  /**
   * @example
   * D7F2B74F-63F2-5DD6-95E4-F408EAD6617E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queryAvatarProjectResultList: 'queryAvatarProjectResultList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryAvatarProjectResultList: { 'type': 'array', 'itemType': ListAvatarProjectResponseBodyQueryAvatarProjectResultList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.queryAvatarProjectResultList)) {
      $dara.Model.validateArray(this.queryAvatarProjectResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvatarProjectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAvatarProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAvatarProjectResponseBody,
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

export class ListKnowledgeBaseRequest extends $dara.Model {
  /**
   * @example
   * "186432649"
   */
  knowledgeBaseId?: string;
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
      knowledgeBaseId: 'knowledgeBaseId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBaseId: 'string',
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

export class ListKnowledgeBaseResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: KnowledgeBaseListResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: KnowledgeBaseListResult,
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

export class ListTextThemesRequest extends $dara.Model {
  industry?: string;
  static names(): { [key: string]: string } {
    return {
      industry: 'industry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      industry: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextThemesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TextThemeListResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TextThemeListResult,
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

export class ListTextsRequest extends $dara.Model {
  /**
   * @example
   * API
   */
  generationSource?: string;
  /**
   * @example
   * Common
   */
  industry?: string;
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
  /**
   * @example
   * PUBLISH
   */
  publishStatus?: string;
  /**
   * @example
   * WECHAT_MOMENT
   */
  textStyleType?: string;
  /**
   * @example
   * xxx
   */
  textTheme?: string;
  static names(): { [key: string]: string } {
    return {
      generationSource: 'generationSource',
      industry: 'industry',
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      publishStatus: 'publishStatus',
      textStyleType: 'textStyleType',
      textTheme: 'textTheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generationSource: 'string',
      industry: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      publishStatus: 'string',
      textStyleType: 'string',
      textTheme: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TextQueryResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TextQueryResult,
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

export class ListVoiceModelsRequest extends $dara.Model {
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
  resSpecType?: string;
  /**
   * @example
   * offlineSynthesis
   */
  useScene?: string;
  voiceLanguage?: string;
  /**
   * @example
   * PRIVATE_VOICE
   */
  voiceType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resSpecType: 'resSpecType',
      useScene: 'useScene',
      voiceLanguage: 'voiceLanguage',
      voiceType: 'voiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resSpecType: 'string',
      useScene: 'string',
      voiceLanguage: 'string',
      voiceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceModelsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 040002
   */
  errorCode?: string;
  /**
   * @example
   * Failed to proxy flink ui request, message: An error occurred: Invalid UUID string: jobsn
   */
  errorMessage?: string;
  list?: VoiceModelResponse[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 14878724-A835-578D-9DD5-4779ADCE9221
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      list: 'list',
      requestId: 'requestId',
      success: 'success',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      list: { 'type': 'array', 'itemType': VoiceModelResponse },
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceModelsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVoiceModelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVoiceModelsResponseBody,
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

export class OperateAvatarProjectRequest extends $dara.Model {
  /**
   * @example
   * DELETE
   */
  operateType?: string;
  /**
   * @example
   * 812907463682949120
   */
  projectId?: string;
  /**
   * @example
   * 1
   */
  resChannelNumber?: number;
  /**
   * @example
   * FREE
   */
  resType?: string;
  static names(): { [key: string]: string } {
    return {
      operateType: 'operateType',
      projectId: 'projectId',
      resChannelNumber: 'resChannelNumber',
      resType: 'resType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateType: 'string',
      projectId: 'string',
      resChannelNumber: 'number',
      resType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateAvatarProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 86A90C40-D1AB-50DA-A4B1-0D545F80F2FE
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateAvatarProjectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OperateAvatarProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OperateAvatarProjectResponseBody,
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

export class QueryAvatarProjectRequest extends $dara.Model {
  /**
   * @example
   * 11111
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'projectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class QueryAvatarProjectResponseBody extends $dara.Model {
  /**
   * @example
   * 1000222
   */
  agentId?: string;
  /**
   * @example
   * error
   */
  errorMsg?: string;
  frames?: QueryAvatarProjectResponseBodyFrames[];
  /**
   * @example
   * doc_test_3
   */
  projectName?: string;
  /**
   * @example
   * 2C331582-7390-5949-8D9A-AC8239185B37
   */
  requestId?: string;
  resSpecType?: string;
  scaleType?: string;
  /**
   * @example
   * DEPLOYING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      errorMsg: 'errorMsg',
      frames: 'frames',
      projectName: 'projectName',
      requestId: 'requestId',
      resSpecType: 'resSpecType',
      scaleType: 'scaleType',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      errorMsg: 'string',
      frames: { 'type': 'array', 'itemType': QueryAvatarProjectResponseBodyFrames },
      projectName: 'string',
      requestId: 'string',
      resSpecType: 'string',
      scaleType: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.frames)) {
      $dara.Model.validateArray(this.frames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvatarProjectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAvatarProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryAvatarProjectResponseBody,
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

export class QueryAvatarResourceRequest extends $dara.Model {
  /**
   * @example
   * 11111
   */
  idempotentId?: string;
  static names(): { [key: string]: string } {
    return {
      idempotentId: 'idempotentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idempotentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvatarResourceResponseBody extends $dara.Model {
  queryResourceInfoList?: QueryAvatarResourceResponseBodyQueryResourceInfoList[];
  /**
   * @example
   * D5798660-1531-5D12-9C20-16FEE9D22351
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queryResourceInfoList: 'queryResourceInfoList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryResourceInfoList: { 'type': 'array', 'itemType': QueryAvatarResourceResponseBodyQueryResourceInfoList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.queryResourceInfoList)) {
      $dara.Model.validateArray(this.queryResourceInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvatarResourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAvatarResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryAvatarResourceResponseBody,
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

export class QueryIndividuationTextTaskRequest extends $dara.Model {
  /**
   * @example
   * 829682927337963520
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

export class QueryIndividuationTextTaskResponseBody extends $dara.Model {
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  createTime?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 56AC346B-AF40-5E4F-AFFE-FD8BA5E6FB3A
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  textList?: QueryIndividuationTextTaskResponseBodyTextList[];
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      requestId: 'requestId',
      status: 'status',
      textList: 'textList',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      requestId: 'string',
      status: 'number',
      textList: { 'type': 'array', 'itemType': QueryIndividuationTextTaskResponseBodyTextList },
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.textList)) {
      $dara.Model.validateArray(this.textList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIndividuationTextTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryIndividuationTextTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryIndividuationTextTaskResponseBody,
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

export class QuerySessionInfoRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 805800890535673856
   */
  projectId?: string;
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'pageNo',
      pageSize: 'pageSize',
      projectId: 'projectId',
      statusList: 'statusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      projectId: 'string',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySessionInfoShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 805800890535673856
   */
  projectId?: string;
  statusListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'pageNo',
      pageSize: 'pageSize',
      projectId: 'projectId',
      statusListShrink: 'statusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      projectId: 'string',
      statusListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySessionInfoResponseBody extends $dara.Model {
  queryResourceInfoList?: QuerySessionInfoResponseBodyQueryResourceInfoList[];
  /**
   * @example
   * 4D902811-B75C-5D1B-8882-D515F8E2F977
   */
  requestId?: string;
  /**
   * @example
   * 26
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      queryResourceInfoList: 'queryResourceInfoList',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryResourceInfoList: { 'type': 'array', 'itemType': QuerySessionInfoResponseBodyQueryResourceInfoList },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.queryResourceInfoList)) {
      $dara.Model.validateArray(this.queryResourceInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySessionInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySessionInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySessionInfoResponseBody,
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

export class QueryTextStreamResponseBody extends $dara.Model {
  /**
   * @example
   * false
   */
  end?: boolean;
  /**
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      index: 'index',
      message: 'message',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      index: 'number',
      message: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTextStreamResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTextStreamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryTextStreamResponseBody,
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

export class SaveAvatarProjectRequest extends $dara.Model {
  /**
   * @example
   * 1000196
   */
  agentId?: string;
  bitRate?: string;
  frameRate?: string;
  frames?: SaveAvatarProjectRequestFrames[];
  /**
   * @example
   * CREATE
   */
  operateType?: string;
  /**
   * @example
   * 787594567117586432
   */
  projectId?: string;
  /**
   * @example
   * df_cs_471437
   */
  projectName?: string;
  /**
   * @example
   * STANDARD
   */
  resSpecType?: string;
  resolution?: string;
  /**
   * @example
   * 9:16
   */
  scaleType?: string;
  synchronizedDisplay?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      bitRate: 'bitRate',
      frameRate: 'frameRate',
      frames: 'frames',
      operateType: 'operateType',
      projectId: 'projectId',
      projectName: 'projectName',
      resSpecType: 'resSpecType',
      resolution: 'resolution',
      scaleType: 'scaleType',
      synchronizedDisplay: 'synchronizedDisplay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      bitRate: 'string',
      frameRate: 'string',
      frames: { 'type': 'array', 'itemType': SaveAvatarProjectRequestFrames },
      operateType: 'string',
      projectId: 'string',
      projectName: 'string',
      resSpecType: 'string',
      resolution: 'string',
      scaleType: 'string',
      synchronizedDisplay: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.frames)) {
      $dara.Model.validateArray(this.frames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveAvatarProjectResponseBody extends $dara.Model {
  /**
   * @example
   * 1000222
   */
  agentId?: string;
  /**
   * @example
   * 040002
   */
  errorCode?: string;
  /**
   * @example
   * Failed to proxy flink ui request, message: An error occurred: Invalid UUID string: jobsn
   */
  errorMessage?: string;
  /**
   * @example
   * error
   */
  errorMsg?: string;
  /**
   * @example
   * 812907463682949120
   */
  projectId?: string;
  /**
   * @example
   * doc_test_3
   */
  projectName?: string;
  /**
   * @example
   * 0E8B1746-AE35-5C4B-A3A8-345B274AE32C
   */
  requestId?: string;
  /**
   * @example
   * DRAFT
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      errorMsg: 'errorMsg',
      projectId: 'projectId',
      projectName: 'projectName',
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      errorMsg: 'string',
      projectId: 'string',
      projectName: 'string',
      requestId: 'string',
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

export class SaveAvatarProjectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveAvatarProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveAvatarProjectResponseBody,
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

export class SelectImageTaskResponseBody extends $dara.Model {
  /**
   * @example
   * Failed to proxy flink ui request, message: An error occurred: Invalid UUID string: jobsn
   */
  errorMessage?: string;
  /**
   * @example
   * 1
   */
  failed?: string;
  /**
   * @example
   * PLATFORM
   */
  generationSource?: string;
  /**
   * @example
   * 1
   */
  gmtCreate?: string;
  imageInfos?: SelectImageTaskResponseBodyImageInfos[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0E8B1746-AE35-5C4B-A3A8-345B274AE32C
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  scene?: string;
  /**
   * @example
   * Successed
   */
  status?: string;
  /**
   * @example
   * 1
   */
  subtaskProcessing?: string;
  /**
   * @example
   * 1
   */
  success?: string;
  /**
   * @example
   * 10
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      failed: 'failed',
      generationSource: 'generationSource',
      gmtCreate: 'gmtCreate',
      imageInfos: 'imageInfos',
      requestId: 'requestId',
      scene: 'scene',
      status: 'status',
      subtaskProcessing: 'subtaskProcessing',
      success: 'success',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      failed: 'string',
      generationSource: 'string',
      gmtCreate: 'string',
      imageInfos: { 'type': 'array', 'itemType': SelectImageTaskResponseBodyImageInfos },
      requestId: 'string',
      scene: 'string',
      status: 'string',
      subtaskProcessing: 'string',
      success: 'string',
      total: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageInfos)) {
      $dara.Model.validateArray(this.imageInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectImageTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SelectImageTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SelectImageTaskResponseBody,
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

export class SelectResourceRequest extends $dara.Model {
  /**
   * @example
   * 1111
   */
  idempotentId?: string;
  static names(): { [key: string]: string } {
    return {
      idempotentId: 'idempotentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idempotentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectResourceResponseBody extends $dara.Model {
  /**
   * @example
   * 0E8B1746-AE35-5C4B-A3A8-345B274AE32C
   */
  requestId?: string;
  resourceInfoList?: SelectResourceResponseBodyResourceInfoList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      resourceInfoList: 'resourceInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceInfoList: { 'type': 'array', 'itemType': SelectResourceResponseBodyResourceInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.resourceInfoList)) {
      $dara.Model.validateArray(this.resourceInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectResourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SelectResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SelectResourceResponseBody,
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

export class SendSdkMessageRequest extends $dara.Model {
  /**
   * @example
   * {}
   */
  data?: string;
  header?: string;
  /**
   * @example
   * avatar
   */
  moduleName?: string;
  /**
   * @example
   * getProject
   */
  operationName?: string;
  /**
   * @example
   * 123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      header: 'header',
      moduleName: 'moduleName',
      operationName: 'operationName',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      header: 'string',
      moduleName: 'string',
      operationName: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendSdkMessageResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  data?: string;
  /**
   * @example
   * system-01
   */
  errorCode?: string;
  /**
   * @example
   * SYSTEM_ERROR
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 86A90C40-D1AB-50DA-A4B1-0D545F80F2FE
   */
  requestId?: string;
  /**
   * @remarks
   * true
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendSdkMessageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendSdkMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendSdkMessageResponseBody,
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

export class SendTextMsgRequest extends $dara.Model {
  /**
   * @example
   * 126000030
   */
  projectId?: string;
  /**
   * @example
   * 52775239-1575-5C07-A4AE-1835D120E4A6
   */
  requestId?: string;
  /**
   * @example
   * tcm9xac9dsfbfgm8hf5k94l3cqybwh9o3mn0iuyytdgd9qoejxf1crxsdvuvr8fu0zudk5px4vsa3e3fgcclplkiuo7kyy3sqgscvhejmooblaiv64ww8cvlxvin2urzyhooqj33y7gvodef0sxn22n9q58o7xlupabiknxsv46qe7kof8nuc4be8kyhi01
   */
  sessionId?: string;
  text?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'projectId',
      requestId: 'requestId',
      sessionId: 'sessionId',
      text: 'text',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      requestId: 'string',
      sessionId: 'string',
      text: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendTextMsgResponseBody extends $dara.Model {
  /**
   * @example
   * 827BF714-19E7-51B5-A434-C21BFEE05983
   */
  requestId?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

export class SendTextMsgResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendTextMsgResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendTextMsgResponseBody,
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

export class StartAvatarSessionRequest extends $dara.Model {
  channelToken?: string;
  customPushUrl?: string;
  customUserId?: string;
  /**
   * @example
   * 13534711288320
   */
  projectId?: string;
  /**
   * @example
   * 15ED6083-B0B8-5B2A-BEDB-94A5C687C812
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      channelToken: 'channelToken',
      customPushUrl: 'customPushUrl',
      customUserId: 'customUserId',
      projectId: 'projectId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelToken: 'string',
      customPushUrl: 'string',
      customUserId: 'string',
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

export class StartAvatarSessionResponseBody extends $dara.Model {
  channelToken?: string;
  /**
   * @example
   * 0E8B1746-AE35-5C4B-A3A8-345B274AE32C
   */
  requestId?: string;
  /**
   * @example
   * 121dlsga4o7golrl1hoja
   */
  sessionId?: string;
  token?: string;
  webSocketUrl?: string;
  static names(): { [key: string]: string } {
    return {
      channelToken: 'channelToken',
      requestId: 'requestId',
      sessionId: 'sessionId',
      token: 'token',
      webSocketUrl: 'webSocketUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelToken: 'string',
      requestId: 'string',
      sessionId: 'string',
      token: 'string',
      webSocketUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAvatarSessionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartAvatarSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartAvatarSessionResponseBody,
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

export class StopAvatarSessionRequest extends $dara.Model {
  /**
   * @example
   * 124900036
   */
  projectId?: string;
  /**
   * @example
   * 121dlsga4o7golrl1hojazg0u9lvysk0uyczgd79be2a4hkr9ijrblmb5qohi5iaja3p5j633doqj4t2uu3sek2i49hzkao0bli4bch4tnloyx22odd7sot9dxl5xfd0hbp7fl9dehnqofkb9csebf0nuezj8bwgec8ei6dby0encu5y88ky6oqensuqnj
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'projectId',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAvatarSessionResponseBody extends $dara.Model {
  /**
   * @example
   * 725E87CD-F2DE-5FC4-8A09-2EBDFBF26DAA
   */
  requestId?: string;
  /**
   * @example
   * Stopped
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

export class StopAvatarSessionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopAvatarSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopAvatarSessionResponseBody,
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

export class StopProjectTaskRequest extends $dara.Model {
  /**
   * @example
   * 1111111
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

export class StopProjectTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 86A90C40-D1AB-50DA-A4B1-0D545F80F2FE
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopProjectTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopProjectTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopProjectTaskResponseBody,
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

export class SubmitProjectTaskRequest extends $dara.Model {
  /**
   * @remarks
   * frame
   */
  frames?: SubmitProjectTaskRequestFrames[];
  /**
   * @example
   * 9:16
   */
  scaleType?: string;
  /**
   * @example
   * 1
   */
  subtitleTag?: number;
  transparentBackground?: number;
  static names(): { [key: string]: string } {
    return {
      frames: 'frames',
      scaleType: 'scaleType',
      subtitleTag: 'subtitleTag',
      transparentBackground: 'transparentBackground',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frames: { 'type': 'array', 'itemType': SubmitProjectTaskRequestFrames },
      scaleType: 'string',
      subtitleTag: 'number',
      transparentBackground: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.frames)) {
      $dara.Model.validateArray(this.frames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitProjectTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 551FF252-6CFC-5DDA-9F84-9B07302385C2
   */
  requestId?: string;
  /**
   * @example
   * 313123123
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

export class SubmitProjectTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitProjectTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitProjectTaskResponseBody,
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

export class TransferPortraitStyleRequest extends $dara.Model {
  /**
   * @example
   * 500
   */
  height?: number;
  /**
   * @example
   * WWW
   */
  imageUrl?: string;
  /**
   * @example
   * 4
   */
  numbers?: number;
  /**
   * @example
   * 1
   */
  redrawAmplitude?: number;
  /**
   * @example
   * 1
   */
  style?: number;
  /**
   * @example
   * 500
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'height',
      imageUrl: 'imageUrl',
      numbers: 'numbers',
      redrawAmplitude: 'redrawAmplitude',
      style: 'style',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      imageUrl: 'string',
      numbers: 'number',
      redrawAmplitude: 'number',
      style: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferPortraitStyleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 725E87CD-F2DE-5FC4-8A09-2EBDFBF26DAA
   */
  requestId?: string;
  /**
   * @example
   * 313123123
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

export class TransferPortraitStyleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TransferPortraitStyleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TransferPortraitStyleResponseBody,
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
    this._endpoint = this.getEndpoint("intelligentcreation", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 添加文案反馈
   * 
   * @param request - AddTextFeedbackRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTextFeedbackResponse
   */
  async addTextFeedbackWithOptions(request: AddTextFeedbackRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<AddTextFeedbackResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.quality)) {
      body["quality"] = request.quality;
    }

    if (!$dara.isNull(request.textId)) {
      body["textId"] = request.textId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddTextFeedback",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/addTextFeedback`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddTextFeedbackResponse>(await this.callApi(params, req, runtime), new AddTextFeedbackResponse({}));
    } else {
      return $dara.cast<AddTextFeedbackResponse>(await this.execute(params, req, runtime), new AddTextFeedbackResponse({}));
    }

  }

  /**
   * 添加文案反馈
   * 
   * @param request - AddTextFeedbackRequest
   * @returns AddTextFeedbackResponse
   */
  async addTextFeedback(request: AddTextFeedbackRequest): Promise<AddTextFeedbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addTextFeedbackWithOptions(request, headers, runtime);
  }

  /**
   * 批量添加知识文档
   * 
   * @param request - BatchAddDocumentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchAddDocumentResponse
   */
  async batchAddDocumentWithOptions(knowledgeBaseId: string, request: BatchAddDocumentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<BatchAddDocumentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addDocumentInfos)) {
      body["addDocumentInfos"] = request.addDocumentInfos;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchAddDocument",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/knowledge-base/${$dara.URL.percentEncode(knowledgeBaseId)}/documents`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchAddDocumentResponse>(await this.callApi(params, req, runtime), new BatchAddDocumentResponse({}));
    } else {
      return $dara.cast<BatchAddDocumentResponse>(await this.execute(params, req, runtime), new BatchAddDocumentResponse({}));
    }

  }

  /**
   * 批量添加知识文档
   * 
   * @param request - BatchAddDocumentRequest
   * @returns BatchAddDocumentResponse
   */
  async batchAddDocument(knowledgeBaseId: string, request: BatchAddDocumentRequest): Promise<BatchAddDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchAddDocumentWithOptions(knowledgeBaseId, request, headers, runtime);
  }

  /**
   * 批量发布剧本任务
   * 
   * @param request - BatchCreateAICoachTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchCreateAICoachTaskResponse
   */
  async batchCreateAICoachTaskWithOptions(request: BatchCreateAICoachTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<BatchCreateAICoachTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!$dara.isNull(request.scriptRecordId)) {
      body["scriptRecordId"] = request.scriptRecordId;
    }

    if (!$dara.isNull(request.studentIds)) {
      body["studentIds"] = request.studentIds;
    }

    if (!$dara.isNull(request.studentList)) {
      body["studentList"] = request.studentList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchCreateAICoachTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/aicoach/batchCreateTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchCreateAICoachTaskResponse>(await this.callApi(params, req, runtime), new BatchCreateAICoachTaskResponse({}));
    } else {
      return $dara.cast<BatchCreateAICoachTaskResponse>(await this.execute(params, req, runtime), new BatchCreateAICoachTaskResponse({}));
    }

  }

  /**
   * 批量发布剧本任务
   * 
   * @param request - BatchCreateAICoachTaskRequest
   * @returns BatchCreateAICoachTaskResponse
   */
  async batchCreateAICoachTask(request: BatchCreateAICoachTaskRequest): Promise<BatchCreateAICoachTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchCreateAICoachTaskWithOptions(request, headers, runtime);
  }

  /**
   * 批量查询项目信息
   * 
   * @param tmpReq - BatchGetProjectTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchGetProjectTaskResponse
   */
  async batchGetProjectTaskWithOptions(tmpReq: BatchGetProjectTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<BatchGetProjectTaskResponse> {
    tmpReq.validate();
    let request = new BatchGetProjectTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.taskIdList)) {
      request.taskIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskIdList, "taskIdList", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskIdListShrink)) {
      query["taskIdList"] = request.taskIdListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchGetProjectTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/digitalHuman/project/batchGetProjectTask`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchGetProjectTaskResponse>(await this.callApi(params, req, runtime), new BatchGetProjectTaskResponse({}));
    } else {
      return $dara.cast<BatchGetProjectTaskResponse>(await this.execute(params, req, runtime), new BatchGetProjectTaskResponse({}));
    }

  }

  /**
   * 批量查询项目信息
   * 
   * @param request - BatchGetProjectTaskRequest
   * @returns BatchGetProjectTaskResponse
   */
  async batchGetProjectTask(request: BatchGetProjectTaskRequest): Promise<BatchGetProjectTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchGetProjectTaskWithOptions(request, headers, runtime);
  }

  /**
   * 批量查询声音复刻任务
   * 
   * @param tmpReq - BatchGetTrainTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchGetTrainTaskResponse
   */
  async batchGetTrainTaskWithOptions(tmpReq: BatchGetTrainTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<BatchGetTrainTaskResponse> {
    tmpReq.validate();
    let request = new BatchGetTrainTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.taskIdList)) {
      request.taskIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskIdList, "taskIdList", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliyunMainId)) {
      query["aliyunMainId"] = request.aliyunMainId;
    }

    if (!$dara.isNull(request.taskIdListShrink)) {
      query["taskIdList"] = request.taskIdListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchGetTrainTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/train/task/batchGetTrainTaskInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchGetTrainTaskResponse>(await this.callApi(params, req, runtime), new BatchGetTrainTaskResponse({}));
    } else {
      return $dara.cast<BatchGetTrainTaskResponse>(await this.execute(params, req, runtime), new BatchGetTrainTaskResponse({}));
    }

  }

  /**
   * 批量查询声音复刻任务
   * 
   * @param request - BatchGetTrainTaskRequest
   * @returns BatchGetTrainTaskResponse
   */
  async batchGetTrainTask(request: BatchGetTrainTaskRequest): Promise<BatchGetTrainTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchGetTrainTaskWithOptions(request, headers, runtime);
  }

  /**
   * 批量查询视频切片任务信息
   * 
   * @param tmpReq - BatchGetVideoClipTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchGetVideoClipTaskResponse
   */
  async batchGetVideoClipTaskWithOptions(tmpReq: BatchGetVideoClipTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<BatchGetVideoClipTaskResponse> {
    tmpReq.validate();
    let request = new BatchGetVideoClipTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.taskIdList)) {
      request.taskIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskIdList, "taskIdList", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskIdListShrink)) {
      query["taskIdList"] = request.taskIdListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchGetVideoClipTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/video/clip/batchGetVideoClipTask`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchGetVideoClipTaskResponse>(await this.callApi(params, req, runtime), new BatchGetVideoClipTaskResponse({}));
    } else {
      return $dara.cast<BatchGetVideoClipTaskResponse>(await this.execute(params, req, runtime), new BatchGetVideoClipTaskResponse({}));
    }

  }

  /**
   * 批量查询视频切片任务信息
   * 
   * @param request - BatchGetVideoClipTaskRequest
   * @returns BatchGetVideoClipTaskResponse
   */
  async batchGetVideoClipTask(request: BatchGetVideoClipTaskRequest): Promise<BatchGetVideoClipTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchGetVideoClipTaskWithOptions(request, headers, runtime);
  }

  /**
   * 批量查询文案
   * 
   * @param tmpReq - BatchQueryIndividuationTextRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchQueryIndividuationTextResponse
   */
  async batchQueryIndividuationTextWithOptions(tmpReq: BatchQueryIndividuationTextRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<BatchQueryIndividuationTextResponse> {
    tmpReq.validate();
    let request = new BatchQueryIndividuationTextShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.textIdList)) {
      request.textIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.textIdList, "textIdList", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.textIdListShrink)) {
      query["textIdList"] = request.textIdListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchQueryIndividuationText",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/individuationText/batchQueryText`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchQueryIndividuationTextResponse>(await this.callApi(params, req, runtime), new BatchQueryIndividuationTextResponse({}));
    } else {
      return $dara.cast<BatchQueryIndividuationTextResponse>(await this.execute(params, req, runtime), new BatchQueryIndividuationTextResponse({}));
    }

  }

  /**
   * 批量查询文案
   * 
   * @param request - BatchQueryIndividuationTextRequest
   * @returns BatchQueryIndividuationTextResponse
   */
  async batchQueryIndividuationText(request: BatchQueryIndividuationTextRequest): Promise<BatchQueryIndividuationTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchQueryIndividuationTextWithOptions(request, headers, runtime);
  }

  /**
   * 检查会话状态
   * 
   * @param request - CheckSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckSessionResponse
   */
  async checkSessionWithOptions(request: CheckSessionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CheckSessionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckSession",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/avatar/project/checkSession`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CheckSessionResponse>(await this.callApi(params, req, runtime), new CheckSessionResponse({}));
    } else {
      return $dara.cast<CheckSessionResponse>(await this.execute(params, req, runtime), new CheckSessionResponse({}));
    }

  }

  /**
   * 检查会话状态
   * 
   * @param request - CheckSessionRequest
   * @returns CheckSessionResponse
   */
  async checkSession(request: CheckSessionRequest): Promise<CheckSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkSessionWithOptions(request, headers, runtime);
  }

  /**
   * 学员关闭会话
   * 
   * @param request - CloseAICoachTaskSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseAICoachTaskSessionResponse
   */
  async closeAICoachTaskSessionWithOptions(request: CloseAICoachTaskSessionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CloseAICoachTaskSessionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.uid)) {
      body["uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloseAICoachTaskSession",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/aicoach/closeSession`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CloseAICoachTaskSessionResponse>(await this.callApi(params, req, runtime), new CloseAICoachTaskSessionResponse({}));
    } else {
      return $dara.cast<CloseAICoachTaskSessionResponse>(await this.execute(params, req, runtime), new CloseAICoachTaskSessionResponse({}));
    }

  }

  /**
   * 学员关闭会话
   * 
   * @param request - CloseAICoachTaskSessionRequest
   * @returns CloseAICoachTaskSessionResponse
   */
  async closeAICoachTaskSession(request: CloseAICoachTaskSessionRequest): Promise<CloseAICoachTaskSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.closeAICoachTaskSessionWithOptions(request, headers, runtime);
  }

  /**
   * 文本数量统计
   * 
   * @param request - CountTextRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CountTextResponse
   */
  async countTextWithOptions(request: CountTextRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CountTextResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.generationSource)) {
      query["generationSource"] = request.generationSource;
    }

    if (!$dara.isNull(request.industry)) {
      query["industry"] = request.industry;
    }

    if (!$dara.isNull(request.publishStatus)) {
      query["publishStatus"] = request.publishStatus;
    }

    if (!$dara.isNull(request.style)) {
      query["style"] = request.style;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CountText",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/countText`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CountTextResponse>(await this.callApi(params, req, runtime), new CountTextResponse({}));
    } else {
      return $dara.cast<CountTextResponse>(await this.execute(params, req, runtime), new CountTextResponse({}));
    }

  }

  /**
   * 文本数量统计
   * 
   * @param request - CountTextRequest
   * @returns CountTextResponse
   */
  async countText(request: CountTextRequest): Promise<CountTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.countTextWithOptions(request, headers, runtime);
  }

  /**
   * 查询剧本列表
   * 
   * @param request - CreateAICoachTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAICoachTaskResponse
   */
  async createAICoachTaskWithOptions(request: CreateAICoachTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateAICoachTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!$dara.isNull(request.scriptRecordId)) {
      body["scriptRecordId"] = request.scriptRecordId;
    }

    if (!$dara.isNull(request.studentAudioUrl)) {
      body["studentAudioUrl"] = request.studentAudioUrl;
    }

    if (!$dara.isNull(request.studentId)) {
      body["studentId"] = request.studentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAICoachTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/aicoach/createTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateAICoachTaskResponse>(await this.callApi(params, req, runtime), new CreateAICoachTaskResponse({}));
    } else {
      return $dara.cast<CreateAICoachTaskResponse>(await this.execute(params, req, runtime), new CreateAICoachTaskResponse({}));
    }

  }

  /**
   * 查询剧本列表
   * 
   * @param request - CreateAICoachTaskRequest
   * @returns CreateAICoachTaskResponse
   */
  async createAICoachTask(request: CreateAICoachTaskRequest): Promise<CreateAICoachTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAICoachTaskWithOptions(request, headers, runtime);
  }

  /**
   * 学员开启对练会话
   * 
   * @param request - CreateAICoachTaskSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAICoachTaskSessionResponse
   */
  async createAICoachTaskSessionWithOptions(request: CreateAICoachTaskSessionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateAICoachTaskSessionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    if (!$dara.isNull(request.uid)) {
      body["uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAICoachTaskSession",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/aicoach/startSession`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateAICoachTaskSessionResponse>(await this.callApi(params, req, runtime), new CreateAICoachTaskSessionResponse({}));
    } else {
      return $dara.cast<CreateAICoachTaskSessionResponse>(await this.execute(params, req, runtime), new CreateAICoachTaskSessionResponse({}));
    }

  }

  /**
   * 学员开启对练会话
   * 
   * @param request - CreateAICoachTaskSessionRequest
   * @returns CreateAICoachTaskSessionResponse
   */
  async createAICoachTaskSession(request: CreateAICoachTaskSessionRequest): Promise<CreateAICoachTaskSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAICoachTaskSessionWithOptions(request, headers, runtime);
  }

  /**
   * 创建照片数字人
   * 
   * @param request - CreateAnchorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAnchorResponse
   */
  async createAnchorWithOptions(request: CreateAnchorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateAnchorResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.anchorMaterialName)) {
      body["anchorMaterialName"] = request.anchorMaterialName;
    }

    if (!$dara.isNull(request.coverUrl)) {
      body["coverUrl"] = request.coverUrl;
    }

    if (!$dara.isNull(request.digitalHumanType)) {
      body["digitalHumanType"] = request.digitalHumanType;
    }

    if (!$dara.isNull(request.gender)) {
      body["gender"] = request.gender;
    }

    if (!$dara.isNull(request.useScene)) {
      body["useScene"] = request.useScene;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAnchor",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/digitalHuman/anchorOpen/createAnchor`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateAnchorResponse>(await this.callApi(params, req, runtime), new CreateAnchorResponse({}));
    } else {
      return $dara.cast<CreateAnchorResponse>(await this.execute(params, req, runtime), new CreateAnchorResponse({}));
    }

  }

  /**
   * 创建照片数字人
   * 
   * @param request - CreateAnchorRequest
   * @returns CreateAnchorResponse
   */
  async createAnchor(request: CreateAnchorRequest): Promise<CreateAnchorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAnchorWithOptions(request, headers, runtime);
  }

  /**
   * 创建配图生成任务
   * 
   * @param request - CreateIllustrationTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIllustrationTaskResponse
   */
  async createIllustrationTaskWithOptions(textId: string, request: CreateIllustrationTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateIllustrationTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIllustrationTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/texts/${$dara.URL.percentEncode(textId)}/illustrationTasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateIllustrationTaskResponse>(await this.callApi(params, req, runtime), new CreateIllustrationTaskResponse({}));
    } else {
      return $dara.cast<CreateIllustrationTaskResponse>(await this.execute(params, req, runtime), new CreateIllustrationTaskResponse({}));
    }

  }

  /**
   * 创建配图生成任务
   * 
   * @param request - CreateIllustrationTaskRequest
   * @returns CreateIllustrationTaskResponse
   */
  async createIllustrationTask(textId: string, request: CreateIllustrationTaskRequest): Promise<CreateIllustrationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIllustrationTaskWithOptions(textId, request, headers, runtime);
  }

  /**
   * 创建个性化文案项目
   * 
   * @param request - CreateIndividuationProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIndividuationProjectResponse
   */
  async createIndividuationProjectWithOptions(request: CreateIndividuationProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateIndividuationProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectInfo)) {
      body["projectInfo"] = request.projectInfo;
    }

    if (!$dara.isNull(request.projectName)) {
      body["projectName"] = request.projectName;
    }

    if (!$dara.isNull(request.purpose)) {
      body["purpose"] = request.purpose;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["sceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIndividuationProject",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/individuationText/createProject`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateIndividuationProjectResponse>(await this.callApi(params, req, runtime), new CreateIndividuationProjectResponse({}));
    } else {
      return $dara.cast<CreateIndividuationProjectResponse>(await this.execute(params, req, runtime), new CreateIndividuationProjectResponse({}));
    }

  }

  /**
   * 创建个性化文案项目
   * 
   * @param request - CreateIndividuationProjectRequest
   * @returns CreateIndividuationProjectResponse
   */
  async createIndividuationProject(request: CreateIndividuationProjectRequest): Promise<CreateIndividuationProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIndividuationProjectWithOptions(request, headers, runtime);
  }

  /**
   * 创建个性化文案任务
   * 
   * @param request - CreateIndividuationTextTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIndividuationTextTaskResponse
   */
  async createIndividuationTextTaskWithOptions(request: CreateIndividuationTextTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateIndividuationTextTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.crowdPack)) {
      body["crowdPack"] = request.crowdPack;
    }

    if (!$dara.isNull(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.taskName)) {
      body["taskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIndividuationTextTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/individuationText/createTextTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateIndividuationTextTaskResponse>(await this.callApi(params, req, runtime), new CreateIndividuationTextTaskResponse({}));
    } else {
      return $dara.cast<CreateIndividuationTextTaskResponse>(await this.execute(params, req, runtime), new CreateIndividuationTextTaskResponse({}));
    }

  }

  /**
   * 创建个性化文案任务
   * 
   * @param request - CreateIndividuationTextTaskRequest
   * @returns CreateIndividuationTextTaskResponse
   */
  async createIndividuationTextTask(request: CreateIndividuationTextTaskRequest): Promise<CreateIndividuationTextTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIndividuationTextTaskWithOptions(request, headers, runtime);
  }

  /**
   * 写实人像创作
   * 
   * @param request - CreateRealisticPortraitRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRealisticPortraitResponse
   */
  async createRealisticPortraitWithOptions(request: CreateRealisticPortraitRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateRealisticPortraitResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ages)) {
      body["ages"] = request.ages;
    }

    if (!$dara.isNull(request.cloth)) {
      body["cloth"] = request.cloth;
    }

    if (!$dara.isNull(request.color)) {
      body["color"] = request.color;
    }

    if (!$dara.isNull(request.custom)) {
      body["custom"] = request.custom;
    }

    if (!$dara.isNull(request.face)) {
      body["face"] = request.face;
    }

    if (!$dara.isNull(request.figure)) {
      body["figure"] = request.figure;
    }

    if (!$dara.isNull(request.gender)) {
      body["gender"] = request.gender;
    }

    if (!$dara.isNull(request.hairColor)) {
      body["hairColor"] = request.hairColor;
    }

    if (!$dara.isNull(request.hairstyle)) {
      body["hairstyle"] = request.hairstyle;
    }

    if (!$dara.isNull(request.height)) {
      body["height"] = request.height;
    }

    if (!$dara.isNull(request.imageUrl)) {
      body["imageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.numbers)) {
      body["numbers"] = request.numbers;
    }

    if (!$dara.isNull(request.ratio)) {
      body["ratio"] = request.ratio;
    }

    if (!$dara.isNull(request.width)) {
      body["width"] = request.width;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRealisticPortrait",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/images/portrait/realistic`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateRealisticPortraitResponse>(await this.callApi(params, req, runtime), new CreateRealisticPortraitResponse({}));
    } else {
      return $dara.cast<CreateRealisticPortraitResponse>(await this.execute(params, req, runtime), new CreateRealisticPortraitResponse({}));
    }

  }

  /**
   * 写实人像创作
   * 
   * @param request - CreateRealisticPortraitRequest
   * @returns CreateRealisticPortraitResponse
   */
  async createRealisticPortrait(request: CreateRealisticPortraitRequest): Promise<CreateRealisticPortraitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRealisticPortraitWithOptions(request, headers, runtime);
  }

  /**
   * 创建文案生成任务
   * 
   * @param request - CreateTextTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTextTaskResponse
   */
  async createTextTaskWithOptions(request: CreateTextTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateTextTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTextTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/textTasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateTextTaskResponse>(await this.callApi(params, req, runtime), new CreateTextTaskResponse({}));
    } else {
      return $dara.cast<CreateTextTaskResponse>(await this.execute(params, req, runtime), new CreateTextTaskResponse({}));
    }

  }

  /**
   * 创建文案生成任务
   * 
   * @param request - CreateTextTaskRequest
   * @returns CreateTextTaskResponse
   */
  async createTextTask(request: CreateTextTaskRequest): Promise<CreateTextTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTextTaskWithOptions(request, headers, runtime);
  }

  /**
   * 提交声音复刻任务
   * 
   * @param request - CreateTrainTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTrainTaskResponse
   */
  async createTrainTaskWithOptions(request: CreateTrainTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateTrainTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliyunMainId)) {
      body["aliyunMainId"] = request.aliyunMainId;
    }

    if (!$dara.isNull(request.resSpecType)) {
      body["resSpecType"] = request.resSpecType;
    }

    if (!$dara.isNull(request.taskType)) {
      body["taskType"] = request.taskType;
    }

    if (!$dara.isNull(request.useScene)) {
      body["useScene"] = request.useScene;
    }

    if (!$dara.isNull(request.voiceGender)) {
      body["voiceGender"] = request.voiceGender;
    }

    if (!$dara.isNull(request.voiceLanguage)) {
      body["voiceLanguage"] = request.voiceLanguage;
    }

    if (!$dara.isNull(request.voiceName)) {
      body["voiceName"] = request.voiceName;
    }

    if (!$dara.isNull(request.voicePath)) {
      body["voicePath"] = request.voicePath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTrainTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/train/task/createTrainTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateTrainTaskResponse>(await this.callApi(params, req, runtime), new CreateTrainTaskResponse({}));
    } else {
      return $dara.cast<CreateTrainTaskResponse>(await this.execute(params, req, runtime), new CreateTrainTaskResponse({}));
    }

  }

  /**
   * 提交声音复刻任务
   * 
   * @param request - CreateTrainTaskRequest
   * @returns CreateTrainTaskResponse
   */
  async createTrainTask(request: CreateTrainTaskRequest): Promise<CreateTrainTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTrainTaskWithOptions(request, headers, runtime);
  }

  /**
   * 提交视频切片任务
   * 
   * @param request - CreateVideoClipTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVideoClipTaskResponse
   */
  async createVideoClipTaskWithOptions(request: CreateVideoClipTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateVideoClipTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliyunMainId)) {
      body["aliyunMainId"] = request.aliyunMainId;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.ossKeys)) {
      body["ossKeys"] = request.ossKeys;
    }

    if (!$dara.isNull(request.requirement)) {
      body["requirement"] = request.requirement;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVideoClipTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/video/clip/createVideoClipTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateVideoClipTaskResponse>(await this.callApi(params, req, runtime), new CreateVideoClipTaskResponse({}));
    } else {
      return $dara.cast<CreateVideoClipTaskResponse>(await this.execute(params, req, runtime), new CreateVideoClipTaskResponse({}));
    }

  }

  /**
   * 提交视频切片任务
   * 
   * @param request - CreateVideoClipTaskRequest
   * @returns CreateVideoClipTaskResponse
   */
  async createVideoClipTask(request: CreateVideoClipTaskRequest): Promise<CreateVideoClipTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createVideoClipTaskWithOptions(request, headers, runtime);
  }

  /**
   * 删除个性化文案项目
   * 
   * @param request - DeleteIndividuationProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIndividuationProjectResponse
   */
  async deleteIndividuationProjectWithOptions(request: DeleteIndividuationProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteIndividuationProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIndividuationProject",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/individuationText/deleteProject`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteIndividuationProjectResponse>(await this.callApi(params, req, runtime), new DeleteIndividuationProjectResponse({}));
    } else {
      return $dara.cast<DeleteIndividuationProjectResponse>(await this.execute(params, req, runtime), new DeleteIndividuationProjectResponse({}));
    }

  }

  /**
   * 删除个性化文案项目
   * 
   * @param request - DeleteIndividuationProjectRequest
   * @returns DeleteIndividuationProjectResponse
   */
  async deleteIndividuationProject(request: DeleteIndividuationProjectRequest): Promise<DeleteIndividuationProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIndividuationProjectWithOptions(request, headers, runtime);
  }

  /**
   * 删除个性化文案
   * 
   * @param request - DeleteIndividuationTextRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIndividuationTextResponse
   */
  async deleteIndividuationTextWithOptions(request: DeleteIndividuationTextRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteIndividuationTextResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.textIdList)) {
      body["textIdList"] = request.textIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIndividuationText",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/individuationText/deleteText`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteIndividuationTextResponse>(await this.callApi(params, req, runtime), new DeleteIndividuationTextResponse({}));
    } else {
      return $dara.cast<DeleteIndividuationTextResponse>(await this.execute(params, req, runtime), new DeleteIndividuationTextResponse({}));
    }

  }

  /**
   * 删除个性化文案
   * 
   * @param request - DeleteIndividuationTextRequest
   * @returns DeleteIndividuationTextResponse
   */
  async deleteIndividuationText(request: DeleteIndividuationTextRequest): Promise<DeleteIndividuationTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIndividuationTextWithOptions(request, headers, runtime);
  }

  /**
   * 查询文档信息与状态
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDocumentResponse
   */
  async describeDocumentWithOptions(knowledgeBaseId: string, documentId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DescribeDocumentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDocument",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/knowledge-base/${$dara.URL.percentEncode(knowledgeBaseId)}/documents/${$dara.URL.percentEncode(documentId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDocumentResponse>(await this.callApi(params, req, runtime), new DescribeDocumentResponse({}));
    } else {
      return $dara.cast<DescribeDocumentResponse>(await this.execute(params, req, runtime), new DescribeDocumentResponse({}));
    }

  }

  /**
   * 查询文档信息与状态
   * @returns DescribeDocumentResponse
   */
  async describeDocument(knowledgeBaseId: string, documentId: string): Promise<DescribeDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeDocumentWithOptions(knowledgeBaseId, documentId, headers, runtime);
  }

  /**
   * 学员完成会话
   * 
   * @param request - FinishAICoachTaskSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FinishAICoachTaskSessionResponse
   */
  async finishAICoachTaskSessionWithOptions(request: FinishAICoachTaskSessionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<FinishAICoachTaskSessionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.uid)) {
      body["uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FinishAICoachTaskSession",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/aicoach/finishSession`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<FinishAICoachTaskSessionResponse>(await this.callApi(params, req, runtime), new FinishAICoachTaskSessionResponse({}));
    } else {
      return $dara.cast<FinishAICoachTaskSessionResponse>(await this.execute(params, req, runtime), new FinishAICoachTaskSessionResponse({}));
    }

  }

  /**
   * 学员完成会话
   * 
   * @param request - FinishAICoachTaskSessionRequest
   * @returns FinishAICoachTaskSessionResponse
   */
  async finishAICoachTaskSession(request: FinishAICoachTaskSessionRequest): Promise<FinishAICoachTaskSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.finishAICoachTaskSessionWithOptions(request, headers, runtime);
  }

  /**
   * 查询剧本详情
   * 
   * @param request - GetAICoachScriptRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAICoachScriptResponse
   */
  async getAICoachScriptWithOptions(request: GetAICoachScriptRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetAICoachScriptResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.scriptRecordId)) {
      query["scriptRecordId"] = request.scriptRecordId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAICoachScript",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/aicoach/getScript`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAICoachScriptResponse>(await this.callApi(params, req, runtime), new GetAICoachScriptResponse({}));
    } else {
      return $dara.cast<GetAICoachScriptResponse>(await this.execute(params, req, runtime), new GetAICoachScriptResponse({}));
    }

  }

  /**
   * 查询剧本详情
   * 
   * @param request - GetAICoachScriptRequest
   * @returns GetAICoachScriptResponse
   */
  async getAICoachScript(request: GetAICoachScriptRequest): Promise<GetAICoachScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAICoachScriptWithOptions(request, headers, runtime);
  }

  /**
   * 学员查询会话历史
   * 
   * @param request - GetAICoachTaskSessionHistoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAICoachTaskSessionHistoryResponse
   */
  async getAICoachTaskSessionHistoryWithOptions(request: GetAICoachTaskSessionHistoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetAICoachTaskSessionHistoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.uid)) {
      query["uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAICoachTaskSessionHistory",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/aicoach/querySessionHistory`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAICoachTaskSessionHistoryResponse>(await this.callApi(params, req, runtime), new GetAICoachTaskSessionHistoryResponse({}));
    } else {
      return $dara.cast<GetAICoachTaskSessionHistoryResponse>(await this.execute(params, req, runtime), new GetAICoachTaskSessionHistoryResponse({}));
    }

  }

  /**
   * 学员查询会话历史
   * 
   * @param request - GetAICoachTaskSessionHistoryRequest
   * @returns GetAICoachTaskSessionHistoryResponse
   */
  async getAICoachTaskSessionHistory(request: GetAICoachTaskSessionHistoryRequest): Promise<GetAICoachTaskSessionHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAICoachTaskSessionHistoryWithOptions(request, headers, runtime);
  }

  /**
   * 学员查询会话评测报告
   * 
   * @param request - GetAICoachTaskSessionReportRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAICoachTaskSessionReportResponse
   */
  async getAICoachTaskSessionReportWithOptions(request: GetAICoachTaskSessionReportRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetAICoachTaskSessionReportResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sessionId)) {
      query["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.uid)) {
      query["uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAICoachTaskSessionReport",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/aicoach/queryTaskSessionReport`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAICoachTaskSessionReportResponse>(await this.callApi(params, req, runtime), new GetAICoachTaskSessionReportResponse({}));
    } else {
      return $dara.cast<GetAICoachTaskSessionReportResponse>(await this.execute(params, req, runtime), new GetAICoachTaskSessionReportResponse({}));
    }

  }

  /**
   * 学员查询会话评测报告
   * 
   * @param request - GetAICoachTaskSessionReportRequest
   * @returns GetAICoachTaskSessionReportResponse
   */
  async getAICoachTaskSessionReport(request: GetAICoachTaskSessionReportRequest): Promise<GetAICoachTaskSessionReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAICoachTaskSessionReportWithOptions(request, headers, runtime);
  }

  /**
   * 查询配图
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIllustrationResponse
   */
  async getIllustrationWithOptions(textId: string, illustrationId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetIllustrationResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIllustration",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/texts/${$dara.URL.percentEncode(textId)}/illustrations/${$dara.URL.percentEncode(illustrationId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetIllustrationResponse>(await this.callApi(params, req, runtime), new GetIllustrationResponse({}));
    } else {
      return $dara.cast<GetIllustrationResponse>(await this.execute(params, req, runtime), new GetIllustrationResponse({}));
    }

  }

  /**
   * 查询配图
   * @returns GetIllustrationResponse
   */
  async getIllustration(textId: string, illustrationId: string): Promise<GetIllustrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIllustrationWithOptions(textId, illustrationId, headers, runtime);
  }

  /**
   * 查询配图任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIllustrationTaskResponse
   */
  async getIllustrationTaskWithOptions(textId: string, illustrationTaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetIllustrationTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIllustrationTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/texts/${$dara.URL.percentEncode(textId)}/illustrationTasks/${$dara.URL.percentEncode(illustrationTaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetIllustrationTaskResponse>(await this.callApi(params, req, runtime), new GetIllustrationTaskResponse({}));
    } else {
      return $dara.cast<GetIllustrationTaskResponse>(await this.execute(params, req, runtime), new GetIllustrationTaskResponse({}));
    }

  }

  /**
   * 查询配图任务
   * @returns GetIllustrationTaskResponse
   */
  async getIllustrationTask(textId: string, illustrationTaskId: string): Promise<GetIllustrationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIllustrationTaskWithOptions(textId, illustrationTaskId, headers, runtime);
  }

  /**
   * 获取图片上传oss token
   * 
   * @param request - GetOssUploadTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOssUploadTokenResponse
   */
  async getOssUploadTokenWithOptions(request: GetOssUploadTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetOssUploadTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileType)) {
      query["fileType"] = request.fileType;
    }

    if (!$dara.isNull(request.uploadType)) {
      query["uploadType"] = request.uploadType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOssUploadToken",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/uploadToken`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetOssUploadTokenResponse>(await this.callApi(params, req, runtime), new GetOssUploadTokenResponse({}));
    } else {
      return $dara.cast<GetOssUploadTokenResponse>(await this.execute(params, req, runtime), new GetOssUploadTokenResponse({}));
    }

  }

  /**
   * 获取图片上传oss token
   * 
   * @param request - GetOssUploadTokenRequest
   * @returns GetOssUploadTokenResponse
   */
  async getOssUploadToken(request: GetOssUploadTokenRequest): Promise<GetOssUploadTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOssUploadTokenWithOptions(request, headers, runtime);
  }

  /**
   * 获取数据人合成信息
   * 
   * @param request - GetProjectTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectTaskResponse
   */
  async getProjectTaskWithOptions(request: GetProjectTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetProjectTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.idempotentId)) {
      query["IdempotentId"] = request.idempotentId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProjectTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/digitalHuman/project/getProjectTask`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetProjectTaskResponse>(await this.callApi(params, req, runtime), new GetProjectTaskResponse({}));
    } else {
      return $dara.cast<GetProjectTaskResponse>(await this.execute(params, req, runtime), new GetProjectTaskResponse({}));
    }

  }

  /**
   * 获取数据人合成信息
   * 
   * @param request - GetProjectTaskRequest
   * @returns GetProjectTaskResponse
   */
  async getProjectTask(request: GetProjectTaskRequest): Promise<GetProjectTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectTaskWithOptions(request, headers, runtime);
  }

  /**
   * 查询文案
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTextResponse
   */
  async getTextWithOptions(textId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTextResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetText",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/texts/${$dara.URL.percentEncode(textId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTextResponse>(await this.callApi(params, req, runtime), new GetTextResponse({}));
    } else {
      return $dara.cast<GetTextResponse>(await this.execute(params, req, runtime), new GetTextResponse({}));
    }

  }

  /**
   * 查询文案
   * @returns GetTextResponse
   */
  async getText(textId: string): Promise<GetTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTextWithOptions(textId, headers, runtime);
  }

  /**
   * 查询文案任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTextTaskResponse
   */
  async getTextTaskWithOptions(textTaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTextTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTextTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/textTasks/${$dara.URL.percentEncode(textTaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTextTaskResponse>(await this.callApi(params, req, runtime), new GetTextTaskResponse({}));
    } else {
      return $dara.cast<GetTextTaskResponse>(await this.execute(params, req, runtime), new GetTextTaskResponse({}));
    }

  }

  /**
   * 查询文案任务
   * @returns GetTextTaskResponse
   */
  async getTextTask(textTaskId: string): Promise<GetTextTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTextTaskWithOptions(textTaskId, headers, runtime);
  }

  /**
   * 查询表单配置
   * 
   * @param request - GetTextTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTextTemplateResponse
   */
  async getTextTemplateWithOptions(request: GetTextTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTextTemplateResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.industry)) {
      query["industry"] = request.industry;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTextTemplate",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/texts/commands/getTextTemplate`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTextTemplateResponse>(await this.callApi(params, req, runtime), new GetTextTemplateResponse({}));
    } else {
      return $dara.cast<GetTextTemplateResponse>(await this.execute(params, req, runtime), new GetTextTemplateResponse({}));
    }

  }

  /**
   * 查询表单配置
   * 
   * @param request - GetTextTemplateRequest
   * @returns GetTextTemplateResponse
   */
  async getTextTemplate(request: GetTextTemplateRequest): Promise<GetTextTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTextTemplateWithOptions(request, headers, runtime);
  }

  /**
   * 营销文案互动问答
   * 
   * @param request - InteractTextRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InteractTextResponse
   */
  async interactTextWithOptions(request: InteractTextRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<InteractTextResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      body["agentId"] = request.agentId;
    }

    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InteractText",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/stream/interactText`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<InteractTextResponse>(await this.callApi(params, req, runtime), new InteractTextResponse({}));
    } else {
      return $dara.cast<InteractTextResponse>(await this.execute(params, req, runtime), new InteractTextResponse({}));
    }

  }

  /**
   * 营销文案互动问答
   * 
   * @param request - InteractTextRequest
   * @returns InteractTextResponse
   */
  async interactText(request: InteractTextRequest): Promise<InteractTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.interactTextWithOptions(request, headers, runtime);
  }

  /**
   * 查询剧本列表
   * 
   * @param request - ListAICoachScriptPageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAICoachScriptPageResponse
   */
  async listAICoachScriptPageWithOptions(request: ListAICoachScriptPageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListAICoachScriptPageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
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

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAICoachScriptPage",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/aicoach/pageScript`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAICoachScriptPageResponse>(await this.callApi(params, req, runtime), new ListAICoachScriptPageResponse({}));
    } else {
      return $dara.cast<ListAICoachScriptPageResponse>(await this.execute(params, req, runtime), new ListAICoachScriptPageResponse({}));
    }

  }

  /**
   * 查询剧本列表
   * 
   * @param request - ListAICoachScriptPageRequest
   * @returns ListAICoachScriptPageResponse
   */
  async listAICoachScriptPage(request: ListAICoachScriptPageRequest): Promise<ListAICoachScriptPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAICoachScriptPageWithOptions(request, headers, runtime);
  }

  /**
   * 查询任务列表
   * 
   * @param request - ListAICoachTaskPageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAICoachTaskPageResponse
   */
  async listAICoachTaskPageWithOptions(request: ListAICoachTaskPageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListAICoachTaskPageResponse> {
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

    if (!$dara.isNull(request.studentId)) {
      query["studentId"] = request.studentId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAICoachTaskPage",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/aicoach/listTaskPage`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAICoachTaskPageResponse>(await this.callApi(params, req, runtime), new ListAICoachTaskPageResponse({}));
    } else {
      return $dara.cast<ListAICoachTaskPageResponse>(await this.execute(params, req, runtime), new ListAICoachTaskPageResponse({}));
    }

  }

  /**
   * 查询任务列表
   * 
   * @param request - ListAICoachTaskPageRequest
   * @returns ListAICoachTaskPageResponse
   */
  async listAICoachTaskPage(request: ListAICoachTaskPageRequest): Promise<ListAICoachTaskPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAICoachTaskPageWithOptions(request, headers, runtime);
  }

  /**
   * 分页查询智能体
   * 
   * @param request - ListAgentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAgentsResponse
   */
  async listAgentsWithOptions(request: ListAgentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListAgentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      query["agentId"] = request.agentId;
    }

    if (!$dara.isNull(request.agentScene)) {
      query["agentScene"] = request.agentScene;
    }

    if (!$dara.isNull(request.owner)) {
      query["owner"] = request.owner;
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
      action: "ListAgents",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/agent/listAgents`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAgentsResponse>(await this.callApi(params, req, runtime), new ListAgentsResponse({}));
    } else {
      return $dara.cast<ListAgentsResponse>(await this.execute(params, req, runtime), new ListAgentsResponse({}));
    }

  }

  /**
   * 分页查询智能体
   * 
   * @param request - ListAgentsRequest
   * @returns ListAgentsResponse
   */
  async listAgents(request: ListAgentsRequest): Promise<ListAgentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAgentsWithOptions(request, headers, runtime);
  }

  /**
   * 获取数字人模特列表
   * 
   * @param request - ListAnchorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAnchorResponse
   */
  async listAnchorWithOptions(request: ListAnchorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListAnchorResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.anchorCategory)) {
      query["anchorCategory"] = request.anchorCategory;
    }

    if (!$dara.isNull(request.anchorType)) {
      query["anchorType"] = request.anchorType;
    }

    if (!$dara.isNull(request.coverRate)) {
      query["coverRate"] = request.coverRate;
    }

    if (!$dara.isNull(request.digitalHumanType)) {
      query["digitalHumanType"] = request.digitalHumanType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resSpecType)) {
      query["resSpecType"] = request.resSpecType;
    }

    if (!$dara.isNull(request.useScene)) {
      query["useScene"] = request.useScene;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAnchor",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/digitalHuman/anchorOpen/listAnchor`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAnchorResponse>(await this.callApi(params, req, runtime), new ListAnchorResponse({}));
    } else {
      return $dara.cast<ListAnchorResponse>(await this.execute(params, req, runtime), new ListAnchorResponse({}));
    }

  }

  /**
   * 获取数字人模特列表
   * 
   * @param request - ListAnchorRequest
   * @returns ListAnchorResponse
   */
  async listAnchor(request: ListAnchorRequest): Promise<ListAnchorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAnchorWithOptions(request, headers, runtime);
  }

  /**
   * 批量查询数字人项目启动结果
   * 
   * @param tmpReq - ListAvatarProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAvatarProjectResponse
   */
  async listAvatarProjectWithOptions(tmpReq: ListAvatarProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListAvatarProjectResponse> {
    tmpReq.validate();
    let request = new ListAvatarProjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.projectIdList)) {
      request.projectIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.projectIdList, "projectIdList", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectIdListShrink)) {
      query["projectIdList"] = request.projectIdListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAvatarProject",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/avatar/project/listAvatarProject`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAvatarProjectResponse>(await this.callApi(params, req, runtime), new ListAvatarProjectResponse({}));
    } else {
      return $dara.cast<ListAvatarProjectResponse>(await this.execute(params, req, runtime), new ListAvatarProjectResponse({}));
    }

  }

  /**
   * 批量查询数字人项目启动结果
   * 
   * @param request - ListAvatarProjectRequest
   * @returns ListAvatarProjectResponse
   */
  async listAvatarProject(request: ListAvatarProjectRequest): Promise<ListAvatarProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAvatarProjectWithOptions(request, headers, runtime);
  }

  /**
   * 查询知识库
   * 
   * @param request - ListKnowledgeBaseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKnowledgeBaseResponse
   */
  async listKnowledgeBaseWithOptions(request: ListKnowledgeBaseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListKnowledgeBaseResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.knowledgeBaseId)) {
      query["knowledgeBaseId"] = request.knowledgeBaseId;
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
      action: "ListKnowledgeBase",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/knowledge-base`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListKnowledgeBaseResponse>(await this.callApi(params, req, runtime), new ListKnowledgeBaseResponse({}));
    } else {
      return $dara.cast<ListKnowledgeBaseResponse>(await this.execute(params, req, runtime), new ListKnowledgeBaseResponse({}));
    }

  }

  /**
   * 查询知识库
   * 
   * @param request - ListKnowledgeBaseRequest
   * @returns ListKnowledgeBaseResponse
   */
  async listKnowledgeBase(request: ListKnowledgeBaseRequest): Promise<ListKnowledgeBaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listKnowledgeBaseWithOptions(request, headers, runtime);
  }

  /**
   * 查询文案主题列表
   * 
   * @param request - ListTextThemesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTextThemesResponse
   */
  async listTextThemesWithOptions(request: ListTextThemesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTextThemesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.industry)) {
      query["industry"] = request.industry;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTextThemes",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/textThemes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTextThemesResponse>(await this.callApi(params, req, runtime), new ListTextThemesResponse({}));
    } else {
      return $dara.cast<ListTextThemesResponse>(await this.execute(params, req, runtime), new ListTextThemesResponse({}));
    }

  }

  /**
   * 查询文案主题列表
   * 
   * @param request - ListTextThemesRequest
   * @returns ListTextThemesResponse
   */
  async listTextThemes(request: ListTextThemesRequest): Promise<ListTextThemesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTextThemesWithOptions(request, headers, runtime);
  }

  /**
   * 列举文案
   * 
   * @param request - ListTextsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTextsResponse
   */
  async listTextsWithOptions(request: ListTextsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTextsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.generationSource)) {
      query["generationSource"] = request.generationSource;
    }

    if (!$dara.isNull(request.industry)) {
      query["industry"] = request.industry;
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

    if (!$dara.isNull(request.publishStatus)) {
      query["publishStatus"] = request.publishStatus;
    }

    if (!$dara.isNull(request.textStyleType)) {
      query["textStyleType"] = request.textStyleType;
    }

    if (!$dara.isNull(request.textTheme)) {
      query["textTheme"] = request.textTheme;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTexts",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/texts`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTextsResponse>(await this.callApi(params, req, runtime), new ListTextsResponse({}));
    } else {
      return $dara.cast<ListTextsResponse>(await this.execute(params, req, runtime), new ListTextsResponse({}));
    }

  }

  /**
   * 列举文案
   * 
   * @param request - ListTextsRequest
   * @returns ListTextsResponse
   */
  async listTexts(request: ListTextsRequest): Promise<ListTextsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTextsWithOptions(request, headers, runtime);
  }

  /**
   * 获取声音模版列表
   * 
   * @param request - ListVoiceModelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVoiceModelsResponse
   */
  async listVoiceModelsWithOptions(request: ListVoiceModelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListVoiceModelsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resSpecType)) {
      query["resSpecType"] = request.resSpecType;
    }

    if (!$dara.isNull(request.useScene)) {
      query["useScene"] = request.useScene;
    }

    if (!$dara.isNull(request.voiceLanguage)) {
      query["voiceLanguage"] = request.voiceLanguage;
    }

    if (!$dara.isNull(request.voiceType)) {
      query["voiceType"] = request.voiceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVoiceModels",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/digitalHuman/voiceOpen/listVoiceModels`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListVoiceModelsResponse>(await this.callApi(params, req, runtime), new ListVoiceModelsResponse({}));
    } else {
      return $dara.cast<ListVoiceModelsResponse>(await this.execute(params, req, runtime), new ListVoiceModelsResponse({}));
    }

  }

  /**
   * 获取声音模版列表
   * 
   * @param request - ListVoiceModelsRequest
   * @returns ListVoiceModelsResponse
   */
  async listVoiceModels(request: ListVoiceModelsRequest): Promise<ListVoiceModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVoiceModelsWithOptions(request, headers, runtime);
  }

  /**
   * 操作实时数字人项目
   * 
   * @param request - OperateAvatarProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateAvatarProjectResponse
   */
  async operateAvatarProjectWithOptions(request: OperateAvatarProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<OperateAvatarProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.operateType)) {
      body["operateType"] = request.operateType;
    }

    if (!$dara.isNull(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.resChannelNumber)) {
      body["resChannelNumber"] = request.resChannelNumber;
    }

    if (!$dara.isNull(request.resType)) {
      body["resType"] = request.resType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateAvatarProject",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/avatar/project/operateProjectAvatar`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<OperateAvatarProjectResponse>(await this.callApi(params, req, runtime), new OperateAvatarProjectResponse({}));
    } else {
      return $dara.cast<OperateAvatarProjectResponse>(await this.execute(params, req, runtime), new OperateAvatarProjectResponse({}));
    }

  }

  /**
   * 操作实时数字人项目
   * 
   * @param request - OperateAvatarProjectRequest
   * @returns OperateAvatarProjectResponse
   */
  async operateAvatarProject(request: OperateAvatarProjectRequest): Promise<OperateAvatarProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.operateAvatarProjectWithOptions(request, headers, runtime);
  }

  /**
   * 查询数字人项目信息
   * 
   * @param request - QueryAvatarProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAvatarProjectResponse
   */
  async queryAvatarProjectWithOptions(request: QueryAvatarProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<QueryAvatarProjectResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      query["projectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAvatarProject",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/avatar/project/queryAvatarProject`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryAvatarProjectResponse>(await this.callApi(params, req, runtime), new QueryAvatarProjectResponse({}));
    } else {
      return $dara.cast<QueryAvatarProjectResponse>(await this.execute(params, req, runtime), new QueryAvatarProjectResponse({}));
    }

  }

  /**
   * 查询数字人项目信息
   * 
   * @param request - QueryAvatarProjectRequest
   * @returns QueryAvatarProjectResponse
   */
  async queryAvatarProject(request: QueryAvatarProjectRequest): Promise<QueryAvatarProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryAvatarProjectWithOptions(request, headers, runtime);
  }

  /**
   * 查找资源
   * 
   * @param request - QueryAvatarResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAvatarResourceResponse
   */
  async queryAvatarResourceWithOptions(request: QueryAvatarResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<QueryAvatarResourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.idempotentId)) {
      query["idempotentId"] = request.idempotentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAvatarResource",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/avatar/project/queryResource`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryAvatarResourceResponse>(await this.callApi(params, req, runtime), new QueryAvatarResourceResponse({}));
    } else {
      return $dara.cast<QueryAvatarResourceResponse>(await this.execute(params, req, runtime), new QueryAvatarResourceResponse({}));
    }

  }

  /**
   * 查找资源
   * 
   * @param request - QueryAvatarResourceRequest
   * @returns QueryAvatarResourceResponse
   */
  async queryAvatarResource(request: QueryAvatarResourceRequest): Promise<QueryAvatarResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryAvatarResourceWithOptions(request, headers, runtime);
  }

  /**
   * 查询个性化文案任务
   * 
   * @param request - QueryIndividuationTextTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryIndividuationTextTaskResponse
   */
  async queryIndividuationTextTaskWithOptions(request: QueryIndividuationTextTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<QueryIndividuationTextTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryIndividuationTextTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/individuationText/queryTextTask`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryIndividuationTextTaskResponse>(await this.callApi(params, req, runtime), new QueryIndividuationTextTaskResponse({}));
    } else {
      return $dara.cast<QueryIndividuationTextTaskResponse>(await this.execute(params, req, runtime), new QueryIndividuationTextTaskResponse({}));
    }

  }

  /**
   * 查询个性化文案任务
   * 
   * @param request - QueryIndividuationTextTaskRequest
   * @returns QueryIndividuationTextTaskResponse
   */
  async queryIndividuationTextTask(request: QueryIndividuationTextTaskRequest): Promise<QueryIndividuationTextTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryIndividuationTextTaskWithOptions(request, headers, runtime);
  }

  /**
   * 查询会话信息
   * 
   * @param tmpReq - QuerySessionInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySessionInfoResponse
   */
  async querySessionInfoWithOptions(tmpReq: QuerySessionInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<QuerySessionInfoResponse> {
    tmpReq.validate();
    let request = new QuerySessionInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.statusList)) {
      request.statusListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.statusList, "statusList", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNo)) {
      query["pageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.statusListShrink)) {
      query["statusList"] = request.statusListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySessionInfo",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/avatar/project/querySessionInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QuerySessionInfoResponse>(await this.callApi(params, req, runtime), new QuerySessionInfoResponse({}));
    } else {
      return $dara.cast<QuerySessionInfoResponse>(await this.execute(params, req, runtime), new QuerySessionInfoResponse({}));
    }

  }

  /**
   * 查询会话信息
   * 
   * @param request - QuerySessionInfoRequest
   * @returns QuerySessionInfoResponse
   */
  async querySessionInfo(request: QuerySessionInfoRequest): Promise<QuerySessionInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.querySessionInfoWithOptions(request, headers, runtime);
  }

  /**
   * 流式输出文案
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTextStreamResponse
   */
  async queryTextStreamWithOptions(textId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<QueryTextStreamResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTextStream",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/stream/queryTextStream/${$dara.URL.percentEncode(textId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryTextStreamResponse>(await this.callApi(params, req, runtime), new QueryTextStreamResponse({}));
    } else {
      return $dara.cast<QueryTextStreamResponse>(await this.execute(params, req, runtime), new QueryTextStreamResponse({}));
    }

  }

  /**
   * 流式输出文案
   * @returns QueryTextStreamResponse
   */
  async queryTextStream(textId: string): Promise<QueryTextStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryTextStreamWithOptions(textId, headers, runtime);
  }

  /**
   * 保存实时数字人项目
   * 
   * @param request - SaveAvatarProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveAvatarProjectResponse
   */
  async saveAvatarProjectWithOptions(request: SaveAvatarProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<SaveAvatarProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      body["agentId"] = request.agentId;
    }

    if (!$dara.isNull(request.bitRate)) {
      body["bitRate"] = request.bitRate;
    }

    if (!$dara.isNull(request.frameRate)) {
      body["frameRate"] = request.frameRate;
    }

    if (!$dara.isNull(request.frames)) {
      body["frames"] = request.frames;
    }

    if (!$dara.isNull(request.operateType)) {
      body["operateType"] = request.operateType;
    }

    if (!$dara.isNull(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectName)) {
      body["projectName"] = request.projectName;
    }

    if (!$dara.isNull(request.resSpecType)) {
      body["resSpecType"] = request.resSpecType;
    }

    if (!$dara.isNull(request.resolution)) {
      body["resolution"] = request.resolution;
    }

    if (!$dara.isNull(request.scaleType)) {
      body["scaleType"] = request.scaleType;
    }

    if (!$dara.isNull(request.synchronizedDisplay)) {
      body["synchronizedDisplay"] = request.synchronizedDisplay;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveAvatarProject",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/avatar/project/saveAvatarProject`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SaveAvatarProjectResponse>(await this.callApi(params, req, runtime), new SaveAvatarProjectResponse({}));
    } else {
      return $dara.cast<SaveAvatarProjectResponse>(await this.execute(params, req, runtime), new SaveAvatarProjectResponse({}));
    }

  }

  /**
   * 保存实时数字人项目
   * 
   * @param request - SaveAvatarProjectRequest
   * @returns SaveAvatarProjectResponse
   */
  async saveAvatarProject(request: SaveAvatarProjectRequest): Promise<SaveAvatarProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.saveAvatarProjectWithOptions(request, headers, runtime);
  }

  /**
   * 查询图片任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SelectImageTaskResponse
   */
  async selectImageTaskWithOptions(taskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<SelectImageTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "SelectImageTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/images/portrait/select/${$dara.URL.percentEncode(taskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SelectImageTaskResponse>(await this.callApi(params, req, runtime), new SelectImageTaskResponse({}));
    } else {
      return $dara.cast<SelectImageTaskResponse>(await this.execute(params, req, runtime), new SelectImageTaskResponse({}));
    }

  }

  /**
   * 查询图片任务
   * @returns SelectImageTaskResponse
   */
  async selectImageTask(taskId: string): Promise<SelectImageTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.selectImageTaskWithOptions(taskId, headers, runtime);
  }

  /**
   * 查询离线数字人剩余资源
   * 
   * @param request - SelectResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SelectResourceResponse
   */
  async selectResourceWithOptions(request: SelectResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<SelectResourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.idempotentId)) {
      query["idempotentId"] = request.idempotentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SelectResource",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/digitalHuman/project/commands/overview`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SelectResourceResponse>(await this.callApi(params, req, runtime), new SelectResourceResponse({}));
    } else {
      return $dara.cast<SelectResourceResponse>(await this.execute(params, req, runtime), new SelectResourceResponse({}));
    }

  }

  /**
   * 查询离线数字人剩余资源
   * 
   * @param request - SelectResourceRequest
   * @returns SelectResourceResponse
   */
  async selectResource(request: SelectResourceRequest): Promise<SelectResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.selectResourceWithOptions(request, headers, runtime);
  }

  /**
   * 发送sdk消息
   * 
   * @param request - SendSdkMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendSdkMessageResponse
   */
  async sendSdkMessageWithOptions(request: SendSdkMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<SendSdkMessageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.data)) {
      body["data"] = request.data;
    }

    if (!$dara.isNull(request.header)) {
      body["header"] = request.header;
    }

    if (!$dara.isNull(request.moduleName)) {
      body["moduleName"] = request.moduleName;
    }

    if (!$dara.isNull(request.operationName)) {
      body["operationName"] = request.operationName;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendSdkMessage",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/sdk/sendMessage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SendSdkMessageResponse>(await this.callApi(params, req, runtime), new SendSdkMessageResponse({}));
    } else {
      return $dara.cast<SendSdkMessageResponse>(await this.execute(params, req, runtime), new SendSdkMessageResponse({}));
    }

  }

  /**
   * 发送sdk消息
   * 
   * @param request - SendSdkMessageRequest
   * @returns SendSdkMessageResponse
   */
  async sendSdkMessage(request: SendSdkMessageRequest): Promise<SendSdkMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendSdkMessageWithOptions(request, headers, runtime);
  }

  /**
   * 发送文本消息
   * 
   * @param request - SendTextMsgRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendTextMsgResponse
   */
  async sendTextMsgWithOptions(request: SendTextMsgRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<SendTextMsgResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.text)) {
      body["text"] = request.text;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendTextMsg",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/avatar/project/sendTextMsg`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SendTextMsgResponse>(await this.callApi(params, req, runtime), new SendTextMsgResponse({}));
    } else {
      return $dara.cast<SendTextMsgResponse>(await this.execute(params, req, runtime), new SendTextMsgResponse({}));
    }

  }

  /**
   * 发送文本消息
   * 
   * @param request - SendTextMsgRequest
   * @returns SendTextMsgResponse
   */
  async sendTextMsg(request: SendTextMsgRequest): Promise<SendTextMsgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendTextMsgWithOptions(request, headers, runtime);
  }

  /**
   * 启动会话
   * 
   * @param request - StartAvatarSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartAvatarSessionResponse
   */
  async startAvatarSessionWithOptions(request: StartAvatarSessionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StartAvatarSessionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channelToken)) {
      body["channelToken"] = request.channelToken;
    }

    if (!$dara.isNull(request.customPushUrl)) {
      body["customPushUrl"] = request.customPushUrl;
    }

    if (!$dara.isNull(request.customUserId)) {
      body["customUserId"] = request.customUserId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartAvatarSession",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/avatar/project/startAvatarSession`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartAvatarSessionResponse>(await this.callApi(params, req, runtime), new StartAvatarSessionResponse({}));
    } else {
      return $dara.cast<StartAvatarSessionResponse>(await this.execute(params, req, runtime), new StartAvatarSessionResponse({}));
    }

  }

  /**
   * 启动会话
   * 
   * @param request - StartAvatarSessionRequest
   * @returns StartAvatarSessionResponse
   */
  async startAvatarSession(request: StartAvatarSessionRequest): Promise<StartAvatarSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startAvatarSessionWithOptions(request, headers, runtime);
  }

  /**
   * 停止会话
   * 
   * @param request - StopAvatarSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopAvatarSessionResponse
   */
  async stopAvatarSessionWithOptions(request: StopAvatarSessionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StopAvatarSessionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopAvatarSession",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/avatar/project/stopAvatarSession`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopAvatarSessionResponse>(await this.callApi(params, req, runtime), new StopAvatarSessionResponse({}));
    } else {
      return $dara.cast<StopAvatarSessionResponse>(await this.execute(params, req, runtime), new StopAvatarSessionResponse({}));
    }

  }

  /**
   * 停止会话
   * 
   * @param request - StopAvatarSessionRequest
   * @returns StopAvatarSessionResponse
   */
  async stopAvatarSession(request: StopAvatarSessionRequest): Promise<StopAvatarSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopAvatarSessionWithOptions(request, headers, runtime);
  }

  /**
   * 视频合成任务停止
   * 
   * @param request - StopProjectTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopProjectTaskResponse
   */
  async stopProjectTaskWithOptions(request: StopProjectTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StopProjectTaskResponse> {
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
      action: "StopProjectTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/digitalHuman/project/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopProjectTaskResponse>(await this.callApi(params, req, runtime), new StopProjectTaskResponse({}));
    } else {
      return $dara.cast<StopProjectTaskResponse>(await this.execute(params, req, runtime), new StopProjectTaskResponse({}));
    }

  }

  /**
   * 视频合成任务停止
   * 
   * @param request - StopProjectTaskRequest
   * @returns StopProjectTaskResponse
   */
  async stopProjectTask(request: StopProjectTaskRequest): Promise<StopProjectTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopProjectTaskWithOptions(request, headers, runtime);
  }

  /**
   * 提交离线数字人合成任务
   * 
   * @param request - SubmitProjectTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitProjectTaskResponse
   */
  async submitProjectTaskWithOptions(request: SubmitProjectTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<SubmitProjectTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.frames)) {
      body["frames"] = request.frames;
    }

    if (!$dara.isNull(request.scaleType)) {
      body["scaleType"] = request.scaleType;
    }

    if (!$dara.isNull(request.subtitleTag)) {
      body["subtitleTag"] = request.subtitleTag;
    }

    if (!$dara.isNull(request.transparentBackground)) {
      body["transparentBackground"] = request.transparentBackground;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitProjectTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/digitalHuman/project/submitProjectTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SubmitProjectTaskResponse>(await this.callApi(params, req, runtime), new SubmitProjectTaskResponse({}));
    } else {
      return $dara.cast<SubmitProjectTaskResponse>(await this.execute(params, req, runtime), new SubmitProjectTaskResponse({}));
    }

  }

  /**
   * 提交离线数字人合成任务
   * 
   * @param request - SubmitProjectTaskRequest
   * @returns SubmitProjectTaskResponse
   */
  async submitProjectTask(request: SubmitProjectTaskRequest): Promise<SubmitProjectTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitProjectTaskWithOptions(request, headers, runtime);
  }

  /**
   * 人像风格变化
   * 
   * @param request - TransferPortraitStyleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferPortraitStyleResponse
   */
  async transferPortraitStyleWithOptions(request: TransferPortraitStyleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<TransferPortraitStyleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.height)) {
      body["height"] = request.height;
    }

    if (!$dara.isNull(request.imageUrl)) {
      body["imageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.numbers)) {
      body["numbers"] = request.numbers;
    }

    if (!$dara.isNull(request.redrawAmplitude)) {
      body["redrawAmplitude"] = request.redrawAmplitude;
    }

    if (!$dara.isNull(request.style)) {
      body["style"] = request.style;
    }

    if (!$dara.isNull(request.width)) {
      body["width"] = request.width;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransferPortraitStyle",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/images/portrait/transferPortraitStyle`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<TransferPortraitStyleResponse>(await this.callApi(params, req, runtime), new TransferPortraitStyleResponse({}));
    } else {
      return $dara.cast<TransferPortraitStyleResponse>(await this.execute(params, req, runtime), new TransferPortraitStyleResponse({}));
    }

  }

  /**
   * 人像风格变化
   * 
   * @param request - TransferPortraitStyleRequest
   * @returns TransferPortraitStyleResponse
   */
  async transferPortraitStyle(request: TransferPortraitStyleRequest): Promise<TransferPortraitStyleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.transferPortraitStyleWithOptions(request, headers, runtime);
  }

}
