// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TriggerConditions } from "./TriggerConditions";


export class Triggers extends $dara.Model {
  comparisonOperator?: string;
  conditions?: TriggerConditions[];
  countOperator?: string;
  countThreshold?: number;
  durationSecs?: number;
  expressionType?: string;
  logicOperator?: string;
  matchField?: string;
  matchOperator?: string;
  matchValue?: string;
  max?: number;
  metricName?: string;
  min?: number;
  operator?: string;
  period?: number;
  preCondition?: string;
  queryName?: string;
  severity?: string;
  statistics?: string;
  threshold?: any;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'comparisonOperator',
      conditions: 'conditions',
      countOperator: 'countOperator',
      countThreshold: 'countThreshold',
      durationSecs: 'durationSecs',
      expressionType: 'expressionType',
      logicOperator: 'logicOperator',
      matchField: 'matchField',
      matchOperator: 'matchOperator',
      matchValue: 'matchValue',
      max: 'max',
      metricName: 'metricName',
      min: 'min',
      operator: 'operator',
      period: 'period',
      preCondition: 'preCondition',
      queryName: 'queryName',
      severity: 'severity',
      statistics: 'statistics',
      threshold: 'threshold',
      times: 'times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      conditions: { 'type': 'array', 'itemType': TriggerConditions },
      countOperator: 'string',
      countThreshold: 'number',
      durationSecs: 'number',
      expressionType: 'string',
      logicOperator: 'string',
      matchField: 'string',
      matchOperator: 'string',
      matchValue: 'string',
      max: 'number',
      metricName: 'string',
      min: 'number',
      operator: 'string',
      period: 'number',
      preCondition: 'string',
      queryName: 'string',
      severity: 'string',
      statistics: 'string',
      threshold: 'any',
      times: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

