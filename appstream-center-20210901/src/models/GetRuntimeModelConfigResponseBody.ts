// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRuntimeModelConfigResponseBodyDataModelProviderListLlmInfoListInferenceMetadata extends $dara.Model {
  /**
   * @remarks
   * The list of request modalities, such as Text, Image, and Audio.
   */
  requestModality?: string[];
  /**
   * @remarks
   * The list of response modalities, such as Text, Image, and Audio.
   */
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
  /**
   * @remarks
   * The model description.
   * 
   * @example
   * Qwen3.6原生视觉语言系列Plus模型，展现出与当前顶尖前沿模型相媲美的卓越性能，模型效果相较3.5系列显著提升。模型在Agentic coding、前端编程、Vibe coding等代码能力、多模态万物识别、OCR、物体定位等能力上显著增强。
   */
  description?: string;
  /**
   * @remarks
   * The list of model features, such as function-calling, web-search, and structured-outputs.
   */
  features?: string[];
  /**
   * @remarks
   * The inference metadata, including request and response modalities.
   */
  inferenceMetadata?: GetRuntimeModelConfigResponseBodyDataModelProviderListLlmInfoListInferenceMetadata;
  /**
   * @remarks
   * The model code.
   * 
   * @example
   * qwen3.6-plus
   */
  llmCode?: string;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * Qwen3.6-Plus
   */
  name?: string;
  /**
   * @remarks
   * The publish time in ISO 8601 format.
   * 
   * @example
   * 2026-03-04T06:25:17.000+00:00
   */
  publishedTime?: string;
  /**
   * @remarks
   * The model risk type. This parameter is returned only when the request parameter IncludeRiskInfo is set to true.
   * 
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
  /**
   * @remarks
   * The list of model information.
   */
  llmInfoList?: GetRuntimeModelConfigResponseBodyDataModelProviderListLlmInfoList[];
  /**
   * @remarks
   * The model provider template ID.
   * 
   * @example
   * mpt-xxxx
   */
  modelProviderTemplateId?: string;
  /**
   * @remarks
   * The model provider template name.
   * 
   * @example
   * 百炼
   */
  name?: string;
  /**
   * @remarks
   * The model provider name.
   * 
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
   * @remarks
   * The default model (format: providerName/llmCode).
   * 
   * @example
   * bailian/qwen3.6-plus
   */
  defaultModel?: string;
  /**
   * @remarks
   * The list of model providers.
   */
  modelProviderList?: GetRuntimeModelConfigResponseBodyDataModelProviderList[];
  /**
   * @remarks
   * The configured model group ID.
   * 
   * @example
   * mt-xxxx
   */
  modelTemplateId?: string;
  /**
   * @remarks
   * The model group name.
   * 
   * @example
   * model-template-001
   */
  modelTemplateName?: string;
  /**
   * @remarks
   * The model template association type (returned only when an association exists).
   * 
   * @example
   * Runtime
   */
  modelTemplateRefType?: string;
  /**
   * @remarks
   * The resource group ID to which the runtime belongs. The value is null if the runtime is not associated with a resource group.
   * 
   * @example
   * rg-xxxxx
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultModel: 'DefaultModel',
      modelProviderList: 'ModelProviderList',
      modelTemplateId: 'ModelTemplateId',
      modelTemplateName: 'ModelTemplateName',
      modelTemplateRefType: 'ModelTemplateRefType',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultModel: 'string',
      modelProviderList: { 'type': 'array', 'itemType': GetRuntimeModelConfigResponseBodyDataModelProviderList },
      modelTemplateId: 'string',
      modelTemplateName: 'string',
      modelTemplateRefType: 'string',
      resourceGroupId: 'string',
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
  /**
   * @remarks
   * The returned result object.
   */
  data?: GetRuntimeModelConfigResponseBodyData;
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

