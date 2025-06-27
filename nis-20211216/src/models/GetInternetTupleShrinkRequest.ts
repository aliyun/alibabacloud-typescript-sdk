// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInternetTupleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of member accounts.
   */
  accountIds?: number[];
  /**
   * @remarks
   * The beginning of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1684373600099
   */
  beginTime?: number;
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
   * The local IP addresses for filtering.
   */
  cloudIpListShrink?: string;
  /**
   * @remarks
   * The local Internet service provider (ISP).
   * 
   * >  In most cases, the value is Alibaba or Alibaba Cloud.
   * 
   * @example
   * Alibaba
   */
  cloudIsp?: string;
  /**
   * @remarks
   * The local port.
   * 
   * >  This parameter is required only if you set GroupBy to CloudPort.
   * 
   * @example
   * 443
   */
  cloudPort?: string;
  /**
   * @remarks
   * The direction of the Internet traffic that you want to query. Valid values:
   * 
   * *   **in**: inbound
   * *   **out**: outbound
   * 
   * This parameter is required.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1684373700099
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud instance.
   * 
   * @example
   * eip-sample*
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance IDs for filtering.
   */
  instanceListShrink?: string;
  /**
   * @remarks
   * The metric for data ranking. Default value: **ByteCount**. This value indicates that Internet traffic data is ranked by traffic volume.
   * 
   * Valid values:
   * 
   * *   Rtt
   * *   ByteCount
   * *   PacketCount
   * *   RetransmitRate
   * 
   * @example
   * ByteCount
   */
  orderBy?: string;
  /**
   * @remarks
   * The remote city.
   * 
   * >  This parameter is required only if you set **TupleType** to **2** or **5**.
   * 
   * @example
   * Hangzhou
   */
  otherCity?: string;
  /**
   * @remarks
   * The remote country.
   * 
   * >  This parameter is required only if you set **TupleType** to **2** or **5**.
   * 
   * @example
   * China
   */
  otherCountry?: string;
  /**
   * @remarks
   * The remote IP address.
   * 
   * > This parameter is required only when you set **TupleType** to **2** or **5**.
   * 
   * @example
   * 122.112.XX.XX
   */
  otherIp?: string;
  /**
   * @remarks
   * The remote ISP.
   * 
   * > This parameter is required if you want to view the information about the remote ISP.
   * 
   * @example
   * China Mobile
   */
  otherIsp?: string;
  /**
   * @remarks
   * The remote port.
   * 
   * > This parameter is required only when you set **TupleType** to **5**.
   * 
   * @example
   * 40002
   */
  otherPort?: string;
  /**
   * @remarks
   * The protocol number.
   * 
   * > All protocols are supported. This parameter is required only when you set **TupleType** to **5**.
   * 
   * @example
   * 6
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the region for which you want to query the Internet traffic.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The order in which instances are ranked by Internet traffic. Valid values:
   * 
   * *   **desc**: the descending order
   * *   **asc**: the ascending order
   * 
   * @example
   * desc
   */
  sort?: string;
  /**
   * @remarks
   * Specifies top-N traffic data to display. Default value: **10**. This value specifies to display top-10 traffic data by default. Max value: **100**.
   * 
   * @example
   * 10
   */
  topN?: number;
  /**
   * @remarks
   * The type of the tuple. Valid values:
   * 
   * *   **1**: 1-tuple
   * *   **2**: 2-tuple
   * *   **5**: 5-tuple
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  tupleType?: number;
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
      accountIds: 'AccountIds',
      beginTime: 'BeginTime',
      cloudIp: 'CloudIp',
      cloudIpListShrink: 'CloudIpList',
      cloudIsp: 'CloudIsp',
      cloudPort: 'CloudPort',
      direction: 'Direction',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      instanceListShrink: 'InstanceList',
      orderBy: 'OrderBy',
      otherCity: 'OtherCity',
      otherCountry: 'OtherCountry',
      otherIp: 'OtherIp',
      otherIsp: 'OtherIsp',
      otherPort: 'OtherPort',
      protocol: 'Protocol',
      regionId: 'RegionId',
      sort: 'Sort',
      topN: 'TopN',
      tupleType: 'TupleType',
      useMultiAccount: 'UseMultiAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'number' },
      beginTime: 'number',
      cloudIp: 'string',
      cloudIpListShrink: 'string',
      cloudIsp: 'string',
      cloudPort: 'string',
      direction: 'string',
      endTime: 'number',
      instanceId: 'string',
      instanceListShrink: 'string',
      orderBy: 'string',
      otherCity: 'string',
      otherCountry: 'string',
      otherIp: 'string',
      otherIsp: 'string',
      otherPort: 'string',
      protocol: 'string',
      regionId: 'string',
      sort: 'string',
      topN: 'number',
      tupleType: 'number',
      useMultiAccount: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

