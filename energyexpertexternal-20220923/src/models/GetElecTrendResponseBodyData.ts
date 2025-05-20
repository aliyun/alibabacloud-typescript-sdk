// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetElecTrendResponseBodyDataLight } from "./GetElecTrendResponseBodyDataLight";
import { GetElecTrendResponseBodyDataNuclear } from "./GetElecTrendResponseBodyDataNuclear";
import { GetElecTrendResponseBodyDataRenewing } from "./GetElecTrendResponseBodyDataRenewing";
import { GetElecTrendResponseBodyDataUrban } from "./GetElecTrendResponseBodyDataUrban";
import { GetElecTrendResponseBodyDataWater } from "./GetElecTrendResponseBodyDataWater";
import { GetElecTrendResponseBodyDataWind } from "./GetElecTrendResponseBodyDataWind";
import { GetElecTrendResponseBodyDataZero } from "./GetElecTrendResponseBodyDataZero";


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

