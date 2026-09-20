// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateTaskRequestInput extends $dara.Model {
  /**
   * @remarks
   * The multi-channel audio and video processing mode.
   */
  audioChannelMode?: string;
  /**
   * @remarks
   * The HTTP or HTTPS URL of the original audio or video file. This parameter is required when you create an offline transcription task.
   * 
   * @example
   * http://xxx.com/zzz/1.wav
   */
  fileUrl?: string;
  /**
   * @remarks
   * The encoding format of the audio stream data when you create a real-time meeting, such as pcm. Valid values:
   * 
   * - **pcm**
   * - **opus**
   * - **aac**
   * - **speex**
   * - **mp3**
   * 
   * @example
   * pcm
   */
  format?: string;
  /**
   * @remarks
   * The preferred languages. This parameter takes effect only when SourceLanguage is set to "multilingual". It restricts the output languages of the model.
   */
  languageHints?: string[];
  /**
   * @remarks
   * Specifies whether to enable multi-channel audio stream recognition. This parameter needs to be set only in real-time recording scenarios. Default value: false.
   * 
   * @example
   * false
   */
  multipleStreamsEnabled?: boolean;
  /**
   * @remarks
   * After configuring OSS information in the console, you can specify an OSS write path to save results directly to your custom OSS bucket.
   */
  outputPath?: string;
  /**
   * @remarks
   * Specifies whether to enable the callback feature.
   * To enable the callback feature, configure the callback type and address in the console, and set this parameter to true when creating a task.
   * 
   * @example
   * false
   */
  progressiveCallbacksEnabled?: boolean;
  /**
   * @remarks
   * The sample rate of the audio stream data when you create a real-time meeting. Valid values: 8000 and 16000.
   * 
   * - **8000**: telephone customer service scenarios.
   * - **16000**: real-time meeting audio capture scenarios.
   * 
   * @example
   * 16000
   */
  sampleRate?: number;
  /**
   * @remarks
   * The language model used for audio transcription. Valid values:
   * 
   * - **cn**: Chinese
   * - **en**: English
   * - **fspk**: Chinese-English free speaking
   * - **ja**: Japanese
   * - **yue**: Cantonese
   * 
   * This parameter is required.
   * 
   * @example
   * cn
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The TaskId returned when you create a real-time recording. You can use this ID to end the real-time recording. Set this parameter only when ending a real-time recording. Do not set it at other times.
   * 
   * @example
   * 9922c84c087044eda18659c128b56c84
   */
  taskId?: string;
  /**
   * @remarks
   * The custom identifier set by the user to associate with this task.
   * 
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
  /**
   * @remarks
   * The extraction dimension definition for conversation content extraction.
   */
  content?: string;
  identity?: string;
  /**
   * @remarks
   * The extraction dimension name for conversation content extraction.
   */
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
  /**
   * @remarks
   * The list of extraction dimensions for conversation content extraction, including the name and definition of each extraction item.
   */
  extractionContents?: CreateTaskRequestParametersContentExtractionExtractionContents[];
  /**
   * @remarks
   * The scene description for conversation content extraction.
   */
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
  /**
   * @remarks
   * The model specified for the prompt.
   * 
   * @example
   * tingwu-turbo
   */
  model?: string;
  /**
   * @remarks
   * The custom name of the prompt, used to match output results.
   * 
   * This parameter is required.
   * 
   * @example
   * summary-demo
   */
  name?: string;
  /**
   * @remarks
   * The custom content of the prompt.
   * 
   * This parameter is required.
   * 
   * @example
   * Summarize the following conversation:{Transcription}
   */
  prompt?: string;
  /**
   * @remarks
   * The format of the {Transcription} tag.
   * 
   * @example
   * default
   */
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
  /**
   * @remarks
   * The list of custom prompt parameters.
   */
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

export class CreateTaskRequestParametersExtraParamsTranslationHotwordMap extends $dara.Model {
  /**
   * @remarks
   * The business scenario type.
   */
  bizType?: string;
  bizUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'bizType',
      bizUserId: 'bizUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      bizUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestParametersExtraParams extends $dara.Model {
  domainEducationEnabled?: boolean;
  /**
   * @remarks
   * The return format of the full-text summary.
   */
  fullTextSummaryFormat?: string;
  /**
   * @remarks
   * The number of keywords to extract.
   */
  maxKeywords?: number;
  /**
   * @remarks
   * Specifies whether to enable Nfix. In most cases, you do not need to set this parameter.
   * 
   * @example
   * true
   */
  nfixEnabled?: boolean;
  ocrAuxiliaryEnabled?: boolean;
  translateLlmSceneEnabled?: boolean;
  /**
   * @remarks
   * The translation hotword configuration.
   */
  translationHotwordMap?: CreateTaskRequestParametersExtraParamsTranslationHotwordMap;
  static names(): { [key: string]: string } {
    return {
      domainEducationEnabled: 'DomainEducationEnabled',
      fullTextSummaryFormat: 'FullTextSummaryFormat',
      maxKeywords: 'MaxKeywords',
      nfixEnabled: 'NfixEnabled',
      ocrAuxiliaryEnabled: 'OcrAuxiliaryEnabled',
      translateLlmSceneEnabled: 'TranslateLlmSceneEnabled',
      translationHotwordMap: 'TranslationHotwordMap',
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
      translationHotwordMap: CreateTaskRequestParametersExtraParamsTranslationHotwordMap,
    };
  }

  validate() {
    if(this.translationHotwordMap && typeof (this.translationHotwordMap as any).validate === 'function') {
      (this.translationHotwordMap as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestParametersIdentityRecognitionIdentityContents extends $dara.Model {
  /**
   * @remarks
   * The identity description.
   */
  description?: string;
  /**
   * @remarks
   * The identity name.
   */
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
  /**
   * @remarks
   * The list of identity contents for identity recognition, including the identity name and description.
   */
  identityContents?: CreateTaskRequestParametersIdentityRecognitionIdentityContents[];
  /**
   * @remarks
   * The scene description for identity recognition.
   */
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
  /**
   * @remarks
   * When the intelligent meeting notes feature is enabled, pass in the expected feature parameter types. Supported types: action items (Actions) and key information (KeyInformation). Key information includes keywords and key content (key sentences).
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

export class CreateTaskRequestParametersServiceInspectionInspectionContents extends $dara.Model {
  /**
   * @remarks
   * The inspection dimension definition for service inspection.
   */
  content?: string;
  /**
   * @remarks
   * The inspection dimension name for service inspection.
   */
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
  /**
   * @remarks
   * The list of inspection dimensions for service inspection, including the dimension name and definition. The definition specifies the criteria that the large language model uses to determine whether a dimension is matched.
   */
  inspectionContents?: CreateTaskRequestParametersServiceInspectionInspectionContents[];
  /**
   * @remarks
   * The description of the inspection target and focus for service inspection.
   */
  inspectionIntroduction?: string;
  /**
   * @remarks
   * The conversation scene description for service inspection.
   */
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
   * @remarks
   * When the summarization feature is enabled, pass in the expected summarization types. Supported types: full-text summary (Paragraph), speaker summary (Conversational), and Q&A review summary (QuestionsAnswering).
   * 
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
   * @remarks
   * Specifies whether to generate an audio waveform from the original audio/video file or audio stream and save it. Currently, only MP3 format is supported. This parameter is optional when creating offline file transcription or real-time meetings.
   * 
   * @example
   * false
   */
  spectrumEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to convert the original audio/video file or audio stream to MP3 format for storage. Currently, only MP3 format is supported. This parameter is optional when creating offline file transcription or real-time meetings.
   * 
   * @example
   * mp3
   */
  targetAudioFormat?: string;
  /**
   * @remarks
   * Specifies whether to convert the original video file to MP4 format for storage. Currently, only MP4 format is supported. This parameter is meaningful only when creating offline file transcription and the original file is in video format. Typically, you do not need to set this parameter.
   * 
   * @example
   * mp4
   */
  targetVideoFormat?: string;
  /**
   * @remarks
   * Specifies whether to extract video thumbnails from the original video file and save them. This parameter is meaningful only when creating offline file transcription and the original file is in video format. Typically, you do not need to set this parameter.
   * 
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
   * @remarks
   * Sets the speaker diarization parameter.
   * 
   * If not set: speaker role differentiation is not used. 
   * 
   * 0: the number of speakers is undetermined.
   * 
   * 2: the number of speakers is 2.
   * 
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
  /**
   * @remarks
   * Sets the output level for speech recognition results of the active speaker in real-time recording scenarios.
   * 
   * - **1**: Returns results when a complete sentence is recognized.
   * 
   * - **2**: Returns results for both intermediate results and complete sentences.
   * 
   * Set this parameter as needed only in real-time recording scenarios when MultipleStreamsEnabled is set to true. This parameter does not need to be set for offline transcription scenarios.
   * 
   * @example
   * 1
   */
  additionalStreamOutputLevel?: number;
  /**
   * @remarks
   * Specifies whether to enable audio event detection during speech transcription to determine whether events such as music exist in the audio.
   * 
   * @example
   * false
   */
  audioEventDetectionEnabled?: boolean;
  /**
   * @remarks
   * The speaker diarization parameters.
   */
  diarization?: CreateTaskRequestParametersTranscriptionDiarization;
  /**
   * @remarks
   * Specifies whether to enable speaker diarization.
   * 
   * @example
   * false
   */
  diarizationEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable disfluency removal during speech transcription. Enabled by default.
   */
  disfluencyEnabled?: boolean;
  /**
   * @remarks
   * Sets the speech transcription model to improve transcription accuracy in specific domains.
   */
  model?: string;
  /**
   * @remarks
   * Sets the output level for speech recognition results. Default value: 1.
   * 
   * - **1**: Returns results when a complete sentence is recognized.
   * 
   * - **2**: Returns results for both intermediate results and complete sentences.
   * 
   * @example
   * 2
   */
  outputLevel?: number;
  phrase?: { [key: string]: any };
  /**
   * @remarks
   * The vocabulary ID of the hot words.
   * 
   * @example
   * ce9c2a34b6d847bf92a77d0a196f****
   */
  phraseId?: string;
  /**
   * @remarks
   * Specifies whether to enable profanity filtering during speech transcription. Enabled by default.
   */
  profanityFilterEnabled?: boolean;
  realtimeDiarizationEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      additionalStreamOutputLevel: 'AdditionalStreamOutputLevel',
      audioEventDetectionEnabled: 'AudioEventDetectionEnabled',
      diarization: 'Diarization',
      diarizationEnabled: 'DiarizationEnabled',
      disfluencyEnabled: 'DisfluencyEnabled',
      model: 'Model',
      outputLevel: 'OutputLevel',
      phrase: 'Phrase',
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
      disfluencyEnabled: 'boolean',
      model: 'string',
      outputLevel: 'number',
      phrase: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      phraseId: 'string',
      profanityFilterEnabled: 'boolean',
      realtimeDiarizationEnabled: 'boolean',
    };
  }

  validate() {
    if(this.diarization && typeof (this.diarization as any).validate === 'function') {
      (this.diarization as any).validate();
    }
    if(this.phrase) {
      $dara.Model.validateMap(this.phrase);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestParametersTranslation extends $dara.Model {
  /**
   * @remarks
   * Sets the output level for translation results of the active speaker in real-time recording scenarios.
   * 
   * - **1**: Returns results when a complete sentence is recognized.
   * - **2**: Returns results for both intermediate results and complete sentences.
   * 
   * Set this parameter as needed only in real-time recording scenarios when MultipleStreamsEnabled is set to true. This parameter does not need to be set for offline transcription scenarios.
   * 
   * @example
   * 1
   */
  additionalStreamOutputLevel?: number;
  /**
   * @remarks
   * Sets the output level for real-time translation results. Default value: 1.
   * 
   * - **1**: Returns results when a complete sentence is recognized.
   * - **2**: Returns results for both intermediate results and complete sentences.
   * 
   * Set this parameter as needed only in real-time recording scenarios. This parameter does not need to be set for offline transcription scenarios.
   * 
   * @example
   * 2
   */
  outputLevel?: number;
  /**
   * @remarks
   * The target languages to set when the translation feature is enabled. Chinese, English, and Japanese are supported.
   */
  targetLanguages?: string[];
  /**
   * @remarks
   * Specifies whether to use large language model-based translation. Default value: false.
   */
  translateLlmSceneEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      additionalStreamOutputLevel: 'AdditionalStreamOutputLevel',
      outputLevel: 'OutputLevel',
      targetLanguages: 'TargetLanguages',
      translateLlmSceneEnabled: 'TranslateLlmSceneEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalStreamOutputLevel: 'number',
      outputLevel: 'number',
      targetLanguages: { 'type': 'array', 'itemType': 'string' },
      translateLlmSceneEnabled: 'boolean',
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
   * @remarks
   * Specifies whether to enable the chapter overview feature. When enabled, chapter titles and chapter summaries are generated.
   * 
   * @example
   * true
   */
  autoChaptersEnabled?: boolean;
  /**
   * @remarks
   * The conversation content extraction parameter object.
   */
  contentExtraction?: CreateTaskRequestParametersContentExtraction;
  /**
   * @remarks
   * The business user ID.
   */
  contentExtractionEnabled?: boolean;
  /**
   * @remarks
   * The custom prompt control parameter object.
   */
  customPrompt?: CreateTaskRequestParametersCustomPrompt;
  /**
   * @remarks
   * Specifies whether to enable the custom prompt feature. When enabled, you can enter a personalized custom prompt.
   * 
   * @example
   * false
   */
  customPromptEnabled?: boolean;
  /**
   * @remarks
   * The extra parameters. In most cases, you do not need to set this parameter.
   */
  extraParams?: CreateTaskRequestParametersExtraParams;
  /**
   * @remarks
   * The identity recognition parameter object.
   */
  identityRecognition?: CreateTaskRequestParametersIdentityRecognition;
  /**
   * @remarks
   * Specifies whether to enable the identity recognition feature.
   */
  identityRecognitionEnabled?: boolean;
  llmOutputLanguage?: string;
  /**
   * @remarks
   * The control parameters for the intelligent meeting notes feature, which supports algorithm processing for action items, keywords, and key content. If you enable MeetingAssistanceEnabled but do not specify algorithm types through MeetingAssistance, all types are called and returned by default.
   */
  meetingAssistance?: CreateTaskRequestParametersMeetingAssistance;
  /**
   * @remarks
   * Specifies whether to enable the intelligent meeting notes feature. When enabled, results such as keywords, key content, and action items are generated.
   * 
   * @example
   * false
   */
  meetingAssistanceEnabled?: boolean;
  model?: string;
  /**
   * @remarks
   * Specifies whether to enable PPT extraction and PPT summarization. When enabled, PPT frames are extracted from the video file and corresponding summaries are generated. Enable this parameter only for offline transcription when the source file is a video file. Results cannot be generated in real-time recording scenarios or offline transcription scenarios where the source file is audio only.
   * 
   * @example
   * false
   */
  pptExtractionEnabled?: boolean;
  /**
   * @remarks
   * The service inspection parameter object.
   */
  serviceInspection?: CreateTaskRequestParametersServiceInspection;
  /**
   * @remarks
   * Specifies whether to enable the service inspection feature. Default value: false.
   */
  serviceInspectionEnabled?: boolean;
  /**
   * @remarks
   * The summarization control parameters.
   */
  summarization?: CreateTaskRequestParametersSummarization;
  /**
   * @remarks
   * Specifies whether to enable the summarization feature. When enabled, results such as full-text summaries and speaker summaries can be generated.
   * 
   * @example
   * false
   */
  summarizationEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the spoken-to-written text conversion feature.
   * 
   * @example
   * false
   */
  textPolishEnabled?: boolean;
  /**
   * @remarks
   * The audio/video or audio stream transcoding module.
   */
  transcoding?: CreateTaskRequestParametersTranscoding;
  /**
   * @remarks
   * The speech transcription control parameters.
   */
  transcription?: CreateTaskRequestParametersTranscription;
  /**
   * @remarks
   * The translation control parameters.
   */
  translation?: CreateTaskRequestParametersTranslation;
  /**
   * @remarks
   * Specifies whether to enable the translation feature.
   * 
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
   * @remarks
   * The AppKey of the project created in the console.
   * 
   * @example
   * JV1sRTisRMi****
   */
  appKey?: string;
  /**
   * @remarks
   * The basic parameters set when creating a task. The required parameters vary depending on the task type.
   * 
   * - When type=offline (offline task), you must set the SourceLanguage and FileUrl parameters.
   * 
   * - When type=realtime (real-time meeting task), you must additionally set the SourceLanguage, Format, and SampleRate parameters.
   */
  input?: CreateTaskRequestInput;
  /**
   * @remarks
   * The algorithm-related parameters set when creating a task. You can set these as needed.
   */
  parameters?: CreateTaskRequestParameters;
  /**
   * @remarks
   * The operation. Valid values:
   * 
   * - start: creates a task. This is the default value. In most cases, you do not need to explicitly set this parameter.
   * - stop: stops a real-time meeting task. This value is used in real-time meeting scenarios. After a meeting ends, set this parameter to stop and trigger the call.
   * 
   * > Note: When ending a real-time recording, you must set this parameter to stop.
   * 
   * @example
   * stop
   */
  operation?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - **offline**: offline task, such as offline transcription.
   * - **realtime**: real-time task, such as creating a real-time recording.
   * 
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

