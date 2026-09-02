// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetBandwidthResponseBodyNetBandwidthList extends $dara.Model {
  /**
   * @remarks
   * The bandwidth value, in Mbps.
   * 
   * @example
   * 5
   */
  bandwidth?: number;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2026-08-01 10:20:30
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the instance was last modified.
   * 
   * @example
   * 2026-08-02 15:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * vpc-bp1234567890
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * production-vpc
   */
  instanceName?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * VPC
   */
  netType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      netType: 'NetType',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      instanceId: 'string',
      instanceName: 'string',
      netType: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetBandwidthResponseBody extends $dara.Model {
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
   * The list of bandwidth configurations.
   */
  netBandwidthList?: ListNetBandwidthResponseBodyNetBandwidthList[];
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
   * Id of the request
   * 
   * @example
   * D6707286-A50E-57B1-B2CF-EFAC59E850D8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      netBandwidthList: 'NetBandwidthList',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      netBandwidthList: { 'type': 'array', 'itemType': ListNetBandwidthResponseBodyNetBandwidthList },
      pageSize: 'number',
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.netBandwidthList)) {
      $dara.Model.validateArray(this.netBandwidthList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

