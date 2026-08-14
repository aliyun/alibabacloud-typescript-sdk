// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateTaskRequestInput extends $dara.Model {
  /**
   * @remarks
   * Multi-channel audio or video processing mode.
   */
  audioChannelMode?: string;
  /**
   * @remarks
   * The HTTP or HTTPS URL of the source audio or video file. This parameter is required when you create an offline transcription task.
   * 
   * @example
   * http://xxx.com/zzz/1.wav
   */
  fileUrl?: string;
  /**
   * @remarks
   * The encoding format of the audio stream data. This parameter is required when you create a real-time recording task. The following values are supported:
   * 
   * - **pcm**
   * 
   * - **opus**
   * 
   * - **aac**
   * 
   * - **speex**
   * 
   * - **mp3**
   * 
   * @example
   * pcm
   */
  format?: string;
  /**
   * @remarks
   * Preferred languages. This applies only when SourceLanguage is multilingual. It restricts the output language of the model.
   */
  languageHints?: string[];
  /**
   * @remarks
   * Specifies whether to enable multi-channel audio stream recognition. This parameter applies only to real-time recording scenarios. The default value is `false`.
   * 
   * @example
   * false
   */
  multipleStreamsEnabled?: boolean;
  /**
   * @remarks
   * After you configure OSS settings in the console, specify an OSS path to save results directly to your OSS bucket.
   */
  outputPath?: string;
  /**
   * @remarks
   * Specifies whether to enable callbacks. To receive callbacks, you must configure the callback type and URL in the console and set this parameter to `true`.
   * 
   * @example
   * false
   */
  progressiveCallbacksEnabled?: boolean;
  /**
   * @remarks
   * The sample rate of the audio stream data. This parameter is required when you create a real-time recording task. The supported values are 8000 and 16000.
   * 
   * - **8000**: Suitable for telephony and customer service scenarios.
   * 
   * - **16000**: Suitable for real-time meeting audio capture scenarios.
   * 
   * @example
   * 16000
   */
  sampleRate?: number;
  /**
   * @remarks
   * The language model for speech transcription. The following values are supported:
   * 
   * - **cn**: Chinese
   * 
   * - **en**: English
   * 
   * - **fspk**: Chinese-English code-switching
   * 
   * - **ja**: Japanese
   * 
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
   * The task ID that is returned when you create a real-time recording. This ID is required to stop the recording. Specify this parameter only when stopping a real-time recording.
   * 
   * @example
   * 9922c84c087044eda18659c128b56c84
   */
  taskId?: string;
  /**
   * @remarks
   * A custom identifier that you can set for the task.
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
   * Definition of the content extraction dimension.
   */
  content?: string;
  identity?: string;
  /**
   * @remarks
   * Name of the content extraction dimension.
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
   * List of content extraction dimensions. Each dimension includes a name and definition.
   */
  extractionContents?: CreateTaskRequestParametersContentExtractionExtractionContents[];
  /**
   * @remarks
   * Description of the conversation scenario for content extraction.
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
   * The model to use for the prompt.
   * 
   * @example
   * tingwu-turbo
   */
  model?: string;
  /**
   * @remarks
   * A custom name for the prompt, used to identify the corresponding output.
   * 
   * This parameter is required.
   * 
   * @example
   * summary-demo
   */
  name?: string;
  /**
   * @remarks
   * The content of the custom prompt.
   * 
   * This parameter is required.
   * 
   * @example
   * 总结一下下面的对话内容:{Transcription}
   */
  prompt?: string;
  /**
   * @remarks
   * Specifies the format for the `{Transcription}` tag.
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
   * A list of custom prompt parameters.
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
   * Full-text summary format.
   */
  fullTextSummaryFormat?: string;
  /**
   * @remarks
   * Maximum number of keywords.
   */
  maxKeywords?: number;
  /**
   * @remarks
   * Specifies whether to enable nfix. You do not typically need to configure this parameter.
   * 
   * @example
   * true
   */
  nfixEnabled?: boolean;
  ocrAuxiliaryEnabled?: boolean;
  translateLlmSceneEnabled?: boolean;
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
   * Identity description.
   */
  description?: string;
  /**
   * @remarks
   * Identity name.
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
   * List of identities, including identity name and description.
   */
  identityContents?: CreateTaskRequestParametersIdentityRecognitionIdentityContents[];
  /**
   * @remarks
   * Description of the scenario for identity recognition.
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
   * The types of analysis to perform when the intelligent minutes feature is enabled. Supported values: `Actions` (action items) and `KeyInformation` (key information, including keywords and key points).
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
   * Definition of the inspection dimension.
   */
  content?: string;
  /**
   * @remarks
   * Name of the inspection dimension.
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
   * List of inspection dimensions for service quality inspection. Each dimension includes a name and definition, which tells the Large Language Model how to evaluate whether the dimension is met.
   */
  inspectionContents?: CreateTaskRequestParametersServiceInspectionInspectionContents[];
  /**
   * @remarks
   * Description of the inspection goals and focus areas for service quality inspection.
   */
  inspectionIntroduction?: string;
  /**
   * @remarks
   * Description of the conversation scenario for service quality inspection.
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
   * The types of summaries to generate. This parameter is required when summarization is enabled. Supported types include `Paragraph` (full-text summary), `Conversational` (speaker summary), and `QuestionsAnswering` (Q\\&A summary).
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
   * Specifies whether to generate and save an audio waveform from the source audio/video file or audio stream. This parameter is optional for offline transcription and real-time recording tasks.
   * 
   * @example
   * false
   */
  spectrumEnabled?: boolean;
  /**
   * @remarks
   * Specifies the target format for the transcoded audio. Set to `mp3` to transcode the source audio into MP3 format for storage. This parameter is optional for offline transcription and real-time recording tasks.
   * 
   * @example
   * mp3
   */
  targetAudioFormat?: string;
  /**
   * @remarks
   * Specifies the target format for the transcoded video. Set to `mp4` to transcode the source video into MP4 format for storage. This parameter applies only to offline transcription tasks with a video source file.
   * 
   * @example
   * mp4
   */
  targetVideoFormat?: string;
  /**
   * @remarks
   * Specifies whether to extract and save video thumbnails from the source video file. This parameter applies only to offline transcription tasks with a video source file.
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
   * Specifies the number of speakers to identify.
   * 
   * If this parameter is not set, speakers are not differentiated in the transcript.
   * 
   * Set the value to `0` to identify an unknown number of speakers.
   * 
   * Set the value to `2` to identify two speakers.
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
   * Specifies the level of detail for speech transcription results for the active speaker in a real-time recording scenario.
   * 
   * - **1**: Returns results only when a complete sentence is recognized.
   * 
   * - **2**: Returns both intermediate and final results as they are recognized.
   * 
   * This parameter applies only to real-time recordings when `MultipleStreamsEnabled` is set to `true`.
   * 
   * @example
   * 1
   */
  additionalStreamOutputLevel?: number;
  /**
   * @remarks
   * Specifies whether to enable sound event detection, which identifies non-speech events in the audio, such as music.
   * 
   * @example
   * false
   */
  audioEventDetectionEnabled?: boolean;
  /**
   * @remarks
   * Parameters for the speaker diarization feature.
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
  disfluencyEnabled?: boolean;
  /**
   * @remarks
   * Set the speech transcription model to improve accuracy for specific domains.
   */
  model?: string;
  /**
   * @remarks
   * Specifies the level of detail for the speech transcription results. Default value: `1`.
   * 
   * - **1**: Returns results only when a complete sentence is recognized.
   * 
   * - **2**: Returns both intermediate and final results as they are recognized.
   * 
   * @example
   * 2
   */
  outputLevel?: number;
  /**
   * @remarks
   * The ID of the hotword list.
   * 
   * @example
   * ce9c2a34b6d847bf92a77d0a196f****
   */
  phraseId?: string;
  /**
   * @remarks
   * Enable sensitive word filtering during speech transcription. Enabled by default.
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
  /**
   * @remarks
   * Specifies the level of detail for real-time translation results for the active speaker.
   * 
   * - **1**: Returns results only for complete sentences.
   * 
   * - **2**: Returns both intermediate and final results.
   * 
   * This parameter applies only to real-time recordings when `MultipleStreamsEnabled` is set to `true`.
   * 
   * @example
   * 1
   */
  additionalStreamOutputLevel?: number;
  /**
   * @remarks
   * Specifies the level of detail for real-time translation results. Default value: `1`.
   * 
   * - **1**: Returns results only for complete sentences.
   * 
   * - **2**: Returns both intermediate and final results.
   * 
   * This parameter applies only to real-time recordings.
   * 
   * @example
   * 2
   */
  outputLevel?: number;
  /**
   * @remarks
   * The target languages for translation. This parameter is required if translation is enabled. Supported languages include Chinese, English, and Japanese.
   */
  targetLanguages?: string[];
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
   * Specifies whether to generate a chapter summary, which includes chapter titles and summaries for each chapter.
   * 
   * @example
   * true
   */
  autoChaptersEnabled?: boolean;
  /**
   * @remarks
   * Conversation content extraction parameters.
   */
  contentExtraction?: CreateTaskRequestParametersContentExtraction;
  contentExtractionEnabled?: boolean;
  /**
   * @remarks
   * Parameters to control the custom prompt feature.
   */
  customPrompt?: CreateTaskRequestParametersCustomPrompt;
  /**
   * @remarks
   * Specifies whether to enable the custom prompt feature.
   * 
   * @example
   * false
   */
  customPromptEnabled?: boolean;
  /**
   * @remarks
   * Extended parameters for advanced use cases. You do not typically need to configure these parameters.
   */
  extraParams?: CreateTaskRequestParametersExtraParams;
  /**
   * @remarks
   * Identity recognition parameters.
   */
  identityRecognition?: CreateTaskRequestParametersIdentityRecognition;
  /**
   * @remarks
   * Enable identity recognition.
   */
  identityRecognitionEnabled?: boolean;
  llmOutputLanguage?: string;
  /**
   * @remarks
   * Parameters for the intelligent minutes feature, which supports processing for action items, keywords, and key points. If `MeetingAssistanceEnabled` is set to `true` but you do not specify this object, all analysis types are enabled by default.
   */
  meetingAssistance?: CreateTaskRequestParametersMeetingAssistance;
  /**
   * @remarks
   * Specifies whether to generate intelligent minutes, which include keywords, key points, and action items.
   * 
   * @example
   * false
   */
  meetingAssistanceEnabled?: boolean;
  model?: string;
  /**
   * @remarks
   * Specifies whether to enable PPT extraction. If enabled, the service extracts slides from the video file and generates corresponding summaries. This feature applies only to offline transcription tasks with a video source file and has no effect on other task types.
   * 
   * @example
   * false
   */
  pptExtractionEnabled?: boolean;
  /**
   * @remarks
   * Service quality inspection parameters.
   */
  serviceInspection?: CreateTaskRequestParametersServiceInspection;
  /**
   * @remarks
   * Enable service quality inspection. Default is false.
   */
  serviceInspectionEnabled?: boolean;
  /**
   * @remarks
   * Parameters for the summarization feature.
   */
  summarization?: CreateTaskRequestParametersSummarization;
  /**
   * @remarks
   * Specifies whether to enable the summarization feature, which can generate results such as a full-text summary and a speaker summary.
   * 
   * @example
   * false
   */
  summarizationEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the spoken-to-written conversion feature.
   * 
   * @example
   * false
   */
  textPolishEnabled?: boolean;
  /**
   * @remarks
   * Parameters for transcoding source audio/video files or audio streams.
   */
  transcoding?: CreateTaskRequestParametersTranscoding;
  /**
   * @remarks
   * Parameters to control the speech transcription process.
   */
  transcription?: CreateTaskRequestParametersTranscription;
  /**
   * @remarks
   * Parameters to control the translation feature.
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
   * The AppKey of the project that you created in the console.
   * 
   * @example
   * JV1sRTisRMi****
   */
  appKey?: string;
  /**
   * @remarks
   * The basic input parameters for creating a task. The required parameters vary based on the task type.
   * 
   * - For an offline task (`type="offline"`), you must specify the `SourceLanguage` and `FileUrl` parameters.
   * 
   * - For a real-time task (`type="realtime"`), you must also specify the `SourceLanguage`, `Format`, and `SampleRate` parameters.
   */
  input?: CreateTaskRequestInput;
  /**
   * @remarks
   * Algorithm-related parameters for customizing task processing.
   */
  parameters?: CreateTaskRequestParameters;
  /**
   * @remarks
   * The operation to perform. Valid values:
   * 
   * - **start**: Creates a task. This is the default value and does not typically need to be set.
   * 
   * - **stop**: Stops a real-time recording task. This value is used only for real-time tasks. To end the recording, set this parameter to `stop`.
   * 
   * @example
   * stop
   */
  operation?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * - **offline**: An offline task, such as an offline transcription.
   * 
   * - **realtime**: A real-time task, such as a real-time recording.
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

