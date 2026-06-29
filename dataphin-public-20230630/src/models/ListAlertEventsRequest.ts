// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertEventsRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The end date of the alert.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-11-27 13:47:00
   */
  alertEndTime?: string;
  /**
   * @remarks
   * The list of alert object types.
   */
  alertObjectTypeList?: string[];
  /**
   * @remarks
   * The list of alert reasons.
   */
  alertReasonList?: string[];
  /**
   * @remarks
   * The start date of the alert.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-11-16 00:00:00
   */
  alertStartTime?: string;
  /**
   * @remarks
   * The list of business units.
   */
  bizNameList?: string[];
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
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of projects.
   */
  projectNameList?: string[];
  /**
   * @remarks
   * The source system. Valid values:
   * 
   * - ALL: all
   * - DQE: data quality
   * - OS: data service
   * - STREAM: real-time computing
   * - VDM_BATCH: offline computing
   * - SOP: O&M platform
   * - REAL_TIME_PIPELINE: real-time integration
   * - KGB: baseline monitoring
   * 
   * and more.
   * 
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  sourceSystem?: string;
  /**
   * @remarks
   * The list of alert statuses.
   */
  statusList?: string[];
  /**
   * @remarks
   * The list of alert contact IDs.
   */
  userIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      alertEndTime: 'AlertEndTime',
      alertObjectTypeList: 'AlertObjectTypeList',
      alertReasonList: 'AlertReasonList',
      alertStartTime: 'AlertStartTime',
      bizNameList: 'BizNameList',
      keyword: 'Keyword',
      monitoredItemIdList: 'MonitoredItemIdList',
      page: 'Page',
      pageSize: 'PageSize',
      projectNameList: 'ProjectNameList',
      sourceSystem: 'SourceSystem',
      statusList: 'StatusList',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEndTime: 'string',
      alertObjectTypeList: { 'type': 'array', 'itemType': 'string' },
      alertReasonList: { 'type': 'array', 'itemType': 'string' },
      alertStartTime: 'string',
      bizNameList: { 'type': 'array', 'itemType': 'string' },
      keyword: 'string',
      monitoredItemIdList: { 'type': 'array', 'itemType': 'string' },
      page: 'number',
      pageSize: 'number',
      projectNameList: { 'type': 'array', 'itemType': 'string' },
      sourceSystem: 'string',
      statusList: { 'type': 'array', 'itemType': 'string' },
      userIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.alertObjectTypeList)) {
      $dara.Model.validateArray(this.alertObjectTypeList);
    }
    if(Array.isArray(this.alertReasonList)) {
      $dara.Model.validateArray(this.alertReasonList);
    }
    if(Array.isArray(this.bizNameList)) {
      $dara.Model.validateArray(this.bizNameList);
    }
    if(Array.isArray(this.monitoredItemIdList)) {
      $dara.Model.validateArray(this.monitoredItemIdList);
    }
    if(Array.isArray(this.projectNameList)) {
      $dara.Model.validateArray(this.projectNameList);
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

export class ListAlertEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The query request.
   * 
   * This parameter is required.
   */
  listQuery?: ListAlertEventsRequestListQuery;
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
      listQuery: ListAlertEventsRequestListQuery,
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

