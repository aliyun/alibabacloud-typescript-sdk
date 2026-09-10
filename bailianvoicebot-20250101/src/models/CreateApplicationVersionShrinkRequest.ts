// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationVersionShrinkRequest extends $dara.Model {
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
  scriptProfileShrink?: string;
  sourceVersionId?: string;
  synthesizerConfigShrink?: string;
  toolConfigShrink?: string;
  transcriberConfigShrink?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      businessUnitId: 'BusinessUnitId',
      interactionConfigShrink: 'InteractionConfig',
      labelConfigShrink: 'LabelConfig',
      ragConfigShrink: 'RagConfig',
      scriptProfileShrink: 'ScriptProfile',
      sourceVersionId: 'SourceVersionId',
      synthesizerConfigShrink: 'SynthesizerConfig',
      toolConfigShrink: 'ToolConfig',
      transcriberConfigShrink: 'TranscriberConfig',
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
      sourceVersionId: 'string',
      synthesizerConfigShrink: 'string',
      toolConfigShrink: 'string',
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

