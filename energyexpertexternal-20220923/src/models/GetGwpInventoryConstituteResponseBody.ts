// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GwpInventoryConstitute } from "./GwpInventoryConstitute";


export class GetGwpInventoryConstituteResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Aggregated by resource type of an inventory.
   */
  byResourceType?: GwpInventoryConstitute[];
  /**
   * @remarks
   * Emission quantity: may be positive, negative, or 0. To ensure the calculation accuracy, 24 decimal places are reserved for the calculation process. We recommend that you intercept data based on your business requirements.
   * 
   * @example
   * 1009.976265540000000000000000000000
   */
  carbonEmission?: number;
  /**
   * @remarks
   * Organized by hierarchy from high to low, according to the flow-> process-> inventory hierarchy.
   */
  items?: GwpInventoryConstitute[];
  /**
   * @remarks
   * The name.
   * 
   * @example
   * This is not used for displaying
   */
  name?: string;
  /**
   * @remarks
   * Emission Unit.
   * 
   * @example
   * kgCO₂e/t
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      byResourceType: 'byResourceType',
      carbonEmission: 'carbonEmission',
      items: 'items',
      name: 'name',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byResourceType: { 'type': 'array', 'itemType': GwpInventoryConstitute },
      carbonEmission: 'number',
      items: { 'type': 'array', 'itemType': GwpInventoryConstitute },
      name: 'string',
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

export class GetGwpInventoryConstituteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetGwpInventoryConstituteResponseBodyData;
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * 06DA2909-7736-5738-AA31-ACD617D828F1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetGwpInventoryConstituteResponseBodyData,
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

