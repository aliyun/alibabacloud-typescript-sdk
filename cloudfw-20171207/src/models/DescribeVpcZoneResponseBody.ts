// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcZoneResponseBodyZoneList } from "./DescribeVpcZoneResponseBodyZoneList";


export class DescribeVpcZoneResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 694DFBF3-C060-529F-92D0-7FC7E0DA1E21
   */
  requestId?: string;
  /**
   * @remarks
   * The zones.
   */
  zoneList?: DescribeVpcZoneResponseBodyZoneList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zoneList: 'ZoneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zoneList: { 'type': 'array', 'itemType': DescribeVpcZoneResponseBodyZoneList },
    };
  }

  validate() {
    if(Array.isArray(this.zoneList)) {
      $dara.Model.validateArray(this.zoneList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

