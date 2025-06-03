// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartCloudNoteShrinkRequestStorageConfig } from "./StartCloudNoteShrinkRequestStorageConfig";


export class StartCloudNoteShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2ws***z3
   */
  appId?: string;
  autoChaptersShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  channelId?: string;
  customPromptShrink?: string;
  languageHints?: string[];
  meetingAssistanceShrink?: string;
  realtimeSubtitleShrink?: string;
  serviceInspectionShrink?: string;
  /**
   * @example
   * cn
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  storageConfig?: StartCloudNoteShrinkRequestStorageConfig;
  summarizationShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rtc
   */
  taskId?: string;
  textPolishShrink?: string;
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

