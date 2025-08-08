// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Authorization } from "./Authorization";
import { ModelSetModelProfile } from "./ModelSetModelProfile";


export class ModelSetSpecFeatures extends $dara.Model {
  agentThought?: boolean;
  toolCall?: boolean;
  vision?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentThought: 'agentThought',
      toolCall: 'toolCall',
      vision: 'vision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentThought: 'boolean',
      toolCall: 'boolean',
      vision: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelSetSpec extends $dara.Model {
  /**
   * @example
   * openai
   */
  apiInvokeType?: string;
  authConfig?: Authorization;
  baseUrl?: string;
  features?: ModelSetSpecFeatures;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm
   */
  modelType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  models?: ModelSetModelProfile[];
  /**
   * @example
   * FunctionAI
   */
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      apiInvokeType: 'apiInvokeType',
      authConfig: 'authConfig',
      baseUrl: 'baseUrl',
      features: 'features',
      modelType: 'modelType',
      models: 'models',
      provider: 'provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInvokeType: 'string',
      authConfig: Authorization,
      baseUrl: 'string',
      features: ModelSetSpecFeatures,
      modelType: 'string',
      models: { 'type': 'array', 'itemType': ModelSetModelProfile },
      provider: 'string',
    };
  }

  validate() {
    if(this.authConfig && typeof (this.authConfig as any).validate === 'function') {
      (this.authConfig as any).validate();
    }
    if(this.features && typeof (this.features as any).validate === 'function') {
      (this.features as any).validate();
    }
    if(Array.isArray(this.models)) {
      $dara.Model.validateArray(this.models);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

