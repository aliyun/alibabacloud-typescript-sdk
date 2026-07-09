// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudMonitoringCompositeEscalationEntry extends $dara.Model {
  comparisonOperator?: string;
  metricName?: string;
  period?: number;
  preCondition?: string;
  statistics?: string;
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'comparisonOperator',
      metricName: 'metricName',
      period: 'period',
      preCondition: 'preCondition',
      statistics: 'statistics',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      metricName: 'string',
      period: 'number',
      preCondition: 'string',
      statistics: 'string',
      threshold: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

