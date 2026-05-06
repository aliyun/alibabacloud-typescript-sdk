// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHistoryAvgMetricListResponseBodyAvgMetricListSessions extends $dara.Model {
  /**
   * @example
   * testUser
   */
  endUserId?: string;
  /**
   * @example
   * 2026-04-17T14:51:53Z
   */
  establishmentTime?: string;
  /**
   * @example
   * testUserName
   */
  externalUserName?: string;
  /**
   * @example
   * sz-sygc-07-03
   */
  nickName?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      establishmentTime: 'EstablishmentTime',
      externalUserName: 'ExternalUserName',
      nickName: 'NickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      establishmentTime: 'string',
      externalUserName: 'string',
      nickName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHistoryAvgMetricListResponseBodyAvgMetricList extends $dara.Model {
  /**
   * @example
   * 20
   */
  avgValue?: number;
  /**
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @example
   * 4
   */
  cpu?: number;
  /**
   * @example
   * dg-bogo95eob5avnis9k
   */
  desktopGroupId?: string;
  /**
   * @example
   * ecd-bx9i0nsjd3zmibnzq
   */
  desktopId?: string;
  /**
   * @example
   * C-051
   */
  desktopName?: string;
  /**
   * @example
   * Running
   */
  desktopStatus?: string;
  /**
   * @example
   * eds.enterprise_office.8c16g
   */
  desktopType?: string;
  endUserIds?: string[];
  /**
   * @example
   * 0
   */
  gpuSpec?: string;
  /**
   * @example
   * 0
   */
  managementFlag?: string;
  /**
   * @example
   * 2048
   */
  memory?: number;
  /**
   * @example
   * true
   */
  multiResource?: boolean;
  /**
   * @example
   * Winserver2025
   */
  platform?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  sessions?: QueryHistoryAvgMetricListResponseBodyAvgMetricListSessions[];
  /**
   * @example
   * monthPackage
   */
  subPayType?: string;
  static names(): { [key: string]: string } {
    return {
      avgValue: 'AvgValue',
      chargeType: 'ChargeType',
      cpu: 'Cpu',
      desktopGroupId: 'DesktopGroupId',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      desktopType: 'DesktopType',
      endUserIds: 'EndUserIds',
      gpuSpec: 'GpuSpec',
      managementFlag: 'ManagementFlag',
      memory: 'Memory',
      multiResource: 'MultiResource',
      platform: 'Platform',
      regionId: 'RegionId',
      sessions: 'Sessions',
      subPayType: 'SubPayType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgValue: 'number',
      chargeType: 'string',
      cpu: 'number',
      desktopGroupId: 'string',
      desktopId: 'string',
      desktopName: 'string',
      desktopStatus: 'string',
      desktopType: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      gpuSpec: 'string',
      managementFlag: 'string',
      memory: 'number',
      multiResource: 'boolean',
      platform: 'string',
      regionId: 'string',
      sessions: { 'type': 'array', 'itemType': QueryHistoryAvgMetricListResponseBodyAvgMetricListSessions },
      subPayType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endUserIds)) {
      $dara.Model.validateArray(this.endUserIds);
    }
    if(Array.isArray(this.sessions)) {
      $dara.Model.validateArray(this.sessions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHistoryAvgMetricListResponseBody extends $dara.Model {
  avgMetricList?: QueryHistoryAvgMetricListResponseBodyAvgMetricList[];
  /**
   * @example
   * 269BDB16-2CD8-4865-84BD-11C40BC2****
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      avgMetricList: 'AvgMetricList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgMetricList: { 'type': 'array', 'itemType': QueryHistoryAvgMetricListResponseBodyAvgMetricList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.avgMetricList)) {
      $dara.Model.validateArray(this.avgMetricList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

