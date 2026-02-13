// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AISearchMessageItem extends $dara.Model {
  /**
   * @example
   * "user：How to test my network speed?\\naisearch：To check your network speed, you can use..."
   */
  content?: string;
  /**
   * @example
   * {
   *  "miniapp_id": "test_miniapp",
   *       "title": "testApp",
   *       "version": "1.0.5",
   *       "description": "description-mock",
   *       "slogan": "slogan-mock",
   *       "icon": "https://img.alicdn.com/test_icon.png",
   *       "detail_desc": "detail-mock"
   * }
   */
  params?: any;
  /**
   * @example
   * miniapp
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      params: 'params',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      params: 'any',
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

