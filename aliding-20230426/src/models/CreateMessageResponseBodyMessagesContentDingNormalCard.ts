// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMessageResponseBodyMessagesContentDingNormalCardCardData } from "./CreateMessageResponseBodyMessagesContentDingNormalCardCardData";
import { CreateMessageResponseBodyMessagesContentDingNormalCardCardUpdateOptions } from "./CreateMessageResponseBodyMessagesContentDingNormalCardCardUpdateOptions";
import { CreateMessageResponseBodyMessagesContentDingNormalCardDynamicDataSourceConfigs } from "./CreateMessageResponseBodyMessagesContentDingNormalCardDynamicDataSourceConfigs";


export class CreateMessageResponseBodyMessagesContentDingNormalCard extends $dara.Model {
  /**
   * @example
   * {}
   */
  cardData?: CreateMessageResponseBodyMessagesContentDingNormalCardCardData;
  /**
   * @example
   * templateId1
   */
  cardTemplateId?: string;
  /**
   * @example
   * {}
   */
  cardUpdateOptions?: CreateMessageResponseBodyMessagesContentDingNormalCardCardUpdateOptions;
  /**
   * @example
   * {}
   */
  dynamicDataSourceConfigs?: CreateMessageResponseBodyMessagesContentDingNormalCardDynamicDataSourceConfigs[];
  /**
   * @example
   * {}
   */
  privateData?: { [key: string]: {[key: string]: any} };
  static names(): { [key: string]: string } {
    return {
      cardData: 'cardData',
      cardTemplateId: 'cardTemplateId',
      cardUpdateOptions: 'cardUpdateOptions',
      dynamicDataSourceConfigs: 'dynamicDataSourceConfigs',
      privateData: 'privateData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardData: CreateMessageResponseBodyMessagesContentDingNormalCardCardData,
      cardTemplateId: 'string',
      cardUpdateOptions: CreateMessageResponseBodyMessagesContentDingNormalCardCardUpdateOptions,
      dynamicDataSourceConfigs: { 'type': 'array', 'itemType': CreateMessageResponseBodyMessagesContentDingNormalCardDynamicDataSourceConfigs },
      privateData: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
    };
  }

  validate() {
    if(this.cardData && typeof (this.cardData as any).validate === 'function') {
      (this.cardData as any).validate();
    }
    if(this.cardUpdateOptions && typeof (this.cardUpdateOptions as any).validate === 'function') {
      (this.cardUpdateOptions as any).validate();
    }
    if(Array.isArray(this.dynamicDataSourceConfigs)) {
      $dara.Model.validateArray(this.dynamicDataSourceConfigs);
    }
    if(this.privateData) {
      $dara.Model.validateMap(this.privateData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

