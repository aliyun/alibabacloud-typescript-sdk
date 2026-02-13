// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GwpResourceConstitute } from "./GwpResourceConstitute";


export class GwpInventoryConstitute extends $dara.Model {
  /**
   * @remarks
   * Grouped by inventory resource type, this data reveals emissions details for each category. It serves the "By type" analysis in the composition breakdown. A nested structure is employed: total carbon emissions are organized first by inventory type, forming a two-level hierarchy, with the innermost level \\"byResource\\" currently empty.
   */
  byResourceType?: GwpResourceConstitute[];
  /**
   * @remarks
   * Emission quantity
   * 
   * @example
   * 1009.976265540000000000000000000000
   */
  carbonEmission?: number;
  /**
   * @remarks
   * Organized hierarchically, it cascades from high to low: flow-> process-> inventory level. Employed for "By inventory" analysis in compositional breakdowns, the innermost layer of this nested structure is empty.
   */
  items?: GwpInventoryConstitute[];
  /**
   * @remarks
   * Name
   * 
   * @example
   * Acquisition of Raw Materials
   */
  name?: string;
  /**
   * @remarks
   * Percentage of emissions, for example 100.00 means 100.00%.
   * 
   * @example
   * 100.00
   */
  percent?: number;
  /**
   * @remarks
   * Resouce type of inventory.
   * 
   * @example
   * 1
   */
  resourceType?: number;
  /**
   * @remarks
   * Unit
   * 
   * @example
   * kgCO₂e/kg
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      byResourceType: 'byResourceType',
      carbonEmission: 'carbonEmission',
      items: 'items',
      name: 'name',
      percent: 'percent',
      resourceType: 'resourceType',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byResourceType: { 'type': 'array', 'itemType': GwpResourceConstitute },
      carbonEmission: 'number',
      items: { 'type': 'array', 'itemType': GwpInventoryConstitute },
      name: 'string',
      percent: 'number',
      resourceType: 'number',
      unit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.byResourceType)) {
      $dara.Model.validateArray(this.byResourceType);
    }
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

