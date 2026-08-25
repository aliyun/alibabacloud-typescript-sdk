// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentTaskResultResponseBodyDataDialogues extends $dara.Model {
  /**
   * @example
   * 980
   */
  begin?: number;
  /**
   * @example
   * 7
   */
  emotionValue?: number;
  /**
   * @example
   * 80000
   */
  end?: number;
  /**
   * @example
   * 00:08
   */
  hourMinSec?: string;
  /**
   * @example
   * 客服
   */
  role?: string;
  /**
   * @example
   * 200
   */
  speechRate?: number;
  /**
   * @example
   * 你好有什么可以帮您
   */
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      hourMinSec: 'HourMinSec',
      role: 'Role',
      speechRate: 'SpeechRate',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      hourMinSec: 'string',
      role: 'string',
      speechRate: 'number',
      words: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTaskResultResponseBodyDataResponseCustomerPromptResponse extends $dara.Model {
  /**
   * @remarks
   * The result returned by the large language model.
   * 
   * @example
   * 175/XL the fabric feels very comfortable, looks slim when worn, great clothes super good-looking, quality and feel are top-notch, very satisfied with this purchase
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
   * The attribute name.
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
   * Determined based on the first sentence of the agent
   */
  remarks?: string;
  /**
   * @remarks
   * The attribute value.
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
   * The list of attributes.
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

export class GetAgentTaskResultResponseBodyDataResponseMultiLevelTagResponseTagListChildrenChildrenChildrenChildren extends $dara.Model {
  remarks?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      remarks: 'Remarks',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remarks: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTaskResultResponseBodyDataResponseMultiLevelTagResponseTagListChildrenChildrenChildren extends $dara.Model {
  children?: GetAgentTaskResultResponseBodyDataResponseMultiLevelTagResponseTagListChildrenChildrenChildrenChildren[];
  remarks?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      remarks: 'Remarks',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': GetAgentTaskResultResponseBodyDataResponseMultiLevelTagResponseTagListChildrenChildrenChildrenChildren },
      remarks: 'string',
      tagName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTaskResultResponseBodyDataResponseMultiLevelTagResponseTagListChildrenChildren extends $dara.Model {
  children?: GetAgentTaskResultResponseBodyDataResponseMultiLevelTagResponseTagListChildrenChildrenChildren[];
  remarks?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      remarks: 'Remarks',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': GetAgentTaskResultResponseBodyDataResponseMultiLevelTagResponseTagListChildrenChildrenChildren },
      remarks: 'string',
      tagName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTaskResultResponseBodyDataResponseMultiLevelTagResponseTagListChildren extends $dara.Model {
  children?: GetAgentTaskResultResponseBodyDataResponseMultiLevelTagResponseTagListChildrenChildren[];
  remarks?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      remarks: 'Remarks',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': GetAgentTaskResultResponseBodyDataResponseMultiLevelTagResponseTagListChildrenChildren },
      remarks: 'string',
      tagName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTaskResultResponseBodyDataResponseMultiLevelTagResponseTagList extends $dara.Model {
  children?: GetAgentTaskResultResponseBodyDataResponseMultiLevelTagResponseTagListChildren[];
  remarks?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      remarks: 'Remarks',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': GetAgentTaskResultResponseBodyDataResponseMultiLevelTagResponseTagListChildren },
      remarks: 'string',
      tagName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTaskResultResponseBodyDataResponseMultiLevelTagResponse extends $dara.Model {
  tagList?: GetAgentTaskResultResponseBodyDataResponseMultiLevelTagResponseTagList[];
  static names(): { [key: string]: string } {
    return {
      tagList: 'TagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagList: { 'type': 'array', 'itemType': GetAgentTaskResultResponseBodyDataResponseMultiLevelTagResponseTagList },
    };
  }

  validate() {
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
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
   * Service attitude
   */
  dimension?: string;
  /**
   * @remarks
   * Indicates whether the tag is matched.
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
   * Determined based on the first sentence of the agent
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
   * The tag dimension.
   * 
   * @example
   * Customer intent
   */
  dimension?: string;
  /**
   * @remarks
   * Indicates whether the tag is matched.
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
   * Determined based on the first sentence of the agent
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
   * The list of tags.
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

export class GetAgentTaskResultResponseBodyDataResponseVoiceprintResponseDialogueAdditions extends $dara.Model {
  /**
   * @example
   * 38
   */
  age?: string;
  /**
   * @example
   * 中年
   */
  ageGroup?: string;
  /**
   * @example
   * 0.9
   */
  ageScore?: number;
  /**
   * @example
   * 0.6
   */
  bestVoiceprintScore?: number;
  /**
   * @example
   * 中立/neutral
   */
  emotion?: string;
  /**
   * @example
   * 0.9
   */
  emotionScore?: number;
  /**
   * @example
   * 女
   */
  gender?: string;
  /**
   * @example
   * 0.8
   */
  genderScore?: number;
  /**
   * @example
   * true
   */
  isKnownVoiceprint?: boolean;
  /**
   * @example
   * 12
   */
  speaker?: string;
  static names(): { [key: string]: string } {
    return {
      age: 'Age',
      ageGroup: 'AgeGroup',
      ageScore: 'AgeScore',
      bestVoiceprintScore: 'BestVoiceprintScore',
      emotion: 'Emotion',
      emotionScore: 'EmotionScore',
      gender: 'Gender',
      genderScore: 'GenderScore',
      isKnownVoiceprint: 'IsKnownVoiceprint',
      speaker: 'Speaker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      age: 'string',
      ageGroup: 'string',
      ageScore: 'number',
      bestVoiceprintScore: 'number',
      emotion: 'string',
      emotionScore: 'number',
      gender: 'string',
      genderScore: 'number',
      isKnownVoiceprint: 'boolean',
      speaker: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTaskResultResponseBodyDataResponseVoiceprintResponseDialogue extends $dara.Model {
  additions?: GetAgentTaskResultResponseBodyDataResponseVoiceprintResponseDialogueAdditions;
  /**
   * @example
   * 443
   */
  begin?: number;
  /**
   * @example
   * 1767492840000
   */
  end?: number;
  /**
   * @example
   * 不清楚
   */
  words?: string;
  static names(): { [key: string]: string } {
    return {
      additions: 'Additions',
      begin: 'Begin',
      end: 'End',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additions: GetAgentTaskResultResponseBodyDataResponseVoiceprintResponseDialogueAdditions,
      begin: 'number',
      end: 'number',
      words: 'string',
    };
  }

  validate() {
    if(this.additions && typeof (this.additions as any).validate === 'function') {
      (this.additions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTaskResultResponseBodyDataResponseVoiceprintResponseErrors extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTaskResultResponseBodyDataResponseVoiceprintResponse extends $dara.Model {
  dialogue?: GetAgentTaskResultResponseBodyDataResponseVoiceprintResponseDialogue[];
  errors?: GetAgentTaskResultResponseBodyDataResponseVoiceprintResponseErrors[];
  static names(): { [key: string]: string } {
    return {
      dialogue: 'Dialogue',
      errors: 'Errors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogue: { 'type': 'array', 'itemType': GetAgentTaskResultResponseBodyDataResponseVoiceprintResponseDialogue },
      errors: { 'type': 'array', 'itemType': GetAgentTaskResultResponseBodyDataResponseVoiceprintResponseErrors },
    };
  }

  validate() {
    if(Array.isArray(this.dialogue)) {
      $dara.Model.validateArray(this.dialogue);
    }
    if(Array.isArray(this.errors)) {
      $dara.Model.validateArray(this.errors);
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
   * The attribute extraction result.
   */
  fieldResponse?: GetAgentTaskResultResponseBodyDataResponseFieldResponse;
  multiLevelTagResponse?: GetAgentTaskResultResponseBodyDataResponseMultiLevelTagResponse;
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
  voiceprintResponse?: GetAgentTaskResultResponseBodyDataResponseVoiceprintResponse;
  static names(): { [key: string]: string } {
    return {
      customerPromptResponse: 'CustomerPromptResponse',
      fieldResponse: 'FieldResponse',
      multiLevelTagResponse: 'MultiLevelTagResponse',
      serviceInspectionResponse: 'ServiceInspectionResponse',
      tagCategoryResponse: 'TagCategoryResponse',
      voiceprintResponse: 'VoiceprintResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerPromptResponse: GetAgentTaskResultResponseBodyDataResponseCustomerPromptResponse,
      fieldResponse: GetAgentTaskResultResponseBodyDataResponseFieldResponse,
      multiLevelTagResponse: GetAgentTaskResultResponseBodyDataResponseMultiLevelTagResponse,
      serviceInspectionResponse: GetAgentTaskResultResponseBodyDataResponseServiceInspectionResponse,
      tagCategoryResponse: GetAgentTaskResultResponseBodyDataResponseTagCategoryResponse,
      voiceprintResponse: GetAgentTaskResultResponseBodyDataResponseVoiceprintResponse,
    };
  }

  validate() {
    if(this.customerPromptResponse && typeof (this.customerPromptResponse as any).validate === 'function') {
      (this.customerPromptResponse as any).validate();
    }
    if(this.fieldResponse && typeof (this.fieldResponse as any).validate === 'function') {
      (this.fieldResponse as any).validate();
    }
    if(this.multiLevelTagResponse && typeof (this.multiLevelTagResponse as any).validate === 'function') {
      (this.multiLevelTagResponse as any).validate();
    }
    if(this.serviceInspectionResponse && typeof (this.serviceInspectionResponse as any).validate === 'function') {
      (this.serviceInspectionResponse as any).validate();
    }
    if(this.tagCategoryResponse && typeof (this.tagCategoryResponse as any).validate === 'function') {
      (this.tagCategoryResponse as any).validate();
    }
    if(this.voiceprintResponse && typeof (this.voiceprintResponse as any).validate === 'function') {
      (this.voiceprintResponse as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTaskResultResponseBodyDataUsage extends $dara.Model {
  inputTokens?: string;
  outputTokens?: string;
  /**
   * @example
   * 0
   */
  totalTokens?: string;
  tymxPlusCount?: string;
  tymxTurboCount?: string;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
      tymxPlusCount: 'TymxPlusCount',
      tymxTurboCount: 'TymxTurboCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'string',
      outputTokens: 'string',
      totalTokens: 'string',
      tymxPlusCount: 'string',
      tymxTurboCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTaskResultResponseBodyData extends $dara.Model {
  dialogues?: GetAgentTaskResultResponseBodyDataDialogues[];
  /**
   * @example
   * xxxx
   */
  errorMessage?: string;
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
   * The result of the computation task.
   */
  response?: GetAgentTaskResultResponseBodyDataResponse;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - 1: pending.
   * - 2: running.
   * - 3: succeeded.
   * - 4: failed.
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
  usage?: GetAgentTaskResultResponseBodyDataUsage;
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
      dialogues: 'Dialogues',
      errorMessage: 'ErrorMessage',
      llmRequestId: 'LlmRequestId',
      response: 'Response',
      status: 'Status',
      taskId: 'TaskId',
      usage: 'Usage',
      vid: 'Vid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogues: { 'type': 'array', 'itemType': GetAgentTaskResultResponseBodyDataDialogues },
      errorMessage: 'string',
      llmRequestId: 'string',
      response: GetAgentTaskResultResponseBodyDataResponse,
      status: 'string',
      taskId: 'string',
      usage: GetAgentTaskResultResponseBodyDataUsage,
      vid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dialogues)) {
      $dara.Model.validateArray(this.dialogues);
    }
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
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
   * - **true**: successful.
   * - **false/null**: failed.
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

