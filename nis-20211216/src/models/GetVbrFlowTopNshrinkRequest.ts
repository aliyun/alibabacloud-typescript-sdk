// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVbrFlowTopNShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of member accounts.
   */
  accountIdsShrink?: string;
  /**
   * @remarks
   * The CEN connection ID.
   * 
   * @example
   * tr-attach-dnv870gmqzmb5u****
   */
  attachmentId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. The maximum time range that you can query is 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 1638239092000
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
   * The local IP address.
   * 
   * @example
   * 112.74.XX.XX
   */
  cloudIp?: string;
  /**
   * @remarks
   * The local port.
   * 
   * >  This parameter is required only if you set **GroupBy** to **CloudPort**.
   * 
   * @example
   * 443
   */
  cloudPort?: string;
  /**
   * @remarks
   * The direction of the hybrid cloud traffic in the local regions or for the local IP addresses. Valid values:
   * 
   * *   **in**: traffic from a data center to Alibaba Cloud
   * *   **out**: traffic from Alibaba Cloud to a data center
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
   * The dimension for ranking hybrid cloud traffic data. The value of this parameter is case-sensitive. Valid values:
   * 
   * *   **1Tuple**: queries the rankings of hybrid cloud traffic data for the Cloud Enterprise Network (CEN) instances, CEN connections, virtual border routers (VBRs), and IP addresses.
   * *   **2Tuple**: queries the rankings of hybrid cloud traffic data for the local and remote IP addresses.
   * *   **5Tuple**: queries the rankings of hybrid cloud traffic data for the local and remote IP addresses, local and remote ports, and protocols.
   * *   **CloudPort**: queries the rankings of hybrid cloud traffic data for the local ports.
   * *   **OtherPort**: queries the rankings of hybrid cloud traffic data for the remote ports.
   * *   **Protocol**: queries the rankings of hybrid cloud traffic data for the protocols.
   * 
   * This parameter is required.
   * 
   * @example
   * 1Tuple
   */
  groupBy?: string;
  /**
   * @remarks
   * The metric for ranking hybrid cloud traffic data. Default value: Bytes. This value specifies that hybrid cloud traffic data is ranked by traffic volumes.
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
   * >  This parameter is required only if you set **GroupBy** to **OtherPort**.
   * 
   * @example
   * 40002
   */
  otherPort?: string;
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
   * The local region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The order for ranking hybrid cloud traffic data. Valid values:
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
   * Specifies top-N traffic data to display. Default value: **10**. This value specifies that top-10 traffic data is displayed by default. Maximum value: **100**.
   * 
   * @example
   * 10
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
  /**
   * @remarks
   * The ID of the VBR that is associated with the Express Connect circuit.
   * 
   * @example
   * vbr-k1atj46citwuek42j****
   */
  virtualBorderRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      accountIdsShrink: 'AccountIds',
      attachmentId: 'AttachmentId',
      beginTime: 'BeginTime',
      cenId: 'CenId',
      cloudIp: 'CloudIp',
      cloudPort: 'CloudPort',
      direction: 'Direction',
      endTime: 'EndTime',
      groupBy: 'GroupBy',
      orderBy: 'OrderBy',
      otherIp: 'OtherIp',
      otherPort: 'OtherPort',
      protocol: 'Protocol',
      regionId: 'RegionId',
      sort: 'Sort',
      topN: 'TopN',
      useMultiAccount: 'UseMultiAccount',
      virtualBorderRouterId: 'VirtualBorderRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIdsShrink: 'string',
      attachmentId: 'string',
      beginTime: 'number',
      cenId: 'string',
      cloudIp: 'string',
      cloudPort: 'string',
      direction: 'string',
      endTime: 'number',
      groupBy: 'string',
      orderBy: 'string',
      otherIp: 'string',
      otherPort: 'string',
      protocol: 'string',
      regionId: 'string',
      sort: 'string',
      topN: 'number',
      useMultiAccount: 'boolean',
      virtualBorderRouterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

