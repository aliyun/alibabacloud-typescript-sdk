// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDDoSInstancesResponseBodyInstanceInfo extends $dara.Model {
  /**
   * @remarks
   * Time when the instance was purchased
   * 
   * @example
   * 2025-07-01T07:59:07Z
   */
  createTime?: string;
  /**
   * @remarks
   * DDoS protection specification for the Chinese mainland
   * 
   * @example
   * cn_300
   */
  DDoSBurstableDomesticProtection?: string;
  /**
   * @remarks
   * DDoS protection specification for regions outside the Chinese mainland
   * 
   * @example
   * overseas_300
   */
  DDoSBurstableOverseasProtection?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * sp-ddddxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Scheduled release time
   * 
   * @example
   * 2026-03-25T16:00:00Z
   */
  reserveReleaseTime?: string;
  /**
   * @remarks
   * Associated site package instance ID
   * 
   * @example
   * esa-site-b0s6kmx0r0n4
   */
  siteInstanceId?: string;
  /**
   * @remarks
   * Instance status. Valid values:
   * 
   * - **online**: Normal service status.
   * 
   * - **offline**: Expired but not overdue. Instance is unavailable.
   * 
   * - **disable**: Released.
   * 
   * - **overdue**: Service suspended due to overdue payment.
   * 
   * @example
   * online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      DDoSBurstableDomesticProtection: 'DDoSBurstableDomesticProtection',
      DDoSBurstableOverseasProtection: 'DDoSBurstableOverseasProtection',
      instanceId: 'InstanceId',
      reserveReleaseTime: 'ReserveReleaseTime',
      siteInstanceId: 'SiteInstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      DDoSBurstableDomesticProtection: 'string',
      DDoSBurstableOverseasProtection: 'string',
      instanceId: 'string',
      reserveReleaseTime: 'string',
      siteInstanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDDoSInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Instance details
   */
  instanceInfo?: ListDDoSInstancesResponseBodyInstanceInfo[];
  /**
   * @remarks
   * Page number. Default: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of entries per page
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 9F1DC265-BF10-5C9C-B607-760265C5F365
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of entries
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * Total number of pages
   * 
   * @example
   * 2
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      instanceInfo: 'InstanceInfo',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceInfo: { 'type': 'array', 'itemType': ListDDoSInstancesResponseBodyInstanceInfo },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceInfo)) {
      $dara.Model.validateArray(this.instanceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

