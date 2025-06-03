// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMessageRequestMessagesContentDingNormalCardCardData extends $dara.Model {
  /**
   * @example
   * {}
   */
  cardParamMap?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      cardParamMap: 'cardParamMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardParamMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.cardParamMap) {
      $dara.Model.validateMap(this.cardParamMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

