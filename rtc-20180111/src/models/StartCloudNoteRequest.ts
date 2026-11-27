// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartCloudNoteRequestAutoChapters extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the feature.
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudNoteRequestCustomPromptCustomPromptContents extends $dara.Model {
  /**
   * @remarks
   * The model used for the prompt. Valid values: tingwu-turbo, tingwu-plus, and qwen-max. Default value: tingwu-turbo.
   * 
   * @example
   * tingwu-turbo
   */
  model?: string;
  /**
   * @remarks
   * The custom name of the prompt, which is used to match the output results.
   * 
   * This parameter is required.
   * 
   * @example
   * split-summary-demo
   */
  name?: string;
  /**
   * @remarks
   * The custom content of the prompt. The content must include the {Transcription} tag. The {Transcription} tag is automatically replaced with the speech transcription result as the model input.
   * 
   * This parameter is required.
   * 
   * @example
   * Summarize the following conversation by speaker:\n {Transcription}
   */
  prompt?: string;
  /**
   * @remarks
   * The format of the {Transcription} tag. Valid values:
   * 
   * - chat: The transcription result includes speaker information.
   * - default: The transcription result is in plain text format.
   * 
   * @example
   * chat
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

export class StartCloudNoteRequestCustomPrompt extends $dara.Model {
  /**
   * @remarks
   * The list of parameters for the custom prompt.
   * 
   * This parameter is required.
   */
  customPromptContents?: StartCloudNoteRequestCustomPromptCustomPromptContents[];
  /**
   * @remarks
   * Specifies whether to enable the feature.
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      customPromptContents: 'CustomPromptContents',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPromptContents: { 'type': 'array', 'itemType': StartCloudNoteRequestCustomPromptCustomPromptContents },
      enabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.customPromptContents)) {
      $dara.Model.validateArray(this.customPromptContents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudNoteRequestMeetingAssistance extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the feature.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The algorithm type for the intelligent meeting minutes feature.
   * 
   * This parameter is required.
   */
  meetingAssistanceType?: string[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      meetingAssistanceType: 'MeetingAssistanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      meetingAssistanceType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.meetingAssistanceType)) {
      $dara.Model.validateArray(this.meetingAssistanceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudNoteRequestRealtimeSubtitleTranslation extends $dara.Model {
  /**
   * @remarks
   * The output level of the translated text. Default value: 2.
   * 
   * - 1: Returns results when a complete sentence is recognized.
   * - 2: Returns results when intermediate results and complete sentences are recognized.
   * 
   * @example
   * 1
   */
  translateLevel?: number;
  static names(): { [key: string]: string } {
    return {
      translateLevel: 'TranslateLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      translateLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudNoteRequestRealtimeSubtitle extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable server-side callbacks.
   * 
   * @example
   * true
   */
  asrCallback?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the feature.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The translation parameters. You can specify the target translation language by using the SDK.
   */
  translation?: StartCloudNoteRequestRealtimeSubtitleTranslation;
  static names(): { [key: string]: string } {
    return {
      asrCallback: 'AsrCallback',
      enabled: 'Enabled',
      translation: 'Translation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrCallback: 'boolean',
      enabled: 'boolean',
      translation: StartCloudNoteRequestRealtimeSubtitleTranslation,
    };
  }

  validate() {
    if(this.translation && typeof (this.translation as any).validate === 'function') {
      (this.translation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudNoteRequestServiceInspectionInspectionContents extends $dara.Model {
  /**
   * @remarks
   * The definition of the inspection dimension for service inspection.
   * 
   * This parameter is required.
   * 
   * @example
   * The salesperson proactively greets and welcomes the customer during the opening remarks
   */
  content?: string;
  /**
   * @remarks
   * The name of the inspection dimension for service inspection.
   * 
   * This parameter is required.
   * 
   * @example
   * Store arrival welcome - Welcome greeting
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

export class StartCloudNoteRequestServiceInspection extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the feature.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of inspection dimensions for service inspection, including the names and definitions of the dimensions. This specifies the criteria for the large language model to determine whether a dimension is hit.
   * 
   * This parameter is required.
   */
  inspectionContents?: StartCloudNoteRequestServiceInspectionInspectionContents[];
  /**
   * @remarks
   * The description of the inspection objectives and focus areas for service inspection.
   * 
   * This parameter is required.
   * 
   * @example
   * Monitor whether the sales staff in the dialogue are enthusiastic and have a good attitude when receiving customers
   */
  inspectionIntroduction?: string;
  /**
   * @remarks
   * The description of the dialogue scene for service inspection.
   * 
   * This parameter is required.
   * 
   * @example
   * Offline sales scenario at an automobile dealership
   */
  sceneIntroduction?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      inspectionContents: 'InspectionContents',
      inspectionIntroduction: 'InspectionIntroduction',
      sceneIntroduction: 'SceneIntroduction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      inspectionContents: { 'type': 'array', 'itemType': StartCloudNoteRequestServiceInspectionInspectionContents },
      inspectionIntroduction: 'string',
      sceneIntroduction: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inspectionContents)) {
      $dara.Model.validateArray(this.inspectionContents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudNoteRequestStorageConfig extends $dara.Model {
  /**
   * @remarks
   * The AccessKey.
   * 
   * This parameter is required.
   * 
   * @example
   * LTAX***
   */
  accessKey?: string;
  /**
   * @remarks
   * The bucket name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-bucket-for-recording
   */
  bucket?: string;
  /**
   * @remarks
   * The storage region.
   * 
   * | Region | AliYun OSS |
   * |--------|------------|
   * | 0 | CN_Hangzhou |
   * | 1 | CN_Shanghai |
   * | 2 | CN_Qingdao |
   * | 3 | CN_Beijing |
   * | 4 | CN_Zhangjiakou |
   * | 5 | CN_Huhehaote |
   * | 6 | CN_Shenzhen |
   * | 7 | CN_Hongkong |
   * | 8 | US_West_1 |
   * | 9 | US_East_1 |
   * | 10 | AP_Southeast_1 |
   * | 11 | AP_Southeast_2 |
   * | 12 | AP_Southeast_3 |
   * | 13 | AP_Southeast_5 |
   * | 14 | AP_Northeast_1 |
   * | 15 | AP_South_1 (Offline. Do not use.) |
   * | 16 | EU_Central_1 |
   * | 17 | EU_West_1 |
   * | 18 | EU_East_1(ME_East_1) |
   * | 19 | AP_Southeast_6 |
   * | 20 | CN_Heyuan |
   * | 21 | CN_Guangzhou |
   * | 22 | CN_Chengdu |
   * | 23 | CN_Nanjing |
   * | 24 | CN_Fuzhou |
   * | 25 | CN_Wulanchabu |
   * | 26 | AP_Northeast_2 |
   * | 27 | AP_Southeast_7 |
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  region?: number;
  /**
   * @remarks
   * The AccessKey secret.
   * 
   * This parameter is required.
   * 
   * @example
   * APb6qWYEzKtYxE***
   */
  secretKey?: string;
  /**
   * @remarks
   * The storage platform. Valid values:
   * 
   * | vendor | Object storage service | Remarks |
   * |--------|---------|---------|
   * | 1 | AliYun OSS | Alibaba Cloud |
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      bucket: 'Bucket',
      region: 'Region',
      secretKey: 'SecretKey',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      bucket: 'string',
      region: 'number',
      secretKey: 'string',
      vendor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudNoteRequestSummarization extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the feature.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The specific type.
   * 
   * This parameter is required.
   */
  type?: string[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      type: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.type)) {
      $dara.Model.validateArray(this.type);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudNoteRequestTextPolish extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the feature.
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudNoteRequestTranscription extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable speaker diarization.
   */
  diarizationEnabled?: boolean;
  /**
   * @remarks
   * The hotword table ID.
   * 
   * @example
   * b27cb31b8ca24c5b8e664e0387bac573
   */
  phraseId?: string;
  /**
   * @remarks
   * The number of speakers for speaker diarization. Default value: 0. Valid values:
   * - 0: The number of speakers is unknown.
   * - 2: The number of speakers is 2.
   * 
   * @example
   * 2
   */
  speakerCount?: number;
  /**
   * @remarks
   * The return level of speech recognition results. Default value: 2. Valid values:
   * - 1: Returns recognition results when a complete sentence is recognized.
   * - 2: Returns recognition results when intermediate results and complete sentences are recognized.
   * 
   * @example
   * 1
   */
  transcriptionLevel?: number;
  static names(): { [key: string]: string } {
    return {
      diarizationEnabled: 'DiarizationEnabled',
      phraseId: 'PhraseId',
      speakerCount: 'SpeakerCount',
      transcriptionLevel: 'TranscriptionLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diarizationEnabled: 'boolean',
      phraseId: 'string',
      speakerCount: 'number',
      transcriptionLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudNoteRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2ws***z3
   */
  appId?: string;
  /**
   * @remarks
   * The auto chapters feature. When enabled, chapter titles and summaries are generated.
   */
  autoChapters?: StartCloudNoteRequestAutoChapters;
  /**
   * @remarks
   * The channel ID.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  channelId?: string;
  /**
   * @remarks
   * The custom prompt control parameter object.
   */
  customPrompt?: StartCloudNoteRequestCustomPrompt;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. You do not need to specify it.
   */
  languageHints?: string[];
  /**
   * @remarks
   * The intelligent meeting minutes feature. When enabled, keywords, key content, and to-do items are generated.
   */
  meetingAssistance?: StartCloudNoteRequestMeetingAssistance;
  /**
   * @remarks
   * The real-time subtitles.
   */
  realtimeSubtitle?: StartCloudNoteRequestRealtimeSubtitle;
  /**
   * @remarks
   * The service inspection feature.
   */
  serviceInspection?: StartCloudNoteRequestServiceInspection;
  /**
   * @remarks
   * The source language model used by the channel. Valid values:
   * - cn: Chinese
   * - yue: Cantonese
   * - en: English
   * - multilingual: Multilingual
   * - ja: Japanese
   * - ko: Korean
   * - de: German
   * - fr: French
   * - ru: Russian
   * - es: Spanish
   * - vi: Vietnamese
   * - it: Italian
   * - sv: Swedish
   * - cs: Czech
   * - pl: Polish
   * - th: Thai
   * - fi: Finnish
   * - hi: Hindi
   * - id: Indonesian
   * - pt: Portuguese
   * - ar: Arabic
   * - fil: Filipino
   * - ms: Malay
   * - tr: Turkish
   * - hu: Hungarian
   * - lo: Lao
   * - pt-br: Portuguese (Brazil)
   * - es-ar: Spanish (Argentina)
   * - es-mx: Spanish (Mexico)
   * 
   * @example
   * cn
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The storage configuration.
   * 
   * This parameter is required.
   */
  storageConfig?: StartCloudNoteRequestStorageConfig;
  /**
   * @remarks
   * The summarization feature. When enabled, full-text summaries and speaker summaries are generated.
   */
  summarization?: StartCloudNoteRequestSummarization;
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rtc
   */
  taskId?: string;
  /**
   * @remarks
   * The text polishing feature.
   */
  textPolish?: StartCloudNoteRequestTextPolish;
  /**
   * @remarks
   * The transcription feature. Enabled by default.
   */
  transcription?: StartCloudNoteRequestTranscription;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      autoChapters: 'AutoChapters',
      channelId: 'ChannelId',
      customPrompt: 'CustomPrompt',
      languageHints: 'LanguageHints',
      meetingAssistance: 'MeetingAssistance',
      realtimeSubtitle: 'RealtimeSubtitle',
      serviceInspection: 'ServiceInspection',
      sourceLanguage: 'SourceLanguage',
      storageConfig: 'StorageConfig',
      summarization: 'Summarization',
      taskId: 'TaskId',
      textPolish: 'TextPolish',
      transcription: 'Transcription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      autoChapters: StartCloudNoteRequestAutoChapters,
      channelId: 'string',
      customPrompt: StartCloudNoteRequestCustomPrompt,
      languageHints: { 'type': 'array', 'itemType': 'string' },
      meetingAssistance: StartCloudNoteRequestMeetingAssistance,
      realtimeSubtitle: StartCloudNoteRequestRealtimeSubtitle,
      serviceInspection: StartCloudNoteRequestServiceInspection,
      sourceLanguage: 'string',
      storageConfig: StartCloudNoteRequestStorageConfig,
      summarization: StartCloudNoteRequestSummarization,
      taskId: 'string',
      textPolish: StartCloudNoteRequestTextPolish,
      transcription: StartCloudNoteRequestTranscription,
    };
  }

  validate() {
    if(this.autoChapters && typeof (this.autoChapters as any).validate === 'function') {
      (this.autoChapters as any).validate();
    }
    if(this.customPrompt && typeof (this.customPrompt as any).validate === 'function') {
      (this.customPrompt as any).validate();
    }
    if(Array.isArray(this.languageHints)) {
      $dara.Model.validateArray(this.languageHints);
    }
    if(this.meetingAssistance && typeof (this.meetingAssistance as any).validate === 'function') {
      (this.meetingAssistance as any).validate();
    }
    if(this.realtimeSubtitle && typeof (this.realtimeSubtitle as any).validate === 'function') {
      (this.realtimeSubtitle as any).validate();
    }
    if(this.serviceInspection && typeof (this.serviceInspection as any).validate === 'function') {
      (this.serviceInspection as any).validate();
    }
    if(this.storageConfig && typeof (this.storageConfig as any).validate === 'function') {
      (this.storageConfig as any).validate();
    }
    if(this.summarization && typeof (this.summarization as any).validate === 'function') {
      (this.summarization as any).validate();
    }
    if(this.textPolish && typeof (this.textPolish as any).validate === 'function') {
      (this.textPolish as any).validate();
    }
    if(this.transcription && typeof (this.transcription as any).validate === 'function') {
      (this.transcription as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

