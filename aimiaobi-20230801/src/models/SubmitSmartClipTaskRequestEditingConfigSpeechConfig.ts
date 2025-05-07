// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitSmartClipTaskRequestEditingConfigSpeechConfigAsrConfig } from "./SubmitSmartClipTaskRequestEditingConfigSpeechConfigAsrConfig";


export class SubmitSmartClipTaskRequestEditingConfigSpeechConfig extends $dara.Model {
  asrConfig?: SubmitSmartClipTaskRequestEditingConfigSpeechConfigAsrConfig;
  /**
   * @example
   * 0
   */
  speechRate?: number;
  style?: string;
  voice?: string;
  /**
   * @example
   * 0.5
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      asrConfig: 'AsrConfig',
      speechRate: 'SpeechRate',
      style: 'Style',
      voice: 'Voice',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrConfig: SubmitSmartClipTaskRequestEditingConfigSpeechConfigAsrConfig,
      speechRate: 'number',
      style: 'string',
      voice: 'string',
      volume: 'number',
    };
  }

  validate() {
    if(this.asrConfig && typeof (this.asrConfig as any).validate === 'function') {
      (this.asrConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

