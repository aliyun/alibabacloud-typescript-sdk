// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTransitRouterFlowTopNShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the member accounts.
   */
  accountIdsShrink?: string;
  /**
   * @remarks
   * The ID of the CEN bandwidth plan.
   * 
   * @example
   * cenbwp-ia8kw1zjv4hyal*****
   */
  bandwithPackageId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. The maximum time range that you can query is 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 1684373600099
   */
  beginTime?: number;
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
   * The direction of the inter-region traffic in the local regions or for the local IP addresses. Valid values:
   * 
   * *   **in**: inbound traffic
   * *   **out**: outbound traffic
   * 
   * This parameter is required.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. The maximum time range that you can query is 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 1638239093000
   */
  endTime?: number;
  /**
   * @remarks
   * The dimension for ranking inter-region traffic data. The value of this parameter is case-sensitive. Valid values:
   * 
   * *   **1Tuple**: queries the rankings of inter-region traffic data for the local regions, Cloud Enterprise Network (CEN) instances, and IP addresses.
   * *   **2Tuple**: queries the rankings of inter-region traffic data for the local and remote regions, and the local and remote IP addresses.
   * *   **5Tuple**: queries the rankings of inter-region traffic data for the local and remote IP addresses, local and remote ports, and protocols.
   * *   **Cen**: queries the rankings of inter-region traffic data for CEN instances.
   * *   **RegionPair**: queries the rankings of inter-region traffic data for the local and remote regions.
   * *   **Port**: queries the rankings of inter-region traffic data for the local and remote ports.
   * *   **Protocol**: queries the rankings of inter-region traffic data for the protocols.
   * 
   * This parameter is required.
   * 
   * @example
   * 1Tuple
   */
  groupBy?: string;
  /**
   * @remarks
   * The metric for ranking inter-region traffic data. Default value: Bytes. This value specifies that inter-region traffic data is ranked by traffic volume.
   * 
   * @example
   * Bytes
   */
  orderBy?: string;
  /**
   * @remarks
   * The remote IP address.
   * 
   * @example
   * 122.112.XX.XX
   */
  otherIp?: string;
  /**
   * @remarks
   * The remote port.
   * 
   * @example
   * 10869
   */
  otherPort?: string;
  /**
   * @remarks
   * The remote region.
   * 
   * @example
   * ap-southeast-1
   */
  otherRegion?: string;
  /**
   * @remarks
   * The protocol number.
   * 
   * >  All protocols are supported. This parameter is required only if you set **GroupBy** to **5Tuple** or **Protocol**.
   * 
   * @example
   * 6
   */
  protocol?: string;
  /**
   * @remarks
   * The order for ranking inter-region traffic data. Valid values:
   * 
   * *   **desc**: descending order
   * *   **asc**: ascending order
   * 
   * @example
   * desc
   */
  sort?: string;
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
  /**
   * @remarks
   * Specifies the maximum number of data entries to display. Default value: **10**. Maximum value: 100.
   * 
   * @example
   * 20
   */
  topN?: number;
  /**
   * @remarks
   * Specifies whether to enable the multi-account management feature. Default value: **false**. This value specifies that the multi-account management feature is disabled.
   * 
   * >  By default, the multi-account management feature is not available. If you want to use this feature, contact your account manager to apply for permissions.
   * 
   * @example
   * false
   */
  useMultiAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountIdsShrink: 'AccountIds',
      bandwithPackageId: 'BandwithPackageId',
      beginTime: 'BeginTime',
      cenId: 'CenId',
      direction: 'Direction',
      endTime: 'EndTime',
      groupBy: 'GroupBy',
      orderBy: 'OrderBy',
      otherIp: 'OtherIp',
      otherPort: 'OtherPort',
      otherRegion: 'OtherRegion',
      protocol: 'Protocol',
      sort: 'Sort',
      thisIp: 'ThisIp',
      thisPort: 'ThisPort',
      thisRegion: 'ThisRegion',
      topN: 'TopN',
      useMultiAccount: 'UseMultiAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIdsShrink: 'string',
      bandwithPackageId: 'string',
      beginTime: 'number',
      cenId: 'string',
      direction: 'string',
      endTime: 'number',
      groupBy: 'string',
      orderBy: 'string',
      otherIp: 'string',
      otherPort: 'string',
      otherRegion: 'string',
      protocol: 'string',
      sort: 'string',
      thisIp: 'string',
      thisPort: 'string',
      thisRegion: 'string',
      topN: 'number',
      useMultiAccount: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

