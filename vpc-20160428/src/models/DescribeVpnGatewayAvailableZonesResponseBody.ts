// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpnGatewayAvailableZonesResponseBodyAvailableZoneIdList extends $dara.Model {
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  /**
   * @remarks
   * The zone name.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      zoneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

