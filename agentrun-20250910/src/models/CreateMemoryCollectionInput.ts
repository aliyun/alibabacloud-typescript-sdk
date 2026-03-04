// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EmbedderConfig } from "./EmbedderConfig";
import { LLMConfig } from "./Llmconfig";
import { NetworkConfiguration } from "./NetworkConfiguration";
import { VectorStoreConfig } from "./VectorStoreConfig";


export class CreateMemoryCollectionInput extends $dara.Model {
  description?: string;
  embedderConfig?: EmbedderConfig;
  enableConversationHistory?: boolean;
  enableConversationState?: boolean;
  executionRoleArn?: string;
  llmConfig?: LLMConfig;
  memoryCollectionName?: string;
  networkConfiguration?: NetworkConfiguration;
  type?: string;
  vectorStoreConfig?: VectorStoreConfig;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      embedderConfig: 'embedderConfig',
      enableConversationHistory: 'enableConversationHistory',
      enableConversationState: 'enableConversationState',
      executionRoleArn: 'executionRoleArn',
      llmConfig: 'llmConfig',
      memoryCollectionName: 'memoryCollectionName',
      networkConfiguration: 'networkConfiguration',
      type: 'type',
      vectorStoreConfig: 'vectorStoreConfig',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      embedderConfig: EmbedderConfig,
      enableConversationHistory: 'boolean',
      enableConversationState: 'boolean',
      executionRoleArn: 'string',
      llmConfig: LLMConfig,
      memoryCollectionName: 'string',
      networkConfiguration: NetworkConfiguration,
      type: 'string',
      vectorStoreConfig: VectorStoreConfig,
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.embedderConfig && typeof (this.embedderConfig as any).validate === 'function') {
      (this.embedderConfig as any).validate();
    }
    if(this.llmConfig && typeof (this.llmConfig as any).validate === 'function') {
      (this.llmConfig as any).validate();
    }
    if(this.networkConfiguration && typeof (this.networkConfiguration as any).validate === 'function') {
      (this.networkConfiguration as any).validate();
    }
    if(this.vectorStoreConfig && typeof (this.vectorStoreConfig as any).validate === 'function') {
      (this.vectorStoreConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

