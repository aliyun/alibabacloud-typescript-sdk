// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LLMAPIConfiguration } from "./Llmapiconfiguration";
import { MCPAPIConfiguration } from "./Mcpapiconfiguration";


export class TargetConfiguration extends $dara.Model {
  llmAPIConfig?: LLMAPIConfiguration;
  mcpAPIConfig?: MCPAPIConfiguration;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      llmAPIConfig: 'llmAPIConfig',
      mcpAPIConfig: 'mcpAPIConfig',
      targetType: 'targetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      llmAPIConfig: LLMAPIConfiguration,
      mcpAPIConfig: MCPAPIConfiguration,
      targetType: 'string',
    };
  }

  validate() {
    if(this.llmAPIConfig && typeof (this.llmAPIConfig as any).validate === 'function') {
      (this.llmAPIConfig as any).validate();
    }
    if(this.mcpAPIConfig && typeof (this.mcpAPIConfig as any).validate === 'function') {
      (this.mcpAPIConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

