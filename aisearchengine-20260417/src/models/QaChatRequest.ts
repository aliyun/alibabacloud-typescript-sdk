// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QaChatRequestMessageParts extends $dara.Model {
  /**
   * @remarks
   * Required when type = "data". The data object structure is as follows:
   * 
   * - type: String type, required, indicates the data subtype. Currently supported value is "template", indicating a video template.
   * - videoId: String type, conditionally required. Only required when type = "template", indicating the video template ID; can be ignored or set to null for other types.
   * 
   * @example
   * {
   *   "type": "template",
   *   "videoId": "xxxx"
   * }
   */
  data?: any;
  /**
   * @remarks
   * Required when `type="file"`.
   * 
   * * Media type, currently only supports image formats JPG/PNG/WEBP/JPEG, maximum 5
   * 
   * @example
   * image/png
   */
  mediaType?: string;
  /**
   * @remarks
   * Required when `type="text"`.
   * 
   * * Text content, maximum 1024 characters
   * 
   * @example
   * 请问这个视频讲了什么？
   */
  text?: string;
  /**
   * @remarks
   * Fixed content block type, only supports `"text"` / `"file"` / `"data"`
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * Required when `type="file"`. Supports the following two types, with format support for JPG/PNG/WEBP/JPEG:
   * 
   * • Media resource CDN URL, currently supports images, maximum 5;
   * • Image encoding, upload image files using base64 encoded strings (supports bitmap formats), maximum 5
   * 
   * @example
   * https://example.com/img.jpg
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
  /**
   * @remarks
   * Individual content block, differentiated by `type`
   */
  parts?: QaChatRequestMessageParts[];
  /**
   * @remarks
   * Message role, currently only supports the `"user"` role
   * 
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
   * Application ID
   * 
   * This parameter is required.
   * 
   * @example
   * 2052929167853146113
   */
  appId?: string;
  /**
   * @remarks
   * User message object containing role and multimodal content.
   * 
   * This parameter is required.
   */
  message?: QaChatRequestMessage;
  /**
   * @remarks
   * No input required
   * 
   * @example
   * {
   *   "debug": true
   * }
   */
  options?: { [key: string]: any };
  /**
   * @remarks
   * Q&A session ID, used to track multiple Q&A interactions from the same user.
   * 
   * @example
   * req_123456789
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

