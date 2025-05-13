// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NotifyStrategyForModifyRoutesChannels } from "./NotifyStrategyForModifyRoutesChannels";
import { NotifyStrategyForModifyRoutesEffectTimeRange } from "./NotifyStrategyForModifyRoutesEffectTimeRange";
import { FilterSetting } from "./FilterSetting";


export class NotifyStrategyForModifyRoutes extends $dara.Model {
  channels?: NotifyStrategyForModifyRoutesChannels[];
  effectTimeRange?: NotifyStrategyForModifyRoutesEffectTimeRange;
  filterSetting?: FilterSetting;
  severities?: string[];
  static names(): { [key: string]: string } {
    return {
      channels: 'channels',
      effectTimeRange: 'effectTimeRange',
      filterSetting: 'filterSetting',
      severities: 'severities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': NotifyStrategyForModifyRoutesChannels },
      effectTimeRange: NotifyStrategyForModifyRoutesEffectTimeRange,
      filterSetting: FilterSetting,
      severities: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.channels)) {
      $dara.Model.validateArray(this.channels);
    }
    if(this.effectTimeRange && typeof (this.effectTimeRange as any).validate === 'function') {
      (this.effectTimeRange as any).validate();
    }
    if(this.filterSetting && typeof (this.filterSetting as any).validate === 'function') {
      (this.filterSetting as any).validate();
    }
    if(Array.isArray(this.severities)) {
      $dara.Model.validateArray(this.severities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

