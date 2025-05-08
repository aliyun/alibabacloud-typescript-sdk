// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateAndPublishAgentSelectiveRequestApplicationConfig } from "./UpdateAndPublishAgentSelectiveRequestApplicationConfig";
import { UpdateAndPublishAgentSelectiveRequestSampleLibrary } from "./UpdateAndPublishAgentSelectiveRequestSampleLibrary";


export class UpdateAndPublishAgentSelectiveRequest extends $dara.Model {
  applicationConfig?: UpdateAndPublishAgentSelectiveRequestApplicationConfig;
  instructions?: string;
  modelId?: string;
  name?: string;
  sampleLibrary?: UpdateAndPublishAgentSelectiveRequestSampleLibrary;
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
      applicationConfig: UpdateAndPublishAgentSelectiveRequestApplicationConfig,
      instructions: 'string',
      modelId: 'string',
      name: 'string',
      sampleLibrary: UpdateAndPublishAgentSelectiveRequestSampleLibrary,
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

