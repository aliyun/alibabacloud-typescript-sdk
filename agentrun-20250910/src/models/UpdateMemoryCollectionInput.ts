// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EmbedderConfig } from "./EmbedderConfig";
import { LLMConfig } from "./Llmconfig";
import { NetworkConfiguration } from "./NetworkConfiguration";
import { VectorStoreConfig } from "./VectorStoreConfig";


export class UpdateMemoryCollectionInput extends $dara.Model {
  description?: string;
  embedderConfig?: EmbedderConfig;
  executionRoleArn?: string;
  llmConfig?: LLMConfig;
  networkConfiguration?: NetworkConfiguration;
  vectorStoreConfig?: VectorStoreConfig;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      embedderConfig: 'embedderConfig',
      executionRoleArn: 'executionRoleArn',
      llmConfig: 'llmConfig',
      networkConfiguration: 'networkConfiguration',
      vectorStoreConfig: 'vectorStoreConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      embedderConfig: EmbedderConfig,
      executionRoleArn: 'string',
      llmConfig: LLMConfig,
      networkConfiguration: NetworkConfiguration,
      vectorStoreConfig: VectorStoreConfig,
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

