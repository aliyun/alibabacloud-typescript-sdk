// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AISearchResourceAddRequest extends $dara.Model {
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
  data?: any;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * miniapp
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
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

