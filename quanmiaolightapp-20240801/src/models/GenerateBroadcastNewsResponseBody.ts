// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GenerateBroadcastNewsResponseBodyDataHotTopicSummariesImages extends $dara.Model {
  /**
   * @example
   * http://xxx.com/xxx.jpeg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateBroadcastNewsResponseBodyDataHotTopicSummaries extends $dara.Model {
  category?: string;
  hotTopic?: string;
  /**
   * @example
   * 2024-09-13_08
   */
  hotTopicVersion?: string;
  /**
   * @example
   * 1000000
   */
  hotValue?: number;
  /**
   * @example
   * 1458tb3bjo7531kap42a
   */
  id?: string;
  images?: GenerateBroadcastNewsResponseBodyDataHotTopicSummariesImages[];
  /**
   * @example
   * xxx
   */
  textSummary?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      hotTopic: 'hotTopic',
      hotTopicVersion: 'hotTopicVersion',
      hotValue: 'hotValue',
      id: 'id',
      images: 'images',
      textSummary: 'textSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      hotTopic: 'string',
      hotTopicVersion: 'string',
      hotValue: 'number',
      id: 'string',
      images: { 'type': 'array', 'itemType': GenerateBroadcastNewsResponseBodyDataHotTopicSummariesImages },
      textSummary: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateBroadcastNewsResponseBodyDataUsage extends $dara.Model {
  /**
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @example
   * 2
   */
  outputTokens?: number;
  /**
   * @example
   * 3
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateBroadcastNewsResponseBodyData extends $dara.Model {
  hotTopicSummaries?: GenerateBroadcastNewsResponseBodyDataHotTopicSummaries[];
  /**
   * @example
   * 2bb0ea82dafd48a8817fadc4c90e2b52
   */
  sessionId?: string;
  /**
   * @example
   * 3feb69ed02d9b1a17d0f1a942675d300
   */
  taskId?: string;
  text?: string;
  usage?: GenerateBroadcastNewsResponseBodyDataUsage;
  static names(): { [key: string]: string } {
    return {
      hotTopicSummaries: 'hotTopicSummaries',
      sessionId: 'sessionId',
      taskId: 'taskId',
      text: 'text',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotTopicSummaries: { 'type': 'array', 'itemType': GenerateBroadcastNewsResponseBodyDataHotTopicSummaries },
      sessionId: 'string',
      taskId: 'string',
      text: 'string',
      usage: GenerateBroadcastNewsResponseBodyDataUsage,
    };
  }

  validate() {
    if(Array.isArray(this.hotTopicSummaries)) {
      $dara.Model.validateArray(this.hotTopicSummaries);
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

export class GenerateBroadcastNewsResponseBody extends $dara.Model {
  /**
   * @example
   * xx
   */
  code?: string;
  data?: GenerateBroadcastNewsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 117F5ABE-CF02-5502-9A3F-E56BC9081A64
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GenerateBroadcastNewsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

