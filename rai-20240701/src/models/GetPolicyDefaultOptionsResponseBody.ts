// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolicyDefaultOptionsResponseBodyHarmfulCategoryInfoList extends $dara.Model {
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
   * Harmful category configuration switch
   * 0: Off
   * 1: On
   * 
   * @example
   * True
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

export class GetPolicyDefaultOptionsResponseBodyPromptAttackInfo extends $dara.Model {
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

export class GetPolicyDefaultOptionsResponseBodyPromptAttackInfoList extends $dara.Model {
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
   * 0
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

export class GetPolicyDefaultOptionsResponseBodySensitiveDataTypeList extends $dara.Model {
  actionType?: number;
  dataType?: string;
  example?: string;
  exampleProcessed?: string;
  isEnabled?: number;
  matchAndReplace?: string;
  sensitiveConfigId?: number;
  sensitiveName?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      dataType: 'DataType',
      example: 'Example',
      exampleProcessed: 'ExampleProcessed',
      isEnabled: 'IsEnabled',
      matchAndReplace: 'MatchAndReplace',
      sensitiveConfigId: 'SensitiveConfigId',
      sensitiveName: 'SensitiveName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'number',
      dataType: 'string',
      example: 'string',
      exampleProcessed: 'string',
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

export class GetPolicyDefaultOptionsResponseBodyTopicConfigInfoList extends $dara.Model {
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
   * 0
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

export class GetPolicyDefaultOptionsResponseBodyWordGroupInfoList extends $dara.Model {
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

export class GetPolicyDefaultOptionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code, 00000 indicates success; others indicate failure.
   * 
   * @example
   * 00000
   */
  code?: string;
  enableSensitiveInputCheck?: number;
  enableSensitiveOutputCheck?: number;
  /**
   * @remarks
   * List of harmful category objects
   */
  harmfulCategoryInfoList?: GetPolicyDefaultOptionsResponseBodyHarmfulCategoryInfoList[];
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
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * ""
   */
  message?: string;
  outputSafeAnswer?: string;
  outputSafeAnswerSwitch?: number;
  /**
   * @remarks
   * Prompt attack detection result object
   */
  promptAttackInfo?: GetPolicyDefaultOptionsResponseBodyPromptAttackInfo;
  /**
   * @remarks
   * Prompt attack list
   */
  promptAttackInfoList?: GetPolicyDefaultOptionsResponseBodyPromptAttackInfoList[];
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  sensitiveDataTypeList?: GetPolicyDefaultOptionsResponseBodySensitiveDataTypeList[];
  /**
   * @remarks
   * Indicates whether the operation was successful. `true` means success, `false` means failure.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * Sensitive topic list
   */
  topicConfigInfoList?: GetPolicyDefaultOptionsResponseBodyTopicConfigInfoList[];
  /**
   * @remarks
   * List of keyword group objects
   */
  wordGroupInfoList?: GetPolicyDefaultOptionsResponseBodyWordGroupInfoList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      enableSensitiveInputCheck: 'EnableSensitiveInputCheck',
      enableSensitiveOutputCheck: 'EnableSensitiveOutputCheck',
      harmfulCategoryInfoList: 'HarmfulCategoryInfoList',
      httpStatusCode: 'HttpStatusCode',
      inputSafeAnswer: 'InputSafeAnswer',
      inputSafeAnswerSwitch: 'InputSafeAnswerSwitch',
      message: 'Message',
      outputSafeAnswer: 'OutputSafeAnswer',
      outputSafeAnswerSwitch: 'OutputSafeAnswerSwitch',
      promptAttackInfo: 'PromptAttackInfo',
      promptAttackInfoList: 'PromptAttackInfoList',
      requestId: 'RequestId',
      sensitiveDataTypeList: 'SensitiveDataTypeList',
      success: 'Success',
      topicConfigInfoList: 'TopicConfigInfoList',
      wordGroupInfoList: 'WordGroupInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      enableSensitiveInputCheck: 'number',
      enableSensitiveOutputCheck: 'number',
      harmfulCategoryInfoList: { 'type': 'array', 'itemType': GetPolicyDefaultOptionsResponseBodyHarmfulCategoryInfoList },
      httpStatusCode: 'number',
      inputSafeAnswer: 'string',
      inputSafeAnswerSwitch: 'number',
      message: 'string',
      outputSafeAnswer: 'string',
      outputSafeAnswerSwitch: 'number',
      promptAttackInfo: GetPolicyDefaultOptionsResponseBodyPromptAttackInfo,
      promptAttackInfoList: { 'type': 'array', 'itemType': GetPolicyDefaultOptionsResponseBodyPromptAttackInfoList },
      requestId: 'string',
      sensitiveDataTypeList: { 'type': 'array', 'itemType': GetPolicyDefaultOptionsResponseBodySensitiveDataTypeList },
      success: 'boolean',
      topicConfigInfoList: { 'type': 'array', 'itemType': GetPolicyDefaultOptionsResponseBodyTopicConfigInfoList },
      wordGroupInfoList: { 'type': 'array', 'itemType': GetPolicyDefaultOptionsResponseBodyWordGroupInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.harmfulCategoryInfoList)) {
      $dara.Model.validateArray(this.harmfulCategoryInfoList);
    }
    if(this.promptAttackInfo && typeof (this.promptAttackInfo as any).validate === 'function') {
      (this.promptAttackInfo as any).validate();
    }
    if(Array.isArray(this.promptAttackInfoList)) {
      $dara.Model.validateArray(this.promptAttackInfoList);
    }
    if(Array.isArray(this.sensitiveDataTypeList)) {
      $dara.Model.validateArray(this.sensitiveDataTypeList);
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

