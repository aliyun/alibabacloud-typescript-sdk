// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPromotionActivitiesForPartnerResponseBodyModuleActivities extends $dara.Model {
  /**
   * @remarks
   * The activity code.
   * 
   * @example
   * acwfradoj5u
   */
  activityCode?: string;
  /**
   * @remarks
   * The activity name.
   * 
   * @example
   * IP网段过滤统计
   */
  activityName?: string;
  /**
   * @remarks
   * The activity type.
   * 
   * @example
   * SCALE_IN
   */
  activityType?: string;
  /**
   * @remarks
   * The consumed quota.
   * 
   * @example
   * 100
   */
  consumedQuota?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-02-14 11:57:51
   */
  createTime?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * onlinehoztestrolebasicallow1755461756261068111(300216315676902267)
   */
  createdBy?: string;
  /**
   * @remarks
   * The eligibility configuration (JSON).
   * 
   * @example
   * {}
   */
  eligibilityConfig?: string;
  /**
   * @remarks
   * The end date.
   * 
   * @example
   * 2026-04-22 10:18:51 +0800
   */
  endDate?: string;
  /**
   * @remarks
   * The offer configuration (JSON).
   * 
   * @example
   * {}
   */
  offerConfig?: string;
  /**
   * @remarks
   * The offer configuration summary.
   * 
   * @example
   * {}
   */
  offerConfigSummary?: string;
  /**
   * @remarks
   * The remaining quota.
   * 
   * @example
   * 10
   */
  remainingQuota?: number;
  /**
   * @remarks
   * The start date.
   * 
   * @example
   * 2026-05-12T16:00:00.000Z
   */
  startDate?: string;
  /**
   * @remarks
   * The activity status.
   * 
   * @example
   * FE_ABORTING
   */
  status?: string;
  /**
   * @remarks
   * The total quota.
   * 
   * @example
   * 10
   */
  totalQuota?: number;
  /**
   * @remarks
   * The touchpoint configuration (JSON).
   * 
   * @example
   * {}
   */
  touchpointConfig?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2025-10-11T21:13:38.164526965+08:00
   */
  updateTime?: string;
  /**
   * @remarks
   * The user who last updated the activity.
   * 
   * @example
   * 123414
   */
  updatedBy?: string;
  /**
   * @remarks
   * The warning threshold.
   * 
   * @example
   * 0
   */
  warningThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      activityCode: 'ActivityCode',
      activityName: 'ActivityName',
      activityType: 'ActivityType',
      consumedQuota: 'ConsumedQuota',
      createTime: 'CreateTime',
      createdBy: 'CreatedBy',
      eligibilityConfig: 'EligibilityConfig',
      endDate: 'EndDate',
      offerConfig: 'OfferConfig',
      offerConfigSummary: 'OfferConfigSummary',
      remainingQuota: 'RemainingQuota',
      startDate: 'StartDate',
      status: 'Status',
      totalQuota: 'TotalQuota',
      touchpointConfig: 'TouchpointConfig',
      updateTime: 'UpdateTime',
      updatedBy: 'UpdatedBy',
      warningThreshold: 'WarningThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityCode: 'string',
      activityName: 'string',
      activityType: 'string',
      consumedQuota: 'number',
      createTime: 'string',
      createdBy: 'string',
      eligibilityConfig: 'string',
      endDate: 'string',
      offerConfig: 'string',
      offerConfigSummary: 'string',
      remainingQuota: 'number',
      startDate: 'string',
      status: 'string',
      totalQuota: 'number',
      touchpointConfig: 'string',
      updateTime: 'string',
      updatedBy: 'string',
      warningThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPromotionActivitiesForPartnerResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The list of promotional activities.
   */
  activities?: ListPromotionActivitiesForPartnerResponseBodyModuleActivities[];
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      activities: 'Activities',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activities: { 'type': 'array', 'itemType': ListPromotionActivitiesForPartnerResponseBodyModuleActivities },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.activities)) {
      $dara.Model.validateArray(this.activities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPromotionActivitiesForPartnerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access denied detail.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether retry is allowed.
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * spring-cloud-b
   */
  appName?: string;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic message.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error arguments.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The number of entries per query.
   * 
   * Valid values: 10 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The response data.
   */
  module?: ListPromotionActivitiesForPartnerResponseBodyModule;
  /**
   * @remarks
   * The token for the next query. This parameter is empty if no more results exist.
   * 
   * @example
   * 0l45bkwM022Dt+rOvPi/oQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6C6B99AC-39EC-5350-874C-204128C905E6
   */
  requestId?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * The root error message.
   * 
   * @example
   * 系统异常
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * Indicates whether the request is processed synchronously.
   * 
   * @example
   * True
   */
  synchro?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      allowRetry: 'AllowRetry',
      appName: 'AppName',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorArgs: 'ErrorArgs',
      maxResults: 'MaxResults',
      module: 'Module',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      rootErrorCode: 'RootErrorCode',
      rootErrorMsg: 'RootErrorMsg',
      synchro: 'Synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      allowRetry: 'boolean',
      appName: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorArgs: { 'type': 'array', 'itemType': 'any' },
      maxResults: 'number',
      module: ListPromotionActivitiesForPartnerResponseBodyModule,
      nextToken: 'string',
      requestId: 'string',
      rootErrorCode: 'string',
      rootErrorMsg: 'string',
      synchro: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.errorArgs)) {
      $dara.Model.validateArray(this.errorArgs);
    }
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

