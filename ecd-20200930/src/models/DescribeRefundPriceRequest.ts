// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRefundPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The list of cloud computer IDs. You can specify one or more IDs. Valid values of N: 1 to 20.
   * 
   * This parameter is required.
   */
  desktopId?: string[];
  /**
   * @remarks
   * The unsubscription type.
   * 
   * @example
   * RemainRefund
   */
  refundType?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the resource ownership in resale pattern. You do not need to specify this parameter if you are not using resale pattern.
   * 
   * @example
   * 1422724566551XXX
   */
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

