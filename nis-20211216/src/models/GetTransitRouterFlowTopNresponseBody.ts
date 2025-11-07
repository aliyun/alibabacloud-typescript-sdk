// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTransitRouterFlowTopNResponseBodyTransitRouterFlowTopN extends $dara.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * 118639953821xxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The ID of the CEN bandwidth plan.
   * 
   * @example
   * cenbwp-ia8kw1zjv4hyal****
   */
  bandwithPackageId?: string;
  /**
   * @remarks
   * The total volume of traffic in the specified time range.
   * 
   * @example
   * 188
   */
  bytes?: number;
  /**
   * @remarks
   * The CEN instance ID.
   * 
   * @example
   * cen-ia8kw1zjv4hyal****
   */
  cenId?: string;
  /**
   * @remarks
   * The end of the time range that you queried. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-01-31T06:40:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The remote IP address.
   * 
   * @example
   * 47.216.XX.XX
   */
  otherIp?: string;
  /**
   * @remarks
   * The remote port.
   * 
   * @example
   * 53470
   */
  otherPort?: string;
  /**
   * @remarks
   * The remote region where the **remote IP address** resides.
   * 
   * @example
   * ap-southeast-1
   */
  otherRegion?: string;
  /**
   * @remarks
   * The total number of packets in the specified time range.
   * 
   * @example
   * 88
   */
  packets?: number;
  /**
   * @remarks
   * The protocol number.
   * 
   * @example
   * 6
   */
  protocol?: string;
  /**
   * @remarks
   * The beginning of the time range that you queried. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-01-31T05:40:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The local IP address.
   * 
   * @example
   * 1.8.XX.XX
   */
  thisIp?: string;
  /**
   * @remarks
   * The local port.
   * 
   * @example
   * 80
   */
  thisPort?: string;
  /**
   * @remarks
   * The local region where the **local IP address** resides.
   * 
   * @example
   * cn-shanghai
   */
  thisRegion?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      bandwithPackageId: 'BandwithPackageId',
      bytes: 'Bytes',
      cenId: 'CenId',
      endTime: 'EndTime',
      otherIp: 'OtherIp',
      otherPort: 'OtherPort',
      otherRegion: 'OtherRegion',
      packets: 'Packets',
      protocol: 'Protocol',
      startTime: 'StartTime',
      thisIp: 'ThisIp',
      thisPort: 'ThisPort',
      thisRegion: 'ThisRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      bandwithPackageId: 'string',
      bytes: 'number',
      cenId: 'string',
      endTime: 'string',
      otherIp: 'string',
      otherPort: 'string',
      otherRegion: 'string',
      packets: 'number',
      protocol: 'string',
      startTime: 'string',
      thisIp: 'string',
      thisPort: 'string',
      thisRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTransitRouterFlowTopNResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D5E98683-355B-5867-8D3D-A24755F6895B
   */
  requestId?: string;
  /**
   * @remarks
   * The ranking result of inter-region traffic data.
   */
  transitRouterFlowTopN?: GetTransitRouterFlowTopNResponseBodyTransitRouterFlowTopN[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transitRouterFlowTopN: 'TransitRouterFlowTopN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transitRouterFlowTopN: { 'type': 'array', 'itemType': GetTransitRouterFlowTopNResponseBodyTransitRouterFlowTopN },
    };
  }

  validate() {
    if(Array.isArray(this.transitRouterFlowTopN)) {
      $dara.Model.validateArray(this.transitRouterFlowTopN);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

