// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetElecTrendResponseBodyDataLight extends $dara.Model {
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
   * The unit.
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
   * Power type name.
   * 
   * @example
   * Solar Power
   */
  name?: string;
  /**
   * @remarks
   * Power Type Code
   * 
   * @example
   * carbonInventory.check.light_electricity
   */
  nameKey?: string;
  /**
   * @remarks
   * Proportion of electricity consumption to all electricity consumption in the month: example value: 0.5 (i. e. 50%).
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

export class GetElecTrendResponseBodyDataNuclear extends $dara.Model {
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
   * Nuclear power
   */
  name?: string;
  /**
   * @remarks
   * Power Type Code
   * 
   * @example
   * carbonInventory.check.nuclear_electricity
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

export class GetElecTrendResponseBodyDataRenewing extends $dara.Model {
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
   * Renewable electricity
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

export class GetElecTrendResponseBodyDataUrban extends $dara.Model {
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
   * Grid power
   */
  name?: string;
  /**
   * @remarks
   * Power Type Code
   * 
   * @example
   * carbonInventory.check.urban_electricity
   */
  nameKey?: string;
  /**
   * @remarks
   * Proportion of electricity consumption to all electricity consumption in the month: example value: 0.5 (i. e. 50%).
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

export class GetElecTrendResponseBodyDataWater extends $dara.Model {
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
   * The unit.
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
   * Hydro power
   */
  name?: string;
  /**
   * @remarks
   * Power Type Code
   * 
   * @example
   * carbonInventory.check.water_electricity
   */
  nameKey?: string;
  /**
   * @remarks
   * Proportion of electricity consumption to all electricity consumption in the month: example value: 0.5 (i. e. 50%).
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

export class GetElecTrendResponseBodyDataWind extends $dara.Model {
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
   * Wind power
   */
  name?: string;
  /**
   * @remarks
   * Power Type Code
   * 
   * @example
   * carbonInventory.check.wind_electricity
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

export class GetElecTrendResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Photoelectricity monthly electricity consumption and carbon emissions and other data.
   */
  light?: GetElecTrendResponseBodyDataLight[];
  /**
   * @remarks
   * Monthly electricity consumption and carbon emissions data for nuclear power
   */
  nuclear?: GetElecTrendResponseBodyDataNuclear[];
  /**
   * @remarks
   * Monthly data on renewable electricity consumption and carbon emissions
   */
  renewing?: GetElecTrendResponseBodyDataRenewing[];
  /**
   * @remarks
   * Data such as monthly electricity consumption and carbon emissions from the mains.
   */
  urban?: GetElecTrendResponseBodyDataUrban[];
  /**
   * @remarks
   * Monthly data on electricity consumption and carbon emissions for hydropower.
   */
  water?: GetElecTrendResponseBodyDataWater[];
  /**
   * @remarks
   * Monthly wind power consumption and carbon emission data
   */
  wind?: GetElecTrendResponseBodyDataWind[];
  /**
   * @remarks
   * Zero electricity monthly electricity consumption and carbon emissions and other data.
   */
  zero?: GetElecTrendResponseBodyDataZero[];
  static names(): { [key: string]: string } {
    return {
      light: 'light',
      nuclear: 'nuclear',
      renewing: 'renewing',
      urban: 'urban',
      water: 'water',
      wind: 'wind',
      zero: 'zero',
    };
  }

  static types(): { [key: string]: any } {
    return {
      light: { 'type': 'array', 'itemType': GetElecTrendResponseBodyDataLight },
      nuclear: { 'type': 'array', 'itemType': GetElecTrendResponseBodyDataNuclear },
      renewing: { 'type': 'array', 'itemType': GetElecTrendResponseBodyDataRenewing },
      urban: { 'type': 'array', 'itemType': GetElecTrendResponseBodyDataUrban },
      water: { 'type': 'array', 'itemType': GetElecTrendResponseBodyDataWater },
      wind: { 'type': 'array', 'itemType': GetElecTrendResponseBodyDataWind },
      zero: { 'type': 'array', 'itemType': GetElecTrendResponseBodyDataZero },
    };
  }

  validate() {
    if(Array.isArray(this.light)) {
      $dara.Model.validateArray(this.light);
    }
    if(Array.isArray(this.nuclear)) {
      $dara.Model.validateArray(this.nuclear);
    }
    if(Array.isArray(this.renewing)) {
      $dara.Model.validateArray(this.renewing);
    }
    if(Array.isArray(this.urban)) {
      $dara.Model.validateArray(this.urban);
    }
    if(Array.isArray(this.water)) {
      $dara.Model.validateArray(this.water);
    }
    if(Array.isArray(this.wind)) {
      $dara.Model.validateArray(this.wind);
    }
    if(Array.isArray(this.zero)) {
      $dara.Model.validateArray(this.zero);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElecTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code returned for the request. A value of Success indicates that the request was successful. Other values indicate that the request failed. You can troubleshoot the error by viewing the error message returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetElecTrendResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetElecTrendResponseBodyData,
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

