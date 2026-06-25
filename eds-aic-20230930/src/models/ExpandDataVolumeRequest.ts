// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExpandDataVolumeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. The default value is false.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The IDs of the cloud phone matrices.
   */
  nodeIds?: string[];
  paidCallBackUrl?: string;
  /**
   * @remarks
   * The size of the instance storage. Unit: GiB.
   * 
   * @example
   * 100
   */
  phoneDataVolume?: number;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * 50003308011****
   */
  promotionId?: string;
  /**
   * @remarks
   * The size of the shared storage for the matrix. Unit: GiB.
   * 
   * @example
   * 100
   */
  shareDataVolume?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      bizRegionId: 'BizRegionId',
      nodeIds: 'NodeIds',
      paidCallBackUrl: 'PaidCallBackUrl',
      phoneDataVolume: 'PhoneDataVolume',
      promotionId: 'PromotionId',
      shareDataVolume: 'ShareDataVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      bizRegionId: 'string',
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      paidCallBackUrl: 'string',
      phoneDataVolume: 'number',
      promotionId: 'string',
      shareDataVolume: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

