// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyShrinkRequest extends $dara.Model {
  contentSafeModelInstanceId?: number;
  enableSensitiveInputCheck?: number;
  enableSensitiveOutputCheck?: number;
  /**
   * @remarks
   * List of harmful category configurations
   */
  harmfulCategoryConfigInfoListShrink?: string;
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
  promptAttackInfoShrink?: string;
  /**
   * @remarks
   * List of prompt attacks
   */
  promptAttackInfoListShrink?: string;
  promptAttackModelInstanceId?: number;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  regularExpressListShrink?: string;
  sceneType?: number;
  sensitiveConfigListShrink?: string;
  sensitiveTopicListShrink?: string;
  sensitiveTopicModelInstanceId?: number;
  sensitiveWordListShrink?: string;
  /**
   * @remarks
   * List of sensitive topics
   */
  topicConfigInfoListShrink?: string;
  /**
   * @remarks
   * List of keyword group objects
   */
  wordGroupInfoListShrink?: string;
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
      harmfulCategoryConfigInfoListShrink: 'HarmfulCategoryConfigInfoList',
      inputSafeAnswer: 'InputSafeAnswer',
      inputSafeAnswerSwitch: 'InputSafeAnswerSwitch',
      isSidecarPolicy: 'IsSidecarPolicy',
      outputSafeAnswer: 'OutputSafeAnswer',
      outputSafeAnswerSwitch: 'OutputSafeAnswerSwitch',
      policyName: 'PolicyName',
      promptAttackInfoShrink: 'PromptAttackInfo',
      promptAttackInfoListShrink: 'PromptAttackInfoList',
      promptAttackModelInstanceId: 'PromptAttackModelInstanceId',
      regionId: 'RegionId',
      regularExpressListShrink: 'RegularExpressList',
      sceneType: 'SceneType',
      sensitiveConfigListShrink: 'SensitiveConfigList',
      sensitiveTopicListShrink: 'SensitiveTopicList',
      sensitiveTopicModelInstanceId: 'SensitiveTopicModelInstanceId',
      sensitiveWordListShrink: 'SensitiveWordList',
      topicConfigInfoListShrink: 'TopicConfigInfoList',
      wordGroupInfoListShrink: 'WordGroupInfoList',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentSafeModelInstanceId: 'number',
      enableSensitiveInputCheck: 'number',
      enableSensitiveOutputCheck: 'number',
      harmfulCategoryConfigInfoListShrink: 'string',
      inputSafeAnswer: 'string',
      inputSafeAnswerSwitch: 'number',
      isSidecarPolicy: 'number',
      outputSafeAnswer: 'string',
      outputSafeAnswerSwitch: 'number',
      policyName: 'string',
      promptAttackInfoShrink: 'string',
      promptAttackInfoListShrink: 'string',
      promptAttackModelInstanceId: 'number',
      regionId: 'string',
      regularExpressListShrink: 'string',
      sceneType: 'number',
      sensitiveConfigListShrink: 'string',
      sensitiveTopicListShrink: 'string',
      sensitiveTopicModelInstanceId: 'number',
      sensitiveWordListShrink: 'string',
      topicConfigInfoListShrink: 'string',
      wordGroupInfoListShrink: 'string',
      workspaceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

