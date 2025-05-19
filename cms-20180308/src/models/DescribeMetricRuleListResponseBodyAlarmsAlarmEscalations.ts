// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsCritical } from "./DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsCritical";
import { DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsInfo } from "./DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsInfo";
import { DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsWarn } from "./DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsWarn";


export class DescribeMetricRuleListResponseBodyAlarmsAlarmEscalations extends $dara.Model {
  critical?: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsCritical;
  info?: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsInfo;
  warn?: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsCritical,
      info: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsInfo,
      warn: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsWarn,
    };
  }

  validate() {
    if(this.critical && typeof (this.critical as any).validate === 'function') {
      (this.critical as any).validate();
    }
    if(this.info && typeof (this.info as any).validate === 'function') {
      (this.info as any).validate();
    }
    if(this.warn && typeof (this.warn as any).validate === 'function') {
      (this.warn as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

