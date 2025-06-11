// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsResponseBodyDataAlarmStats extends $dara.Model {
  /**
   * @example
   * null
   */
  alarmContent?: string;
  /**
   * @example
   * false
   */
  alarming?: boolean;
  /**
   * @example
   * true
   */
  openMonitor?: boolean;
  /**
   * @example
   * 0
   */
  recentlyTriggerCount?: number;
  ruleToRecentlyTriggerCount?: { [key: string]: number };
  /**
   * @example
   * null
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      alarmContent: 'AlarmContent',
      alarming: 'Alarming',
      openMonitor: 'OpenMonitor',
      recentlyTriggerCount: 'RecentlyTriggerCount',
      ruleToRecentlyTriggerCount: 'RuleToRecentlyTriggerCount',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmContent: 'string',
      alarming: 'boolean',
      openMonitor: 'boolean',
      recentlyTriggerCount: 'number',
      ruleToRecentlyTriggerCount: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      target: 'string',
    };
  }

  validate() {
    if(this.ruleToRecentlyTriggerCount) {
      $dara.Model.validateMap(this.ruleToRecentlyTriggerCount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

