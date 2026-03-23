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
   * Indicates whether emails have been sent.
   * 
   * @example
   * true
   */
  hasSendMail?: boolean;
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
   * The IP address ID. This is the same as the purchased instance ID.
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
   * The extended information.
   */
  ipExt?: DedicatedIpListResponseBodyIpsIpExt;
  /**
   * @remarks
   * The name of the IP pool to which the IP address belongs.
   * 
   * @example
   * xxx
   */
  ipPoolName?: string;
  /**
   * @remarks
   * The purchase time.
   * 
   * @example
   * 2025-05-12T09:19:20Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the IP address.
   * 
   * @example
   * sold
   */
  status?: string;
  /**
   * @remarks
   * The prefetch status.
   * 
   * @example
   * finish
   */
  warmupStatus?: string;
  /**
   * @remarks
   * The prefetch method.
   * 
   * @example
   * cusSelfManager
   */
  warmupType?: string;
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
   * Indicates whether the next page exists.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The list of IP addresses.
   */
  ips?: DedicatedIpListResponseBodyIps[];
  /**
   * @remarks
   * The number of entries per page.
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
   * The total number of purchased IP addresses.
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

