// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAndPulishAgentRequestApplicationConfigHistoryConfig } from "./CreateAndPulishAgentRequestApplicationConfigHistoryConfig";
import { CreateAndPulishAgentRequestApplicationConfigLongTermMemory } from "./CreateAndPulishAgentRequestApplicationConfigLongTermMemory";
import { CreateAndPulishAgentRequestApplicationConfigParameters } from "./CreateAndPulishAgentRequestApplicationConfigParameters";
import { CreateAndPulishAgentRequestApplicationConfigRagConfig } from "./CreateAndPulishAgentRequestApplicationConfigRagConfig";
import { CreateAndPulishAgentRequestApplicationConfigSecurityConfig } from "./CreateAndPulishAgentRequestApplicationConfigSecurityConfig";
import { CreateAndPulishAgentRequestApplicationConfigTools } from "./CreateAndPulishAgentRequestApplicationConfigTools";
import { CreateAndPulishAgentRequestApplicationConfigWorkFlows } from "./CreateAndPulishAgentRequestApplicationConfigWorkFlows";


export class CreateAndPulishAgentRequestApplicationConfig extends $dara.Model {
  historyConfig?: CreateAndPulishAgentRequestApplicationConfigHistoryConfig;
  longTermMemory?: CreateAndPulishAgentRequestApplicationConfigLongTermMemory;
  parameters?: CreateAndPulishAgentRequestApplicationConfigParameters;
  ragConfig?: CreateAndPulishAgentRequestApplicationConfigRagConfig;
  securityConfig?: CreateAndPulishAgentRequestApplicationConfigSecurityConfig;
  tools?: CreateAndPulishAgentRequestApplicationConfigTools[];
  workFlows?: CreateAndPulishAgentRequestApplicationConfigWorkFlows[];
  static names(): { [key: string]: string } {
    return {
      historyConfig: 'historyConfig',
      longTermMemory: 'longTermMemory',
      parameters: 'parameters',
      ragConfig: 'ragConfig',
      securityConfig: 'securityConfig',
      tools: 'tools',
      workFlows: 'workFlows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historyConfig: CreateAndPulishAgentRequestApplicationConfigHistoryConfig,
      longTermMemory: CreateAndPulishAgentRequestApplicationConfigLongTermMemory,
      parameters: CreateAndPulishAgentRequestApplicationConfigParameters,
      ragConfig: CreateAndPulishAgentRequestApplicationConfigRagConfig,
      securityConfig: CreateAndPulishAgentRequestApplicationConfigSecurityConfig,
      tools: { 'type': 'array', 'itemType': CreateAndPulishAgentRequestApplicationConfigTools },
      workFlows: { 'type': 'array', 'itemType': CreateAndPulishAgentRequestApplicationConfigWorkFlows },
    };
  }

  validate() {
    if(this.historyConfig && typeof (this.historyConfig as any).validate === 'function') {
      (this.historyConfig as any).validate();
    }
    if(this.longTermMemory && typeof (this.longTermMemory as any).validate === 'function') {
      (this.longTermMemory as any).validate();
    }
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    if(this.ragConfig && typeof (this.ragConfig as any).validate === 'function') {
      (this.ragConfig as any).validate();
    }
    if(this.securityConfig && typeof (this.securityConfig as any).validate === 'function') {
      (this.securityConfig as any).validate();
    }
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    if(Array.isArray(this.workFlows)) {
      $dara.Model.validateArray(this.workFlows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

