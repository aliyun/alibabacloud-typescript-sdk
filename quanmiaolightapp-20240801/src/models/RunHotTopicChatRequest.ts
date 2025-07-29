// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunHotTopicChatRequestMessages extends $dara.Model {
  /**
   * @example
   * xxx
   */
  content?: string;
  /**
   * @example
   * 2024-12-10 18:51:29
   */
  createTime?: string;
  /**
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      createTime: 'createTime',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicChatRequestStepForBroadcastContentConfigCustomHotValueWeights extends $dara.Model {
  /**
   * @example
   * comments
   */
  dimension?: string;
  /**
   * @example
   * 1
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      dimension: 'dimension',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicChatRequestStepForBroadcastContentConfig extends $dara.Model {
  categories?: string[];
  customHotValueWeights?: RunHotTopicChatRequestStepForBroadcastContentConfigCustomHotValueWeights[];
  /**
   * @example
   * 20
   */
  topicCount?: number;
  static names(): { [key: string]: string } {
    return {
      categories: 'categories',
      customHotValueWeights: 'customHotValueWeights',
      topicCount: 'topicCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      customHotValueWeights: { 'type': 'array', 'itemType': RunHotTopicChatRequestStepForBroadcastContentConfigCustomHotValueWeights },
      topicCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    if(Array.isArray(this.customHotValueWeights)) {
      $dara.Model.validateArray(this.customHotValueWeights);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

