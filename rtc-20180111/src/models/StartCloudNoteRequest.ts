// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartCloudNoteRequestAutoChapters } from "./StartCloudNoteRequestAutoChapters";
import { StartCloudNoteRequestCustomPrompt } from "./StartCloudNoteRequestCustomPrompt";
import { StartCloudNoteRequestMeetingAssistance } from "./StartCloudNoteRequestMeetingAssistance";
import { StartCloudNoteRequestRealtimeSubtitle } from "./StartCloudNoteRequestRealtimeSubtitle";
import { StartCloudNoteRequestServiceInspection } from "./StartCloudNoteRequestServiceInspection";
import { StartCloudNoteRequestStorageConfig } from "./StartCloudNoteRequestStorageConfig";
import { StartCloudNoteRequestSummarization } from "./StartCloudNoteRequestSummarization";
import { StartCloudNoteRequestTextPolish } from "./StartCloudNoteRequestTextPolish";
import { StartCloudNoteRequestTranscription } from "./StartCloudNoteRequestTranscription";


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

