// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EffectTimeRange } from "./EffectTimeRange";
import { NotifyChannel } from "./NotifyChannel";


export class IncidentEscalationStageForView extends $dara.Model {
  /**
   * @remarks
   * The number of loop notifications.
   * 
   * @example
   * 3
   */
  cycleNotifyCount?: number;
  /**
   * @remarks
   * The loop notification interval.
   * 
   * @example
   * 5
   */
  cycleNotifyInterval?: number;
  /**
   * @remarks
   * The effective time range.
   */
  effectTimeRange?: EffectTimeRange;
  /**
   * @remarks
   * The stage index.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The list of notification channels.
   */
  notifyChannels?: NotifyChannel[];
  /**
   * @remarks
   * The target event state.
   * 
   * @example
   * "Open"
   */
  targetIncidentState?: string;
  /**
   * @remarks
   * The trigger delay time.
   * 
   * @example
   * 30
   */
  triggerDelay?: number;
  static names(): { [key: string]: string } {
    return {
      cycleNotifyCount: 'cycleNotifyCount',
      cycleNotifyInterval: 'cycleNotifyInterval',
      effectTimeRange: 'effectTimeRange',
      index: 'index',
      notifyChannels: 'notifyChannels',
      targetIncidentState: 'targetIncidentState',
      triggerDelay: 'triggerDelay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleNotifyCount: 'number',
      cycleNotifyInterval: 'number',
      effectTimeRange: EffectTimeRange,
      index: 'number',
      notifyChannels: { 'type': 'array', 'itemType': NotifyChannel },
      targetIncidentState: 'string',
      triggerDelay: 'number',
    };
  }

  validate() {
    if(this.effectTimeRange && typeof (this.effectTimeRange as any).validate === 'function') {
      (this.effectTimeRange as any).validate();
    }
    if(Array.isArray(this.notifyChannels)) {
      $dara.Model.validateArray(this.notifyChannels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

