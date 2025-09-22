// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInventoryListResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * Emission quantity: may be positive, negative, or 0. To ensure the calculation accuracy, 24 decimal places are reserved for the calculation process. We recommend that you intercept data based on your business requirements.
   * 
   * @example
   * 1000.000000000000000000000000000000
   */
  carbonEmission?: number;
  /**
   * @remarks
   * Name 
   * 
   * > The name is related to the request parameters group. Request parameters: resource, return name parameter meaning: list name; request parameters: process, return name parameter meaning: process name; request parameters: resourceType, return name parameter meaning: inventory resource type name; request parameters: processType, return name parameter meaning: flow name.
   * 
   * @example
   * Energy
   */
  name?: string;
  /**
   * @remarks
   * Percentage
   * 
   * @example
   * 99.01
   */
  percent?: string;
  /**
   * @remarks
   * Process Name: It is only meaningful when the request parameters group is resource.
   * 
   * @example
   * Process-1
   */
  processName?: string;
  static names(): { [key: string]: string } {
    return {
      carbonEmission: 'carbonEmission',
      name: 'name',
      percent: 'percent',
      processName: 'processName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmission: 'number',
      name: 'string',
      percent: 'string',
      processName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventoryListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Inventory detail.
   */
  items?: GetInventoryListResponseBodyDataItems[];
  /**
   * @remarks
   * Unit of product.
   * 
   * @example
   * kg
   */
  productUnit?: string;
  /**
   * @remarks
   * Emission Unit: The default value is kgCO₂ /productUnit. productUnit is the unit selected for the product. The unit value is changed to tCO₂ e/productUnit or gCO₂ e/productUnit based on the emission quantity. For more information, see the quantity column.
   * 
   * @example
   * kgCO₂e/kg
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      productUnit: 'productUnit',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetInventoryListResponseBodyDataItems },
      productUnit: 'string',
      unit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventoryListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetInventoryListResponseBodyData;
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
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
      data: GetInventoryListResponseBodyData,
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

