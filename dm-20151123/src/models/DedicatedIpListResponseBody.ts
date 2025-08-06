// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DedicatedIpListResponseBodyIpsIpExt extends $dara.Model {
  /**
   * @remarks
   * Whether auto-renewal is enabled
   * 
   * @example
   * false
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * Whether an email has been sent
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
   * Expiration time
   * 
   * @example
   * 2025-06-12T09:19:20Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * IP ID, consistent with the purchased instance ID
   * 
   * @example
   * xxx
   */
  id?: string;
  /**
   * @remarks
   * Purchased instance ID
   * 
   * @example
   * xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * IP address
   * 
   * @example
   * xxx
   */
  ip?: string;
  /**
   * @remarks
   * Extended information
   */
  ipExt?: DedicatedIpListResponseBodyIpsIpExt;
  /**
   * @remarks
   * Name of the IP pool
   * 
   * @example
   * xxx
   */
  ipPoolName?: string;
  /**
   * @remarks
   * Purchase time
   * 
   * @example
   * 2025-05-12T09:19:20Z
   */
  startTime?: string;
  /**
   * @remarks
   * IP status
   * 
   * @example
   * sold
   */
  status?: string;
  /**
   * @remarks
   * Warm-up status
   * 
   * @example
   * finish
   */
  warmupStatus?: string;
  /**
   * @remarks
   * Warm-up method
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
   * Current page
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Whether there is a next page
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * IP list
   */
  ips?: DedicatedIpListResponseBodyIps[];
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * xxx
   */
  requestId?: string;
  /**
   * @remarks
   * Total amount of purchased IP data
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

