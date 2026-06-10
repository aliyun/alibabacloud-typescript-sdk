// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRefundPriceRequest extends $dara.Model {
  /**
   * @remarks
   * A list of cloud desktop IDs. You can specify one or more IDs. The number of IDs (N) must be between 1 and 20.
   * 
   * This parameter is required.
   */
  desktopId?: string[];
  /**
   * @remarks
   * Refund type.
   * 
   * @example
   * RemainRefund
   */
  refundType?: string;
  /**
   * @remarks
   * Region ID. Call [DescribeRegions](~~DescribeRegions~~) to get a list of regions supported by WUYING Workspace.
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

