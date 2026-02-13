// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GwpResourceConstitute extends $dara.Model {
  /**
   * @remarks
   * The carbon emissions. To ensure accuracy, retain 24 decimal places. We recommend that you intercept the carbon emissions.
   * 
   * @example
   * 1009.976265540000000000000000000000
   */
  carbonEmission?: number;
  /**
   * @remarks
   * Name signifies a concept with distinct layers of meaning, where the outermost layer represents the overall carbon emissions.
   * 
   * @example
   * Energy
   */
  name?: string;
  /**
   * @remarks
   * Percentage of emissions. 98.76 indicates the proportion of 98.76%.
   * 
   * @example
   * 98.76
   */
  percent?: string;
  /**
   * @remarks
   * The type of the inventory. It is meaningful at the inventory layer and can be empty at other layers.
   * 
   * @example
   * 1
   */
  resourceType?: number;
  /**
   * @remarks
   * unit of emissions.
   * 
   * @example
   * kgCO₂e/Piece(s)
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      carbonEmission: 'carbonEmission',
      name: 'name',
      percent: 'percent',
      resourceType: 'resourceType',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmission: 'number',
      name: 'string',
      percent: 'string',
      resourceType: 'number',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

