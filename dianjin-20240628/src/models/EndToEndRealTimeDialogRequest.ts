// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EndToEndRealTimeDialogRequest extends $dara.Model {
  /**
   * @example
   * nls-base
   */
  asrModelId?: string;
  /**
   * @example
   * pcm
   */
  inputFormat?: string;
  /**
   * @example
   * wav
   */
  outputFormat?: string;
  /**
   * @example
   * 0
   */
  pitchRate?: number;
  /**
   * @example
   * SAMPLE_RATE_16K
   */
  sampleRate?: string;
  /**
   * @example
   * 0
   */
  speechRate?: number;
  /**
   * @example
   * nls-base
   */
  ttsModelId?: string;
  /**
   * @example
   * longxiaochun_v2
   */
  voiceCode?: string;
  /**
   * @example
   * 50
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      asrModelId: 'asrModelId',
      inputFormat: 'inputFormat',
      outputFormat: 'outputFormat',
      pitchRate: 'pitchRate',
      sampleRate: 'sampleRate',
      speechRate: 'speechRate',
      ttsModelId: 'ttsModelId',
      voiceCode: 'voiceCode',
      volume: 'volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrModelId: 'string',
      inputFormat: 'string',
      outputFormat: 'string',
      pitchRate: 'number',
      sampleRate: 'string',
      speechRate: 'number',
      ttsModelId: 'string',
      voiceCode: 'string',
      volume: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

