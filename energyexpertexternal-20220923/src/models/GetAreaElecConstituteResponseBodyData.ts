// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CarbonEmissionElecSummaryItem } from "./CarbonEmissionElecSummaryItem";


export class GetAreaElecConstituteResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Photoelectric power consumption and carbon emission data of each enterprise.
   */
  light?: CarbonEmissionElecSummaryItem[];
  /**
   * @remarks
   * Data on nuclear power consumption and carbon emissions at each enterprise.
   */
  nuclear?: CarbonEmissionElecSummaryItem[];
  /**
   * @remarks
   * Data on renewable electricity consumption and carbon emissions at each enterprise.
   */
  renewing?: CarbonEmissionElecSummaryItem[];
  /**
   * @remarks
   * Data on mains electricity consumption and carbon emission of each enterprise.
   */
  urban?: CarbonEmissionElecSummaryItem[];
  /**
   * @remarks
   * Hydropower consumption and carbon emission data of each enterprise.
   */
  water?: CarbonEmissionElecSummaryItem[];
  /**
   * @remarks
   * Wind power consumption and carbon emission data of each enterprise.
   */
  wind?: CarbonEmissionElecSummaryItem[];
  /**
   * @remarks
   * Data of zero electricity consumption and carbon emission of each enterprise.
   */
  zero?: CarbonEmissionElecSummaryItem[];
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
      light: { 'type': 'array', 'itemType': CarbonEmissionElecSummaryItem },
      nuclear: { 'type': 'array', 'itemType': CarbonEmissionElecSummaryItem },
      renewing: { 'type': 'array', 'itemType': CarbonEmissionElecSummaryItem },
      urban: { 'type': 'array', 'itemType': CarbonEmissionElecSummaryItem },
      water: { 'type': 'array', 'itemType': CarbonEmissionElecSummaryItem },
      wind: { 'type': 'array', 'itemType': CarbonEmissionElecSummaryItem },
      zero: { 'type': 'array', 'itemType': CarbonEmissionElecSummaryItem },
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

