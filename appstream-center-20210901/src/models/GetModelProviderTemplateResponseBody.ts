// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelProviderTemplateResponseBodyData extends $dara.Model {
  /**
   * @example
   * {
   * 	"api": "openai-completions",
   * 	"apiKey": "sk-xxxx",
   * 	"baseUrl": "https://dashscope.aliyuncs.com/compatible-mode/v1"
   * }
   */
  config?: string;
  description?: string;
  /**
   * @example
   * true
   */
  enableWuyingProxy?: boolean;
  name?: string;
  /**
   * @example
   * bailian
   */
  providerName?: string;
  /**
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
  data?: GetModelProviderTemplateResponseBodyData;
  /**
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

