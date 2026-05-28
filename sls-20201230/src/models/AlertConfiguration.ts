// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertTag } from "./AlertTag";
import { ConditionConfiguration } from "./ConditionConfiguration";
import { GroupConfiguration } from "./GroupConfiguration";
import { JoinConfiguration } from "./JoinConfiguration";
import { PolicyConfiguration } from "./PolicyConfiguration";
import { AlertQuery } from "./AlertQuery";
import { SeverityConfiguration } from "./SeverityConfiguration";
import { SinkAlerthubConfiguration } from "./SinkAlerthubConfiguration";
import { SinkCmsConfiguration } from "./SinkCmsConfiguration";
import { SinkEventStoreConfiguration } from "./SinkEventStoreConfiguration";
import { TemplateConfiguration } from "./TemplateConfiguration";


export class AlertConfiguration extends $dara.Model {
  /**
   * @remarks
   * The annotations of the alert rule.
   */
  annotations?: AlertTag[];
  /**
   * @remarks
   * Specifies whether to allow the system to automatically add annotations to the alert rule.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  autoAnnotation?: boolean;
  /**
   * @remarks
   * The alert trigger conditions.
   */
  conditionConfiguration?: ConditionConfiguration;
  /**
   * @remarks
   * The ID of the dashboard associated with the alert rule.
   * 
   * @example
   * dasnboardExample
   */
  dashboard?: string;
  /**
   * @remarks
   * The configurations of group evaluation.
   * 
   * This parameter is required.
   */
  groupConfiguration?: GroupConfiguration;
  /**
   * @remarks
   * The set operation configurations for the query statements of the alert rule.
   */
  joinConfigurations?: JoinConfiguration[];
  /**
   * @remarks
   * The labels of the alert rule.
   */
  labels?: AlertTag[];
  /**
   * @remarks
   * The time when a paused alert rule is resumed.
   * 
   * @example
   * 1698907508
   */
  muteUntil?: number;
  /**
   * @remarks
   * Specifies whether to enable the no-data alert feature.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  noDataFire?: boolean;
  /**
   * @remarks
   * The severity of the no-data alert.
   * 
   * @example
   * 6
   */
  noDataSeverity?: number;
  /**
   * @remarks
   * The notification configurations of Simple Log Service.
   */
  policyConfiguration?: PolicyConfiguration;
  /**
   * @remarks
   * The query statements.
   * 
   * This parameter is required.
   */
  queryList?: AlertQuery[];
  /**
   * @remarks
   * Specifies whether to send a recovery notification after an alert is cleared.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  sendResolved?: boolean;
  /**
   * @remarks
   * The alert severity configurations.
   * 
   * This parameter is required.
   */
  severityConfigurations?: SeverityConfiguration[];
  /**
   * @remarks
   * The configurations that allow alerts to be sent to the notification system of Simple Log Service.
   */
  sinkAlerthub?: SinkAlerthubConfiguration;
  /**
   * @remarks
   * The configurations that allow alerts to be sent to CloudMonitor Event Center.
   */
  sinkCms?: SinkCmsConfiguration;
  /**
   * @remarks
   * The configurations that allow alerts to be sent to an Eventstore.
   */
  sinkEventStore?: SinkEventStoreConfiguration;
  /**
   * @remarks
   * The custom tags of the alert rule.
   */
  tags?: string[];
  /**
   * @remarks
   * The alert template configurations.
   */
  templateConfiguration?: TemplateConfiguration;
  /**
   * @remarks
   * The maximum number of consecutive times that the trigger condition is met.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  threshold?: number;
  /**
   * @remarks
   * The type of the alert rule.
   * 
   * @example
   * default
   */
  type?: string;
  /**
   * @remarks
   * The version.
   * 
   * This parameter is required.
   * 
   * @example
   * 2.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'annotations',
      autoAnnotation: 'autoAnnotation',
      conditionConfiguration: 'conditionConfiguration',
      dashboard: 'dashboard',
      groupConfiguration: 'groupConfiguration',
      joinConfigurations: 'joinConfigurations',
      labels: 'labels',
      muteUntil: 'muteUntil',
      noDataFire: 'noDataFire',
      noDataSeverity: 'noDataSeverity',
      policyConfiguration: 'policyConfiguration',
      queryList: 'queryList',
      sendResolved: 'sendResolved',
      severityConfigurations: 'severityConfigurations',
      sinkAlerthub: 'sinkAlerthub',
      sinkCms: 'sinkCms',
      sinkEventStore: 'sinkEventStore',
      tags: 'tags',
      templateConfiguration: 'templateConfiguration',
      threshold: 'threshold',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: { 'type': 'array', 'itemType': AlertTag },
      autoAnnotation: 'boolean',
      conditionConfiguration: ConditionConfiguration,
      dashboard: 'string',
      groupConfiguration: GroupConfiguration,
      joinConfigurations: { 'type': 'array', 'itemType': JoinConfiguration },
      labels: { 'type': 'array', 'itemType': AlertTag },
      muteUntil: 'number',
      noDataFire: 'boolean',
      noDataSeverity: 'number',
      policyConfiguration: PolicyConfiguration,
      queryList: { 'type': 'array', 'itemType': AlertQuery },
      sendResolved: 'boolean',
      severityConfigurations: { 'type': 'array', 'itemType': SeverityConfiguration },
      sinkAlerthub: SinkAlerthubConfiguration,
      sinkCms: SinkCmsConfiguration,
      sinkEventStore: SinkEventStoreConfiguration,
      tags: { 'type': 'array', 'itemType': 'string' },
      templateConfiguration: TemplateConfiguration,
      threshold: 'number',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.annotations)) {
      $dara.Model.validateArray(this.annotations);
    }
    if(this.conditionConfiguration && typeof (this.conditionConfiguration as any).validate === 'function') {
      (this.conditionConfiguration as any).validate();
    }
    if(this.groupConfiguration && typeof (this.groupConfiguration as any).validate === 'function') {
      (this.groupConfiguration as any).validate();
    }
    if(Array.isArray(this.joinConfigurations)) {
      $dara.Model.validateArray(this.joinConfigurations);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.policyConfiguration && typeof (this.policyConfiguration as any).validate === 'function') {
      (this.policyConfiguration as any).validate();
    }
    if(Array.isArray(this.queryList)) {
      $dara.Model.validateArray(this.queryList);
    }
    if(Array.isArray(this.severityConfigurations)) {
      $dara.Model.validateArray(this.severityConfigurations);
    }
    if(this.sinkAlerthub && typeof (this.sinkAlerthub as any).validate === 'function') {
      (this.sinkAlerthub as any).validate();
    }
    if(this.sinkCms && typeof (this.sinkCms as any).validate === 'function') {
      (this.sinkCms as any).validate();
    }
    if(this.sinkEventStore && typeof (this.sinkEventStore as any).validate === 'function') {
      (this.sinkEventStore as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.templateConfiguration && typeof (this.templateConfiguration as any).validate === 'function') {
      (this.templateConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

