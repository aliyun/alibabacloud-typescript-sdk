// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCipStatsResponseBodyDataLabelStatChartImageTreeChar } from "./GetCipStatsResponseBodyDataLabelStatChartImageTreeChar";
import { GetCipStatsResponseBodyDataLabelStatChartTextTreeChart } from "./GetCipStatsResponseBodyDataLabelStatChartTextTreeChart";
import { GetCipStatsResponseBodyDataLabelStatChartTreeChart } from "./GetCipStatsResponseBodyDataLabelStatChartTreeChart";
import { GetCipStatsResponseBodyDataLabelStatChartVoiceTreeChart } from "./GetCipStatsResponseBodyDataLabelStatChartVoiceTreeChart";
import { GetCipStatsResponseBodyDataLabelStatChartY } from "./GetCipStatsResponseBodyDataLabelStatChartY";


export class GetCipStatsResponseBodyDataLabelStatChart extends $dara.Model {
  imageTreeChar?: GetCipStatsResponseBodyDataLabelStatChartImageTreeChar[];
  /**
   * @example
   * nickNameDetection
   */
  serviceCode?: string;
  textTreeChart?: GetCipStatsResponseBodyDataLabelStatChartTextTreeChart[];
  /**
   * @example
   * 117
   */
  totalCount?: number;
  treeChart?: GetCipStatsResponseBodyDataLabelStatChartTreeChart[];
  voiceTreeChart?: GetCipStatsResponseBodyDataLabelStatChartVoiceTreeChart[];
  x?: string[];
  y?: GetCipStatsResponseBodyDataLabelStatChartY[];
  static names(): { [key: string]: string } {
    return {
      imageTreeChar: 'ImageTreeChar',
      serviceCode: 'ServiceCode',
      textTreeChart: 'TextTreeChart',
      totalCount: 'TotalCount',
      treeChart: 'TreeChart',
      voiceTreeChart: 'VoiceTreeChart',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageTreeChar: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataLabelStatChartImageTreeChar },
      serviceCode: 'string',
      textTreeChart: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataLabelStatChartTextTreeChart },
      totalCount: 'number',
      treeChart: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataLabelStatChartTreeChart },
      voiceTreeChart: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataLabelStatChartVoiceTreeChart },
      x: { 'type': 'array', 'itemType': 'string' },
      y: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataLabelStatChartY },
    };
  }

  validate() {
    if(Array.isArray(this.imageTreeChar)) {
      $dara.Model.validateArray(this.imageTreeChar);
    }
    if(Array.isArray(this.textTreeChart)) {
      $dara.Model.validateArray(this.textTreeChart);
    }
    if(Array.isArray(this.treeChart)) {
      $dara.Model.validateArray(this.treeChart);
    }
    if(Array.isArray(this.voiceTreeChart)) {
      $dara.Model.validateArray(this.voiceTreeChart);
    }
    if(Array.isArray(this.x)) {
      $dara.Model.validateArray(this.x);
    }
    if(Array.isArray(this.y)) {
      $dara.Model.validateArray(this.y);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

