// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateAndPublishAgentSelectiveRequestApplicationConfigHistoryConfig } from "./UpdateAndPublishAgentSelectiveRequestApplicationConfigHistoryConfig";
import { UpdateAndPublishAgentSelectiveRequestApplicationConfigLongTermMemory } from "./UpdateAndPublishAgentSelectiveRequestApplicationConfigLongTermMemory";
import { UpdateAndPublishAgentSelectiveRequestApplicationConfigParameters } from "./UpdateAndPublishAgentSelectiveRequestApplicationConfigParameters";
import { UpdateAndPublishAgentSelectiveRequestApplicationConfigRagConfig } from "./UpdateAndPublishAgentSelectiveRequestApplicationConfigRagConfig";
import { UpdateAndPublishAgentSelectiveRequestApplicationConfigSecurity } from "./UpdateAndPublishAgentSelectiveRequestApplicationConfigSecurity";
import { UpdateAndPublishAgentSelectiveRequestApplicationConfigTools } from "./UpdateAndPublishAgentSelectiveRequestApplicationConfigTools";
import { UpdateAndPublishAgentSelectiveRequestApplicationConfigWorkFlows } from "./UpdateAndPublishAgentSelectiveRequestApplicationConfigWorkFlows";


export class UpdateAndPublishAgentSelectiveRequestApplicationConfig extends $dara.Model {
  historyConfig?: UpdateAndPublishAgentSelectiveRequestApplicationConfigHistoryConfig;
  longTermMemory?: UpdateAndPublishAgentSelectiveRequestApplicationConfigLongTermMemory;
  parameters?: UpdateAndPublishAgentSelectiveRequestApplicationConfigParameters;
  ragConfig?: UpdateAndPublishAgentSelectiveRequestApplicationConfigRagConfig;
  security?: UpdateAndPublishAgentSelectiveRequestApplicationConfigSecurity;
  tools?: UpdateAndPublishAgentSelectiveRequestApplicationConfigTools[];
  workFlows?: UpdateAndPublishAgentSelectiveRequestApplicationConfigWorkFlows[];
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
      historyConfig: UpdateAndPublishAgentSelectiveRequestApplicationConfigHistoryConfig,
      longTermMemory: UpdateAndPublishAgentSelectiveRequestApplicationConfigLongTermMemory,
      parameters: UpdateAndPublishAgentSelectiveRequestApplicationConfigParameters,
      ragConfig: UpdateAndPublishAgentSelectiveRequestApplicationConfigRagConfig,
      security: UpdateAndPublishAgentSelectiveRequestApplicationConfigSecurity,
      tools: { 'type': 'array', 'itemType': UpdateAndPublishAgentSelectiveRequestApplicationConfigTools },
      workFlows: { 'type': 'array', 'itemType': UpdateAndPublishAgentSelectiveRequestApplicationConfigWorkFlows },
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

