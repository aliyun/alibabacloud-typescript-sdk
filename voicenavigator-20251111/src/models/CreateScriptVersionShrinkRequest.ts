// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScriptVersionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * abb4aa26-3a8e-43dd-82f8-0c3898c9c67f
   */
  instanceId?: string;
  /**
   * @remarks
   * The interaction configuration.
   */
  interactionConfigShrink?: string;
  /**
   * @remarks
   * The custom label configuration.
   */
  labelConfigShrink?: string;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * 64241e64-190c-45d1-af66-06f51c07b090
   */
  scriptId?: string;
  /**
   * @remarks
   * The conversation capability configuration.
   */
  scriptProfileShrink?: string;
  /**
   * @example
   * d7b8a210-1f2d-4c5b-8a63-01e4f3b7c9d2
   */
  sourceVersionId?: string;
  /**
   * @remarks
   * The TTS configuration.
   */
  synthesizerConfigShrink?: string;
  /**
   * @remarks
   * The ASR configuration.
   */
  transcriberConfigShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      interactionConfigShrink: 'InteractionConfig',
      labelConfigShrink: 'LabelConfig',
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
      labelConfigShrink: 'string',
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

