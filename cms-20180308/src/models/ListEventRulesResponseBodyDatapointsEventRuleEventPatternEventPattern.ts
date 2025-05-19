// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventRulesResponseBodyDatapointsEventRuleEventPatternEventPatternEventTypeList } from "./ListEventRulesResponseBodyDatapointsEventRuleEventPatternEventPatternEventTypeList";
import { ListEventRulesResponseBodyDatapointsEventRuleEventPatternEventPatternLevelList } from "./ListEventRulesResponseBodyDatapointsEventRuleEventPatternEventPatternLevelList";
import { ListEventRulesResponseBodyDatapointsEventRuleEventPatternEventPatternNameList } from "./ListEventRulesResponseBodyDatapointsEventRuleEventPatternEventPatternNameList";
import { ListEventRulesResponseBodyDatapointsEventRuleEventPatternEventPatternStatusList } from "./ListEventRulesResponseBodyDatapointsEventRuleEventPatternEventPatternStatusList";


export class ListEventRulesResponseBodyDatapointsEventRuleEventPatternEventPattern extends $dara.Model {
  eventTypeList?: ListEventRulesResponseBodyDatapointsEventRuleEventPatternEventPatternEventTypeList;
  levelList?: ListEventRulesResponseBodyDatapointsEventRuleEventPatternEventPatternLevelList;
  nameList?: ListEventRulesResponseBodyDatapointsEventRuleEventPatternEventPatternNameList;
  product?: string;
  statusList?: ListEventRulesResponseBodyDatapointsEventRuleEventPatternEventPatternStatusList;
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
      eventTypeList: ListEventRulesResponseBodyDatapointsEventRuleEventPatternEventPatternEventTypeList,
      levelList: ListEventRulesResponseBodyDatapointsEventRuleEventPatternEventPatternLevelList,
      nameList: ListEventRulesResponseBodyDatapointsEventRuleEventPatternEventPatternNameList,
      product: 'string',
      statusList: ListEventRulesResponseBodyDatapointsEventRuleEventPatternEventPatternStatusList,
    };
  }

  validate() {
    if(this.eventTypeList && typeof (this.eventTypeList as any).validate === 'function') {
      (this.eventTypeList as any).validate();
    }
    if(this.levelList && typeof (this.levelList as any).validate === 'function') {
      (this.levelList as any).validate();
    }
    if(this.nameList && typeof (this.nameList as any).validate === 'function') {
      (this.nameList as any).validate();
    }
    if(this.statusList && typeof (this.statusList as any).validate === 'function') {
      (this.statusList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

