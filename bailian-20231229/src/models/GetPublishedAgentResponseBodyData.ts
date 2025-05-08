// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPublishedAgentResponseBodyDataApplicationConfig } from "./GetPublishedAgentResponseBodyDataApplicationConfig";


export class GetPublishedAgentResponseBodyData extends $dara.Model {
  applicationConfig?: GetPublishedAgentResponseBodyDataApplicationConfig;
  code?: string;
  instructions?: string;
  modelId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      applicationConfig: 'applicationConfig',
      code: 'code',
      instructions: 'instructions',
      modelId: 'modelId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConfig: GetPublishedAgentResponseBodyDataApplicationConfig,
      code: 'string',
      instructions: 'string',
      modelId: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.applicationConfig && typeof (this.applicationConfig as any).validate === 'function') {
      (this.applicationConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

