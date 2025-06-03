// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAssistantCapabilityRequestMessagesContentDingNormalCardCardData } from "./GetAssistantCapabilityRequestMessagesContentDingNormalCardCardData";
import { GetAssistantCapabilityRequestMessagesContentDingNormalCardCardUpdateOptions } from "./GetAssistantCapabilityRequestMessagesContentDingNormalCardCardUpdateOptions";
import { GetAssistantCapabilityRequestMessagesContentDingNormalCardDynamicDataSourceConfigs } from "./GetAssistantCapabilityRequestMessagesContentDingNormalCardDynamicDataSourceConfigs";


export class GetAssistantCapabilityRequestMessagesContentDingNormalCard extends $dara.Model {
  /**
   * @example
   * {}
   */
  cardData?: GetAssistantCapabilityRequestMessagesContentDingNormalCardCardData;
  /**
   * @example
   * templateId1
   */
  cardTemplateId?: string;
  /**
   * @example
   * {}
   */
  cardUpdateOptions?: GetAssistantCapabilityRequestMessagesContentDingNormalCardCardUpdateOptions;
  /**
   * @example
   * {}
   */
  dynamicDataSourceConfigs?: GetAssistantCapabilityRequestMessagesContentDingNormalCardDynamicDataSourceConfigs[];
  /**
   * @example
   * {}
   */
  privateData?: { [key: string]: any };
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
      cardData: GetAssistantCapabilityRequestMessagesContentDingNormalCardCardData,
      cardTemplateId: 'string',
      cardUpdateOptions: GetAssistantCapabilityRequestMessagesContentDingNormalCardCardUpdateOptions,
      dynamicDataSourceConfigs: { 'type': 'array', 'itemType': GetAssistantCapabilityRequestMessagesContentDingNormalCardDynamicDataSourceConfigs },
      privateData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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

