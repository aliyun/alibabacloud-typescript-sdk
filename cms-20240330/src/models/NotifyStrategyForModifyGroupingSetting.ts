// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NotifyStrategyForModifyGroupingSetting extends $dara.Model {
  groupingKeys?: string[];
  periodMin?: number;
  silenceSec?: number;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      groupingKeys: 'groupingKeys',
      periodMin: 'periodMin',
      silenceSec: 'silenceSec',
      times: 'times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupingKeys: { 'type': 'array', 'itemType': 'string' },
      periodMin: 'number',
      silenceSec: 'number',
      times: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groupingKeys)) {
      $dara.Model.validateArray(this.groupingKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

