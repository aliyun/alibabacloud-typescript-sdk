// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelProviderTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The JSON configuration object of the model provider template.
   * 
   * @example
   * {
   * 	"api": "openai-completions",
   * 	"apiKey": "sk-xxxx",
   * 	"baseUrl": "https://dashscope.aliyuncs.com/compatible-mode/v1"
   * }
   */
  config?: string;
  /**
   * @remarks
   * The description of the model provider template.
   * 
   * @example
   * 阿里云百炼服务商。
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the WUYING secure gateway proxy is enabled.
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
   * 阿里云百炼。
   */
  name?: string;
  /**
   * @remarks
   * The name of the model provider.
   * 
   * @example
   * bailian
   */
  providerName?: string;
  /**
   * @remarks
   * The ID of the model provider template.
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
      providerName: 'ProviderName',
      providerTemplateId: 'ProviderTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      description: 'string',
      enableWuyingProxy: 'boolean',
      name: 'string',
      providerName: 'string',
      providerTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelProviderTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data object.
   */
  data?: GetModelProviderTemplateResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetModelProviderTemplateResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

