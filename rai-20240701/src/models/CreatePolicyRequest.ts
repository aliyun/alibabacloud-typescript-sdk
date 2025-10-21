// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyRequestHarmfulCategoryConfigInfoList extends $dara.Model {
  /**
   * @remarks
   * Harmful category ID
   * 
   * @example
   * 1
   */
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
   * Whether it is enabled
   * 0: Not enabled
   * 1: Enabled
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
   * 0
   */
  securityLevel?: number;
  static names(): { [key: string]: string } {
    return {
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

export class CreatePolicyRequestPromptAttackInfo extends $dara.Model {
  /**
   * @remarks
   * Prompt attack configuration switch
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

export class CreatePolicyRequestPromptAttackInfoList extends $dara.Model {
  /**
   * @remarks
   * Harmful category ID
   * 
   * @example
   * 1
   */
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
   * Prompt attack configuration switch
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
      categoryId: 'CategoryId',
      categoryLabel: 'CategoryLabel',
      isEnabled: 'IsEnabled',
      securityLevel: 'SecurityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreatePolicyRequestRegularExpressList extends $dara.Model {
  actionType?: number;
  regularExpress?: string;
  regularExpressName?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      regularExpress: 'RegularExpress',
      regularExpressName: 'RegularExpressName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'number',
      regularExpress: 'string',
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

export class CreatePolicyRequestSensitiveConfigList extends $dara.Model {
  actionType?: number;
  isEnabled?: number;
  sensitiveConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      isEnabled: 'IsEnabled',
      sensitiveConfigId: 'SensitiveConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'number',
      isEnabled: 'number',
      sensitiveConfigId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyRequestSensitiveTopicListTopicExampleInfoList extends $dara.Model {
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

export class CreatePolicyRequestSensitiveTopicList extends $dara.Model {
  categoryType?: number;
  securityLevel?: number;
  topicDefinition?: string;
  topicExampleInfoList?: CreatePolicyRequestSensitiveTopicListTopicExampleInfoList[];
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      categoryType: 'CategoryType',
      securityLevel: 'SecurityLevel',
      topicDefinition: 'TopicDefinition',
      topicExampleInfoList: 'TopicExampleInfoList',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryType: 'number',
      securityLevel: 'number',
      topicDefinition: 'string',
      topicExampleInfoList: { 'type': 'array', 'itemType': CreatePolicyRequestSensitiveTopicListTopicExampleInfoList },
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

export class CreatePolicyRequestSensitiveWordList extends $dara.Model {
  label?: string;
  word?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreatePolicyRequestTopicConfigInfoList extends $dara.Model {
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
   * 4
   */
  topicId?: number;
  /**
   * @remarks
   * Topic Name
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

export class CreatePolicyRequestWordGroupInfoList extends $dara.Model {
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

export class CreatePolicyRequest extends $dara.Model {
  contentSafeModelInstanceId?: number;
  enableSensitiveInputCheck?: number;
  enableSensitiveOutputCheck?: number;
  /**
   * @remarks
   * List of harmful category configurations
   */
  harmfulCategoryConfigInfoList?: CreatePolicyRequestHarmfulCategoryConfigInfoList[];
  inputSafeAnswer?: string;
  inputSafeAnswerSwitch?: number;
  isSidecarPolicy?: number;
  outputSafeAnswer?: string;
  outputSafeAnswerSwitch?: number;
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
  promptAttackInfo?: CreatePolicyRequestPromptAttackInfo;
  /**
   * @remarks
   * List of prompt attacks
   */
  promptAttackInfoList?: CreatePolicyRequestPromptAttackInfoList[];
  promptAttackModelInstanceId?: number;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  regularExpressList?: CreatePolicyRequestRegularExpressList[];
  sceneType?: number;
  sensitiveConfigList?: CreatePolicyRequestSensitiveConfigList[];
  sensitiveTopicList?: CreatePolicyRequestSensitiveTopicList[];
  sensitiveTopicModelInstanceId?: number;
  sensitiveWordList?: CreatePolicyRequestSensitiveWordList[];
  /**
   * @remarks
   * List of sensitive topics
   */
  topicConfigInfoList?: CreatePolicyRequestTopicConfigInfoList[];
  /**
   * @remarks
   * List of keyword group objects
   */
  wordGroupInfoList?: CreatePolicyRequestWordGroupInfoList[];
  /**
   * @remarks
   * Workspace ID
   * 
   * @example
   * 608226
   */
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      contentSafeModelInstanceId: 'ContentSafeModelInstanceId',
      enableSensitiveInputCheck: 'EnableSensitiveInputCheck',
      enableSensitiveOutputCheck: 'EnableSensitiveOutputCheck',
      harmfulCategoryConfigInfoList: 'HarmfulCategoryConfigInfoList',
      inputSafeAnswer: 'InputSafeAnswer',
      inputSafeAnswerSwitch: 'InputSafeAnswerSwitch',
      isSidecarPolicy: 'IsSidecarPolicy',
      outputSafeAnswer: 'OutputSafeAnswer',
      outputSafeAnswerSwitch: 'OutputSafeAnswerSwitch',
      policyName: 'PolicyName',
      promptAttackInfo: 'PromptAttackInfo',
      promptAttackInfoList: 'PromptAttackInfoList',
      promptAttackModelInstanceId: 'PromptAttackModelInstanceId',
      regionId: 'RegionId',
      regularExpressList: 'RegularExpressList',
      sceneType: 'SceneType',
      sensitiveConfigList: 'SensitiveConfigList',
      sensitiveTopicList: 'SensitiveTopicList',
      sensitiveTopicModelInstanceId: 'SensitiveTopicModelInstanceId',
      sensitiveWordList: 'SensitiveWordList',
      topicConfigInfoList: 'TopicConfigInfoList',
      wordGroupInfoList: 'WordGroupInfoList',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentSafeModelInstanceId: 'number',
      enableSensitiveInputCheck: 'number',
      enableSensitiveOutputCheck: 'number',
      harmfulCategoryConfigInfoList: { 'type': 'array', 'itemType': CreatePolicyRequestHarmfulCategoryConfigInfoList },
      inputSafeAnswer: 'string',
      inputSafeAnswerSwitch: 'number',
      isSidecarPolicy: 'number',
      outputSafeAnswer: 'string',
      outputSafeAnswerSwitch: 'number',
      policyName: 'string',
      promptAttackInfo: CreatePolicyRequestPromptAttackInfo,
      promptAttackInfoList: { 'type': 'array', 'itemType': CreatePolicyRequestPromptAttackInfoList },
      promptAttackModelInstanceId: 'number',
      regionId: 'string',
      regularExpressList: { 'type': 'array', 'itemType': CreatePolicyRequestRegularExpressList },
      sceneType: 'number',
      sensitiveConfigList: { 'type': 'array', 'itemType': CreatePolicyRequestSensitiveConfigList },
      sensitiveTopicList: { 'type': 'array', 'itemType': CreatePolicyRequestSensitiveTopicList },
      sensitiveTopicModelInstanceId: 'number',
      sensitiveWordList: { 'type': 'array', 'itemType': CreatePolicyRequestSensitiveWordList },
      topicConfigInfoList: { 'type': 'array', 'itemType': CreatePolicyRequestTopicConfigInfoList },
      wordGroupInfoList: { 'type': 'array', 'itemType': CreatePolicyRequestWordGroupInfoList },
      workspaceId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.harmfulCategoryConfigInfoList)) {
      $dara.Model.validateArray(this.harmfulCategoryConfigInfoList);
    }
    if(this.promptAttackInfo && typeof (this.promptAttackInfo as any).validate === 'function') {
      (this.promptAttackInfo as any).validate();
    }
    if(Array.isArray(this.promptAttackInfoList)) {
      $dara.Model.validateArray(this.promptAttackInfoList);
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

