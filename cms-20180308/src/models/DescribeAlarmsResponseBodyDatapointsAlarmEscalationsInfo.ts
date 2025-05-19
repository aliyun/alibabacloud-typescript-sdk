// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlarmsResponseBodyDatapointsAlarmEscalationsInfo extends $dara.Model {
  alertSensitivity?: string;
  comparisonOperator?: string;
  historyDataRange?: string;
  preCondition?: string;
  statistics?: string;
  threshold?: string;
  times?: string;
  static names(): { [key: string]: string } {
    return {
      alertSensitivity: 'AlertSensitivity',
      comparisonOperator: 'ComparisonOperator',
      historyDataRange: 'HistoryDataRange',
      preCondition: 'PreCondition',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertSensitivity: 'string',
      comparisonOperator: 'string',
      historyDataRange: 'string',
      preCondition: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

