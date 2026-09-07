// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentTaskResultResponseBodyDataDialogues extends $dara.Model {
  /**
   * @remarks
   * The offset of the start time of this sentence relative to the overall start time of the dialogue, in milliseconds. For example, if the total recording duration is 2 minutes and 10 seconds, and a sentence spoken by the customer starts at 1 minute and 12 seconds and ends at 1 minute and 20 seconds, the value of begin is 72000 and the value of end is 80000.
   * 
   * @example
   * 980
   */
  begin?: number;
  /**
   * @remarks
   * The emotion energy value, calculated as the volume in decibels divided by 10. Valid values: 1 to 10. A higher value indicates a stronger emotion.
   * 
   * @example
   * 7
   */
  emotionValue?: number;
  /**
   * @remarks
   * The offset of the start time of this sentence relative to the overall start time of the dialogue, in milliseconds. For example, if the total recording duration is 2 minutes and 10 seconds, and a sentence spoken by the customer starts at 1 minute and 12 seconds and ends at 1 minute and 20 seconds, the value of begin is 72000 and the value of end is 80000.
   * 
   * @example
   * 80000
   */
  end?: number;
  /**
   * @remarks
   * The start time of this sentence in hours, minutes, and seconds format: hh:mm:ss.
   * 
   * @example
   * 00:08
   */
  hourMinSec?: string;
  /**
   * @remarks
   * The role of the speaker for this sentence. Valid values: agent and customer.
   * 
   * @example
   * agent
   */
  role?: string;
  /**
   * @remarks
   * The average speech rate of this sentence. Unit: words per minute.
   * 
   * @example
   * 200
   */
  speechRate?: number;
  /**
   * @remarks
   * The dialogue content.
   * 
   * @example
   * Hello, how can I help you
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
   * 175/xl the fabric feels very comfortable, looks slim when worn, great clothes super good looking, quality and feel are top-notch, very satisfied with this purchase
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
   * Determined from the first sentence of the customer service representative
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
  /**
   * @remarks
   * The tag analysis description.
   */
  remarks?: string;
  /**
   * @remarks
   * The tag name.
   */
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
  /**
   * @remarks
   * The list of child nodes.
   */
  children?: GetAgentTaskResultResponseBodyDataResponseMultiLevelTagResponseTagListChildrenChildrenChildrenChildren[];
  /**
   * @remarks
   * The tag analysis description.
   */
  remarks?: string;
  /**
   * @remarks
   * The tag name.
   */
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
  /**
   * @remarks
   * The tag name.
   */
  children?: GetAgentTaskResultResponseBodyDataResponseMultiLevelTagResponseTagListChildrenChildrenChildren[];
  /**
   * @remarks
   * The tag analysis description.
   */
  remarks?: string;
  /**
   * @remarks
   * The tag name.
   */
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
  /**
   * @remarks
   * The tag analysis description.
   */
  children?: GetAgentTaskResultResponseBodyDataResponseMultiLevelTagResponseTagListChildrenChildren[];
  /**
   * @remarks
   * The tag analysis description.
   */
  remarks?: string;
  /**
   * @remarks
   * The tag name.
   */
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
  /**
   * @remarks
   * The list of child nodes.
   */
  children?: GetAgentTaskResultResponseBodyDataResponseMultiLevelTagResponseTagListChildren[];
  /**
   * @remarks
   * The tag analysis description.
   */
  remarks?: string;
  /**
   * @remarks
   * The tag name.
   */
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
  /**
   * @remarks
   * The list of child nodes.
   */
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
   * Determined from the first sentence of the customer service representative
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
   * Determined from the first sentence of the customer service representative
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
   * @remarks
   * The age.
   * 
   * @example
   * 38
   */
  age?: string;
  /**
   * @remarks
   * The age group (child, middle-aged, or elderly).
   * 
   * @example
   * Middle-aged
   */
  ageGroup?: string;
  /**
   * @remarks
   * The age group confidence score.
   * 
   * @example
   * 0.9
   */
  ageScore?: number;
  /**
   * @remarks
   * The highest voiceprint score.
   * 
   * @example
   * 0.6
   */
  bestVoiceprintScore?: number;
  /**
   * @remarks
   * The emotion type. Valid values:
   * 
   * - angry
   * - disgusted
   * - fearful
   * - happy
   * - neutral
   * - other
   * - sad
   * - surprised
   * - unknown
   * 
   * @example
   * neutral
   */
  emotion?: string;
  /**
   * @remarks
   * The emotion confidence score.
   * 
   * @example
   * 0.9
   */
  emotionScore?: number;
  /**
   * @remarks
   * The gender.
   * 
   * @example
   * Female
   */
  gender?: string;
  /**
   * @remarks
   * The gender confidence score.
   * 
   * @example
   * 0.8
   */
  genderScore?: number;
  /**
   * @remarks
   * Indicates whether the speaker is the voiceprint owner.
   * 
   * @example
   * true
   */
  isKnownVoiceprint?: boolean;
  /**
   * @remarks
   * The speaker.
   * 
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
   * @remarks
   * The start time of this sentence, which is the offset from the starting point in milliseconds.
   * 
   * @example
   * 443
   */
  begin?: number;
  /**
   * @remarks
   * The end time of this sentence, which is the offset from the starting point in milliseconds.
   * 
   * @example
   * 1767492840000
   */
  end?: number;
  /**
   * @remarks
   * The dialogue content.
   * 
   * @example
   * Unclear
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
   * @remarks
   * The result code. A value of **200** indicates success. Any other value indicates failure. You can use this field to determine the cause of failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error details when an error occurs, or **successful** when the operation succeeds.
   * 
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
  /**
   * @remarks
   * The dialogue corpus.
   */
  dialogue?: GetAgentTaskResultResponseBodyDataResponseVoiceprintResponseDialogue[];
  /**
   * @remarks
   * The error information of each sub-publishing module. The key is the sub-publishing module and the value is the error message.
   */
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
  /**
   * @remarks
   * The number of input tokens consumed by the LLM.
   */
  inputTokens?: string;
  /**
   * @remarks
   * The number of output tokens generated by the LLM.
   */
  outputTokens?: string;
  /**
   * @remarks
   * The total number of tokens consumed by this task.
   * 
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
  /**
   * @remarks
   * The dialogue data.
   */
  dialogues?: GetAgentTaskResultResponseBodyDataDialogues[];
  /**
   * @remarks
   * The error details when the status is not 0 or 1.
   * 
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
   * The token usage information.
   */
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
   * Indicates whether the request is successful. You can use this field to determine whether the request is successful:
   * 
   * - **true**: The request is successful.
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

