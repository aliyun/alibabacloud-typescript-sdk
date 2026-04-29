// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HandleObjectScanEventRequestRuleConditionList extends $dara.Model {
  key?: string;
  operate?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operate: 'Operate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operate: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleObjectScanEventRequest extends $dara.Model {
  batchType?: string;
  eventId?: string;
  eventIdList?: number[];
  lang?: string;
  remark?: string;
  ruleConditionList?: HandleObjectScanEventRequestRuleConditionList[];
  status?: number;
  static names(): { [key: string]: string } {
    return {
      batchType: 'BatchType',
      eventId: 'EventId',
      eventIdList: 'EventIdList',
      lang: 'Lang',
      remark: 'Remark',
      ruleConditionList: 'RuleConditionList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchType: 'string',
      eventId: 'string',
      eventIdList: { 'type': 'array', 'itemType': 'number' },
      lang: 'string',
      remark: 'string',
      ruleConditionList: { 'type': 'array', 'itemType': HandleObjectScanEventRequestRuleConditionList },
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventIdList)) {
      $dara.Model.validateArray(this.eventIdList);
    }
    if(Array.isArray(this.ruleConditionList)) {
      $dara.Model.validateArray(this.ruleConditionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

