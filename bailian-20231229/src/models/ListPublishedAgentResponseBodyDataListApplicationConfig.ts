// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPublishedAgentResponseBodyDataListApplicationConfigHistoryConfig } from "./ListPublishedAgentResponseBodyDataListApplicationConfigHistoryConfig";
import { ListPublishedAgentResponseBodyDataListApplicationConfigLongTermMemory } from "./ListPublishedAgentResponseBodyDataListApplicationConfigLongTermMemory";
import { ListPublishedAgentResponseBodyDataListApplicationConfigParameters } from "./ListPublishedAgentResponseBodyDataListApplicationConfigParameters";
import { ListPublishedAgentResponseBodyDataListApplicationConfigRagConfig } from "./ListPublishedAgentResponseBodyDataListApplicationConfigRagConfig";
import { ListPublishedAgentResponseBodyDataListApplicationConfigSecurity } from "./ListPublishedAgentResponseBodyDataListApplicationConfigSecurity";
import { ListPublishedAgentResponseBodyDataListApplicationConfigTools } from "./ListPublishedAgentResponseBodyDataListApplicationConfigTools";
import { ListPublishedAgentResponseBodyDataListApplicationConfigWorkFlows } from "./ListPublishedAgentResponseBodyDataListApplicationConfigWorkFlows";


export class ListPublishedAgentResponseBodyDataListApplicationConfig extends $dara.Model {
  historyConfig?: ListPublishedAgentResponseBodyDataListApplicationConfigHistoryConfig;
  longTermMemory?: ListPublishedAgentResponseBodyDataListApplicationConfigLongTermMemory;
  parameters?: ListPublishedAgentResponseBodyDataListApplicationConfigParameters;
  ragConfig?: ListPublishedAgentResponseBodyDataListApplicationConfigRagConfig;
  security?: ListPublishedAgentResponseBodyDataListApplicationConfigSecurity;
  tools?: ListPublishedAgentResponseBodyDataListApplicationConfigTools[];
  workFlows?: ListPublishedAgentResponseBodyDataListApplicationConfigWorkFlows[];
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
      historyConfig: ListPublishedAgentResponseBodyDataListApplicationConfigHistoryConfig,
      longTermMemory: ListPublishedAgentResponseBodyDataListApplicationConfigLongTermMemory,
      parameters: ListPublishedAgentResponseBodyDataListApplicationConfigParameters,
      ragConfig: ListPublishedAgentResponseBodyDataListApplicationConfigRagConfig,
      security: ListPublishedAgentResponseBodyDataListApplicationConfigSecurity,
      tools: { 'type': 'array', 'itemType': ListPublishedAgentResponseBodyDataListApplicationConfigTools },
      workFlows: { 'type': 'array', 'itemType': ListPublishedAgentResponseBodyDataListApplicationConfigWorkFlows },
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

