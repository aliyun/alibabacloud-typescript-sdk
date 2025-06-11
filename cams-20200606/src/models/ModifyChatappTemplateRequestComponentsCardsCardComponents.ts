// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyChatappTemplateRequestComponentsCardsCardComponentsButtons } from "./ModifyChatappTemplateRequestComponentsCardsCardComponentsButtons";


export class ModifyChatappTemplateRequestComponentsCardsCardComponents extends $dara.Model {
  /**
   * @remarks
   * The buttons. Specify this parameter only if you set the Type sub-parameter of the CardComponents parameter to BUTTONS. A carousel card can contain up to two buttons.
   */
  buttons?: ModifyChatappTemplateRequestComponentsCardsCardComponentsButtons[];
  /**
   * @remarks
   * The type of the media resource. This parameter is valid if the Type sub-parameter of the CardComponents parameter is set to HEADER. Valid values:
   * 
   * *   **IMAGE**
   * *   **VIDEO**
   * 
   * @example
   * IMAGE
   */
  format?: string;
  /**
   * @remarks
   * The body content of the carousel card.
   * 
   * @example
   * Who is the very powerful team
   */
  text?: string;
  /**
   * @remarks
   * The component type. Valid values:
   * 
   * *   **BODY**
   * *   **HEADER**
   * *   **BUTTONS**
   * 
   * This parameter is required.
   * 
   * @example
   * BODY
   */
  type?: string;
  /**
   * @remarks
   * The URL of the media resource.
   * 
   * @example
   * https://alibaba.com/img.png
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
      buttons: { 'type': 'array', 'itemType': ModifyChatappTemplateRequestComponentsCardsCardComponentsButtons },
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

