// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAutomaticFrequencyControlConfigResponseBody extends $dara.Model {
  actionType?: string;
  enable?: string;
  interval?: number;
  level?: string;
  punishTime?: number;
  requestId?: string;
  ruleId?: number;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      enable: 'Enable',
      interval: 'Interval',
      level: 'Level',
      punishTime: 'PunishTime',
      requestId: 'RequestId',
      ruleId: 'RuleId',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      enable: 'string',
      interval: 'number',
      level: 'string',
      punishTime: 'number',
      requestId: 'string',
      ruleId: 'number',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

