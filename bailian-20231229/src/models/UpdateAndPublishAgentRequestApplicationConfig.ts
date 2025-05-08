// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateAndPublishAgentRequestApplicationConfigHistoryConfig } from "./UpdateAndPublishAgentRequestApplicationConfigHistoryConfig";
import { UpdateAndPublishAgentRequestApplicationConfigLongTermMemory } from "./UpdateAndPublishAgentRequestApplicationConfigLongTermMemory";
import { UpdateAndPublishAgentRequestApplicationConfigParameters } from "./UpdateAndPublishAgentRequestApplicationConfigParameters";
import { UpdateAndPublishAgentRequestApplicationConfigRagConfig } from "./UpdateAndPublishAgentRequestApplicationConfigRagConfig";
import { UpdateAndPublishAgentRequestApplicationConfigSecurity } from "./UpdateAndPublishAgentRequestApplicationConfigSecurity";
import { UpdateAndPublishAgentRequestApplicationConfigTools } from "./UpdateAndPublishAgentRequestApplicationConfigTools";
import { UpdateAndPublishAgentRequestApplicationConfigWorkFlows } from "./UpdateAndPublishAgentRequestApplicationConfigWorkFlows";


export class UpdateAndPublishAgentRequestApplicationConfig extends $dara.Model {
  historyConfig?: UpdateAndPublishAgentRequestApplicationConfigHistoryConfig;
  longTermMemory?: UpdateAndPublishAgentRequestApplicationConfigLongTermMemory;
  parameters?: UpdateAndPublishAgentRequestApplicationConfigParameters;
  ragConfig?: UpdateAndPublishAgentRequestApplicationConfigRagConfig;
  security?: UpdateAndPublishAgentRequestApplicationConfigSecurity;
  tools?: UpdateAndPublishAgentRequestApplicationConfigTools[];
  workFlows?: UpdateAndPublishAgentRequestApplicationConfigWorkFlows[];
  static names(): { [key: string]: string } {
    return {
      historyConfig: 'historyConfig',
      longTermMemory: 'longTermMemory',
      parameters: 'parameters',
      ragConfig: 'ragConfig',
      security: 'security',
      tools: 'tools',
      workFlows: 'workFlows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historyConfig: UpdateAndPublishAgentRequestApplicationConfigHistoryConfig,
      longTermMemory: UpdateAndPublishAgentRequestApplicationConfigLongTermMemory,
      parameters: UpdateAndPublishAgentRequestApplicationConfigParameters,
      ragConfig: UpdateAndPublishAgentRequestApplicationConfigRagConfig,
      security: UpdateAndPublishAgentRequestApplicationConfigSecurity,
      tools: { 'type': 'array', 'itemType': UpdateAndPublishAgentRequestApplicationConfigTools },
      workFlows: { 'type': 'array', 'itemType': UpdateAndPublishAgentRequestApplicationConfigWorkFlows },
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
    if(this.security && typeof (this.security as any).validate === 'function') {
      (this.security as any).validate();
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

