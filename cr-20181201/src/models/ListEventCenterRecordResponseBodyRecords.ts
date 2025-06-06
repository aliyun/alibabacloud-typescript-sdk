// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventCenterRecordResponseBodyRecords extends $dara.Model {
  /**
   * @remarks
   * The time when the event was created.
   * 
   * @example
   * 1638188622000
   */
  createTime?: number;
  /**
   * @remarks
   * The event notification channel.
   * 
   * @example
   * EVENT_BRIDGE
   */
  eventChannel?: string;
  /**
   * @remarks
   * The ID of the event notification.
   * 
   * @example
   * 7d478419-61df-49e5-b92b-30ce730c2127
   */
  eventNotifyId?: string;
  /**
   * @remarks
   * The notification method. Valid values:
   * 
   * *   `http`: The notification is sent over HTTP.
   * *   `https`: The notification is sent over HTTPS.
   * *   `dingding`: The notification is sent by using DingTalk.
   * 
   * @example
   * http
   */
  eventNotifyMethod?: string;
  /**
   * @remarks
   * The type of the event.
   * 
   * @example
   * cr:Artifact:DeliveryChainCompleted
   */
  eventType?: string;
  /**
   * @remarks
   * The ID of the instance.
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
   * The ID of the event record.
   * 
   * @example
   * crecrr-ctdbzwtkpr*****
   */
  recordId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * ruby-2.4.0
   */
  repoName?: string;
  /**
   * @remarks
   * The ID of the event notification rule.
   * 
   * @example
   * crecr-n6pbhgjxtla*****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the event notification rule.
   * 
   * @example
   * chain-demo
   */
  ruleName?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * ruby-2.4.0
   */
  tag?: string;
  /**
   * @remarks
   * The time when the event was last updated.
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

