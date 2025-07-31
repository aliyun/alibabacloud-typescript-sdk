// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityAlertRulesResponseBodyPageInfoDataQualityAlertRulesNotificationReceivers extends $dara.Model {
  /**
   * @example
   * {"atAll":true}
   */
  extension?: string;
  /**
   * @example
   * AliUid
   */
  receiverType?: string;
  receiverValues?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      receiverType: 'ReceiverType',
      receiverValues: 'ReceiverValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      receiverType: 'string',
      receiverValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.receiverValues)) {
      $dara.Model.validateArray(this.receiverValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityAlertRulesResponseBodyPageInfoDataQualityAlertRulesNotification extends $dara.Model {
  channels?: string[];
  receivers?: ListDataQualityAlertRulesResponseBodyPageInfoDataQualityAlertRulesNotificationReceivers[];
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      receivers: 'Receivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': 'string' },
      receivers: { 'type': 'array', 'itemType': ListDataQualityAlertRulesResponseBodyPageInfoDataQualityAlertRulesNotificationReceivers },
    };
  }

  validate() {
    if(Array.isArray(this.channels)) {
      $dara.Model.validateArray(this.channels);
    }
    if(Array.isArray(this.receivers)) {
      $dara.Model.validateArray(this.receivers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityAlertRulesResponseBodyPageInfoDataQualityAlertRulesTarget extends $dara.Model {
  ids?: number[];
  /**
   * @example
   * DataQualityScan
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityAlertRulesResponseBodyPageInfoDataQualityAlertRules extends $dara.Model {
  /**
   * @example
   * results.any { r -> r.status == \\"fail\\" && r.rule.severity == \\"High\\" }
   */
  condition?: string;
  /**
   * @example
   * 26433
   */
  id?: number;
  notification?: ListDataQualityAlertRulesResponseBodyPageInfoDataQualityAlertRulesNotification;
  /**
   * @example
   * 59094
   */
  projectId?: number;
  target?: ListDataQualityAlertRulesResponseBodyPageInfoDataQualityAlertRulesTarget;
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      id: 'Id',
      notification: 'Notification',
      projectId: 'ProjectId',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      id: 'number',
      notification: ListDataQualityAlertRulesResponseBodyPageInfoDataQualityAlertRulesNotification,
      projectId: 'number',
      target: ListDataQualityAlertRulesResponseBodyPageInfoDataQualityAlertRulesTarget,
    };
  }

  validate() {
    if(this.notification && typeof (this.notification as any).validate === 'function') {
      (this.notification as any).validate();
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityAlertRulesResponseBodyPageInfo extends $dara.Model {
  dataQualityAlertRules?: ListDataQualityAlertRulesResponseBodyPageInfoDataQualityAlertRules[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 335
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataQualityAlertRules: 'DataQualityAlertRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityAlertRules: { 'type': 'array', 'itemType': ListDataQualityAlertRulesResponseBodyPageInfoDataQualityAlertRules },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataQualityAlertRules)) {
      $dara.Model.validateArray(this.dataQualityAlertRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityAlertRulesResponseBody extends $dara.Model {
  pageInfo?: ListDataQualityAlertRulesResponseBodyPageInfo;
  /**
   * @example
   * 0bc14115***159376359
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListDataQualityAlertRulesResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

