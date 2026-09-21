// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelProviderEndpointsResponseBodyDataEndpoints extends $dara.Model {
  /**
   * @remarks
   * The API compatibility type, such as openai-compatible or anthropic-compatible.
   * 
   * @example
   * openai-compatible
   */
  apiType?: string;
  /**
   * @remarks
   * The API base URL, such as https://coding.dashscope.aliyuncs.com/v1.
   * 
   * @example
   * https://coding.dashscope.aliyuncs.com/v1
   */
  baseUrl?: string;
  /**
   * @remarks
   * The endpoint description, such as Coding Plan - OpenAI compatible protocol.
   * 
   * @example
   * Coding Plan - OpenAI
   */
  description?: string;
  /**
   * @remarks
   * The endpoint identifier name, such as coding-openai or cn-beijing.
   * 
   * @example
   * coding-openai
   */
  name?: string;
  /**
   * @remarks
   * The provider URL.
   * 
   * @example
   * https://test
   */
  providerUrl?: string;
  /**
   * @remarks
   * The list of tags used for categorization and filtering, such as coding-plan, on-demand, or cn-beijing.
   */
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      apiType: 'ApiType',
      baseUrl: 'BaseUrl',
      description: 'Description',
      name: 'Name',
      providerUrl: 'ProviderUrl',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiType: 'string',
      baseUrl: 'string',
      description: 'string',
      name: 'string',
      providerUrl: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelProviderEndpointsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The provider description, such as Alibaba Cloud Bailian.
   * 
   * @example
   * Qwen Plus series models
   */
  description?: string;
  /**
   * @remarks
   * The list of all endpoints under the provider.
   */
  endpoints?: ListModelProviderEndpointsResponseBodyDataEndpoints[];
  /**
   * @remarks
   * The provider name, such as bailian or moonshot.
   * 
   * @example
   * bailian
   */
  providerName?: string;
  /**
   * @remarks
   * The provider website URL, which is used to direct users to obtain an API key.
   * 
   * @example
   * https://test
   */
  providerUrl?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      endpoints: 'Endpoints',
      providerName: 'ProviderName',
      providerUrl: 'ProviderUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      endpoints: { 'type': 'array', 'itemType': ListModelProviderEndpointsResponseBodyDataEndpoints },
      providerName: 'string',
      providerUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelProviderEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data object.
   */
  data?: ListModelProviderEndpointsResponseBodyData[];
  /**
   * @remarks
   * The request ID, which uniquely identifies the request.
   * 
   * @example
   * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
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
      data: { 'type': 'array', 'itemType': ListModelProviderEndpointsResponseBodyData },
      requestId: 'string',
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

