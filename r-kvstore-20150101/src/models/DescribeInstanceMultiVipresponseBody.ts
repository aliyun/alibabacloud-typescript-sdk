// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceMultiVIPResponseBodyMultiVIPList extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * r-bp1p4pzsr2rtubcvns-conn1.redis.rds.aliyuncs.com
   */
  connectionString?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMultiVIPResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP address of the primary DNS server.
   * 
   * @example
   * r-8vb30e8n0m4nvu7tff.redis.zhangbei.rds.aliyuncs.com
   */
  masterDns?: string;
  /**
   * @remarks
   * The list of IP addresses corresponding to all LBs of the current instance.
   */
  masterDnsRecord?: string[];
  /**
   * @remarks
   * The maximum number of VIPs that can be created.
   * 
   * @example
   * 2
   */
  maxQuota?: number;
  /**
   * @remarks
   * The list of multiple LB VIPs.
   */
  multiVIPList?: DescribeInstanceMultiVIPResponseBodyMultiVIPList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABAF95F6-35C1-4177-AF3A-70969EBD****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      masterDns: 'MasterDns',
      masterDnsRecord: 'MasterDnsRecord',
      maxQuota: 'MaxQuota',
      multiVIPList: 'MultiVIPList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterDns: 'string',
      masterDnsRecord: { 'type': 'array', 'itemType': 'string' },
      maxQuota: 'number',
      multiVIPList: { 'type': 'array', 'itemType': DescribeInstanceMultiVIPResponseBodyMultiVIPList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.masterDnsRecord)) {
      $dara.Model.validateArray(this.masterDnsRecord);
    }
    if(Array.isArray(this.multiVIPList)) {
      $dara.Model.validateArray(this.multiVIPList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

