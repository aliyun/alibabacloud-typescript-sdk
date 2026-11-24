// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventCenterRecordResponseBodyRecords extends $dara.Model {
  /**
   * @remarks
   * The creation time, in UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1638188622000
   */
  createTime?: number;
  /**
   * @remarks
   * The notification channel.
   * 
   * @example
   * EVENT_BRIDGE
   */
  eventChannel?: string;
  /**
   * @remarks
   * The event ID of the downstream notification.
   * 
   * @example
   * 7d478419-61df-49e5-b92b-30ce730c2127
   */
  eventNotifyId?: string;
  /**
   * @remarks
   * The notification method. Valid values:
   * 
   * - `http`: HTTP notification.
   * 
   * - `https`: HTTPS notification.
   * 
   * - `dingding`: DingTalk notification.
   * 
   * @example
   * http
   */
  eventNotifyMethod?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * cr:Artifact:DeliveryChainCompleted
   */
  eventType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-gl34plsa****
   */
  instanceId?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * mychain
   */
  namespace?: string;
  /**
   * @remarks
   * The event record ID.
   * 
   * @example
   * crecrr-ctdbzwtkpr*****
   */
  recordId?: string;
  /**
   * @remarks
   * The repository name.
   * 
   * @example
   * ruby-2.4.0
   */
  repoName?: string;
  /**
   * @remarks
   * The event rule ID.
   * 
   * @example
   * crecr-n6pbhgjxtla*****
   */
  ruleId?: string;
  /**
   * @remarks
   * The event rule name.
   * 
   * @example
   * chain-demo
   */
  ruleName?: string;
  /**
   * @remarks
   * The label.
   * 
   * @example
   * ruby-2.4.0
   */
  tag?: string;
  /**
   * @remarks
   * The update time, in UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1638188622000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      eventChannel: 'EventChannel',
      eventNotifyId: 'EventNotifyId',
      eventNotifyMethod: 'EventNotifyMethod',
      eventType: 'EventType',
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      recordId: 'RecordId',
      repoName: 'RepoName',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      tag: 'Tag',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      eventChannel: 'string',
      eventNotifyId: 'string',
      eventNotifyMethod: 'string',
      eventType: 'string',
      instanceId: 'string',
      namespace: 'string',
      recordId: 'string',
      repoName: 'string',
      ruleId: 'string',
      ruleName: 'string',
      tag: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventCenterRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The event history list.
   * 
   * @example
   * []
   */
  records?: ListEventCenterRecordResponseBodyRecords[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 665C7A5E-BAEC-5BCD-AF9F-5F9260D672BF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of event history records.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      records: 'Records',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListEventCenterRecordResponseBodyRecords },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

