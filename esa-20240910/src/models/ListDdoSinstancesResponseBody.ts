// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDDoSInstancesResponseBodyInstanceInfo extends $dara.Model {
  /**
   * @remarks
   * The purchase time of the instance. The time is in ISO 8601 format and displayed in UTC. The format is yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2025-07-01T07:59:07Z
   */
  createTime?: string;
  /**
   * @remarks
   * The specifications of the DDoS instance in the Chinese mainland.
   * 
   * @example
   * cn_300
   */
  DDoSBurstableDomesticProtection?: string;
  /**
   * @remarks
   * The specifications of the DDoS instance outside the Chinese mainland.
   * 
   * @example
   * overseas_300
   */
  DDoSBurstableOverseasProtection?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * sp-ddddxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The scheduled release time. The time is in ISO 8601 format and displayed in UTC. The format is yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2026-03-25T16:00:00Z
   */
  reserveReleaseTime?: string;
  /**
   * @remarks
   * The ID of the associated site plan instance.
   * 
   * @example
   * esa-site-b0s6kmx0r0n4
   */
  siteInstanceId?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * - **online**: The instance is running normally.
   * - **offline**: The instance has expired but is not overdue, and is unavailable.
   * - **disable**: The instance has been released.
   * - **overdue**: The instance is suspended due to overdue payment.
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
   * The instance details.
   */
  instanceInfo?: ListDDoSInstancesResponseBodyInstanceInfo[];
  /**
   * @remarks
   * The current page number, which is the same as the PageNumber request parameter.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9F1DC265-BF10-5C9C-B607-760265C5F365
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
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

