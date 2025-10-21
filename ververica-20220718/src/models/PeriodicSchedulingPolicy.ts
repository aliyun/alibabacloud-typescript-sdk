// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BriefResourceSetting } from "./BriefResourceSetting";


export class PeriodicSchedulingPolicy extends $dara.Model {
  isFinished?: boolean;
  /**
   * @example
   * 1723195800000
   */
  onlyOnceTriggerTime?: number;
  /**
   * @example
   * true
   */
  onlyOnceTriggerTimeIsExpired?: boolean;
  /**
   * @example
   * DAY
   */
  periodicSchedulingLevel?: string;
  periodicSchedulingValues?: number[];
  /**
   * @example
   * 1723199340000
   */
  periodicTriggerTime?: number;
  resourceSetting?: BriefResourceSetting;
  static names(): { [key: string]: string } {
    return {
      isFinished: 'isFinished',
      onlyOnceTriggerTime: 'onlyOnceTriggerTime',
      onlyOnceTriggerTimeIsExpired: 'onlyOnceTriggerTimeIsExpired',
      periodicSchedulingLevel: 'periodicSchedulingLevel',
      periodicSchedulingValues: 'periodicSchedulingValues',
      periodicTriggerTime: 'periodicTriggerTime',
      resourceSetting: 'resourceSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isFinished: 'boolean',
      onlyOnceTriggerTime: 'number',
      onlyOnceTriggerTimeIsExpired: 'boolean',
      periodicSchedulingLevel: 'string',
      periodicSchedulingValues: { 'type': 'array', 'itemType': 'number' },
      periodicTriggerTime: 'number',
      resourceSetting: BriefResourceSetting,
    };
  }

  validate() {
    if(Array.isArray(this.periodicSchedulingValues)) {
      $dara.Model.validateArray(this.periodicSchedulingValues);
    }
    if(this.resourceSetting && typeof (this.resourceSetting as any).validate === 'function') {
      (this.resourceSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

