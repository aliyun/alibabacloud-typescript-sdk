// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPublishedAgentResponseBodyDataApplicationConfigHistoryConfig } from "./GetPublishedAgentResponseBodyDataApplicationConfigHistoryConfig";
import { GetPublishedAgentResponseBodyDataApplicationConfigLongTermMemory } from "./GetPublishedAgentResponseBodyDataApplicationConfigLongTermMemory";
import { GetPublishedAgentResponseBodyDataApplicationConfigParameters } from "./GetPublishedAgentResponseBodyDataApplicationConfigParameters";
import { GetPublishedAgentResponseBodyDataApplicationConfigRagConfig } from "./GetPublishedAgentResponseBodyDataApplicationConfigRagConfig";
import { GetPublishedAgentResponseBodyDataApplicationConfigSecurity } from "./GetPublishedAgentResponseBodyDataApplicationConfigSecurity";
import { GetPublishedAgentResponseBodyDataApplicationConfigTools } from "./GetPublishedAgentResponseBodyDataApplicationConfigTools";
import { GetPublishedAgentResponseBodyDataApplicationConfigWorkFlows } from "./GetPublishedAgentResponseBodyDataApplicationConfigWorkFlows";


export class GetPublishedAgentResponseBodyDataApplicationConfig extends $dara.Model {
  historyConfig?: GetPublishedAgentResponseBodyDataApplicationConfigHistoryConfig;
  longTermMemory?: GetPublishedAgentResponseBodyDataApplicationConfigLongTermMemory;
  parameters?: GetPublishedAgentResponseBodyDataApplicationConfigParameters;
  ragConfig?: GetPublishedAgentResponseBodyDataApplicationConfigRagConfig;
  security?: GetPublishedAgentResponseBodyDataApplicationConfigSecurity;
  tools?: GetPublishedAgentResponseBodyDataApplicationConfigTools[];
  workFlows?: GetPublishedAgentResponseBodyDataApplicationConfigWorkFlows[];
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
      historyConfig: GetPublishedAgentResponseBodyDataApplicationConfigHistoryConfig,
      longTermMemory: GetPublishedAgentResponseBodyDataApplicationConfigLongTermMemory,
      parameters: GetPublishedAgentResponseBodyDataApplicationConfigParameters,
      ragConfig: GetPublishedAgentResponseBodyDataApplicationConfigRagConfig,
      security: GetPublishedAgentResponseBodyDataApplicationConfigSecurity,
      tools: { 'type': 'array', 'itemType': GetPublishedAgentResponseBodyDataApplicationConfigTools },
      workFlows: { 'type': 'array', 'itemType': GetPublishedAgentResponseBodyDataApplicationConfigWorkFlows },
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

