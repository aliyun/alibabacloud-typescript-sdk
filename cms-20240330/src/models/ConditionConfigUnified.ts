// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CompareList } from "./CompareList";
import { CloudMonitoringCompositeEscalation } from "./CloudMonitoringCompositeEscalation";
import { CloudMonitoringExpressEscalation } from "./CloudMonitoringExpressEscalation";
import { CloudMonitoringPrometheusEscalation } from "./CloudMonitoringPrometheusEscalation";
import { CloudMonitoringSimpleEscalation } from "./CloudMonitoringSimpleEscalation";
import { ThresholdList } from "./ThresholdList";
import { Triggers } from "./Triggers";


export class ConditionConfigUnified extends $dara.Model {
  aggregate?: string;
  alertCount?: number;
  compareList?: CompareList[];
  compositeEscalation?: CloudMonitoringCompositeEscalation;
  countOperator?: string;
  countThreshold?: number;
  durationSecs?: number;
  enableSeveritySuppression?: boolean;
  escalationType?: string;
  expressEscalation?: CloudMonitoringExpressEscalation;
  legacyRaw?: string;
  legacyType?: string;
  matchField?: string;
  matchOperator?: string;
  matchValue?: string;
  max?: number;
  min?: number;
  noDataAlertLevel?: string;
  noDataAlertSeverity?: string;
  noDataAppendValue?: number;
  noDataPolicy?: string;
  operator?: string;
  prometheus?: CloudMonitoringPrometheusEscalation;
  relation?: string;
  severity?: string;
  simpleEscalation?: CloudMonitoringSimpleEscalation;
  threshold?: number;
  thresholdList?: ThresholdList[];
  triggers?: Triggers[];
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  yoyTimeUnit?: string;
  yoyTimeValue?: number;
  static names(): { [key: string]: string } {
    return {
      aggregate: 'aggregate',
      alertCount: 'alertCount',
      compareList: 'compareList',
      compositeEscalation: 'compositeEscalation',
      countOperator: 'countOperator',
      countThreshold: 'countThreshold',
      durationSecs: 'durationSecs',
      enableSeveritySuppression: 'enableSeveritySuppression',
      escalationType: 'escalationType',
      expressEscalation: 'expressEscalation',
      legacyRaw: 'legacyRaw',
      legacyType: 'legacyType',
      matchField: 'matchField',
      matchOperator: 'matchOperator',
      matchValue: 'matchValue',
      max: 'max',
      min: 'min',
      noDataAlertLevel: 'noDataAlertLevel',
      noDataAlertSeverity: 'noDataAlertSeverity',
      noDataAppendValue: 'noDataAppendValue',
      noDataPolicy: 'noDataPolicy',
      operator: 'operator',
      prometheus: 'prometheus',
      relation: 'relation',
      severity: 'severity',
      simpleEscalation: 'simpleEscalation',
      threshold: 'threshold',
      thresholdList: 'thresholdList',
      triggers: 'triggers',
      type: 'type',
      yoyTimeUnit: 'yoyTimeUnit',
      yoyTimeValue: 'yoyTimeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregate: 'string',
      alertCount: 'number',
      compareList: { 'type': 'array', 'itemType': CompareList },
      compositeEscalation: CloudMonitoringCompositeEscalation,
      countOperator: 'string',
      countThreshold: 'number',
      durationSecs: 'number',
      enableSeveritySuppression: 'boolean',
      escalationType: 'string',
      expressEscalation: CloudMonitoringExpressEscalation,
      legacyRaw: 'string',
      legacyType: 'string',
      matchField: 'string',
      matchOperator: 'string',
      matchValue: 'string',
      max: 'number',
      min: 'number',
      noDataAlertLevel: 'string',
      noDataAlertSeverity: 'string',
      noDataAppendValue: 'number',
      noDataPolicy: 'string',
      operator: 'string',
      prometheus: CloudMonitoringPrometheusEscalation,
      relation: 'string',
      severity: 'string',
      simpleEscalation: CloudMonitoringSimpleEscalation,
      threshold: 'number',
      thresholdList: { 'type': 'array', 'itemType': ThresholdList },
      triggers: { 'type': 'array', 'itemType': Triggers },
      type: 'string',
      yoyTimeUnit: 'string',
      yoyTimeValue: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.compareList)) {
      $dara.Model.validateArray(this.compareList);
    }
    if(this.compositeEscalation && typeof (this.compositeEscalation as any).validate === 'function') {
      (this.compositeEscalation as any).validate();
    }
    if(this.expressEscalation && typeof (this.expressEscalation as any).validate === 'function') {
      (this.expressEscalation as any).validate();
    }
    if(this.prometheus && typeof (this.prometheus as any).validate === 'function') {
      (this.prometheus as any).validate();
    }
    if(this.simpleEscalation && typeof (this.simpleEscalation as any).validate === 'function') {
      (this.simpleEscalation as any).validate();
    }
    if(Array.isArray(this.thresholdList)) {
      $dara.Model.validateArray(this.thresholdList);
    }
    if(Array.isArray(this.triggers)) {
      $dara.Model.validateArray(this.triggers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

