// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DedicatedIpListResponseBodyIpsIpExt extends $dara.Model {
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled.
   * 
   * @example
   * false
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * Indicates whether an email has been sent.
   * 
   * @example
   * true
   */
  hasSendMail?: boolean;
  /**
   * @remarks
   * The last time the warm-up status changed.
   * 
   * @example
   * 2025-08-07T07:23:49.329Z
   */
  lastWarmUpTypeChangedTime?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      hasSendMail: 'HasSendMail',
      lastWarmUpTypeChangedTime: 'LastWarmUpTypeChangedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'boolean',
      hasSendMail: 'boolean',
      lastWarmUpTypeChangedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DedicatedIpListResponseBodyIps extends $dara.Model {
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2025-06-12T09:19:20Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The ID of the IP address, which is the same as the ID of the purchased instance.
   * 
   * @example
   * xxx
   */
  id?: string;
  /**
   * @remarks
   * The ID of the purchased instance.
   * 
   * @example
   * xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * xxx
   */
  ip?: string;
  /**
   * @remarks
   * Extended properties.
   */
  ipExt?: DedicatedIpListResponseBodyIpsIpExt;
  /**
   * @remarks
   * The name of the IP pool to which the IP belongs.
   * 
   * @example
   * xxx
   */
  ipPoolName?: string;
  /**
   * @remarks
   * The time when the IP was purchased.
   * 
   * @example
   * 2025-05-12T09:19:20Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the IP.
   * 
   * @example
   * sold
   */
  status?: string;
  /**
   * @remarks
   * The warm-up status.
   * 
   * @example
   * finish
   */
  warmupStatus?: string;
  /**
   * @remarks
   * The warm-up method.
   * 
   * @example
   * cusSelfManager
   */
  warmupType?: string;
  /**
   * @remarks
   * The ID of the zone where the IP address is located.
   * 
   * - ap-southeast-1a
   * 
   * - ap-southeast-1b
   * 
   * - cn-hangzhou-k
   * 
   * - cn-shanghai-l
   * 
   * - eu-central-1a
   * 
   * - eu-central-1b
   * 
   * - us-east-1a
   * 
   * - us-east-1b
   * 
   * @example
   * ap-southeast-1a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'ExpiredTime',
      id: 'Id',
      instanceId: 'InstanceId',
      ip: 'Ip',
      ipExt: 'IpExt',
      ipPoolName: 'IpPoolName',
      startTime: 'StartTime',
      status: 'Status',
      warmupStatus: 'WarmupStatus',
      warmupType: 'WarmupType',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'string',
      id: 'string',
      instanceId: 'string',
      ip: 'string',
      ipExt: DedicatedIpListResponseBodyIpsIpExt,
      ipPoolName: 'string',
      startTime: 'string',
      status: 'string',
      warmupStatus: 'string',
      warmupType: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.ipExt && typeof (this.ipExt as any).validate === 'function') {
      (this.ipExt as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DedicatedIpListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Indicates whether another page of results is available.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The list of IPs.
   */
  ips?: DedicatedIpListResponseBodyIps[];
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxx
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of purchased IPs.
   * 
   * @example
   * 5
   */
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      hasMore: 'HasMore',
      ips: 'Ips',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      hasMore: 'boolean',
      ips: { 'type': 'array', 'itemType': DedicatedIpListResponseBodyIps },
      pageSize: 'number',
      requestId: 'string',
      totalCounts: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ips)) {
      $dara.Model.validateArray(this.ips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

