// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentEndpointConfig extends $dara.Model {
  agentName?: string;
  customDomainUrl?: string;
  endpointUrl?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'agentName',
      customDomainUrl: 'customDomainUrl',
      endpointUrl: 'endpointUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      customDomainUrl: 'string',
      endpointUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

