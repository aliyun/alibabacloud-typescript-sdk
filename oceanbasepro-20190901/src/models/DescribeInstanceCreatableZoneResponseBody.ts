// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceCreatableZoneResponseBodyZoneList } from "./DescribeInstanceCreatableZoneResponseBodyZoneList";


export class DescribeInstanceCreatableZoneResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the cluster is deployed in the zone.
   * 
   * @example
   * EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C
   */
  requestId?: string;
  /**
   * @remarks
   * The operation that you want to perform.   
   * Set the value to **DescribeInstanceCreatableZone**.
   */
  zoneList?: DescribeInstanceCreatableZoneResponseBodyZoneList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zoneList: 'ZoneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zoneList: { 'type': 'array', 'itemType': DescribeInstanceCreatableZoneResponseBodyZoneList },
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

