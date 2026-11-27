// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartCloudNoteShrinkRequestStorageConfig extends $dara.Model {
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

export class StartCloudNoteShrinkRequest extends $dara.Model {
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
  autoChaptersShrink?: string;
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
  customPromptShrink?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. You do not need to specify it.
   */
  languageHints?: string[];
  /**
   * @remarks
   * The intelligent meeting minutes feature. When enabled, keywords, key content, and to-do items are generated.
   */
  meetingAssistanceShrink?: string;
  /**
   * @remarks
   * The real-time subtitles.
   */
  realtimeSubtitleShrink?: string;
  /**
   * @remarks
   * The service inspection feature.
   */
  serviceInspectionShrink?: string;
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
  storageConfig?: StartCloudNoteShrinkRequestStorageConfig;
  /**
   * @remarks
   * The summarization feature. When enabled, full-text summaries and speaker summaries are generated.
   */
  summarizationShrink?: string;
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
  textPolishShrink?: string;
  /**
   * @remarks
   * The transcription feature. Enabled by default.
   */
  transcriptionShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      autoChaptersShrink: 'AutoChapters',
      channelId: 'ChannelId',
      customPromptShrink: 'CustomPrompt',
      languageHints: 'LanguageHints',
      meetingAssistanceShrink: 'MeetingAssistance',
      realtimeSubtitleShrink: 'RealtimeSubtitle',
      serviceInspectionShrink: 'ServiceInspection',
      sourceLanguage: 'SourceLanguage',
      storageConfig: 'StorageConfig',
      summarizationShrink: 'Summarization',
      taskId: 'TaskId',
      textPolishShrink: 'TextPolish',
      transcriptionShrink: 'Transcription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      autoChaptersShrink: 'string',
      channelId: 'string',
      customPromptShrink: 'string',
      languageHints: { 'type': 'array', 'itemType': 'string' },
      meetingAssistanceShrink: 'string',
      realtimeSubtitleShrink: 'string',
      serviceInspectionShrink: 'string',
      sourceLanguage: 'string',
      storageConfig: StartCloudNoteShrinkRequestStorageConfig,
      summarizationShrink: 'string',
      taskId: 'string',
      textPolishShrink: 'string',
      transcriptionShrink: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.languageHints)) {
      $dara.Model.validateArray(this.languageHints);
    }
    if(this.storageConfig && typeof (this.storageConfig as any).validate === 'function') {
      (this.storageConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

