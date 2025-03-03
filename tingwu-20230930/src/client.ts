// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CreateTaskRequestInput extends $dara.Model {
  audioChannelMode?: string;
  /**
   * @example
   * http://xxx.com/zzz/1.wav
   */
  fileUrl?: string;
  /**
   * @example
   * pcm
   */
  format?: string;
  languageHints?: string[];
  multipleStreamsEnabled?: boolean;
  outputPath?: string;
  progressiveCallbacksEnabled?: boolean;
  /**
   * @example
   * 16000
   */
  sampleRate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn
   */
  sourceLanguage?: string;
  taskId?: string;
  /**
   * @example
   * task_tingwu_123
   */
  taskKey?: string;
  static names(): { [key: string]: string } {
    return {
      audioChannelMode: 'AudioChannelMode',
      fileUrl: 'FileUrl',
      format: 'Format',
      languageHints: 'LanguageHints',
      multipleStreamsEnabled: 'MultipleStreamsEnabled',
      outputPath: 'OutputPath',
      progressiveCallbacksEnabled: 'ProgressiveCallbacksEnabled',
      sampleRate: 'SampleRate',
      sourceLanguage: 'SourceLanguage',
      taskId: 'TaskId',
      taskKey: 'TaskKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioChannelMode: 'string',
      fileUrl: 'string',
      format: 'string',
      languageHints: { 'type': 'array', 'itemType': 'string' },
      multipleStreamsEnabled: 'boolean',
      outputPath: 'string',
      progressiveCallbacksEnabled: 'boolean',
      sampleRate: 'number',
      sourceLanguage: 'string',
      taskId: 'string',
      taskKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.languageHints)) {
      $dara.Model.validateArray(this.languageHints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestParametersContentExtractionExtractionContents extends $dara.Model {
  content?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
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

export class CreateTaskRequestParametersContentExtraction extends $dara.Model {
  extractionContents?: CreateTaskRequestParametersContentExtractionExtractionContents[];
  sceneIntroduction?: string;
  speakerMap?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      extractionContents: 'ExtractionContents',
      sceneIntroduction: 'SceneIntroduction',
      speakerMap: 'SpeakerMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extractionContents: { 'type': 'array', 'itemType': CreateTaskRequestParametersContentExtractionExtractionContents },
      sceneIntroduction: 'string',
      speakerMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.extractionContents)) {
      $dara.Model.validateArray(this.extractionContents);
    }
    if(this.speakerMap) {
      $dara.Model.validateMap(this.speakerMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestParametersCustomPromptContents extends $dara.Model {
  model?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  prompt?: string;
  transType?: string;
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
      name: 'Name',
      prompt: 'Prompt',
      transType: 'TransType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      name: 'string',
      prompt: 'string',
      transType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestParametersCustomPrompt extends $dara.Model {
  contents?: CreateTaskRequestParametersCustomPromptContents[];
  static names(): { [key: string]: string } {
    return {
      contents: 'Contents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': CreateTaskRequestParametersCustomPromptContents },
    };
  }

  validate() {
    if(Array.isArray(this.contents)) {
      $dara.Model.validateArray(this.contents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestParametersExtraParams extends $dara.Model {
  domainEducationEnabled?: boolean;
  maxKeywords?: number;
  nfixEnabled?: boolean;
  ocrAuxiliaryEnabled?: boolean;
  translateLlmSceneEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      domainEducationEnabled: 'DomainEducationEnabled',
      maxKeywords: 'MaxKeywords',
      nfixEnabled: 'NfixEnabled',
      ocrAuxiliaryEnabled: 'OcrAuxiliaryEnabled',
      translateLlmSceneEnabled: 'TranslateLlmSceneEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainEducationEnabled: 'boolean',
      maxKeywords: 'number',
      nfixEnabled: 'boolean',
      ocrAuxiliaryEnabled: 'boolean',
      translateLlmSceneEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestParametersMeetingAssistance extends $dara.Model {
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestParametersServiceInspectionInspectionContents extends $dara.Model {
  content?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
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

export class CreateTaskRequestParametersServiceInspection extends $dara.Model {
  inspectionContents?: CreateTaskRequestParametersServiceInspectionInspectionContents[];
  inspectionIntroduction?: string;
  sceneIntroduction?: string;
  speakerMap?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      inspectionContents: 'InspectionContents',
      inspectionIntroduction: 'InspectionIntroduction',
      sceneIntroduction: 'SceneIntroduction',
      speakerMap: 'SpeakerMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionContents: { 'type': 'array', 'itemType': CreateTaskRequestParametersServiceInspectionInspectionContents },
      inspectionIntroduction: 'string',
      sceneIntroduction: 'string',
      speakerMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.inspectionContents)) {
      $dara.Model.validateArray(this.inspectionContents);
    }
    if(this.speakerMap) {
      $dara.Model.validateMap(this.speakerMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestParametersSummarization extends $dara.Model {
  /**
   * @example
   * Paragraph
   */
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestParametersTranscoding extends $dara.Model {
  /**
   * @example
   * false
   */
  spectrumEnabled?: boolean;
  /**
   * @example
   * mp3
   */
  targetAudioFormat?: string;
  /**
   * @example
   * mp4
   */
  targetVideoFormat?: string;
  /**
   * @example
   * false
   */
  videoThumbnailEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      spectrumEnabled: 'SpectrumEnabled',
      targetAudioFormat: 'TargetAudioFormat',
      targetVideoFormat: 'TargetVideoFormat',
      videoThumbnailEnabled: 'VideoThumbnailEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spectrumEnabled: 'boolean',
      targetAudioFormat: 'string',
      targetVideoFormat: 'string',
      videoThumbnailEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestParametersTranscriptionDiarization extends $dara.Model {
  /**
   * @example
   * 2
   */
  speakerCount?: number;
  static names(): { [key: string]: string } {
    return {
      speakerCount: 'SpeakerCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      speakerCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestParametersTranscription extends $dara.Model {
  additionalStreamOutputLevel?: number;
  /**
   * @example
   * false
   */
  audioEventDetectionEnabled?: boolean;
  diarization?: CreateTaskRequestParametersTranscriptionDiarization;
  /**
   * @example
   * false
   */
  diarizationEnabled?: boolean;
  model?: string;
  outputLevel?: number;
  phraseId?: string;
  realtimeDiarizationEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      additionalStreamOutputLevel: 'AdditionalStreamOutputLevel',
      audioEventDetectionEnabled: 'AudioEventDetectionEnabled',
      diarization: 'Diarization',
      diarizationEnabled: 'DiarizationEnabled',
      model: 'Model',
      outputLevel: 'OutputLevel',
      phraseId: 'PhraseId',
      realtimeDiarizationEnabled: 'RealtimeDiarizationEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalStreamOutputLevel: 'number',
      audioEventDetectionEnabled: 'boolean',
      diarization: CreateTaskRequestParametersTranscriptionDiarization,
      diarizationEnabled: 'boolean',
      model: 'string',
      outputLevel: 'number',
      phraseId: 'string',
      realtimeDiarizationEnabled: 'boolean',
    };
  }

  validate() {
    if(this.diarization && typeof (this.diarization as any).validate === 'function') {
      (this.diarization as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestParametersTranslation extends $dara.Model {
  additionalStreamOutputLevel?: number;
  outputLevel?: number;
  targetLanguages?: string[];
  static names(): { [key: string]: string } {
    return {
      additionalStreamOutputLevel: 'AdditionalStreamOutputLevel',
      outputLevel: 'OutputLevel',
      targetLanguages: 'TargetLanguages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalStreamOutputLevel: 'number',
      outputLevel: 'number',
      targetLanguages: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.targetLanguages)) {
      $dara.Model.validateArray(this.targetLanguages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestParameters extends $dara.Model {
  /**
   * @example
   * true
   */
  autoChaptersEnabled?: boolean;
  contentExtraction?: CreateTaskRequestParametersContentExtraction;
  contentExtractionEnabled?: boolean;
  customPrompt?: CreateTaskRequestParametersCustomPrompt;
  customPromptEnabled?: boolean;
  extraParams?: CreateTaskRequestParametersExtraParams;
  meetingAssistance?: CreateTaskRequestParametersMeetingAssistance;
  /**
   * @example
   * false
   */
  meetingAssistanceEnabled?: boolean;
  pptExtractionEnabled?: boolean;
  serviceInspection?: CreateTaskRequestParametersServiceInspection;
  serviceInspectionEnabled?: boolean;
  summarization?: CreateTaskRequestParametersSummarization;
  /**
   * @example
   * false
   */
  summarizationEnabled?: boolean;
  textPolishEnabled?: boolean;
  transcoding?: CreateTaskRequestParametersTranscoding;
  transcription?: CreateTaskRequestParametersTranscription;
  translation?: CreateTaskRequestParametersTranslation;
  /**
   * @example
   * false
   */
  translationEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoChaptersEnabled: 'AutoChaptersEnabled',
      contentExtraction: 'ContentExtraction',
      contentExtractionEnabled: 'ContentExtractionEnabled',
      customPrompt: 'CustomPrompt',
      customPromptEnabled: 'CustomPromptEnabled',
      extraParams: 'ExtraParams',
      meetingAssistance: 'MeetingAssistance',
      meetingAssistanceEnabled: 'MeetingAssistanceEnabled',
      pptExtractionEnabled: 'PptExtractionEnabled',
      serviceInspection: 'ServiceInspection',
      serviceInspectionEnabled: 'ServiceInspectionEnabled',
      summarization: 'Summarization',
      summarizationEnabled: 'SummarizationEnabled',
      textPolishEnabled: 'TextPolishEnabled',
      transcoding: 'Transcoding',
      transcription: 'Transcription',
      translation: 'Translation',
      translationEnabled: 'TranslationEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoChaptersEnabled: 'boolean',
      contentExtraction: CreateTaskRequestParametersContentExtraction,
      contentExtractionEnabled: 'boolean',
      customPrompt: CreateTaskRequestParametersCustomPrompt,
      customPromptEnabled: 'boolean',
      extraParams: CreateTaskRequestParametersExtraParams,
      meetingAssistance: CreateTaskRequestParametersMeetingAssistance,
      meetingAssistanceEnabled: 'boolean',
      pptExtractionEnabled: 'boolean',
      serviceInspection: CreateTaskRequestParametersServiceInspection,
      serviceInspectionEnabled: 'boolean',
      summarization: CreateTaskRequestParametersSummarization,
      summarizationEnabled: 'boolean',
      textPolishEnabled: 'boolean',
      transcoding: CreateTaskRequestParametersTranscoding,
      transcription: CreateTaskRequestParametersTranscription,
      translation: CreateTaskRequestParametersTranslation,
      translationEnabled: 'boolean',
    };
  }

  validate() {
    if(this.contentExtraction && typeof (this.contentExtraction as any).validate === 'function') {
      (this.contentExtraction as any).validate();
    }
    if(this.customPrompt && typeof (this.customPrompt as any).validate === 'function') {
      (this.customPrompt as any).validate();
    }
    if(this.extraParams && typeof (this.extraParams as any).validate === 'function') {
      (this.extraParams as any).validate();
    }
    if(this.meetingAssistance && typeof (this.meetingAssistance as any).validate === 'function') {
      (this.meetingAssistance as any).validate();
    }
    if(this.serviceInspection && typeof (this.serviceInspection as any).validate === 'function') {
      (this.serviceInspection as any).validate();
    }
    if(this.summarization && typeof (this.summarization as any).validate === 'function') {
      (this.summarization as any).validate();
    }
    if(this.transcoding && typeof (this.transcoding as any).validate === 'function') {
      (this.transcoding as any).validate();
    }
    if(this.transcription && typeof (this.transcription as any).validate === 'function') {
      (this.transcription as any).validate();
    }
    if(this.translation && typeof (this.translation as any).validate === 'function') {
      (this.translation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskResponseBodyData extends $dara.Model {
  meetingJoinUrl?: string;
  /**
   * @example
   * c5394c6ee0fb474899d42215a3925c7e
   */
  taskId?: string;
  /**
   * @example
   * task_tingwu_123
   */
  taskKey?: string;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      meetingJoinUrl: 'MeetingJoinUrl',
      taskId: 'TaskId',
      taskKey: 'TaskKey',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingJoinUrl: 'string',
      taskId: 'string',
      taskKey: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTranscriptionPhrasesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 0
   */
  errorCode?: string;
  /**
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @example
   * a93b91141c0f422fa114af203f8b****
   */
  phraseId?: string;
  /**
   * @example
   * SUCCEEDED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      phraseId: 'PhraseId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      phraseId: 'string',
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

export class GetTaskInfoResponseBodyDataResult extends $dara.Model {
  autoChapters?: string;
  customPrompt?: string;
  meetingAssistance?: string;
  pptExtraction?: string;
  serviceInspection?: string;
  summarization?: string;
  textPolish?: string;
  transcription?: string;
  translation?: string;
  static names(): { [key: string]: string } {
    return {
      autoChapters: 'AutoChapters',
      customPrompt: 'CustomPrompt',
      meetingAssistance: 'MeetingAssistance',
      pptExtraction: 'PptExtraction',
      serviceInspection: 'ServiceInspection',
      summarization: 'Summarization',
      textPolish: 'TextPolish',
      transcription: 'Transcription',
      translation: 'Translation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoChapters: 'string',
      customPrompt: 'string',
      meetingAssistance: 'string',
      pptExtraction: 'string',
      serviceInspection: 'string',
      summarization: 'string',
      textPolish: 'string',
      transcription: 'string',
      translation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskInfoResponseBodyData extends $dara.Model {
  errorCode?: string;
  errorMessage?: string;
  outputMp3Path?: string;
  outputMp4Path?: string;
  outputSpectrumPath?: string;
  outputThumbnailPath?: string;
  result?: GetTaskInfoResponseBodyDataResult;
  /**
   * @example
   * c5394c6ee0fb474899d42215a3925c7e
   */
  taskId?: string;
  /**
   * @example
   * task_tingwu_123
   */
  taskKey?: string;
  /**
   * @example
   * COMPLETE
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      outputMp3Path: 'OutputMp3Path',
      outputMp4Path: 'OutputMp4Path',
      outputSpectrumPath: 'OutputSpectrumPath',
      outputThumbnailPath: 'OutputThumbnailPath',
      result: 'Result',
      taskId: 'TaskId',
      taskKey: 'TaskKey',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      outputMp3Path: 'string',
      outputMp4Path: 'string',
      outputSpectrumPath: 'string',
      outputThumbnailPath: 'string',
      result: GetTaskInfoResponseBodyDataResult,
      taskId: 'string',
      taskKey: 'string',
      taskStatus: 'string',
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

export class GetTranscriptionPhrasesResponseBodyDataPhrases extends $dara.Model {
  /**
   * @example
   * custom fruit phrases list
   */
  description?: string;
  /**
   * @example
   * fruit_phrase
   */
  name?: string;
  /**
   * @example
   * a93b91141c0f422fa114af203f8b****
   */
  phraseId?: string;
  /**
   * @example
   * {"苹果":3,"西瓜":3}
   */
  wordWeights?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      phraseId: 'PhraseId',
      wordWeights: 'WordWeights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      phraseId: 'string',
      wordWeights: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscriptionPhrasesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 0
   */
  errorCode?: string;
  /**
   * @example
   * success
   */
  errorMessage?: string;
  phrases?: GetTranscriptionPhrasesResponseBodyDataPhrases[];
  /**
   * @example
   * SUCCEEDED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      phrases: 'Phrases',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      phrases: { 'type': 'array', 'itemType': GetTranscriptionPhrasesResponseBodyDataPhrases },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.phrases)) {
      $dara.Model.validateArray(this.phrases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscriptionPhrasesResponseBodyDataPhrases extends $dara.Model {
  /**
   * @example
   * custom fruit phrases list
   */
  description?: string;
  /**
   * @example
   * fruit_phrase
   */
  name?: string;
  /**
   * @example
   * a93b91141c0f422fa114af203f8b****
   */
  phraseId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      phraseId: 'PhraseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      phraseId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscriptionPhrasesResponseBodyData extends $dara.Model {
  /**
   * @example
   * PHS.Exceed
   */
  errorCode?: string;
  /**
   * @example
   * The num of the phrase exceeds the upper limit.
   */
  errorMessage?: string;
  phrases?: ListTranscriptionPhrasesResponseBodyDataPhrases[];
  /**
   * @example
   * SUCCEEDED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      phrases: 'Phrases',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      phrases: { 'type': 'array', 'itemType': ListTranscriptionPhrasesResponseBodyDataPhrases },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.phrases)) {
      $dara.Model.validateArray(this.phrases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTranscriptionPhrasesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 0
   */
  errorCode?: string;
  /**
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @example
   * SUCCEEDED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
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

export class CreateTaskRequest extends $dara.Model {
  /**
   * @example
   * JV1sRTisRMi****
   */
  appKey?: string;
  input?: CreateTaskRequestInput;
  parameters?: CreateTaskRequestParameters;
  /**
   * @example
   * stop
   */
  operation?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * offline
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      input: 'Input',
      parameters: 'Parameters',
      operation: 'operation',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      input: CreateTaskRequestInput,
      parameters: CreateTaskRequestParameters,
      operation: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: CreateTaskResponseBodyData;
  /**
   * @example
   * Success.
   */
  message?: string;
  /**
   * @example
   * 35124E1C-AE99-5D6C-A52E-BD689D8D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateTaskResponseBodyData,
      message: 'string',
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

export class CreateTaskResponse extends $dara.Model {
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

export class CreateTranscriptionPhrasesRequest extends $dara.Model {
  /**
   * @example
   * custom fruit phrases list
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fruit_phrase
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"苹果":3,"西瓜":3}
   */
  wordWeights?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      wordWeights: 'WordWeights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      wordWeights: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTranscriptionPhrasesResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: CreateTranscriptionPhrasesResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 35124E1C-AE99-5D6C-A52E-BD689D8D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateTranscriptionPhrasesResponseBodyData,
      message: 'string',
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

export class CreateTranscriptionPhrasesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTranscriptionPhrasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTranscriptionPhrasesResponseBody,
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

export class DeleteTranscriptionPhrasesResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  errorCode?: string;
  /**
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @example
   * SUCCEEDED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
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

export class DeleteTranscriptionPhrasesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTranscriptionPhrasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTranscriptionPhrasesResponseBody,
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

export class GetTaskInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: GetTaskInfoResponseBodyData;
  /**
   * @example
   * Success.
   */
  message?: string;
  /**
   * @example
   * 35124E1C-AE99-5D6C-A52E-BD689D8D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTaskInfoResponseBodyData,
      message: 'string',
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

export class GetTaskInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTaskInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTaskInfoResponseBody,
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

export class GetTranscriptionPhrasesResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: GetTranscriptionPhrasesResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 35124E1C-AE99-5D6C-A52E-BD689D8D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTranscriptionPhrasesResponseBodyData,
      message: 'string',
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

export class GetTranscriptionPhrasesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTranscriptionPhrasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTranscriptionPhrasesResponseBody,
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

export class ListTranscriptionPhrasesResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: ListTranscriptionPhrasesResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 35124E1C-AE99-5D6C-A52E-BD689D8D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListTranscriptionPhrasesResponseBodyData,
      message: 'string',
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

export class ListTranscriptionPhrasesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTranscriptionPhrasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTranscriptionPhrasesResponseBody,
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

export class UpdateTranscriptionPhrasesRequest extends $dara.Model {
  /**
   * @example
   * custom fruit phrases list
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fruit_phrase
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"苹果":3,"西瓜":3}
   */
  wordWeights?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      wordWeights: 'WordWeights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      wordWeights: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTranscriptionPhrasesResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: UpdateTranscriptionPhrasesResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 35124E1C-AE99-5D6C-A52E-BD689D8D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateTranscriptionPhrasesResponseBodyData,
      message: 'string',
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

export class UpdateTranscriptionPhrasesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTranscriptionPhrasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateTranscriptionPhrasesResponseBody,
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
    this._endpoint = this.getEndpoint("tingwu", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建听悟任务
   * 
   * @param request - CreateTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTaskResponse
   */
  async createTaskWithOptions(request: CreateTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.operation)) {
      query["operation"] = request.operation;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.input)) {
      body["Input"] = request.input;
    }

    if (!$dara.isNull(request.parameters)) {
      body["Parameters"] = request.parameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTask",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/openapi/tingwu/v2/tasks`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateTaskResponse>(await this.callApi(params, req, runtime), new CreateTaskResponse({}));
    } else {
      return $dara.cast<CreateTaskResponse>(await this.execute(params, req, runtime), new CreateTaskResponse({}));
    }

  }

  /**
   * 创建听悟任务
   * 
   * @param request - CreateTaskRequest
   * @returns CreateTaskResponse
   */
  async createTask(request: CreateTaskRequest): Promise<CreateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTaskWithOptions(request, headers, runtime);
  }

  /**
   * 创建热词词表
   * 
   * @param request - CreateTranscriptionPhrasesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTranscriptionPhrasesResponse
   */
  async createTranscriptionPhrasesWithOptions(request: CreateTranscriptionPhrasesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateTranscriptionPhrasesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.wordWeights)) {
      body["WordWeights"] = request.wordWeights;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTranscriptionPhrases",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/openapi/tingwu/v2/resources/phrases`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateTranscriptionPhrasesResponse>(await this.callApi(params, req, runtime), new CreateTranscriptionPhrasesResponse({}));
    } else {
      return $dara.cast<CreateTranscriptionPhrasesResponse>(await this.execute(params, req, runtime), new CreateTranscriptionPhrasesResponse({}));
    }

  }

  /**
   * 创建热词词表
   * 
   * @param request - CreateTranscriptionPhrasesRequest
   * @returns CreateTranscriptionPhrasesResponse
   */
  async createTranscriptionPhrases(request: CreateTranscriptionPhrasesRequest): Promise<CreateTranscriptionPhrasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTranscriptionPhrasesWithOptions(request, headers, runtime);
  }

  /**
   * 删除词表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTranscriptionPhrasesResponse
   */
  async deleteTranscriptionPhrasesWithOptions(PhraseId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteTranscriptionPhrasesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTranscriptionPhrases",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/openapi/tingwu/v2/resources/phrases/${$dara.URL.percentEncode(PhraseId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteTranscriptionPhrasesResponse>(await this.callApi(params, req, runtime), new DeleteTranscriptionPhrasesResponse({}));
    } else {
      return $dara.cast<DeleteTranscriptionPhrasesResponse>(await this.execute(params, req, runtime), new DeleteTranscriptionPhrasesResponse({}));
    }

  }

  /**
   * 删除词表
   * @returns DeleteTranscriptionPhrasesResponse
   */
  async deleteTranscriptionPhrases(PhraseId: string): Promise<DeleteTranscriptionPhrasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTranscriptionPhrasesWithOptions(PhraseId, headers, runtime);
  }

  /**
   * 查询听悟任务信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskInfoResponse
   */
  async getTaskInfoWithOptions(TaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTaskInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskInfo",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/openapi/tingwu/v2/tasks/${$dara.URL.percentEncode(TaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTaskInfoResponse>(await this.callApi(params, req, runtime), new GetTaskInfoResponse({}));
    } else {
      return $dara.cast<GetTaskInfoResponse>(await this.execute(params, req, runtime), new GetTaskInfoResponse({}));
    }

  }

  /**
   * 查询听悟任务信息
   * @returns GetTaskInfoResponse
   */
  async getTaskInfo(TaskId: string): Promise<GetTaskInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskInfoWithOptions(TaskId, headers, runtime);
  }

  /**
   * 查询热词词表信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTranscriptionPhrasesResponse
   */
  async getTranscriptionPhrasesWithOptions(PhraseId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTranscriptionPhrasesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTranscriptionPhrases",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/openapi/tingwu/v2/resources/phrases/${$dara.URL.percentEncode(PhraseId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTranscriptionPhrasesResponse>(await this.callApi(params, req, runtime), new GetTranscriptionPhrasesResponse({}));
    } else {
      return $dara.cast<GetTranscriptionPhrasesResponse>(await this.execute(params, req, runtime), new GetTranscriptionPhrasesResponse({}));
    }

  }

  /**
   * 查询热词词表信息
   * @returns GetTranscriptionPhrasesResponse
   */
  async getTranscriptionPhrases(PhraseId: string): Promise<GetTranscriptionPhrasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTranscriptionPhrasesWithOptions(PhraseId, headers, runtime);
  }

  /**
   * 列举用户所有热词词表信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTranscriptionPhrasesResponse
   */
  async listTranscriptionPhrasesWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTranscriptionPhrasesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTranscriptionPhrases",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/openapi/tingwu/v2/resources/phrases`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTranscriptionPhrasesResponse>(await this.callApi(params, req, runtime), new ListTranscriptionPhrasesResponse({}));
    } else {
      return $dara.cast<ListTranscriptionPhrasesResponse>(await this.execute(params, req, runtime), new ListTranscriptionPhrasesResponse({}));
    }

  }

  /**
   * 列举用户所有热词词表信息
   * @returns ListTranscriptionPhrasesResponse
   */
  async listTranscriptionPhrases(): Promise<ListTranscriptionPhrasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTranscriptionPhrasesWithOptions(headers, runtime);
  }

  /**
   * 更新热词词表
   * 
   * @param request - UpdateTranscriptionPhrasesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTranscriptionPhrasesResponse
   */
  async updateTranscriptionPhrasesWithOptions(PhraseId: string, request: UpdateTranscriptionPhrasesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateTranscriptionPhrasesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.wordWeights)) {
      body["WordWeights"] = request.wordWeights;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTranscriptionPhrases",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/openapi/tingwu/v2/resources/phrases/${$dara.URL.percentEncode(PhraseId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateTranscriptionPhrasesResponse>(await this.callApi(params, req, runtime), new UpdateTranscriptionPhrasesResponse({}));
    } else {
      return $dara.cast<UpdateTranscriptionPhrasesResponse>(await this.execute(params, req, runtime), new UpdateTranscriptionPhrasesResponse({}));
    }

  }

  /**
   * 更新热词词表
   * 
   * @param request - UpdateTranscriptionPhrasesRequest
   * @returns UpdateTranscriptionPhrasesResponse
   */
  async updateTranscriptionPhrases(PhraseId: string, request: UpdateTranscriptionPhrasesRequest): Promise<UpdateTranscriptionPhrasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTranscriptionPhrasesWithOptions(PhraseId, request, headers, runtime);
  }

}
