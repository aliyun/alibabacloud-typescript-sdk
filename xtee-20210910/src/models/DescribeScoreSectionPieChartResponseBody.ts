// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScoreSectionPieChartResponseBodyResultObjectGrid extends $dara.Model {
  /**
   * @remarks
   * Chart field, default false
   * 
   * @example
   * false
   */
  show?: boolean;
  static names(): { [key: string]: string } {
    return {
      show: 'show',
    };
  }

  static types(): { [key: string]: any } {
    return {
      show: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScoreSectionPieChartResponseBodyResultObjectSeriesData extends $dara.Model {
  /**
   * @remarks
   * Category item name.
   * 
   * @example
   * 名称
   */
  name?: string;
  /**
   * @remarks
   * Result value.
   * 
   * @example
   * 100
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeScoreSectionPieChartResponseBodyResultObjectSeries extends $dara.Model {
  /**
   * @remarks
   * Chart data list
   */
  data?: DescribeScoreSectionPieChartResponseBodyResultObjectSeriesData[];
  /**
   * @remarks
   * Category name.
   * 
   * @example
   * 分值区间占比
   */
  name?: string;
  /**
   * @remarks
   * Chart field, default false
   * 
   * @example
   * false
   */
  roseType?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      name: 'name',
      roseType: 'roseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeScoreSectionPieChartResponseBodyResultObjectSeriesData },
      name: 'string',
      roseType: 'boolean',
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

export class DescribeScoreSectionPieChartResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Chart field, default true
   * 
   * @example
   * true
   */
  animation?: boolean;
  /**
   * @remarks
   * Belongs to grid.
   */
  grid?: DescribeScoreSectionPieChartResponseBodyResultObjectGrid;
  /**
   * @remarks
   * Data list
   */
  series?: DescribeScoreSectionPieChartResponseBodyResultObjectSeries[];
  static names(): { [key: string]: string } {
    return {
      animation: 'animation',
      grid: 'grid',
      series: 'series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      animation: 'boolean',
      grid: DescribeScoreSectionPieChartResponseBodyResultObjectGrid,
      series: { 'type': 'array', 'itemType': DescribeScoreSectionPieChartResponseBodyResultObjectSeries },
    };
  }

  validate() {
    if(this.grid && typeof (this.grid as any).validate === 'function') {
      (this.grid as any).validate();
    }
    if(Array.isArray(this.series)) {
      $dara.Model.validateArray(this.series);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScoreSectionPieChartResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * AE7E6105-7DEB-5125-9B24-DCBC139F6CD2
   */
  requestId?: string;
  /**
   * @remarks
   * Return object
   */
  resultObject?: DescribeScoreSectionPieChartResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeScoreSectionPieChartResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

