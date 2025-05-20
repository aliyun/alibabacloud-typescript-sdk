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

