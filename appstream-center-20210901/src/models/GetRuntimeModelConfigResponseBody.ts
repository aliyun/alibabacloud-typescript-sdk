// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRuntimeModelConfigResponseBodyDataModelProviderListLlmInfoListInferenceMetadata extends $dara.Model {
  requestModality?: string[];
  responseModality?: string[];
  static names(): { [key: string]: string } {
    return {
      requestModality: 'RequestModality',
      responseModality: 'ResponseModality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestModality: { 'type': 'array', 'itemType': 'string' },
      responseModality: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.requestModality)) {
      $dara.Model.validateArray(this.requestModality);
    }
    if(Array.isArray(this.responseModality)) {
      $dara.Model.validateArray(this.responseModality);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuntimeModelConfigResponseBodyDataModelProviderListLlmInfoList extends $dara.Model {
  description?: string;
  features?: string[];
  inferenceMetadata?: GetRuntimeModelConfigResponseBodyDataModelProviderListLlmInfoListInferenceMetadata;
  /**
   * @example
   * qwen3.6-plus
   */
  llmCode?: string;
  /**
   * @example
   * Qwen3.6-Plus
   */
  name?: string;
  /**
   * @example
   * 2026-03-04T06:25:17.000+00:00
   */
  publishedTime?: string;
  /**
   * @example
   * Normal
   */
  riskType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      features: 'Features',
      inferenceMetadata: 'InferenceMetadata',
      llmCode: 'LlmCode',
      name: 'Name',
      publishedTime: 'PublishedTime',
      riskType: 'RiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      features: { 'type': 'array', 'itemType': 'string' },
      inferenceMetadata: GetRuntimeModelConfigResponseBodyDataModelProviderListLlmInfoListInferenceMetadata,
      llmCode: 'string',
      name: 'string',
      publishedTime: 'string',
      riskType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.features)) {
      $dara.Model.validateArray(this.features);
    }
    if(this.inferenceMetadata && typeof (this.inferenceMetadata as any).validate === 'function') {
      (this.inferenceMetadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuntimeModelConfigResponseBodyDataModelProviderList extends $dara.Model {
  llmInfoList?: GetRuntimeModelConfigResponseBodyDataModelProviderListLlmInfoList[];
  /**
   * @example
   * mpt-xxxx
   */
  modelProviderTemplateId?: string;
  name?: string;
  /**
   * @example
   * bailian
   */
  providerName?: string;
  static names(): { [key: string]: string } {
    return {
      llmInfoList: 'LlmInfoList',
      modelProviderTemplateId: 'ModelProviderTemplateId',
      name: 'Name',
      providerName: 'ProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      llmInfoList: { 'type': 'array', 'itemType': GetRuntimeModelConfigResponseBodyDataModelProviderListLlmInfoList },
      modelProviderTemplateId: 'string',
      name: 'string',
      providerName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.llmInfoList)) {
      $dara.Model.validateArray(this.llmInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuntimeModelConfigResponseBodyData extends $dara.Model {
  /**
   * @example
   * bailian/qwen3.6-plus
   */
  defaultModel?: string;
  modelProviderList?: GetRuntimeModelConfigResponseBodyDataModelProviderList[];
  /**
   * @example
   * mt-xxxx
   */
  modelTemplateId?: string;
  /**
   * @example
   * model-template-001
   */
  modelTemplateName?: string;
  static names(): { [key: string]: string } {
    return {
      defaultModel: 'DefaultModel',
      modelProviderList: 'ModelProviderList',
      modelTemplateId: 'ModelTemplateId',
      modelTemplateName: 'ModelTemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultModel: 'string',
      modelProviderList: { 'type': 'array', 'itemType': GetRuntimeModelConfigResponseBodyDataModelProviderList },
      modelTemplateId: 'string',
      modelTemplateName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.modelProviderList)) {
      $dara.Model.validateArray(this.modelProviderList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuntimeModelConfigResponseBody extends $dara.Model {
  data?: GetRuntimeModelConfigResponseBodyData;
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
      data: GetRuntimeModelConfigResponseBodyData,
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

