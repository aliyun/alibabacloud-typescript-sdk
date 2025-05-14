// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExpandDataVolumeRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  nodeIds?: string[];
  /**
   * @example
   * 100
   */
  shareDataVolume?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      bizRegionId: 'BizRegionId',
      nodeIds: 'NodeIds',
      shareDataVolume: 'ShareDataVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      bizRegionId: 'string',
      nodeIds: { 'type': 'array', 'itemType': 'string' },
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

