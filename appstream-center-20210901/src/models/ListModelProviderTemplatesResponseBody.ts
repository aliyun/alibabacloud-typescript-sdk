// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelProviderTemplatesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The model provider configuration as a JSON object.
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
   * 阿里云百炼服务商
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
   * 阿里云百炼
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
   * The model provider template ID.
   * 
   * @example
   * mpt-xxxx
   */
  providerTemplateId?: string;
  /**
   * @remarks
   * The model provider type.
   * 
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
  /**
   * @remarks
   * The list of returned data objects.
   */
  data?: ListModelProviderTemplatesResponseBodyData[];
  /**
   * @remarks
   * The page number of the current query result.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in the query result.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
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

