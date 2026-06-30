// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentTaskResultResponseBodyDataResponseCustomerPromptResponse extends $dara.Model {
  /**
   * @remarks
   * The result returned by the large language model.
   * 
   * @example
   * 175/xl面料摸着很舒服,穿起来看着也挺修身的挺好的好衣服超好看,质量手感没得说一级棒,很满意的一次购物。
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTaskResultResponseBodyDataResponseFieldResponseFieldVoList extends $dara.Model {
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * phone
   */
  name?: string;
  /**
   * @remarks
   * The sentences referenced in the reasoning.
   */
  originalUtterances?: number[];
  /**
   * @remarks
   * The reasoning for the judgment.
   * 
   * @example
   * 通过客服第一句话判断
   */
  remarks?: string;
  /**
   * @remarks
   * The property value.
   * 
   * @example
   * 1234561
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      originalUtterances: 'OriginalUtterances',
      remarks: 'Remarks',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      originalUtterances: { 'type': 'array', 'itemType': 'number' },
      remarks: 'string',
      value: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.originalUtterances)) {
      $dara.Model.validateArray(this.originalUtterances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTaskResultResponseBodyDataResponseFieldResponse extends $dara.Model {
  /**
   * @remarks
   * The list of properties.
   */
  fieldVoList?: GetAgentTaskResultResponseBodyDataResponseFieldResponseFieldVoList[];
  static names(): { [key: string]: string } {
    return {
      fieldVoList: 'FieldVoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldVoList: { 'type': 'array', 'itemType': GetAgentTaskResultResponseBodyDataResponseFieldResponseFieldVoList },
    };
  }

  validate() {
    if(Array.isArray(this.fieldVoList)) {
      $dara.Model.validateArray(this.fieldVoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTaskResultResponseBodyDataResponseServiceInspectionResponseServiceInspectionVoList extends $dara.Model {
  /**
   * @remarks
   * The inspection dimension.
   * 
   * @example
   * 服务态度
   */
  dimension?: string;
  /**
   * @remarks
   * Indicates whether a match is found.
   * 
   * @example
   * true
   */
  isMatch?: boolean;
  /**
   * @remarks
   * The sentences referenced in the reasoning.
   */
  originalUtterances?: string[];
  /**
   * @remarks
   * The reasoning for the judgment.
   * 
   * @example
   * 通过客服第一句话判断
   */
  remarks?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      isMatch: 'IsMatch',
      originalUtterances: 'OriginalUtterances',
      remarks: 'Remarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'string',
      isMatch: 'boolean',
      originalUtterances: { 'type': 'array', 'itemType': 'string' },
      remarks: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.originalUtterances)) {
      $dara.Model.validateArray(this.originalUtterances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTaskResultResponseBodyDataResponseServiceInspectionResponse extends $dara.Model {
  /**
   * @remarks
   * The list of inspection items.
   */
  serviceInspectionVoList?: GetAgentTaskResultResponseBodyDataResponseServiceInspectionResponseServiceInspectionVoList[];
  static names(): { [key: string]: string } {
    return {
      serviceInspectionVoList: 'ServiceInspectionVoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceInspectionVoList: { 'type': 'array', 'itemType': GetAgentTaskResultResponseBodyDataResponseServiceInspectionResponseServiceInspectionVoList },
    };
  }

  validate() {
    if(Array.isArray(this.serviceInspectionVoList)) {
      $dara.Model.validateArray(this.serviceInspectionVoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTaskResultResponseBodyDataResponseTagCategoryResponseTagCategoryVoList extends $dara.Model {
  /**
   * @remarks
   * The label dimension.
   * 
   * @example
   * 客户意图
   */
  dimension?: string;
  /**
   * @remarks
   * Indicates whether a match is found.
   * 
   * @example
   * true
   */
  isMatch?: boolean;
  /**
   * @remarks
   * The sentences referenced in the reasoning.
   */
  originalUtterances?: string[];
  /**
   * @remarks
   * The reasoning for the judgment.
   * 
   * @example
   * 通过客服第一句话判断
   */
  remarks?: string;
  /**
   * @remarks
   * The list of matched labels.
   */
  resultLabels?: string[];
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      isMatch: 'IsMatch',
      originalUtterances: 'OriginalUtterances',
      remarks: 'Remarks',
      resultLabels: 'ResultLabels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'string',
      isMatch: 'boolean',
      originalUtterances: { 'type': 'array', 'itemType': 'string' },
      remarks: 'string',
      resultLabels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.originalUtterances)) {
      $dara.Model.validateArray(this.originalUtterances);
    }
    if(Array.isArray(this.resultLabels)) {
      $dara.Model.validateArray(this.resultLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTaskResultResponseBodyDataResponseTagCategoryResponse extends $dara.Model {
  /**
   * @remarks
   * The list of labels.
   */
  tagCategoryVoList?: GetAgentTaskResultResponseBodyDataResponseTagCategoryResponseTagCategoryVoList[];
  static names(): { [key: string]: string } {
    return {
      tagCategoryVoList: 'TagCategoryVoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagCategoryVoList: { 'type': 'array', 'itemType': GetAgentTaskResultResponseBodyDataResponseTagCategoryResponseTagCategoryVoList },
    };
  }

  validate() {
    if(Array.isArray(this.tagCategoryVoList)) {
      $dara.Model.validateArray(this.tagCategoryVoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTaskResultResponseBodyDataResponse extends $dara.Model {
  /**
   * @remarks
   * The result of the custom prompt.
   */
  customerPromptResponse?: GetAgentTaskResultResponseBodyDataResponseCustomerPromptResponse;
  /**
   * @remarks
   * The property extraction result.
   */
  fieldResponse?: GetAgentTaskResultResponseBodyDataResponseFieldResponse;
  /**
   * @remarks
   * The service quality inspection result.
   */
  serviceInspectionResponse?: GetAgentTaskResultResponseBodyDataResponseServiceInspectionResponse;
  /**
   * @remarks
   * The tag categorization result.
   */
  tagCategoryResponse?: GetAgentTaskResultResponseBodyDataResponseTagCategoryResponse;
  static names(): { [key: string]: string } {
    return {
      customerPromptResponse: 'CustomerPromptResponse',
      fieldResponse: 'FieldResponse',
      serviceInspectionResponse: 'ServiceInspectionResponse',
      tagCategoryResponse: 'TagCategoryResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerPromptResponse: GetAgentTaskResultResponseBodyDataResponseCustomerPromptResponse,
      fieldResponse: GetAgentTaskResultResponseBodyDataResponseFieldResponse,
      serviceInspectionResponse: GetAgentTaskResultResponseBodyDataResponseServiceInspectionResponse,
      tagCategoryResponse: GetAgentTaskResultResponseBodyDataResponseTagCategoryResponse,
    };
  }

  validate() {
    if(this.customerPromptResponse && typeof (this.customerPromptResponse as any).validate === 'function') {
      (this.customerPromptResponse as any).validate();
    }
    if(this.fieldResponse && typeof (this.fieldResponse as any).validate === 'function') {
      (this.fieldResponse as any).validate();
    }
    if(this.serviceInspectionResponse && typeof (this.serviceInspectionResponse as any).validate === 'function') {
      (this.serviceInspectionResponse as any).validate();
    }
    if(this.tagCategoryResponse && typeof (this.tagCategoryResponse as any).validate === 'function') {
      (this.tagCategoryResponse as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTaskResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of input tokens.
   * 
   * @example
   * 100
   */
  inputTokens?: string;
  /**
   * @remarks
   * The request ID returned by the large language model service.
   * 
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24***
   */
  llmRequestId?: string;
  /**
   * @remarks
   * The number of output tokens.
   * 
   * @example
   * 200
   */
  outputTokens?: string;
  /**
   * @remarks
   * The result of the computing task.
   */
  response?: GetAgentTaskResultResponseBodyDataResponse;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - 1: pending
   * - 2: running
   * - 3: succeeded
   * - 4: failed
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * A6BEC8D-9A5B-4BE5-8432-4F635E***
   */
  taskId?: string;
  /**
   * @remarks
   * The total number of tokens.
   * 
   * @example
   * 300
   */
  totalTokens?: string;
  /**
   * @remarks
   * The number of times the plus model is used.
   * 
   * @example
   * 1
   */
  tyxmPlusCount?: string;
  /**
   * @remarks
   * The number of times the turbo model is used.
   * 
   * @example
   * 1
   */
  tyxmTurboCount?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 6fa76916-3ce6-45d8-ac64-01b7f31***
   */
  vid?: string;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      llmRequestId: 'LlmRequestId',
      outputTokens: 'OutputTokens',
      response: 'Response',
      status: 'Status',
      taskId: 'TaskId',
      totalTokens: 'TotalTokens',
      tyxmPlusCount: 'TyxmPlusCount',
      tyxmTurboCount: 'TyxmTurboCount',
      vid: 'Vid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'string',
      llmRequestId: 'string',
      outputTokens: 'string',
      response: GetAgentTaskResultResponseBodyDataResponse,
      status: 'string',
      taskId: 'string',
      totalTokens: 'string',
      tyxmPlusCount: 'string',
      tyxmTurboCount: 'string',
      vid: 'string',
    };
  }

  validate() {
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTaskResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: GetAgentTaskResultResponseBodyData;
  /**
   * @remarks
   * The error message returned when an error occurs.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F190ADE9-619A-447D-84E3-7E241A5C428E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. You can use this field to determine whether the request was successful:
   * 
   * - **true**: The request was successful.
   * - **false/null**: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAgentTaskResultResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

