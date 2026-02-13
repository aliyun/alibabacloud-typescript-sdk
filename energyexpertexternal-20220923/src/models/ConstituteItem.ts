// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ConstituteItemEnvGasEmissions extends $dara.Model {
  /**
   * @remarks
   * Carbon emissions.
   * 
   * @example
   * 1.2
   */
  carbonEmissionData?: number;
  /**
   * @remarks
   * Gas emissions.
   * 
   * @example
   * 4.33
   */
  gasEmissionData?: number;
  /**
   * @remarks
   * Name of gas.
   * 
   * @example
   * CO₂
   */
  name?: string;
  /**
   * @remarks
   * A unique key that identifies the gas type.
   * 
   * @example
   * 1
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      gasEmissionData: 'gasEmissionData',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      gasEmissionData: 'number',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConstituteItem extends $dara.Model {
  /**
   * @remarks
   * Carbon emission
   * 
   * @example
   * 3.222
   */
  carbonEmissionData?: number;
  /**
   * @remarks
   * Data Unit
   * 
   * @example
   * kWh
   */
  dataUnit?: string;
  /**
   * @remarks
   * Emission source
   * 
   * @example
   * GEC
   */
  emissionSource?: string;
  /**
   * @remarks
   * Unique identification of emission source.
   * 
   * @example
   * carbonInventory.check.by_electricity_properties/carbonInventory.check.wind_electricity/carbonInventory.check.gec
   */
  emissionSourceKey?: string;
  /**
   * @remarks
   * The name of enterprise.
   * 
   * @example
   * EnterpriseA
   */
  enterpriseName?: string;
  /**
   * @remarks
   * Gas Emissions Detail List.
   */
  envGasEmissions?: ConstituteItemEnvGasEmissions[];
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Scope 1: Direct GHG emissions
   */
  name?: string;
  /**
   * @remarks
   * The unique identifier of name.
   * 
   * @example
   * carbonInventory.check.indirect_emissions_from_imported_electricity
   */
  nameKey?: string;
  /**
   * @remarks
   * Ratio.example value: 0.5 (i. e. 50%).
   * 
   * @example
   * 0.5
   */
  ratio?: number;
  /**
   * @remarks
   * Raw data
   * 
   * @example
   * 1.2
   */
  rawData?: number;
  /**
   * @remarks
   * The child detail list.
   */
  subConstituteItems?: ConstituteItem[];
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      dataUnit: 'dataUnit',
      emissionSource: 'emissionSource',
      emissionSourceKey: 'emissionSourceKey',
      enterpriseName: 'enterpriseName',
      envGasEmissions: 'envGasEmissions',
      name: 'name',
      nameKey: 'nameKey',
      ratio: 'ratio',
      rawData: 'rawData',
      subConstituteItems: 'subConstituteItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      dataUnit: 'string',
      emissionSource: 'string',
      emissionSourceKey: 'string',
      enterpriseName: 'string',
      envGasEmissions: { 'type': 'array', 'itemType': ConstituteItemEnvGasEmissions },
      name: 'string',
      nameKey: 'string',
      ratio: 'number',
      rawData: 'number',
      subConstituteItems: { 'type': 'array', 'itemType': ConstituteItem },
    };
  }

  validate() {
    if(Array.isArray(this.envGasEmissions)) {
      $dara.Model.validateArray(this.envGasEmissions);
    }
    if(Array.isArray(this.subConstituteItems)) {
      $dara.Model.validateArray(this.subConstituteItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

