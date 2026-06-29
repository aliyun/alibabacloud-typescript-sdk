// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertNotificationsRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The list of alert reasons.
   */
  alertReasonList?: string[];
  /**
   * @remarks
   * The list of push channel types.
   */
  channelTypeList?: string[];
  /**
   * @remarks
   * The list of custom message channel IDs.
   */
  customChannelIdList?: string[];
  /**
   * @remarks
   * The keyword for the query.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The list of monitored item IDs.
   */
  monitoredItemIdList?: string[];
  /**
   * @remarks
   * The end time of the push.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-11-27 13:47:00
   */
  notifyEndTime?: string;
  /**
   * @remarks
   * The start time of the push.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-11-16 00:00:00
   */
  notifyStartTime?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The source system. Valid values:
   * 
   * - ALL: all.
   * - DQE: data quality.
   * - OS: data service.
   * - STREAM: real-time computing.
   * - VDM_BATCH: offline computing.
   * - SOP: O&M platform.
   * - REAL_TIME_PIPELINE: real-time integration.
   * - KGB: baseline monitoring.
   * 
   * And more.
   * 
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  sourceSystem?: string;
  /**
   * @remarks
   * The list of push statuses.
   */
  statusList?: string[];
  /**
   * @remarks
   * The list of push recipient IDs.
   */
  userIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      alertReasonList: 'AlertReasonList',
      channelTypeList: 'ChannelTypeList',
      customChannelIdList: 'CustomChannelIdList',
      keyword: 'Keyword',
      monitoredItemIdList: 'MonitoredItemIdList',
      notifyEndTime: 'NotifyEndTime',
      notifyStartTime: 'NotifyStartTime',
      page: 'Page',
      pageSize: 'PageSize',
      sourceSystem: 'SourceSystem',
      statusList: 'StatusList',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertReasonList: { 'type': 'array', 'itemType': 'string' },
      channelTypeList: { 'type': 'array', 'itemType': 'string' },
      customChannelIdList: { 'type': 'array', 'itemType': 'string' },
      keyword: 'string',
      monitoredItemIdList: { 'type': 'array', 'itemType': 'string' },
      notifyEndTime: 'string',
      notifyStartTime: 'string',
      page: 'number',
      pageSize: 'number',
      sourceSystem: 'string',
      statusList: { 'type': 'array', 'itemType': 'string' },
      userIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.alertReasonList)) {
      $dara.Model.validateArray(this.alertReasonList);
    }
    if(Array.isArray(this.channelTypeList)) {
      $dara.Model.validateArray(this.channelTypeList);
    }
    if(Array.isArray(this.customChannelIdList)) {
      $dara.Model.validateArray(this.customChannelIdList);
    }
    if(Array.isArray(this.monitoredItemIdList)) {
      $dara.Model.validateArray(this.monitoredItemIdList);
    }
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    if(Array.isArray(this.userIdList)) {
      $dara.Model.validateArray(this.userIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertNotificationsRequest extends $dara.Model {
  /**
   * @remarks
   * The query conditions.
   */
  listQuery?: ListAlertNotificationsRequestListQuery;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListAlertNotificationsRequestListQuery,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.listQuery && typeof (this.listQuery as any).validate === 'function') {
      (this.listQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

