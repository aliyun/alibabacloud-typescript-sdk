// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QaChatRequestMessageParts extends $dara.Model {
  /**
   * @example
   * {
   *   "templateId": "456789"
   * }
   */
  data?: any;
  /**
   * @example
   * image/png
   */
  mediaType?: string;
  /**
   * @example
   * 帮我搜索下今天的天气
   */
  text?: string;
  /**
   * @example
   * text
   */
  type?: string;
  /**
   * @example
   * https://meeting.dingtalk.com/j/4sSPAxWaPbM
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      mediaType: 'mediaType',
      text: 'text',
      type: 'type',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      mediaType: 'string',
      text: 'string',
      type: 'string',
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

export class QaChatRequestMessage extends $dara.Model {
  parts?: QaChatRequestMessageParts[];
  /**
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      parts: 'parts',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parts: { 'type': 'array', 'itemType': QaChatRequestMessageParts },
      role: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parts)) {
      $dara.Model.validateArray(this.parts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QaChatRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2047140750220754946
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  message?: QaChatRequestMessage;
  /**
   * @example
   * {
   *   "debug": true
   * }
   */
  options?: { [key: string]: any };
  /**
   * @example
   * b2a979e79799489fbde56119bf8c4dc7
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      message: 'message',
      options: 'options',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      message: QaChatRequestMessage,
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sessionId: 'string',
    };
  }

  validate() {
    if(this.message && typeof (this.message as any).validate === 'function') {
      (this.message as any).validate();
    }
    if(this.options) {
      $dara.Model.validateMap(this.options);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

