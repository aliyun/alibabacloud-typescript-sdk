// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNatTopNRequest extends $dara.Model {
  /**
   * @remarks
   * The beginning of the time range to query in milliseconds. If you do not specify **EndTime**, the point in time specified by **BeginTime** is queried.
   * 
   * This parameter is required.
   * 
   * @example
   * 1638239092000
   */
  beginTime?: number;
  /**
   * @remarks
   * The end of the time range to query in milliseconds. The time range specified by **BeginTime** and **EndTime** cannot exceed **86400000** milliseconds (24 hours).
   * 
   * @example
   * 1638239093000
   */
  endTime?: number;
  /**
   * @remarks
   * Query ranking statistics for a specific IP address. If you specify this parameter, you do not need to specify **TopN** or **OrderBy**.
   * 
   * @example
   * 192.168.156.101
   */
  ip?: string;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-sample***
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The metric that is used for real-time SNAT performance ranking. Valid values:
   * 
   * *   **InBps**: inbound data transfer. Unit: bit/s.
   * *   **OutBps**: outbound data transfer. Unit: bit/s.
   * *   **InPps**: inbound packet forwarding rate. Unit: packets per second.
   * *   **OutPps**: outbound packet forwarding rate. Unit: packets per second.
   * *   **NewSessionPerSecond**: new connection creation rate. Unit: connections per second.
   * *   **ActiveSessionCount**: number of concurrent connections. Unit: connections.
   * 
   * @example
   * InBps
   */
  orderBy?: string;
  /**
   * @remarks
   * The ID of the region in which the NAT gateway is deployed.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The number of entries to return for real-time SNAT performance ranking. Valid values: **1 to 100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  topN?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      ip: 'Ip',
      natGatewayId: 'NatGatewayId',
      orderBy: 'OrderBy',
      regionId: 'RegionId',
      topN: 'TopN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      ip: 'string',
      natGatewayId: 'string',
      orderBy: 'string',
      regionId: 'string',
      topN: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

