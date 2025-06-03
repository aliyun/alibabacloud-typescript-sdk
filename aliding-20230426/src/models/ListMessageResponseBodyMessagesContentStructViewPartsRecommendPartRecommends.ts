// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessageResponseBodyMessagesContentStructViewPartsRecommendPartRecommends extends $dara.Model {
  mobileUrl?: string;
  text?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      mobileUrl: 'mobileUrl',
      text: 'text',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobileUrl: 'string',
      text: 'string',
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

