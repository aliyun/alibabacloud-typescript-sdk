// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelProviderTemplateRequestConfig extends $dara.Model {
  /**
   * @example
   * sk-xxxxxxxxxxxxxxxxxxxx
   */
  apiKey?: string;
  /**
   * @example
   * openai-completions
   */
  apiType?: string;
  /**
   * @example
   * https://dashscope.aliyuncs.com/compatible-mode/v1
   */
  baseUrl?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      apiType: 'ApiType',
      baseUrl: 'BaseUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      apiType: 'string',
      baseUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelProviderTemplateRequest extends $dara.Model {
  config?: UpdateModelProviderTemplateRequestConfig;
  description?: string;
  /**
   * @example
   * true
   */
  enableWuyingProxy?: boolean;
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mpt-xxxx
   */
  providerTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      description: 'Description',
      enableWuyingProxy: 'EnableWuyingProxy',
      name: 'Name',
      providerTemplateId: 'ProviderTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: UpdateModelProviderTemplateRequestConfig,
      description: 'string',
      enableWuyingProxy: 'boolean',
      name: 'string',
      providerTemplateId: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

