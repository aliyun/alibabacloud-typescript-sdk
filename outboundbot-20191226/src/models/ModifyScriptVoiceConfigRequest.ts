// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScriptVoiceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bdd49242-114c-4045-b1d1-25ccc1756c75
   */
  instanceId?: string;
  /**
   * @remarks
   * The script ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1d7a26e0-628b-4c3c-9918-7f2e23273f54
   */
  scriptId?: string;
  /**
   * @remarks
   * The script voice configuration ID.
   * 
   * This parameter is required.
   * 
   * @example
   * e15cc646-50e5-4bc0-87ec-e4f2d1063b90
   */
  scriptVoiceConfigId?: string;
  /**
   * @remarks
   * Maps script segments to audio recordings. This parameter is required only when Type is set to WAVEFORM.
   * 
   * > To obtain the value for the ScriptWaveformId parameter, call the CreateScriptWaveform operation. The ScriptContent parameter specifies the text that corresponds to the audio segment.
   * 
   * @example
   * [{"ScriptContent":"请问你是","ScriptWaveformId":"07db2f0a-acb2-4e68-b9f4-66397414f50c"},{"ScriptContent":"吗？","ScriptWaveformId":"c2a69440-03e3-406e-b0a9-a9791fccb31b"}]
   */
  scriptWaveformRelation?: string;
  /**
   * @remarks
   * The audio source type.
   * 
   * - WAVEFORM: A pre-recorded audio file.
   * 
   * - TTS: Audio generated from text using the text-to-speech (TTS) service.
   * 
   * This parameter is required.
   * 
   * @example
   * TTS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
      scriptVoiceConfigId: 'ScriptVoiceConfigId',
      scriptWaveformRelation: 'ScriptWaveformRelation',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptId: 'string',
      scriptVoiceConfigId: 'string',
      scriptWaveformRelation: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

