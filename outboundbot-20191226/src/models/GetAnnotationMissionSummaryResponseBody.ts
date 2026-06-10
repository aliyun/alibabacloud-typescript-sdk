// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAnnotationMissionSummaryResponseBodyDataAsrSummaryInfo extends $dara.Model {
  /**
   * @remarks
   * The number of times language model data was added.
   * 
   * @example
   * 1
   */
  addCustomizationDataCount?: number;
  /**
   * @remarks
   * The number of times hotwords were added.
   * 
   * @example
   * 1
   */
  addVocabularyDataCount?: number;
  /**
   * @remarks
   * Data is invalid.
   * 
   * @example
   * 1
   */
  annotationInvalid?: number;
  /**
   * @remarks
   * The character accuracy rate. Unit: 0.01%.
   * 
   * @example
   * 1
   */
  characterCorrectRate?: number;
  /**
   * @remarks
   * The character error rate. Unit: 0.01%.
   * 
   * @example
   * 1
   */
  characterErrorRate?: number;
  /**
   * @remarks
   * The total number of chats.
   * 
   * @example
   * 1
   */
  chatTotalCount?: number;
  /**
   * @remarks
   * Not annotated.
   * 
   * @example
   * 1
   */
  noAnnotation?: number;
  /**
   * @remarks
   * The sentence error rate. Unit: 0.01%.
   * 
   * @example
   * 1
   */
  sentenceErrorRate?: number;
  /**
   * @remarks
   * The word error rate. Unit: 0.01%. This parameter is typically used for English.
   * 
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
   * @remarks
   * The number of correct chats.
   * 
   * @example
   * 1
   */
  annotationCorrectCount?: number;
  /**
   * @remarks
   * Invalid data
   * 
   * @example
   * 1
   */
  annotationInvalid?: number;
  /**
   * @remarks
   * The total number of chats.
   * 
   * @example
   * 1
   */
  chatTotalCount?: number;
  /**
   * @remarks
   * The number of conversations.
   * 
   * @example
   * 1
   */
  intentUserSayCount?: number;
  /**
   * @remarks
   * The number of uncovered intents.
   * 
   * @example
   * 1
   */
  intentionNotCoveredCount?: number;
  /**
   * @remarks
   * The number of detection errors.
   * 
   * @example
   * 1
   */
  matchErrorCount?: number;
  /**
   * @remarks
   * Not annotated.
   * 
   * @example
   * 1
   */
  noAnnotation?: number;
  /**
   * @remarks
   * The number of translations that were not recognized.
   * 
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
   * @remarks
   * The number of tags.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The name of the tag.
   * 
   * @example
   * 知晓率1_复制
   */
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
  /**
   * @remarks
   * The list of tags.
   */
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
   * @remarks
   * The ID of the annotation task.
   * 
   * @example
   * b3f2c931-5180-43ca-b4aa-2baee2d73c8b
   */
  annotationMissionId?: string;
  /**
   * @remarks
   * The statistics of speech annotation.
   */
  asrSummaryInfo?: GetAnnotationMissionSummaryResponseBodyDataAsrSummaryInfo;
  /**
   * @remarks
   * The statistics of semantic tagging.
   */
  intentSummaryInfo?: GetAnnotationMissionSummaryResponseBodyDataIntentSummaryInfo;
  /**
   * @remarks
   * The additional information. If the request is successful, success is returned. If the request fails, an error code is returned.
   * 
   * @example
   * You are not authorized to perform this action. CDR:View privileges are required.
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. A value of true indicates a successful call. A value of false indicates a failed call.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The custom tags and their quantities.
   */
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
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data.
   */
  data?: GetAnnotationMissionSummaryResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The additional information. If the request is successful, success is returned. If the request fails, an error code is returned.
   * 
   * @example
   * You are not authorized to perform this action. CDR:View privileges are required.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. A value of true indicates a successful call. A value of false indicates a failed call.
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

