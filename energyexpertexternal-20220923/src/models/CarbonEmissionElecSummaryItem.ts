// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CarbonEmissionElecSummaryItem extends $dara.Model {
  /**
   * @remarks
   * Carbon Equivalent.
   * 
   * @example
   * 1.22
   */
  carbonEmissionData?: number;
  /**
   * @remarks
   * The price unit.
   * 
   * @example
   * kg
   */
  dataUnit?: string;
  /**
   * @remarks
   * The enterprise name.
   * 
   * @example
   * xxx
   */
  name?: string;
  /**
   * @remarks
   * The percentage of electricity consumption. Valid values: 0 to 1.
   * 
   * @example
   * 0.22
   */
  ratio?: number;
  /**
   * @remarks
   * Electricity consumption in Kwh.
   * 
   * @example
   * 1.2
   */
  rawData?: number;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      dataUnit: 'dataUnit',
      name: 'name',
      ratio: 'ratio',
      rawData: 'rawData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      dataUnit: 'string',
      name: 'string',
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

