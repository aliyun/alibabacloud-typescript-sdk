// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewVoiceRequestParams extends $dara.Model {
  /**
   * @example
   * 0
   */
  pitchRate?: number;
  /**
   * @example
   * 0
   */
  speechRate?: number;
  /**
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
   * @example
   * da37319b-6c83-4268-9f19-814aed62e401
   */
  instanceId?: string;
  /**
   * @example
   * Qwen
   */
  model?: string;
  /**
   * @example
   * MANAGED
   */
  nlsAccessType?: string;
  /**
   * @example
   * BAILIAN
   */
  nlsEngine?: string;
  params?: PreviewVoiceRequestParams;
  text?: string;
  /**
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
      params: 'Params',
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

