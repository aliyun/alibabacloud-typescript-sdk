// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeAssistantRequestHistoryContentImageUrl extends $dara.Model {
  /**
   * @example
   * auto
   */
  detail?: string;
  imageDesc?: string;
  /**
   * @example
   * https://img.alicdn.com/1234.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
      imageDesc: 'imageDesc',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      imageDesc: 'string',
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

