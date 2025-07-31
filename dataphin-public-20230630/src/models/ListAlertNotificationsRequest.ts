// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertNotificationsRequestListQuery extends $dara.Model {
  alertReasonList?: string[];
  channelTypeList?: string[];
  customChannelIdList?: string[];
  /**
   * @example
   * test
   */
  keyword?: string;
  monitoredItemIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-11-27 13:47:00
   */
  notifyEndTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-11-16 00:00:00
   */
  notifyStartTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  sourceSystem?: string;
  statusList?: string[];
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
  listQuery?: ListAlertNotificationsRequestListQuery;
  /**
   * @remarks
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

