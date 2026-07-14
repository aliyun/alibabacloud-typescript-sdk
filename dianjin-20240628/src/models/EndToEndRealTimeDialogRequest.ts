// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EndToEndRealTimeDialogRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the speech recognition model. The default value is nls-base. Supported models include paraformer-realtime-v2 and paraformer-realtime-8k-v2.
   * 
   * @example
   * nls-base
   */
  asrModelId?: string;
  /**
   * @remarks
   * The input audio format. Supported formats are pcm, wav, and mp3.
   * 
   * @example
   * pcm
   */
  inputFormat?: string;
  /**
   * @remarks
   * The output audio format.
   * 
   * @example
   * wav
   */
  outputFormat?: string;
  /**
   * @remarks
   * The pitch rate.
   * ● If \\`ttsModelId\\` is \\`nls-base\\`:
   * The value ranges from -500 to 500. The default is 0.
   * ● If \\`ttsModelId\\` is \\`cosyvoice-v2\\`: Specifies the pitch of the synthesized audio. The value ranges from 0.5 to 2.
   * 
   * @example
   * 0
   */
  pitchRate?: number;
  /**
   * @remarks
   * The sample rate.
   * 
   * @example
   * SAMPLE_RATE_16K
   */
  sampleRate?: string;
  /**
   * @remarks
   * The speech rate.
   * ● If \\`ttsModelId\\` is \\`nls-base\\`: The value ranges from -500 to 500. The default is 0.
   * ● If \\`ttsModelId\\` is \\`cosyvoice-v2\\`:
   * Specifies the speech rate of the synthesized audio. The value ranges from 0.5 to 2.
   * ○ 0.5: Half the default speed.
   * ○ 1: The default speed. The default speed is the model\\"s standard output speed and may vary slightly by speaker. It is about four characters per second.
   * ○ 2: Twice the default speed.
   * 
   * @example
   * 0
   */
  speechRate?: number;
  /**
   * @remarks
   * The ID of the speech synthesis model. The default value is nls-base. The cosyvoice-v2 model is supported.
   * 
   * @example
   * nls-base
   */
  ttsModelId?: string;
  /**
   * @remarks
   * The voice parameter. This is available only for models that support word-level or sentence-level timestamps.
   * 
   * @example
   * longxiaochun_v2
   */
  voiceCode?: string;
  /**
   * @remarks
   * The volume. The value ranges from 0 to 100. This parameter is optional. The default value is 50.
   * 
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

