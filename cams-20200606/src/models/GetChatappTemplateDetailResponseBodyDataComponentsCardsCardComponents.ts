// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetChatappTemplateDetailResponseBodyDataComponentsCardsCardComponentsButtons } from "./GetChatappTemplateDetailResponseBodyDataComponentsCardsCardComponentsButtons";


export class GetChatappTemplateDetailResponseBodyDataComponentsCardsCardComponents extends $dara.Model {
  /**
   * @remarks
   * The buttons of the carousel card.
   */
  buttons?: GetChatappTemplateDetailResponseBodyDataComponentsCardsCardComponentsButtons[];
  /**
   * @remarks
   * The type of the header in the carousel template. The header can only be an image or a video. The headers of all carousel cards must be the same. The type of the media resources that are included in the message. Valid values: IMGAGE and VIDEO.
   * 
   * @example
   * HEADER
   */
  format?: string;
  /**
   * @remarks
   * The text of the carousel card.
   * 
   * @example
   * Body
   */
  text?: string;
  /**
   * @remarks
   * The component type.
   * 
   * @example
   * HEADER
   */
  type?: string;
  /**
   * @remarks
   * The URL.
   * 
   * @example
   * https://aliyun.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      buttons: 'Buttons',
      format: 'Format',
      text: 'Text',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buttons: { 'type': 'array', 'itemType': GetChatappTemplateDetailResponseBodyDataComponentsCardsCardComponentsButtons },
      format: 'string',
      text: 'string',
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.buttons)) {
      $dara.Model.validateArray(this.buttons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

