// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AttachPolicyConfig } from "./AttachPolicyConfig";
import { LLMDeployConfig } from "./LlmdeployConfig";


export class LLMAPIConfiguration extends $dara.Model {
  aiProtocols?: string[];
  attachPolicyConfigs?: AttachPolicyConfig[];
  basePath?: string;
  deployConfigs?: LLMDeployConfig[];
  modelCategory?: string;
  removeBasePathOnForward?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aiProtocols: 'aiProtocols',
      attachPolicyConfigs: 'attachPolicyConfigs',
      basePath: 'basePath',
      deployConfigs: 'deployConfigs',
      modelCategory: 'modelCategory',
      removeBasePathOnForward: 'removeBasePathOnForward',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiProtocols: { 'type': 'array', 'itemType': 'string' },
      attachPolicyConfigs: { 'type': 'array', 'itemType': AttachPolicyConfig },
      basePath: 'string',
      deployConfigs: { 'type': 'array', 'itemType': LLMDeployConfig },
      modelCategory: 'string',
      removeBasePathOnForward: 'boolean',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aiProtocols)) {
      $dara.Model.validateArray(this.aiProtocols);
    }
    if(Array.isArray(this.attachPolicyConfigs)) {
      $dara.Model.validateArray(this.attachPolicyConfigs);
    }
    if(Array.isArray(this.deployConfigs)) {
      $dara.Model.validateArray(this.deployConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

