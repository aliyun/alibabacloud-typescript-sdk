// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetHotspotTrackingResponseBodyDataFlame } from "./GetHotspotTrackingResponseBodyDataFlame";
import { GetHotspotTrackingResponseBodyDataSeries } from "./GetHotspotTrackingResponseBodyDataSeries";


export class GetHotspotTrackingResponseBodyData extends $dara.Model {
  flame?: GetHotspotTrackingResponseBodyDataFlame;
  series?: GetHotspotTrackingResponseBodyDataSeries;
  static names(): { [key: string]: string } {
    return {
      flame: 'flame',
      series: 'series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flame: GetHotspotTrackingResponseBodyDataFlame,
      series: GetHotspotTrackingResponseBodyDataSeries,
    };
  }

  validate() {
    if(this.flame && typeof (this.flame as any).validate === 'function') {
      (this.flame as any).validate();
    }
    if(this.series && typeof (this.series as any).validate === 'function') {
      (this.series as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

