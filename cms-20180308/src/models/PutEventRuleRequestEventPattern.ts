// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutEventRuleRequestEventPattern extends $dara.Model {
  eventTypeList?: string[];
  levelList?: string[];
  nameList?: string[];
  product?: string;
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      eventTypeList: 'EventTypeList',
      levelList: 'LevelList',
      nameList: 'NameList',
      product: 'Product',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTypeList: { 'type': 'array', 'itemType': 'string' },
      levelList: { 'type': 'array', 'itemType': 'string' },
      nameList: { 'type': 'array', 'itemType': 'string' },
      product: 'string',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.eventTypeList)) {
      $dara.Model.validateArray(this.eventTypeList);
    }
    if(Array.isArray(this.levelList)) {
      $dara.Model.validateArray(this.levelList);
    }
    if(Array.isArray(this.nameList)) {
      $dara.Model.validateArray(this.nameList);
    }
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

