// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAnnotationMissionSummaryResponseBodyDataAsrSummaryInfo extends $dara.Model {
  /**
   * @example
   * 1
   */
  addCustomizationDataCount?: number;
  /**
   * @example
   * 1
   */
  addVocabularyDataCount?: number;
  /**
   * @example
   * 1
   */
  annotationInvalid?: number;
  /**
   * @example
   * 1
   */
  characterCorrectRate?: number;
  /**
   * @example
   * 1
   */
  characterErrorRate?: number;
  /**
   * @example
   * 1
   */
  chatTotalCount?: number;
  /**
   * @example
   * 1
   */
  noAnnotation?: number;
  /**
   * @example
   * 1
   */
  sentenceErrorRate?: number;
  /**
   * @example
   * 1
   */
  wordErrorRate?: number;
  static names(): { [key: string]: string } {
    return {
      addCustomizationDataCount: 'AddCustomizationDataCount',
      addVocabularyDataCount: 'AddVocabularyDataCount',
      annotationInvalid: 'AnnotationInvalid',
      characterCorrectRate: 'CharacterCorrectRate',
      characterErrorRate: 'CharacterErrorRate',
      chatTotalCount: 'ChatTotalCount',
      noAnnotation: 'NoAnnotation',
      sentenceErrorRate: 'SentenceErrorRate',
      wordErrorRate: 'WordErrorRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addCustomizationDataCount: 'number',
      addVocabularyDataCount: 'number',
      annotationInvalid: 'number',
      characterCorrectRate: 'number',
      characterErrorRate: 'number',
      chatTotalCount: 'number',
      noAnnotation: 'number',
      sentenceErrorRate: 'number',
      wordErrorRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAnnotationMissionSummaryResponseBodyDataIntentSummaryInfo extends $dara.Model {
  /**
   * @example
   * 1
   */
  annotationCorrectCount?: number;
  /**
   * @example
   * 1
   */
  annotationInvalid?: number;
  /**
   * @example
   * 1
   */
  chatTotalCount?: number;
  /**
   * @example
   * 1
   */
  intentUserSayCount?: number;
  /**
   * @example
   * 1
   */
  intentionNotCoveredCount?: number;
  /**
   * @example
   * 1
   */
  matchErrorCount?: number;
  /**
   * @example
   * 1
   */
  noAnnotation?: number;
  /**
   * @example
   * 1
   */
  translationUnrecognizedCount?: number;
  static names(): { [key: string]: string } {
    return {
      annotationCorrectCount: 'AnnotationCorrectCount',
      annotationInvalid: 'AnnotationInvalid',
      chatTotalCount: 'ChatTotalCount',
      intentUserSayCount: 'IntentUserSayCount',
      intentionNotCoveredCount: 'IntentionNotCoveredCount',
      matchErrorCount: 'MatchErrorCount',
      noAnnotation: 'NoAnnotation',
      translationUnrecognizedCount: 'TranslationUnrecognizedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotationCorrectCount: 'number',
      annotationInvalid: 'number',
      chatTotalCount: 'number',
      intentUserSayCount: 'number',
      intentionNotCoveredCount: 'number',
      matchErrorCount: 'number',
      noAnnotation: 'number',
      translationUnrecognizedCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAnnotationMissionSummaryResponseBodyDataTagSummaryInfoTagSummaryInfoDetailList extends $dara.Model {
  /**
   * @example
   * 3
   */
  count?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
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

export class GetAnnotationMissionSummaryResponseBodyDataTagSummaryInfo extends $dara.Model {
  tagSummaryInfoDetailList?: GetAnnotationMissionSummaryResponseBodyDataTagSummaryInfoTagSummaryInfoDetailList[];
  static names(): { [key: string]: string } {
    return {
      tagSummaryInfoDetailList: 'TagSummaryInfoDetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagSummaryInfoDetailList: { 'type': 'array', 'itemType': GetAnnotationMissionSummaryResponseBodyDataTagSummaryInfoTagSummaryInfoDetailList },
    };
  }

  validate() {
    if(Array.isArray(this.tagSummaryInfoDetailList)) {
      $dara.Model.validateArray(this.tagSummaryInfoDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAnnotationMissionSummaryResponseBodyData extends $dara.Model {
  /**
   * @example
   * b3f2c931-5180-43ca-b4aa-2baee2d73c8b
   */
  annotationMissionId?: string;
  asrSummaryInfo?: GetAnnotationMissionSummaryResponseBodyDataAsrSummaryInfo;
  intentSummaryInfo?: GetAnnotationMissionSummaryResponseBodyDataIntentSummaryInfo;
  /**
   * @example
   * You are not authorized to perform this action. CDR:View privileges are required.
   */
  message?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  tagSummaryInfo?: GetAnnotationMissionSummaryResponseBodyDataTagSummaryInfo;
  static names(): { [key: string]: string } {
    return {
      annotationMissionId: 'AnnotationMissionId',
      asrSummaryInfo: 'AsrSummaryInfo',
      intentSummaryInfo: 'IntentSummaryInfo',
      message: 'Message',
      success: 'Success',
      tagSummaryInfo: 'TagSummaryInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotationMissionId: 'string',
      asrSummaryInfo: GetAnnotationMissionSummaryResponseBodyDataAsrSummaryInfo,
      intentSummaryInfo: GetAnnotationMissionSummaryResponseBodyDataIntentSummaryInfo,
      message: 'string',
      success: 'boolean',
      tagSummaryInfo: GetAnnotationMissionSummaryResponseBodyDataTagSummaryInfo,
    };
  }

  validate() {
    if(this.asrSummaryInfo && typeof (this.asrSummaryInfo as any).validate === 'function') {
      (this.asrSummaryInfo as any).validate();
    }
    if(this.intentSummaryInfo && typeof (this.intentSummaryInfo as any).validate === 'function') {
      (this.intentSummaryInfo as any).validate();
    }
    if(this.tagSummaryInfo && typeof (this.tagSummaryInfo as any).validate === 'function') {
      (this.tagSummaryInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAnnotationMissionSummaryResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetAnnotationMissionSummaryResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * You are not authorized to perform this action. CDR:View privileges are required.
   */
  message?: string;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAnnotationMissionSummaryResponseBodyData,
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

