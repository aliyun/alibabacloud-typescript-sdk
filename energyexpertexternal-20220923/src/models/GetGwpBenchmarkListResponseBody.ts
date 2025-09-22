// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGwpBenchmarkListResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * `activeReduction=benchmarkEmission-carbonEmission` Generally, baseline emissions are greater than inventory emissions. Maintain four decimal places. Unit pertains to a higher-level unit.
   * 
   * @example
   * 0.2169
   */
  activeReduction?: number;
  /**
   * @remarks
   * Benchmark emissions. Maintain four decimal places. Unit pertains to a higher-level unit.
   * 
   * @example
   * 0.0108
   */
  benchmarkEmission?: number;
  /**
   * @remarks
   * Benchmark name
   * 
   * @example
   * old-energy
   */
  benchmarkName?: string;
  /**
   * @remarks
   * Inventory emissions. Maintain four decimal places. Unit pertains to a higher-level unit.
   * 
   * @example
   * -0.2061
   */
  carbonEmission?: number;
  /**
   * @remarks
   * name
   * 
   * @example
   * new-energy
   */
  name?: string;
  /**
   * @remarks
   * Unused temporarily.
   * 
   * @example
   * null
   */
  percent?: string;
  static names(): { [key: string]: string } {
    return {
      activeReduction: 'activeReduction',
      benchmarkEmission: 'benchmarkEmission',
      benchmarkName: 'benchmarkName',
      carbonEmission: 'carbonEmission',
      name: 'name',
      percent: 'percent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeReduction: 'number',
      benchmarkEmission: 'number',
      benchmarkName: 'string',
      carbonEmission: 'number',
      name: 'string',
      percent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGwpBenchmarkListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Active carbon reduction ranking list.
   */
  items?: GetGwpBenchmarkListResponseBodyDataItems[];
  /**
   * @remarks
   * unit of emissions. The default value is `kgCO₂e/productUnit`. 
   * The `productUnit` is the unit selected for the product. The unit value is changed to `tCO₂e/productUnit` or `gCO₂e/productUnit`. For more information, see the remarks in the quantity column.
   * 
   * @example
   * kgCO₂e/kg
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetGwpBenchmarkListResponseBodyDataItems },
      unit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGwpBenchmarkListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetGwpBenchmarkListResponseBodyData;
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * A8AEC6D9-A359-5169-BD1A-BD848BA60D65
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetGwpBenchmarkListResponseBodyData,
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

