// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentServiceConfigDifyConfig extends $dara.Model {
  apiKey?: string;
  botType?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      botType: 'botType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      botType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

