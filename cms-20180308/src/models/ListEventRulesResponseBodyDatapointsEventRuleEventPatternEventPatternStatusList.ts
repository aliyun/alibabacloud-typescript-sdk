// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventRulesResponseBodyDatapointsEventRuleEventPatternEventPatternStatusList extends $dara.Model {
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

