// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunHotTopicChatShrinkRequest extends $dara.Model {
  category?: string;
  generateOptionsShrink?: string;
  /**
   * @example
   * 2024-09-13_12
   */
  hotTopicVersion?: string;
  hotTopicsShrink?: string;
  /**
   * @example
   * 1
   */
  imageCount?: number;
  messagesShrink?: string;
  /**
   * @example
   * xx
   */
  modelCustomPromptTemplate?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5ax
   */
  originalSessionId?: string;
  prompt?: string;
  stepForBroadcastContentConfigShrink?: string;
  /**
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5a2
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      generateOptionsShrink: 'generateOptions',
      hotTopicVersion: 'hotTopicVersion',
      hotTopicsShrink: 'hotTopics',
      imageCount: 'imageCount',
      messagesShrink: 'messages',
      modelCustomPromptTemplate: 'modelCustomPromptTemplate',
      modelId: 'modelId',
      originalSessionId: 'originalSessionId',
      prompt: 'prompt',
      stepForBroadcastContentConfigShrink: 'stepForBroadcastContentConfig',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      generateOptionsShrink: 'string',
      hotTopicVersion: 'string',
      hotTopicsShrink: 'string',
      imageCount: 'number',
      messagesShrink: 'string',
      modelCustomPromptTemplate: 'string',
      modelId: 'string',
      originalSessionId: 'string',
      prompt: 'string',
      stepForBroadcastContentConfigShrink: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

