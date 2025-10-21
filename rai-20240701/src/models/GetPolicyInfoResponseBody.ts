// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolicyInfoResponseBodyContentSafeModelInfo extends $dara.Model {
  easServiceName?: string;
  modelInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      easServiceName: 'EasServiceName',
      modelInstanceId: 'ModelInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      easServiceName: 'string',
      modelInstanceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyInfoResponseBodyHarmfulCategoryConfigInfoList extends $dara.Model {
  /**
   * @remarks
   * Harmful category configuration ID
   * 
   * @example
   * 1
   */
  categoryConfigId?: number;
  categoryId?: number;
  /**
   * @remarks
   * Category name
   * 
   * @example
   * Morality
   */
  categoryLabel?: string;
  /**
   * @remarks
   * 0: Text
   * 1: Image
   * 
   * @example
   * 0
   */
  categoryType?: number;
  /**
   * @remarks
   * Model input/output type
   * 0: Input
   * 1: Output
   * 
   * @example
   * 0
   */
  inputOutputType?: number;
  /**
   * @remarks
   * Harmful category configuration switch
   * 0: Off
   * 1: On
   * 
   * @example
   * 1
   */
  isEnabled?: number;
  /**
   * @remarks
   * Security level
   * 0: Low
   * 1: Medium
   * 2: High
   * 
   * @example
   * 1
   */
  securityLevel?: number;
  static names(): { [key: string]: string } {
    return {
      categoryConfigId: 'CategoryConfigId',
      categoryId: 'CategoryId',
      categoryLabel: 'CategoryLabel',
      categoryType: 'CategoryType',
      inputOutputType: 'InputOutputType',
      isEnabled: 'IsEnabled',
      securityLevel: 'SecurityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryConfigId: 'number',
      categoryId: 'number',
      categoryLabel: 'string',
      categoryType: 'number',
      inputOutputType: 'number',
      isEnabled: 'number',
      securityLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyInfoResponseBodyPromptAttackInfo extends $dara.Model {
  /**
   * @remarks
   * Prompt attack configuration switch
   * 0: Off
   * 1: On
   * 
   * @example
   * true
   */
  isEnabled?: number;
  /**
   * @remarks
   * Security level
   * 0: Low
   * 1: Medium
   * 2: High
   * 
   * @example
   * 1
   */
  securityLevel?: number;
  static names(): { [key: string]: string } {
    return {
      isEnabled: 'IsEnabled',
      securityLevel: 'SecurityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isEnabled: 'number',
      securityLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyInfoResponseBodyPromptAttackInfoList extends $dara.Model {
  /**
   * @remarks
   * Harmful category configuration ID
   * 
   * @example
   * 1
   */
  categoryConfigId?: number;
  categoryId?: number;
  /**
   * @remarks
   * Category name
   * 
   * @example
   * Role Play
   */
  categoryLabel?: string;
  /**
   * @remarks
   * Harmful category configuration switch
   * 0: Off
   * 1: On
   * 
   * @example
   * 1
   */
  isEnabled?: number;
  /**
   * @remarks
   * Security level
   * 0: Low
   * 1: Medium
   * 2: High
   * 
   * @example
   * 1
   */
  securityLevel?: number;
  static names(): { [key: string]: string } {
    return {
      categoryConfigId: 'CategoryConfigId',
      categoryId: 'CategoryId',
      categoryLabel: 'CategoryLabel',
      isEnabled: 'IsEnabled',
      securityLevel: 'SecurityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryConfigId: 'number',
      categoryId: 'number',
      categoryLabel: 'string',
      isEnabled: 'number',
      securityLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyInfoResponseBodyPromptAttackModelInfo extends $dara.Model {
  easServiceName?: string;
  modelInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      easServiceName: 'EasServiceName',
      modelInstanceId: 'ModelInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      easServiceName: 'string',
      modelInstanceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyInfoResponseBodyRegularExpressList extends $dara.Model {
  actionType?: number;
  inputOutputType?: number;
  isEnabled?: number;
  matchAndReplace?: string;
  regularExpress?: string;
  regularExpressId?: number;
  regularExpressName?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      inputOutputType: 'InputOutputType',
      isEnabled: 'IsEnabled',
      matchAndReplace: 'MatchAndReplace',
      regularExpress: 'RegularExpress',
      regularExpressId: 'RegularExpressId',
      regularExpressName: 'RegularExpressName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'number',
      inputOutputType: 'number',
      isEnabled: 'number',
      matchAndReplace: 'string',
      regularExpress: 'string',
      regularExpressId: 'number',
      regularExpressName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyInfoResponseBodySensitiveConfigList extends $dara.Model {
  actionType?: number;
  inputOutputType?: number;
  isEnabled?: number;
  matchAndReplace?: string;
  sensitiveConfigId?: number;
  sensitiveName?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      inputOutputType: 'InputOutputType',
      isEnabled: 'IsEnabled',
      matchAndReplace: 'MatchAndReplace',
      sensitiveConfigId: 'SensitiveConfigId',
      sensitiveName: 'SensitiveName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'number',
      inputOutputType: 'number',
      isEnabled: 'number',
      matchAndReplace: 'string',
      sensitiveConfigId: 'number',
      sensitiveName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyInfoResponseBodySensitiveTopicListTopicExampleInfoList extends $dara.Model {
  content?: string;
  exampleType?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      exampleType: 'ExampleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      exampleType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyInfoResponseBodySensitiveTopicList extends $dara.Model {
  categoryType?: number;
  inputOutputType?: number;
  securityLevel?: number;
  topicDefinition?: string;
  topicExampleInfoList?: GetPolicyInfoResponseBodySensitiveTopicListTopicExampleInfoList[];
  topicId?: number;
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      categoryType: 'CategoryType',
      inputOutputType: 'InputOutputType',
      securityLevel: 'SecurityLevel',
      topicDefinition: 'TopicDefinition',
      topicExampleInfoList: 'TopicExampleInfoList',
      topicId: 'TopicId',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryType: 'number',
      inputOutputType: 'number',
      securityLevel: 'number',
      topicDefinition: 'string',
      topicExampleInfoList: { 'type': 'array', 'itemType': GetPolicyInfoResponseBodySensitiveTopicListTopicExampleInfoList },
      topicId: 'number',
      topicName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.topicExampleInfoList)) {
      $dara.Model.validateArray(this.topicExampleInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyInfoResponseBodySensitiveTopicModelInfo extends $dara.Model {
  easServiceName?: string;
  modelInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      easServiceName: 'EasServiceName',
      modelInstanceId: 'ModelInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      easServiceName: 'string',
      modelInstanceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyInfoResponseBodySensitiveWordList extends $dara.Model {
  inputOutputType?: number;
  label?: string;
  word?: string;
  static names(): { [key: string]: string } {
    return {
      inputOutputType: 'InputOutputType',
      label: 'Label',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputOutputType: 'number',
      label: 'string',
      word: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyInfoResponseBodyTopicConfigInfoList extends $dara.Model {
  /**
   * @remarks
   * 0: Text
   * 1: Image
   * 
   * @example
   * 0
   */
  categoryType?: number;
  /**
   * @remarks
   * Model input/output type
   * 0: Input
   * 1: Output
   * 
   * @example
   * 0
   */
  inputOutputType?: number;
  /**
   * @remarks
   * Security level
   * 0: Low
   * 1: Medium
   * 2: High
   * 
   * @example
   * 1
   */
  securityLevel?: number;
  /**
   * @remarks
   * Sensitive topic ID
   * 
   * @example
   * 3
   */
  topicId?: number;
  /**
   * @remarks
   * Topic name
   * 
   * @example
   * Buss.
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      categoryType: 'CategoryType',
      inputOutputType: 'InputOutputType',
      securityLevel: 'SecurityLevel',
      topicId: 'TopicId',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryType: 'number',
      inputOutputType: 'number',
      securityLevel: 'number',
      topicId: 'number',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyInfoResponseBodyWordGroupInfoList extends $dara.Model {
  /**
   * @remarks
   * Keyword group ID.
   * 
   * @example
   * 1
   */
  groupId?: number;
  /**
   * @remarks
   * Keyword group name
   * 
   * @example
   * testGroup
   */
  groupName?: string;
  /**
   * @remarks
   * Model input/output type
   * 0: Input
   * 1: Output
   * 
   * @example
   * 0
   */
  inputOutputType?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
      inputOutputType: 'InputOutputType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      groupName: 'string',
      inputOutputType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Result code, 00000 indicates success; others indicate failure.
   * 
   * @example
   * 00000
   */
  code?: string;
  contentSafeModelInfo?: GetPolicyInfoResponseBodyContentSafeModelInfo;
  enableSensitiveInputCheck?: number;
  enableSensitiveOutputCheck?: number;
  /**
   * @remarks
   * Policy modification time
   * 
   * @example
   * 1634122349000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Harmful category configuration list
   */
  harmfulCategoryConfigInfoList?: GetPolicyInfoResponseBodyHarmfulCategoryConfigInfoList[];
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  inputSafeAnswer?: string;
  inputSafeAnswerSwitch?: number;
  isSidecarPolicy?: number;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * ""
   */
  message?: string;
  outputSafeAnswer?: string;
  outputSafeAnswerSwitch?: number;
  /**
   * @remarks
   * Policy identifier
   * 
   * @example
   * x1bc5xgs4uhx
   */
  policyIdentifier?: string;
  /**
   * @remarks
   * Detection policy name.
   * 
   * @example
   * testPolicy
   */
  policyName?: string;
  /**
   * @remarks
   * Prompt attack detection result object
   */
  promptAttackInfo?: GetPolicyInfoResponseBodyPromptAttackInfo;
  /**
   * @remarks
   * Prompt attack list
   */
  promptAttackInfoList?: GetPolicyInfoResponseBodyPromptAttackInfoList[];
  promptAttackModelInfo?: GetPolicyInfoResponseBodyPromptAttackModelInfo;
  regularExpressList?: GetPolicyInfoResponseBodyRegularExpressList[];
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  sceneType?: number;
  sensitiveConfigList?: GetPolicyInfoResponseBodySensitiveConfigList[];
  sensitiveTopicList?: GetPolicyInfoResponseBodySensitiveTopicList[];
  sensitiveTopicModelInfo?: GetPolicyInfoResponseBodySensitiveTopicModelInfo;
  sensitiveWordList?: GetPolicyInfoResponseBodySensitiveWordList[];
  /**
   * @remarks
   * Indicates whether the operation was successful. `true` for success, `false` for failure.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * Sensitive topic list
   */
  topicConfigInfoList?: GetPolicyInfoResponseBodyTopicConfigInfoList[];
  /**
   * @remarks
   * Keyword group object list
   */
  wordGroupInfoList?: GetPolicyInfoResponseBodyWordGroupInfoList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contentSafeModelInfo: 'ContentSafeModelInfo',
      enableSensitiveInputCheck: 'EnableSensitiveInputCheck',
      enableSensitiveOutputCheck: 'EnableSensitiveOutputCheck',
      gmtModified: 'GmtModified',
      harmfulCategoryConfigInfoList: 'HarmfulCategoryConfigInfoList',
      httpStatusCode: 'HttpStatusCode',
      inputSafeAnswer: 'InputSafeAnswer',
      inputSafeAnswerSwitch: 'InputSafeAnswerSwitch',
      isSidecarPolicy: 'IsSidecarPolicy',
      message: 'Message',
      outputSafeAnswer: 'OutputSafeAnswer',
      outputSafeAnswerSwitch: 'OutputSafeAnswerSwitch',
      policyIdentifier: 'PolicyIdentifier',
      policyName: 'PolicyName',
      promptAttackInfo: 'PromptAttackInfo',
      promptAttackInfoList: 'PromptAttackInfoList',
      promptAttackModelInfo: 'PromptAttackModelInfo',
      regularExpressList: 'RegularExpressList',
      requestId: 'RequestId',
      sceneType: 'SceneType',
      sensitiveConfigList: 'SensitiveConfigList',
      sensitiveTopicList: 'SensitiveTopicList',
      sensitiveTopicModelInfo: 'SensitiveTopicModelInfo',
      sensitiveWordList: 'SensitiveWordList',
      success: 'Success',
      topicConfigInfoList: 'TopicConfigInfoList',
      wordGroupInfoList: 'WordGroupInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contentSafeModelInfo: GetPolicyInfoResponseBodyContentSafeModelInfo,
      enableSensitiveInputCheck: 'number',
      enableSensitiveOutputCheck: 'number',
      gmtModified: 'number',
      harmfulCategoryConfigInfoList: { 'type': 'array', 'itemType': GetPolicyInfoResponseBodyHarmfulCategoryConfigInfoList },
      httpStatusCode: 'number',
      inputSafeAnswer: 'string',
      inputSafeAnswerSwitch: 'number',
      isSidecarPolicy: 'number',
      message: 'string',
      outputSafeAnswer: 'string',
      outputSafeAnswerSwitch: 'number',
      policyIdentifier: 'string',
      policyName: 'string',
      promptAttackInfo: GetPolicyInfoResponseBodyPromptAttackInfo,
      promptAttackInfoList: { 'type': 'array', 'itemType': GetPolicyInfoResponseBodyPromptAttackInfoList },
      promptAttackModelInfo: GetPolicyInfoResponseBodyPromptAttackModelInfo,
      regularExpressList: { 'type': 'array', 'itemType': GetPolicyInfoResponseBodyRegularExpressList },
      requestId: 'string',
      sceneType: 'number',
      sensitiveConfigList: { 'type': 'array', 'itemType': GetPolicyInfoResponseBodySensitiveConfigList },
      sensitiveTopicList: { 'type': 'array', 'itemType': GetPolicyInfoResponseBodySensitiveTopicList },
      sensitiveTopicModelInfo: GetPolicyInfoResponseBodySensitiveTopicModelInfo,
      sensitiveWordList: { 'type': 'array', 'itemType': GetPolicyInfoResponseBodySensitiveWordList },
      success: 'boolean',
      topicConfigInfoList: { 'type': 'array', 'itemType': GetPolicyInfoResponseBodyTopicConfigInfoList },
      wordGroupInfoList: { 'type': 'array', 'itemType': GetPolicyInfoResponseBodyWordGroupInfoList },
    };
  }

  validate() {
    if(this.contentSafeModelInfo && typeof (this.contentSafeModelInfo as any).validate === 'function') {
      (this.contentSafeModelInfo as any).validate();
    }
    if(Array.isArray(this.harmfulCategoryConfigInfoList)) {
      $dara.Model.validateArray(this.harmfulCategoryConfigInfoList);
    }
    if(this.promptAttackInfo && typeof (this.promptAttackInfo as any).validate === 'function') {
      (this.promptAttackInfo as any).validate();
    }
    if(Array.isArray(this.promptAttackInfoList)) {
      $dara.Model.validateArray(this.promptAttackInfoList);
    }
    if(this.promptAttackModelInfo && typeof (this.promptAttackModelInfo as any).validate === 'function') {
      (this.promptAttackModelInfo as any).validate();
    }
    if(Array.isArray(this.regularExpressList)) {
      $dara.Model.validateArray(this.regularExpressList);
    }
    if(Array.isArray(this.sensitiveConfigList)) {
      $dara.Model.validateArray(this.sensitiveConfigList);
    }
    if(Array.isArray(this.sensitiveTopicList)) {
      $dara.Model.validateArray(this.sensitiveTopicList);
    }
    if(this.sensitiveTopicModelInfo && typeof (this.sensitiveTopicModelInfo as any).validate === 'function') {
      (this.sensitiveTopicModelInfo as any).validate();
    }
    if(Array.isArray(this.sensitiveWordList)) {
      $dara.Model.validateArray(this.sensitiveWordList);
    }
    if(Array.isArray(this.topicConfigInfoList)) {
      $dara.Model.validateArray(this.topicConfigInfoList);
    }
    if(Array.isArray(this.wordGroupInfoList)) {
      $dara.Model.validateArray(this.wordGroupInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

