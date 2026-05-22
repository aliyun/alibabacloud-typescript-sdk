// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QaChatResponseBodyData extends $dara.Model {
  /**
   * @example
   * {
   *   "items": [
   *     {
   *       "title": "MacBook Neo 深度测评：全面超越，最轻盈的生产力",
   *       "videoUrl": "https://video.example.com/macbook-neo-review.mp4",
   *       "coverUrl": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
   *       "tags": [
   *         "数码产品",
   *         "评测",
   *         "MacBook",
   *         "生产力"
   *       ]
   *     }
   *   ]
   * }
   */
  data?: string;
  /**
   * @example
   * 如果你想更快看到上身效果，这 3 条短视频会更直观。\\n\\n**第一条：完整通勤 look**\\n\\n3 套通勤到周末无缝切换的浅色运动鞋穿搭。
   */
  delta?: string;
  /**
   * @example
   * 400
   */
  errorCode?: string;
  /**
   * @example
   * 参数错误
   */
  errorText?: string;
  /**
   * @example
   * stop
   */
  finishReason?: string;
  /**
   * @example
   * 2a127bc9-9474-405d-916d-8bc4475fa459
   */
  id?: string;
  /**
   * @example
   * 2a127bc9-9474-405d-916d-8bc4475fa459
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  retryable?: boolean;
  /**
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
  data?: QaChatResponseBodyData;
  /**
   * @example
   * start
   */
  event?: string;
  /**
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

