// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class AddAnswerSampleResponseBodyResult extends $dara.Model {
  /**
   * @example
   * xxx
   */
  i18nKey?: string;
  illegalLengthSamples?: string[];
  /**
   * @example
   * 118
   */
  invalidCount?: number;
  /**
   * @example
   * alxxxx
   */
  libId?: string;
  /**
   * @example
   * 100
   */
  progress?: number;
  /**
   * @example
   * 98
   */
  repeatCount?: number;
  repeatSamples?: string[];
  /**
   * @example
   * 318
   */
  successCount?: number;
  /**
   * @example
   * alAxbbxxxx-xxx
   */
  taskId?: string;
  /**
   * @example
   * 534
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      i18nKey: 'I18nKey',
      illegalLengthSamples: 'IllegalLengthSamples',
      invalidCount: 'InvalidCount',
      libId: 'LibId',
      progress: 'Progress',
      repeatCount: 'RepeatCount',
      repeatSamples: 'RepeatSamples',
      successCount: 'SuccessCount',
      taskId: 'TaskId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      i18nKey: 'string',
      illegalLengthSamples: { 'type': 'array', 'itemType': 'string' },
      invalidCount: 'number',
      libId: 'string',
      progress: 'number',
      repeatCount: 'number',
      repeatSamples: { 'type': 'array', 'itemType': 'string' },
      successCount: 'number',
      taskId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.illegalLengthSamples)) {
      $dara.Model.validateArray(this.illegalLengthSamples);
    }
    if(Array.isArray(this.repeatSamples)) {
      $dara.Model.validateArray(this.repeatSamples);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImages2LibResponseBodyData extends $dara.Model {
  /**
   * @example
   * 100001
   */
  imgId?: string;
  static names(): { [key: string]: string } {
    return {
      imgId: 'ImgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imgId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddKeywordLibResponseBodyDataKeywordsResult extends $dara.Model {
  /**
   * @example
   * xxx
   */
  i18nKey?: string;
  illegalLengthKeywords?: string[];
  /**
   * @example
   * 133
   */
  invalidCount?: number;
  invalidKeywords?: string[];
  /**
   * @example
   * customxx_xxxx
   */
  libId?: string;
  /**
   * @example
   * 118
   */
  repeatCount?: number;
  repeatKeywords?: string[];
  /**
   * @example
   * 278
   */
  successCount?: number;
  /**
   * @example
   * xxx
   */
  tips?: string;
  /**
   * @example
   * 529
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      i18nKey: 'I18nKey',
      illegalLengthKeywords: 'IllegalLengthKeywords',
      invalidCount: 'InvalidCount',
      invalidKeywords: 'InvalidKeywords',
      libId: 'LibId',
      repeatCount: 'RepeatCount',
      repeatKeywords: 'RepeatKeywords',
      successCount: 'SuccessCount',
      tips: 'Tips',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      i18nKey: 'string',
      illegalLengthKeywords: { 'type': 'array', 'itemType': 'string' },
      invalidCount: 'number',
      invalidKeywords: { 'type': 'array', 'itemType': 'string' },
      libId: 'string',
      repeatCount: 'number',
      repeatKeywords: { 'type': 'array', 'itemType': 'string' },
      successCount: 'number',
      tips: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.illegalLengthKeywords)) {
      $dara.Model.validateArray(this.illegalLengthKeywords);
    }
    if(Array.isArray(this.invalidKeywords)) {
      $dara.Model.validateArray(this.invalidKeywords);
    }
    if(Array.isArray(this.repeatKeywords)) {
      $dara.Model.validateArray(this.repeatKeywords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddKeywordLibResponseBodyData extends $dara.Model {
  keywordsResult?: AddKeywordLibResponseBodyDataKeywordsResult;
  /**
   * @example
   * customxx_xxxx
   */
  libId?: string;
  /**
   * @example
   * xxxxx-xxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      keywordsResult: 'KeywordsResult',
      libId: 'LibId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywordsResult: AddKeywordLibResponseBodyDataKeywordsResult,
      libId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.keywordsResult && typeof (this.keywordsResult as any).validate === 'function') {
      (this.keywordsResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddKeywordsResponseBodyDataKeywordsResult extends $dara.Model {
  /**
   * @example
   * xxx
   */
  i18nKey?: string;
  illegalLengthKeywords?: string[];
  /**
   * @example
   * 1
   */
  invalidCount?: number;
  invalidKeywords?: string[];
  /**
   * @example
   * customxx_xxxx
   */
  libId?: string;
  /**
   * @example
   * 100
   */
  progress?: number;
  /**
   * @example
   * 1
   */
  repeatCount?: number;
  repeatKeywords?: string[];
  /**
   * @example
   * 6
   */
  successCount?: number;
  /**
   * @example
   * xxxxx
   */
  tips?: string;
  /**
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      i18nKey: 'I18nKey',
      illegalLengthKeywords: 'IllegalLengthKeywords',
      invalidCount: 'InvalidCount',
      invalidKeywords: 'InvalidKeywords',
      libId: 'LibId',
      progress: 'Progress',
      repeatCount: 'RepeatCount',
      repeatKeywords: 'RepeatKeywords',
      successCount: 'SuccessCount',
      tips: 'Tips',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      i18nKey: 'string',
      illegalLengthKeywords: { 'type': 'array', 'itemType': 'string' },
      invalidCount: 'number',
      invalidKeywords: { 'type': 'array', 'itemType': 'string' },
      libId: 'string',
      progress: 'number',
      repeatCount: 'number',
      repeatKeywords: { 'type': 'array', 'itemType': 'string' },
      successCount: 'number',
      tips: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.illegalLengthKeywords)) {
      $dara.Model.validateArray(this.illegalLengthKeywords);
    }
    if(Array.isArray(this.invalidKeywords)) {
      $dara.Model.validateArray(this.invalidKeywords);
    }
    if(Array.isArray(this.repeatKeywords)) {
      $dara.Model.validateArray(this.repeatKeywords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddKeywordsResponseBodyData extends $dara.Model {
  keywordsResult?: AddKeywordsResponseBodyDataKeywordsResult;
  /**
   * @example
   * customxx_xxxx
   */
  libId?: string;
  /**
   * @example
   * xxxxx-xxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      keywordsResult: 'KeywordsResult',
      libId: 'LibId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywordsResult: AddKeywordsResponseBodyDataKeywordsResult,
      libId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.keywordsResult && typeof (this.keywordsResult as any).validate === 'function') {
      (this.keywordsResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddKeywordsToLibResponseBodyDataKeywordsResult extends $dara.Model {
  /**
   * @example
   * xxx
   */
  i18nKey?: string;
  illegalLengthKeywords?: string[];
  /**
   * @example
   * 1
   */
  invalidCount?: number;
  invalidKeywords?: string[];
  /**
   * @example
   * customxx_xxxx
   */
  libId?: string;
  /**
   * @example
   * 100
   */
  progress?: number;
  /**
   * @example
   * 1
   */
  repeatCount?: number;
  repeatKeywords?: string[];
  /**
   * @example
   * 8
   */
  successCount?: number;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      i18nKey: 'I18nKey',
      illegalLengthKeywords: 'IllegalLengthKeywords',
      invalidCount: 'InvalidCount',
      invalidKeywords: 'InvalidKeywords',
      libId: 'LibId',
      progress: 'Progress',
      repeatCount: 'RepeatCount',
      repeatKeywords: 'RepeatKeywords',
      successCount: 'SuccessCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      i18nKey: 'string',
      illegalLengthKeywords: { 'type': 'array', 'itemType': 'string' },
      invalidCount: 'number',
      invalidKeywords: { 'type': 'array', 'itemType': 'string' },
      libId: 'string',
      progress: 'number',
      repeatCount: 'number',
      repeatKeywords: { 'type': 'array', 'itemType': 'string' },
      successCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.illegalLengthKeywords)) {
      $dara.Model.validateArray(this.illegalLengthKeywords);
    }
    if(Array.isArray(this.invalidKeywords)) {
      $dara.Model.validateArray(this.invalidKeywords);
    }
    if(Array.isArray(this.repeatKeywords)) {
      $dara.Model.validateArray(this.repeatKeywords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddKeywordsToLibResponseBodyData extends $dara.Model {
  keywordsResult?: AddKeywordsToLibResponseBodyDataKeywordsResult;
  /**
   * @example
   * customxx_xxxx
   */
  libId?: string;
  /**
   * @example
   * xxxxx-xxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      keywordsResult: 'KeywordsResult',
      libId: 'LibId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywordsResult: AddKeywordsToLibResponseBodyDataKeywordsResult,
      libId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.keywordsResult && typeof (this.keywordsResult as any).validate === 'function') {
      (this.keywordsResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAnswerLibResponseBodyResult extends $dara.Model {
  /**
   * @example
   * xxx
   */
  i18nKey?: string;
  illegalLengthSamples?: string[];
  /**
   * @example
   * 1
   */
  invalidCount?: number;
  /**
   * @example
   * alxxxx
   */
  libId?: string;
  /**
   * @example
   * 100
   */
  progress?: number;
  /**
   * @example
   * 1
   */
  repeatCount?: number;
  repeatSamples?: string[];
  /**
   * @example
   * 8
   */
  successCount?: number;
  /**
   * @example
   * alAaaaxxx-xxx
   */
  taskId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      i18nKey: 'I18nKey',
      illegalLengthSamples: 'IllegalLengthSamples',
      invalidCount: 'InvalidCount',
      libId: 'LibId',
      progress: 'Progress',
      repeatCount: 'RepeatCount',
      repeatSamples: 'RepeatSamples',
      successCount: 'SuccessCount',
      taskId: 'TaskId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      i18nKey: 'string',
      illegalLengthSamples: { 'type': 'array', 'itemType': 'string' },
      invalidCount: 'number',
      libId: 'string',
      progress: 'number',
      repeatCount: 'number',
      repeatSamples: { 'type': 'array', 'itemType': 'string' },
      successCount: 'number',
      taskId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.illegalLengthSamples)) {
      $dara.Model.validateArray(this.illegalLengthSamples);
    }
    if(Array.isArray(this.repeatSamples)) {
      $dara.Model.validateArray(this.repeatSamples);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBackupBucketsListResponseBodyData extends $dara.Model {
  /**
   * @example
   * gj-bucket1
   */
  bucket?: string;
  /**
   * @example
   * cn-shanghai
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketsListResponseBodyData extends $dara.Model {
  /**
   * @example
   * bucket_test
   */
  bucket?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCipStatsResponseBodyDataLabelStatChartImageTreeChar extends $dara.Model {
  description?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

export class GetCipStatsResponseBodyDataLabelStatChartTreeChart extends $dara.Model {
  description?: string;
  /**
   * @example
   * nickNameDetection
   */
  name?: string;
  /**
   * @example
   * 99.91
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

export class GetCipStatsResponseBodyDataLabelStatChartVoiceTreeChart extends $dara.Model {
  description?: string;
  /**
   * @example
   * nickNameDetection
   */
  name?: string;
  /**
   * @example
   * 99.91
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

export class GetCipStatsResponseBodyDataLabelStatChartY extends $dara.Model {
  data?: number[];
  /**
   * @example
   * nickNameDetection
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCipStatsResponseBodyDataLabelStatChart extends $dara.Model {
  imageTreeChar?: GetCipStatsResponseBodyDataLabelStatChartImageTreeChar[];
  /**
   * @example
   * nickNameDetection
   */
  serviceCode?: string;
  /**
   * @example
   * 117
   */
  totalCount?: number;
  treeChart?: GetCipStatsResponseBodyDataLabelStatChartTreeChart[];
  voiceTreeChart?: GetCipStatsResponseBodyDataLabelStatChartVoiceTreeChart[];
  x?: string[];
  y?: GetCipStatsResponseBodyDataLabelStatChartY[];
  static names(): { [key: string]: string } {
    return {
      imageTreeChar: 'ImageTreeChar',
      serviceCode: 'ServiceCode',
      totalCount: 'TotalCount',
      treeChart: 'TreeChart',
      voiceTreeChart: 'VoiceTreeChart',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageTreeChar: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataLabelStatChartImageTreeChar },
      serviceCode: 'string',
      totalCount: 'number',
      treeChart: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataLabelStatChartTreeChart },
      voiceTreeChart: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataLabelStatChartVoiceTreeChart },
      x: { 'type': 'array', 'itemType': 'string' },
      y: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataLabelStatChartY },
    };
  }

  validate() {
    if(Array.isArray(this.imageTreeChar)) {
      $dara.Model.validateArray(this.imageTreeChar);
    }
    if(Array.isArray(this.treeChart)) {
      $dara.Model.validateArray(this.treeChart);
    }
    if(Array.isArray(this.voiceTreeChart)) {
      $dara.Model.validateArray(this.voiceTreeChart);
    }
    if(Array.isArray(this.x)) {
      $dara.Model.validateArray(this.x);
    }
    if(Array.isArray(this.y)) {
      $dara.Model.validateArray(this.y);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCipStatsResponseBodyDataY extends $dara.Model {
  data?: number[];
  /**
   * @example
   * nickNameDetection
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCipStatsResponseBodyDataZ extends $dara.Model {
  data?: number[];
  /**
   * @example
   * nickNameDetection
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCipStatsResponseBodyData extends $dara.Model {
  labelStatChart?: GetCipStatsResponseBodyDataLabelStatChart[];
  totalStat?: { [key: string]: any };
  uids?: string[];
  x?: string[];
  y?: GetCipStatsResponseBodyDataY[];
  z?: GetCipStatsResponseBodyDataZ[];
  static names(): { [key: string]: string } {
    return {
      labelStatChart: 'LabelStatChart',
      totalStat: 'TotalStat',
      uids: 'Uids',
      x: 'X',
      y: 'Y',
      z: 'Z',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelStatChart: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataLabelStatChart },
      totalStat: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      uids: { 'type': 'array', 'itemType': 'string' },
      x: { 'type': 'array', 'itemType': 'string' },
      y: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataY },
      z: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataZ },
    };
  }

  validate() {
    if(Array.isArray(this.labelStatChart)) {
      $dara.Model.validateArray(this.labelStatChart);
    }
    if(this.totalStat) {
      $dara.Model.validateMap(this.totalStat);
    }
    if(Array.isArray(this.uids)) {
      $dara.Model.validateArray(this.uids);
    }
    if(Array.isArray(this.x)) {
      $dara.Model.validateArray(this.x);
    }
    if(Array.isArray(this.y)) {
      $dara.Model.validateArray(this.y);
    }
    if(Array.isArray(this.z)) {
      $dara.Model.validateArray(this.z);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of feature configurations
   */
  featureConf?: { [key: string]: any }[];
  /**
   * @remarks
   * Resource type.
   * 
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @remarks
   * Service code.
   * 
   * @example
   * llm_query_moderation
   */
  serviceCode?: string;
  /**
   * @remarks
   * Type
   * 
   * @example
   * custom_llm_template
   */
  type?: string;
  /**
   * @remarks
   * UID.
   * 
   * @example
   * 1643953****74290
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      featureConf: 'FeatureConf',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      type: 'Type',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureConf: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      resourceType: 'string',
      serviceCode: 'string',
      type: 'string',
      uid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.featureConf)) {
      $dara.Model.validateArray(this.featureConf);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKeywordImportResultResponseBodyData extends $dara.Model {
  /**
   * @example
   * xxx
   */
  i18nKey?: string;
  illegalLengthKeywords?: string[];
  /**
   * @example
   * 1
   */
  invalidCount?: number;
  invalidKeywords?: string[];
  /**
   * @example
   * customxx_xxx
   */
  libId?: string;
  /**
   * @example
   * 100
   */
  progress?: number;
  /**
   * @example
   * 1
   */
  repeatCount?: number;
  repeatKeywords?: string[];
  /**
   * @example
   * 8
   */
  successCount?: number;
  /**
   * @example
   * xxx
   */
  tips?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      i18nKey: 'I18nKey',
      illegalLengthKeywords: 'IllegalLengthKeywords',
      invalidCount: 'InvalidCount',
      invalidKeywords: 'InvalidKeywords',
      libId: 'LibId',
      progress: 'Progress',
      repeatCount: 'RepeatCount',
      repeatKeywords: 'RepeatKeywords',
      successCount: 'SuccessCount',
      tips: 'Tips',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      i18nKey: 'string',
      illegalLengthKeywords: { 'type': 'array', 'itemType': 'string' },
      invalidCount: 'number',
      invalidKeywords: { 'type': 'array', 'itemType': 'string' },
      libId: 'string',
      progress: 'number',
      repeatCount: 'number',
      repeatKeywords: { 'type': 'array', 'itemType': 'string' },
      successCount: 'number',
      tips: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.illegalLengthKeywords)) {
      $dara.Model.validateArray(this.illegalLengthKeywords);
    }
    if(Array.isArray(this.invalidKeywords)) {
      $dara.Model.validateArray(this.invalidKeywords);
    }
    if(Array.isArray(this.repeatKeywords)) {
      $dara.Model.validateArray(this.repeatKeywords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKeywordLibResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-01-29 10:26:00
   */
  gmtModified?: string;
  /**
   * @example
   * 100
   */
  keywordCount?: string;
  /**
   * @example
   * customxx_xxx
   */
  libId?: string;
  libName?: string;
  /**
   * @example
   * 1825457112123838
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      gmtModified: 'GmtModified',
      keywordCount: 'KeywordCount',
      libId: 'LibId',
      libName: 'LibName',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtModified: 'string',
      keywordCount: 'string',
      libId: 'string',
      libName: 'string',
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

export class GetOssCheckStatResponseBodyBarChartY extends $dara.Model {
  data?: number[];
  /**
   * @example
   * document_detection
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssCheckStatResponseBodyBarChart extends $dara.Model {
  x?: string[];
  y?: GetOssCheckStatResponseBodyBarChartY[];
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: { 'type': 'array', 'itemType': 'string' },
      y: { 'type': 'array', 'itemType': GetOssCheckStatResponseBodyBarChartY },
    };
  }

  validate() {
    if(Array.isArray(this.x)) {
      $dara.Model.validateArray(this.x);
    }
    if(Array.isArray(this.y)) {
      $dara.Model.validateArray(this.y);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScanResultResponseBodyDataItemsResult extends $dara.Model {
  /**
   * @example
   * 50.0
   */
  confidence?: string;
  description?: string;
  /**
   * @example
   * politics
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      description: 'Description',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'string',
      description: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScanResultResponseBodyDataItems extends $dara.Model {
  attackLevel?: string;
  /**
   * @example
   * xxx
   */
  content?: string;
  /**
   * @remarks
   * dataId
   * 
   * @example
   * 4f27b8cc7c4544cb90b41882a5b36326
   */
  dataId?: string;
  /**
   * @example
   * 22
   */
  endTime?: string;
  /**
   * @example
   * xxx
   */
  extFeedback?: string;
  /**
   * @example
   * {}
   */
  extra?: { [key: string]: any };
  /**
   * @example
   * 20
   */
  frameCount?: number;
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  gmtCreate?: string;
  imageLabels?: { [key: string]: any }[];
  /**
   * @example
   * baselineCheck
   */
  imageService?: string;
  /**
   * @remarks
   * url
   * 
   * @example
   * https://www.aliyuncs.com/xxx.png
   */
  imageUrl?: string;
  /**
   * @example
   * nonLabel
   */
  labels?: string;
  noLabels?: string[];
  /**
   * @example
   * 1
   */
  offset?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  requestFrom?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  requestTime?: string;
  result?: GetScanResultResponseBodyDataItemsResult[];
  riskLevel?: string;
  riskTips?: string;
  riskWords?: string;
  /**
   * @example
   * {}
   */
  scanResult?: string;
  /**
   * @example
   * 25
   */
  score?: number;
  sensitiveLevel?: string;
  /**
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  /**
   * @example
   * 11
   */
  startTime?: string;
  /**
   * @example
   * review
   */
  suggestion?: string;
  /**
   * @example
   * vi_s_EbrXb716LyBpkfwxyX5xyh-1A6RY9
   */
  taskId?: string;
  textLabels?: { [key: string]: any }[];
  /**
   * @example
   * https://www.aliyuncs.com/xxx.png
   */
  thumbnail?: string;
  /**
   * @example
   * 00:00:40-00:00:42
   */
  timeStamp?: string;
  /**
   * @example
   * https://www.aliyuncs.com/xxx.png
   */
  url?: string;
  voiceLabels?: { [key: string]: any }[];
  /**
   * @example
   * True
   */
  voiceScanOpened?: boolean;
  /**
   * @example
   * live_stream_detection
   */
  voiceService?: string;
  static names(): { [key: string]: string } {
    return {
      attackLevel: 'AttackLevel',
      content: 'Content',
      dataId: 'DataId',
      endTime: 'EndTime',
      extFeedback: 'ExtFeedback',
      extra: 'Extra',
      frameCount: 'FrameCount',
      gmtCreate: 'GmtCreate',
      imageLabels: 'ImageLabels',
      imageService: 'ImageService',
      imageUrl: 'ImageUrl',
      labels: 'Labels',
      noLabels: 'NoLabels',
      offset: 'Offset',
      pageNum: 'PageNum',
      requestFrom: 'RequestFrom',
      requestId: 'RequestId',
      requestTime: 'RequestTime',
      result: 'Result',
      riskLevel: 'RiskLevel',
      riskTips: 'RiskTips',
      riskWords: 'RiskWords',
      scanResult: 'ScanResult',
      score: 'Score',
      sensitiveLevel: 'SensitiveLevel',
      serviceCode: 'ServiceCode',
      startTime: 'StartTime',
      suggestion: 'Suggestion',
      taskId: 'TaskId',
      textLabels: 'TextLabels',
      thumbnail: 'Thumbnail',
      timeStamp: 'TimeStamp',
      url: 'Url',
      voiceLabels: 'VoiceLabels',
      voiceScanOpened: 'VoiceScanOpened',
      voiceService: 'VoiceService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackLevel: 'string',
      content: 'string',
      dataId: 'string',
      endTime: 'string',
      extFeedback: 'string',
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      frameCount: 'number',
      gmtCreate: 'string',
      imageLabels: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      imageService: 'string',
      imageUrl: 'string',
      labels: 'string',
      noLabels: { 'type': 'array', 'itemType': 'string' },
      offset: 'number',
      pageNum: 'number',
      requestFrom: 'string',
      requestId: 'string',
      requestTime: 'string',
      result: { 'type': 'array', 'itemType': GetScanResultResponseBodyDataItemsResult },
      riskLevel: 'string',
      riskTips: 'string',
      riskWords: 'string',
      scanResult: 'string',
      score: 'number',
      sensitiveLevel: 'string',
      serviceCode: 'string',
      startTime: 'string',
      suggestion: 'string',
      taskId: 'string',
      textLabels: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      thumbnail: 'string',
      timeStamp: 'string',
      url: 'string',
      voiceLabels: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      voiceScanOpened: 'boolean',
      voiceService: 'string',
    };
  }

  validate() {
    if(this.extra) {
      $dara.Model.validateMap(this.extra);
    }
    if(Array.isArray(this.imageLabels)) {
      $dara.Model.validateArray(this.imageLabels);
    }
    if(Array.isArray(this.noLabels)) {
      $dara.Model.validateArray(this.noLabels);
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    if(Array.isArray(this.textLabels)) {
      $dara.Model.validateArray(this.textLabels);
    }
    if(Array.isArray(this.voiceLabels)) {
      $dara.Model.validateArray(this.voiceLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScanResultResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  items?: GetScanResultResponseBodyDataItems[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': GetScanResultResponseBodyDataItems },
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceConfigResponseBodyDataCustomServiceConf extends $dara.Model {
  keywordFilterLibs?: string[];
  keywordHitLibs?: string[];
  similarTextHitLibs?: string[];
  static names(): { [key: string]: string } {
    return {
      keywordFilterLibs: 'KeywordFilterLibs',
      keywordHitLibs: 'KeywordHitLibs',
      similarTextHitLibs: 'SimilarTextHitLibs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywordFilterLibs: { 'type': 'array', 'itemType': 'string' },
      keywordHitLibs: { 'type': 'array', 'itemType': 'string' },
      similarTextHitLibs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.keywordFilterLibs)) {
      $dara.Model.validateArray(this.keywordFilterLibs);
    }
    if(Array.isArray(this.keywordHitLibs)) {
      $dara.Model.validateArray(this.keywordHitLibs);
    }
    if(Array.isArray(this.similarTextHitLibs)) {
      $dara.Model.validateArray(this.similarTextHitLibs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceConfigResponseBodyData extends $dara.Model {
  customServiceConf?: GetServiceConfigResponseBodyDataCustomServiceConf;
  /**
   * @example
   * 2024-05-06 03:07:44
   */
  gmtModified?: string;
  /**
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @example
   * nickname_detection
   */
  serviceCode?: string;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 165379****31937
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      customServiceConf: 'CustomServiceConf',
      gmtModified: 'GmtModified',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customServiceConf: GetServiceConfigResponseBodyDataCustomServiceConf,
      gmtModified: 'string',
      resourceType: 'string',
      serviceCode: 'string',
      uid: 'string',
    };
  }

  validate() {
    if(this.customServiceConf && typeof (this.customServiceConf as any).validate === 'function') {
      (this.customServiceConf as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStockOssCheckTasksListResponseBodyItemsConfigScanServiceInfos extends $dara.Model {
  /**
   * @example
   * baselineCheck
   */
  copyFrom?: string;
  /**
   * @example
   * false
   */
  isCopy?: boolean;
  /**
   * @example
   * baselineCheck_01
   */
  serviceCode?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      copyFrom: 'CopyFrom',
      isCopy: 'IsCopy',
      serviceCode: 'ServiceCode',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copyFrom: 'string',
      isCopy: 'boolean',
      serviceCode: 'string',
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

export class GetStockOssCheckTasksListResponseBodyItemsConfig extends $dara.Model {
  callbackId?: number;
  /**
   * @example
   * false
   */
  distinctHistoryTasks?: boolean;
  /**
   * @example
   * 2024-01-10 11:42:31
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  executeDate?: number;
  /**
   * @example
   * 02:00:00
   */
  executeTime?: string;
  freeze?: boolean;
  freezeHighRisk1?: boolean;
  freezeHighRisk2?: boolean;
  freezeMediumRisk1?: boolean;
  freezeMediumRisk2?: boolean;
  freezeType?: string;
  /**
   * @example
   * all
   */
  prefixFilterType?: string;
  prefixFilters?: string[];
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * 10
   */
  scanLimit?: number;
  /**
   * @example
   * true
   */
  scanNoFileType?: boolean;
  /**
   * @example
   * 0
   */
  scanResourceType?: number;
  scanService?: string[];
  scanServiceInfos?: GetStockOssCheckTasksListResponseBodyItemsConfigScanServiceInfos[];
  /**
   * @example
   * 2023-12-21 15:30:19
   */
  startTime?: string;
  /**
   * @example
   * 0
   */
  taskCycle?: number;
  static names(): { [key: string]: string } {
    return {
      callbackId: 'CallbackId',
      distinctHistoryTasks: 'DistinctHistoryTasks',
      endTime: 'EndTime',
      executeDate: 'ExecuteDate',
      executeTime: 'ExecuteTime',
      freeze: 'Freeze',
      freezeHighRisk1: 'FreezeHighRisk1',
      freezeHighRisk2: 'FreezeHighRisk2',
      freezeMediumRisk1: 'FreezeMediumRisk1',
      freezeMediumRisk2: 'FreezeMediumRisk2',
      freezeType: 'FreezeType',
      prefixFilterType: 'PrefixFilterType',
      prefixFilters: 'PrefixFilters',
      priority: 'Priority',
      scanLimit: 'ScanLimit',
      scanNoFileType: 'ScanNoFileType',
      scanResourceType: 'ScanResourceType',
      scanService: 'ScanService',
      scanServiceInfos: 'ScanServiceInfos',
      startTime: 'StartTime',
      taskCycle: 'TaskCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackId: 'number',
      distinctHistoryTasks: 'boolean',
      endTime: 'string',
      executeDate: 'number',
      executeTime: 'string',
      freeze: 'boolean',
      freezeHighRisk1: 'boolean',
      freezeHighRisk2: 'boolean',
      freezeMediumRisk1: 'boolean',
      freezeMediumRisk2: 'boolean',
      freezeType: 'string',
      prefixFilterType: 'string',
      prefixFilters: { 'type': 'array', 'itemType': 'string' },
      priority: 'number',
      scanLimit: 'number',
      scanNoFileType: 'boolean',
      scanResourceType: 'number',
      scanService: { 'type': 'array', 'itemType': 'string' },
      scanServiceInfos: { 'type': 'array', 'itemType': GetStockOssCheckTasksListResponseBodyItemsConfigScanServiceInfos },
      startTime: 'string',
      taskCycle: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.prefixFilters)) {
      $dara.Model.validateArray(this.prefixFilters);
    }
    if(Array.isArray(this.scanService)) {
      $dara.Model.validateArray(this.scanService);
    }
    if(Array.isArray(this.scanServiceInfos)) {
      $dara.Model.validateArray(this.scanServiceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStockOssCheckTasksListResponseBodyItems extends $dara.Model {
  /**
   * @example
   * tmp
   */
  buckets?: string;
  config?: GetStockOssCheckTasksListResponseBodyItemsConfig;
  /**
   * @example
   * 2024-01-10 11:42:31
   */
  endTime?: string;
  /**
   * @example
   * 2
   */
  finishNum?: number;
  /**
   * @example
   * false
   */
  isInc?: boolean;
  /**
   * @example
   * 02:00:00
   */
  lastExecuteDate?: string;
  /**
   * @example
   * video
   */
  mediaType?: number;
  /**
   * @example
   * 02:00:00
   */
  nextExecuteDate?: string;
  /**
   * @example
   * 10
   */
  objectNum?: number;
  /**
   * @example
   * 10
   */
  searchNum?: number;
  /**
   * @example
   * 2023-12-21 15:30:19
   */
  startTime?: string;
  /**
   * @example
   * 4
   */
  status?: number;
  /**
   * @example
   * P_XHDUS
   */
  taskId?: string;
  taskName?: string;
  /**
   * @example
   * batch
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      buckets: 'Buckets',
      config: 'Config',
      endTime: 'EndTime',
      finishNum: 'FinishNum',
      isInc: 'IsInc',
      lastExecuteDate: 'LastExecuteDate',
      mediaType: 'MediaType',
      nextExecuteDate: 'NextExecuteDate',
      objectNum: 'ObjectNum',
      searchNum: 'SearchNum',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buckets: 'string',
      config: GetStockOssCheckTasksListResponseBodyItemsConfig,
      endTime: 'string',
      finishNum: 'number',
      isInc: 'boolean',
      lastExecuteDate: 'string',
      mediaType: 'number',
      nextExecuteDate: 'string',
      objectNum: 'number',
      searchNum: 'number',
      startTime: 'string',
      status: 'number',
      taskId: 'string',
      taskName: 'string',
      taskType: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextScanResultResponseBodyDataItemsResult extends $dara.Model {
  /**
   * @example
   * 25.0
   */
  confidence?: number;
  description?: string;
  /**
   * @example
   * political_n
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      description: 'Description',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      description: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextScanResultResponseBodyDataItems extends $dara.Model {
  bailianRequestId?: string;
  content?: string;
  /**
   * @example
   * miss
   */
  extFeedback?: string;
  /**
   * @example
   * {}
   */
  extra?: { [key: string]: any };
  /**
   * @example
   * 2023-07-11 14:21:36
   */
  gmtCreate?: string;
  /**
   * @example
   * nonLabel
   */
  labels?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * 2023-07-11 14:21:36
   */
  requestTime?: string;
  result?: GetTextScanResultResponseBodyDataItemsResult[];
  riskLevel?: string;
  /**
   * @example
   * {}
   */
  scanResult?: string;
  /**
   * @example
   * 20
   */
  score?: number;
  /**
   * @example
   * nickname_detection
   */
  serviceCode?: string;
  /**
   * @example
   * review
   */
  suggestion?: string;
  /**
   * @example
   * txtwkgb******AsYNXoJswy-1Aa1Qk
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      bailianRequestId: 'BailianRequestId',
      content: 'Content',
      extFeedback: 'ExtFeedback',
      extra: 'Extra',
      gmtCreate: 'GmtCreate',
      labels: 'Labels',
      requestId: 'RequestId',
      requestTime: 'RequestTime',
      result: 'Result',
      riskLevel: 'RiskLevel',
      scanResult: 'ScanResult',
      score: 'Score',
      serviceCode: 'ServiceCode',
      suggestion: 'Suggestion',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bailianRequestId: 'string',
      content: 'string',
      extFeedback: 'string',
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreate: 'string',
      labels: 'string',
      requestId: 'string',
      requestTime: 'string',
      result: { 'type': 'array', 'itemType': GetTextScanResultResponseBodyDataItemsResult },
      riskLevel: 'string',
      scanResult: 'string',
      score: 'number',
      serviceCode: 'string',
      suggestion: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.extra) {
      $dara.Model.validateMap(this.extra);
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextScanResultResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  items?: GetTextScanResultResponseBodyDataItems[];
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': GetTextScanResultResponseBodyDataItems },
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserBuyStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Bid。
   * 
   * @example
   * 26842
   */
  bid?: number;
  /**
   * @example
   * True
   */
  buy?: boolean;
  /**
   * @example
   * False
   */
  indebt?: boolean;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      buy: 'Buy',
      indebt: 'Indebt',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'number',
      buy: 'boolean',
      indebt: 'boolean',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnswerLibResponseBodyData extends $dara.Model {
  /**
   * @example
   * 100
   */
  answerCount?: number;
  /**
   * @example
   * 2024-06-03 18:15:01
   */
  gmtModified?: string;
  /**
   * @example
   * alxxx
   */
  libId?: string;
  libName?: string;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 1643953****74290
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      answerCount: 'AnswerCount',
      gmtModified: 'GmtModified',
      libId: 'LibId',
      libName: 'LibName',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerCount: 'number',
      gmtModified: 'string',
      libId: 'string',
      libName: 'string',
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

export class ListCallbackResponseBodyData extends $dara.Model {
  /**
   * @example
   * SHA256
   */
  cryptType?: string;
  /**
   * @example
   * 2024-06-03 15:20:14
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-06-03 15:20:14
   */
  gmtModified?: string;
  /**
   * @example
   * 11234
   */
  id?: number;
  name?: string;
  /**
   * @example
   * all
   */
  scope?: string;
  /**
   * @remarks
   * Seed。
   * 
   * @example
   * cbupVnpBjkgjFxfINMHKkrHS-1zZPUm
   */
  seed?: string;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 16537*****831937
   */
  uid?: string;
  /**
   * @example
   * https://console.aliyun.com/
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      cryptType: 'CryptType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      scope: 'Scope',
      seed: 'Seed',
      uid: 'Uid',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cryptType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      scope: 'string',
      seed: 'string',
      uid: 'string',
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

export class ListImageLibResponseBodyLibList extends $dara.Model {
  comment?: string;
  /**
   * @example
   * 1
   */
  freeInspection?: number;
  /**
   * @example
   * 2024-06-03 15:20:14
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-06-03 15:20:14
   */
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  imageNum?: number;
  /**
   * @example
   * custom_xxxx
   */
  libId?: string;
  libName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      freeInspection: 'FreeInspection',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      imageNum: 'ImageNum',
      libId: 'LibId',
      libName: 'LibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      freeInspection: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      imageNum: 'number',
      libId: 'string',
      libName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesFromLibResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 2022-11-30 16:30:29
   */
  gmtCreate?: string;
  /**
   * @example
   * 112
   */
  imageId?: string;
  /**
   * @example
   * https://oss-cip-shanghai.oss-cn-shanghai.aliyuncs.com/image/upload/IMG_2123.jpg
   */
  imageUrl?: string;
  /**
   * @example
   * https://oss-cip-shanghai.oss-cn-shanghai.aliyuncs.com/image/upload/IMG_2123.jpg
   */
  thumbnailUrl?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      thumbnailUrl: 'ThumbnailUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      imageId: 'string',
      imageUrl: 'string',
      thumbnailUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeywordLibsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2022-11-30 16:30:29
   */
  gmtModified?: string;
  /**
   * @example
   * 10
   */
  keywordCount?: string;
  /**
   * @example
   * custom_xxxxx
   */
  libId?: string;
  libName?: string;
  serviceCodes?: string;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 19964*****086772
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      gmtModified: 'GmtModified',
      keywordCount: 'KeywordCount',
      libId: 'LibId',
      libName: 'LibName',
      serviceCodes: 'ServiceCodes',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtModified: 'string',
      keywordCount: 'string',
      libId: 'string',
      libName: 'string',
      serviceCodes: 'string',
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

export class ListKeywordsResponseBodyDataItems extends $dara.Model {
  /**
   * @example
   * 2023-06-03 14:43:03
   */
  gmtCreate?: string;
  /**
   * @example
   * 2023-06-03 14:43:03
   */
  gmtModified?: string;
  /**
   * @example
   * 112
   */
  id?: number;
  /**
   * @example
   * custom_xxxx
   */
  keywordLibId?: string;
  /**
   * @example
   * 4205334
   */
  keywordMd5Id?: number;
  word?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      keywordLibId: 'KeywordLibId',
      keywordMd5Id: 'KeywordMd5Id',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      keywordLibId: 'string',
      keywordMd5Id: 'number',
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

export class ListKeywordsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  items?: ListKeywordsResponseBodyDataItems[];
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 23
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': ListKeywordsResponseBodyDataItems },
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOssCheckResultResponseBodyItems extends $dara.Model {
  /**
   * @example
   * tmp
   */
  bucket?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * audio
   */
  contentType?: string;
  /**
   * @example
   * audio_media_detection
   */
  copyFrom?: string;
  freezeStatus?: string;
  freezeType?: string;
  /**
   * @example
   * http://www.aliyuncs.com/test.jpg
   */
  imageUrl?: string;
  /**
   * @example
   * true
   */
  isCopy?: boolean;
  /**
   * @example
   * dhT20X2310
   */
  jobName?: string;
  labels?: string[];
  labels2?: string[];
  /**
   * @example
   * 54416c9b159df4a60ae03c04ccb94cb5
   */
  md5?: string;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * 1713014531569_958.png.jpeg
   */
  object?: string;
  riskLevel?: string;
  riskLevel0?: string;
  riskLevel2?: string;
  /**
   * @example
   * {}
   */
  scanResult?: string;
  /**
   * @example
   * audio_media_detection_01
   */
  serviceCode?: string;
  serviceName?: string;
  /**
   * @example
   * EP6TI7_au_Zo25ITvCbkocNuF801QOQX
   */
  taskId?: string;
  /**
   * @example
   * http://www.aliyuncs.com/test.mp3
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      code: 'Code',
      contentType: 'ContentType',
      copyFrom: 'CopyFrom',
      freezeStatus: 'FreezeStatus',
      freezeType: 'FreezeType',
      imageUrl: 'ImageUrl',
      isCopy: 'IsCopy',
      jobName: 'JobName',
      labels: 'Labels',
      labels2: 'Labels2',
      md5: 'Md5',
      msg: 'Msg',
      object: 'Object',
      riskLevel: 'RiskLevel',
      riskLevel0: 'RiskLevel0',
      riskLevel2: 'RiskLevel2',
      scanResult: 'ScanResult',
      serviceCode: 'ServiceCode',
      serviceName: 'ServiceName',
      taskId: 'TaskId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      code: 'string',
      contentType: 'string',
      copyFrom: 'string',
      freezeStatus: 'string',
      freezeType: 'string',
      imageUrl: 'string',
      isCopy: 'boolean',
      jobName: 'string',
      labels: { 'type': 'array', 'itemType': 'string' },
      labels2: { 'type': 'array', 'itemType': 'string' },
      md5: 'string',
      msg: 'string',
      object: 'string',
      riskLevel: 'string',
      riskLevel0: 'string',
      riskLevel2: 'string',
      scanResult: 'string',
      serviceCode: 'string',
      serviceName: 'string',
      taskId: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.labels2)) {
      $dara.Model.validateArray(this.labels2);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceConfigsResponseBodyDataCustomServiceConfRulesImageScanRule extends $dara.Model {
  services?: string[];
  static names(): { [key: string]: string } {
    return {
      services: 'Services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      services: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceConfigsResponseBodyDataCustomServiceConfRulesTextScanRule extends $dara.Model {
  services?: string[];
  static names(): { [key: string]: string } {
    return {
      services: 'Services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      services: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceConfigsResponseBodyDataCustomServiceConfRules extends $dara.Model {
  imageScanRule?: ListServiceConfigsResponseBodyDataCustomServiceConfRulesImageScanRule;
  /**
   * @example
   * 1
   */
  index?: number;
  textScanRule?: ListServiceConfigsResponseBodyDataCustomServiceConfRulesTextScanRule;
  static names(): { [key: string]: string } {
    return {
      imageScanRule: 'ImageScanRule',
      index: 'Index',
      textScanRule: 'TextScanRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageScanRule: ListServiceConfigsResponseBodyDataCustomServiceConfRulesImageScanRule,
      index: 'number',
      textScanRule: ListServiceConfigsResponseBodyDataCustomServiceConfRulesTextScanRule,
    };
  }

  validate() {
    if(this.imageScanRule && typeof (this.imageScanRule as any).validate === 'function') {
      (this.imageScanRule as any).validate();
    }
    if(this.textScanRule && typeof (this.textScanRule as any).validate === 'function') {
      (this.textScanRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceConfigsResponseBodyDataCustomServiceConf extends $dara.Model {
  /**
   * @example
   * audio_media_detection
   */
  audioService?: string;
  imageService?: string[];
  keywordFilterLibs?: string[];
  keywordHitLibs?: string[];
  rules?: ListServiceConfigsResponseBodyDataCustomServiceConfRules[];
  similarTextHitLibs?: string[];
  static names(): { [key: string]: string } {
    return {
      audioService: 'AudioService',
      imageService: 'ImageService',
      keywordFilterLibs: 'KeywordFilterLibs',
      keywordHitLibs: 'KeywordHitLibs',
      rules: 'Rules',
      similarTextHitLibs: 'SimilarTextHitLibs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioService: 'string',
      imageService: { 'type': 'array', 'itemType': 'string' },
      keywordFilterLibs: { 'type': 'array', 'itemType': 'string' },
      keywordHitLibs: { 'type': 'array', 'itemType': 'string' },
      rules: { 'type': 'array', 'itemType': ListServiceConfigsResponseBodyDataCustomServiceConfRules },
      similarTextHitLibs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.imageService)) {
      $dara.Model.validateArray(this.imageService);
    }
    if(Array.isArray(this.keywordFilterLibs)) {
      $dara.Model.validateArray(this.keywordFilterLibs);
    }
    if(Array.isArray(this.keywordHitLibs)) {
      $dara.Model.validateArray(this.keywordHitLibs);
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    if(Array.isArray(this.similarTextHitLibs)) {
      $dara.Model.validateArray(this.similarTextHitLibs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceConfigsResponseBodyData extends $dara.Model {
  classify?: string;
  /**
   * @example
   * nickname_detection
   */
  copyFrom?: string;
  customServiceConf?: ListServiceConfigsResponseBodyDataCustomServiceConf;
  /**
   * @example
   * 2023-07-11 15:40:04
   */
  gmtModified?: string;
  /**
   * @example
   * {}
   */
  option?: { [key: string]: any };
  /**
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @example
   * nickname_detection
   */
  serviceCode?: string;
  serviceDesc?: string;
  serviceName?: string;
  /**
   * @example
   * plus
   */
  serviceType?: string;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 1674*****0071291
   */
  uid?: string;
  useStatus?: string;
  static names(): { [key: string]: string } {
    return {
      classify: 'Classify',
      copyFrom: 'CopyFrom',
      customServiceConf: 'CustomServiceConf',
      gmtModified: 'GmtModified',
      option: 'Option',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      serviceDesc: 'ServiceDesc',
      serviceName: 'ServiceName',
      serviceType: 'ServiceType',
      uid: 'Uid',
      useStatus: 'UseStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classify: 'string',
      copyFrom: 'string',
      customServiceConf: ListServiceConfigsResponseBodyDataCustomServiceConf,
      gmtModified: 'string',
      option: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceType: 'string',
      serviceCode: 'string',
      serviceDesc: 'string',
      serviceName: 'string',
      serviceType: 'string',
      uid: 'string',
      useStatus: 'string',
    };
  }

  validate() {
    if(this.customServiceConf && typeof (this.customServiceConf as any).validate === 'function') {
      (this.customServiceConf as any).validate();
    }
    if(this.option) {
      $dara.Model.validateMap(this.option);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnswerSampleByPageResponseBodyItems extends $dara.Model {
  answer?: string;
  /**
   * @example
   * 2023-07-31 06:16:06
   */
  gmtCreate?: string;
  /**
   * @example
   * 1666
   */
  id?: number;
  /**
   * @example
   * custom_xxxx
   */
  libId?: string;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 104813*****2399
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      libId: 'LibId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      gmtCreate: 'string',
      id: 'number',
      libId: 'string',
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

export class QueryCallbackByPageResponseBodyItems extends $dara.Model {
  /**
   * @example
   * SHA256
   */
  cryptType?: string;
  /**
   * @example
   * 2024-06-03 15:20:14
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-06-03 15:20:14
   */
  gmtModified?: string;
  /**
   * @example
   * 1697
   */
  id?: number;
  name?: string;
  /**
   * @example
   * all
   */
  scope?: string;
  /**
   * @remarks
   * Seed。
   * 
   * @example
   * cb6gYS8GXj4Vn4Y4FN0Y8R5M-1x46Mq
   */
  seed?: string;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 12161*****398900
   */
  uid?: string;
  /**
   * @example
   * https://console.aliyun.com/
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      cryptType: 'CryptType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      scope: 'Scope',
      seed: 'Seed',
      uid: 'Uid',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cryptType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      scope: 'string',
      seed: 'string',
      uid: 'string',
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

export class AddAnswerSampleRequest extends $dara.Model {
  /**
   * @example
   * alxxxx
   */
  libId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * data/xxx.xlsx
   */
  sampleObject?: string;
  samples?: string;
  static names(): { [key: string]: string } {
    return {
      libId: 'LibId',
      regionId: 'RegionId',
      sampleObject: 'SampleObject',
      samples: 'Samples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libId: 'string',
      regionId: 'string',
      sampleObject: 'string',
      samples: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAnswerSampleResponseBody extends $dara.Model {
  /**
   * @example
   * alxxxx
   */
  libId?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  result?: AddAnswerSampleResponseBodyResult;
  /**
   * @example
   * alAxbbxxxx-xxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      libId: 'LibId',
      requestId: 'RequestId',
      result: 'Result',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libId: 'string',
      requestId: 'string',
      result: AddAnswerSampleResponseBodyResult,
      taskId: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAnswerSampleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddAnswerSampleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddAnswerSampleResponseBody,
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

export class AddImageLibRequest extends $dara.Model {
  comment?: string;
  libName?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      libName: 'LibName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      libName: 'string',
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

export class AddImageLibResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  msg?: string;
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      httpStatusCode: 'number',
      msg: 'string',
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

export class AddImageLibResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddImageLibResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddImageLibResponseBody,
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

export class AddImages2LibRequest extends $dara.Model {
  /**
   * @example
   * upload/ea7a98f9-f8bd-4905-a79b-963c9da419c5.jpg
   */
  imgUrl?: string;
  /**
   * @example
   * xxx
   */
  libId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      imgUrl: 'ImgUrl',
      libId: 'LibId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imgUrl: 'string',
      libId: 'string',
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

export class AddImages2LibResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: AddImages2LibResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  msg?: string;
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: AddImages2LibResponseBodyData,
      httpStatusCode: 'number',
      msg: 'string',
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

export class AddImages2LibResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddImages2LibResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddImages2LibResponseBody,
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

export class AddKeywordLibRequest extends $dara.Model {
  keywords?: string;
  /**
   * @example
   * upload/1e5353c0-0d91-40ba-9d41-ae7abd3fe561.txt
   */
  keywordsObject?: string;
  libName?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      keywords: 'Keywords',
      keywordsObject: 'KeywordsObject',
      libName: 'LibName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: 'string',
      keywordsObject: 'string',
      libName: 'string',
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

export class AddKeywordLibResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: AddKeywordLibResponseBodyData;
  /**
   * @example
   * OK
   */
  msg?: string;
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: AddKeywordLibResponseBodyData,
      msg: 'string',
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

export class AddKeywordLibResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddKeywordLibResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddKeywordLibResponseBody,
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

export class AddKeywordsRequest extends $dara.Model {
  keywords?: string;
  /**
   * @example
   * upload/1e5353c0-0d91-40ba-9d41-ae7abd3fe561.txt
   */
  keywordsObject?: string;
  /**
   * @example
   * customxx_xxxx
   */
  libId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      keywords: 'Keywords',
      keywordsObject: 'KeywordsObject',
      libId: 'LibId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: 'string',
      keywordsObject: 'string',
      libId: 'string',
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

export class AddKeywordsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: AddKeywordsResponseBodyData;
  /**
   * @example
   * OK
   */
  msg?: string;
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: AddKeywordsResponseBodyData,
      msg: 'string',
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

export class AddKeywordsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddKeywordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddKeywordsResponseBody,
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

export class AddKeywordsToLibRequest extends $dara.Model {
  keywords?: string;
  /**
   * @example
   * upload/1e5353c0-0d91-40ba-9d41-ae7abd3fe561.txt
   */
  keywordsObject?: string;
  /**
   * @example
   * customxx_xxxx
   */
  libId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      keywords: 'Keywords',
      keywordsObject: 'KeywordsObject',
      libId: 'LibId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: 'string',
      keywordsObject: 'string',
      libId: 'string',
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

export class AddKeywordsToLibResponseBody extends $dara.Model {
  data?: AddKeywordsToLibResponseBodyData;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AddKeywordsToLibResponseBodyData,
      requestId: 'string',
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

export class AddKeywordsToLibResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddKeywordsToLibResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddKeywordsToLibResponseBody,
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

export class CancelStockOssCheckTaskRequest extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * P_UNYVB
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

export class CancelStockOssCheckTaskResponseBody extends $dara.Model {
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

export class CancelStockOssCheckTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelStockOssCheckTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelStockOssCheckTaskResponseBody,
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

export class CopyServiceConfigRequest extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @example
   * nickname_detection
   */
  serviceCode?: string;
  serviceDesc?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      serviceDesc: 'ServiceDesc',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
      serviceDesc: 'string',
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

export class CopyServiceConfigResponseBody extends $dara.Model {
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

export class CopyServiceConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CopyServiceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CopyServiceConfigResponseBody,
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

export class CreatStockOssCheckTaskRequest extends $dara.Model {
  /**
   * @example
   * [{\\"Bucket\\":\\"bucket01-test\\",\\"Region\\":\\"cn-beijing\\"}]
   */
  buckets?: string;
  /**
   * @example
   * 1751
   */
  callbackId?: string;
  /**
   * @example
   * true
   */
  distinctHistoryTasks?: boolean;
  /**
   * @example
   * 2023-12-18 10:08:00
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  executeDate?: number;
  /**
   * @example
   * 01:09:30-01:19:30
   */
  executeTime?: string;
  freeze?: boolean;
  freezeHighRisk1?: boolean;
  freezeHighRisk2?: boolean;
  freezeMediumRisk1?: boolean;
  freezeMediumRisk2?: boolean;
  freezeType?: string;
  /**
   * @example
   * false
   */
  isInc?: boolean;
  /**
   * @example
   * 1
   */
  mediaType?: number;
  /**
   * @example
   * all
   */
  prefixFilterType?: string;
  /**
   * @example
   * dir1,dir2
   */
  prefixFilters?: string;
  /**
   * @example
   * 0
   */
  priority?: number;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * 10
   */
  scanLimit?: number;
  /**
   * @example
   * true
   */
  scanNoFileType?: boolean;
  /**
   * @example
   * 0
   */
  scanResourceType?: string;
  /**
   * @example
   * baselineCheck
   */
  scanService?: string;
  /**
   * @example
   * 2023-12-17 10:08:00
   */
  startTime?: string;
  /**
   * @example
   * 0
   */
  taskCycle?: number;
  taskName?: string;
  /**
   * @example
   * batch
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      buckets: 'Buckets',
      callbackId: 'CallbackId',
      distinctHistoryTasks: 'DistinctHistoryTasks',
      endTime: 'EndTime',
      executeDate: 'ExecuteDate',
      executeTime: 'ExecuteTime',
      freeze: 'Freeze',
      freezeHighRisk1: 'FreezeHighRisk1',
      freezeHighRisk2: 'FreezeHighRisk2',
      freezeMediumRisk1: 'FreezeMediumRisk1',
      freezeMediumRisk2: 'FreezeMediumRisk2',
      freezeType: 'FreezeType',
      isInc: 'IsInc',
      mediaType: 'MediaType',
      prefixFilterType: 'PrefixFilterType',
      prefixFilters: 'PrefixFilters',
      priority: 'Priority',
      regionId: 'RegionId',
      scanLimit: 'ScanLimit',
      scanNoFileType: 'ScanNoFileType',
      scanResourceType: 'ScanResourceType',
      scanService: 'ScanService',
      startTime: 'StartTime',
      taskCycle: 'TaskCycle',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buckets: 'string',
      callbackId: 'string',
      distinctHistoryTasks: 'boolean',
      endTime: 'string',
      executeDate: 'number',
      executeTime: 'string',
      freeze: 'boolean',
      freezeHighRisk1: 'boolean',
      freezeHighRisk2: 'boolean',
      freezeMediumRisk1: 'boolean',
      freezeMediumRisk2: 'boolean',
      freezeType: 'string',
      isInc: 'boolean',
      mediaType: 'number',
      prefixFilterType: 'string',
      prefixFilters: 'string',
      priority: 'number',
      regionId: 'string',
      scanLimit: 'number',
      scanNoFileType: 'boolean',
      scanResourceType: 'string',
      scanService: 'string',
      startTime: 'string',
      taskCycle: 'number',
      taskName: 'string',
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

export class CreatStockOssCheckTaskResponseBody extends $dara.Model {
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

export class CreatStockOssCheckTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatStockOssCheckTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatStockOssCheckTaskResponseBody,
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

export class CreateAnswerLibRequest extends $dara.Model {
  libName?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * oss-cip-shanghai
   */
  sampleBucket?: string;
  /**
   * @example
   * data/xxx.xlsx
   */
  sampleObject?: string;
  samples?: string;
  static names(): { [key: string]: string } {
    return {
      libName: 'LibName',
      regionId: 'RegionId',
      sampleBucket: 'SampleBucket',
      sampleObject: 'SampleObject',
      samples: 'Samples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libName: 'string',
      regionId: 'string',
      sampleBucket: 'string',
      sampleObject: 'string',
      samples: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAnswerLibResponseBody extends $dara.Model {
  /**
   * @example
   * alxxxx
   */
  libId?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  result?: CreateAnswerLibResponseBodyResult;
  /**
   * @example
   * alAxbbxxxx-xxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      libId: 'LibId',
      requestId: 'RequestId',
      result: 'Result',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libId: 'string',
      requestId: 'string',
      result: CreateAnswerLibResponseBodyResult,
      taskId: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAnswerLibResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAnswerLibResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAnswerLibResponseBody,
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

export class CreateCallbackRequest extends $dara.Model {
  /**
   * @example
   * SHA256
   */
  cryptType?: string;
  name?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * all
   */
  scope?: string;
  /**
   * @example
   * https://console.aliyun.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      cryptType: 'CryptType',
      name: 'Name',
      regionId: 'RegionId',
      scope: 'Scope',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cryptType: 'string',
      name: 'string',
      regionId: 'string',
      scope: 'string',
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

export class CreateCallbackResponseBody extends $dara.Model {
  /**
   * @example
   * True
   */
  data?: number;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
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

export class CreateCallbackResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCallbackResponseBody,
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

export class CreatePreCheckRequest extends $dara.Model {
  /**
   * @example
   * [{\\"Bucket\\":\\"bucket01-test\\",\\"Region\\":\\"cn-beijing\\"}]
   */
  buckets?: string;
  /**
   * @example
   * true
   */
  distinctHistoryTasks?: boolean;
  /**
   * @example
   * 2023-12-18 10:08:00
   */
  endTime?: string;
  /**
   * @example
   * false
   */
  isInc?: boolean;
  /**
   * @example
   * 1
   */
  mediaType?: number;
  /**
   * @example
   * all
   */
  prefixFilterType?: string;
  /**
   * @example
   * dir1,dir2
   */
  prefixFilters?: string;
  /**
   * @example
   * 0
   */
  priority?: number;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * 10
   */
  scanLimit?: number;
  /**
   * @example
   * true
   */
  scanNoFileType?: boolean;
  /**
   * @example
   * baselineCheck
   */
  scanService?: string;
  /**
   * @example
   * 2023-12-17 10:08:00
   */
  startTime?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      buckets: 'Buckets',
      distinctHistoryTasks: 'DistinctHistoryTasks',
      endTime: 'EndTime',
      isInc: 'IsInc',
      mediaType: 'MediaType',
      prefixFilterType: 'PrefixFilterType',
      prefixFilters: 'PrefixFilters',
      priority: 'Priority',
      regionId: 'RegionId',
      scanLimit: 'ScanLimit',
      scanNoFileType: 'ScanNoFileType',
      scanService: 'ScanService',
      startTime: 'StartTime',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buckets: 'string',
      distinctHistoryTasks: 'boolean',
      endTime: 'string',
      isInc: 'boolean',
      mediaType: 'number',
      prefixFilterType: 'string',
      prefixFilters: 'string',
      priority: 'number',
      regionId: 'string',
      scanLimit: 'number',
      scanNoFileType: 'boolean',
      scanService: 'string',
      startTime: 'string',
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

export class CreatePreCheckResponseBody extends $dara.Model {
  data?: { [key: string]: boolean };
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'boolean' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePreCheckResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePreCheckResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePreCheckResponseBody,
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

export class DeleteAnswerLibRequest extends $dara.Model {
  /**
   * @example
   * alxxx
   */
  libId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      libId: 'LibId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libId: 'string',
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

export class DeleteAnswerLibResponseBody extends $dara.Model {
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

export class DeleteAnswerLibResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAnswerLibResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAnswerLibResponseBody,
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

export class DeleteAnswerSampleRequest extends $dara.Model {
  /**
   * @example
   * [15463605]
   */
  ids?: string;
  /**
   * @example
   * alxxx
   */
  libId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      libId: 'LibId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      libId: 'string',
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

export class DeleteAnswerSampleResponseBody extends $dara.Model {
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

export class DeleteAnswerSampleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAnswerSampleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAnswerSampleResponseBody,
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

export class DeleteCallbackRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1480
   */
  id?: number;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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

export class DeleteCallbackResponseBody extends $dara.Model {
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

export class DeleteCallbackResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCallbackResponseBody,
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

export class DeleteFeatureConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Label value, customer-defined
   * 
   * @example
   * __config__
   */
  field?: string;
  /**
   * @remarks
   * Region
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Resource type.
   * 
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @remarks
   * Service code.
   * 
   * @example
   * llm_query_moderation
   */
  serviceCode?: string;
  /**
   * @remarks
   * Type
   * 
   * @example
   * custom_llm_template
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      regionId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
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

export class DeleteFeatureConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Return result.
   * 
   * @example
   * True
   */
  data?: boolean;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message of this request.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * ID assigned by the backend, used to uniquely identify a request. Can be used for troubleshooting.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * Success indicator.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      httpStatusCode: 'number',
      msg: 'string',
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

export class DeleteFeatureConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFeatureConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFeatureConfigResponseBody,
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

export class DeleteImagesFromLibRequest extends $dara.Model {
  /**
   * @example
   * [158794]
   */
  imageIds?: string;
  /**
   * @example
   * customxx_xxxx
   */
  libId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageIds: 'ImageIds',
      libId: 'LibId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageIds: 'string',
      libId: 'string',
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

export class DeleteImagesFromLibResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  msg?: string;
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      httpStatusCode: 'number',
      msg: 'string',
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

export class DeleteImagesFromLibResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteImagesFromLibResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteImagesFromLibResponseBody,
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

export class DeleteKeywordRequest extends $dara.Model {
  keywordIdList?: string;
  /**
   * @example
   * [16754493]
   */
  keywordIds?: string;
  /**
   * @example
   * customxx_xxxx
   */
  libId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      keywordIdList: 'KeywordIdList',
      keywordIds: 'KeywordIds',
      libId: 'LibId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywordIdList: 'string',
      keywordIds: 'string',
      libId: 'string',
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

export class DeleteKeywordResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * OK
   */
  msg?: string;
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      msg: 'string',
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

export class DeleteKeywordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteKeywordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteKeywordResponseBody,
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

export class DeleteKeywordLibRequest extends $dara.Model {
  /**
   * @example
   * customxx_xxxx
   */
  libId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      libId: 'LibId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libId: 'string',
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

export class DeleteKeywordLibResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * OK
   */
  msg?: string;
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      msg: 'string',
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

export class DeleteKeywordLibResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteKeywordLibResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteKeywordLibResponseBody,
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

export class ExportAnswerSampleRequest extends $dara.Model {
  /**
   * @example
   * alxxx
   */
  libId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      libId: 'LibId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libId: 'string',
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

export class ExportAnswerSampleResponseBody extends $dara.Model {
  /**
   * @example
   * True
   */
  data?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

export class ExportAnswerSampleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportAnswerSampleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportAnswerSampleResponseBody,
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

export class ExportCipStatsRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  byMonth?: boolean;
  /**
   * @example
   * 2024-04-16 09:00:00
   */
  endDate?: string;
  exportType?: string;
  /**
   * @example
   * xx
   */
  label?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * text
   */
  resourceType?: string;
  serviceCode?: string;
  /**
   * @example
   * 2024-04-15 09:00:00
   */
  startDate?: string;
  /**
   * @example
   * 268220485413130979
   */
  subUid?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      byMonth: 'ByMonth',
      endDate: 'EndDate',
      exportType: 'ExportType',
      label: 'Label',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      startDate: 'StartDate',
      subUid: 'SubUid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byMonth: 'boolean',
      endDate: 'string',
      exportType: 'string',
      label: 'string',
      regionId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
      startDate: 'string',
      subUid: 'string',
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

export class ExportCipStatsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * https://oss-cip-shanghai.oss-cn-shanghai.aliyuncs.com/portal_data/production/cipStat/text/statistics1720597246783.xlsx
   */
  data?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  msg?: string;
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      httpStatusCode: 'number',
      msg: 'string',
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

export class ExportCipStatsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportCipStatsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportCipStatsResponseBody,
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

export class ExportKeywordRequest extends $dara.Model {
  /**
   * @example
   * customxx_xxxx
   */
  libId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      libId: 'LibId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libId: 'string',
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

export class ExportKeywordResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * https://oss-cip-shanghai.oss-cn-shanghai.aliyuncs.com/console_data/export/production/keyword/export_keywordO4ee1Bok1R8IIDVpcT9viU-1xxWr
   */
  data?: string;
  /**
   * @example
   * OK
   */
  msg?: string;
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      msg: 'string',
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

export class ExportKeywordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportKeywordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportKeywordResponseBody,
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

export class ExportOssCheckStatRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  byMonth?: boolean;
  /**
   * @example
   * 2024-03-11 10:00:00
   */
  endDate?: string;
  /**
   * @example
   * P_UX0K5X
   */
  parentTaskId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * 2024-03-10 10:00:00
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      byMonth: 'ByMonth',
      endDate: 'EndDate',
      parentTaskId: 'ParentTaskId',
      regionId: 'RegionId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byMonth: 'boolean',
      endDate: 'string',
      parentTaskId: 'string',
      regionId: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportOssCheckStatResponseBody extends $dara.Model {
  /**
   * @example
   * https://oss-cip-shanghai.oss-cn-shanghai.aliyuncs.com/console_data/production/scanResult/osscheck/ossCheckStat_aliUf5B3lJfOkLpqozLIn94Uy-1XxKyX.xlsx
   */
  data?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

export class ExportOssCheckStatResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportOssCheckStatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportOssCheckStatResponseBody,
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

export class ExportResultRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * {"TaskId":"P_11TL5T"}
   */
  query?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  sort?: { [key: string]: string };
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
      sort: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      pageSize: 'number',
      query: 'string',
      regionId: 'string',
      sort: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startDate: 'string',
    };
  }

  validate() {
    if(this.sort) {
      $dara.Model.validateMap(this.sort);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportResultShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * {"TaskId":"P_11TL5T"}
   */
  query?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  sortShrink?: string;
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
      sortShrink: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      pageSize: 'number',
      query: 'string',
      regionId: 'string',
      sortShrink: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportResultResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * https://oss-cip-shanghai.oss-cn-shanghai.aliyuncs.com/console_data/production/scanResult/osscheck/ossCheckResult_aliiGGXhSMvmIvsS7Lrl3LaUZ-1A9%24oZ.xlsx
   */
  data?: string;
  /**
   * @example
   * OK
   */
  msg?: string;
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      msg: 'string',
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

export class ExportResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportResultResponseBody,
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

export class ExportScanResultRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2024-03-11 10:00:00
   */
  endDate?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  query?: { [key: string]: string };
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * text
   */
  resourceType?: string;
  sort?: { [key: string]: string };
  /**
   * @example
   * 2024-03-10 10:00:00
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      sort: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      pageSize: 'number',
      query: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      regionId: 'string',
      resourceType: 'string',
      sort: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startDate: 'string',
    };
  }

  validate() {
    if(this.query) {
      $dara.Model.validateMap(this.query);
    }
    if(this.sort) {
      $dara.Model.validateMap(this.sort);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportScanResultShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2024-03-11 10:00:00
   */
  endDate?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  queryShrink?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * text
   */
  resourceType?: string;
  sortShrink?: string;
  /**
   * @example
   * 2024-03-10 10:00:00
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      queryShrink: 'Query',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      sortShrink: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      pageSize: 'number',
      queryShrink: 'string',
      regionId: 'string',
      resourceType: 'string',
      sortShrink: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportScanResultResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * https://oss-cip-shanghai.oss-cn-shanghai.aliyuncs.com/portal_data/production/scanResult/text/textScanResult_aliow2MAdWXCakCxlitVY8Lnn-1A9KEw.xlsx
   */
  data?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  msg?: string;
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      httpStatusCode: 'number',
      msg: 'string',
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

export class ExportScanResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportScanResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportScanResultResponseBody,
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

export class ExportTextScanResultRequest extends $dara.Model {
  /**
   * @example
   * 2024-03-11 10:00:00
   */
  endDate?: string;
  query?: { [key: string]: string };
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * 2024-03-10 10:00:00
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      query: 'Query',
      regionId: 'RegionId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      query: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      regionId: 'string',
      startDate: 'string',
    };
  }

  validate() {
    if(this.query) {
      $dara.Model.validateMap(this.query);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportTextScanResultShrinkRequest extends $dara.Model {
  /**
   * @example
   * 2024-03-11 10:00:00
   */
  endDate?: string;
  queryShrink?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * 2024-03-10 10:00:00
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      queryShrink: 'Query',
      regionId: 'RegionId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      queryShrink: 'string',
      regionId: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportTextScanResultResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * https://oss-cip-shanghai.oss-cn-shanghai.aliyuncs.com/portal_data/production/scanResult/text/textScanResult_aliow2MAdWXCakCxlitVY8Lnn-1A9KEw.xlsx
   */
  data?: string;
  /**
   * @example
   * OK
   */
  msg?: string;
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      msg: 'string',
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

export class ExportTextScanResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportTextScanResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportTextScanResultResponseBody,
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

export class GetAnswerImportProgressRequest extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * alAxbbxxxx-xxx
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

export class GetAnswerImportProgressResponseBody extends $dara.Model {
  /**
   * @example
   * xxx
   */
  i18nKey?: string;
  illegalLengthSamples?: string[];
  /**
   * @example
   * 1
   */
  invalidCount?: number;
  /**
   * @example
   * alxxxx
   */
  libId?: string;
  /**
   * @example
   * 100
   */
  progress?: number;
  /**
   * @example
   * 1
   */
  repeatCount?: number;
  repeatSamples?: string[];
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * 8
   */
  successCount?: number;
  /**
   * @example
   * alAxbbxxxx-xxx
   */
  taskId?: string;
  /**
   * @example
   * xxxxx
   */
  tips?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      i18nKey: 'I18nKey',
      illegalLengthSamples: 'IllegalLengthSamples',
      invalidCount: 'InvalidCount',
      libId: 'LibId',
      progress: 'Progress',
      repeatCount: 'RepeatCount',
      repeatSamples: 'RepeatSamples',
      requestId: 'RequestId',
      successCount: 'SuccessCount',
      taskId: 'TaskId',
      tips: 'Tips',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      i18nKey: 'string',
      illegalLengthSamples: { 'type': 'array', 'itemType': 'string' },
      invalidCount: 'number',
      libId: 'string',
      progress: 'number',
      repeatCount: 'number',
      repeatSamples: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      successCount: 'number',
      taskId: 'string',
      tips: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.illegalLengthSamples)) {
      $dara.Model.validateArray(this.illegalLengthSamples);
    }
    if(Array.isArray(this.repeatSamples)) {
      $dara.Model.validateArray(this.repeatSamples);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAnswerImportProgressResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAnswerImportProgressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAnswerImportProgressResponseBody,
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

export class GetBackupBucketsListRequest extends $dara.Model {
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

export class GetBackupBucketsListResponseBody extends $dara.Model {
  data?: GetBackupBucketsListResponseBodyData[];
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetBackupBucketsListResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBackupBucketsListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBackupBucketsListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetBackupBucketsListResponseBody,
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

export class GetBackupConfigRequest extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * image
   */
  resourceType?: string;
  /**
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBackupConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  backupMode?: number;
  /**
   * @example
   * buckect_test
   */
  bucket?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  enableBackup?: boolean;
  enableBackupVoice?: boolean;
  /**
   * @example
   * 300
   */
  expireSeconds?: number;
  /**
   * @example
   * 2023-01-17 12:29:56
   */
  gmtModified?: string;
  /**
   * @example
   * aliyun/template/
   */
  path?: string;
  pathVoice?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * image
   */
  resourceType?: string;
  /**
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 1772612608370735
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      backupMode: 'BackupMode',
      bucket: 'Bucket',
      enable: 'Enable',
      enableBackup: 'EnableBackup',
      enableBackupVoice: 'EnableBackupVoice',
      expireSeconds: 'ExpireSeconds',
      gmtModified: 'GmtModified',
      path: 'Path',
      pathVoice: 'PathVoice',
      region: 'Region',
      requestId: 'RequestId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupMode: 'number',
      bucket: 'string',
      enable: 'boolean',
      enableBackup: 'boolean',
      enableBackupVoice: 'boolean',
      expireSeconds: 'number',
      gmtModified: 'string',
      path: 'string',
      pathVoice: 'string',
      region: 'string',
      requestId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
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

export class GetBackupConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBackupConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetBackupConfigResponseBody,
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

export class GetBackupStatusRequest extends $dara.Model {
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

export class GetBackupStatusResponseBody extends $dara.Model {
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

export class GetBackupStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBackupStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetBackupStatusResponseBody,
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

export class GetBucketsListRequest extends $dara.Model {
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

export class GetBucketsListResponseBody extends $dara.Model {
  data?: GetBucketsListResponseBodyData[];
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetBucketsListResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketsListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBucketsListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetBucketsListResponseBody,
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

export class GetCipStatsRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  byMonth?: boolean;
  /**
   * @example
   * 2024-03-11 10:00:00
   */
  endDate?: string;
  /**
   * @example
   * xx
   */
  label?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * text
   */
  resourceType?: string;
  serviceCode?: string;
  /**
   * @example
   * 2024-03-10 10:00:00
   */
  startDate?: string;
  /**
   * @example
   * 253552244990701265
   */
  subUid?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      byMonth: 'ByMonth',
      endDate: 'EndDate',
      label: 'Label',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      startDate: 'StartDate',
      subUid: 'SubUid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byMonth: 'boolean',
      endDate: 'string',
      label: 'string',
      regionId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
      startDate: 'string',
      subUid: 'string',
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

export class GetCipStatsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetCipStatsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  msg?: string;
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetCipStatsResponseBodyData,
      httpStatusCode: 'number',
      msg: 'string',
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

export class GetCipStatsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCipStatsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCipStatsResponseBody,
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

export class GetExecuteTimeRequest extends $dara.Model {
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

export class GetExecuteTimeResponseBody extends $dara.Model {
  /**
   * @example
   * 02:24:30
   */
  data?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

export class GetExecuteTimeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetExecuteTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetExecuteTimeResponseBody,
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

export class GetFeatureConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Region ID
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Resource type.
   * 
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @remarks
   * Service code.
   * 
   * @example
   * llm_query_moderation
   */
  serviceCode?: string;
  /**
   * @remarks
   * Type
   * 
   * @example
   * custom_llm_template
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
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

export class GetFeatureConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Returned data.
   */
  data?: GetFeatureConfigResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message for this request.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * ID assigned by the backend, used to uniquely identify a request. Can be used for troubleshooting.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * Success indicator
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetFeatureConfigResponseBodyData,
      httpStatusCode: 'number',
      msg: 'string',
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

export class GetFeatureConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFeatureConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFeatureConfigResponseBody,
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

export class GetImageSceneLabelConfRequest extends $dara.Model {
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

export class GetImageSceneLabelConfResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: { [key: string]: any }[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  msg?: string;
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      httpStatusCode: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageSceneLabelConfResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetImageSceneLabelConfResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetImageSceneLabelConfResponseBody,
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

export class GetImageSceneLabelListConfRequest extends $dara.Model {
  /**
   * @example
   * baselineCheck
   */
  imageServiceCode?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageServiceCode: 'ImageServiceCode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageServiceCode: 'string',
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

export class GetImageSceneLabelListConfResponseBody extends $dara.Model {
  data?: any[];
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'any' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageSceneLabelListConfResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetImageSceneLabelListConfResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetImageSceneLabelListConfResponseBody,
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

export class GetJobNameListRequest extends $dara.Model {
  /**
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @example
   * {"TaskId":"P_11TL5T"}
   */
  query?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  sort?: { [key: string]: string };
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      query: 'Query',
      regionId: 'RegionId',
      sort: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      query: 'string',
      regionId: 'string',
      sort: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startDate: 'string',
    };
  }

  validate() {
    if(this.sort) {
      $dara.Model.validateMap(this.sort);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobNameListShrinkRequest extends $dara.Model {
  /**
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @example
   * {"TaskId":"P_11TL5T"}
   */
  query?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  sortShrink?: string;
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      query: 'Query',
      regionId: 'RegionId',
      sortShrink: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      query: 'string',
      regionId: 'string',
      sortShrink: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobNameListResponseBody extends $dara.Model {
  data?: string[];
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobNameListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobNameListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetJobNameListResponseBody,
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

export class GetKeywordImportResultRequest extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * xxx-xxx
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

export class GetKeywordImportResultResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetKeywordImportResultResponseBodyData;
  /**
   * @example
   * OK
   */
  msg?: string;
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetKeywordImportResultResponseBodyData,
      msg: 'string',
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

export class GetKeywordImportResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetKeywordImportResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetKeywordImportResultResponseBody,
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

export class GetKeywordLibRequest extends $dara.Model {
  /**
   * @example
   * customxx_xxx
   */
  libId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      libId: 'LibId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libId: 'string',
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

export class GetKeywordLibResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetKeywordLibResponseBodyData;
  /**
   * @example
   * OK
   */
  msg?: string;
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetKeywordLibResponseBodyData,
      msg: 'string',
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

export class GetKeywordLibResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetKeywordLibResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetKeywordLibResponseBody,
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

export class GetOssCheckStatRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  byMonth?: boolean;
  /**
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @example
   * P_UNHBH
   */
  parentTaskId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      byMonth: 'ByMonth',
      endDate: 'EndDate',
      parentTaskId: 'ParentTaskId',
      regionId: 'RegionId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byMonth: 'boolean',
      endDate: 'string',
      parentTaskId: 'string',
      regionId: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssCheckStatResponseBody extends $dara.Model {
  barChart?: GetOssCheckStatResponseBodyBarChart;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      barChart: 'BarChart',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      barChart: GetOssCheckStatResponseBodyBarChart,
      requestId: 'string',
    };
  }

  validate() {
    if(this.barChart && typeof (this.barChart as any).validate === 'function') {
      (this.barChart as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssCheckStatResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOssCheckStatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetOssCheckStatResponseBody,
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

export class GetOssCheckStatusRequest extends $dara.Model {
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

export class GetOssCheckStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Bid。
   * 
   * @example
   * 26842
   */
  bid?: string;
  /**
   * @example
   * True
   */
  buy?: boolean;
  /**
   * @example
   * xxx
   */
  commodityCode?: string;
  /**
   * @example
   * False
   */
  indebt?: boolean;
  /**
   * @example
   * True
   */
  ramStatus?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  slsStatus?: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      buy: 'Buy',
      commodityCode: 'CommodityCode',
      indebt: 'Indebt',
      ramStatus: 'RamStatus',
      requestId: 'RequestId',
      slsStatus: 'SlsStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'string',
      buy: 'boolean',
      commodityCode: 'string',
      indebt: 'boolean',
      ramStatus: 'string',
      requestId: 'string',
      slsStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssCheckStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOssCheckStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetOssCheckStatusResponseBody,
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

export class GetScanNumRequest extends $dara.Model {
  /**
   * @example
   * tmpsample
   */
  buckets?: string;
  /**
   * @example
   * image
   */
  mediaType?: number;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      buckets: 'Buckets',
      mediaType: 'MediaType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buckets: 'string',
      mediaType: 'number',
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

export class GetScanNumResponseBody extends $dara.Model {
  /**
   * @example
   * 10
   */
  limitNumber?: number;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  scanNumber?: number;
  /**
   * @example
   * 10
   */
  sumNumber?: number;
  /**
   * @example
   * True
   */
  tag?: boolean;
  static names(): { [key: string]: string } {
    return {
      limitNumber: 'LimitNumber',
      requestId: 'RequestId',
      scanNumber: 'ScanNumber',
      sumNumber: 'SumNumber',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limitNumber: 'number',
      requestId: 'string',
      scanNumber: 'number',
      sumNumber: 'number',
      tag: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScanNumResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetScanNumResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetScanNumResponseBody,
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

export class GetScanResultRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  query?: { [key: string]: string };
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * image
   */
  resourceType?: string;
  sort?: { [key: string]: string };
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      sort: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      pageSize: 'number',
      query: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      regionId: 'string',
      resourceType: 'string',
      sort: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startDate: 'string',
    };
  }

  validate() {
    if(this.query) {
      $dara.Model.validateMap(this.query);
    }
    if(this.sort) {
      $dara.Model.validateMap(this.sort);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScanResultShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  queryShrink?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * image
   */
  resourceType?: string;
  sortShrink?: string;
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      queryShrink: 'Query',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      sortShrink: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      pageSize: 'number',
      queryShrink: 'string',
      regionId: 'string',
      resourceType: 'string',
      sortShrink: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScanResultResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetScanResultResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  msg?: string;
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetScanResultResponseBodyData,
      httpStatusCode: 'number',
      msg: 'string',
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

export class GetScanResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetScanResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetScanResultResponseBody,
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

export class GetServiceConfRequest extends $dara.Model {
  /**
   * @example
   * False
   */
  byDefault?: boolean;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * image
   */
  resourceType?: string;
  /**
   * @example
   * pornographic
   */
  scene?: string;
  /**
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      byDefault: 'ByDefault',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      scene: 'Scene',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byDefault: 'boolean',
      regionId: 'string',
      resourceType: 'string',
      scene: 'string',
      serviceCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceConfResponseBody extends $dara.Model {
  classify?: string;
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * {}
   */
  customServiceConf?: { [key: string]: any };
  /**
   * @example
   * 2023-01-17 12:29:56
   */
  gmtModified?: string;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * {}
   */
  option?: { [key: string]: any };
  /**
   * @example
   * 6CF2815C-****-****-B52E-FF6E2****492
   */
  requestId?: string;
  /**
   * @example
   * image
   */
  resourceType?: string;
  /**
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 17726*****370735
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      classify: 'Classify',
      code: 'Code',
      customServiceConf: 'CustomServiceConf',
      gmtModified: 'GmtModified',
      msg: 'Msg',
      option: 'Option',
      requestId: 'RequestId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      success: 'Success',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classify: 'string',
      code: 'number',
      customServiceConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtModified: 'string',
      msg: 'string',
      option: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
      success: 'boolean',
      uid: 'string',
    };
  }

  validate() {
    if(this.customServiceConf) {
      $dara.Model.validateMap(this.customServiceConf);
    }
    if(this.option) {
      $dara.Model.validateMap(this.option);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceConfResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceConfResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceConfResponseBody,
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

export class GetServiceConfigRequest extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @example
   * nickname_detection
   */
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetServiceConfigResponseBodyData;
  /**
   * @example
   * OK
   */
  msg?: string;
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetServiceConfigResponseBodyData,
      msg: 'string',
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

export class GetServiceConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceConfigResponseBody,
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

export class GetServiceLabelConfigRequest extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @example
   * nickname_detection
   */
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLabelConfigResponseBody extends $dara.Model {
  data?: any[];
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'any' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLabelConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceLabelConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceLabelConfigResponseBody,
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

export class GetStockOssCheckTasksListRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-06-18 02:08:00
   */
  endTime?: string;
  /**
   * @example
   * false
   */
  isInc?: boolean;
  /**
   * @example
   * image
   */
  mediaType?: number;
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
  sort?: { [key: string]: string };
  /**
   * @example
   * 2023-06-17 02:08:00
   */
  startTime?: string;
  /**
   * @example
   * batch
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      isInc: 'IsInc',
      mediaType: 'MediaType',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sort: 'Sort',
      startTime: 'StartTime',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'string',
      isInc: 'boolean',
      mediaType: 'number',
      pageSize: 'number',
      regionId: 'string',
      sort: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startTime: 'string',
      taskType: 'string',
    };
  }

  validate() {
    if(this.sort) {
      $dara.Model.validateMap(this.sort);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStockOssCheckTasksListShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-06-18 02:08:00
   */
  endTime?: string;
  /**
   * @example
   * false
   */
  isInc?: boolean;
  /**
   * @example
   * image
   */
  mediaType?: number;
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
  sortShrink?: string;
  /**
   * @example
   * 2023-06-17 02:08:00
   */
  startTime?: string;
  /**
   * @example
   * batch
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      isInc: 'IsInc',
      mediaType: 'MediaType',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sortShrink: 'Sort',
      startTime: 'StartTime',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'string',
      isInc: 'boolean',
      mediaType: 'number',
      pageSize: 'number',
      regionId: 'string',
      sortShrink: 'string',
      startTime: 'string',
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

export class GetStockOssCheckTasksListResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  items?: GetStockOssCheckTasksListResponseBodyItems[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': GetStockOssCheckTasksListResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStockOssCheckTasksListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetStockOssCheckTasksListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetStockOssCheckTasksListResponseBody,
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

export class GetTextScanResultRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  query?: { [key: string]: string };
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  sort?: { [key: string]: string };
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
      sort: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      pageSize: 'number',
      query: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      regionId: 'string',
      sort: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startDate: 'string',
    };
  }

  validate() {
    if(this.query) {
      $dara.Model.validateMap(this.query);
    }
    if(this.sort) {
      $dara.Model.validateMap(this.sort);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextScanResultShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  queryShrink?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  sortShrink?: string;
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      queryShrink: 'Query',
      regionId: 'RegionId',
      sortShrink: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      pageSize: 'number',
      queryShrink: 'string',
      regionId: 'string',
      sortShrink: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextScanResultResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetTextScanResultResponseBodyData;
  /**
   * @example
   * OK
   */
  msg?: string;
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetTextScanResultResponseBodyData,
      msg: 'string',
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

export class GetTextScanResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTextScanResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTextScanResultResponseBody,
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

export class GetUploadInfoRequest extends $dara.Model {
  name?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * image
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
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

export class GetUploadInfoResponseBody extends $dara.Model {
  /**
   * @example
   * LTAI5t9HM*****EXQmw3DVH
   */
  accessId?: string;
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * 900
   */
  expire?: number;
  /**
   * @example
   * image/upload/xxx
   */
  folder?: string;
  /**
   * @example
   * https://oss-cip-shanghai.oss-cn-shanghai.aliyuncs.com
   */
  host?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * image/upload/xxx
   */
  key?: string;
  /**
   * @example
   * OK
   */
  msg?: string;
  name?: string;
  /**
   * @example
   * xxxx
   */
  policy?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * iyu7VHblYj+mEF9p46cdGOlNPAw=
   */
  signature?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      code: 'Code',
      expire: 'Expire',
      folder: 'Folder',
      host: 'Host',
      httpStatusCode: 'HttpStatusCode',
      key: 'Key',
      msg: 'Msg',
      name: 'Name',
      policy: 'Policy',
      requestId: 'RequestId',
      signature: 'Signature',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      code: 'number',
      expire: 'number',
      folder: 'string',
      host: 'string',
      httpStatusCode: 'number',
      key: 'string',
      msg: 'string',
      name: 'string',
      policy: 'string',
      requestId: 'string',
      signature: 'string',
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

export class GetUploadInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUploadInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUploadInfoResponseBody,
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

export class GetUserBuyStatusRequest extends $dara.Model {
  commodityCode?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
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

export class GetUserBuyStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetUserBuyStatusResponseBodyData;
  /**
   * @example
   * OK
   */
  msg?: string;
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetUserBuyStatusResponseBodyData,
      msg: 'string',
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

export class GetUserBuyStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserBuyStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserBuyStatusResponseBody,
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

export class ListAnswerLibRequest extends $dara.Model {
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

export class ListAnswerLibResponseBody extends $dara.Model {
  data?: ListAnswerLibResponseBodyData[];
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAnswerLibResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnswerLibResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAnswerLibResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAnswerLibResponseBody,
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

export class ListCallbackRequest extends $dara.Model {
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

export class ListCallbackResponseBody extends $dara.Model {
  data?: ListCallbackResponseBodyData[];
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListCallbackResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallbackResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCallbackResponseBody,
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

export class ListImageLibRequest extends $dara.Model {
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

export class ListImageLibResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  libList?: ListImageLibResponseBodyLibList[];
  /**
   * @example
   * OK
   */
  msg?: string;
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
      libList: 'LibList',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      httpStatusCode: 'number',
      libList: { 'type': 'array', 'itemType': ListImageLibResponseBodyLibList },
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.libList)) {
      $dara.Model.validateArray(this.libList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageLibResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListImageLibResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListImageLibResponseBody,
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

export class ListImagesFromLibRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @example
   * 112
   */
  imgId?: string;
  /**
   * @example
   * custom_xxxx
   */
  libId?: string;
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
  sort?: { [key: string]: string };
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      imgId: 'ImgId',
      libId: 'LibId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sort: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      imgId: 'string',
      libId: 'string',
      pageSize: 'number',
      regionId: 'string',
      sort: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startDate: 'string',
    };
  }

  validate() {
    if(this.sort) {
      $dara.Model.validateMap(this.sort);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesFromLibShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @example
   * 112
   */
  imgId?: string;
  /**
   * @example
   * custom_xxxx
   */
  libId?: string;
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
  sortShrink?: string;
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      imgId: 'ImgId',
      libId: 'LibId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sortShrink: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      imgId: 'string',
      libId: 'string',
      pageSize: 'number',
      regionId: 'string',
      sortShrink: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesFromLibResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  items?: ListImagesFromLibResponseBodyItems[];
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
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
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
      msg: 'Msg',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      currentPage: 'number',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListImagesFromLibResponseBodyItems },
      msg: 'string',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesFromLibResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListImagesFromLibResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListImagesFromLibResponseBody,
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

export class ListKeywordLibsRequest extends $dara.Model {
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

export class ListKeywordLibsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: ListKeywordLibsResponseBodyData[];
  /**
   * @example
   * OK
   */
  msg?: string;
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListKeywordLibsResponseBodyData },
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeywordLibsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListKeywordLibsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListKeywordLibsResponseBody,
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

export class ListKeywordsRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * custom_xxxx
   */
  libId?: string;
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
  sort?: { [key: string]: string };
  word?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      libId: 'LibId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sort: 'Sort',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      libId: 'string',
      pageSize: 'number',
      regionId: 'string',
      sort: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      word: 'string',
    };
  }

  validate() {
    if(this.sort) {
      $dara.Model.validateMap(this.sort);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeywordsShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * custom_xxxx
   */
  libId?: string;
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
  sortShrink?: string;
  word?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      libId: 'LibId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sortShrink: 'Sort',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      libId: 'string',
      pageSize: 'number',
      regionId: 'string',
      sortShrink: 'string',
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

export class ListKeywordsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: ListKeywordsResponseBodyData;
  /**
   * @example
   * OK
   */
  msg?: string;
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListKeywordsResponseBodyData,
      msg: 'string',
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

export class ListKeywordsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListKeywordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListKeywordsResponseBody,
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

export class ListOssCheckResultRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @example
   * 2
   */
  finishNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * {"TaskId":"P_11TL5T"}
   */
  query?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  sort?: { [key: string]: string };
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  /**
   * @example
   * 4
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      finishNum: 'FinishNum',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
      sort: 'Sort',
      startDate: 'StartDate',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      finishNum: 'number',
      pageSize: 'number',
      query: 'string',
      regionId: 'string',
      sort: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startDate: 'string',
      status: 'number',
    };
  }

  validate() {
    if(this.sort) {
      $dara.Model.validateMap(this.sort);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOssCheckResultShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @example
   * 2
   */
  finishNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * {"TaskId":"P_11TL5T"}
   */
  query?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  sortShrink?: string;
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  /**
   * @example
   * 4
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      finishNum: 'FinishNum',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
      sortShrink: 'Sort',
      startDate: 'StartDate',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      finishNum: 'number',
      pageSize: 'number',
      query: 'string',
      regionId: 'string',
      sortShrink: 'string',
      startDate: 'string',
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

export class ListOssCheckResultResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  items?: ListOssCheckResultResponseBodyItems[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * 13
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': ListOssCheckResultResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOssCheckResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOssCheckResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListOssCheckResultResponseBody,
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

export class ListServiceConfigsRequest extends $dara.Model {
  classify?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * text
   */
  resourceType?: string;
  useStatus?: string;
  static names(): { [key: string]: string } {
    return {
      classify: 'Classify',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      useStatus: 'UseStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classify: 'string',
      regionId: 'string',
      resourceType: 'string',
      useStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceConfigsResponseBody extends $dara.Model {
  /**
   * @example
   * 400
   */
  code?: number;
  data?: ListServiceConfigsResponseBodyData[];
  /**
   * @example
   * OK
   */
  msg?: string;
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListServiceConfigsResponseBodyData },
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceConfigsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServiceConfigsResponseBody,
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

export class ModifyAnswerLibRequest extends $dara.Model {
  /**
   * @example
   * custom_xxxx
   */
  libId?: string;
  libName?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      libId: 'LibId',
      libName: 'LibName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libId: 'string',
      libName: 'string',
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

export class ModifyAnswerLibResponseBody extends $dara.Model {
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

export class ModifyAnswerLibResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAnswerLibResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAnswerLibResponseBody,
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

export class ModifyCallbackRequest extends $dara.Model {
  /**
   * @example
   * SHA256
   */
  cryptType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 112
   */
  id?: number;
  name?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * all
   */
  scope?: string;
  /**
   * @example
   * https://www.aliyuncs.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      cryptType: 'CryptType',
      id: 'Id',
      name: 'Name',
      regionId: 'RegionId',
      scope: 'Scope',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cryptType: 'string',
      id: 'number',
      name: 'string',
      regionId: 'string',
      scope: 'string',
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

export class ModifyCallbackResponseBody extends $dara.Model {
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

export class ModifyCallbackResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyCallbackResponseBody,
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

export class ModifyFeatureConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Configuration, in JSON format
   * 
   * @example
   * {}
   */
  config?: string;
  /**
   * @remarks
   * Label meaning
   * 
   * @example
   * 标签2
   */
  description?: string;
  /**
   * @remarks
   * Label value, customer-defined
   * 
   * @example
   * __config__
   */
  field?: string;
  /**
   * @remarks
   * Region
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Resource type.
   * 
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @remarks
   * Service code.
   * 
   * @example
   * llm_query_moderation
   */
  serviceCode?: string;
  /**
   * @remarks
   * Type
   * 
   * @example
   * custom_llm_template
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      description: 'Description',
      field: 'Field',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      description: 'string',
      field: 'string',
      regionId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
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

export class ModifyFeatureConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Returned data
   * 
   * @example
   * True
   */
  data?: boolean;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message of this request.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * ID assigned by the backend to uniquely identify a request. Can be used for troubleshooting.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * Success indicator.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      httpStatusCode: 'number',
      msg: 'string',
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

export class ModifyFeatureConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyFeatureConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyFeatureConfigResponseBody,
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

export class ModifyServiceInfoRequest extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * image
   */
  resourceType?: string;
  /**
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  serviceDesc?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      serviceDesc: 'ServiceDesc',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
      serviceDesc: 'string',
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

export class ModifyServiceInfoResponseBody extends $dara.Model {
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

export class ModifyServiceInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyServiceInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyServiceInfoResponseBody,
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

export class QueryAnswerSampleByPageRequest extends $dara.Model {
  answer?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * custom_xxxx
   */
  libId?: string;
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
  sort?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      currentPage: 'CurrentPage',
      libId: 'LibId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      currentPage: 'number',
      libId: 'string',
      pageSize: 'number',
      regionId: 'string',
      sort: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.sort) {
      $dara.Model.validateMap(this.sort);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnswerSampleByPageShrinkRequest extends $dara.Model {
  answer?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * custom_xxxx
   */
  libId?: string;
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
  sortShrink?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      currentPage: 'CurrentPage',
      libId: 'LibId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sortShrink: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      currentPage: 'number',
      libId: 'string',
      pageSize: 'number',
      regionId: 'string',
      sortShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnswerSampleByPageResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  items?: QueryAnswerSampleByPageResponseBodyItems[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * 58
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': QueryAnswerSampleByPageResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnswerSampleByPageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAnswerSampleByPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryAnswerSampleByPageResponseBody,
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

export class QueryCallbackRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  checkForOss?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11234
   */
  id?: number;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      checkForOss: 'CheckForOss',
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkForOss: 'boolean',
      id: 'number',
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

export class QueryCallbackResponseBody extends $dara.Model {
  /**
   * @example
   * SHA256
   */
  cryptType?: string;
  /**
   * @example
   * false
   */
  existsOssCheckTask?: boolean;
  /**
   * @example
   * 2022-11-30 16:30:29
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-06-03 15:20:14
   */
  gmtModified?: string;
  /**
   * @example
   * 11234
   */
  id?: number;
  name?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * all
   */
  scope?: string;
  /**
   * @remarks
   * Seed。
   * 
   * @example
   * cb2MysbJTAAIf6gB3u4vpIEU-1ySnnf
   */
  seed?: string;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 19964*****086772
   */
  uid?: string;
  /**
   * @example
   * https://www.aliyuncs.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      cryptType: 'CryptType',
      existsOssCheckTask: 'ExistsOssCheckTask',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      requestId: 'RequestId',
      scope: 'Scope',
      seed: 'Seed',
      uid: 'Uid',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cryptType: 'string',
      existsOssCheckTask: 'boolean',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      requestId: 'string',
      scope: 'string',
      seed: 'string',
      uid: 'string',
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

export class QueryCallbackResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryCallbackResponseBody,
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

export class QueryCallbackByPageRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
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
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
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

export class QueryCallbackByPageResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  items?: QueryCallbackByPageResponseBodyItems[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': QueryCallbackByPageResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallbackByPageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCallbackByPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryCallbackByPageResponseBody,
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

export class UpdateBackupConfigRequest extends $dara.Model {
  /**
   * @example
   * {}
   */
  backupConfig?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * video
   */
  resourceType?: string;
  /**
   * @example
   * videoDetection
   */
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      backupConfig: 'BackupConfig',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupConfig: 'string',
      regionId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBackupConfigResponseBody extends $dara.Model {
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

export class UpdateBackupConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateBackupConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateBackupConfigResponseBody,
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

export class UpdateImageLibRequest extends $dara.Model {
  comment?: string;
  /**
   * @example
   * 0
   */
  freeInspection?: number;
  /**
   * @example
   * custom_xxxx
   */
  libId?: string;
  libName?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      freeInspection: 'FreeInspection',
      libId: 'LibId',
      libName: 'LibName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      freeInspection: 'number',
      libId: 'string',
      libName: 'string',
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

export class UpdateImageLibResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  msg?: string;
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      httpStatusCode: 'number',
      msg: 'string',
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

export class UpdateImageLibResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateImageLibResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateImageLibResponseBody,
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

export class UpdateImageLibFreeInspectionRequest extends $dara.Model {
  config?: { [key: string]: number };
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      regionId: 'string',
    };
  }

  validate() {
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageLibFreeInspectionShrinkRequest extends $dara.Model {
  configShrink?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      configShrink: 'Config',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configShrink: 'string',
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

export class UpdateImageLibFreeInspectionResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  msg?: string;
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      httpStatusCode: 'number',
      msg: 'string',
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

export class UpdateImageLibFreeInspectionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateImageLibFreeInspectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateImageLibFreeInspectionResponseBody,
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

export class UpdateKeywordLibRequest extends $dara.Model {
  /**
   * @example
   * custom_xxxx
   */
  libId?: string;
  libName?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      libId: 'LibId',
      libName: 'LibName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libId: 'string',
      libName: 'string',
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

export class UpdateKeywordLibResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * OK
   */
  msg?: string;
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      msg: 'string',
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

export class UpdateKeywordLibResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateKeywordLibResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateKeywordLibResponseBody,
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

export class UpdateScanResultFeedbackRequest extends $dara.Model {
  /**
   * @example
   * missOut
   */
  feedback?: string;
  /**
   * @example
   * 46232656-984E-****-A648-B1D0667B6C3E
   */
  queryRequestId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * text
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      feedback: 'Feedback',
      queryRequestId: 'QueryRequestId',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedback: 'string',
      queryRequestId: 'string',
      regionId: 'string',
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

export class UpdateScanResultFeedbackResponseBody extends $dara.Model {
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

export class UpdateScanResultFeedbackResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateScanResultFeedbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateScanResultFeedbackResponseBody,
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

export class UpdateServiceConfigRequest extends $dara.Model {
  /**
   * @example
   * {}
   */
  fileConfig?: string;
  /**
   * @example
   * []
   */
  keywordFilterLibs?: string;
  /**
   * @example
   * []
   */
  keywordHitLibs?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * image
   */
  resourceType?: string;
  /**
   * @example
   * pornographic
   */
  scene?: string;
  /**
   * @example
   * {}
   */
  sceneConfig?: string;
  /**
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  /**
   * @example
   * {}
   */
  videoConfig?: string;
  static names(): { [key: string]: string } {
    return {
      fileConfig: 'FileConfig',
      keywordFilterLibs: 'KeywordFilterLibs',
      keywordHitLibs: 'KeywordHitLibs',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      scene: 'Scene',
      sceneConfig: 'SceneConfig',
      serviceCode: 'ServiceCode',
      videoConfig: 'VideoConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileConfig: 'string',
      keywordFilterLibs: 'string',
      keywordHitLibs: 'string',
      regionId: 'string',
      resourceType: 'string',
      scene: 'string',
      sceneConfig: 'string',
      serviceCode: 'string',
      videoConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  msg?: string;
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      httpStatusCode: 'number',
      msg: 'string',
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

export class UpdateServiceConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateServiceConfigResponseBody,
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
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-1': "green.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "green.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "green.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "green.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "green.ap-southeast-1.aliyuncs.com",
      'cn-chengdu': "green.aliyuncs.com",
      'cn-hongkong': "green.aliyuncs.com",
      'cn-huhehaote': "green.aliyuncs.com",
      'cn-qingdao': "green.aliyuncs.com",
      'cn-zhangjiakou': "green.aliyuncs.com",
      'eu-central-1': "green.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "green.ap-southeast-1.aliyuncs.com",
      'me-east-1': "green.ap-southeast-1.aliyuncs.com",
      'us-east-1': "green.ap-southeast-1.aliyuncs.com",
      'cn-hangzhou-finance': "green.aliyuncs.com",
      'cn-shenzhen-finance-1': "green.aliyuncs.com",
      'cn-shanghai-finance-1': "green.aliyuncs.com",
      'cn-north-2-gov-1': "green.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("green", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 添加代答样本
   * 
   * @param request - AddAnswerSampleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddAnswerSampleResponse
   */
  async addAnswerSampleWithOptions(request: AddAnswerSampleRequest, runtime: $dara.RuntimeOptions): Promise<AddAnswerSampleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.libId)) {
      query["LibId"] = request.libId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sampleObject)) {
      query["SampleObject"] = request.sampleObject;
    }

    if (!$dara.isNull(request.samples)) {
      query["Samples"] = request.samples;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddAnswerSample",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddAnswerSampleResponse>(await this.callApi(params, req, runtime), new AddAnswerSampleResponse({}));
    } else {
      return $dara.cast<AddAnswerSampleResponse>(await this.execute(params, req, runtime), new AddAnswerSampleResponse({}));
    }

  }

  /**
   * 添加代答样本
   * 
   * @param request - AddAnswerSampleRequest
   * @returns AddAnswerSampleResponse
   */
  async addAnswerSample(request: AddAnswerSampleRequest): Promise<AddAnswerSampleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addAnswerSampleWithOptions(request, runtime);
  }

  /**
   * 创建图库
   * 
   * @param request - AddImageLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddImageLibResponse
   */
  async addImageLibWithOptions(request: AddImageLibRequest, runtime: $dara.RuntimeOptions): Promise<AddImageLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.libName)) {
      body["LibName"] = request.libName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddImageLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddImageLibResponse>(await this.callApi(params, req, runtime), new AddImageLibResponse({}));
    } else {
      return $dara.cast<AddImageLibResponse>(await this.execute(params, req, runtime), new AddImageLibResponse({}));
    }

  }

  /**
   * 创建图库
   * 
   * @param request - AddImageLibRequest
   * @returns AddImageLibResponse
   */
  async addImageLib(request: AddImageLibRequest): Promise<AddImageLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addImageLibWithOptions(request, runtime);
  }

  /**
   * 批量添加图片
   * 
   * @param request - AddImages2LibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddImages2LibResponse
   */
  async addImages2LibWithOptions(request: AddImages2LibRequest, runtime: $dara.RuntimeOptions): Promise<AddImages2LibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imgUrl)) {
      body["ImgUrl"] = request.imgUrl;
    }

    if (!$dara.isNull(request.libId)) {
      body["LibId"] = request.libId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddImages2Lib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddImages2LibResponse>(await this.callApi(params, req, runtime), new AddImages2LibResponse({}));
    } else {
      return $dara.cast<AddImages2LibResponse>(await this.execute(params, req, runtime), new AddImages2LibResponse({}));
    }

  }

  /**
   * 批量添加图片
   * 
   * @param request - AddImages2LibRequest
   * @returns AddImages2LibResponse
   */
  async addImages2Lib(request: AddImages2LibRequest): Promise<AddImages2LibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addImages2LibWithOptions(request, runtime);
  }

  /**
   * 创建关键词库
   * 
   * @param request - AddKeywordLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddKeywordLibResponse
   */
  async addKeywordLibWithOptions(request: AddKeywordLibRequest, runtime: $dara.RuntimeOptions): Promise<AddKeywordLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keywords)) {
      body["Keywords"] = request.keywords;
    }

    if (!$dara.isNull(request.keywordsObject)) {
      body["KeywordsObject"] = request.keywordsObject;
    }

    if (!$dara.isNull(request.libName)) {
      body["LibName"] = request.libName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddKeywordLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddKeywordLibResponse>(await this.callApi(params, req, runtime), new AddKeywordLibResponse({}));
    } else {
      return $dara.cast<AddKeywordLibResponse>(await this.execute(params, req, runtime), new AddKeywordLibResponse({}));
    }

  }

  /**
   * 创建关键词库
   * 
   * @param request - AddKeywordLibRequest
   * @returns AddKeywordLibResponse
   */
  async addKeywordLib(request: AddKeywordLibRequest): Promise<AddKeywordLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addKeywordLibWithOptions(request, runtime);
  }

  /**
   * 添加关键词
   * 
   * @param request - AddKeywordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddKeywordsResponse
   */
  async addKeywordsWithOptions(request: AddKeywordsRequest, runtime: $dara.RuntimeOptions): Promise<AddKeywordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keywords)) {
      body["Keywords"] = request.keywords;
    }

    if (!$dara.isNull(request.keywordsObject)) {
      body["KeywordsObject"] = request.keywordsObject;
    }

    if (!$dara.isNull(request.libId)) {
      body["LibId"] = request.libId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddKeywords",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddKeywordsResponse>(await this.callApi(params, req, runtime), new AddKeywordsResponse({}));
    } else {
      return $dara.cast<AddKeywordsResponse>(await this.execute(params, req, runtime), new AddKeywordsResponse({}));
    }

  }

  /**
   * 添加关键词
   * 
   * @param request - AddKeywordsRequest
   * @returns AddKeywordsResponse
   */
  async addKeywords(request: AddKeywordsRequest): Promise<AddKeywordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addKeywordsWithOptions(request, runtime);
  }

  /**
   * 添加关键词
   * 
   * @param request - AddKeywordsToLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddKeywordsToLibResponse
   */
  async addKeywordsToLibWithOptions(request: AddKeywordsToLibRequest, runtime: $dara.RuntimeOptions): Promise<AddKeywordsToLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keywords)) {
      body["Keywords"] = request.keywords;
    }

    if (!$dara.isNull(request.keywordsObject)) {
      body["KeywordsObject"] = request.keywordsObject;
    }

    if (!$dara.isNull(request.libId)) {
      body["LibId"] = request.libId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddKeywordsToLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddKeywordsToLibResponse>(await this.callApi(params, req, runtime), new AddKeywordsToLibResponse({}));
    } else {
      return $dara.cast<AddKeywordsToLibResponse>(await this.execute(params, req, runtime), new AddKeywordsToLibResponse({}));
    }

  }

  /**
   * 添加关键词
   * 
   * @param request - AddKeywordsToLibRequest
   * @returns AddKeywordsToLibResponse
   */
  async addKeywordsToLib(request: AddKeywordsToLibRequest): Promise<AddKeywordsToLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addKeywordsToLibWithOptions(request, runtime);
  }

  /**
   * 取消oss扫描任务
   * 
   * @param request - CancelStockOssCheckTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelStockOssCheckTaskResponse
   */
  async cancelStockOssCheckTaskWithOptions(request: CancelStockOssCheckTaskRequest, runtime: $dara.RuntimeOptions): Promise<CancelStockOssCheckTaskResponse> {
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
      action: "CancelStockOssCheckTask",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelStockOssCheckTaskResponse>(await this.callApi(params, req, runtime), new CancelStockOssCheckTaskResponse({}));
    } else {
      return $dara.cast<CancelStockOssCheckTaskResponse>(await this.execute(params, req, runtime), new CancelStockOssCheckTaskResponse({}));
    }

  }

  /**
   * 取消oss扫描任务
   * 
   * @param request - CancelStockOssCheckTaskRequest
   * @returns CancelStockOssCheckTaskResponse
   */
  async cancelStockOssCheckTask(request: CancelStockOssCheckTaskRequest): Promise<CancelStockOssCheckTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelStockOssCheckTaskWithOptions(request, runtime);
  }

  /**
   * 复制服务
   * 
   * @param request - CopyServiceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyServiceConfigResponse
   */
  async copyServiceConfigWithOptions(request: CopyServiceConfigRequest, runtime: $dara.RuntimeOptions): Promise<CopyServiceConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.serviceDesc)) {
      body["ServiceDesc"] = request.serviceDesc;
    }

    if (!$dara.isNull(request.serviceName)) {
      body["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CopyServiceConfig",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CopyServiceConfigResponse>(await this.callApi(params, req, runtime), new CopyServiceConfigResponse({}));
    } else {
      return $dara.cast<CopyServiceConfigResponse>(await this.execute(params, req, runtime), new CopyServiceConfigResponse({}));
    }

  }

  /**
   * 复制服务
   * 
   * @param request - CopyServiceConfigRequest
   * @returns CopyServiceConfigResponse
   */
  async copyServiceConfig(request: CopyServiceConfigRequest): Promise<CopyServiceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.copyServiceConfigWithOptions(request, runtime);
  }

  /**
   * 创建oss扫描任务
   * 
   * @param request - CreatStockOssCheckTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatStockOssCheckTaskResponse
   */
  async creatStockOssCheckTaskWithOptions(request: CreatStockOssCheckTaskRequest, runtime: $dara.RuntimeOptions): Promise<CreatStockOssCheckTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buckets)) {
      query["Buckets"] = request.buckets;
    }

    if (!$dara.isNull(request.callbackId)) {
      query["CallbackId"] = request.callbackId;
    }

    if (!$dara.isNull(request.distinctHistoryTasks)) {
      query["DistinctHistoryTasks"] = request.distinctHistoryTasks;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.executeDate)) {
      query["ExecuteDate"] = request.executeDate;
    }

    if (!$dara.isNull(request.executeTime)) {
      query["ExecuteTime"] = request.executeTime;
    }

    if (!$dara.isNull(request.freeze)) {
      query["Freeze"] = request.freeze;
    }

    if (!$dara.isNull(request.freezeHighRisk1)) {
      query["FreezeHighRisk1"] = request.freezeHighRisk1;
    }

    if (!$dara.isNull(request.freezeHighRisk2)) {
      query["FreezeHighRisk2"] = request.freezeHighRisk2;
    }

    if (!$dara.isNull(request.freezeMediumRisk1)) {
      query["FreezeMediumRisk1"] = request.freezeMediumRisk1;
    }

    if (!$dara.isNull(request.freezeMediumRisk2)) {
      query["FreezeMediumRisk2"] = request.freezeMediumRisk2;
    }

    if (!$dara.isNull(request.freezeType)) {
      query["FreezeType"] = request.freezeType;
    }

    if (!$dara.isNull(request.isInc)) {
      query["IsInc"] = request.isInc;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.prefixFilterType)) {
      query["PrefixFilterType"] = request.prefixFilterType;
    }

    if (!$dara.isNull(request.prefixFilters)) {
      query["PrefixFilters"] = request.prefixFilters;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scanLimit)) {
      query["ScanLimit"] = request.scanLimit;
    }

    if (!$dara.isNull(request.scanNoFileType)) {
      query["ScanNoFileType"] = request.scanNoFileType;
    }

    if (!$dara.isNull(request.scanResourceType)) {
      query["ScanResourceType"] = request.scanResourceType;
    }

    if (!$dara.isNull(request.scanService)) {
      query["ScanService"] = request.scanService;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.taskCycle)) {
      query["TaskCycle"] = request.taskCycle;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatStockOssCheckTask",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreatStockOssCheckTaskResponse>(await this.callApi(params, req, runtime), new CreatStockOssCheckTaskResponse({}));
    } else {
      return $dara.cast<CreatStockOssCheckTaskResponse>(await this.execute(params, req, runtime), new CreatStockOssCheckTaskResponse({}));
    }

  }

  /**
   * 创建oss扫描任务
   * 
   * @param request - CreatStockOssCheckTaskRequest
   * @returns CreatStockOssCheckTaskResponse
   */
  async creatStockOssCheckTask(request: CreatStockOssCheckTaskRequest): Promise<CreatStockOssCheckTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.creatStockOssCheckTaskWithOptions(request, runtime);
  }

  /**
   * 创建代答库
   * 
   * @param request - CreateAnswerLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAnswerLibResponse
   */
  async createAnswerLibWithOptions(request: CreateAnswerLibRequest, runtime: $dara.RuntimeOptions): Promise<CreateAnswerLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.libName)) {
      body["LibName"] = request.libName;
    }

    if (!$dara.isNull(request.sampleBucket)) {
      body["SampleBucket"] = request.sampleBucket;
    }

    if (!$dara.isNull(request.sampleObject)) {
      body["SampleObject"] = request.sampleObject;
    }

    if (!$dara.isNull(request.samples)) {
      body["Samples"] = request.samples;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAnswerLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateAnswerLibResponse>(await this.callApi(params, req, runtime), new CreateAnswerLibResponse({}));
    } else {
      return $dara.cast<CreateAnswerLibResponse>(await this.execute(params, req, runtime), new CreateAnswerLibResponse({}));
    }

  }

  /**
   * 创建代答库
   * 
   * @param request - CreateAnswerLibRequest
   * @returns CreateAnswerLibResponse
   */
  async createAnswerLib(request: CreateAnswerLibRequest): Promise<CreateAnswerLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAnswerLibWithOptions(request, runtime);
  }

  /**
   * 新建消息通知
   * 
   * @param request - CreateCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCallbackResponse
   */
  async createCallbackWithOptions(request: CreateCallbackRequest, runtime: $dara.RuntimeOptions): Promise<CreateCallbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cryptType)) {
      body["CryptType"] = request.cryptType;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.scope)) {
      body["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.url)) {
      body["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCallback",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateCallbackResponse>(await this.callApi(params, req, runtime), new CreateCallbackResponse({}));
    } else {
      return $dara.cast<CreateCallbackResponse>(await this.execute(params, req, runtime), new CreateCallbackResponse({}));
    }

  }

  /**
   * 新建消息通知
   * 
   * @param request - CreateCallbackRequest
   * @returns CreateCallbackResponse
   */
  async createCallback(request: CreateCallbackRequest): Promise<CreateCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCallbackWithOptions(request, runtime);
  }

  /**
   * 创建oss扫描任务前检查
   * 
   * @param request - CreatePreCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePreCheckResponse
   */
  async createPreCheckWithOptions(request: CreatePreCheckRequest, runtime: $dara.RuntimeOptions): Promise<CreatePreCheckResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.buckets)) {
      body["Buckets"] = request.buckets;
    }

    if (!$dara.isNull(request.distinctHistoryTasks)) {
      body["DistinctHistoryTasks"] = request.distinctHistoryTasks;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.isInc)) {
      body["IsInc"] = request.isInc;
    }

    if (!$dara.isNull(request.mediaType)) {
      body["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.prefixFilterType)) {
      body["PrefixFilterType"] = request.prefixFilterType;
    }

    if (!$dara.isNull(request.prefixFilters)) {
      body["PrefixFilters"] = request.prefixFilters;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.scanLimit)) {
      body["ScanLimit"] = request.scanLimit;
    }

    if (!$dara.isNull(request.scanNoFileType)) {
      body["ScanNoFileType"] = request.scanNoFileType;
    }

    if (!$dara.isNull(request.scanService)) {
      body["ScanService"] = request.scanService;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePreCheck",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreatePreCheckResponse>(await this.callApi(params, req, runtime), new CreatePreCheckResponse({}));
    } else {
      return $dara.cast<CreatePreCheckResponse>(await this.execute(params, req, runtime), new CreatePreCheckResponse({}));
    }

  }

  /**
   * 创建oss扫描任务前检查
   * 
   * @param request - CreatePreCheckRequest
   * @returns CreatePreCheckResponse
   */
  async createPreCheck(request: CreatePreCheckRequest): Promise<CreatePreCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPreCheckWithOptions(request, runtime);
  }

  /**
   * 删除代答库
   * 
   * @param request - DeleteAnswerLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAnswerLibResponse
   */
  async deleteAnswerLibWithOptions(request: DeleteAnswerLibRequest, runtime: $dara.RuntimeOptions): Promise<DeleteAnswerLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.libId)) {
      query["LibId"] = request.libId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAnswerLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteAnswerLibResponse>(await this.callApi(params, req, runtime), new DeleteAnswerLibResponse({}));
    } else {
      return $dara.cast<DeleteAnswerLibResponse>(await this.execute(params, req, runtime), new DeleteAnswerLibResponse({}));
    }

  }

  /**
   * 删除代答库
   * 
   * @param request - DeleteAnswerLibRequest
   * @returns DeleteAnswerLibResponse
   */
  async deleteAnswerLib(request: DeleteAnswerLibRequest): Promise<DeleteAnswerLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAnswerLibWithOptions(request, runtime);
  }

  /**
   * 删除代答答案
   * 
   * @param request - DeleteAnswerSampleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAnswerSampleResponse
   */
  async deleteAnswerSampleWithOptions(request: DeleteAnswerSampleRequest, runtime: $dara.RuntimeOptions): Promise<DeleteAnswerSampleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ids)) {
      body["Ids"] = request.ids;
    }

    if (!$dara.isNull(request.libId)) {
      body["LibId"] = request.libId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAnswerSample",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteAnswerSampleResponse>(await this.callApi(params, req, runtime), new DeleteAnswerSampleResponse({}));
    } else {
      return $dara.cast<DeleteAnswerSampleResponse>(await this.execute(params, req, runtime), new DeleteAnswerSampleResponse({}));
    }

  }

  /**
   * 删除代答答案
   * 
   * @param request - DeleteAnswerSampleRequest
   * @returns DeleteAnswerSampleResponse
   */
  async deleteAnswerSample(request: DeleteAnswerSampleRequest): Promise<DeleteAnswerSampleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAnswerSampleWithOptions(request, runtime);
  }

  /**
   * 删除消息通知
   * 
   * @param request - DeleteCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCallbackResponse
   */
  async deleteCallbackWithOptions(request: DeleteCallbackRequest, runtime: $dara.RuntimeOptions): Promise<DeleteCallbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCallback",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteCallbackResponse>(await this.callApi(params, req, runtime), new DeleteCallbackResponse({}));
    } else {
      return $dara.cast<DeleteCallbackResponse>(await this.execute(params, req, runtime), new DeleteCallbackResponse({}));
    }

  }

  /**
   * 删除消息通知
   * 
   * @param request - DeleteCallbackRequest
   * @returns DeleteCallbackResponse
   */
  async deleteCallback(request: DeleteCallbackRequest): Promise<DeleteCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCallbackWithOptions(request, runtime);
  }

  /**
   * Delete feature configuration
   * 
   * @param request - DeleteFeatureConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFeatureConfigResponse
   */
  async deleteFeatureConfigWithOptions(request: DeleteFeatureConfigRequest, runtime: $dara.RuntimeOptions): Promise<DeleteFeatureConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.field)) {
      body["Field"] = request.field;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFeatureConfig",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteFeatureConfigResponse>(await this.callApi(params, req, runtime), new DeleteFeatureConfigResponse({}));
    } else {
      return $dara.cast<DeleteFeatureConfigResponse>(await this.execute(params, req, runtime), new DeleteFeatureConfigResponse({}));
    }

  }

  /**
   * Delete feature configuration
   * 
   * @param request - DeleteFeatureConfigRequest
   * @returns DeleteFeatureConfigResponse
   */
  async deleteFeatureConfig(request: DeleteFeatureConfigRequest): Promise<DeleteFeatureConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFeatureConfigWithOptions(request, runtime);
  }

  /**
   * 批量删除
   * 
   * @param request - DeleteImagesFromLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteImagesFromLibResponse
   */
  async deleteImagesFromLibWithOptions(request: DeleteImagesFromLibRequest, runtime: $dara.RuntimeOptions): Promise<DeleteImagesFromLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageIds)) {
      body["ImageIds"] = request.imageIds;
    }

    if (!$dara.isNull(request.libId)) {
      body["LibId"] = request.libId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteImagesFromLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteImagesFromLibResponse>(await this.callApi(params, req, runtime), new DeleteImagesFromLibResponse({}));
    } else {
      return $dara.cast<DeleteImagesFromLibResponse>(await this.execute(params, req, runtime), new DeleteImagesFromLibResponse({}));
    }

  }

  /**
   * 批量删除
   * 
   * @param request - DeleteImagesFromLibRequest
   * @returns DeleteImagesFromLibResponse
   */
  async deleteImagesFromLib(request: DeleteImagesFromLibRequest): Promise<DeleteImagesFromLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteImagesFromLibWithOptions(request, runtime);
  }

  /**
   * 删除关键词
   * 
   * @param request - DeleteKeywordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteKeywordResponse
   */
  async deleteKeywordWithOptions(request: DeleteKeywordRequest, runtime: $dara.RuntimeOptions): Promise<DeleteKeywordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keywordIdList)) {
      body["KeywordIdList"] = request.keywordIdList;
    }

    if (!$dara.isNull(request.keywordIds)) {
      body["KeywordIds"] = request.keywordIds;
    }

    if (!$dara.isNull(request.libId)) {
      body["LibId"] = request.libId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteKeyword",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteKeywordResponse>(await this.callApi(params, req, runtime), new DeleteKeywordResponse({}));
    } else {
      return $dara.cast<DeleteKeywordResponse>(await this.execute(params, req, runtime), new DeleteKeywordResponse({}));
    }

  }

  /**
   * 删除关键词
   * 
   * @param request - DeleteKeywordRequest
   * @returns DeleteKeywordResponse
   */
  async deleteKeyword(request: DeleteKeywordRequest): Promise<DeleteKeywordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteKeywordWithOptions(request, runtime);
  }

  /**
   * 删除关键词库
   * 
   * @param request - DeleteKeywordLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteKeywordLibResponse
   */
  async deleteKeywordLibWithOptions(request: DeleteKeywordLibRequest, runtime: $dara.RuntimeOptions): Promise<DeleteKeywordLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.libId)) {
      body["LibId"] = request.libId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteKeywordLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteKeywordLibResponse>(await this.callApi(params, req, runtime), new DeleteKeywordLibResponse({}));
    } else {
      return $dara.cast<DeleteKeywordLibResponse>(await this.execute(params, req, runtime), new DeleteKeywordLibResponse({}));
    }

  }

  /**
   * 删除关键词库
   * 
   * @param request - DeleteKeywordLibRequest
   * @returns DeleteKeywordLibResponse
   */
  async deleteKeywordLib(request: DeleteKeywordLibRequest): Promise<DeleteKeywordLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteKeywordLibWithOptions(request, runtime);
  }

  /**
   * 导出代答答案
   * 
   * @param request - ExportAnswerSampleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportAnswerSampleResponse
   */
  async exportAnswerSampleWithOptions(request: ExportAnswerSampleRequest, runtime: $dara.RuntimeOptions): Promise<ExportAnswerSampleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.libId)) {
      body["LibId"] = request.libId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportAnswerSample",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExportAnswerSampleResponse>(await this.callApi(params, req, runtime), new ExportAnswerSampleResponse({}));
    } else {
      return $dara.cast<ExportAnswerSampleResponse>(await this.execute(params, req, runtime), new ExportAnswerSampleResponse({}));
    }

  }

  /**
   * 导出代答答案
   * 
   * @param request - ExportAnswerSampleRequest
   * @returns ExportAnswerSampleResponse
   */
  async exportAnswerSample(request: ExportAnswerSampleRequest): Promise<ExportAnswerSampleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportAnswerSampleWithOptions(request, runtime);
  }

  /**
   * 导出调用量
   * 
   * @param request - ExportCipStatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportCipStatsResponse
   */
  async exportCipStatsWithOptions(request: ExportCipStatsRequest, runtime: $dara.RuntimeOptions): Promise<ExportCipStatsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.byMonth)) {
      body["ByMonth"] = request.byMonth;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.exportType)) {
      body["ExportType"] = request.exportType;
    }

    if (!$dara.isNull(request.label)) {
      body["Label"] = request.label;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.subUid)) {
      body["SubUid"] = request.subUid;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportCipStats",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExportCipStatsResponse>(await this.callApi(params, req, runtime), new ExportCipStatsResponse({}));
    } else {
      return $dara.cast<ExportCipStatsResponse>(await this.execute(params, req, runtime), new ExportCipStatsResponse({}));
    }

  }

  /**
   * 导出调用量
   * 
   * @param request - ExportCipStatsRequest
   * @returns ExportCipStatsResponse
   */
  async exportCipStats(request: ExportCipStatsRequest): Promise<ExportCipStatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportCipStatsWithOptions(request, runtime);
  }

  /**
   * 导出关键词
   * 
   * @param request - ExportKeywordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportKeywordResponse
   */
  async exportKeywordWithOptions(request: ExportKeywordRequest, runtime: $dara.RuntimeOptions): Promise<ExportKeywordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.libId)) {
      body["LibId"] = request.libId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportKeyword",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExportKeywordResponse>(await this.callApi(params, req, runtime), new ExportKeywordResponse({}));
    } else {
      return $dara.cast<ExportKeywordResponse>(await this.execute(params, req, runtime), new ExportKeywordResponse({}));
    }

  }

  /**
   * 导出关键词
   * 
   * @param request - ExportKeywordRequest
   * @returns ExportKeywordResponse
   */
  async exportKeyword(request: ExportKeywordRequest): Promise<ExportKeywordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportKeywordWithOptions(request, runtime);
  }

  /**
   * oss用量统计导出
   * 
   * @param request - ExportOssCheckStatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportOssCheckStatResponse
   */
  async exportOssCheckStatWithOptions(request: ExportOssCheckStatRequest, runtime: $dara.RuntimeOptions): Promise<ExportOssCheckStatResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.byMonth)) {
      body["ByMonth"] = request.byMonth;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.parentTaskId)) {
      body["ParentTaskId"] = request.parentTaskId;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportOssCheckStat",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExportOssCheckStatResponse>(await this.callApi(params, req, runtime), new ExportOssCheckStatResponse({}));
    } else {
      return $dara.cast<ExportOssCheckStatResponse>(await this.execute(params, req, runtime), new ExportOssCheckStatResponse({}));
    }

  }

  /**
   * oss用量统计导出
   * 
   * @param request - ExportOssCheckStatRequest
   * @returns ExportOssCheckStatResponse
   */
  async exportOssCheckStat(request: ExportOssCheckStatRequest): Promise<ExportOssCheckStatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportOssCheckStatWithOptions(request, runtime);
  }

  /**
   * 导出oss扫描结果
   * 
   * @param tmpReq - ExportResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportResultResponse
   */
  async exportResultWithOptions(tmpReq: ExportResultRequest, runtime: $dara.RuntimeOptions): Promise<ExportResultResponse> {
    tmpReq.validate();
    let request = new ExportResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      body["Query"] = request.query;
    }

    if (!$dara.isNull(request.sortShrink)) {
      body["Sort"] = request.sortShrink;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportResult",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExportResultResponse>(await this.callApi(params, req, runtime), new ExportResultResponse({}));
    } else {
      return $dara.cast<ExportResultResponse>(await this.execute(params, req, runtime), new ExportResultResponse({}));
    }

  }

  /**
   * 导出oss扫描结果
   * 
   * @param request - ExportResultRequest
   * @returns ExportResultResponse
   */
  async exportResult(request: ExportResultRequest): Promise<ExportResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportResultWithOptions(request, runtime);
  }

  /**
   * 导出调用结果，excel文件
   * 
   * @param tmpReq - ExportScanResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportScanResultResponse
   */
  async exportScanResultWithOptions(tmpReq: ExportScanResultRequest, runtime: $dara.RuntimeOptions): Promise<ExportScanResultResponse> {
    tmpReq.validate();
    let request = new ExportScanResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.query)) {
      request.queryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.query, "Query", "json");
    }

    if (!$dara.isNull(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryShrink)) {
      body["Query"] = request.queryShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.sortShrink)) {
      body["Sort"] = request.sortShrink;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportScanResult",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExportScanResultResponse>(await this.callApi(params, req, runtime), new ExportScanResultResponse({}));
    } else {
      return $dara.cast<ExportScanResultResponse>(await this.execute(params, req, runtime), new ExportScanResultResponse({}));
    }

  }

  /**
   * 导出调用结果，excel文件
   * 
   * @param request - ExportScanResultRequest
   * @returns ExportScanResultResponse
   */
  async exportScanResult(request: ExportScanResultRequest): Promise<ExportScanResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportScanResultWithOptions(request, runtime);
  }

  /**
   * 导出调用结果，excel文件
   * 
   * @param tmpReq - ExportTextScanResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportTextScanResultResponse
   */
  async exportTextScanResultWithOptions(tmpReq: ExportTextScanResultRequest, runtime: $dara.RuntimeOptions): Promise<ExportTextScanResultResponse> {
    tmpReq.validate();
    let request = new ExportTextScanResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.query)) {
      request.queryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.query, "Query", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.queryShrink)) {
      body["Query"] = request.queryShrink;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportTextScanResult",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExportTextScanResultResponse>(await this.callApi(params, req, runtime), new ExportTextScanResultResponse({}));
    } else {
      return $dara.cast<ExportTextScanResultResponse>(await this.execute(params, req, runtime), new ExportTextScanResultResponse({}));
    }

  }

  /**
   * 导出调用结果，excel文件
   * 
   * @param request - ExportTextScanResultRequest
   * @returns ExportTextScanResultResponse
   */
  async exportTextScanResult(request: ExportTextScanResultRequest): Promise<ExportTextScanResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportTextScanResultWithOptions(request, runtime);
  }

  /**
   * 获取代答样本导入进度
   * 
   * @param request - GetAnswerImportProgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAnswerImportProgressResponse
   */
  async getAnswerImportProgressWithOptions(request: GetAnswerImportProgressRequest, runtime: $dara.RuntimeOptions): Promise<GetAnswerImportProgressResponse> {
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
      action: "GetAnswerImportProgress",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAnswerImportProgressResponse>(await this.callApi(params, req, runtime), new GetAnswerImportProgressResponse({}));
    } else {
      return $dara.cast<GetAnswerImportProgressResponse>(await this.execute(params, req, runtime), new GetAnswerImportProgressResponse({}));
    }

  }

  /**
   * 获取代答样本导入进度
   * 
   * @param request - GetAnswerImportProgressRequest
   * @returns GetAnswerImportProgressResponse
   */
  async getAnswerImportProgress(request: GetAnswerImportProgressRequest): Promise<GetAnswerImportProgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAnswerImportProgressWithOptions(request, runtime);
  }

  /**
   * 证据转存获取用户bucket列表
   * 
   * @param request - GetBackupBucketsListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBackupBucketsListResponse
   */
  async getBackupBucketsListWithOptions(request: GetBackupBucketsListRequest, runtime: $dara.RuntimeOptions): Promise<GetBackupBucketsListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBackupBucketsList",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetBackupBucketsListResponse>(await this.callApi(params, req, runtime), new GetBackupBucketsListResponse({}));
    } else {
      return $dara.cast<GetBackupBucketsListResponse>(await this.execute(params, req, runtime), new GetBackupBucketsListResponse({}));
    }

  }

  /**
   * 证据转存获取用户bucket列表
   * 
   * @param request - GetBackupBucketsListRequest
   * @returns GetBackupBucketsListResponse
   */
  async getBackupBucketsList(request: GetBackupBucketsListRequest): Promise<GetBackupBucketsListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBackupBucketsListWithOptions(request, runtime);
  }

  /**
   * 获取证据转存配置
   * 
   * @param request - GetBackupConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBackupConfigResponse
   */
  async getBackupConfigWithOptions(request: GetBackupConfigRequest, runtime: $dara.RuntimeOptions): Promise<GetBackupConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBackupConfig",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetBackupConfigResponse>(await this.callApi(params, req, runtime), new GetBackupConfigResponse({}));
    } else {
      return $dara.cast<GetBackupConfigResponse>(await this.execute(params, req, runtime), new GetBackupConfigResponse({}));
    }

  }

  /**
   * 获取证据转存配置
   * 
   * @param request - GetBackupConfigRequest
   * @returns GetBackupConfigResponse
   */
  async getBackupConfig(request: GetBackupConfigRequest): Promise<GetBackupConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBackupConfigWithOptions(request, runtime);
  }

  /**
   * 用户授权校验
   * 
   * @param request - GetBackupStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBackupStatusResponse
   */
  async getBackupStatusWithOptions(request: GetBackupStatusRequest, runtime: $dara.RuntimeOptions): Promise<GetBackupStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBackupStatus",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetBackupStatusResponse>(await this.callApi(params, req, runtime), new GetBackupStatusResponse({}));
    } else {
      return $dara.cast<GetBackupStatusResponse>(await this.execute(params, req, runtime), new GetBackupStatusResponse({}));
    }

  }

  /**
   * 用户授权校验
   * 
   * @param request - GetBackupStatusRequest
   * @returns GetBackupStatusResponse
   */
  async getBackupStatus(request: GetBackupStatusRequest): Promise<GetBackupStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBackupStatusWithOptions(request, runtime);
  }

  /**
   * bucket列表
   * 
   * @param request - GetBucketsListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBucketsListResponse
   */
  async getBucketsListWithOptions(request: GetBucketsListRequest, runtime: $dara.RuntimeOptions): Promise<GetBucketsListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBucketsList",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetBucketsListResponse>(await this.callApi(params, req, runtime), new GetBucketsListResponse({}));
    } else {
      return $dara.cast<GetBucketsListResponse>(await this.execute(params, req, runtime), new GetBucketsListResponse({}));
    }

  }

  /**
   * bucket列表
   * 
   * @param request - GetBucketsListRequest
   * @returns GetBucketsListResponse
   */
  async getBucketsList(request: GetBucketsListRequest): Promise<GetBucketsListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBucketsListWithOptions(request, runtime);
  }

  /**
   * 查询调用量
   * 
   * @param request - GetCipStatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCipStatsResponse
   */
  async getCipStatsWithOptions(request: GetCipStatsRequest, runtime: $dara.RuntimeOptions): Promise<GetCipStatsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.byMonth)) {
      body["ByMonth"] = request.byMonth;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.label)) {
      body["Label"] = request.label;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.subUid)) {
      body["SubUid"] = request.subUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCipStats",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetCipStatsResponse>(await this.callApi(params, req, runtime), new GetCipStatsResponse({}));
    } else {
      return $dara.cast<GetCipStatsResponse>(await this.execute(params, req, runtime), new GetCipStatsResponse({}));
    }

  }

  /**
   * 查询调用量
   * 
   * @param request - GetCipStatsRequest
   * @returns GetCipStatsResponse
   */
  async getCipStats(request: GetCipStatsRequest): Promise<GetCipStatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCipStatsWithOptions(request, runtime);
  }

  /**
   * 获取定时任务预计执行时间
   * 
   * @param request - GetExecuteTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExecuteTimeResponse
   */
  async getExecuteTimeWithOptions(request: GetExecuteTimeRequest, runtime: $dara.RuntimeOptions): Promise<GetExecuteTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExecuteTime",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetExecuteTimeResponse>(await this.callApi(params, req, runtime), new GetExecuteTimeResponse({}));
    } else {
      return $dara.cast<GetExecuteTimeResponse>(await this.execute(params, req, runtime), new GetExecuteTimeResponse({}));
    }

  }

  /**
   * 获取定时任务预计执行时间
   * 
   * @param request - GetExecuteTimeRequest
   * @returns GetExecuteTimeResponse
   */
  async getExecuteTime(request: GetExecuteTimeRequest): Promise<GetExecuteTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getExecuteTimeWithOptions(request, runtime);
  }

  /**
   * Get Feature Configuration
   * 
   * @param request - GetFeatureConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFeatureConfigResponse
   */
  async getFeatureConfigWithOptions(request: GetFeatureConfigRequest, runtime: $dara.RuntimeOptions): Promise<GetFeatureConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFeatureConfig",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetFeatureConfigResponse>(await this.callApi(params, req, runtime), new GetFeatureConfigResponse({}));
    } else {
      return $dara.cast<GetFeatureConfigResponse>(await this.execute(params, req, runtime), new GetFeatureConfigResponse({}));
    }

  }

  /**
   * Get Feature Configuration
   * 
   * @param request - GetFeatureConfigRequest
   * @returns GetFeatureConfigResponse
   */
  async getFeatureConfig(request: GetFeatureConfigRequest): Promise<GetFeatureConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFeatureConfigWithOptions(request, runtime);
  }

  /**
   * 获取图片规则标签信息
   * 
   * @param request - GetImageSceneLabelConfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageSceneLabelConfResponse
   */
  async getImageSceneLabelConfWithOptions(request: GetImageSceneLabelConfRequest, runtime: $dara.RuntimeOptions): Promise<GetImageSceneLabelConfResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetImageSceneLabelConf",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetImageSceneLabelConfResponse>(await this.callApi(params, req, runtime), new GetImageSceneLabelConfResponse({}));
    } else {
      return $dara.cast<GetImageSceneLabelConfResponse>(await this.execute(params, req, runtime), new GetImageSceneLabelConfResponse({}));
    }

  }

  /**
   * 获取图片规则标签信息
   * 
   * @param request - GetImageSceneLabelConfRequest
   * @returns GetImageSceneLabelConfResponse
   */
  async getImageSceneLabelConf(request: GetImageSceneLabelConfRequest): Promise<GetImageSceneLabelConfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getImageSceneLabelConfWithOptions(request, runtime);
  }

  /**
   * 获取图片规则标签信息
   * 
   * @param request - GetImageSceneLabelListConfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageSceneLabelListConfResponse
   */
  async getImageSceneLabelListConfWithOptions(request: GetImageSceneLabelListConfRequest, runtime: $dara.RuntimeOptions): Promise<GetImageSceneLabelListConfResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageServiceCode)) {
      query["ImageServiceCode"] = request.imageServiceCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetImageSceneLabelListConf",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetImageSceneLabelListConfResponse>(await this.callApi(params, req, runtime), new GetImageSceneLabelListConfResponse({}));
    } else {
      return $dara.cast<GetImageSceneLabelListConfResponse>(await this.execute(params, req, runtime), new GetImageSceneLabelListConfResponse({}));
    }

  }

  /**
   * 获取图片规则标签信息
   * 
   * @param request - GetImageSceneLabelListConfRequest
   * @returns GetImageSceneLabelListConfResponse
   */
  async getImageSceneLabelListConf(request: GetImageSceneLabelListConfRequest): Promise<GetImageSceneLabelListConfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getImageSceneLabelListConfWithOptions(request, runtime);
  }

  /**
   * oss定时扫描检测周期查询
   * 
   * @param tmpReq - GetJobNameListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobNameListResponse
   */
  async getJobNameListWithOptions(tmpReq: GetJobNameListRequest, runtime: $dara.RuntimeOptions): Promise<GetJobNameListResponse> {
    tmpReq.validate();
    let request = new GetJobNameListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sortShrink)) {
      query["Sort"] = request.sortShrink;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobNameList",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetJobNameListResponse>(await this.callApi(params, req, runtime), new GetJobNameListResponse({}));
    } else {
      return $dara.cast<GetJobNameListResponse>(await this.execute(params, req, runtime), new GetJobNameListResponse({}));
    }

  }

  /**
   * oss定时扫描检测周期查询
   * 
   * @param request - GetJobNameListRequest
   * @returns GetJobNameListResponse
   */
  async getJobNameList(request: GetJobNameListRequest): Promise<GetJobNameListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getJobNameListWithOptions(request, runtime);
  }

  /**
   * 查询导入关键词结果
   * 
   * @param request - GetKeywordImportResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKeywordImportResultResponse
   */
  async getKeywordImportResultWithOptions(request: GetKeywordImportResultRequest, runtime: $dara.RuntimeOptions): Promise<GetKeywordImportResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetKeywordImportResult",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetKeywordImportResultResponse>(await this.callApi(params, req, runtime), new GetKeywordImportResultResponse({}));
    } else {
      return $dara.cast<GetKeywordImportResultResponse>(await this.execute(params, req, runtime), new GetKeywordImportResultResponse({}));
    }

  }

  /**
   * 查询导入关键词结果
   * 
   * @param request - GetKeywordImportResultRequest
   * @returns GetKeywordImportResultResponse
   */
  async getKeywordImportResult(request: GetKeywordImportResultRequest): Promise<GetKeywordImportResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getKeywordImportResultWithOptions(request, runtime);
  }

  /**
   * 关键词库信息
   * 
   * @param request - GetKeywordLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKeywordLibResponse
   */
  async getKeywordLibWithOptions(request: GetKeywordLibRequest, runtime: $dara.RuntimeOptions): Promise<GetKeywordLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.libId)) {
      body["LibId"] = request.libId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetKeywordLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetKeywordLibResponse>(await this.callApi(params, req, runtime), new GetKeywordLibResponse({}));
    } else {
      return $dara.cast<GetKeywordLibResponse>(await this.execute(params, req, runtime), new GetKeywordLibResponse({}));
    }

  }

  /**
   * 关键词库信息
   * 
   * @param request - GetKeywordLibRequest
   * @returns GetKeywordLibResponse
   */
  async getKeywordLib(request: GetKeywordLibRequest): Promise<GetKeywordLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getKeywordLibWithOptions(request, runtime);
  }

  /**
   * oss用量统计
   * 
   * @param request - GetOssCheckStatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOssCheckStatResponse
   */
  async getOssCheckStatWithOptions(request: GetOssCheckStatRequest, runtime: $dara.RuntimeOptions): Promise<GetOssCheckStatResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.byMonth)) {
      body["ByMonth"] = request.byMonth;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.parentTaskId)) {
      body["ParentTaskId"] = request.parentTaskId;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOssCheckStat",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetOssCheckStatResponse>(await this.callApi(params, req, runtime), new GetOssCheckStatResponse({}));
    } else {
      return $dara.cast<GetOssCheckStatResponse>(await this.execute(params, req, runtime), new GetOssCheckStatResponse({}));
    }

  }

  /**
   * oss用量统计
   * 
   * @param request - GetOssCheckStatRequest
   * @returns GetOssCheckStatResponse
   */
  async getOssCheckStat(request: GetOssCheckStatRequest): Promise<GetOssCheckStatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOssCheckStatWithOptions(request, runtime);
  }

  /**
   * 获取OSS检测用户状态
   * 
   * @param request - GetOssCheckStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOssCheckStatusResponse
   */
  async getOssCheckStatusWithOptions(request: GetOssCheckStatusRequest, runtime: $dara.RuntimeOptions): Promise<GetOssCheckStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOssCheckStatus",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetOssCheckStatusResponse>(await this.callApi(params, req, runtime), new GetOssCheckStatusResponse({}));
    } else {
      return $dara.cast<GetOssCheckStatusResponse>(await this.execute(params, req, runtime), new GetOssCheckStatusResponse({}));
    }

  }

  /**
   * 获取OSS检测用户状态
   * 
   * @param request - GetOssCheckStatusRequest
   * @returns GetOssCheckStatusResponse
   */
  async getOssCheckStatus(request: GetOssCheckStatusRequest): Promise<GetOssCheckStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOssCheckStatusWithOptions(request, runtime);
  }

  /**
   * 用户待检测信息
   * 
   * @param request - GetScanNumRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScanNumResponse
   */
  async getScanNumWithOptions(request: GetScanNumRequest, runtime: $dara.RuntimeOptions): Promise<GetScanNumResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buckets)) {
      query["Buckets"] = request.buckets;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetScanNum",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetScanNumResponse>(await this.callApi(params, req, runtime), new GetScanNumResponse({}));
    } else {
      return $dara.cast<GetScanNumResponse>(await this.execute(params, req, runtime), new GetScanNumResponse({}));
    }

  }

  /**
   * 用户待检测信息
   * 
   * @param request - GetScanNumRequest
   * @returns GetScanNumResponse
   */
  async getScanNum(request: GetScanNumRequest): Promise<GetScanNumResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getScanNumWithOptions(request, runtime);
  }

  /**
   * 查询调用结果
   * 
   * @param tmpReq - GetScanResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScanResultResponse
   */
  async getScanResultWithOptions(tmpReq: GetScanResultRequest, runtime: $dara.RuntimeOptions): Promise<GetScanResultResponse> {
    tmpReq.validate();
    let request = new GetScanResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.query)) {
      request.queryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.query, "Query", "json");
    }

    if (!$dara.isNull(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryShrink)) {
      body["Query"] = request.queryShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.sortShrink)) {
      body["Sort"] = request.sortShrink;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetScanResult",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetScanResultResponse>(await this.callApi(params, req, runtime), new GetScanResultResponse({}));
    } else {
      return $dara.cast<GetScanResultResponse>(await this.execute(params, req, runtime), new GetScanResultResponse({}));
    }

  }

  /**
   * 查询调用结果
   * 
   * @param request - GetScanResultRequest
   * @returns GetScanResultResponse
   */
  async getScanResult(request: GetScanResultRequest): Promise<GetScanResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getScanResultWithOptions(request, runtime);
  }

  /**
   * 获取单个服务
   * 
   * @param request - GetServiceConfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceConfResponse
   */
  async getServiceConfWithOptions(request: GetServiceConfRequest, runtime: $dara.RuntimeOptions): Promise<GetServiceConfResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.byDefault)) {
      body["ByDefault"] = request.byDefault;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceConf",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetServiceConfResponse>(await this.callApi(params, req, runtime), new GetServiceConfResponse({}));
    } else {
      return $dara.cast<GetServiceConfResponse>(await this.execute(params, req, runtime), new GetServiceConfResponse({}));
    }

  }

  /**
   * 获取单个服务
   * 
   * @param request - GetServiceConfRequest
   * @returns GetServiceConfResponse
   */
  async getServiceConf(request: GetServiceConfRequest): Promise<GetServiceConfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceConfWithOptions(request, runtime);
  }

  /**
   * 获取单个服务
   * 
   * @param request - GetServiceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceConfigResponse
   */
  async getServiceConfigWithOptions(request: GetServiceConfigRequest, runtime: $dara.RuntimeOptions): Promise<GetServiceConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceConfig",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetServiceConfigResponse>(await this.callApi(params, req, runtime), new GetServiceConfigResponse({}));
    } else {
      return $dara.cast<GetServiceConfigResponse>(await this.execute(params, req, runtime), new GetServiceConfigResponse({}));
    }

  }

  /**
   * 获取单个服务
   * 
   * @param request - GetServiceConfigRequest
   * @returns GetServiceConfigResponse
   */
  async getServiceConfig(request: GetServiceConfigRequest): Promise<GetServiceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceConfigWithOptions(request, runtime);
  }

  /**
   * 获取单个服务的标签配置
   * 
   * @param request - GetServiceLabelConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceLabelConfigResponse
   */
  async getServiceLabelConfigWithOptions(request: GetServiceLabelConfigRequest, runtime: $dara.RuntimeOptions): Promise<GetServiceLabelConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceLabelConfig",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetServiceLabelConfigResponse>(await this.callApi(params, req, runtime), new GetServiceLabelConfigResponse({}));
    } else {
      return $dara.cast<GetServiceLabelConfigResponse>(await this.execute(params, req, runtime), new GetServiceLabelConfigResponse({}));
    }

  }

  /**
   * 获取单个服务的标签配置
   * 
   * @param request - GetServiceLabelConfigRequest
   * @returns GetServiceLabelConfigResponse
   */
  async getServiceLabelConfig(request: GetServiceLabelConfigRequest): Promise<GetServiceLabelConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceLabelConfigWithOptions(request, runtime);
  }

  /**
   * 查询oss扫描任务列表
   * 
   * @param tmpReq - GetStockOssCheckTasksListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStockOssCheckTasksListResponse
   */
  async getStockOssCheckTasksListWithOptions(tmpReq: GetStockOssCheckTasksListRequest, runtime: $dara.RuntimeOptions): Promise<GetStockOssCheckTasksListResponse> {
    tmpReq.validate();
    let request = new GetStockOssCheckTasksListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!$dara.isNull(request.isInc)) {
      query["IsInc"] = request.isInc;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.mediaType)) {
      body["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortShrink)) {
      body["Sort"] = request.sortShrink;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStockOssCheckTasksList",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetStockOssCheckTasksListResponse>(await this.callApi(params, req, runtime), new GetStockOssCheckTasksListResponse({}));
    } else {
      return $dara.cast<GetStockOssCheckTasksListResponse>(await this.execute(params, req, runtime), new GetStockOssCheckTasksListResponse({}));
    }

  }

  /**
   * 查询oss扫描任务列表
   * 
   * @param request - GetStockOssCheckTasksListRequest
   * @returns GetStockOssCheckTasksListResponse
   */
  async getStockOssCheckTasksList(request: GetStockOssCheckTasksListRequest): Promise<GetStockOssCheckTasksListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStockOssCheckTasksListWithOptions(request, runtime);
  }

  /**
   * 查询调用结果
   * 
   * @param tmpReq - GetTextScanResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTextScanResultResponse
   */
  async getTextScanResultWithOptions(tmpReq: GetTextScanResultRequest, runtime: $dara.RuntimeOptions): Promise<GetTextScanResultResponse> {
    tmpReq.validate();
    let request = new GetTextScanResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.query)) {
      request.queryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.query, "Query", "json");
    }

    if (!$dara.isNull(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryShrink)) {
      body["Query"] = request.queryShrink;
    }

    if (!$dara.isNull(request.sortShrink)) {
      body["Sort"] = request.sortShrink;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTextScanResult",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTextScanResultResponse>(await this.callApi(params, req, runtime), new GetTextScanResultResponse({}));
    } else {
      return $dara.cast<GetTextScanResultResponse>(await this.execute(params, req, runtime), new GetTextScanResultResponse({}));
    }

  }

  /**
   * 查询调用结果
   * 
   * @param request - GetTextScanResultRequest
   * @returns GetTextScanResultResponse
   */
  async getTextScanResult(request: GetTextScanResultRequest): Promise<GetTextScanResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTextScanResultWithOptions(request, runtime);
  }

  /**
   * 文件上传获取相应信息
   * 
   * @param request - GetUploadInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUploadInfoResponse
   */
  async getUploadInfoWithOptions(request: GetUploadInfoRequest, runtime: $dara.RuntimeOptions): Promise<GetUploadInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUploadInfo",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetUploadInfoResponse>(await this.callApi(params, req, runtime), new GetUploadInfoResponse({}));
    } else {
      return $dara.cast<GetUploadInfoResponse>(await this.execute(params, req, runtime), new GetUploadInfoResponse({}));
    }

  }

  /**
   * 文件上传获取相应信息
   * 
   * @param request - GetUploadInfoRequest
   * @returns GetUploadInfoResponse
   */
  async getUploadInfo(request: GetUploadInfoRequest): Promise<GetUploadInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUploadInfoWithOptions(request, runtime);
  }

  /**
   * 获取用户购买状态
   * 
   * @param request - GetUserBuyStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserBuyStatusResponse
   */
  async getUserBuyStatusWithOptions(request: GetUserBuyStatusRequest, runtime: $dara.RuntimeOptions): Promise<GetUserBuyStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.commodityCode)) {
      body["CommodityCode"] = request.commodityCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserBuyStatus",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetUserBuyStatusResponse>(await this.callApi(params, req, runtime), new GetUserBuyStatusResponse({}));
    } else {
      return $dara.cast<GetUserBuyStatusResponse>(await this.execute(params, req, runtime), new GetUserBuyStatusResponse({}));
    }

  }

  /**
   * 获取用户购买状态
   * 
   * @param request - GetUserBuyStatusRequest
   * @returns GetUserBuyStatusResponse
   */
  async getUserBuyStatus(request: GetUserBuyStatusRequest): Promise<GetUserBuyStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserBuyStatusWithOptions(request, runtime);
  }

  /**
   * 代答库列表
   * 
   * @param request - ListAnswerLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAnswerLibResponse
   */
  async listAnswerLibWithOptions(request: ListAnswerLibRequest, runtime: $dara.RuntimeOptions): Promise<ListAnswerLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAnswerLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAnswerLibResponse>(await this.callApi(params, req, runtime), new ListAnswerLibResponse({}));
    } else {
      return $dara.cast<ListAnswerLibResponse>(await this.execute(params, req, runtime), new ListAnswerLibResponse({}));
    }

  }

  /**
   * 代答库列表
   * 
   * @param request - ListAnswerLibRequest
   * @returns ListAnswerLibResponse
   */
  async listAnswerLib(request: ListAnswerLibRequest): Promise<ListAnswerLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAnswerLibWithOptions(request, runtime);
  }

  /**
   * 消息通知列表
   * 
   * @param request - ListCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCallbackResponse
   */
  async listCallbackWithOptions(request: ListCallbackRequest, runtime: $dara.RuntimeOptions): Promise<ListCallbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCallback",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListCallbackResponse>(await this.callApi(params, req, runtime), new ListCallbackResponse({}));
    } else {
      return $dara.cast<ListCallbackResponse>(await this.execute(params, req, runtime), new ListCallbackResponse({}));
    }

  }

  /**
   * 消息通知列表
   * 
   * @param request - ListCallbackRequest
   * @returns ListCallbackResponse
   */
  async listCallback(request: ListCallbackRequest): Promise<ListCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCallbackWithOptions(request, runtime);
  }

  /**
   * 图库列表
   * 
   * @param request - ListImageLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImageLibResponse
   */
  async listImageLibWithOptions(request: ListImageLibRequest, runtime: $dara.RuntimeOptions): Promise<ListImageLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListImageLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListImageLibResponse>(await this.callApi(params, req, runtime), new ListImageLibResponse({}));
    } else {
      return $dara.cast<ListImageLibResponse>(await this.execute(params, req, runtime), new ListImageLibResponse({}));
    }

  }

  /**
   * 图库列表
   * 
   * @param request - ListImageLibRequest
   * @returns ListImageLibResponse
   */
  async listImageLib(request: ListImageLibRequest): Promise<ListImageLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listImageLibWithOptions(request, runtime);
  }

  /**
   * 图片列表 分页
   * 
   * @param tmpReq - ListImagesFromLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImagesFromLibResponse
   */
  async listImagesFromLibWithOptions(tmpReq: ListImagesFromLibRequest, runtime: $dara.RuntimeOptions): Promise<ListImagesFromLibResponse> {
    tmpReq.validate();
    let request = new ListImagesFromLibShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.imgId)) {
      body["ImgId"] = request.imgId;
    }

    if (!$dara.isNull(request.libId)) {
      body["LibId"] = request.libId;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortShrink)) {
      body["Sort"] = request.sortShrink;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListImagesFromLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListImagesFromLibResponse>(await this.callApi(params, req, runtime), new ListImagesFromLibResponse({}));
    } else {
      return $dara.cast<ListImagesFromLibResponse>(await this.execute(params, req, runtime), new ListImagesFromLibResponse({}));
    }

  }

  /**
   * 图片列表 分页
   * 
   * @param request - ListImagesFromLibRequest
   * @returns ListImagesFromLibResponse
   */
  async listImagesFromLib(request: ListImagesFromLibRequest): Promise<ListImagesFromLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listImagesFromLibWithOptions(request, runtime);
  }

  /**
   * 关键词库列表
   * 
   * @param request - ListKeywordLibsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKeywordLibsResponse
   */
  async listKeywordLibsWithOptions(request: ListKeywordLibsRequest, runtime: $dara.RuntimeOptions): Promise<ListKeywordLibsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListKeywordLibs",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListKeywordLibsResponse>(await this.callApi(params, req, runtime), new ListKeywordLibsResponse({}));
    } else {
      return $dara.cast<ListKeywordLibsResponse>(await this.execute(params, req, runtime), new ListKeywordLibsResponse({}));
    }

  }

  /**
   * 关键词库列表
   * 
   * @param request - ListKeywordLibsRequest
   * @returns ListKeywordLibsResponse
   */
  async listKeywordLibs(request: ListKeywordLibsRequest): Promise<ListKeywordLibsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listKeywordLibsWithOptions(request, runtime);
  }

  /**
   * 查询关键词列表
   * 
   * @param tmpReq - ListKeywordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKeywordsResponse
   */
  async listKeywordsWithOptions(tmpReq: ListKeywordsRequest, runtime: $dara.RuntimeOptions): Promise<ListKeywordsResponse> {
    tmpReq.validate();
    let request = new ListKeywordsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.libId)) {
      body["LibId"] = request.libId;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortShrink)) {
      body["Sort"] = request.sortShrink;
    }

    if (!$dara.isNull(request.word)) {
      body["Word"] = request.word;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListKeywords",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListKeywordsResponse>(await this.callApi(params, req, runtime), new ListKeywordsResponse({}));
    } else {
      return $dara.cast<ListKeywordsResponse>(await this.execute(params, req, runtime), new ListKeywordsResponse({}));
    }

  }

  /**
   * 查询关键词列表
   * 
   * @param request - ListKeywordsRequest
   * @returns ListKeywordsResponse
   */
  async listKeywords(request: ListKeywordsRequest): Promise<ListKeywordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listKeywordsWithOptions(request, runtime);
  }

  /**
   * oss扫描结果查询
   * 
   * @param tmpReq - ListOssCheckResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOssCheckResultResponse
   */
  async listOssCheckResultWithOptions(tmpReq: ListOssCheckResultRequest, runtime: $dara.RuntimeOptions): Promise<ListOssCheckResultResponse> {
    tmpReq.validate();
    let request = new ListOssCheckResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.finishNum)) {
      query["FinishNum"] = request.finishNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sortShrink)) {
      query["Sort"] = request.sortShrink;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOssCheckResult",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListOssCheckResultResponse>(await this.callApi(params, req, runtime), new ListOssCheckResultResponse({}));
    } else {
      return $dara.cast<ListOssCheckResultResponse>(await this.execute(params, req, runtime), new ListOssCheckResultResponse({}));
    }

  }

  /**
   * oss扫描结果查询
   * 
   * @param request - ListOssCheckResultRequest
   * @returns ListOssCheckResultResponse
   */
  async listOssCheckResult(request: ListOssCheckResultRequest): Promise<ListOssCheckResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOssCheckResultWithOptions(request, runtime);
  }

  /**
   * 获取服务列表
   * 
   * @param request - ListServiceConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceConfigsResponse
   */
  async listServiceConfigsWithOptions(request: ListServiceConfigsRequest, runtime: $dara.RuntimeOptions): Promise<ListServiceConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.classify)) {
      query["Classify"] = request.classify;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.useStatus)) {
      query["UseStatus"] = request.useStatus;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceConfigs",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListServiceConfigsResponse>(await this.callApi(params, req, runtime), new ListServiceConfigsResponse({}));
    } else {
      return $dara.cast<ListServiceConfigsResponse>(await this.execute(params, req, runtime), new ListServiceConfigsResponse({}));
    }

  }

  /**
   * 获取服务列表
   * 
   * @param request - ListServiceConfigsRequest
   * @returns ListServiceConfigsResponse
   */
  async listServiceConfigs(request: ListServiceConfigsRequest): Promise<ListServiceConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceConfigsWithOptions(request, runtime);
  }

  /**
   * 更新代答库
   * 
   * @param request - ModifyAnswerLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAnswerLibResponse
   */
  async modifyAnswerLibWithOptions(request: ModifyAnswerLibRequest, runtime: $dara.RuntimeOptions): Promise<ModifyAnswerLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.libId)) {
      query["LibId"] = request.libId;
    }

    if (!$dara.isNull(request.libName)) {
      query["LibName"] = request.libName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAnswerLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyAnswerLibResponse>(await this.callApi(params, req, runtime), new ModifyAnswerLibResponse({}));
    } else {
      return $dara.cast<ModifyAnswerLibResponse>(await this.execute(params, req, runtime), new ModifyAnswerLibResponse({}));
    }

  }

  /**
   * 更新代答库
   * 
   * @param request - ModifyAnswerLibRequest
   * @returns ModifyAnswerLibResponse
   */
  async modifyAnswerLib(request: ModifyAnswerLibRequest): Promise<ModifyAnswerLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAnswerLibWithOptions(request, runtime);
  }

  /**
   * 修改消息通知
   * 
   * @param request - ModifyCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCallbackResponse
   */
  async modifyCallbackWithOptions(request: ModifyCallbackRequest, runtime: $dara.RuntimeOptions): Promise<ModifyCallbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cryptType)) {
      body["CryptType"] = request.cryptType;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.scope)) {
      body["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.url)) {
      body["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCallback",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyCallbackResponse>(await this.callApi(params, req, runtime), new ModifyCallbackResponse({}));
    } else {
      return $dara.cast<ModifyCallbackResponse>(await this.execute(params, req, runtime), new ModifyCallbackResponse({}));
    }

  }

  /**
   * 修改消息通知
   * 
   * @param request - ModifyCallbackRequest
   * @returns ModifyCallbackResponse
   */
  async modifyCallback(request: ModifyCallbackRequest): Promise<ModifyCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCallbackWithOptions(request, runtime);
  }

  /**
   * Save Feature Configuration
   * 
   * @param request - ModifyFeatureConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFeatureConfigResponse
   */
  async modifyFeatureConfigWithOptions(request: ModifyFeatureConfigRequest, runtime: $dara.RuntimeOptions): Promise<ModifyFeatureConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.field)) {
      body["Field"] = request.field;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyFeatureConfig",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyFeatureConfigResponse>(await this.callApi(params, req, runtime), new ModifyFeatureConfigResponse({}));
    } else {
      return $dara.cast<ModifyFeatureConfigResponse>(await this.execute(params, req, runtime), new ModifyFeatureConfigResponse({}));
    }

  }

  /**
   * Save Feature Configuration
   * 
   * @param request - ModifyFeatureConfigRequest
   * @returns ModifyFeatureConfigResponse
   */
  async modifyFeatureConfig(request: ModifyFeatureConfigRequest): Promise<ModifyFeatureConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyFeatureConfigWithOptions(request, runtime);
  }

  /**
   * 编辑服务
   * 
   * @param request - ModifyServiceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyServiceInfoResponse
   */
  async modifyServiceInfoWithOptions(request: ModifyServiceInfoRequest, runtime: $dara.RuntimeOptions): Promise<ModifyServiceInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.serviceDesc)) {
      body["ServiceDesc"] = request.serviceDesc;
    }

    if (!$dara.isNull(request.serviceName)) {
      body["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyServiceInfo",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyServiceInfoResponse>(await this.callApi(params, req, runtime), new ModifyServiceInfoResponse({}));
    } else {
      return $dara.cast<ModifyServiceInfoResponse>(await this.execute(params, req, runtime), new ModifyServiceInfoResponse({}));
    }

  }

  /**
   * 编辑服务
   * 
   * @param request - ModifyServiceInfoRequest
   * @returns ModifyServiceInfoResponse
   */
  async modifyServiceInfo(request: ModifyServiceInfoRequest): Promise<ModifyServiceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyServiceInfoWithOptions(request, runtime);
  }

  /**
   * 分页查询代答样本
   * 
   * @param tmpReq - QueryAnswerSampleByPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAnswerSampleByPageResponse
   */
  async queryAnswerSampleByPageWithOptions(tmpReq: QueryAnswerSampleByPageRequest, runtime: $dara.RuntimeOptions): Promise<QueryAnswerSampleByPageResponse> {
    tmpReq.validate();
    let request = new QueryAnswerSampleByPageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!$dara.isNull(request.answer)) {
      query["Answer"] = request.answer;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.libId)) {
      query["LibId"] = request.libId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sortShrink)) {
      query["Sort"] = request.sortShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAnswerSampleByPage",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryAnswerSampleByPageResponse>(await this.callApi(params, req, runtime), new QueryAnswerSampleByPageResponse({}));
    } else {
      return $dara.cast<QueryAnswerSampleByPageResponse>(await this.execute(params, req, runtime), new QueryAnswerSampleByPageResponse({}));
    }

  }

  /**
   * 分页查询代答样本
   * 
   * @param request - QueryAnswerSampleByPageRequest
   * @returns QueryAnswerSampleByPageResponse
   */
  async queryAnswerSampleByPage(request: QueryAnswerSampleByPageRequest): Promise<QueryAnswerSampleByPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAnswerSampleByPageWithOptions(request, runtime);
  }

  /**
   * 查询单个回调配置
   * 
   * @param request - QueryCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCallbackResponse
   */
  async queryCallbackWithOptions(request: QueryCallbackRequest, runtime: $dara.RuntimeOptions): Promise<QueryCallbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkForOss)) {
      body["CheckForOss"] = request.checkForOss;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCallback",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryCallbackResponse>(await this.callApi(params, req, runtime), new QueryCallbackResponse({}));
    } else {
      return $dara.cast<QueryCallbackResponse>(await this.execute(params, req, runtime), new QueryCallbackResponse({}));
    }

  }

  /**
   * 查询单个回调配置
   * 
   * @param request - QueryCallbackRequest
   * @returns QueryCallbackResponse
   */
  async queryCallback(request: QueryCallbackRequest): Promise<QueryCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCallbackWithOptions(request, runtime);
  }

  /**
   * 消息通知
   * 
   * @param request - QueryCallbackByPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCallbackByPageResponse
   */
  async queryCallbackByPageWithOptions(request: QueryCallbackByPageRequest, runtime: $dara.RuntimeOptions): Promise<QueryCallbackByPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCallbackByPage",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryCallbackByPageResponse>(await this.callApi(params, req, runtime), new QueryCallbackByPageResponse({}));
    } else {
      return $dara.cast<QueryCallbackByPageResponse>(await this.execute(params, req, runtime), new QueryCallbackByPageResponse({}));
    }

  }

  /**
   * 消息通知
   * 
   * @param request - QueryCallbackByPageRequest
   * @returns QueryCallbackByPageResponse
   */
  async queryCallbackByPage(request: QueryCallbackByPageRequest): Promise<QueryCallbackByPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCallbackByPageWithOptions(request, runtime);
  }

  /**
   * 更新证据转存配置
   * 
   * @param request - UpdateBackupConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBackupConfigResponse
   */
  async updateBackupConfigWithOptions(request: UpdateBackupConfigRequest, runtime: $dara.RuntimeOptions): Promise<UpdateBackupConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupConfig)) {
      query["BackupConfig"] = request.backupConfig;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBackupConfig",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateBackupConfigResponse>(await this.callApi(params, req, runtime), new UpdateBackupConfigResponse({}));
    } else {
      return $dara.cast<UpdateBackupConfigResponse>(await this.execute(params, req, runtime), new UpdateBackupConfigResponse({}));
    }

  }

  /**
   * 更新证据转存配置
   * 
   * @param request - UpdateBackupConfigRequest
   * @returns UpdateBackupConfigResponse
   */
  async updateBackupConfig(request: UpdateBackupConfigRequest): Promise<UpdateBackupConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateBackupConfigWithOptions(request, runtime);
  }

  /**
   * 编辑图库
   * 
   * @param request - UpdateImageLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateImageLibResponse
   */
  async updateImageLibWithOptions(request: UpdateImageLibRequest, runtime: $dara.RuntimeOptions): Promise<UpdateImageLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.freeInspection)) {
      body["FreeInspection"] = request.freeInspection;
    }

    if (!$dara.isNull(request.libId)) {
      body["LibId"] = request.libId;
    }

    if (!$dara.isNull(request.libName)) {
      body["LibName"] = request.libName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateImageLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateImageLibResponse>(await this.callApi(params, req, runtime), new UpdateImageLibResponse({}));
    } else {
      return $dara.cast<UpdateImageLibResponse>(await this.execute(params, req, runtime), new UpdateImageLibResponse({}));
    }

  }

  /**
   * 编辑图库
   * 
   * @param request - UpdateImageLibRequest
   * @returns UpdateImageLibResponse
   */
  async updateImageLib(request: UpdateImageLibRequest): Promise<UpdateImageLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateImageLibWithOptions(request, runtime);
  }

  /**
   * 编辑图库免检配置
   * 
   * @param tmpReq - UpdateImageLibFreeInspectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateImageLibFreeInspectionResponse
   */
  async updateImageLibFreeInspectionWithOptions(tmpReq: UpdateImageLibFreeInspectionRequest, runtime: $dara.RuntimeOptions): Promise<UpdateImageLibFreeInspectionResponse> {
    tmpReq.validate();
    let request = new UpdateImageLibFreeInspectionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.config)) {
      request.configShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.config, "Config", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configShrink)) {
      body["Config"] = request.configShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateImageLibFreeInspection",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateImageLibFreeInspectionResponse>(await this.callApi(params, req, runtime), new UpdateImageLibFreeInspectionResponse({}));
    } else {
      return $dara.cast<UpdateImageLibFreeInspectionResponse>(await this.execute(params, req, runtime), new UpdateImageLibFreeInspectionResponse({}));
    }

  }

  /**
   * 编辑图库免检配置
   * 
   * @param request - UpdateImageLibFreeInspectionRequest
   * @returns UpdateImageLibFreeInspectionResponse
   */
  async updateImageLibFreeInspection(request: UpdateImageLibFreeInspectionRequest): Promise<UpdateImageLibFreeInspectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateImageLibFreeInspectionWithOptions(request, runtime);
  }

  /**
   * 编辑关键词库
   * 
   * @param request - UpdateKeywordLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateKeywordLibResponse
   */
  async updateKeywordLibWithOptions(request: UpdateKeywordLibRequest, runtime: $dara.RuntimeOptions): Promise<UpdateKeywordLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.libId)) {
      body["LibId"] = request.libId;
    }

    if (!$dara.isNull(request.libName)) {
      body["LibName"] = request.libName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateKeywordLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateKeywordLibResponse>(await this.callApi(params, req, runtime), new UpdateKeywordLibResponse({}));
    } else {
      return $dara.cast<UpdateKeywordLibResponse>(await this.execute(params, req, runtime), new UpdateKeywordLibResponse({}));
    }

  }

  /**
   * 编辑关键词库
   * 
   * @param request - UpdateKeywordLibRequest
   * @returns UpdateKeywordLibResponse
   */
  async updateKeywordLib(request: UpdateKeywordLibRequest): Promise<UpdateKeywordLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateKeywordLibWithOptions(request, runtime);
  }

  /**
   * 检测结果反馈
   * 
   * @param request - UpdateScanResultFeedbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateScanResultFeedbackResponse
   */
  async updateScanResultFeedbackWithOptions(request: UpdateScanResultFeedbackRequest, runtime: $dara.RuntimeOptions): Promise<UpdateScanResultFeedbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.feedback)) {
      body["Feedback"] = request.feedback;
    }

    if (!$dara.isNull(request.queryRequestId)) {
      body["QueryRequestId"] = request.queryRequestId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateScanResultFeedback",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateScanResultFeedbackResponse>(await this.callApi(params, req, runtime), new UpdateScanResultFeedbackResponse({}));
    } else {
      return $dara.cast<UpdateScanResultFeedbackResponse>(await this.execute(params, req, runtime), new UpdateScanResultFeedbackResponse({}));
    }

  }

  /**
   * 检测结果反馈
   * 
   * @param request - UpdateScanResultFeedbackRequest
   * @returns UpdateScanResultFeedbackResponse
   */
  async updateScanResultFeedback(request: UpdateScanResultFeedbackRequest): Promise<UpdateScanResultFeedbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateScanResultFeedbackWithOptions(request, runtime);
  }

  /**
   * 更新服务
   * 
   * @param request - UpdateServiceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceConfigResponse
   */
  async updateServiceConfigWithOptions(request: UpdateServiceConfigRequest, runtime: $dara.RuntimeOptions): Promise<UpdateServiceConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileConfig)) {
      body["FileConfig"] = request.fileConfig;
    }

    if (!$dara.isNull(request.keywordFilterLibs)) {
      body["KeywordFilterLibs"] = request.keywordFilterLibs;
    }

    if (!$dara.isNull(request.keywordHitLibs)) {
      body["KeywordHitLibs"] = request.keywordHitLibs;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.sceneConfig)) {
      body["SceneConfig"] = request.sceneConfig;
    }

    if (!$dara.isNull(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.videoConfig)) {
      body["VideoConfig"] = request.videoConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceConfig",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateServiceConfigResponse>(await this.callApi(params, req, runtime), new UpdateServiceConfigResponse({}));
    } else {
      return $dara.cast<UpdateServiceConfigResponse>(await this.execute(params, req, runtime), new UpdateServiceConfigResponse({}));
    }

  }

  /**
   * 更新服务
   * 
   * @param request - UpdateServiceConfigRequest
   * @returns UpdateServiceConfigResponse
   */
  async updateServiceConfig(request: UpdateServiceConfigRequest): Promise<UpdateServiceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateServiceConfigWithOptions(request, runtime);
  }

}
