// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduleMonitorRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The list of alert cause types. Valid values: FAILED (the task execution failed), TIME_OUT (the task execution timed out), UNFINISHED (the task did not generate output), SUCCESS (the task execution succeeded), and DATA_DELAY (the data is delayed).
   */
  alertReasonList?: string[];
  /**
   * @remarks
   * The keyword for search. Supports fuzzy matching for monitored task names. If this parameter is empty or not specified, no filtering is applied.
   * 
   * @example
   * dwd_order_detail
   */
  keyWord?: string;
  /**
   * @remarks
   * The list of logical field IDs.
   */
  logicFieldIdList?: number[];
  /**
   * @remarks
   * The list of logical table IDs.
   */
  logicalTableIdList?: number[];
  /**
   * @remarks
   * The list of on-call schedule IDs.
   */
  onCallTableList?: string[];
  /**
   * @remarks
   * The list of user IDs of the creators of monitored objects.
   */
  ownerList?: string[];
  /**
   * @remarks
   * The current page number. Pages start from 1. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of project IDs. If this parameter is empty, all projects that the current user has permissions on are automatically queried.
   */
  projectIds?: number[];
  /**
   * @remarks
   * The list of notification method types. Valid values: PHONE (phone call), MESSAGE (text message), EMAIL (email), DING_TALK (DingTalk), FEISHU (Lark), WECHAT (WeChat), and CUSTOM (custom channel).
   */
  receivedWayTypeList?: string[];
  /**
   * @remarks
   * The list of user IDs of the recipients.
   */
  receiverList?: string[];
  /**
   * @remarks
   * The list of monitored object types. Valid values: LOGICAL_FIELD (logical field), OND_ID_NODE (logical table node), SCHEDULE_PHYSICAL_NODE (periodically scheduled physical task), MANUAL_PHYSICAL_NODE (manually scheduled physical task), ODM_NODE (source path task), LOGICAL_TABLE_NODE (logical table task), and PROJECT (project).
   * 
   * This parameter is required.
   */
  typeList?: string[];
  static names(): { [key: string]: string } {
    return {
      alertReasonList: 'AlertReasonList',
      keyWord: 'KeyWord',
      logicFieldIdList: 'LogicFieldIdList',
      logicalTableIdList: 'LogicalTableIdList',
      onCallTableList: 'OnCallTableList',
      ownerList: 'OwnerList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      projectIds: 'ProjectIds',
      receivedWayTypeList: 'ReceivedWayTypeList',
      receiverList: 'ReceiverList',
      typeList: 'TypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertReasonList: { 'type': 'array', 'itemType': 'string' },
      keyWord: 'string',
      logicFieldIdList: { 'type': 'array', 'itemType': 'number' },
      logicalTableIdList: { 'type': 'array', 'itemType': 'number' },
      onCallTableList: { 'type': 'array', 'itemType': 'string' },
      ownerList: { 'type': 'array', 'itemType': 'string' },
      pageNo: 'number',
      pageSize: 'number',
      projectIds: { 'type': 'array', 'itemType': 'number' },
      receivedWayTypeList: { 'type': 'array', 'itemType': 'string' },
      receiverList: { 'type': 'array', 'itemType': 'string' },
      typeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.alertReasonList)) {
      $dara.Model.validateArray(this.alertReasonList);
    }
    if(Array.isArray(this.logicFieldIdList)) {
      $dara.Model.validateArray(this.logicFieldIdList);
    }
    if(Array.isArray(this.logicalTableIdList)) {
      $dara.Model.validateArray(this.logicalTableIdList);
    }
    if(Array.isArray(this.onCallTableList)) {
      $dara.Model.validateArray(this.onCallTableList);
    }
    if(Array.isArray(this.ownerList)) {
      $dara.Model.validateArray(this.ownerList);
    }
    if(Array.isArray(this.projectIds)) {
      $dara.Model.validateArray(this.projectIds);
    }
    if(Array.isArray(this.receivedWayTypeList)) {
      $dara.Model.validateArray(this.receivedWayTypeList);
    }
    if(Array.isArray(this.receiverList)) {
      $dara.Model.validateArray(this.receiverList);
    }
    if(Array.isArray(this.typeList)) {
      $dara.Model.validateArray(this.typeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The query conditions for scheduling monitoring and alerting.
   * 
   * This parameter is required.
   */
  listQuery?: ListScheduleMonitorRequestListQuery;
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
  /**
   * @remarks
   * The user ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListScheduleMonitorRequestListQuery,
      opTenantId: 'number',
      opUserId: 'string',
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

