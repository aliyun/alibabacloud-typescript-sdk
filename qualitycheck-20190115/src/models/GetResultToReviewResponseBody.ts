// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResultToReviewResponseBodyDataDialoguesDialogue extends $dara.Model {
  /**
   * @example
   * 72000
   */
  begin?: number;
  /**
   * @example
   * 2019-10-01 11:12:01
   */
  beginTime?: string;
  beginTimeMs?: number;
  /**
   * @example
   * 7
   */
  emotionValue?: number;
  /**
   * @example
   * 80000
   */
  end?: number;
  /**
   * @example
   * 00:08
   */
  hourMinSec?: string;
  identity?: string;
  role?: string;
  /**
   * @example
   * 1
   */
  silenceDuration?: number;
  /**
   * @example
   * 200
   */
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      beginTime: 'BeginTime',
      beginTimeMs: 'BeginTimeMs',
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
      beginTimeMs: 'number',
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataDialogues extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.dialogue)) {
      $dara.Model.validateArray(this.dialogue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoComplainHistoriesComplainHistories extends $dara.Model {
  comments?: string;
  /**
   * @example
   * 2020-10-16T11:13Z
   */
  operationTime?: string;
  /**
   * @example
   * 5
   */
  operationType?: number;
  /**
   * @example
   * 123456
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoComplainHistories extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.complainHistories)) {
      $dara.Model.validateArray(this.complainHistories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoCid extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.cid)) {
      $dara.Model.validateArray(this.cid);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWordsKeyWord extends $dara.Model {
  /**
   * @example
   * 2000
   */
  cid?: string;
  /**
   * @example
   * xxx
   */
  customizeCode?: string;
  /**
   * @example
   * 1
   */
  from?: number;
  isMatch?: boolean;
  /**
   * @example
   * 2
   */
  pid?: number;
  /**
   * @example
   * 6fa76916-3ce6-45d8-ac64-01b7f31c7295
   */
  tid?: string;
  /**
   * @example
   * 3
   */
  to?: number;
  val?: string;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      customizeCode: 'CustomizeCode',
      from: 'From',
      isMatch: 'IsMatch',
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
      isMatch: 'boolean',
      pid: 'number',
      tid: 'string',
      to: 'number',
      val: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWords extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.keyWord)) {
      $dara.Model.validateArray(this.keyWord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoPhrase extends $dara.Model {
  /**
   * @example
   * 72000
   */
  begin?: number;
  /**
   * @example
   * 7
   */
  emotionValue?: number;
  /**
   * @example
   * 80000
   */
  end?: number;
  identity?: string;
  /**
   * @example
   * 3
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfo extends $dara.Model {
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

  validate() {
    if(this.cid && typeof (this.cid as any).validate === 'function') {
      (this.cid as any).validate();
    }
    if(this.keyWords && typeof (this.keyWords as any).validate === 'function') {
      (this.keyWords as any).validate();
    }
    if(this.phrase && typeof (this.phrase as any).validate === 'function') {
      (this.phrase as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoList extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.conditionHitInfo)) {
      $dara.Model.validateArray(this.conditionHitInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfoSentenceReviewResultsSentenceReviewResults extends $dara.Model {
  changed?: boolean;
  /**
   * @example
   * 1
   */
  cid?: number;
  /**
   * @example
   * 无意见
   */
  comment?: string;
  /**
   * @example
   * 1
   */
  hitStatus?: number;
  /**
   * @example
   * 122-122-22-333
   */
  originTaskId?: string;
  /**
   * @example
   * 1001
   */
  originVid?: string;
  /**
   * @example
   * 1
   */
  pid?: string;
  /**
   * @example
   * 2
   */
  reviewDimensionType?: string;
  /**
   * @example
   * 1
   */
  rid?: number;
  /**
   * @example
   * 1
   */
  sid?: number;
  static names(): { [key: string]: string } {
    return {
      changed: 'Changed',
      cid: 'Cid',
      comment: 'Comment',
      hitStatus: 'HitStatus',
      originTaskId: 'OriginTaskId',
      originVid: 'OriginVid',
      pid: 'Pid',
      reviewDimensionType: 'ReviewDimensionType',
      rid: 'Rid',
      sid: 'Sid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changed: 'boolean',
      cid: 'number',
      comment: 'string',
      hitStatus: 'number',
      originTaskId: 'string',
      originVid: 'string',
      pid: 'string',
      reviewDimensionType: 'string',
      rid: 'number',
      sid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfoSentenceReviewResults extends $dara.Model {
  sentenceReviewResults?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfoSentenceReviewResultsSentenceReviewResults[];
  static names(): { [key: string]: string } {
    return {
      sentenceReviewResults: 'SentenceReviewResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sentenceReviewResults: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfoSentenceReviewResultsSentenceReviewResults },
    };
  }

  validate() {
    if(Array.isArray(this.sentenceReviewResults)) {
      $dara.Model.validateArray(this.sentenceReviewResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfo extends $dara.Model {
  /**
   * @example
   * 013c68142fec4f0899fa6ee0exxx
   */
  hitId?: string;
  /**
   * @example
   * 1
   */
  reviewResult?: number;
  /**
   * @example
   * 2019-10-12 17:06:00
   */
  reviewTime?: string;
  /**
   * @example
   * 123
   */
  reviewer?: string;
  /**
   * @example
   * 451
   */
  rid?: number;
  sentenceReviewResults?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfoSentenceReviewResults;
  static names(): { [key: string]: string } {
    return {
      hitId: 'HitId',
      reviewResult: 'ReviewResult',
      reviewTime: 'ReviewTime',
      reviewer: 'Reviewer',
      rid: 'Rid',
      sentenceReviewResults: 'SentenceReviewResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitId: 'string',
      reviewResult: 'number',
      reviewTime: 'string',
      reviewer: 'string',
      rid: 'number',
      sentenceReviewResults: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfoSentenceReviewResults,
    };
  }

  validate() {
    if(this.sentenceReviewResults && typeof (this.sentenceReviewResults as any).validate === 'function') {
      (this.sentenceReviewResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfo extends $dara.Model {
  /**
   * @example
   * 1
   */
  autoReview?: number;
  complainHistories?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoComplainHistories;
  /**
   * @example
   * true
   */
  complainable?: boolean;
  conditionHitInfoList?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoList;
  machineHitResult?: number;
  reviewHitResult?: number;
  reviewInfo?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfo;
  /**
   * @example
   * 451
   */
  rid?: number;
  ruleName?: string;
  /**
   * @example
   * xxx
   */
  scoreId?: number;
  /**
   * @example
   * -10
   */
  scoreNum?: number;
  /**
   * @example
   * xxx
   */
  scoreSubId?: number;
  /**
   * @example
   * xxx
   */
  scoreSubName?: string;
  static names(): { [key: string]: string } {
    return {
      autoReview: 'AutoReview',
      complainHistories: 'ComplainHistories',
      complainable: 'Complainable',
      conditionHitInfoList: 'ConditionHitInfoList',
      machineHitResult: 'MachineHitResult',
      reviewHitResult: 'ReviewHitResult',
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
      machineHitResult: 'number',
      reviewHitResult: 'number',
      reviewInfo: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfo,
      rid: 'number',
      ruleName: 'string',
      scoreId: 'number',
      scoreNum: 'number',
      scoreSubId: 'number',
      scoreSubName: 'string',
    };
  }

  validate() {
    if(this.complainHistories && typeof (this.complainHistories as any).validate === 'function') {
      (this.complainHistories as any).validate();
    }
    if(this.conditionHitInfoList && typeof (this.conditionHitInfoList as any).validate === 'function') {
      (this.conditionHitInfoList as any).validate();
    }
    if(this.reviewInfo && typeof (this.reviewInfo as any).validate === 'function') {
      (this.reviewInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoList extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.hitRuleReviewInfo)) {
      $dara.Model.validateArray(this.hitRuleReviewInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfoComplainHistoriesComplainHistories extends $dara.Model {
  comments?: string;
  /**
   * @example
   * 2020-10-16T11:13Z
   */
  operationTime?: string;
  /**
   * @example
   * 5
   */
  operationType?: number;
  /**
   * @example
   * 123456
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfoComplainHistories extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.complainHistories)) {
      $dara.Model.validateArray(this.complainHistories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfo extends $dara.Model {
  complainHistories?: GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfoComplainHistories;
  /**
   * @example
   * true
   */
  complainable?: boolean;
  /**
   * @example
   * xxx
   */
  scoreId?: number;
  /**
   * @example
   * -10
   */
  scoreNum?: number;
  /**
   * @example
   * xxx
   */
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

  validate() {
    if(this.complainHistories && typeof (this.complainHistories as any).validate === 'function') {
      (this.complainHistories as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataManualScoreInfoList extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.manualScoreInfo)) {
      $dara.Model.validateArray(this.manualScoreInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataReviewHistoryListReviewHistoryReviewRightRuleReviewRightRule extends $dara.Model {
  rid?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      rid: 'rid',
      ruleName: 'ruleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rid: 'number',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataReviewHistoryListReviewHistoryReviewRightRule extends $dara.Model {
  reviewRightRule?: GetResultToReviewResponseBodyDataReviewHistoryListReviewHistoryReviewRightRuleReviewRightRule[];
  static names(): { [key: string]: string } {
    return {
      reviewRightRule: 'ReviewRightRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewRightRule: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataReviewHistoryListReviewHistoryReviewRightRuleReviewRightRule },
    };
  }

  validate() {
    if(Array.isArray(this.reviewRightRule)) {
      $dara.Model.validateArray(this.reviewRightRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataReviewHistoryListReviewHistory extends $dara.Model {
  comments?: string;
  /**
   * @example
   * 1
   */
  complainResult?: number;
  /**
   * @example
   * 90
   */
  oldScore?: number;
  operator?: number;
  operatorName?: string;
  reviewManagerType?: string;
  /**
   * @example
   * 1
   */
  reviewResult?: number;
  reviewRightRule?: GetResultToReviewResponseBodyDataReviewHistoryListReviewHistoryReviewRightRule;
  /**
   * @example
   * 95
   */
  score?: number;
  time?: number;
  /**
   * @example
   * 2019-10-28 15:21:00
   */
  timeStr?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      complainResult: 'ComplainResult',
      oldScore: 'OldScore',
      operator: 'Operator',
      operatorName: 'OperatorName',
      reviewManagerType: 'ReviewManagerType',
      reviewResult: 'ReviewResult',
      reviewRightRule: 'ReviewRightRule',
      score: 'Score',
      time: 'Time',
      timeStr: 'TimeStr',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      complainResult: 'number',
      oldScore: 'number',
      operator: 'number',
      operatorName: 'string',
      reviewManagerType: 'string',
      reviewResult: 'number',
      reviewRightRule: GetResultToReviewResponseBodyDataReviewHistoryListReviewHistoryReviewRightRule,
      score: 'number',
      time: 'number',
      timeStr: 'string',
      type: 'number',
    };
  }

  validate() {
    if(this.reviewRightRule && typeof (this.reviewRightRule as any).validate === 'function') {
      (this.reviewRightRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataReviewHistoryList extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.reviewHistory)) {
      $dara.Model.validateArray(this.reviewHistory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataReviewTypeIdListReviewTypeIdListReviewKeyIdList extends $dara.Model {
  reviewKeyIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      reviewKeyIdList: 'ReviewKeyIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewKeyIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.reviewKeyIdList)) {
      $dara.Model.validateArray(this.reviewKeyIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataReviewTypeIdListReviewTypeIdList extends $dara.Model {
  reviewKeyIdList?: GetResultToReviewResponseBodyDataReviewTypeIdListReviewTypeIdListReviewKeyIdList;
  reviewTypeId?: number;
  static names(): { [key: string]: string } {
    return {
      reviewKeyIdList: 'ReviewKeyIdList',
      reviewTypeId: 'ReviewTypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewKeyIdList: GetResultToReviewResponseBodyDataReviewTypeIdListReviewTypeIdListReviewKeyIdList,
      reviewTypeId: 'number',
    };
  }

  validate() {
    if(this.reviewKeyIdList && typeof (this.reviewKeyIdList as any).validate === 'function') {
      (this.reviewKeyIdList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataReviewTypeIdList extends $dara.Model {
  reviewTypeIdList?: GetResultToReviewResponseBodyDataReviewTypeIdListReviewTypeIdList[];
  static names(): { [key: string]: string } {
    return {
      reviewTypeIdList: 'ReviewTypeIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewTypeIdList: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataReviewTypeIdListReviewTypeIdList },
    };
  }

  validate() {
    if(Array.isArray(this.reviewTypeIdList)) {
      $dara.Model.validateArray(this.reviewTypeIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyData extends $dara.Model {
  /**
   * @example
   * https
   */
  audioScheme?: string;
  /**
   * @example
   * sca-ccc-test.oss-cn-beijing.aliyuncs.com/xxxxx
   */
  audioURL?: string;
  /**
   * @example
   * xxx
   */
  comments?: string;
  dialogues?: GetResultToReviewResponseBodyDataDialogues;
  /**
   * @example
   * e790e6c919d84b82b64ee*****
   */
  fileId?: string;
  /**
   * @example
   * xxx.wav
   */
  fileMergeName?: string;
  hitRuleReviewInfoList?: GetResultToReviewResponseBodyDataHitRuleReviewInfoList;
  manualScoreInfoList?: GetResultToReviewResponseBodyDataManualScoreInfoList;
  reviewHistoryList?: GetResultToReviewResponseBodyDataReviewHistoryList;
  reviewTypeIdList?: GetResultToReviewResponseBodyDataReviewTypeIdList;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 99
   */
  totalScore?: number;
  /**
   * @example
   * 6fa76916-3ce6-45d8-ac64-01b7f31***
   */
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
      reviewTypeIdList: 'ReviewTypeIdList',
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
      reviewTypeIdList: GetResultToReviewResponseBodyDataReviewTypeIdList,
      status: 'number',
      totalScore: 'number',
      vid: 'string',
    };
  }

  validate() {
    if(this.dialogues && typeof (this.dialogues as any).validate === 'function') {
      (this.dialogues as any).validate();
    }
    if(this.hitRuleReviewInfoList && typeof (this.hitRuleReviewInfoList as any).validate === 'function') {
      (this.hitRuleReviewInfoList as any).validate();
    }
    if(this.manualScoreInfoList && typeof (this.manualScoreInfoList as any).validate === 'function') {
      (this.manualScoreInfoList as any).validate();
    }
    if(this.reviewHistoryList && typeof (this.reviewHistoryList as any).validate === 'function') {
      (this.reviewHistoryList as any).validate();
    }
    if(this.reviewTypeIdList && typeof (this.reviewTypeIdList as any).validate === 'function') {
      (this.reviewTypeIdList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetResultToReviewResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 82C91484-B2D5-4D2A-A21F-A6D73F4***
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

