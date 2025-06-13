// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCipStatsResponseBodyDataLabelStatChart } from "./GetCipStatsResponseBodyDataLabelStatChart";
import { GetCipStatsResponseBodyDataY } from "./GetCipStatsResponseBodyDataY";
import { GetCipStatsResponseBodyDataZ } from "./GetCipStatsResponseBodyDataZ";


export class GetCipStatsResponseBodyData extends $dara.Model {
  labelStatChart?: GetCipStatsResponseBodyDataLabelStatChart[];
  totalStat?: { [key: string]: {[key: string]: any} };
  uids?: string[];
  x?: string[];
  y?: GetCipStatsResponseBodyDataY[];
  z?: GetCipStatsResponseBodyDataZ[];
  static names(): { [key: string]: string } {
    return {
      labelStatChart: 'LabelStatChart',
      totalStat: 'TotalStat',
      uids: 'Uids',
      x: 'X',
      y: 'Y',
      z: 'Z',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelStatChart: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataLabelStatChart },
      totalStat: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      uids: { 'type': 'array', 'itemType': 'string' },
      x: { 'type': 'array', 'itemType': 'string' },
      y: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataY },
      z: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataZ },
    };
  }

  validate() {
    if(Array.isArray(this.labelStatChart)) {
      $dara.Model.validateArray(this.labelStatChart);
    }
    if(this.totalStat) {
      $dara.Model.validateMap(this.totalStat);
    }
    if(Array.isArray(this.uids)) {
      $dara.Model.validateArray(this.uids);
    }
    if(Array.isArray(this.x)) {
      $dara.Model.validateArray(this.x);
    }
    if(Array.isArray(this.y)) {
      $dara.Model.validateArray(this.y);
    }
    if(Array.isArray(this.z)) {
      $dara.Model.validateArray(this.z);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

