// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessInstanceRegionListResponseBody extends $dara.Model {
  regionNoList?: string[];
  /**
   * @example
   * B2841452-CB8D-4F7D-B247-38E1CF7334F8
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

