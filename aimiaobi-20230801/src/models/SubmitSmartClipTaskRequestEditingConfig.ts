// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitSmartClipTaskRequestEditingConfigBackgroundMusicConfig } from "./SubmitSmartClipTaskRequestEditingConfigBackgroundMusicConfig";
import { SubmitSmartClipTaskRequestEditingConfigMediaConfig } from "./SubmitSmartClipTaskRequestEditingConfigMediaConfig";
import { SubmitSmartClipTaskRequestEditingConfigSpeechConfig } from "./SubmitSmartClipTaskRequestEditingConfigSpeechConfig";
import { SubmitSmartClipTaskRequestEditingConfigTitleConfig } from "./SubmitSmartClipTaskRequestEditingConfigTitleConfig";


export class SubmitSmartClipTaskRequestEditingConfig extends $dara.Model {
  backgroundMusicConfig?: SubmitSmartClipTaskRequestEditingConfigBackgroundMusicConfig;
  mediaConfig?: SubmitSmartClipTaskRequestEditingConfigMediaConfig;
  speechConfig?: SubmitSmartClipTaskRequestEditingConfigSpeechConfig;
  titleConfig?: SubmitSmartClipTaskRequestEditingConfigTitleConfig;
  static names(): { [key: string]: string } {
    return {
      backgroundMusicConfig: 'BackgroundMusicConfig',
      mediaConfig: 'MediaConfig',
      speechConfig: 'SpeechConfig',
      titleConfig: 'TitleConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundMusicConfig: SubmitSmartClipTaskRequestEditingConfigBackgroundMusicConfig,
      mediaConfig: SubmitSmartClipTaskRequestEditingConfigMediaConfig,
      speechConfig: SubmitSmartClipTaskRequestEditingConfigSpeechConfig,
      titleConfig: SubmitSmartClipTaskRequestEditingConfigTitleConfig,
    };
  }

  validate() {
    if(this.backgroundMusicConfig && typeof (this.backgroundMusicConfig as any).validate === 'function') {
      (this.backgroundMusicConfig as any).validate();
    }
    if(this.mediaConfig && typeof (this.mediaConfig as any).validate === 'function') {
      (this.mediaConfig as any).validate();
    }
    if(this.speechConfig && typeof (this.speechConfig as any).validate === 'function') {
      (this.speechConfig as any).validate();
    }
    if(this.titleConfig && typeof (this.titleConfig as any).validate === 'function') {
      (this.titleConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

