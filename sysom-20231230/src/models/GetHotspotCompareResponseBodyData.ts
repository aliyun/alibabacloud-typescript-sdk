// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetHotspotCompareResponseBodyDataFlame } from "./GetHotspotCompareResponseBodyDataFlame";
import { GetHotspotCompareResponseBodyDataSeriesInstance1 } from "./GetHotspotCompareResponseBodyDataSeriesInstance1";
import { GetHotspotCompareResponseBodyDataSeriesInstance2 } from "./GetHotspotCompareResponseBodyDataSeriesInstance2";


export class GetHotspotCompareResponseBodyData extends $dara.Model {
  flame?: GetHotspotCompareResponseBodyDataFlame;
  seriesInstance1?: GetHotspotCompareResponseBodyDataSeriesInstance1;
  seriesInstance2?: GetHotspotCompareResponseBodyDataSeriesInstance2;
  static names(): { [key: string]: string } {
    return {
      flame: 'flame',
      seriesInstance1: 'series_instance1',
      seriesInstance2: 'series_instance2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flame: GetHotspotCompareResponseBodyDataFlame,
      seriesInstance1: GetHotspotCompareResponseBodyDataSeriesInstance1,
      seriesInstance2: GetHotspotCompareResponseBodyDataSeriesInstance2,
    };
  }

  validate() {
    if(this.flame && typeof (this.flame as any).validate === 'function') {
      (this.flame as any).validate();
    }
    if(this.seriesInstance1 && typeof (this.seriesInstance1 as any).validate === 'function') {
      (this.seriesInstance1 as any).validate();
    }
    if(this.seriesInstance2 && typeof (this.seriesInstance2 as any).validate === 'function') {
      (this.seriesInstance2 as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

