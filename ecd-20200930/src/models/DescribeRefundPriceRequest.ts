// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRefundPriceRequest extends $dara.Model {
  /**
   * @remarks
   * ID of cloud computer N. Valid values of N: 1 to 20.
   * 
   * This parameter is required.
   */
  desktopId?: string[];
  /**
   * @remarks
   * The unsubscription type.
   * 
   * Valid values:
   * 
   * *   RemainRefund: refunds the remaining balance and releases resources.
   * *   RenewRefund: refunds only the renewal fee and adjusts the expiration date accordingly.
   * 
   * @example
   * RemainRefund
   */
  refundType?: string;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resellerOwnerUid?: number;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      refundType: 'RefundType',
      regionId: 'RegionId',
      resellerOwnerUid: 'ResellerOwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      refundType: 'string',
      regionId: 'string',
      resellerOwnerUid: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

