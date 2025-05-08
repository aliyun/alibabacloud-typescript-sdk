// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAndPublishAgentSelectiveShrinkRequest extends $dara.Model {
  applicationConfigShrink?: string;
  instructions?: string;
  modelId?: string;
  name?: string;
  sampleLibraryShrink?: string;
  static names(): { [key: string]: string } {
    return {
      applicationConfigShrink: 'applicationConfig',
      instructions: 'instructions',
      modelId: 'modelId',
      name: 'name',
      sampleLibraryShrink: 'sampleLibrary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConfigShrink: 'string',
      instructions: 'string',
      modelId: 'string',
      name: 'string',
      sampleLibraryShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

