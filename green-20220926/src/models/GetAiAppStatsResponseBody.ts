// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataTotalStatValue } from "./DataTotalStatValue";


export class GetAiAppStatsResponseBodyDataLabelStatChartTreeChart extends $dara.Model {
  /**
   * @remarks
   * The label description.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The label.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 99.91
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiAppStatsResponseBodyDataLabelStatChart extends $dara.Model {
  /**
   * @remarks
   * The tree chart.
   */
  treeChart?: GetAiAppStatsResponseBodyDataLabelStatChartTreeChart[];
  static names(): { [key: string]: string } {
    return {
      treeChart: 'TreeChart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      treeChart: { 'type': 'array', 'itemType': GetAiAppStatsResponseBodyDataLabelStatChartTreeChart },
    };
  }

  validate() {
    if(Array.isArray(this.treeChart)) {
      $dara.Model.validateArray(this.treeChart);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiAppStatsResponseBodyDataY extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: number[];
  /**
   * @remarks
   * The name.
   * 
   * @example
   * example
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiAppStatsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The label usage chart.
   */
  labelStatChart?: GetAiAppStatsResponseBodyDataLabelStatChart[];
  /**
   * @remarks
   * The total count categorized statistics.
   */
  totalStat?: { [key: string]: DataTotalStatValue };
  /**
   * @remarks
   * The X value of the coordinate point.
   */
  x?: string[];
  /**
   * @remarks
   * The Y value of the coordinate point.
   */
  y?: GetAiAppStatsResponseBodyDataY[];
  static names(): { [key: string]: string } {
    return {
      labelStatChart: 'LabelStatChart',
      totalStat: 'TotalStat',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelStatChart: { 'type': 'array', 'itemType': GetAiAppStatsResponseBodyDataLabelStatChart },
      totalStat: { 'type': 'map', 'keyType': 'string', 'valueType': DataTotalStatValue },
      x: { 'type': 'array', 'itemType': 'string' },
      y: { 'type': 'array', 'itemType': GetAiAppStatsResponseBodyDataY },
    };
  }

  validate() {
    if(Array.isArray(this.labelStatChart)) {
      $dara.Model.validateArray(this.labelStatChart);
    }
    if(this.totalStat) {
      $dara.Model.validateMap(this.totalStat);
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

export class GetAiAppStatsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetAiAppStatsResponseBodyData;
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify a request. Used for troubleshooting.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetAiAppStatsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

