// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateAndPublishAgentRequestApplicationConfig } from "./UpdateAndPublishAgentRequestApplicationConfig";
import { UpdateAndPublishAgentRequestSampleLibrary } from "./UpdateAndPublishAgentRequestSampleLibrary";


export class UpdateAndPublishAgentRequest extends $dara.Model {
  applicationConfig?: UpdateAndPublishAgentRequestApplicationConfig;
  instructions?: string;
  modelId?: string;
  name?: string;
  sampleLibrary?: UpdateAndPublishAgentRequestSampleLibrary;
  static names(): { [key: string]: string } {
    return {
      applicationConfig: 'applicationConfig',
      instructions: 'instructions',
      modelId: 'modelId',
      name: 'name',
      sampleLibrary: 'sampleLibrary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConfig: UpdateAndPublishAgentRequestApplicationConfig,
      instructions: 'string',
      modelId: 'string',
      name: 'string',
      sampleLibrary: UpdateAndPublishAgentRequestSampleLibrary,
    };
  }

  validate() {
    if(this.applicationConfig && typeof (this.applicationConfig as any).validate === 'function') {
      (this.applicationConfig as any).validate();
    }
    if(this.sampleLibrary && typeof (this.sampleLibrary as any).validate === 'function') {
      (this.sampleLibrary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

