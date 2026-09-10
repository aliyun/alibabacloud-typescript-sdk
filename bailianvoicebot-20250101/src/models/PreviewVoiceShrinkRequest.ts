// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewVoiceShrinkRequest extends $dara.Model {
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
  paramsShrink?: string;
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
      paramsShrink: 'Params',
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
      paramsShrink: 'string',
      text: 'string',
      voice: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

