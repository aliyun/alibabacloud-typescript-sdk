// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiServiceConfig } from "./AiServiceConfig";


export class ServiceConfig extends $dara.Model {
  aiServiceConfig?: AiServiceConfig;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      aiServiceConfig: 'aiServiceConfig',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiServiceConfig: AiServiceConfig,
      name: 'string',
    };
  }

  validate() {
    if(this.aiServiceConfig && typeof (this.aiServiceConfig as any).validate === 'function') {
      (this.aiServiceConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

