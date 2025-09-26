// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LLMAPIConfiguration } from "./Llmapiconfiguration";
import { MCPAPI } from "./Mcpapi";


export class Target extends $dara.Model {
  llmConfig?: LLMAPIConfiguration;
  mcpAPI?: MCPAPI;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      llmConfig: 'llmConfig',
      mcpAPI: 'mcpAPI',
      targetType: 'targetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      llmConfig: LLMAPIConfiguration,
      mcpAPI: MCPAPI,
      targetType: 'string',
    };
  }

  validate() {
    if(this.llmConfig && typeof (this.llmConfig as any).validate === 'function') {
      (this.llmConfig as any).validate();
    }
    if(this.mcpAPI && typeof (this.mcpAPI as any).validate === 'function') {
      (this.mcpAPI as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

