// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetElecTrendResponseBodyDataZero extends $dara.Model {
  /**
   * @remarks
   * Carbon emissions
   * 
   * @example
   * 3.14
   */
  carbonEmissionData?: number;
  /**
   * @remarks
   * The price unit.
   * 
   * @example
   * kWh
   */
  dataUnit?: string;
  /**
   * @remarks
   * Month
   * 
   * @example
   * 12
   */
  month?: number;
  /**
   * @remarks
   * Power Type Name
   * 
   * @example
   * Zero carbon electricity
   */
  name?: string;
  /**
   * @remarks
   * Power Type Code
   * 
   * @example
   * carbonInventory.carbonEmissionAnalysis.components.CarbonDetail.lingTanDianLi
   */
  nameKey?: string;
  /**
   * @remarks
   * Proportion of electricity consumption to all electricity consumption in the month: example value: 0.5 (i. e., 50%)
   * 
   * @example
   * 0.5
   */
  ratio?: number;
  /**
   * @remarks
   * Electricity consumption
   * 
   * @example
   * 3.14
   */
  rawData?: number;
  /**
   * @remarks
   * Year
   * 
   * @example
   * 2024
   */
  year?: string;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      dataUnit: 'dataUnit',
      month: 'month',
      name: 'name',
      nameKey: 'nameKey',
      ratio: 'ratio',
      rawData: 'rawData',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      dataUnit: 'string',
      month: 'number',
      name: 'string',
      nameKey: 'string',
      ratio: 'number',
      rawData: 'number',
      year: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

