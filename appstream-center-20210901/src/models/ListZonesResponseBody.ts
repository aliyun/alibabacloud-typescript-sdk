// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListZonesResponseBodyListZonesModel extends $dara.Model {
  /**
   * @remarks
   * The list of available zone IDs for the specified product type and operating system type in the current region. When creating a resource that requires a vSwitch, select a vSwitch in one of these zones.
   */
  zones?: string[];
  static names(): { [key: string]: string } {
    return {
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zones: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZonesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The zone query result.
   */
  listZonesModel?: ListZonesResponseBodyListZonesModel;
  /**
   * @remarks
   * The request ID. You can use this ID to locate and troubleshoot issues.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      listZonesModel: 'ListZonesModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listZonesModel: ListZonesResponseBodyListZonesModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.listZonesModel && typeof (this.listZonesModel as any).validate === 'function') {
      (this.listZonesModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

