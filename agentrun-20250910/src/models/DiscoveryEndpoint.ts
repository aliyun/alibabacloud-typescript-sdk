// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgentEndpointConfig } from "./AgentEndpointConfig";


export class DiscoveryEndpoint extends $dara.Model {
  agentEndpointConfigs?: AgentEndpointConfig[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      agentEndpointConfigs: 'agentEndpointConfigs',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentEndpointConfigs: { 'type': 'array', 'itemType': AgentEndpointConfig },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentEndpointConfigs)) {
      $dara.Model.validateArray(this.agentEndpointConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

