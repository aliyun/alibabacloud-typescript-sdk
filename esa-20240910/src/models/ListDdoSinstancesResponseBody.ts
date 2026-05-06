// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDDoSInstancesResponseBodyInstanceInfo extends $dara.Model {
  /**
   * @example
   * 2025-07-01T07:59:07Z
   */
  createTime?: string;
  /**
   * @example
   * cn_300
   */
  DDoSBurstableDomesticProtection?: string;
  /**
   * @example
   * overseas_300
   */
  DDoSBurstableOverseasProtection?: string;
  /**
   * @example
   * sp-ddddxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * 2026-03-25T16:00:00Z
   */
  reserveReleaseTime?: string;
  /**
   * @example
   * esa-site-b0s6kmx0r0n4
   */
  siteInstanceId?: string;
  /**
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
  instanceInfo?: ListDDoSInstancesResponseBodyInstanceInfo[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9F1DC265-BF10-5C9C-B607-760265C5F365
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  /**
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

