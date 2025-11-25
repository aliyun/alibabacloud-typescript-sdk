// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartCloudNoteRequestAutoChapters extends $dara.Model {
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
   * @example
   * tingwu-turbo
   */
  model?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * split-summary-demo
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 请帮我将下面的对话进行总结，根据发言人来总结:\n {Transcription}
   */
  prompt?: string;
  /**
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
   * This parameter is required.
   */
  customPromptContents?: StartCloudNoteRequestCustomPromptCustomPromptContents[];
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
  enabled?: boolean;
  /**
   * @remarks
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
  asrCallback?: boolean;
  enabled?: boolean;
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
   * This parameter is required.
   * 
   * @example
   * 销售在开场白的时候主动向客户打招呼进行欢迎
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 到店欢迎-欢迎语
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
  enabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  inspectionContents?: StartCloudNoteRequestServiceInspectionInspectionContents[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 请监测对话中销售人员表现是否接待热情、态度良好
   */
  inspectionIntroduction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 汽车门店线下销售场景
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
   * accessKey。
   * 
   * This parameter is required.
   * 
   * @example
   * LTAX***
   */
  accessKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-bucket-for-recording
   */
  bucket?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  region?: number;
  /**
   * @remarks
   * secretKey。
   * 
   * This parameter is required.
   * 
   * @example
   * APb6qWYEzKtYxE***
   */
  secretKey?: string;
  /**
   * @remarks
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
  enabled?: boolean;
  /**
   * @remarks
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
  diarizationEnabled?: boolean;
  /**
   * @example
   * b401a5da78e94xxxxc3129425c78b6a5
   */
  phraseId?: string;
  speakerCount?: number;
  /**
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
   * This parameter is required.
   * 
   * @example
   * 2ws***z3
   */
  appId?: string;
  autoChapters?: StartCloudNoteRequestAutoChapters;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  channelId?: string;
  customPrompt?: StartCloudNoteRequestCustomPrompt;
  languageHints?: string[];
  meetingAssistance?: StartCloudNoteRequestMeetingAssistance;
  realtimeSubtitle?: StartCloudNoteRequestRealtimeSubtitle;
  serviceInspection?: StartCloudNoteRequestServiceInspection;
  /**
   * @example
   * cn
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  storageConfig?: StartCloudNoteRequestStorageConfig;
  summarization?: StartCloudNoteRequestSummarization;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rtc
   */
  taskId?: string;
  textPolish?: StartCloudNoteRequestTextPolish;
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

