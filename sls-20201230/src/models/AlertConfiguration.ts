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
   * The alert annotations.
   */
  annotations?: AlertTag[];
  /**
   * @remarks
   * Specifies whether to enable automatic annotation.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  autoAnnotation?: boolean;
  /**
   * @remarks
   * The alert trigger condition.
   */
  conditionConfiguration?: ConditionConfiguration;
  /**
   * @remarks
   * The ID of the dashboard to which the alert is attached.
   * 
   * @example
   * DasnboardExample
   */
  dashboard?: string;
  /**
   * @remarks
   * The group evaluation configuration.
   * 
   * This parameter is required.
   */
  groupConfiguration?: GroupConfiguration;
  /**
   * @remarks
   * The configurations for joining the results of query statements.
   */
  joinConfigurations?: JoinConfiguration[];
  /**
   * @remarks
   * The alert labels.
   */
  labels?: AlertTag[];
  /**
   * @remarks
   * The time until which the alert is muted.
   * 
   * @example
   * 1698907508
   */
  muteUntil?: number;
  /**
   * @remarks
   * Specifies whether to enable no-data alerts.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  noDataFire?: boolean;
  /**
   * @remarks
   * The severity of no-data alerts.
   * 
   * @example
   * 6
   */
  noDataSeverity?: number;
  /**
   * @remarks
   * The configuration for the SLS alert notification service.
   */
  policyConfiguration?: PolicyConfiguration;
  /**
   * @remarks
   * The list of query statements.
   * 
   * This parameter is required.
   */
  queryList?: AlertQuery[];
  /**
   * @remarks
   * Specifies whether to send recovery alerts.
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
   * The configuration for sending alerts to the SLS alert management service.
   */
  sinkAlerthub?: SinkAlerthubConfiguration;
  /**
   * @remarks
   * The configuration for sending alerts to Cloud Monitor.
   */
  sinkCms?: SinkCmsConfiguration;
  /**
   * @remarks
   * The configuration for sending alerts to the eventstore.
   */
  sinkEventStore?: SinkEventStoreConfiguration;
  /**
   * @remarks
   * The custom alert tags.
   */
  tags?: string[];
  /**
   * @remarks
   * The alert template configuration.
   */
  templateConfiguration?: TemplateConfiguration;
  /**
   * @remarks
   * The consecutive trigger threshold.
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

