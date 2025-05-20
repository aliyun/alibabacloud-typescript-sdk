// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetElecConstituteResponseBodyDataLight } from "./GetElecConstituteResponseBodyDataLight";
import { GetElecConstituteResponseBodyDataNuclear } from "./GetElecConstituteResponseBodyDataNuclear";
import { GetElecConstituteResponseBodyDataRenewing } from "./GetElecConstituteResponseBodyDataRenewing";
import { GetElecConstituteResponseBodyDataUrban } from "./GetElecConstituteResponseBodyDataUrban";
import { GetElecConstituteResponseBodyDataWater } from "./GetElecConstituteResponseBodyDataWater";
import { GetElecConstituteResponseBodyDataWind } from "./GetElecConstituteResponseBodyDataWind";
import { GetElecConstituteResponseBodyDataZero } from "./GetElecConstituteResponseBodyDataZero";


export class GetElecConstituteResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Photoelectric power consumption and carbon emission data of each enterprise.
   */
  light?: GetElecConstituteResponseBodyDataLight;
  /**
   * @remarks
   * Data on nuclear power consumption and carbon emissions at each enterprise.
   */
  nuclear?: GetElecConstituteResponseBodyDataNuclear;
  /**
   * @remarks
   * Data on renewable electricity consumption and carbon emissions at each enterprise.
   */
  renewing?: GetElecConstituteResponseBodyDataRenewing;
  /**
   * @remarks
   * Data on mains power electricity consumption and carbon emission of each enterprise.
   */
  urban?: GetElecConstituteResponseBodyDataUrban;
  /**
   * @remarks
   * Hydropower consumption and carbon emission data of each enterprise.
   */
  water?: GetElecConstituteResponseBodyDataWater;
  /**
   * @remarks
   * Wind power consumption and carbon emission data of each enterprise.
   */
  wind?: GetElecConstituteResponseBodyDataWind;
  /**
   * @remarks
   * Data of zero electricity consumption and carbon emission of each enterprise.
   */
  zero?: GetElecConstituteResponseBodyDataZero;
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
      light: GetElecConstituteResponseBodyDataLight,
      nuclear: GetElecConstituteResponseBodyDataNuclear,
      renewing: GetElecConstituteResponseBodyDataRenewing,
      urban: GetElecConstituteResponseBodyDataUrban,
      water: GetElecConstituteResponseBodyDataWater,
      wind: GetElecConstituteResponseBodyDataWind,
      zero: GetElecConstituteResponseBodyDataZero,
    };
  }

  validate() {
    if(this.light && typeof (this.light as any).validate === 'function') {
      (this.light as any).validate();
    }
    if(this.nuclear && typeof (this.nuclear as any).validate === 'function') {
      (this.nuclear as any).validate();
    }
    if(this.renewing && typeof (this.renewing as any).validate === 'function') {
      (this.renewing as any).validate();
    }
    if(this.urban && typeof (this.urban as any).validate === 'function') {
      (this.urban as any).validate();
    }
    if(this.water && typeof (this.water as any).validate === 'function') {
      (this.water as any).validate();
    }
    if(this.wind && typeof (this.wind as any).validate === 'function') {
      (this.wind as any).validate();
    }
    if(this.zero && typeof (this.zero as any).validate === 'function') {
      (this.zero as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

