// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
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

export class CreateTaskRequestParametersAutoChapters extends $dara.Model {
  chapterGranularity?: string;
  static names(): { [key: string]: string } {
    return {
      chapterGranularity: 'ChapterGranularity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chapterGranularity: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestParametersContentExtractionExtractionContents extends $dara.Model {
  content?: string;
  identity?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      identity: 'Identity',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      identity: 'string',
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
  fullTextSummaryFormat?: string;
  maxKeywords?: number;
  nfixEnabled?: boolean;
  ocrAuxiliaryEnabled?: boolean;
  translateLlmSceneEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      domainEducationEnabled: 'DomainEducationEnabled',
      fullTextSummaryFormat: 'FullTextSummaryFormat',
      maxKeywords: 'MaxKeywords',
      nfixEnabled: 'NfixEnabled',
      ocrAuxiliaryEnabled: 'OcrAuxiliaryEnabled',
      translateLlmSceneEnabled: 'TranslateLlmSceneEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainEducationEnabled: 'boolean',
      fullTextSummaryFormat: 'string',
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

export class CreateTaskRequestParametersIdentityRecognitionIdentityContents extends $dara.Model {
  description?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

export class CreateTaskRequestParametersIdentityRecognition extends $dara.Model {
  identityContents?: CreateTaskRequestParametersIdentityRecognitionIdentityContents[];
  sceneIntroduction?: string;
  static names(): { [key: string]: string } {
    return {
      identityContents: 'IdentityContents',
      sceneIntroduction: 'SceneIntroduction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityContents: { 'type': 'array', 'itemType': CreateTaskRequestParametersIdentityRecognitionIdentityContents },
      sceneIntroduction: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.identityContents)) {
      $dara.Model.validateArray(this.identityContents);
    }
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
  profanityFilterEnabled?: boolean;
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
      profanityFilterEnabled: 'ProfanityFilterEnabled',
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
      profanityFilterEnabled: 'boolean',
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
  autoChapters?: CreateTaskRequestParametersAutoChapters;
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
  identityRecognition?: CreateTaskRequestParametersIdentityRecognition;
  identityRecognitionEnabled?: boolean;
  llmOutputLanguage?: string;
  meetingAssistance?: CreateTaskRequestParametersMeetingAssistance;
  /**
   * @example
   * false
   */
  meetingAssistanceEnabled?: boolean;
  model?: string;
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
      autoChapters: 'AutoChapters',
      autoChaptersEnabled: 'AutoChaptersEnabled',
      contentExtraction: 'ContentExtraction',
      contentExtractionEnabled: 'ContentExtractionEnabled',
      customPrompt: 'CustomPrompt',
      customPromptEnabled: 'CustomPromptEnabled',
      extraParams: 'ExtraParams',
      identityRecognition: 'IdentityRecognition',
      identityRecognitionEnabled: 'IdentityRecognitionEnabled',
      llmOutputLanguage: 'LlmOutputLanguage',
      meetingAssistance: 'MeetingAssistance',
      meetingAssistanceEnabled: 'MeetingAssistanceEnabled',
      model: 'Model',
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
      autoChapters: CreateTaskRequestParametersAutoChapters,
      autoChaptersEnabled: 'boolean',
      contentExtraction: CreateTaskRequestParametersContentExtraction,
      contentExtractionEnabled: 'boolean',
      customPrompt: CreateTaskRequestParametersCustomPrompt,
      customPromptEnabled: 'boolean',
      extraParams: CreateTaskRequestParametersExtraParams,
      identityRecognition: CreateTaskRequestParametersIdentityRecognition,
      identityRecognitionEnabled: 'boolean',
      llmOutputLanguage: 'string',
      meetingAssistance: CreateTaskRequestParametersMeetingAssistance,
      meetingAssistanceEnabled: 'boolean',
      model: 'string',
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
    if(this.autoChapters && typeof (this.autoChapters as any).validate === 'function') {
      (this.autoChapters as any).validate();
    }
    if(this.contentExtraction && typeof (this.contentExtraction as any).validate === 'function') {
      (this.contentExtraction as any).validate();
    }
    if(this.customPrompt && typeof (this.customPrompt as any).validate === 'function') {
      (this.customPrompt as any).validate();
    }
    if(this.extraParams && typeof (this.extraParams as any).validate === 'function') {
      (this.extraParams as any).validate();
    }
    if(this.identityRecognition && typeof (this.identityRecognition as any).validate === 'function') {
      (this.identityRecognition as any).validate();
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

