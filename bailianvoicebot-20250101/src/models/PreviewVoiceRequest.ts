// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewVoiceRequestParams extends $dara.Model {
  /**
   * @remarks
   * The pitch rate.
   * 
   * > Valid values: -500 to 500.
   * 
   * @example
   * 0
   */
  pitchRate?: number;
  /**
   * @remarks
   * The speech rate.
   * 
   * > Valid values: -500 to 500.
   * 
   * @example
   * 0
   */
  speechRate?: number;
  /**
   * @remarks
   * The volume.
   * 
   * > Valid values: 0 to 100.
   * 
   * @example
   * 50
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      pitchRate: 'PitchRate',
      speechRate: 'SpeechRate',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pitchRate: 'number',
      speechRate: 'number',
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

export class PreviewVoiceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Model Studio business unit.
   * 
   * @example
   * llm-c11iig67g863rih8
   */
  businessUnitId?: string;
  /**
   * @remarks
   * The TTS model.
   * 
   * @example
   * Qwen
   */
  model?: string;
  /**
   * @remarks
   * The TTS access type.
   * 
   * @example
   * MANAGED
   */
  nlsAccessType?: string;
  /**
   * @remarks
   * The TTS engine.
   * 
   * @example
   * BAILIAN
   */
  nlsEngine?: string;
  /**
   * @remarks
   * The synthesis parameters.
   */
  params?: PreviewVoiceRequestParams;
  /**
   * @remarks
   * The text to synthesize for the preview.
   * 
   * @example
   * 你好，很高兴认识你
   */
  text?: string;
  /**
   * @remarks
   * The voice for synthesis.
   * 
   * @example
   * Cherry
   */
  voice?: string;
  static names(): { [key: string]: string } {
    return {
      businessUnitId: 'BusinessUnitId',
      model: 'Model',
      nlsAccessType: 'NlsAccessType',
      nlsEngine: 'NlsEngine',
      params: 'Params',
      text: 'Text',
      voice: 'Voice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessUnitId: 'string',
      model: 'string',
      nlsAccessType: 'string',
      nlsEngine: 'string',
      params: PreviewVoiceRequestParams,
      text: 'string',
      voice: 'string',
    };
  }

  validate() {
    if(this.params && typeof (this.params as any).validate === 'function') {
      (this.params as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

