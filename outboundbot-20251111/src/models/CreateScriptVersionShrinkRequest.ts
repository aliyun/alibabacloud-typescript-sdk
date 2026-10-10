// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScriptVersionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  instanceId?: string;
  /**
   * @remarks
   * The interaction configuration.
   */
  interactionConfigShrink?: string;
  /**
   * @remarks
   * The label configurations.
   */
  labelConfigsShrink?: string;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b15
   */
  scriptId?: string;
  /**
   * @remarks
   * The dialogue capability configuration.
   */
  scriptProfileShrink?: string;
  /**
   * @remarks
   * The source version ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b26
   */
  sourceVersionId?: string;
  /**
   * @remarks
   * The Text-to-Speech (TTS) configuration.
   */
  synthesizerConfigShrink?: string;
  /**
   * @remarks
   * The Automatic Speech Recognition (ASR) configuration.
   */
  transcriberConfigShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      interactionConfigShrink: 'InteractionConfig',
      labelConfigsShrink: 'LabelConfigs',
      scriptId: 'ScriptId',
      scriptProfileShrink: 'ScriptProfile',
      sourceVersionId: 'SourceVersionId',
      synthesizerConfigShrink: 'SynthesizerConfig',
      transcriberConfigShrink: 'TranscriberConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      interactionConfigShrink: 'string',
      labelConfigsShrink: 'string',
      scriptId: 'string',
      scriptProfileShrink: 'string',
      sourceVersionId: 'string',
      synthesizerConfigShrink: 'string',
      transcriberConfigShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

