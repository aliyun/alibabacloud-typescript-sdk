// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationVersionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applicationId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  businessUnitId?: string;
  interactionConfigShrink?: string;
  labelConfigShrink?: string;
  ragConfigShrink?: string;
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
  toolConfigShrink?: string;
  /**
   * **if can be null:**
   * true
   */
  transcriberConfigShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      businessUnitId: 'BusinessUnitId',
      interactionConfigShrink: 'InteractionConfig',
      labelConfigShrink: 'LabelConfig',
      ragConfigShrink: 'RagConfig',
      scriptProfileShrink: 'ScriptProfile',
      synthesizerConfigShrink: 'SynthesizerConfig',
      toolConfigShrink: 'ToolConfig',
      transcriberConfigShrink: 'TranscriberConfig',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      businessUnitId: 'string',
      interactionConfigShrink: 'string',
      labelConfigShrink: 'string',
      ragConfigShrink: 'string',
      scriptProfileShrink: 'string',
      synthesizerConfigShrink: 'string',
      toolConfigShrink: 'string',
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

