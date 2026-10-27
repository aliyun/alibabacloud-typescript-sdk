// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewVoiceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * da37319b-6c83-4268-9f19-814aed62e401
   */
  instanceId?: string;
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
   * The TTS invocation method.
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
   * The preview text.
   * 
   * @example
   * Hello, nice to meet you
   */
  text?: string;
  /**
   * @remarks
   * The voice.
   * 
   * @example
   * Cherry
   */
  voice?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
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
      instanceId: 'string',
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

