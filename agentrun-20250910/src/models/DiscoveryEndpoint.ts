// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgentEndpointConfig } from "./AgentEndpointConfig";


export class DiscoveryEndpoint extends $dara.Model {
  agentEndpointConfigs?: AgentEndpointConfig[];
  /**
   * @remarks
   * 该发现端点使用的凭证名称
   */
  credentialName?: string;
  name?: string;
  /**
   * @remarks
   * 是否在发现结果中返回 agent 的凭证内容
   */
  returnAgentCredentialContent?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentEndpointConfigs: 'agentEndpointConfigs',
      credentialName: 'credentialName',
      name: 'name',
      returnAgentCredentialContent: 'returnAgentCredentialContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentEndpointConfigs: { 'type': 'array', 'itemType': AgentEndpointConfig },
      credentialName: 'string',
      name: 'string',
      returnAgentCredentialContent: 'boolean',
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

