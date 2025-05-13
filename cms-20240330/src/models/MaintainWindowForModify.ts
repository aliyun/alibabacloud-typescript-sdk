// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MaintainWindowForModifyEffectTimeRange } from "./MaintainWindowForModifyEffectTimeRange";
import { FilterSetting } from "./FilterSetting";


export class MaintainWindowForModify extends $dara.Model {
  description?: string;
  effectTimeRange?: MaintainWindowForModifyEffectTimeRange;
  effective?: string;
  endTime?: string;
  filterSetting?: FilterSetting;
  /**
   * @remarks
   * This parameter is required.
   */
  maintainWindowName?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      effectTimeRange: 'effectTimeRange',
      effective: 'effective',
      endTime: 'endTime',
      filterSetting: 'filterSetting',
      maintainWindowName: 'maintainWindowName',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      effectTimeRange: MaintainWindowForModifyEffectTimeRange,
      effective: 'string',
      endTime: 'string',
      filterSetting: FilterSetting,
      maintainWindowName: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.effectTimeRange && typeof (this.effectTimeRange as any).validate === 'function') {
      (this.effectTimeRange as any).validate();
    }
    if(this.filterSetting && typeof (this.filterSetting as any).validate === 'function') {
      (this.filterSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

