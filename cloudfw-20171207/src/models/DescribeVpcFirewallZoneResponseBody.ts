// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallZoneResponseBodyZoneList extends $dara.Model {
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-c
   */
  zoneId?: string;
  /**
   * @remarks
   * The name of the zone.
   * 
   * @example
   * Hangzhou Zone C
   */
  localName?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      localName: 'LocalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      localName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallZoneResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 337A4DBA-8A01-5E9C-99CA-84293E13****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of zones.
   */
  zoneList?: DescribeVpcFirewallZoneResponseBodyZoneList[][];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zoneList: 'ZoneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zoneList: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': DescribeVpcFirewallZoneResponseBodyZoneList } },
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

