// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunHotTopicChatRequestMessages } from "./RunHotTopicChatRequestMessages";
import { RunHotTopicChatRequestStepForBroadcastContentConfig } from "./RunHotTopicChatRequestStepForBroadcastContentConfig";


export class RunHotTopicChatRequest extends $dara.Model {
  category?: string;
  generateOptions?: string[];
  /**
   * @example
   * 2024-09-13_12
   */
  hotTopicVersion?: string;
  hotTopics?: string[];
  /**
   * @example
   * 1
   */
  imageCount?: number;
  messages?: RunHotTopicChatRequestMessages[];
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
  stepForBroadcastContentConfig?: RunHotTopicChatRequestStepForBroadcastContentConfig;
  /**
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5a2
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      generateOptions: 'generateOptions',
      hotTopicVersion: 'hotTopicVersion',
      hotTopics: 'hotTopics',
      imageCount: 'imageCount',
      messages: 'messages',
      modelCustomPromptTemplate: 'modelCustomPromptTemplate',
      modelId: 'modelId',
      originalSessionId: 'originalSessionId',
      prompt: 'prompt',
      stepForBroadcastContentConfig: 'stepForBroadcastContentConfig',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      generateOptions: { 'type': 'array', 'itemType': 'string' },
      hotTopicVersion: 'string',
      hotTopics: { 'type': 'array', 'itemType': 'string' },
      imageCount: 'number',
      messages: { 'type': 'array', 'itemType': RunHotTopicChatRequestMessages },
      modelCustomPromptTemplate: 'string',
      modelId: 'string',
      originalSessionId: 'string',
      prompt: 'string',
      stepForBroadcastContentConfig: RunHotTopicChatRequestStepForBroadcastContentConfig,
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.generateOptions)) {
      $dara.Model.validateArray(this.generateOptions);
    }
    if(Array.isArray(this.hotTopics)) {
      $dara.Model.validateArray(this.hotTopics);
    }
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(this.stepForBroadcastContentConfig && typeof (this.stepForBroadcastContentConfig as any).validate === 'function') {
      (this.stepForBroadcastContentConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

