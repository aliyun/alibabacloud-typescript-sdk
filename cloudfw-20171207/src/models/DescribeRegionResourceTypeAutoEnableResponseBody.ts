// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionResourceTypeAutoEnableResponseBody extends $dara.Model {
  regionResourceAutoEnable?: { [key: string]: {[key: string]: any} };
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B2841452-CB8D-4F7D-B247-38E1CF7334F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regionResourceAutoEnable: 'RegionResourceAutoEnable',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionResourceAutoEnable: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.regionResourceAutoEnable) {
      $dara.Model.validateMap(this.regionResourceAutoEnable);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

