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
  annotations?: AlertTag[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  autoAnnotation?: boolean;
  conditionConfiguration?: ConditionConfiguration;
  /**
   * @example
   * dasnboardExample
   */
  dashboard?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  groupConfiguration?: GroupConfiguration;
  joinConfigurations?: JoinConfiguration[];
  labels?: AlertTag[];
  /**
   * @example
   * 1698907508
   */
  muteUntil?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  noDataFire?: boolean;
  /**
   * @example
   * 6
   */
  noDataSeverity?: number;
  policyConfiguration?: PolicyConfiguration;
  /**
   * @remarks
   * This parameter is required.
   */
  queryList?: AlertQuery[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  sendResolved?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  severityConfigurations?: SeverityConfiguration[];
  sinkAlerthub?: SinkAlerthubConfiguration;
  sinkCms?: SinkCmsConfiguration;
  sinkEventStore?: SinkEventStoreConfiguration;
  tags?: string[];
  templateConfiguration?: TemplateConfiguration;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  threshold?: number;
  /**
   * @example
   * default
   */
  type?: string;
  /**
   * @remarks
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

