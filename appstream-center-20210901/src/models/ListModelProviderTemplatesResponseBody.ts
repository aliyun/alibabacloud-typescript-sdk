// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelProviderTemplatesResponseBodyData extends $dara.Model {
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
  /**
   * @example
   * WuyingCredit
   */
  providerType?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      description: 'Description',
      enableWuyingProxy: 'EnableWuyingProxy',
      name: 'Name',
      providerName: 'ProviderName',
      providerTemplateId: 'ProviderTemplateId',
      providerType: 'ProviderType',
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
      providerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelProviderTemplatesResponseBody extends $dara.Model {
  data?: ListModelProviderTemplatesResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListModelProviderTemplatesResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

