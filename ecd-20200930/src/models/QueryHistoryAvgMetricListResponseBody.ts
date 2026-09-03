// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHistoryAvgMetricListResponseBodyAvgMetricListSessions extends $dara.Model {
  /**
   * @remarks
   * The end user ID.
   * 
   * @example
   * testUser
   */
  endUserId?: string;
  /**
   * @remarks
   * The time when the session was created. The time is in the ISO 8601 standard in UTC: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2026-04-17T14:51:53Z
   */
  establishmentTime?: string;
  /**
   * @remarks
   * The external username.
   * 
   * @example
   * testUserName
   */
  externalUserName?: string;
  /**
   * @remarks
   * The nickname of the user.
   * 
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
   * @remarks
   * The aggregated metric value.
   * 
   * @example
   * 20
   */
  avgValue?: number;
  /**
   * @remarks
   * The billing method of the cloud desktop. Valid values:
   * 
   * - PostPaid: Pay-as-you-go.
   * - PrePaid: Subscription.
   * 
   * Default value: PostPaid.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 4
   */
  cpu?: number;
  /**
   * @remarks
   * The cloud desktop pool ID.
   * 
   * @example
   * dg-bogo95eob5avnis9k
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The desktop ID.
   * 
   * @example
   * ecd-bx9i0nsjd3zmibnzq
   */
  desktopId?: string;
  /**
   * @remarks
   * The desktop name.
   * 
   * @example
   * C-051
   */
  desktopName?: string;
  /**
   * @remarks
   * The cloud desktop status. Valid values:
   * - Stopped: Stopped.
   * - Starting: Starting.
   * - Rebuilding: Rebuilding.
   * - Running: Running.
   * - Stopping: Stopping.
   * - Expired: Expired.
   * - Deleted: Deleted.
   * - Pending: Pending.
   * 
   * @example
   * Running
   */
  desktopStatus?: string;
  /**
   * @remarks
   * The desktop specification.
   * 
   * @example
   * eds.enterprise_office.8c16g
   */
  desktopType?: string;
  /**
   * @remarks
   * The list of authorized users.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The GPU memory size.
   * 
   * @example
   * 0
   */
  gpuSpec?: string;
  /**
   * @remarks
   * The management flag.
   * 
   * @example
   * 0
   */
  managementFlag?: string;
  /**
   * @remarks
   * The memory size.
   * 
   * @example
   * 2048
   */
  memory?: number;
  /**
   * @remarks
   * Indicates whether the cloud desktop is a multi-resource shared type.
   * 
   * @example
   * true
   */
  multiResource?: boolean;
  /**
   * @remarks
   * The system image type.
   * 
   * @example
   * Winserver2025
   */
  platform?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of session information.
   */
  sessions?: QueryHistoryAvgMetricListResponseBodyAvgMetricListSessions[];
  /**
   * @remarks
   * The payment type.
   * 
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
  /**
   * @remarks
   * The list of average values of monitoring metrics.
   */
  avgMetricList?: QueryHistoryAvgMetricListResponseBodyAvgMetricList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 269BDB16-2CD8-4865-84BD-11C40BC2****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records that meet the conditions.
   * 
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

