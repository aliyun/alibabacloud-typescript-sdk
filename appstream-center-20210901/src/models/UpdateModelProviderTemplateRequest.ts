// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelProviderTemplateRequestConfig extends $dara.Model {
  /**
   * @remarks
   * The API key of the model service, which is used for authentication. The key is encrypted after it is created.
   * 
   * @example
   * sk-xxxxxxxxxxxxxxxxxxxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The API protocol type.
   * 
   * @example
   * openai-completions
   */
  apiType?: string;
  /**
   * @remarks
   * The base URL of the model service API.
   * 
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
  /**
   * @remarks
   * The model provider configuration.
   */
  config?: UpdateModelProviderTemplateRequestConfig;
  /**
   * @remarks
   * The description of the model provider template.
   * 
   * @example
   * 阿里云百炼服务商
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the Wuying security gateway proxy.
   * 
   * @example
   * true
   */
  enableWuyingProxy?: boolean;
  /**
   * @remarks
   * The name of the model provider template.
   * 
   * @example
   * 阿里云百炼
   */
  name?: string;
  /**
   * @remarks
   * The ID of the model provider template.
   * 
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

