// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetElecConstituteResponseBodyDataZero extends $dara.Model {
  /**
   * @remarks
   * Carbon emission.
   * 
   * @example
   * 1.2
   */
  carbonEmissionData?: number;
  /**
   * @remarks
   * The unit.
   * 
   * @example
   * kWh
   */
  dataUnit?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * zero
   */
  name?: string;
  /**
   * @remarks
   * The unique identifier of name.
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
   * 0.33
   */
  ratio?: number;
  /**
   * @remarks
   * Electricity consumption
   * 
   * @example
   * 444.3
   */
  rawData?: number;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      dataUnit: 'dataUnit',
      name: 'name',
      nameKey: 'nameKey',
      ratio: 'ratio',
      rawData: 'rawData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      dataUnit: 'string',
      name: 'string',
      nameKey: 'string',
      ratio: 'number',
      rawData: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

