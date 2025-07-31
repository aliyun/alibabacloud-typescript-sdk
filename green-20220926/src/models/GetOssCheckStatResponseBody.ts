// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssCheckStatResponseBodyBarChartY extends $dara.Model {
  data?: number[];
  /**
   * @example
   * document_detection
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

export class GetOssCheckStatResponseBodyBarChart extends $dara.Model {
  x?: string[];
  y?: GetOssCheckStatResponseBodyBarChartY[];
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: { 'type': 'array', 'itemType': 'string' },
      y: { 'type': 'array', 'itemType': GetOssCheckStatResponseBodyBarChartY },
    };
  }

  validate() {
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

export class GetOssCheckStatResponseBody extends $dara.Model {
  barChart?: GetOssCheckStatResponseBodyBarChart;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      barChart: 'BarChart',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      barChart: GetOssCheckStatResponseBodyBarChart,
      requestId: 'string',
    };
  }

  validate() {
    if(this.barChart && typeof (this.barChart as any).validate === 'function') {
      (this.barChart as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

