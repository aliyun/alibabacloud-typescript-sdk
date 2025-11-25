// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallAssetRegionListResponseBody extends $dara.Model {
  regionNoList?: string[];
  /**
   * @example
   * 00933CCB-65A4-5E51-B180-3D154281****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regionNoList: 'RegionNoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionNoList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regionNoList)) {
      $dara.Model.validateArray(this.regionNoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

