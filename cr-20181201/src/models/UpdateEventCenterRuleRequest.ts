// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventCenterRuleRequest extends $dara.Model {
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
   * The event configuration.
   * 
   * @example
   * {
   *         "notifyMethod":"http",
   *         "notifyConfig":{
   *             "Url":"http://www.aliyundoc.com",
   *             "id":"MaAV3HgTkO5Fh8l1V********",
   *         },
   *         "notifyFilter":{}
   *     }
   */
  eventConfig?: string;
  /**
   * @remarks
   * The event scope. Valid values:
   * 
   * *   `INSTANCE`
   * *   `NAMESPACE`
   * *   `REPO`
   * 
   * Default value: `INSTANCE`
   * 
   * @example
   * INSTANCE
   */
  eventScope?: string;
  /**
   * @remarks
   * The type of the event. Valid values:
   * 
   * *   `cr:Artifact:DeliveryChainCompleted`: The delivery chain is processed.
   * *   `cr:Artifact:SynchronizationCompleted`: The image is replicated.
   * *   `cr:Artifact:BuildCompleted`: The image is built.
   * *   `cr:Artifact:ScanCompleted`: The image is scanned.
   * *   `cr:Artifact:SigningCompleted`: The image is signed.
   * 
   * @example
   * cr:Artifact:DeliveryChainCompleted
   */
  eventType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The namespaces to which the event notification rule applies.
   * 
   * @example
   * ns
   */
  namespaces?: string[];
  /**
   * @remarks
   * The names of the repositories to which the event notification rule applies.
   * 
   * @example
   * reponame
   */
  repoNames?: string[];
  /**
   * @remarks
   * The regular expression for image tags.
   * 
   * @example
   * .*
   */
  repoTagFilterPattern?: string;
  /**
   * @remarks
   * The ID of the event notification rule.
   * 
   * This parameter is required.
   * 
   * @example
   * crecr-n6pbhgjxt*****
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
  static names(): { [key: string]: string } {
    return {
      eventChannel: 'EventChannel',
      eventConfig: 'EventConfig',
      eventScope: 'EventScope',
      eventType: 'EventType',
      instanceId: 'InstanceId',
      namespaces: 'Namespaces',
      repoNames: 'RepoNames',
      repoTagFilterPattern: 'RepoTagFilterPattern',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventChannel: 'string',
      eventConfig: 'string',
      eventScope: 'string',
      eventType: 'string',
      instanceId: 'string',
      namespaces: { 'type': 'array', 'itemType': 'string' },
      repoNames: { 'type': 'array', 'itemType': 'string' },
      repoTagFilterPattern: 'string',
      ruleId: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.namespaces)) {
      $dara.Model.validateArray(this.namespaces);
    }
    if(Array.isArray(this.repoNames)) {
      $dara.Model.validateArray(this.repoNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

