// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolicyRequestHarmfulCategoryConfigInfoList extends $dara.Model {
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
   * 2
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

export class UpdatePolicyRequestPromptAttackInfo extends $dara.Model {
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
   * 2
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

export class UpdatePolicyRequestPromptAttackInfoList extends $dara.Model {
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

export class UpdatePolicyRequestRegularExpressList extends $dara.Model {
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

export class UpdatePolicyRequestSensitiveConfigList extends $dara.Model {
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

export class UpdatePolicyRequestSensitiveTopicListTopicExampleInfoList extends $dara.Model {
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

export class UpdatePolicyRequestSensitiveTopicList extends $dara.Model {
  categoryType?: number;
  securityLevel?: number;
  topicDefinition?: string;
  topicExampleInfoList?: UpdatePolicyRequestSensitiveTopicListTopicExampleInfoList[];
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
      topicExampleInfoList: { 'type': 'array', 'itemType': UpdatePolicyRequestSensitiveTopicListTopicExampleInfoList },
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

export class UpdatePolicyRequestSensitiveWordList extends $dara.Model {
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

export class UpdatePolicyRequestTopicConfigInfoList extends $dara.Model {
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

export class UpdatePolicyRequestWordGroupInfoList extends $dara.Model {
  /**
   * @remarks
   * Keyword group ID.
   * 
   * @example
   * 5fa285a60a9342e097cb7a3491ec00cc
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

export class UpdatePolicyRequest extends $dara.Model {
  contentSafeModelInstanceId?: number;
  enableSensitiveInputCheck?: number;
  enableSensitiveOutputCheck?: number;
  /**
   * @remarks
   * List of harmful category configurations
   */
  harmfulCategoryConfigInfoList?: UpdatePolicyRequestHarmfulCategoryConfigInfoList[];
  inputSafeAnswer?: string;
  inputSafeAnswerSwitch?: number;
  isSidecarPolicy?: number;
  outputSafeAnswer?: string;
  outputSafeAnswerSwitch?: number;
  /**
   * @remarks
   * Detection policy ID
   * 
   * @example
   * 16
   */
  policyId?: number;
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
  promptAttackInfo?: UpdatePolicyRequestPromptAttackInfo;
  /**
   * @remarks
   * List of prompt attacks
   */
  promptAttackInfoList?: UpdatePolicyRequestPromptAttackInfoList[];
  promptAttackModelInstanceId?: number;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  regularExpressList?: UpdatePolicyRequestRegularExpressList[];
  sceneType?: number;
  sensitiveConfigList?: UpdatePolicyRequestSensitiveConfigList[];
  sensitiveTopicList?: UpdatePolicyRequestSensitiveTopicList[];
  sensitiveTopicModelInstanceId?: number;
  sensitiveWordList?: UpdatePolicyRequestSensitiveWordList[];
  /**
   * @remarks
   * List of sensitive topics
   */
  topicConfigInfoList?: UpdatePolicyRequestTopicConfigInfoList[];
  /**
   * @remarks
   * List of keyword group objects
   */
  wordGroupInfoList?: UpdatePolicyRequestWordGroupInfoList[];
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
      policyId: 'PolicyId',
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
      harmfulCategoryConfigInfoList: { 'type': 'array', 'itemType': UpdatePolicyRequestHarmfulCategoryConfigInfoList },
      inputSafeAnswer: 'string',
      inputSafeAnswerSwitch: 'number',
      isSidecarPolicy: 'number',
      outputSafeAnswer: 'string',
      outputSafeAnswerSwitch: 'number',
      policyId: 'number',
      policyName: 'string',
      promptAttackInfo: UpdatePolicyRequestPromptAttackInfo,
      promptAttackInfoList: { 'type': 'array', 'itemType': UpdatePolicyRequestPromptAttackInfoList },
      promptAttackModelInstanceId: 'number',
      regionId: 'string',
      regularExpressList: { 'type': 'array', 'itemType': UpdatePolicyRequestRegularExpressList },
      sceneType: 'number',
      sensitiveConfigList: { 'type': 'array', 'itemType': UpdatePolicyRequestSensitiveConfigList },
      sensitiveTopicList: { 'type': 'array', 'itemType': UpdatePolicyRequestSensitiveTopicList },
      sensitiveTopicModelInstanceId: 'number',
      sensitiveWordList: { 'type': 'array', 'itemType': UpdatePolicyRequestSensitiveWordList },
      topicConfigInfoList: { 'type': 'array', 'itemType': UpdatePolicyRequestTopicConfigInfoList },
      wordGroupInfoList: { 'type': 'array', 'itemType': UpdatePolicyRequestWordGroupInfoList },
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

