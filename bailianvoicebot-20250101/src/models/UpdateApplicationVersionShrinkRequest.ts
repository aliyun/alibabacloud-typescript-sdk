// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationVersionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a395011f-a247-400f-bc69-28796749fd52
   */
  applicationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-c11iig67g863rih8
   */
  businessUnitId?: string;
  interactionConfigShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  scriptProfileShrink?: string;
  /**
   * **if can be null:**
   * true
   */
  synthesizerConfigShrink?: string;
  /**
   * **if can be null:**
   * true
   */
  transcriberConfigShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20904943-f711-494f-9f1f-e7f340f37707
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      businessUnitId: 'BusinessUnitId',
      interactionConfigShrink: 'InteractionConfig',
      scriptProfileShrink: 'ScriptProfile',
      synthesizerConfigShrink: 'SynthesizerConfig',
      transcriberConfigShrink: 'TranscriberConfig',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      businessUnitId: 'string',
      interactionConfigShrink: 'string',
      scriptProfileShrink: 'string',
      synthesizerConfigShrink: 'string',
      transcriberConfigShrink: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

