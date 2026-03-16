// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentEndpointConfig extends $dara.Model {
  agentName?: string;
  customDomainUrl?: string;
  /**
   * @remarks
   * 端点名称
   */
  endpointName?: string;
  endpointUrl?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'agentName',
      customDomainUrl: 'customDomainUrl',
      endpointName: 'endpointName',
      endpointUrl: 'endpointUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      customDomainUrl: 'string',
      endpointName: 'string',
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

