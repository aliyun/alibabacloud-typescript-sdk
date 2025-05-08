// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAndPulishAgentRequestApplicationConfig } from "./CreateAndPulishAgentRequestApplicationConfig";
import { CreateAndPulishAgentRequestSampleLibrary } from "./CreateAndPulishAgentRequestSampleLibrary";


export class CreateAndPulishAgentRequest extends $dara.Model {
  applicationConfig?: CreateAndPulishAgentRequestApplicationConfig;
  instructions?: string;
  modelId?: string;
  name?: string;
  sampleLibrary?: CreateAndPulishAgentRequestSampleLibrary;
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
      applicationConfig: CreateAndPulishAgentRequestApplicationConfig,
      instructions: 'string',
      modelId: 'string',
      name: 'string',
      sampleLibrary: CreateAndPulishAgentRequestSampleLibrary,
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

