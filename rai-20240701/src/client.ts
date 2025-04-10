// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class BatchContentAsyncDetectRequestServiceParameterList extends $dara.Model {
  /**
   * @example
   * "XXXXXXXX"
   */
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchContentAsyncDetectResponseBodyData extends $dara.Model {
  /**
   * @example
   * 19657954336
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
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

export class BatchContentSyncDetectRequestServiceParameterList extends $dara.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchContentSyncDetectResponseBodyDataDetectResultList extends $dara.Model {
  riskInfo?: string;
  /**
   * @example
   * 1
   */
  riskResult?: number;
  static names(): { [key: string]: string } {
    return {
      riskInfo: 'RiskInfo',
      riskResult: 'RiskResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskInfo: 'string',
      riskResult: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchContentSyncDetectResponseBodyData extends $dara.Model {
  detectResultList?: BatchContentSyncDetectResponseBodyDataDetectResultList[];
  static names(): { [key: string]: string } {
    return {
      detectResultList: 'DetectResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectResultList: { 'type': 'array', 'itemType': BatchContentSyncDetectResponseBodyDataDetectResultList },
    };
  }

  validate() {
    if(Array.isArray(this.detectResultList)) {
      $dara.Model.validateArray(this.detectResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAccountResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  checkResult?: number;
  static names(): { [key: string]: string } {
    return {
      checkResult: 'CheckResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResult: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContentAsyncDetectRequestServiceParameter extends $dara.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContentAsyncDetectResponseBodyData extends $dara.Model {
  /**
   * @example
   * 5d85cd38-03b2-49fd-86b2-be85c4b13215
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
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

export class ContentSyncDetectRequestServiceParameter extends $dara.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContentSyncDetectResponseBodyData extends $dara.Model {
  riskInfo?: string;
  /**
   * @example
   * 1
   */
  riskResult?: number;
  static names(): { [key: string]: string } {
    return {
      riskInfo: 'RiskInfo',
      riskResult: 'RiskResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskInfo: 'string',
      riskResult: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContentDetectResultResponseBodyDataDetectResultList extends $dara.Model {
  riskInfo?: string;
  /**
   * @example
   * 1
   */
  riskResult?: number;
  /**
   * @example
   * 2
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      riskInfo: 'RiskInfo',
      riskResult: 'RiskResult',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskInfo: 'string',
      riskResult: 'number',
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

export class GetContentDetectResultResponseBodyData extends $dara.Model {
  detectResultList?: GetContentDetectResultResponseBodyDataDetectResultList[];
  /**
   * @example
   * 10
   */
  processedCount?: number;
  taskId?: string;
  /**
   * @example
   * 2
   */
  taskStatus?: number;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      detectResultList: 'DetectResultList',
      processedCount: 'ProcessedCount',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectResultList: { 'type': 'array', 'itemType': GetContentDetectResultResponseBodyDataDetectResultList },
      processedCount: 'number',
      taskId: 'string',
      taskStatus: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.detectResultList)) {
      $dara.Model.validateArray(this.detectResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoBlockWordBlockWordGroupInfoListBlockWordList extends $dara.Model {
  word?: string;
  wordLabel?: string;
  static names(): { [key: string]: string } {
    return {
      word: 'Word',
      wordLabel: 'WordLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      word: 'string',
      wordLabel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoBlockWordBlockWordGroupInfoList extends $dara.Model {
  blockWordList?: GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoBlockWordBlockWordGroupInfoListBlockWordList[];
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      blockWordList: 'BlockWordList',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockWordList: { 'type': 'array', 'itemType': GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoBlockWordBlockWordGroupInfoListBlockWordList },
      groupName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.blockWordList)) {
      $dara.Model.validateArray(this.blockWordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoBlockWord extends $dara.Model {
  blockWordGroupInfoList?: GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoBlockWordBlockWordGroupInfoList[];
  /**
   * @example
   * 0
   */
  riskResult?: number;
  static names(): { [key: string]: string } {
    return {
      blockWordGroupInfoList: 'BlockWordGroupInfoList',
      riskResult: 'RiskResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockWordGroupInfoList: { 'type': 'array', 'itemType': GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoBlockWordBlockWordGroupInfoList },
      riskResult: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.blockWordGroupInfoList)) {
      $dara.Model.validateArray(this.blockWordGroupInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoHarmfulCategoriesHarmfulCategoryInfoList extends $dara.Model {
  categoryLabel?: string;
  /**
   * @example
   * 0
   */
  categoryType?: number;
  /**
   * @example
   * 0
   */
  riskResult?: number;
  /**
   * @example
   * 0
   */
  securityLevel?: number;
  static names(): { [key: string]: string } {
    return {
      categoryLabel: 'CategoryLabel',
      categoryType: 'CategoryType',
      riskResult: 'RiskResult',
      securityLevel: 'SecurityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryLabel: 'string',
      categoryType: 'number',
      riskResult: 'number',
      securityLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoHarmfulCategories extends $dara.Model {
  /**
   * @example
   * 0.85
   */
  confidenceScore?: number;
  harmfulCategoryInfoList?: GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoHarmfulCategoriesHarmfulCategoryInfoList[];
  /**
   * @example
   * 0
   */
  riskResult?: number;
  static names(): { [key: string]: string } {
    return {
      confidenceScore: 'ConfidenceScore',
      harmfulCategoryInfoList: 'HarmfulCategoryInfoList',
      riskResult: 'RiskResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidenceScore: 'number',
      harmfulCategoryInfoList: { 'type': 'array', 'itemType': GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoHarmfulCategoriesHarmfulCategoryInfoList },
      riskResult: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.harmfulCategoryInfoList)) {
      $dara.Model.validateArray(this.harmfulCategoryInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoPromptAttack extends $dara.Model {
  promptAttackInfo?: string;
  /**
   * @example
   * 0
   */
  riskResult?: number;
  /**
   * @example
   * 0
   */
  securityLevel?: number;
  static names(): { [key: string]: string } {
    return {
      promptAttackInfo: 'PromptAttackInfo',
      riskResult: 'RiskResult',
      securityLevel: 'SecurityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promptAttackInfo: 'string',
      riskResult: 'number',
      securityLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfo extends $dara.Model {
  blockWord?: GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoBlockWord;
  harmfulCategories?: GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoHarmfulCategories;
  promptAttack?: GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoPromptAttack;
  static names(): { [key: string]: string } {
    return {
      blockWord: 'BlockWord',
      harmfulCategories: 'HarmfulCategories',
      promptAttack: 'PromptAttack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockWord: GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoBlockWord,
      harmfulCategories: GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoHarmfulCategories,
      promptAttack: GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoPromptAttack,
    };
  }

  validate() {
    if(this.blockWord && typeof (this.blockWord as any).validate === 'function') {
      (this.blockWord as any).validate();
    }
    if(this.harmfulCategories && typeof (this.harmfulCategories as any).validate === 'function') {
      (this.harmfulCategories as any).validate();
    }
    if(this.promptAttack && typeof (this.promptAttack as any).validate === 'function') {
      (this.promptAttack as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelInputContentDetectResultResponseBodyDetectResultList extends $dara.Model {
  /**
   * @example
   * 0
   */
  riskResult?: number;
  /**
   * @example
   * 2
   */
  status?: number;
  traceInfo?: GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfo;
  static names(): { [key: string]: string } {
    return {
      riskResult: 'RiskResult',
      status: 'Status',
      traceInfo: 'TraceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskResult: 'number',
      status: 'number',
      traceInfo: GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfo,
    };
  }

  validate() {
    if(this.traceInfo && typeof (this.traceInfo as any).validate === 'function') {
      (this.traceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelOutputContentDetectResultResponseBodyDetectResultListTraceInfoBlockWordBlockWordGroupInfoListBlockWordList extends $dara.Model {
  word?: string;
  wordLabel?: string;
  static names(): { [key: string]: string } {
    return {
      word: 'Word',
      wordLabel: 'WordLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      word: 'string',
      wordLabel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelOutputContentDetectResultResponseBodyDetectResultListTraceInfoBlockWordBlockWordGroupInfoList extends $dara.Model {
  blockWordList?: GetModelOutputContentDetectResultResponseBodyDetectResultListTraceInfoBlockWordBlockWordGroupInfoListBlockWordList[];
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      blockWordList: 'BlockWordList',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockWordList: { 'type': 'array', 'itemType': GetModelOutputContentDetectResultResponseBodyDetectResultListTraceInfoBlockWordBlockWordGroupInfoListBlockWordList },
      groupName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.blockWordList)) {
      $dara.Model.validateArray(this.blockWordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelOutputContentDetectResultResponseBodyDetectResultListTraceInfoBlockWord extends $dara.Model {
  blockWordGroupInfoList?: GetModelOutputContentDetectResultResponseBodyDetectResultListTraceInfoBlockWordBlockWordGroupInfoList[];
  /**
   * @example
   * 0
   */
  riskResult?: number;
  static names(): { [key: string]: string } {
    return {
      blockWordGroupInfoList: 'BlockWordGroupInfoList',
      riskResult: 'RiskResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockWordGroupInfoList: { 'type': 'array', 'itemType': GetModelOutputContentDetectResultResponseBodyDetectResultListTraceInfoBlockWordBlockWordGroupInfoList },
      riskResult: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.blockWordGroupInfoList)) {
      $dara.Model.validateArray(this.blockWordGroupInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelOutputContentDetectResultResponseBodyDetectResultListTraceInfoHarmfulCategoriesHarmfulCategoryInfoList extends $dara.Model {
  categoryLabel?: string;
  /**
   * @example
   * 0
   */
  categoryType?: number;
  /**
   * @example
   * 0
   */
  riskResult?: number;
  /**
   * @example
   * 1
   */
  securityLevel?: number;
  static names(): { [key: string]: string } {
    return {
      categoryLabel: 'CategoryLabel',
      categoryType: 'CategoryType',
      riskResult: 'RiskResult',
      securityLevel: 'SecurityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryLabel: 'string',
      categoryType: 'number',
      riskResult: 'number',
      securityLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelOutputContentDetectResultResponseBodyDetectResultListTraceInfoHarmfulCategories extends $dara.Model {
  /**
   * @example
   * 0.85
   */
  confidenceScore?: number;
  harmfulCategoryInfoList?: GetModelOutputContentDetectResultResponseBodyDetectResultListTraceInfoHarmfulCategoriesHarmfulCategoryInfoList[];
  /**
   * @example
   * 0
   */
  riskResult?: number;
  static names(): { [key: string]: string } {
    return {
      confidenceScore: 'ConfidenceScore',
      harmfulCategoryInfoList: 'HarmfulCategoryInfoList',
      riskResult: 'RiskResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidenceScore: 'number',
      harmfulCategoryInfoList: { 'type': 'array', 'itemType': GetModelOutputContentDetectResultResponseBodyDetectResultListTraceInfoHarmfulCategoriesHarmfulCategoryInfoList },
      riskResult: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.harmfulCategoryInfoList)) {
      $dara.Model.validateArray(this.harmfulCategoryInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelOutputContentDetectResultResponseBodyDetectResultListTraceInfoPromptAttack extends $dara.Model {
  promptAttackInfo?: string;
  /**
   * @example
   * 0
   */
  riskResult?: number;
  /**
   * @example
   * 1
   */
  securityLevel?: number;
  static names(): { [key: string]: string } {
    return {
      promptAttackInfo: 'PromptAttackInfo',
      riskResult: 'RiskResult',
      securityLevel: 'SecurityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promptAttackInfo: 'string',
      riskResult: 'number',
      securityLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelOutputContentDetectResultResponseBodyDetectResultListTraceInfo extends $dara.Model {
  blockWord?: GetModelOutputContentDetectResultResponseBodyDetectResultListTraceInfoBlockWord;
  harmfulCategories?: GetModelOutputContentDetectResultResponseBodyDetectResultListTraceInfoHarmfulCategories;
  promptAttack?: GetModelOutputContentDetectResultResponseBodyDetectResultListTraceInfoPromptAttack;
  static names(): { [key: string]: string } {
    return {
      blockWord: 'BlockWord',
      harmfulCategories: 'HarmfulCategories',
      promptAttack: 'PromptAttack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockWord: GetModelOutputContentDetectResultResponseBodyDetectResultListTraceInfoBlockWord,
      harmfulCategories: GetModelOutputContentDetectResultResponseBodyDetectResultListTraceInfoHarmfulCategories,
      promptAttack: GetModelOutputContentDetectResultResponseBodyDetectResultListTraceInfoPromptAttack,
    };
  }

  validate() {
    if(this.blockWord && typeof (this.blockWord as any).validate === 'function') {
      (this.blockWord as any).validate();
    }
    if(this.harmfulCategories && typeof (this.harmfulCategories as any).validate === 'function') {
      (this.harmfulCategories as any).validate();
    }
    if(this.promptAttack && typeof (this.promptAttack as any).validate === 'function') {
      (this.promptAttack as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelOutputContentDetectResultResponseBodyDetectResultList extends $dara.Model {
  /**
   * @example
   * 0
   */
  riskResult?: number;
  /**
   * @example
   * 2
   */
  status?: number;
  traceInfo?: GetModelOutputContentDetectResultResponseBodyDetectResultListTraceInfo;
  static names(): { [key: string]: string } {
    return {
      riskResult: 'RiskResult',
      status: 'Status',
      traceInfo: 'TraceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskResult: 'number',
      status: 'number',
      traceInfo: GetModelOutputContentDetectResultResponseBodyDetectResultListTraceInfo,
    };
  }

  validate() {
    if(this.traceInfo && typeof (this.traceInfo as any).validate === 'function') {
      (this.traceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveWordResponseBodyDataSensitiveWordList extends $dara.Model {
  /**
   * @example
   * 387907
   */
  id?: number;
  label?: string;
  word?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      label: 'Label',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      label: 'string',
      word: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveWordResponseBodyData extends $dara.Model {
  /**
   * @example
   * 10000
   */
  maxCount?: number;
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
  sensitiveWordList?: ListSensitiveWordResponseBodyDataSensitiveWordList[];
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxCount: 'MaxCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sensitiveWordList: 'SensitiveWordList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      sensitiveWordList: { 'type': 'array', 'itemType': ListSensitiveWordResponseBodyDataSensitiveWordList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sensitiveWordList)) {
      $dara.Model.validateArray(this.sensitiveWordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelInputContentAsyncDetectRequestBodyData extends $dara.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelInputContentSyncDetectRequestBodyData extends $dara.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelInputContentSyncDetectResponseBodyTraceInfoBlockWordBlockWordGroupInfoListBlockWordList extends $dara.Model {
  word?: string;
  wordLabel?: string;
  static names(): { [key: string]: string } {
    return {
      word: 'Word',
      wordLabel: 'WordLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      word: 'string',
      wordLabel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelInputContentSyncDetectResponseBodyTraceInfoBlockWordBlockWordGroupInfoList extends $dara.Model {
  blockWordList?: ModelInputContentSyncDetectResponseBodyTraceInfoBlockWordBlockWordGroupInfoListBlockWordList[];
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      blockWordList: 'BlockWordList',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockWordList: { 'type': 'array', 'itemType': ModelInputContentSyncDetectResponseBodyTraceInfoBlockWordBlockWordGroupInfoListBlockWordList },
      groupName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.blockWordList)) {
      $dara.Model.validateArray(this.blockWordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelInputContentSyncDetectResponseBodyTraceInfoBlockWord extends $dara.Model {
  blockWordGroupInfoList?: ModelInputContentSyncDetectResponseBodyTraceInfoBlockWordBlockWordGroupInfoList[];
  riskResult?: number;
  static names(): { [key: string]: string } {
    return {
      blockWordGroupInfoList: 'BlockWordGroupInfoList',
      riskResult: 'RiskResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockWordGroupInfoList: { 'type': 'array', 'itemType': ModelInputContentSyncDetectResponseBodyTraceInfoBlockWordBlockWordGroupInfoList },
      riskResult: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.blockWordGroupInfoList)) {
      $dara.Model.validateArray(this.blockWordGroupInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelInputContentSyncDetectResponseBodyTraceInfoHarmfulCategoriesHarmfulCategoryInfoList extends $dara.Model {
  categoryLabel?: string;
  categoryType?: number;
  riskResult?: number;
  securityLevel?: number;
  static names(): { [key: string]: string } {
    return {
      categoryLabel: 'CategoryLabel',
      categoryType: 'CategoryType',
      riskResult: 'RiskResult',
      securityLevel: 'SecurityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryLabel: 'string',
      categoryType: 'number',
      riskResult: 'number',
      securityLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelInputContentSyncDetectResponseBodyTraceInfoHarmfulCategories extends $dara.Model {
  confidenceScore?: number;
  harmfulCategoryInfoList?: ModelInputContentSyncDetectResponseBodyTraceInfoHarmfulCategoriesHarmfulCategoryInfoList[];
  riskResult?: number;
  static names(): { [key: string]: string } {
    return {
      confidenceScore: 'ConfidenceScore',
      harmfulCategoryInfoList: 'HarmfulCategoryInfoList',
      riskResult: 'RiskResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidenceScore: 'number',
      harmfulCategoryInfoList: { 'type': 'array', 'itemType': ModelInputContentSyncDetectResponseBodyTraceInfoHarmfulCategoriesHarmfulCategoryInfoList },
      riskResult: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.harmfulCategoryInfoList)) {
      $dara.Model.validateArray(this.harmfulCategoryInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelInputContentSyncDetectResponseBodyTraceInfoPromptAttack extends $dara.Model {
  confidenceScore?: number;
  promptAttackInfo?: string;
  riskResult?: number;
  securityLevel?: number;
  static names(): { [key: string]: string } {
    return {
      confidenceScore: 'ConfidenceScore',
      promptAttackInfo: 'PromptAttackInfo',
      riskResult: 'RiskResult',
      securityLevel: 'SecurityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidenceScore: 'number',
      promptAttackInfo: 'string',
      riskResult: 'number',
      securityLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelInputContentSyncDetectResponseBodyTraceInfo extends $dara.Model {
  blockWord?: ModelInputContentSyncDetectResponseBodyTraceInfoBlockWord;
  harmfulCategories?: ModelInputContentSyncDetectResponseBodyTraceInfoHarmfulCategories;
  promptAttack?: ModelInputContentSyncDetectResponseBodyTraceInfoPromptAttack;
  static names(): { [key: string]: string } {
    return {
      blockWord: 'BlockWord',
      harmfulCategories: 'HarmfulCategories',
      promptAttack: 'PromptAttack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockWord: ModelInputContentSyncDetectResponseBodyTraceInfoBlockWord,
      harmfulCategories: ModelInputContentSyncDetectResponseBodyTraceInfoHarmfulCategories,
      promptAttack: ModelInputContentSyncDetectResponseBodyTraceInfoPromptAttack,
    };
  }

  validate() {
    if(this.blockWord && typeof (this.blockWord as any).validate === 'function') {
      (this.blockWord as any).validate();
    }
    if(this.harmfulCategories && typeof (this.harmfulCategories as any).validate === 'function') {
      (this.harmfulCategories as any).validate();
    }
    if(this.promptAttack && typeof (this.promptAttack as any).validate === 'function') {
      (this.promptAttack as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelOutputContentAsyncDetectRequestBodyData extends $dara.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelOutputContentSyncDetectRequestBodyData extends $dara.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelOutputContentSyncDetectResponseBodyTraceInfoBlockWordBlockWordGroupInfoListBlockWordList extends $dara.Model {
  word?: string;
  wordLabel?: string;
  static names(): { [key: string]: string } {
    return {
      word: 'Word',
      wordLabel: 'WordLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      word: 'string',
      wordLabel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelOutputContentSyncDetectResponseBodyTraceInfoBlockWordBlockWordGroupInfoList extends $dara.Model {
  blockWordList?: ModelOutputContentSyncDetectResponseBodyTraceInfoBlockWordBlockWordGroupInfoListBlockWordList[];
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      blockWordList: 'BlockWordList',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockWordList: { 'type': 'array', 'itemType': ModelOutputContentSyncDetectResponseBodyTraceInfoBlockWordBlockWordGroupInfoListBlockWordList },
      groupName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.blockWordList)) {
      $dara.Model.validateArray(this.blockWordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelOutputContentSyncDetectResponseBodyTraceInfoBlockWord extends $dara.Model {
  blockWordGroupInfoList?: ModelOutputContentSyncDetectResponseBodyTraceInfoBlockWordBlockWordGroupInfoList[];
  /**
   * @example
   * 0
   */
  riskResult?: number;
  static names(): { [key: string]: string } {
    return {
      blockWordGroupInfoList: 'BlockWordGroupInfoList',
      riskResult: 'RiskResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockWordGroupInfoList: { 'type': 'array', 'itemType': ModelOutputContentSyncDetectResponseBodyTraceInfoBlockWordBlockWordGroupInfoList },
      riskResult: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.blockWordGroupInfoList)) {
      $dara.Model.validateArray(this.blockWordGroupInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelOutputContentSyncDetectResponseBodyTraceInfoHarmfulCategoriesHarmfulCategoryInfoList extends $dara.Model {
  categoryLabel?: string;
  /**
   * @example
   * 0
   */
  categoryType?: number;
  /**
   * @example
   * 0
   */
  riskResult?: number;
  /**
   * @example
   * 1
   */
  securityLevel?: number;
  static names(): { [key: string]: string } {
    return {
      categoryLabel: 'CategoryLabel',
      categoryType: 'CategoryType',
      riskResult: 'RiskResult',
      securityLevel: 'SecurityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryLabel: 'string',
      categoryType: 'number',
      riskResult: 'number',
      securityLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelOutputContentSyncDetectResponseBodyTraceInfoHarmfulCategories extends $dara.Model {
  /**
   * @example
   * 0.85
   */
  confidenceScore?: number;
  harmfulCategoryInfoList?: ModelOutputContentSyncDetectResponseBodyTraceInfoHarmfulCategoriesHarmfulCategoryInfoList[];
  /**
   * @example
   * 0
   */
  riskResult?: number;
  static names(): { [key: string]: string } {
    return {
      confidenceScore: 'ConfidenceScore',
      harmfulCategoryInfoList: 'HarmfulCategoryInfoList',
      riskResult: 'RiskResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidenceScore: 'number',
      harmfulCategoryInfoList: { 'type': 'array', 'itemType': ModelOutputContentSyncDetectResponseBodyTraceInfoHarmfulCategoriesHarmfulCategoryInfoList },
      riskResult: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.harmfulCategoryInfoList)) {
      $dara.Model.validateArray(this.harmfulCategoryInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelOutputContentSyncDetectResponseBodyTraceInfoPromptAttack extends $dara.Model {
  promptAttackInfo?: string;
  /**
   * @example
   * 0
   */
  riskResult?: number;
  /**
   * @example
   * 0
   */
  securityLevel?: number;
  static names(): { [key: string]: string } {
    return {
      promptAttackInfo: 'PromptAttackInfo',
      riskResult: 'RiskResult',
      securityLevel: 'SecurityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promptAttackInfo: 'string',
      riskResult: 'number',
      securityLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelOutputContentSyncDetectResponseBodyTraceInfo extends $dara.Model {
  blockWord?: ModelOutputContentSyncDetectResponseBodyTraceInfoBlockWord;
  harmfulCategories?: ModelOutputContentSyncDetectResponseBodyTraceInfoHarmfulCategories;
  promptAttack?: ModelOutputContentSyncDetectResponseBodyTraceInfoPromptAttack;
  static names(): { [key: string]: string } {
    return {
      blockWord: 'BlockWord',
      harmfulCategories: 'HarmfulCategories',
      promptAttack: 'PromptAttack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockWord: ModelOutputContentSyncDetectResponseBodyTraceInfoBlockWord,
      harmfulCategories: ModelOutputContentSyncDetectResponseBodyTraceInfoHarmfulCategories,
      promptAttack: ModelOutputContentSyncDetectResponseBodyTraceInfoPromptAttack,
    };
  }

  validate() {
    if(this.blockWord && typeof (this.blockWord as any).validate === 'function') {
      (this.blockWord as any).validate();
    }
    if(this.harmfulCategories && typeof (this.harmfulCategories as any).validate === 'function') {
      (this.harmfulCategories as any).validate();
    }
    if(this.promptAttack && typeof (this.promptAttack as any).validate === 'function') {
      (this.promptAttack as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSensitiveWordRequestBodyDataSensitiveWordList extends $dara.Model {
  /**
   * @example
   * 341806
   */
  id?: number;
  label?: string;
  status?: number;
  word?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      label: 'Label',
      status: 'Status',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      label: 'string',
      status: 'number',
      word: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSensitiveWordRequestBodyData extends $dara.Model {
  sensitiveWordList?: SyncSensitiveWordRequestBodyDataSensitiveWordList[];
  static names(): { [key: string]: string } {
    return {
      sensitiveWordList: 'SensitiveWordList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sensitiveWordList: { 'type': 'array', 'itemType': SyncSensitiveWordRequestBodyDataSensitiveWordList },
    };
  }

  validate() {
    if(Array.isArray(this.sensitiveWordList)) {
      $dara.Model.validateArray(this.sensitiveWordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSensitiveWordResponseBodyDataSensitiveWordErrorList extends $dara.Model {
  /**
   * @example
   * ""
   */
  errMessage?: string;
  /**
   * @example
   * 1
   */
  errStatus?: number;
  /**
   * @example
   * 0
   */
  index?: number;
  /**
   * @example
   * contraband
   */
  label?: string;
  word?: string;
  static names(): { [key: string]: string } {
    return {
      errMessage: 'ErrMessage',
      errStatus: 'ErrStatus',
      index: 'Index',
      label: 'Label',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMessage: 'string',
      errStatus: 'number',
      index: 'number',
      label: 'string',
      word: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSensitiveWordResponseBodyData extends $dara.Model {
  sensitiveWordErrorList?: SyncSensitiveWordResponseBodyDataSensitiveWordErrorList[];
  static names(): { [key: string]: string } {
    return {
      sensitiveWordErrorList: 'SensitiveWordErrorList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sensitiveWordErrorList: { 'type': 'array', 'itemType': SyncSensitiveWordResponseBodyDataSensitiveWordErrorList },
    };
  }

  validate() {
    if(Array.isArray(this.sensitiveWordErrorList)) {
      $dara.Model.validateArray(this.sensitiveWordErrorList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchContentAsyncDetectRequest extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * ""
   */
  sceneName?: string;
  /**
   * @example
   * textDetection
   */
  serviceName?: string;
  serviceParameterList?: BatchContentAsyncDetectRequestServiceParameterList[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sceneName: 'SceneName',
      serviceName: 'ServiceName',
      serviceParameterList: 'serviceParameterList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sceneName: 'string',
      serviceName: 'string',
      serviceParameterList: { 'type': 'array', 'itemType': BatchContentAsyncDetectRequestServiceParameterList },
    };
  }

  validate() {
    if(Array.isArray(this.serviceParameterList)) {
      $dara.Model.validateArray(this.serviceParameterList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchContentAsyncDetectResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  data?: BatchContentAsyncDetectResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * 9736C44E-F718-566B-821F-710216aAAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****F68692
   */
  requestId?: string;
  /**
   * @example
   * True
   */
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
      data: BatchContentAsyncDetectResponseBodyData,
      httpStatusCode: 'number',
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

export class BatchContentAsyncDetectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchContentAsyncDetectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchContentAsyncDetectResponseBody,
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

export class BatchContentSyncDetectRequest extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * ""
   */
  sceneName?: string;
  /**
   * @example
   * textDetection
   * imageDetection
   */
  serviceName?: string;
  serviceParameterList?: BatchContentSyncDetectRequestServiceParameterList[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sceneName: 'SceneName',
      serviceName: 'ServiceName',
      serviceParameterList: 'serviceParameterList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sceneName: 'string',
      serviceName: 'string',
      serviceParameterList: { 'type': 'array', 'itemType': BatchContentSyncDetectRequestServiceParameterList },
    };
  }

  validate() {
    if(Array.isArray(this.serviceParameterList)) {
      $dara.Model.validateArray(this.serviceParameterList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchContentSyncDetectResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  data?: BatchContentSyncDetectResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
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
      data: BatchContentSyncDetectResponseBodyData,
      httpStatusCode: 'number',
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

export class BatchContentSyncDetectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchContentSyncDetectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchContentSyncDetectResponseBody,
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

export class CheckAccountRequest extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CheckAccountResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  data?: CheckAccountResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
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
      data: CheckAccountResponseBodyData,
      httpStatusCode: 'number',
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

export class CheckAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckAccountResponseBody,
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

export class ContentAsyncDetectRequest extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * ""
   */
  sceneName?: string;
  /**
   * @example
   * textDetection
   */
  serviceName?: string;
  serviceParameter?: ContentAsyncDetectRequestServiceParameter;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sceneName: 'SceneName',
      serviceName: 'ServiceName',
      serviceParameter: 'serviceParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sceneName: 'string',
      serviceName: 'string',
      serviceParameter: ContentAsyncDetectRequestServiceParameter,
    };
  }

  validate() {
    if(this.serviceParameter && typeof (this.serviceParameter as any).validate === 'function') {
      (this.serviceParameter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContentAsyncDetectResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  data?: ContentAsyncDetectResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
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
      data: ContentAsyncDetectResponseBodyData,
      httpStatusCode: 'number',
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

export class ContentAsyncDetectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ContentAsyncDetectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ContentAsyncDetectResponseBody,
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

export class ContentSyncDetectRequest extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * ""
   */
  sceneName?: string;
  /**
   * @example
   * textDetection
   */
  serviceName?: string;
  serviceParameter?: ContentSyncDetectRequestServiceParameter;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sceneName: 'SceneName',
      serviceName: 'ServiceName',
      serviceParameter: 'serviceParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sceneName: 'string',
      serviceName: 'string',
      serviceParameter: ContentSyncDetectRequestServiceParameter,
    };
  }

  validate() {
    if(this.serviceParameter && typeof (this.serviceParameter as any).validate === 'function') {
      (this.serviceParameter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContentSyncDetectResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  data?: ContentSyncDetectResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
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
      data: ContentSyncDetectResponseBodyData,
      httpStatusCode: 'number',
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

export class ContentSyncDetectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ContentSyncDetectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ContentSyncDetectResponseBody,
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

export class GetContentDetectResultRequest extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * 5d85cd38-03b2-49fd-86b2-be85c4b13215
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
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

export class GetContentDetectResultResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  data?: GetContentDetectResultResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
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
      data: GetContentDetectResultResponseBodyData,
      httpStatusCode: 'number',
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

export class GetContentDetectResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetContentDetectResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetContentDetectResultResponseBody,
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

export class GetModelInputContentDetectResultRequest extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * 5d85cd38-03b2-49fd-86b2-be85c4b13215
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
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

export class GetModelInputContentDetectResultResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  detectResultList?: GetModelInputContentDetectResultResponseBodyDetectResultList[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * 1
   */
  processedCount?: number;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 5d85cd38-03b2-49fd-86b2-be85c4b13215
   */
  taskId?: string;
  /**
   * @example
   * 2
   */
  taskStatus?: number;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      detectResultList: 'DetectResultList',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      processedCount: 'ProcessedCount',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      detectResultList: { 'type': 'array', 'itemType': GetModelInputContentDetectResultResponseBodyDetectResultList },
      httpStatusCode: 'number',
      message: 'string',
      processedCount: 'number',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
      taskStatus: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.detectResultList)) {
      $dara.Model.validateArray(this.detectResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelInputContentDetectResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetModelInputContentDetectResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetModelInputContentDetectResultResponseBody,
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

export class GetModelOutputContentDetectResultRequest extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * 5d85cd38-03b2-49fd-86b2-be85c4b13215
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
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

export class GetModelOutputContentDetectResultResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  detectResultList?: GetModelOutputContentDetectResultResponseBodyDetectResultList[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * 1
   */
  processedCount?: number;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 5d85cd38-03b2-49fd-86b2-be85c4b13215
   */
  taskId?: string;
  /**
   * @example
   * 2
   */
  taskStatus?: number;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      detectResultList: 'DetectResultList',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      processedCount: 'ProcessedCount',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      detectResultList: { 'type': 'array', 'itemType': GetModelOutputContentDetectResultResponseBodyDetectResultList },
      httpStatusCode: 'number',
      message: 'string',
      processedCount: 'number',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
      taskStatus: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.detectResultList)) {
      $dara.Model.validateArray(this.detectResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelOutputContentDetectResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetModelOutputContentDetectResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetModelOutputContentDetectResultResponseBody,
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

export class ListSensitiveWordRequest extends $dara.Model {
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
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
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

export class ListSensitiveWordResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  data?: ListSensitiveWordResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
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
      data: ListSensitiveWordResponseBodyData,
      httpStatusCode: 'number',
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

export class ListSensitiveWordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSensitiveWordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSensitiveWordResponseBody,
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

export class ModelInputContentAsyncDetectRequest extends $dara.Model {
  bodyData?: ModelInputContentAsyncDetectRequestBodyData;
  /**
   * @example
   * x1bc5xgs4uhx
   */
  policyIdentifier?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * ""
   */
  sceneName?: string;
  /**
   * @example
   * textDetection
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      bodyData: 'BodyData',
      policyIdentifier: 'PolicyIdentifier',
      regionId: 'RegionId',
      sceneName: 'SceneName',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyData: ModelInputContentAsyncDetectRequestBodyData,
      policyIdentifier: 'string',
      regionId: 'string',
      sceneName: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    if(this.bodyData && typeof (this.bodyData as any).validate === 'function') {
      (this.bodyData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelInputContentAsyncDetectShrinkRequest extends $dara.Model {
  bodyDataShrink?: string;
  /**
   * @example
   * x1bc5xgs4uhx
   */
  policyIdentifier?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * ""
   */
  sceneName?: string;
  /**
   * @example
   * textDetection
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      bodyDataShrink: 'BodyData',
      policyIdentifier: 'PolicyIdentifier',
      regionId: 'RegionId',
      sceneName: 'SceneName',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyDataShrink: 'string',
      policyIdentifier: 'string',
      regionId: 'string',
      sceneName: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelInputContentAsyncDetectResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 5d85cd38-03b2-49fd-86b2-be85c4b13215
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
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

export class ModelInputContentAsyncDetectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModelInputContentAsyncDetectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModelInputContentAsyncDetectResponseBody,
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

export class ModelInputContentSyncDetectRequest extends $dara.Model {
  bodyData?: ModelInputContentSyncDetectRequestBodyData;
  policyIdentifier?: string;
  regionId?: string;
  sceneName?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      bodyData: 'BodyData',
      policyIdentifier: 'PolicyIdentifier',
      regionId: 'RegionId',
      sceneName: 'SceneName',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyData: ModelInputContentSyncDetectRequestBodyData,
      policyIdentifier: 'string',
      regionId: 'string',
      sceneName: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    if(this.bodyData && typeof (this.bodyData as any).validate === 'function') {
      (this.bodyData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelInputContentSyncDetectShrinkRequest extends $dara.Model {
  bodyDataShrink?: string;
  policyIdentifier?: string;
  regionId?: string;
  sceneName?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      bodyDataShrink: 'BodyData',
      policyIdentifier: 'PolicyIdentifier',
      regionId: 'RegionId',
      sceneName: 'SceneName',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyDataShrink: 'string',
      policyIdentifier: 'string',
      regionId: 'string',
      sceneName: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelInputContentSyncDetectResponseBody extends $dara.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  riskResult?: number;
  success?: boolean;
  traceInfo?: ModelInputContentSyncDetectResponseBodyTraceInfo;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      riskResult: 'RiskResult',
      success: 'Success',
      traceInfo: 'TraceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      riskResult: 'number',
      success: 'boolean',
      traceInfo: ModelInputContentSyncDetectResponseBodyTraceInfo,
    };
  }

  validate() {
    if(this.traceInfo && typeof (this.traceInfo as any).validate === 'function') {
      (this.traceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelInputContentSyncDetectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModelInputContentSyncDetectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModelInputContentSyncDetectResponseBody,
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

export class ModelOutputContentAsyncDetectRequest extends $dara.Model {
  bodyData?: ModelOutputContentAsyncDetectRequestBodyData;
  /**
   * @example
   * x1bc5xgs4uhx
   */
  policyIdentifier?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * ""
   */
  sceneName?: string;
  /**
   * @example
   * textDetection
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      bodyData: 'BodyData',
      policyIdentifier: 'PolicyIdentifier',
      regionId: 'RegionId',
      sceneName: 'SceneName',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyData: ModelOutputContentAsyncDetectRequestBodyData,
      policyIdentifier: 'string',
      regionId: 'string',
      sceneName: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    if(this.bodyData && typeof (this.bodyData as any).validate === 'function') {
      (this.bodyData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelOutputContentAsyncDetectShrinkRequest extends $dara.Model {
  bodyDataShrink?: string;
  /**
   * @example
   * x1bc5xgs4uhx
   */
  policyIdentifier?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * ""
   */
  sceneName?: string;
  /**
   * @example
   * textDetection
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      bodyDataShrink: 'BodyData',
      policyIdentifier: 'PolicyIdentifier',
      regionId: 'RegionId',
      sceneName: 'SceneName',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyDataShrink: 'string',
      policyIdentifier: 'string',
      regionId: 'string',
      sceneName: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelOutputContentAsyncDetectResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 5d85cd38-03b2-49fd-86b2-be85c4b13215
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
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

export class ModelOutputContentAsyncDetectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModelOutputContentAsyncDetectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModelOutputContentAsyncDetectResponseBody,
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

export class ModelOutputContentSyncDetectRequest extends $dara.Model {
  bodyData?: ModelOutputContentSyncDetectRequestBodyData;
  /**
   * @example
   * x1bc5xgs4uhx
   */
  policyIdentifier?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * ""
   */
  sceneName?: string;
  /**
   * @example
   * textDetection
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      bodyData: 'BodyData',
      policyIdentifier: 'PolicyIdentifier',
      regionId: 'RegionId',
      sceneName: 'SceneName',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyData: ModelOutputContentSyncDetectRequestBodyData,
      policyIdentifier: 'string',
      regionId: 'string',
      sceneName: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    if(this.bodyData && typeof (this.bodyData as any).validate === 'function') {
      (this.bodyData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelOutputContentSyncDetectShrinkRequest extends $dara.Model {
  bodyDataShrink?: string;
  /**
   * @example
   * x1bc5xgs4uhx
   */
  policyIdentifier?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * ""
   */
  sceneName?: string;
  /**
   * @example
   * textDetection
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      bodyDataShrink: 'BodyData',
      policyIdentifier: 'PolicyIdentifier',
      regionId: 'RegionId',
      sceneName: 'SceneName',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyDataShrink: 'string',
      policyIdentifier: 'string',
      regionId: 'string',
      sceneName: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelOutputContentSyncDetectResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * “”
   */
  riskInfo?: string;
  /**
   * @example
   * 0
   */
  riskResult?: number;
  /**
   * @example
   * True
   */
  success?: boolean;
  traceInfo?: ModelOutputContentSyncDetectResponseBodyTraceInfo;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      riskInfo: 'RiskInfo',
      riskResult: 'RiskResult',
      success: 'Success',
      traceInfo: 'TraceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      riskInfo: 'string',
      riskResult: 'number',
      success: 'boolean',
      traceInfo: ModelOutputContentSyncDetectResponseBodyTraceInfo,
    };
  }

  validate() {
    if(this.traceInfo && typeof (this.traceInfo as any).validate === 'function') {
      (this.traceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelOutputContentSyncDetectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModelOutputContentSyncDetectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModelOutputContentSyncDetectResponseBody,
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

export class RegisterAccountRequest extends $dara.Model {
  /**
   * @example
   * "user api register"
   */
  memo?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      memo: 'Memo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memo: 'string',
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

export class RegisterAccountResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
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

export class RegisterAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RegisterAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RegisterAccountResponseBody,
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

export class SyncSensitiveWordRequest extends $dara.Model {
  bodyData?: SyncSensitiveWordRequestBodyData;
  /**
   * @example
   * true
   */
  commit?: boolean;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bodyData: 'BodyData',
      commit: 'Commit',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyData: SyncSensitiveWordRequestBodyData,
      commit: 'boolean',
      regionId: 'string',
    };
  }

  validate() {
    if(this.bodyData && typeof (this.bodyData as any).validate === 'function') {
      (this.bodyData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSensitiveWordShrinkRequest extends $dara.Model {
  bodyDataShrink?: string;
  /**
   * @example
   * true
   */
  commit?: boolean;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bodyDataShrink: 'BodyData',
      commit: 'Commit',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyDataShrink: 'string',
      commit: 'boolean',
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

export class SyncSensitiveWordResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  data?: SyncSensitiveWordResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
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
      data: SyncSensitiveWordResponseBodyData,
      httpStatusCode: 'number',
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

export class SyncSensitiveWordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SyncSensitiveWordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SyncSensitiveWordResponseBody,
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
    this._endpoint = this.getEndpoint("rai", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * BatchContentAsyncDetect
   * 
   * @param request - BatchContentAsyncDetectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchContentAsyncDetectResponse
   */
  async batchContentAsyncDetectWithOptions(request: BatchContentAsyncDetectRequest, runtime: $dara.RuntimeOptions): Promise<BatchContentAsyncDetectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sceneName)) {
      query["SceneName"] = request.sceneName;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceParameterList)) {
      body["serviceParameterList"] = request.serviceParameterList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchContentAsyncDetect",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchContentAsyncDetectResponse>(await this.callApi(params, req, runtime), new BatchContentAsyncDetectResponse({}));
    } else {
      return $dara.cast<BatchContentAsyncDetectResponse>(await this.execute(params, req, runtime), new BatchContentAsyncDetectResponse({}));
    }

  }

  /**
   * BatchContentAsyncDetect
   * 
   * @param request - BatchContentAsyncDetectRequest
   * @returns BatchContentAsyncDetectResponse
   */
  async batchContentAsyncDetect(request: BatchContentAsyncDetectRequest): Promise<BatchContentAsyncDetectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchContentAsyncDetectWithOptions(request, runtime);
  }

  /**
   * BatchContentSyncDetect
   * 
   * @param request - BatchContentSyncDetectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchContentSyncDetectResponse
   */
  async batchContentSyncDetectWithOptions(request: BatchContentSyncDetectRequest, runtime: $dara.RuntimeOptions): Promise<BatchContentSyncDetectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sceneName)) {
      query["SceneName"] = request.sceneName;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceParameterList)) {
      body["serviceParameterList"] = request.serviceParameterList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchContentSyncDetect",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchContentSyncDetectResponse>(await this.callApi(params, req, runtime), new BatchContentSyncDetectResponse({}));
    } else {
      return $dara.cast<BatchContentSyncDetectResponse>(await this.execute(params, req, runtime), new BatchContentSyncDetectResponse({}));
    }

  }

  /**
   * BatchContentSyncDetect
   * 
   * @param request - BatchContentSyncDetectRequest
   * @returns BatchContentSyncDetectResponse
   */
  async batchContentSyncDetect(request: BatchContentSyncDetectRequest): Promise<BatchContentSyncDetectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchContentSyncDetectWithOptions(request, runtime);
  }

  /**
   * 检查用户是否开通RAI服务
   * 
   * @param request - CheckAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckAccountResponse
   */
  async checkAccountWithOptions(request: CheckAccountRequest, runtime: $dara.RuntimeOptions): Promise<CheckAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckAccount",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CheckAccountResponse>(await this.callApi(params, req, runtime), new CheckAccountResponse({}));
    } else {
      return $dara.cast<CheckAccountResponse>(await this.execute(params, req, runtime), new CheckAccountResponse({}));
    }

  }

  /**
   * 检查用户是否开通RAI服务
   * 
   * @param request - CheckAccountRequest
   * @returns CheckAccountResponse
   */
  async checkAccount(request: CheckAccountRequest): Promise<CheckAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkAccountWithOptions(request, runtime);
  }

  /**
   * ContentAsyncDetect
   * 
   * @param request - ContentAsyncDetectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContentAsyncDetectResponse
   */
  async contentAsyncDetectWithOptions(request: ContentAsyncDetectRequest, runtime: $dara.RuntimeOptions): Promise<ContentAsyncDetectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sceneName)) {
      query["SceneName"] = request.sceneName;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceParameter)) {
      body["serviceParameter"] = request.serviceParameter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ContentAsyncDetect",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ContentAsyncDetectResponse>(await this.callApi(params, req, runtime), new ContentAsyncDetectResponse({}));
    } else {
      return $dara.cast<ContentAsyncDetectResponse>(await this.execute(params, req, runtime), new ContentAsyncDetectResponse({}));
    }

  }

  /**
   * ContentAsyncDetect
   * 
   * @param request - ContentAsyncDetectRequest
   * @returns ContentAsyncDetectResponse
   */
  async contentAsyncDetect(request: ContentAsyncDetectRequest): Promise<ContentAsyncDetectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.contentAsyncDetectWithOptions(request, runtime);
  }

  /**
   * ContentSyncDetect
   * 
   * @param request - ContentSyncDetectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContentSyncDetectResponse
   */
  async contentSyncDetectWithOptions(request: ContentSyncDetectRequest, runtime: $dara.RuntimeOptions): Promise<ContentSyncDetectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sceneName)) {
      query["SceneName"] = request.sceneName;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceParameter)) {
      body["serviceParameter"] = request.serviceParameter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ContentSyncDetect",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ContentSyncDetectResponse>(await this.callApi(params, req, runtime), new ContentSyncDetectResponse({}));
    } else {
      return $dara.cast<ContentSyncDetectResponse>(await this.execute(params, req, runtime), new ContentSyncDetectResponse({}));
    }

  }

  /**
   * ContentSyncDetect
   * 
   * @param request - ContentSyncDetectRequest
   * @returns ContentSyncDetectResponse
   */
  async contentSyncDetect(request: ContentSyncDetectRequest): Promise<ContentSyncDetectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.contentSyncDetectWithOptions(request, runtime);
  }

  /**
   * GetContentDetectResult
   * 
   * @param request - GetContentDetectResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetContentDetectResultResponse
   */
  async getContentDetectResultWithOptions(request: GetContentDetectResultRequest, runtime: $dara.RuntimeOptions): Promise<GetContentDetectResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetContentDetectResult",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetContentDetectResultResponse>(await this.callApi(params, req, runtime), new GetContentDetectResultResponse({}));
    } else {
      return $dara.cast<GetContentDetectResultResponse>(await this.execute(params, req, runtime), new GetContentDetectResultResponse({}));
    }

  }

  /**
   * GetContentDetectResult
   * 
   * @param request - GetContentDetectResultRequest
   * @returns GetContentDetectResultResponse
   */
  async getContentDetectResult(request: GetContentDetectResultRequest): Promise<GetContentDetectResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getContentDetectResultWithOptions(request, runtime);
  }

  /**
   * GetModelInputContentDetectResult
   * 
   * @param request - GetModelInputContentDetectResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelInputContentDetectResultResponse
   */
  async getModelInputContentDetectResultWithOptions(request: GetModelInputContentDetectResultRequest, runtime: $dara.RuntimeOptions): Promise<GetModelInputContentDetectResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetModelInputContentDetectResult",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetModelInputContentDetectResultResponse>(await this.callApi(params, req, runtime), new GetModelInputContentDetectResultResponse({}));
    } else {
      return $dara.cast<GetModelInputContentDetectResultResponse>(await this.execute(params, req, runtime), new GetModelInputContentDetectResultResponse({}));
    }

  }

  /**
   * GetModelInputContentDetectResult
   * 
   * @param request - GetModelInputContentDetectResultRequest
   * @returns GetModelInputContentDetectResultResponse
   */
  async getModelInputContentDetectResult(request: GetModelInputContentDetectResultRequest): Promise<GetModelInputContentDetectResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getModelInputContentDetectResultWithOptions(request, runtime);
  }

  /**
   * GetModelOutputContentDetectResult
   * 
   * @param request - GetModelOutputContentDetectResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelOutputContentDetectResultResponse
   */
  async getModelOutputContentDetectResultWithOptions(request: GetModelOutputContentDetectResultRequest, runtime: $dara.RuntimeOptions): Promise<GetModelOutputContentDetectResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetModelOutputContentDetectResult",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetModelOutputContentDetectResultResponse>(await this.callApi(params, req, runtime), new GetModelOutputContentDetectResultResponse({}));
    } else {
      return $dara.cast<GetModelOutputContentDetectResultResponse>(await this.execute(params, req, runtime), new GetModelOutputContentDetectResultResponse({}));
    }

  }

  /**
   * GetModelOutputContentDetectResult
   * 
   * @param request - GetModelOutputContentDetectResultRequest
   * @returns GetModelOutputContentDetectResultResponse
   */
  async getModelOutputContentDetectResult(request: GetModelOutputContentDetectResultRequest): Promise<GetModelOutputContentDetectResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getModelOutputContentDetectResultWithOptions(request, runtime);
  }

  /**
   * ListSensitiveWord
   * 
   * @param request - ListSensitiveWordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSensitiveWordResponse
   */
  async listSensitiveWordWithOptions(request: ListSensitiveWordRequest, runtime: $dara.RuntimeOptions): Promise<ListSensitiveWordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSensitiveWord",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListSensitiveWordResponse>(await this.callApi(params, req, runtime), new ListSensitiveWordResponse({}));
    } else {
      return $dara.cast<ListSensitiveWordResponse>(await this.execute(params, req, runtime), new ListSensitiveWordResponse({}));
    }

  }

  /**
   * ListSensitiveWord
   * 
   * @param request - ListSensitiveWordRequest
   * @returns ListSensitiveWordResponse
   */
  async listSensitiveWord(request: ListSensitiveWordRequest): Promise<ListSensitiveWordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSensitiveWordWithOptions(request, runtime);
  }

  /**
   * ModelInputContentAsyncDetect
   * 
   * @param tmpReq - ModelInputContentAsyncDetectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelInputContentAsyncDetectResponse
   */
  async modelInputContentAsyncDetectWithOptions(tmpReq: ModelInputContentAsyncDetectRequest, runtime: $dara.RuntimeOptions): Promise<ModelInputContentAsyncDetectResponse> {
    tmpReq.validate();
    let request = new ModelInputContentAsyncDetectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bodyData)) {
      request.bodyDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bodyData, "BodyData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.policyIdentifier)) {
      query["PolicyIdentifier"] = request.policyIdentifier;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sceneName)) {
      query["SceneName"] = request.sceneName;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyDataShrink)) {
      body["BodyData"] = request.bodyDataShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelInputContentAsyncDetect",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModelInputContentAsyncDetectResponse>(await this.callApi(params, req, runtime), new ModelInputContentAsyncDetectResponse({}));
    } else {
      return $dara.cast<ModelInputContentAsyncDetectResponse>(await this.execute(params, req, runtime), new ModelInputContentAsyncDetectResponse({}));
    }

  }

  /**
   * ModelInputContentAsyncDetect
   * 
   * @param request - ModelInputContentAsyncDetectRequest
   * @returns ModelInputContentAsyncDetectResponse
   */
  async modelInputContentAsyncDetect(request: ModelInputContentAsyncDetectRequest): Promise<ModelInputContentAsyncDetectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modelInputContentAsyncDetectWithOptions(request, runtime);
  }

  /**
   * ModelInputContentSyncDetect
   * 
   * @param tmpReq - ModelInputContentSyncDetectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelInputContentSyncDetectResponse
   */
  async modelInputContentSyncDetectWithOptions(tmpReq: ModelInputContentSyncDetectRequest, runtime: $dara.RuntimeOptions): Promise<ModelInputContentSyncDetectResponse> {
    tmpReq.validate();
    let request = new ModelInputContentSyncDetectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bodyData)) {
      request.bodyDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bodyData, "BodyData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.policyIdentifier)) {
      query["PolicyIdentifier"] = request.policyIdentifier;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sceneName)) {
      query["SceneName"] = request.sceneName;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyDataShrink)) {
      body["BodyData"] = request.bodyDataShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelInputContentSyncDetect",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModelInputContentSyncDetectResponse>(await this.callApi(params, req, runtime), new ModelInputContentSyncDetectResponse({}));
    } else {
      return $dara.cast<ModelInputContentSyncDetectResponse>(await this.execute(params, req, runtime), new ModelInputContentSyncDetectResponse({}));
    }

  }

  /**
   * ModelInputContentSyncDetect
   * 
   * @param request - ModelInputContentSyncDetectRequest
   * @returns ModelInputContentSyncDetectResponse
   */
  async modelInputContentSyncDetect(request: ModelInputContentSyncDetectRequest): Promise<ModelInputContentSyncDetectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modelInputContentSyncDetectWithOptions(request, runtime);
  }

  /**
   * ModelOutputContentAsyncDetect
   * 
   * @param tmpReq - ModelOutputContentAsyncDetectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelOutputContentAsyncDetectResponse
   */
  async modelOutputContentAsyncDetectWithOptions(tmpReq: ModelOutputContentAsyncDetectRequest, runtime: $dara.RuntimeOptions): Promise<ModelOutputContentAsyncDetectResponse> {
    tmpReq.validate();
    let request = new ModelOutputContentAsyncDetectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bodyData)) {
      request.bodyDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bodyData, "BodyData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.policyIdentifier)) {
      query["PolicyIdentifier"] = request.policyIdentifier;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sceneName)) {
      query["SceneName"] = request.sceneName;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyDataShrink)) {
      body["BodyData"] = request.bodyDataShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelOutputContentAsyncDetect",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModelOutputContentAsyncDetectResponse>(await this.callApi(params, req, runtime), new ModelOutputContentAsyncDetectResponse({}));
    } else {
      return $dara.cast<ModelOutputContentAsyncDetectResponse>(await this.execute(params, req, runtime), new ModelOutputContentAsyncDetectResponse({}));
    }

  }

  /**
   * ModelOutputContentAsyncDetect
   * 
   * @param request - ModelOutputContentAsyncDetectRequest
   * @returns ModelOutputContentAsyncDetectResponse
   */
  async modelOutputContentAsyncDetect(request: ModelOutputContentAsyncDetectRequest): Promise<ModelOutputContentAsyncDetectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modelOutputContentAsyncDetectWithOptions(request, runtime);
  }

  /**
   * ModelOutputContentSyncDetect
   * 
   * @param tmpReq - ModelOutputContentSyncDetectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelOutputContentSyncDetectResponse
   */
  async modelOutputContentSyncDetectWithOptions(tmpReq: ModelOutputContentSyncDetectRequest, runtime: $dara.RuntimeOptions): Promise<ModelOutputContentSyncDetectResponse> {
    tmpReq.validate();
    let request = new ModelOutputContentSyncDetectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bodyData)) {
      request.bodyDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bodyData, "BodyData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.policyIdentifier)) {
      query["PolicyIdentifier"] = request.policyIdentifier;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sceneName)) {
      query["SceneName"] = request.sceneName;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyDataShrink)) {
      body["BodyData"] = request.bodyDataShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelOutputContentSyncDetect",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModelOutputContentSyncDetectResponse>(await this.callApi(params, req, runtime), new ModelOutputContentSyncDetectResponse({}));
    } else {
      return $dara.cast<ModelOutputContentSyncDetectResponse>(await this.execute(params, req, runtime), new ModelOutputContentSyncDetectResponse({}));
    }

  }

  /**
   * ModelOutputContentSyncDetect
   * 
   * @param request - ModelOutputContentSyncDetectRequest
   * @returns ModelOutputContentSyncDetectResponse
   */
  async modelOutputContentSyncDetect(request: ModelOutputContentSyncDetectRequest): Promise<ModelOutputContentSyncDetectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modelOutputContentSyncDetectWithOptions(request, runtime);
  }

  /**
   * 注册RAI账号
   * 
   * @param request - RegisterAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterAccountResponse
   */
  async registerAccountWithOptions(request: RegisterAccountRequest, runtime: $dara.RuntimeOptions): Promise<RegisterAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.memo)) {
      query["Memo"] = request.memo;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterAccount",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RegisterAccountResponse>(await this.callApi(params, req, runtime), new RegisterAccountResponse({}));
    } else {
      return $dara.cast<RegisterAccountResponse>(await this.execute(params, req, runtime), new RegisterAccountResponse({}));
    }

  }

  /**
   * 注册RAI账号
   * 
   * @param request - RegisterAccountRequest
   * @returns RegisterAccountResponse
   */
  async registerAccount(request: RegisterAccountRequest): Promise<RegisterAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerAccountWithOptions(request, runtime);
  }

  /**
   * SyncSensitiveWord
   * 
   * @param tmpReq - SyncSensitiveWordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncSensitiveWordResponse
   */
  async syncSensitiveWordWithOptions(tmpReq: SyncSensitiveWordRequest, runtime: $dara.RuntimeOptions): Promise<SyncSensitiveWordResponse> {
    tmpReq.validate();
    let request = new SyncSensitiveWordShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bodyData)) {
      request.bodyDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bodyData, "BodyData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.commit)) {
      query["Commit"] = request.commit;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyDataShrink)) {
      body["BodyData"] = request.bodyDataShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncSensitiveWord",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SyncSensitiveWordResponse>(await this.callApi(params, req, runtime), new SyncSensitiveWordResponse({}));
    } else {
      return $dara.cast<SyncSensitiveWordResponse>(await this.execute(params, req, runtime), new SyncSensitiveWordResponse({}));
    }

  }

  /**
   * SyncSensitiveWord
   * 
   * @param request - SyncSensitiveWordRequest
   * @returns SyncSensitiveWordResponse
   */
  async syncSensitiveWord(request: SyncSensitiveWordRequest): Promise<SyncSensitiveWordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncSensitiveWordWithOptions(request, runtime);
  }

}
