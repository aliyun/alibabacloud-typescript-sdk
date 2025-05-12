// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudDriveServiceResponseBodyConflictCdsAndOrderConflictOrder extends $dara.Model {
  /**
   * @remarks
   * The ID of the enterprise drive. The enterprise drive cannot be used if the order is unpaid.
   * 
   * @example
   * cn-hangzhou+cds-778205****
   */
  cdsId?: string;
  /**
   * @remarks
   * The ID of the order. You can obtain an order ID on the **Orders** page in the Expenses and Costs console.
   * 
   * @example
   * 22442411898****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      orderId: 'OrderId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      orderId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

