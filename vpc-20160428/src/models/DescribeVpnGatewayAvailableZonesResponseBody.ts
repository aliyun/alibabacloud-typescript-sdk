// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpnGatewayAvailableZonesResponseBodyAvailableZoneIdList } from "./DescribeVpnGatewayAvailableZonesResponseBodyAvailableZoneIdList";


export class DescribeVpnGatewayAvailableZonesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The zones.
   */
  availableZoneIdList?: DescribeVpnGatewayAvailableZonesResponseBodyAvailableZoneIdList[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 29784052-931F-543D-A612-36B3838163FA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZoneIdList: 'AvailableZoneIdList',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZoneIdList: { 'type': 'array', 'itemType': DescribeVpnGatewayAvailableZonesResponseBodyAvailableZoneIdList },
      regionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.availableZoneIdList)) {
      $dara.Model.validateArray(this.availableZoneIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

