// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetectLungNoduleResponseBodyDataSeries } from "./DetectLungNoduleResponseBodyDataSeries";


export class DetectLungNoduleResponseBodyData extends $dara.Model {
  series?: DetectLungNoduleResponseBodyDataSeries[];
  static names(): { [key: string]: string } {
    return {
      series: 'Series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      series: { 'type': 'array', 'itemType': DetectLungNoduleResponseBodyDataSeries },
    };
  }

  validate() {
    if(Array.isArray(this.series)) {
      $dara.Model.validateArray(this.series);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

