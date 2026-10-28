// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRuntimeModelConfigResponseBodyDataModelProviderListLlmInfoListCreditMultiplier extends $dara.Model {
  /**
   * @remarks
   * The upper limit of the multiplier. If this parameter is empty, it indicates that there is no upper limit. For example, if Min is 1 and Max is empty, it is displayed as 1x and above.
   * 
   * @example
   * 3
   */
  max?: number;
  /**
   * @remarks
   * The lower limit of the multiplier. When it is equal to Max, it is a fixed multiplier. For example, if Min and Max are both 2, it is displayed as 2x.
   * 
   * @example
   * 2
   */
  min?: number;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
   * The credit consumption multiplier. If this parameter is empty, it indicates that the model does not participate in credit billing.
   */
  creditMultiplier?: GetRuntimeModelConfigResponseBodyDataModelProviderListLlmInfoListCreditMultiplier;
  /**
   * @remarks
   * The model description.
   * 
   * @example
   * The Qwen3.6 native vision-language Plus model series demonstrates exceptional performance comparable to current top-tier frontier models, with significantly improved model effects compared to the 3.5 series. The model shows significant enhancements in coding capabilities such as agentic coding, front-end programming, and vibe coding, as well as in multimodal universal recognition, OCR, and object localization
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
   * The published time in ISO 8601 format.
   * 
   * @example
   * 2026-03-04T06:25:17.000+00:00
   */
  publishedTime?: string;
  /**
   * @remarks
   * The model risk type. This parameter is returned only when the IncludeRiskInfo request parameter is set to true.
   * 
   * @example
   * Normal
   */
  riskType?: string;
  static names(): { [key: string]: string } {
    return {
      creditMultiplier: 'CreditMultiplier',
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
      creditMultiplier: GetRuntimeModelConfigResponseBodyDataModelProviderListLlmInfoListCreditMultiplier,
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
    if(this.creditMultiplier && typeof (this.creditMultiplier as any).validate === 'function') {
      (this.creditMultiplier as any).validate();
    }
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
   * The ID of the model provider template.
   * 
   * @example
   * mpt-xxxx
   */
  modelProviderTemplateId?: string;
  /**
   * @remarks
   * The name of the model provider template.
   * 
   * @example
   * Model Studio
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
   * The default model, in the format of providerName/llmCode.
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
   * The ID of the configured model group.
   * 
   * @example
   * mt-xxxx
   */
  modelTemplateId?: string;
  /**
   * @remarks
   * The name of the model group.
   * 
   * @example
   * model-template-001
   */
  modelTemplateName?: string;
  /**
   * @remarks
   * The model template association type.
   * 
   * @example
   * Runtime
   */
  modelTemplateRefType?: string;
  /**
   * @remarks
   * The ID of the resource group to which the runtime belongs. If the runtime does not belong to any resource group, the value is null.
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

