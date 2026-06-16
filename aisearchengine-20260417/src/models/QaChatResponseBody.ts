// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QaChatResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Structured response data
   * 
   * @example
   * {
   *  "items": [
   *  {
   *  "title": "电脑产品评测",
   *  "videoUrl": "https://video.example.com/review.mp4",
   *  "coverUrl": "https://images.example",
   *  "tags": [
   *  "数码产品",
   *  "评测",
   *  "电脑",
   *  "生产力"
   *  ]
   *  }
   *  ]
   * }
   */
  data?: string;
  /**
   * @remarks
   * Incremental text output
   * 
   * @example
   * 如果你想更快看到上身效果，这 3 条短视频会更直观。\\n\\n**第一条：完整通勤 look**\\n\\n3 套通勤到周末无缝切换的浅色运动鞋穿搭。
   */
  delta?: string;
  /**
   * @remarks
   * See error code list
   * 
   * @example
   * 400
   */
  errorCode?: string;
  /**
   * @remarks
   * See error code list
   * 
   * @example
   * 参数错误
   */
  errorText?: string;
  /**
   * @remarks
   * Completion reason. When the value is stop, it indicates output is complete; on error, the output is the error reason.
   * 
   * @example
   * stop
   */
  finishReason?: string;
  /**
   * @remarks
   * Unique identifier. For multi-segment text, different segments use different ids, while the id remains consistent within a text segment
   * 
   * @example
   * 2a127bc9-9474-405d-916d-8bc4475fa459
   */
  id?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 2a127bc9-9474-405d-916d-8bc4475fa459
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the error is retryable, defaults to true
   * 
   * @example
   * true
   */
  retryable?: boolean;
  /**
   * @remarks
   * Same as event
   * 
   * @example
   * v
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      delta: 'delta',
      errorCode: 'errorCode',
      errorText: 'errorText',
      finishReason: 'finishReason',
      id: 'id',
      requestId: 'requestId',
      retryable: 'retryable',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      delta: 'string',
      errorCode: 'string',
      errorText: 'string',
      finishReason: 'string',
      id: 'string',
      requestId: 'string',
      retryable: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QaChatResponseBody extends $dara.Model {
  /**
   * @remarks
   * Protocol data
   */
  data?: QaChatResponseBodyData;
  /**
   * @remarks
   * Event type description:
   * 
   * 1. Lifecycle
   *    - start / finish
   *    - Marks the beginning and end of a message
   * 
   * 2. Text content
   *    - text-start / text-delta / text-end
   *    - Markdown text streaming output
   * 
   * 3. Inline media
   *    - data-image-info / data-video-info
   *    - Media cards in text-image/text-video mixed content
   * 
   * 4. Source references
   *    - data-reference
   *    - Unified source list (web / document / image / video)
   * 
   * 5. Inline references
   *    - data-document-ref
   *    - Perplexity-style inline document references
   * 
   * 6. Template video
   *    - data-template-video
   *    - Video cards output by AV template agent
   * 
   * 7. Template analysis
   *    - data-video-info / data-template-info / data-template-video-content
   *    - Analysis result data from AV template agent
   *    - Table-type templates such as "Speech Transcription", "Video Outline", and "Video-to-Script" are delivered at once via data-template-video-content
   * 
   * 8. Streaming JSON
   *    - json-start / json-delta / json-end
   *    - Incremental delta-only JSON streaming protocol
   *    - Used for structured JSON template analysis output such as "Action Expression"
   * 
   * @example
   * start
   */
  event?: string;
  /**
   * @remarks
   * Request ID, same as requestId
   * 
   * @example
   * 2a127bc9-9474-405d-916d-8bc4475fa459
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      event: 'event',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QaChatResponseBodyData,
      event: 'string',
      id: 'string',
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

